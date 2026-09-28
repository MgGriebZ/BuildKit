# Cozy Room validation record

The R1/R2 sections preserve historical evidence. The R3 section records the checked mini-game reference and its separate new coverage.

Observed September 27, 2026 on Windows. These are local development results, not a deployment, physical-device check, child-suitability assessment or seminar rehearsal.

## Toolchain and independent structure

- .NET SDK **10.0.302**; .NET runtime **10.0.10**. SDK pin, solution, project references, NuGet lockfiles and all assets are inside this subtree.
- App packages: Microsoft.AspNetCore.Components.WebAssembly and DevServer **10.0.10**. Test packages: Microsoft.NET.Test.Sdk **17.12.0**, xunit **2.9.2**, xunit.runner.visualstudio **2.8.2**.
- Node **22.12.0**, npm **10.9.0**, Playwright **1.62.1**, headless installed Microsoft Edge **154.0.4258.37**.
- No private checkout, secret, asset CDN or external API is required. Public package downloads are required on a cold restore.

## Commands and observed outcomes

Run from the example directory:

```powershell
dotnet restore CozyRoom.slnx
dotnet build CozyRoom.slnx --no-restore
dotnet test CozyRoom.slnx --no-build --no-restore
dotnet publish src/CozyRoom.App/CozyRoom.App.csproj -c Release -o artifacts/publish --no-restore
npm install --ignore-scripts --no-fund --no-audit
npm run test:browser
```

Restore and build succeeded; Debug build reported **0 warnings, 0 errors**. The focused rule suite passed **22/22 cases**. The Release static publish succeeded, and the browser harness exercised that published output via the included HTTP server. Native AOT/optional `wasm-tools` optimization was not installed or tested.

Rule coverage includes the two-style cycle, valid round trips, missing save, malformed/schema-invalid input, missing fields, wrong identifiers, unknown styles, future versions, oversized payload and invalid in-memory states. Invalid/future data does not grant autosave permission.

## Published-app browser checks: 10/10 passed

| Scenario | Observed |
|---|---|
| Desktop 1280 × 900 | Mouse activation; two styles; reload restore; Enter/Space with retained visible focus; target and storage isolation |
| Landscape tablet 1024 × 768 | Emulated touch activation and reload restore; target remains inside scene, at least 44 × 44 CSS pixels; no horizontal overflow |
| Narrow 390 × 844 | Same emulated touch/reload/target/layout checks; stacked adult controls |
| Reduced-motion preference | Change and reload restore; no transition |
| Malformed JSON | Exact raw save retained during play and reset cancellation; explicit reset replaces only sample key |
| Future schema version | Same protected behavior with accurate newer-version notice |
| Unknown style | Same protected fallback and explicit recovery |
| Missing fields | Same protected fallback and explicit recovery |
| Quota/write failure | Play continues, notice explains failure, earlier valid save remains intact |
| Denied storage read/write | Play and confirmed temporary fresh state remain usable, with failure notice |

The harness observed **no unhandled page exceptions and no external runtime requests**. Storage isolation checks kept a separate sentinel product save unchanged. All app writes use only `buildwithgriebz.cozy-room.baseline.v1`.

Generated local evidence is intentionally ignored by Git:

- `artifacts/browser-results.json`
- `artifacts/screenshots/desktop.png`
- `artifacts/screenshots/tablet.png`
- `artifacts/screenshots/narrow.png`

All three captures were visually inspected: coherent warm room, lamp on the bedside surface, distinct striped/dotted shade, no clipped scene objects or overlapping controls. The desktop capture intentionally includes the visible keyboard-focus outline. Narrow layout keeps the complete room visible and leaves adult controls below it. Vertical page scrolling on shorter viewports is expected.

## Immutable baseline and standalone export

Baseline source revision: **`40bc75fa779ce3a3a9c4f94a3f6dda18109a3ffc`**. The later `checkpoint.json` identifies this revision; it is not part of that earlier source snapshot.

