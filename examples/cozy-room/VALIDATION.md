# R1 validation record

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

## Remaining checks and release gates

- Touch evidence is browser emulation, not an actual phone/tablet. Physical-device input, browser diversity, screen-reader use and human accessibility review remain outstanding.
- No adult learner repeat/ explain-back, timed 60-minute rehearsal or observation of suitability for children has occurred.
- The third style, feedback animation and baseline-to-finished save compatibility belong to R2 and are not claimed here. L2/L3 teaching/distribution material is not complete.
- No offline reload/PWA, native AOT, network-performance benchmark, deployment or public hosting check was performed.
- The owner still needs to choose the original-source redistribution license and approve the release destination before public-release promotion.

See [README.md](README.md) for reproducible setup, storage recovery and the scoped export boundary.
