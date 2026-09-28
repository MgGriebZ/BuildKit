# Cozy Room validation record

The R1 sections below preserve historical baseline evidence. The appended R2 section records checks on the current uncommitted refinement; it does not assign a finished revision or claim an independent finished export.

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

## R2 working-tree validation — September 27, 2026

Base: reviewed R1 PR #4 head **`15d24cfa060f8cd0b45084426aba7c2eaebce4c1`** on `work/r2-cozy-room`. The immutable two-style source baseline remains **`40bc75fa779ce3a3a9c4f94a3f6dda18109a3ffc`**. The complete R2 runtime/test checkpoint is **`91eab16835aac4cfd80a7f51017ac62f5cc6b9bd`**. Locked restore, build, 25 rule tests, Release publish and 12 browser scenarios were rerun against the final R2 code/harness content before that commit. Follow-up review metadata records this finished checkpoint.

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

### R2 remaining evidence and handoff

There is no implementation/check blocker for R2. The earlier standalone-export check is evidence for R1 only. An independent finished export/reopening check belongs to L2 and is not yet recorded here.

Physical phone/tablet input, browser diversity, screen-reader use, human accessibility review, adult learner repeat/explain-back, timed seminar rehearsal and child-suitability observations remain unperformed. Offline/PWA reload, native AOT, network-performance and hosting checks remain outside this evidence. Original-source license and release destination are still owner decisions.