Exported only `examples/cozy-room/` with `git archive` and extracted into a fresh sibling directory outside the BuildKit checkout. From that export, `dotnet restore CozyRoom.slnx --locked-mode`, build, all **22 rule cases**, Release publish and `npm ci --ignore-scripts --no-fund --no-audit` succeeded without parent repository files. Running `npm run test:browser` from the export also passed **all 10 scenarios** against its own published output. The independent build again reported **0 warnings, 0 errors**. The documented development server also returned the app successfully over HTTP in the original checkout.

## Remaining checks and release gates

- Touch evidence is browser emulation, not an actual phone/tablet. Physical-device input, browser diversity, screen-reader use and human accessibility review remain outstanding.
- No adult learner repeat/ explain-back, timed 60-minute rehearsal or observation of suitability for children has occurred.
- The third style, feedback animation and baseline-to-finished save compatibility belong to R2 and are not claimed here. L2/L3 teaching/distribution material is not complete.
- No offline reload/PWA, native AOT, network-performance benchmark, deployment or public hosting check was performed.
- The owner still needs to choose the original-source redistribution license and approve the release destination before public-release promotion.

See [README.md](README.md) for reproducible setup, storage recovery and the scoped export boundary.

## R2 validation — September 27, 2026

Base: reviewed R1 PR #4 head **`15d24cfa060f8cd0b45084426aba7c2eaebce4c1`** on `work/r2-cozy-room`. The immutable two-style source baseline remains **`40bc75fa779ce3a3a9c4f94a3f6dda18109a3ffc`**. The complete R2 runtime/test checkpoint is **`91eab16835aac4cfd80a7f51017ac62f5cc6b9bd`**. Locked restore, build, 25 rule tests, Release publish and 12 browser scenarios were rerun against the final R2 code/harness content before that commit. The standalone R2 review-tree export is **`15a93acae7e12fea71ea768b9198428f39a5a312`**; its `checkpoint.json` pins the runtime checkpoint above. The independent baseline review-tree export is **`15d24cfa060f8cd0b45084426aba7c2eaebce4c1`**.

The existing toolchain was used: SDK **10.0.302**, Node **22.12.0**, npm **10.9.0**, locked Playwright **1.62.1**, installed headless Microsoft Edge **154.0.4258.37**. Package pins and lockfiles were unchanged. Commands run from this subtree:

```powershell
dotnet restore CozyRoom.slnx --locked-mode
dotnet build CozyRoom.slnx --no-restore
dotnet test CozyRoom.slnx --no-build --no-restore
dotnet publish src/CozyRoom.App/CozyRoom.App.csproj -c Release -o artifacts/publish --no-restore
npm ci --ignore-scripts --no-fund --no-audit
npm run test:browser
```

Locked restore, build, Release publish and npm setup succeeded. Debug build reported **0 warnings and 0 errors**; rules passed **25/25 cases**. Publish used the existing environment without the optional `wasm-tools` workload or native AOT. The browser harness served `artifacts/publish/wwwroot` over local HTTP and passed **12/12 scenarios**, with **no unhandled page exceptions or external runtime requests**.

Rules explicitly load literal R1 version-1 records for styles 0 and 1, retain their choice and exact serialized format, and permit continued cycling. All three choices roundtrip. The cycle visits 1 → 2 → 0. Value 3 is invalid, defaults to 0 for this visit and grants no autosave permission; invalid in-memory value 3 cannot be written or cycled. Existing schema/malformed/future/oversize checks remain covered.

