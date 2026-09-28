# Cozy Room — R2 refinement

A small, standalone Blazor WebAssembly room: activate the bedside lamp to cycle through **Honey stripes**, **Mint dots** and **Rose diamonds**, then reload to find your choice remembered. The bedroom and lamp are original inline SVG; color and pattern both distinguish the styles. There are no accounts, analytics, external runtime APIs or private repository dependencies.

R2 adds an original rose shade with outlined diamonds and a soft 480 ms ring around the shade after each style activation. The public follow-along and presenter rehearsal come later. This review branch records the implementation checkpoint; the room has not been deployed.

## Open and run

An eventual hosted viewer needs only a browser. To edit or run this source locally, install the .NET **10.0.302** SDK (the included `global.json` permits later patches in that feature band). Node.js is needed only for the included static preview and browser validation tools; tested with Node **22.12.0** and npm **10.9.0**. Restore downloads public NuGet/npm dependencies. No credentials or private checkout are needed.

Run these commands from **this directory**, whether it lives inside BuildKit or has been exported on its own:

```powershell
dotnet restore CozyRoom.slnx --locked-mode
dotnet build CozyRoom.slnx --no-restore
dotnet test CozyRoom.slnx --no-build --no-restore
dotnet run --project src/CozyRoom.App/CozyRoom.App.csproj
```

Open the HTTP address printed by the development server. Do not double-click `index.html` or expect an offline reload: this example has no service worker/PWA.

To preview the static Release output instead:

```powershell
dotnet publish src/CozyRoom.App/CozyRoom.App.csproj -c Release -o artifacts/publish --no-restore
npm run serve
```

Open `http://127.0.0.1:5188`. The local preview binds only to loopback. Node serves the published files; there is no application API or server-side Blazor connection. The publish used the installed SDK without the optional `wasm-tools` workload or native AOT optimization.

## Play and recover

Click or tap the lamp. Keyboard users can Tab to its native button, then press Enter or Space; its current style is in the accessible button name and focus is visible. The button stays mounted and keeps focus while only the decorative ring is recreated for each action. The ring gently expands and fades once; it is absent on initial load, reload and reset. With reduced motion, CSS hides the ring and disables its animation entirely; the style and save still change. Changing the preference during feedback also stops the cue.

**Room care**, below the play surface, explains the local save and offers **Start a fresh room**. It asks for confirmation before replacing this example's saved choice. **Keep this room** cancels without writing anything. A successful fresh start remembers Honey stripes.

The only storage key used is `buildwithgriebz.cozy-room.baseline.v1`. R2 intentionally keeps that R1 key and version-1 schema: `version`, `roomId`, `objectId` and `lampStyle` (now 0, 1 or 2). Old valid R1 styles 0 and 1 restore without rewriting the record on load. Unknown value 3 remains invalid and protected. The record is limited to 4,096 characters and validated by C# before use. It never opens PocketPlayroom's household storage or clears all browser data.

| Stored/browser condition | Behavior |
|---|---|
| No save | Start at Honey stripes; a change creates a save |
| Valid R1 or R2 version-1 save | Restore the style without a load-time write; subsequent changes save |
| Malformed, missing fields, wrong IDs or unknown style | Start at Honey stripes for this visit; retain the exact stored value and do not autosave |
| Newer schema version | Same protected fallback, with a newer-version notice |
| Denied reads | Play remains usable without autosaving |
| Failed write | Keep playing, stop autosaving for this visit, retain the earlier stored value and show an accurate notice |
| Confirmed reset | Attempt to replace only this sample key with a valid default; if it fails, the fresh room is temporary and the earlier stored value remains |

Saves belong to the browser profile and HTTP origin, not an account. Another device, port or private browsing session may not have the same save; clearing browser data can remove it. A source checkout does not reset browser storage. Deliberately return to the baseline by selecting its recorded commit and using Room care if you want the default state.

Keep simultaneous baseline/finished previews on **different origins** because these checkpoints share the same key. For example, serve R1 on port 5189 with `$env:PORT = '5189'` and R2 on the default 5188 in a separate shell. R1 rejects R2's new style 2 as unknown, retains it without overwriting, and offers confirmed reset. Use Room care to deliberately return to Honey stripes when switching back at the same origin; confirm only if replacing that sample save is intended. The immutable R1 source stays at its recorded commit. Existing invalid or newer saves remain protected unless a person confirms reset.

## Where the lesson lives in code

| File/project | Responsibility |
|---|---|
| `src/CozyRoom.Core/RoomRules.cs` | C# style cycle, save validation and serialization; no browser dependency |
| `src/CozyRoom.App/App.razor` | Semantic lamp button, state/rendering, persistence notices and confirmed reset |
| `src/CozyRoom.App/Components/LampArt.razor` | Three original style renderings, including outlined diamonds |
| `src/CozyRoom.App/Components/RoomBackdrop.razor` | Original static bedroom art |
| `src/CozyRoom.App/wwwroot/css/room.css` | Scene framing, input/focus, third palette, brief acknowledgement and reduced-motion override |
| `src/CozyRoom.App/Services/BrowserRoomStore.cs` | Blazor storage interop boundary |
| `src/CozyRoom.App/wwwroot/js/room-storage.js` | Small localStorage read/write adapter; no game logic |
| `tests/CozyRoom.Core.Tests/` | Rules and schema checks |
| `tests/browser/baseline.mjs` | Extended R2 checks against published output; filename retained from R1 |

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

The immutable R1 source baseline is **`40bc75fa779ce3a3a9c4f94a3f6dda18109a3ffc`**. R2 starts exactly from reviewed R1 PR #4 head **`15d24cfa060f8cd0b45084426aba7c2eaebce4c1`**, which adds the manifest and validation record to that source. The finished R2 source checkpoint is **`440f20391f722b1d804bb207518988698c0bf5ac`**; both are identified in `checkpoint.json`. Export the example subtree from a recorded revision, **not the full repository or its history**:

```powershell
# From the BuildKit repository root; replace BASELINE_COMMIT with the full recorded SHA.
git archive --format=zip --output=cozy-room-baseline.zip BASELINE_COMMIT:examples/cozy-room
```

Extract into a new directory and follow that checkpoint's included commands. The R1 snapshot contains its own two-style instructions and tests. The manifest follows the immutable source commit so it can identify that commit without a self-referencing hash. Keep a copy of its recorded revision with your local export. L2 records the finished export/reopening check and public guide.

Source redistribution license and public hosting are owner decisions before public-release promotion. This review branch is not a license grant, deployment or completed teaching kit.
