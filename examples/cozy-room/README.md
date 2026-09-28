# Cozy Room — R1 baseline

A small, standalone Blazor WebAssembly room: activate the bedside lamp to cycle between **Honey stripes** and **Mint dots**, then reload to find your choice remembered. The bedroom and lamp are original inline SVG; color and pattern both distinguish the styles. There are no accounts, analytics, external runtime APIs or private repository dependencies.

This is the prepared two-style seminar baseline, not the completed lesson. R2 adds the third style and gentle acknowledgement; the public follow-along and presenter rehearsal come later. No deployment is included here.

## Open and run

An eventual hosted viewer needs only a browser. To edit or run this source locally, install the .NET **10.0.302** SDK (the included `global.json` permits later patches in that feature band). Node.js is needed only for the included static preview and browser validation tools; tested with Node **22.12.0** and npm **10.9.0**. Restore downloads public NuGet/npm dependencies. No credentials or private checkout are needed.

Run these commands from **this directory**, whether it lives inside BuildKit or has been exported on its own:

```powershell
dotnet restore CozyRoom.slnx --locked-mode
dotnet build CozyRoom.slnx --no-restore
dotnet test CozyRoom.slnx --no-build --no-restore
dotnet run --project src/CozyRoom.App/CozyRoom.App.csproj
```

Open the HTTP address printed by the development server. Do not double-click `index.html` or expect an offline reload: this baseline has no service worker/PWA.

To preview the static Release output instead:

```powershell
dotnet publish src/CozyRoom.App/CozyRoom.App.csproj -c Release -o artifacts/publish --no-restore
npm run serve
```

Open `http://127.0.0.1:5188`. The local preview binds only to loopback. Node serves the published files; there is no application API or server-side Blazor connection. The publish used the installed SDK without the optional `wasm-tools` workload or native AOT optimization.

## Play and recover

Click or tap the lamp. Keyboard users can Tab to its native button, then press Enter or Space; its current style is in the accessible button name and focus is visible. The baseline changes style immediately, with no animated feedback. Reduced-motion users receive the same state change.

**Room care**, below the play surface, explains the local save and offers **Start a fresh room**. It asks for confirmation before replacing this example's saved choice. **Keep this room** cancels without writing anything. A successful fresh start remembers Honey stripes.

The only storage key used is `buildwithgriebz.cozy-room.baseline.v1`. Its version-1 JSON contains `version`, `roomId`, `objectId` and `lampStyle` (0 or 1). The record is limited to 4,096 characters and validated by C# before use. It never opens PocketPlayroom's household storage or clears all browser data.

| Stored/browser condition | Behavior |
|---|---|
| No save | Start at Honey stripes; a change creates a save |
| Valid baseline save | Restore the style; subsequent changes save |
| Malformed, missing fields, wrong IDs or unknown style | Start at Honey stripes for this visit; retain the exact stored value and do not autosave |
| Newer schema version | Same protected fallback, with a newer-version notice |
| Denied reads | Play remains usable without autosaving |
| Failed write | Keep playing, stop autosaving for this visit, retain the earlier stored value and show an accurate notice |
| Confirmed reset | Attempt to replace only this sample key with a valid default; if it fails, the fresh room is temporary and the earlier stored value remains |

Saves belong to the browser profile and HTTP origin, not an account. Another device, port or private browsing session may not have the same save; clearing browser data can remove it. A source checkout does not reset browser storage. Deliberately return to the baseline by selecting its recorded commit and using Room care if you want the default state.

Keep simultaneous baseline/finished previews on **different origins or keys**. R2 must load valid version-1 baseline states and separately test that compatibility; do not extend R1 in place and call it an immutable baseline. Existing invalid or newer saves must remain protected unless a person confirms reset.

## Where the lesson lives in code

| File/project | Responsibility |
|---|---|
| `src/CozyRoom.Core/RoomRules.cs` | C# style cycle, save validation and serialization; no browser dependency |
| `src/CozyRoom.App/App.razor` | Semantic lamp button, state/rendering, persistence notices and confirmed reset |
| `src/CozyRoom.App/Components/LampArt.razor` | Two original style renderings |
| `src/CozyRoom.App/Components/RoomBackdrop.razor` | Original static bedroom art |
| `src/CozyRoom.App/wwwroot/css/room.css` | Scene framing, generous input target, focus, responsive layout and reduced-motion override |
| `src/CozyRoom.App/Services/BrowserRoomStore.cs` | Blazor storage interop boundary |
| `src/CozyRoom.App/wwwroot/js/room-storage.js` | Small localStorage read/write adapter; no game logic |
| `tests/CozyRoom.Core.Tests/` | Rules and schema checks |
| `tests/browser/baseline.mjs` | Published-app input, persistence, recovery and layout checks |

The interaction path is **native button → C# state → SVG rendering → browser storage**. The example intentionally has no dragging, audio, physics, more furniture interactions, checkout or course promotion.

## Browser checks

Publish first using the command above, then:

```powershell
npm ci --ignore-scripts --no-fund --no-audit
npm run test:browser
```

The harness starts/stops its own preview server on port 5188; stop any manual preview there first. Windows defaults to an installed Microsoft Edge. Elsewhere it defaults to Playwright Chromium, which must already be installed or provisioned locally with `npx playwright install chromium`. To use an installed Chrome instead, set `COZY_BROWSER_CHANNEL=chrome` in your shell before running the test. No global browser install is performed automatically by the test.

Reports and screenshots are generated under ignored `artifacts/`. See [VALIDATION.md](VALIDATION.md) for observed results and remaining human/device checks, and [NOTICES.md](NOTICES.md) for provenance and source-license status.

## Checkpoint and distribution boundary

The baseline commit is recorded in `checkpoint.json` on the R1 review branch. Export the example subtree from that revision, **not the full repository or its history**:

```powershell
# From the BuildKit repository root; replace BASELINE_COMMIT with the full recorded SHA.
git archive --format=zip --output=cozy-room-baseline.zip BASELINE_COMMIT:examples/cozy-room
```

Extract into a new directory and follow the commands above. That source checkpoint contains the app, SDK/package pins, tests, instructions and notices without requiring parent files. The checkpoint manifest is added after the immutable source commit so it can identify that commit without a self-referencing hash. Keep a copy of its recorded revision with your local export. A later L2 slice records both baseline and finished lesson exports.

Source redistribution license and public hosting are owner decisions before public-release promotion. This review branch is not a license grant, deployment or completed teaching kit.