| Browser scenario | Actual observation |
|---|---|
| Desktop 1280 × 900 | Mouse/Enter/Space three-style cycling; third-style serialization/reload; accessible Rose diamonds name and diamond SVG path; keyboard focus remains on the lamp; visible outline; target/layout/storage isolation |
| Tablet 1024 × 768 | Three-style cycle with emulated touch, style 2 reload, target inside scene and at least 44 × 44 CSS pixels, no horizontal overflow |
| Narrow 390 × 844 | Same emulated touch cycle/reload/target checks with stacked adult controls |
| Reduced motion | Style 2 persists/reloads; actual acknowledgement element is hidden, computed animation is `none`, and there are no animation objects; changing preference during feedback also disables it |
| Malformed / future / style 3 / missing fields (4 scenarios) | Exact raw save retained with no writes through third-style play, reload and reset cancellation; only confirmed reset replaces the example save |
| Original R1 styles 0 and 1 (2 scenarios) | Initial load/reload keep the raw value with no write; later activation saves the next style using version 1 and restores it after reload |
| Write failure | Third-style play continues; previous valid save remains exact; failed confirmed reset preserves it and reload restores it |
| Denied reads/writes | Third-style play and a confirmed temporary reset remain usable, with accurate persistence notices |

Normal acknowledgement was checked on the rendered element: CSS animation `lamp-acknowledge` lasts **480 ms**, reaches visible opacity above 0.4 at 168 ms, then completes at opacity 0 with no remaining animation. The harness paused that same animation only to capture its visible peak, then resumed it and checked completion. Initial load/reload does not create a feedback element. The native lamp button remains mounted while a keyed decorative span restarts feedback for each activation; no game or animation logic was added to JavaScript.

Generated evidence remains under ignored `artifacts/`: `browser-results.json` and `screenshots/desktop.png`, `tablet.png`, `narrow.png`, `acknowledgement.png`. All four captures were visually inspected. Rose diamonds is distinct from stripes/dots at all three dimensions, the lamp remains on the bedside surface, and the ring is restrained around the shade. The desktop shows the retained keyboard outline. No scene clipping, target overlap or horizontal overflow was observed. Tablet may scroll vertically; narrow retains the complete room and adult controls below it.

### Independent standalone export check

Only `examples/cozy-room/` was exported from each review-tree revision with `git archive` and extracted into fresh sibling directories outside the BuildKit checkout. The R1 package at **`15d24cfa060f8cd0b45084426aba7c2eaebce4c1`** was reopened and passed locked restore, build (0 warnings/errors), 22 rule tests, Release publish, `npm ci --ignore-scripts --no-fund --no-audit`, and all 10 browser scenarios. The R2 package at **`15a93acae7e12fea71ea768b9198428f39a5a312`** was reopened and passed the same checks with 25 rule tests and all 12 browser scenarios. Both browser runs used Edge **154.0.4258.37** and reported no unhandled page exceptions or external runtime requests. These tests ran from the extracted subtree, without files from the parent repository. R1 and R2 package contents were compared with their respective runtime checkpoints; only README, VALIDATION, and checkpoint metadata differ in the later review-tree commits. The exports are independent source packages; this does not claim a hosted deployment or offline/PWA behavior.

### R2 remaining evidence and handoff

There is no implementation/check blocker for the tested R2 scope. L2 can document the two checked exports and the R2 learner workflow using the pinned revisions above.

Physical phone/tablet input, browser diversity, screen-reader use, human accessibility review, adult learner repeat/explain-back, timed seminar rehearsal and child-suitability observations remain unperformed. Offline/PWA reload, native AOT, network-performance and hosting checks remain outside this evidence. Original-source license and release destination are still owner decisions.

## R3 validation — September 28, 2026

Requirements: `620d33723a3dc309c4837b5a7f91597ad6ac5ef8`. Starting runtime: R2 `91eab16835aac4cfd80a7f51017ac62f5cc6b9bd`; standalone R2 export: `15a93acae7e12fea71ea768b9198428f39a5a312`. The clean implementation branch began at the requirements commit; its app/tests were identical to the R2 export, with README/validation metadata differences only. Checked R3 runtime/test source: **`7516e7b29908108a6567b5859fab5faab4d849f8`**.

