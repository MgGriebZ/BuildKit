import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { chromium } from 'playwright';

const key = 'buildwithgriebz.cozy-room.baseline.v1';
const saved = style => JSON.stringify({ version: 1, roomId: 'cozy-room', objectId: 'lamp', lampStyle: style });
const url = 'http://127.0.0.1:5188';
const channel = process.env.COZY_BROWSER_CHANNEL || (process.platform === 'win32' ? 'msedge' : undefined);
const results = [];
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
    }

    {
        const { context, page } = await open({ viewport: { width: 1280, height: 900 } });
        await style(page, 0);
        await page.getByTestId('lamp').click(); await style(page, 1);
        assert.equal(JSON.parse(await raw(page)).lampStyle, 1);
        await page.reload(); await style(page, 1);
        assert.match(await page.getByTestId('save-status').innerText(), /Welcome back/);
        await page.getByTestId('lamp').focus();
        await page.keyboard.press('Enter'); await style(page, 0);
        await page.keyboard.press('Space'); await style(page, 1);
        assert.notEqual(await page.getByTestId('lamp').evaluate(el => getComputedStyle(el).outlineStyle), 'none');
        await checkIsolation(page); await checkLayout(page);
        await page.screenshot({ path: 'artifacts/screenshots/desktop.png', fullPage: true });
        results.push('Desktop: mouse + two-style cycle + reload + Enter/Space + focus + isolated writes');
        await context.close();
    }
    for (const [name, viewport] of [['tablet', { width: 1024, height: 768 }], ['narrow', { width: 390, height: 844 }]]) {
        const { context, page } = await open({ viewport, hasTouch: true });
        await page.getByTestId('lamp').tap(); await style(page, 1);
        await page.reload(); await style(page, 1);
        await checkLayout(page);
        await page.screenshot({ path: `artifacts/screenshots/${name}.png`, fullPage: true });
        results.push(`${name}: emulated touch + reload + target and layout checks`);
        await context.close();
    }
    {
        const { context, page } = await open({ reducedMotion: 'reduce', viewport: { width: 1024, height: 768 } });
        await page.getByTestId('lamp').click(); await style(page, 1);
        assert(await page.evaluate(() => matchMedia('(prefers-reduced-motion: reduce)').matches));
        assert.equal(await page.getByTestId('lamp').evaluate(el => getComputedStyle(el).transitionDuration), '0s');
        await page.reload(); await style(page, 1);
        results.push('Reduced motion: activation and remembered state, no transition');
        await context.close();
    }
    for (const [name, seed, message] of [
        ['malformed', 'broken{', /couldn't be read/],
        ['future-version', '{"version":99,"unknown":"keep"}', /newer version/],
        ['unknown-style', saved(2), /couldn't be read/],
        ['missing-fields', '{"version":1}', /couldn't be read/]
    ]) {
        const { context, page } = await open({}, seed);
        assert.match(await page.getByTestId('save-status').innerText(), message);
        await page.getByTestId('lamp').click(); await style(page, 1);
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
    {
        const { context, page } = await open({}, saved(0), 'write-fails');
        await page.getByTestId('lamp').click(); await style(page, 1);
        assert.match(await page.getByTestId('save-status').innerText(), /couldn't save/);
        assert.equal(await raw(page), saved(0));
        await page.getByTestId('lamp').click(); await style(page, 0);
        results.push('Write failure: play continues and earlier save remains intact');
        await context.close();
    }
    {
        const { context, page } = await open({}, null, 'denied');
        assert.match(await page.getByTestId('save-status').innerText(), /can't remember/);
        await page.getByTestId('lamp').click(); await style(page, 1);
        await page.getByText('Room care', { exact: true }).click();
        await page.getByTestId('reset-request').click();
        await page.getByTestId('reset-confirm-button').click(); await style(page, 0);
        assert.match(await page.getByTestId('save-status').innerText(), /couldn't save/);
        results.push('Unavailable storage: play and explicit volatile reset remain usable');
        await context.close();
    }
    assert.deepEqual(errors, [], 'No unhandled browser exceptions');
    assert.deepEqual(externalRequests, [], 'No external runtime requests');
    const report = { browser: browser.version(), channel: channel || 'chromium', results, errors, externalRequests, limitations: ['Touch is emulated; no physical device or human learner test.', 'PWA/offline reload and the R2 third style are outside R1.'] };
    await writeFile('artifacts/browser-results.json', JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report, null, 2));
} finally {
    if (browser) await browser.close();
    server.kill();
}
