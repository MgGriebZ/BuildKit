import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { chromium } from 'playwright';

const key = 'buildwithgriebz.cozy-room.baseline.v1';
const saved = style => JSON.stringify({ version: 1, roomId: 'cozy-room', objectId: 'lamp', lampStyle: style });
const url = 'http://127.0.0.1:5188';
const channel = process.env.COZY_BROWSER_CHANNEL || (process.platform === 'win32' ? 'msedge' : undefined);
const results = [];
const gameResults = [];
const errors = [];
const externalRequests = [];
let browser;
const server = spawn(process.execPath, ['scripts/serve.mjs'], { stdio: ['ignore', 'pipe', 'pipe'] });
try {
    await new Promise((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error('Local server did not start')), 10000);
        server.stdout.on('data', chunk => { if (String(chunk).includes('Cozy Room served')) { clearTimeout(timer); resolve(); } });
        server.on('exit', code => { clearTimeout(timer); reject(new Error(`Local server exited: ${code}`)); });
        server.stderr.on('data', chunk => process.stderr.write(chunk));
    });
    browser = await chromium.launch({ headless: true, ...(channel ? { channel } : {}) });
    await mkdir('artifacts/screenshots', { recursive: true });

    async function open(options = {}, seed = null, mode = '') {
        const context = await browser.newContext(options);
        await context.route('**/*', route => {
            if (!route.request().url().startsWith(url + '/')) {
                externalRequests.push(route.request().url()); return route.abort();
            }
            return route.continue();
        });
        await context.addInitScript(({ key, seed, mode }) => {
            const originalSet = Storage.prototype.setItem;
            if (localStorage.getItem('other-product-save') === null) originalSet.call(localStorage, 'other-product-save', 'keep-me');
            if (seed !== null && localStorage.getItem(key) === null) originalSet.call(localStorage, key, seed);
            window.__roomStorageWrites = [];
            Storage.prototype.setItem = function (name, value) {
                window.__roomStorageWrites.push(name);
                if (mode === 'denied' || (mode === 'write-fails' && name === key)) throw new DOMException('Unavailable', 'QuotaExceededError');
                return originalSet.call(this, name, value);
            };
            if (mode === 'denied') Storage.prototype.getItem = function () { throw new DOMException('Unavailable', 'SecurityError'); };
        }, { key, seed, mode });
        const page = await context.newPage();
        page.on('pageerror', error => errors.push(error.message));
        await page.goto(url);
        await page.getByTestId('lamp').waitFor();
        await page.waitForFunction(() => !document.querySelector('[data-testid="lamp"]').disabled);
        return { context, page };
    }
    async function style(page, expected) {
        await page.waitForFunction(expected => {
            const lamp = document.querySelector('[data-testid="lamp"]');
            return lamp && lamp.dataset.style === String(expected) && !lamp.disabled && lamp.dataset.busy === 'false';
        }, expected);
    }
    async function raw(page) { return page.evaluate(key => localStorage.getItem(key), key); }
    async function checkIsolation(page) {
        assert(await page.evaluate(key => window.__roomStorageWrites.every(name => name === key), key), 'Only the sample key may be written');
        assert.equal(await page.evaluate(() => localStorage.getItem('other-product-save')), 'keep-me');
    }
    async function checkLayout(page) {
        const lamp = await page.getByTestId('lamp').boundingBox();
        const room = await page.getByTestId('room-scene').boundingBox();
        assert(lamp.width >= 44 && lamp.height >= 44, 'Lamp target must be at least 44px');
        assert(lamp.x >= room.x && lamp.y >= room.y && lamp.x + lamp.width <= room.x + room.width && lamp.y + lamp.height <= room.y + room.height, 'Lamp should stay in the scene');
        assert(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), 'No horizontal overflow');
        const targets = [lamp];
        for (let star = 0; star < 3; star++) {
            const box = await page.getByTestId(`star-${star}`).boundingBox();
            assert(box.width >= 44 && box.height >= 44, 'Star target must be at least 44px');
            // Leave room for the 3px outline and its 5px offset inside the clipped scene.
            assert(box.x - 8 >= room.x && box.y - 8 >= room.y && box.x + box.width + 8 <= room.x + room.width && box.y + box.height + 8 <= room.y + room.height, 'Star and focus outline should stay in the scene');
            for (const other of targets)
                assert(box.x >= other.x + other.width || other.x >= box.x + box.width || box.y >= other.y + other.height || other.y >= box.y + box.height, 'Play targets should not overlap');
            targets.push(box);
        }
    }

    async function checkAcknowledgement(page, reduced = false) {
        const cue = page.getByTestId('style-acknowledgement');
        await cue.waitFor({ state: 'attached' });
        const observation = await cue.evaluate(el => ({
            display: getComputedStyle(el).display,
            animation: getComputedStyle(el).animationName,
            animations: el.getAnimations().map(a => ({ name: a.animationName, duration: a.effect.getTiming().duration }))
        }));
        if (reduced) {
            assert.equal(observation.display, 'none');
            assert.equal(observation.animation, 'none');
            assert.deepEqual(observation.animations, []);
        } else {
            assert.equal(observation.animation, 'lamp-acknowledge');
            assert(observation.animations.some(a => a.name === 'lamp-acknowledge' && a.duration === 480));
            // Sample the actual rendered cue at its peak, then allow it to finish.
            await cue.evaluate(el => {
                const animation = el.getAnimations()[0];
                animation.pause(); animation.currentTime = 168;
            });
            assert(await cue.evaluate(el => Number(getComputedStyle(el).opacity) > .4));
            await page.screenshot({ path: 'artifacts/screenshots/acknowledgement.png', fullPage: true });
            await cue.evaluate(el => el.getAnimations()[0].play());
            await page.waitForFunction(() => {
                const el = document.querySelector('[data-testid="style-acknowledgement"]');
                return el && el.getAnimations().length === 0 && getComputedStyle(el).opacity === '0';
            });
        }
    }

    {
        const { context, page } = await open({ viewport: { width: 1280, height: 900 } });
        await style(page, 0);
        await page.getByTestId('lamp').click(); await style(page, 1);
        assert.equal(JSON.parse(await raw(page)).lampStyle, 1);
        await checkAcknowledgement(page);
        await page.getByTestId('lamp').click(); await style(page, 2);
        assert.equal(JSON.parse(await raw(page)).lampStyle, 2);
        assert.match(await page.getByTestId('lamp').getAttribute('aria-label'), /Rose diamonds/);
        assert.equal(await page.locator('#shade-pattern path').getAttribute('d'), 'M9 2l6 7-6 7-6-7z');
        await page.reload(); await style(page, 2);
        assert.equal(await page.getByTestId('style-acknowledgement').count(), 0, 'Reload does not animate');
        assert.match(await page.getByTestId('save-status').innerText(), /Welcome back/);
        await page.getByTestId('lamp').focus();
        await page.keyboard.press('Enter'); await style(page, 0);
        assert(await page.getByTestId('lamp').evaluate(el => el === document.activeElement));
        await page.keyboard.press('Space'); await style(page, 1);
        assert(await page.getByTestId('lamp').evaluate(el => el === document.activeElement));
        await page.keyboard.press('Space'); await style(page, 2);
        await page.waitForFunction(() => document.querySelector('[data-testid="style-acknowledgement"]').getAnimations().length === 0);
        assert.notEqual(await page.getByTestId('lamp').evaluate(el => getComputedStyle(el).outlineStyle), 'none');
        await checkIsolation(page); await checkLayout(page);
        await page.screenshot({ path: 'artifacts/screenshots/desktop.png', fullPage: true });
        results.push('Desktop: three-style mouse/keyboard cycle, third-style save/reload, diamond cue, retained focus, calm 480ms acknowledgement and isolated writes');
        await context.close();
    }
    for (const [name, viewport] of [['tablet', { width: 1024, height: 768 }], ['narrow', { width: 390, height: 844 }]]) {
        const { context, page } = await open({ viewport, hasTouch: true });
        await page.getByTestId('lamp').tap(); await style(page, 1);
        await page.getByTestId('lamp').tap(); await style(page, 2);
        await page.reload(); await style(page, 2);
        await checkLayout(page);
        await page.screenshot({ path: `artifacts/screenshots/${name}.png`, fullPage: true });
        await page.getByTestId('lamp').tap(); await style(page, 0);
        await checkIsolation(page);
        results.push(`${name}: three-style emulated touch cycle + third-style reload + target and layout checks`);
        await context.close();
    }
    {
        const { context, page } = await open({ reducedMotion: 'reduce', viewport: { width: 1024, height: 768 } });
        await page.getByTestId('lamp').click(); await style(page, 1);
        await checkAcknowledgement(page, true);
        await page.getByTestId('lamp').click(); await style(page, 2);
        await checkAcknowledgement(page, true);
        assert(await page.evaluate(() => matchMedia('(prefers-reduced-motion: reduce)').matches));
        assert.equal(await page.getByTestId('lamp').evaluate(el => getComputedStyle(el).transitionDuration), '0s');
        await page.reload(); await style(page, 2);
        await page.emulateMedia({ reducedMotion: 'no-preference' });
        await page.getByTestId('lamp').click(); await style(page, 0);
        await page.emulateMedia({ reducedMotion: 'reduce' });
        await checkAcknowledgement(page, true);
        results.push('Reduced motion: third style saves/reloads; actual cue hidden with no animation, including preference change during feedback');
        await context.close();
    }
    for (const [name, seed, message] of [
        ['malformed', 'broken{', /couldn't be read/],
        ['future-version', '{"version":99,"unknown":"keep"}', /newer version/],
        ['unknown-style-3', saved(3), /couldn't be read/],
        ['missing-fields', '{"version":1}', /couldn't be read/]
    ]) {
        const { context, page } = await open({}, seed);
        assert.match(await page.getByTestId('save-status').innerText(), message);
        await page.getByTestId('lamp').click(); await style(page, 1);
        await page.getByTestId('lamp').click(); await style(page, 2);
        assert.equal(await raw(page), seed);
        assert.deepEqual(await page.evaluate(() => window.__roomStorageWrites), []);
        await page.reload(); await style(page, 0);
        assert.equal(await raw(page), seed);
        await page.getByText('Room care', { exact: true }).click();
        await page.getByTestId('reset-request').click();
        assert.equal(await raw(page), seed);
        await page.getByTestId('reset-cancel').click();
        assert.equal(await raw(page), seed);
        await page.getByTestId('reset-request').click();
        await page.getByTestId('reset-confirm-button').click(); await style(page, 0);
        assert.equal(JSON.parse(await raw(page)).lampStyle, 0);
        await page.reload(); await style(page, 0);
        await checkIsolation(page);
        results.push(`${name}: raw save preserved during play/cancel; explicit reset replaces only example save`);
        await context.close();
    }
    for (const originalStyle of [0, 1]) {
        const originalSave = saved(originalStyle);
        const { context, page } = await open({}, originalSave);
        await style(page, originalStyle);
        assert.equal(await raw(page), originalSave);
        assert.deepEqual(await page.evaluate(() => window.__roomStorageWrites), [], 'Loading an R1 save must not rewrite it');
        await page.reload(); await style(page, originalStyle);
        await page.getByTestId('lamp').click(); await style(page, originalStyle + 1);
        assert.equal(JSON.parse(await raw(page)).version, 1);
        assert.equal(JSON.parse(await raw(page)).lampStyle, originalStyle + 1);
        await page.reload(); await style(page, originalStyle + 1);
        await checkIsolation(page);
        results.push(`Original R1 v1 style ${originalStyle}: unchanged load/reload, continued cycling and v1 roundtrip`);
        await context.close();
    }
    {
        const { context, page } = await open({}, saved(0), 'write-fails');
        await page.getByTestId('lamp').click(); await style(page, 1);
        assert.match(await page.getByTestId('save-status').innerText(), /couldn't save/);
        assert.equal(await raw(page), saved(0));
        await page.getByTestId('lamp').click(); await style(page, 2);
        assert.equal(await raw(page), saved(0));
        await page.getByText('Room care', { exact: true }).click();
        await page.getByTestId('reset-request').click();
        await page.getByTestId('reset-confirm-button').click(); await style(page, 0);
        assert.equal(await raw(page), saved(0));
        await page.reload(); await style(page, 0);
        await checkIsolation(page);
        results.push('Write failure: third-style play and failed reset preserve earlier save; reload restores it');
        await context.close();
    }
    {
        const { context, page } = await open({}, null, 'denied');
        assert.match(await page.getByTestId('save-status').innerText(), /can't remember/);
        await page.getByTestId('lamp').click(); await style(page, 1);
        await page.getByTestId('lamp').click(); await style(page, 2);
        await page.getByText('Room care', { exact: true }).click();
        await page.getByTestId('reset-request').click();
        await page.getByTestId('reset-confirm-button').click(); await style(page, 0);
        assert.match(await page.getByTestId('save-status').innerText(), /couldn't save/);
        results.push('Unavailable storage: play and explicit volatile reset remain usable');
        await context.close();
    }

    async function progress(page, count) {
        await page.waitForFunction(count => document.querySelector('[data-testid="round-status"]').textContent.startsWith(`${count}/3`), count);
        const status = page.getByTestId('round-status');
        assert.equal(await status.getAttribute('role'), 'status');
        assert.equal(await status.getAttribute('aria-live'), 'polite');
        assert.equal(await status.getAttribute('aria-atomic'), 'true');
        assert.equal(await page.getByTestId('replay').count(), count === 3 ? 1 : 0);
        if (count === 3) assert.match(await status.innerText(), /You found every star/);
    }
    async function collectAll(page, input = 'click', order = [0, 1, 2]) {
        let count = 0;
        for (const star of order) {
            const target = page.getByTestId(`star-${star}`);
            await target[input](); await progress(page, ++count);
            assert.equal(await target.getAttribute('aria-disabled'), 'true');
            assert.equal(await target.getAttribute('data-collected'), 'true');
            assert.match(await target.getAttribute('aria-label'), /star collected/);
            assert.equal(await target.locator('.star-check').count(), 1, 'A checkmark distinguishes collected stars without color');
            // Locator actions honor aria-disabled. Real pointer events still reach
            // these focusable buttons, so verify the application's repeat guard.
            const box = await target.boundingBox();
            if (input === 'tap') await page.touchscreen.tap(box.x + box.width / 2, box.y + box.height / 2);
            else await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
            await progress(page, count);
        }
    }
    async function replay(page, input = 'click') {
        await page.getByTestId('replay')[input](); await progress(page, 0);
        await page.waitForFunction(() => document.activeElement === document.querySelector('[data-testid="star-0"]'));
        for (let star = 0; star < 3; star++) {
            const target = page.getByTestId(`star-${star}`);
            assert.equal(await target.getAttribute('aria-disabled'), 'false');
            assert.equal(await target.getAttribute('data-collected'), 'false');
            assert.equal(await target.locator('.star-check').count(), 0);
        }
    }
    {
        const initialSave = saved(2);
        const { context, page } = await open({ viewport: { width: 1280, height: 900 } }, initialSave);
        await progress(page, 0);
        for (const [star, name] of ['window', 'bed', 'rug'].entries())
            assert.equal(await page.getByTestId(`star-${star}`).getAttribute('aria-label'), `Collect ${name} star`);
        await collectAll(page, 'click', [2, 0, 1]);
        assert.equal(await raw(page), initialSave);
        assert.deepEqual(await page.evaluate(() => window.__roomStorageWrites), [], 'Collecting does not write a save');
        await checkLayout(page);
        await page.screenshot({ path: 'artifacts/screenshots/game-complete.png', fullPage: true });
        await replay(page);
        assert.equal(await raw(page), initialSave);
        assert.deepEqual(await page.evaluate(() => window.__roomStorageWrites), [], 'Replay does not write a save');
        await page.getByTestId('star-1').click(); await progress(page, 1);
        await page.getByTestId('lamp').click(); await style(page, 0);
        await page.reload(); await style(page, 0); await progress(page, 0);
        await collectAll(page);
        await page.reload(); await style(page, 0); await progress(page, 0);
        await checkIsolation(page);
        gameResults.push('Mouse: out-of-order unique collection, repeated activation, completion/checkmarks, replay focus, partial/complete reload reset and unchanged lamp persistence');
        await context.close();
    }
    {
        const { context, page } = await open({ viewport: { width: 1280, height: 900 } });
        await page.getByTestId('lamp').focus();
        for (let star = 0; star < 3; star++) {
            await page.keyboard.press('Tab');
            const target = page.getByTestId(`star-${star}`);
            assert(await target.evaluate(el => el === document.activeElement), 'Native Tab order reaches each star');
            assert.notEqual(await target.evaluate(el => getComputedStyle(el).outlineStyle), 'none');
            await page.keyboard.press(star === 1 ? 'Space' : 'Enter'); await progress(page, star + 1);
            assert(await target.evaluate(el => el === document.activeElement), 'Collection retains focus');
            await page.keyboard.press('Space'); await progress(page, star + 1);
        }
        await page.keyboard.press('Tab');
        assert(await page.getByTestId('replay').evaluate(el => el === document.activeElement));
        await page.keyboard.press('Enter'); await progress(page, 0);
        await page.waitForFunction(() => document.activeElement === document.querySelector('[data-testid="star-0"]'));
        await page.keyboard.press('Enter'); await progress(page, 1);
        await checkLayout(page);
        await page.screenshot({ path: 'artifacts/screenshots/game-keyboard.png', fullPage: true });
        gameResults.push('Keyboard: Tab order, Enter/Space, retained focus after collection, polite atomic status and replay returning focus to first star');
        await context.close();
    }
    for (const [name, viewport] of [['tablet', { width: 1024, height: 768 }], ['narrow', { width: 390, height: 844 }], ['minimum', { width: 280, height: 800 }]]) {
        const { context, page } = await open({ viewport, hasTouch: true });
        await collectAll(page, 'tap', [1, 2, 0]);
        await checkLayout(page);
        await page.screenshot({ path: `artifacts/screenshots/game-${name}.png`, fullPage: true });
        await replay(page, 'tap');
        await page.getByTestId('lamp').tap(); await style(page, 1);
        await page.reload(); await style(page, 1); await progress(page, 0);
        await checkIsolation(page);
        gameResults.push(`${name}: emulated touch unique collection/replay, 44px targets with visible focus space/no overlap, reload reset and lamp regression`);
        await context.close();
    }
    {
        const { context, page } = await open({ reducedMotion: 'reduce' });
        await collectAll(page);
        assert.equal(await page.locator('.star-button').evaluateAll(els => els.flatMap(el => el.getAnimations({ subtree: true })).length), 0);
        await replay(page);
        await page.getByTestId('lamp').click(); await style(page, 1); await checkAcknowledgement(page, true);
        gameResults.push('Reduced motion: collection/completion/replay use static feedback; no star animation, existing lamp cue remains suppressed');
        await context.close();
    }
    {
        const seed = '{"version":99,"unknown":"keep"}';
        const { context, page } = await open({}, seed);
        await collectAll(page); await replay(page);
        assert.equal(await raw(page), seed);
        assert.deepEqual(await page.evaluate(() => window.__roomStorageWrites), []);
        await page.getByTestId('lamp').click(); await style(page, 1);
        await page.reload(); await style(page, 0); await progress(page, 0);
        assert.equal(await raw(page), seed);
        await checkIsolation(page);
        gameResults.push('Protected save: star play/replay never writes or replaces an unreadable future lamp save; lamp protection and round reload reset remain intact');
        await context.close();
    }
    {
        const { context, page } = await open({}, null, 'denied');
        await collectAll(page); await replay(page);
        assert.deepEqual(await page.evaluate(() => window.__roomStorageWrites), []);
        await page.getByTestId('lamp').click(); await style(page, 1);
        assert.match(await page.getByTestId('save-status').innerText(), /can't remember/);
        gameResults.push('Denied storage: star play/replay stays usable without storage calls; lamp play and persistence notice remain intact');
        await context.close();
    }
    {
        const initialSave = saved(2);
        const { context, page } = await open({}, initialSave, 'write-fails');
        await collectAll(page); await replay(page);
        await page.getByTestId('lamp').click(); await style(page, 0);
        assert.match(await page.getByTestId('save-status').innerText(), /couldn't save/);
        await collectAll(page); await replay(page);
        assert.equal(await raw(page), initialSave);
        assert.deepEqual(await page.evaluate(() => window.__roomStorageWrites), [key]);
        await page.reload(); await style(page, 2); await progress(page, 0);
        await checkIsolation(page);
        gameResults.push('Write failure: rounds remain playable, only the lamp attempts storage, previous save survives and reload resets the round');
        await context.close();
    }
    assert.deepEqual(errors, [], 'No unhandled browser exceptions');
    assert.deepEqual(externalRequests, [], 'No external runtime requests');
    const report = { slice: 'R3 three-star game validation', browser: browser.version(), channel: channel || 'chromium', lampRegressionResults: results, gameResults, errors, externalRequests, limitations: ['Touch is emulated; no physical device or human learner test.', 'Polite live-region markup/content were checked; no human screen-reader check.', 'PWA/offline reload and timed rehearsal remain untested.'] };
    await writeFile('artifacts/browser-results.json', JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report, null, 2));
} finally {
    if (browser) await browser.close();
    server.kill();
}