The installed toolchain remained .NET SDK **10.0.302**, Node **22.12.0**, npm **10.9.0**, locked Playwright **1.62.1** and headless Microsoft Edge **154.0.4258.37**. Dependencies, package pins and lockfiles were unchanged. From the sample root, locked restore, Debug build (0 warnings/errors), all **40 rule cases**, static Release publish and browser validation passed. The 40 cases comprise the historical 25 lamp/save cases and 15 new round cases. Release publish retained the existing SDK-only mode without optional native AOT/wasm-tools optimization.

The browser report separates **12 lamp/save regression scenarios** from **9 new R3 game scenarios**:

| R3 scenario | Observed checks |
|---|---|
| Mouse | Initial 0/3; out-of-order collection; duplicate real pointer activation stays at the same count; checkmarks; calm 3/3 completion; Replay; partial/completed reload resets; lamp style remains saved |
| Keyboard | Native Tab order from lamp through stars to Replay; Enter/Space; visible focus; focus retained on collection; repeated activation guarded; Replay returns focus to window star |
| Tablet / narrow / minimum | Touch emulation at 1024×768, 390×844 and 280×800; unique collection/replay; each target at least 44×44; target and focus space inside scene; no overlapping play targets or horizontal overflow; lamp regression |
| Reduced motion | Static collection/completion/replay; no star animations; existing lamp acknowledgement remains suppressed |
| Protected future save | Star play/replay makes no storage writes; future lamp save stays byte-for-byte unchanged through play/reload |
| Denied storage | Full game/replay without storage calls; lamp play and accurate persistence notice continue |
| Failed lamp write | Star rounds keep working; only the lamp attempts a write; earlier valid lamp save returns after reload; round returns to 0/3 |

The mounted progress element has `role="status"`, `aria-live="polite"` and `aria-atomic="true"`; its content was checked at 0/3, 1/3, 2/3 and completion. Human screen-reader speech was not observed. Collected stars remain native focusable buttons with distinct updated names and `aria-disabled="true"`; the click handler independently guards repeated activation. A checkmark conveys collection without relying on color. Replay's focus move happens after the reset render.

The first browser attempt failed when Playwright's high-level click refused an already aria-disabled star for the deliberate duplicate-activation test. The harness now sends a real mouse/touch pointer event at its center. This was an observed test-harness failure, followed by a successful rerun; it was not a reported game defect. See [R3-RUN.md](R3-RUN.md) for timing and material inputs.

No unhandled page exceptions or external runtime requests were observed in the passing run. Generated reports/captures remain ignored under `artifacts/`. Five R3 captures were visually reviewed: desktop completion, desktop keyboard focus, tablet, narrow and minimum width. Stars, lamp, progress and Replay are readable and uncut; small widths wrap the text/Replay below the room. Automated geometry checks confirm the recorded target dimensions, non-overlap and focus clearance. Physical phone/tablet, human screen-reader/accessibility review, independent adult learning, timed seminar, offline/PWA and hosting remain pending.

### R3 standalone reopening

Only `examples/cozy-room/` was archived from **`96d51856825cfd36c758aebb55c3c716a2173451`** and extracted into a new sibling directory outside the BuildKit checkout. The archive contains 34 source/instruction files, with no parent repository, private authoring or generated build directories. Its app/tests match runtime checkpoint `7516e7b29908108a6567b5859fab5faab4d849f8`; only documentation/manifest metadata differs.

From that fresh directory, locked restore, npm locked install, build (0 warnings/errors), all 40 rule cases, Release static publish and all 21 browser scenarios (12 lamp/save + 9 R3) passed. The passing package run again used Edge 154.0.4258.37 and had no page exceptions or external runtime requests. It completed by the observed UTC timestamp **19:03:18** on September 28. This is an agent reopening/build check; independent novice understanding and H1's live presentation remain pending. The final metadata commit records the tested immutable export without changing its runtime/test source.
