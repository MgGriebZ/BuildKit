# Cozy Room — R3 star hunt

A small, standalone Blazor WebAssembly room: find three stars, watch progress reach **3/3**, and choose **Replay** for another round. The bedside lamp still cycles through **Honey stripes**, **Mint dots** and **Rose diamonds** and remembers its style on reload. The bedroom, lamp and stars are original inline SVG. There are no accounts, analytics, external runtime APIs or private repository dependencies.

R3 adds temporary star-round state to the checked R2 room. The R2 lamp/save schema and soft 480 ms lamp acknowledgement remain intact. This implementation is on the R3 review branch; deployment and presenter rehearsal remain ahead. [R3-RUN.md](R3-RUN.md) records the actual development attempt, observed failure, checks and a prepared prompt path from R2. L5 will synchronize the learner guide with these results.

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

Click, tap, or use Tab and Enter/Space on the window, bed and rug stars in any order. Each counts once. Collected stars show a checkmark and a collected accessible name; they stay focusable with `aria-disabled` so collecting one keeps your keyboard position. The progress line is a polite, atomic status region. At 3/3 it shows a calm completion message and **Replay**. Replay resets only the round and moves focus to the window star. Reload also starts at 0/3 while the lamp's remembered style returns. The stars use static feedback, including with reduced motion.

Click or tap the lamp. Keyboard users can Tab to its native button, then press Enter or Space; its current style is in the accessible button name and focus is visible. The button stays mounted and keeps focus while only the decorative ring is recreated for each action. The ring gently expands and fades once; it is absent on initial load, reload and reset. With reduced motion, CSS hides the ring and disables its animation entirely; the style and save still change. Changing the preference during feedback also stops the cue.

**Room care**, below the play surface, explains the local save and offers **Start a fresh room**. It asks for confirmation before replacing this example's saved choice. **Keep this room** cancels without writing anything. A successful fresh start remembers Honey stripes.

The only storage key used is `buildwithgriebz.cozy-room.baseline.v1`. R2/R3 intentionally keep that R1 key and version-1 schema: `version`, `roomId`, `objectId` and `lampStyle` (0, 1 or 2). Star progress is never serialized or written to storage. Old valid R1 styles 0 and 1 restore without rewriting the record on load. Unknown value 3 remains invalid and protected. The record is limited to 4,096 characters and validated by C# before use. It never opens PocketPlayroom's household storage or clears all browser data.

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
| `src/CozyRoom.Core/StarRound.cs` | In-memory unique collection and completion rules, independent of lamp/save state |
| `src/CozyRoom.App/App.razor` | Native lamp/star controls, round/status rendering, replay focus, persistence notices and confirmed lamp reset |
| `src/CozyRoom.App/Components/LampArt.razor` | Three original style renderings, including outlined diamonds |
| `src/CozyRoom.App/Components/StarArt.razor` | Original star shape and non-color collected checkmark |
| `src/CozyRoom.App/Components/RoomBackdrop.razor` | Original static bedroom art |
| `src/CozyRoom.App/wwwroot/css/room.css` | Scene framing, input/focus, third palette, brief acknowledgement and reduced-motion override |
| `src/CozyRoom.App/Services/BrowserRoomStore.cs` | Blazor storage interop boundary |
| `src/CozyRoom.App/wwwroot/js/room-storage.js` | Small localStorage read/write adapter; no game logic |
| `tests/CozyRoom.Core.Tests/` | Rules and schema checks |
| `tests/browser/baseline.mjs` | 12 lamp/save regression scenarios and 9 R3 game scenarios against published output; filename retained from R1 |

The lamp path is **native button → C# state → SVG rendering → browser storage**. The star path is **native button → in-memory C# round → star/status rendering**. The example intentionally has no timer, leaderboard, dragging, audio, physics, backend, checkout or course promotion.

## Browser checks

Publish first using the command above, then:

```powershell
npm ci --ignore-scripts --no-fund --no-audit
npm run test:browser
```

The harness starts/stops its own preview server on port 5188; stop any manual preview there first. Windows defaults to an installed Microsoft Edge. Elsewhere it defaults to Playwright Chromium, which must already be installed or provisioned locally with `npx playwright install chromium`. To use an installed Chrome instead, set `COZY_BROWSER_CHANNEL=chrome` in your shell before running the test. No global browser install is performed automatically by the test.

Reports and screenshots are generated under ignored `artifacts/`. See [VALIDATION.md](VALIDATION.md) for observed results and remaining human/device checks, and [NOTICES.md](NOTICES.md) for provenance and source-license status.

## Checkpoint and distribution boundary

The immutable R1 source baseline is **`40bc75fa779ce3a3a9c4f94a3f6dda18109a3ffc`**. R2 starts exactly from reviewed R1 PR #4 head **`15d24cfa060f8cd0b45084426aba7c2eaebce4c1`**, which adds the manifest and validation record to that source. The finished R2 runtime/test source checkpoint is **`91eab16835aac4cfd80a7f51017ac62f5cc6b9bd`**; both source checkpoints are identified in `checkpoint.json`. The lesson manifest records the self-contained review-tree revisions used for exports. Export only the example subtree, **not the full repository or its history**:

For the star lesson, use R2 standalone start **`15a93acae7e12fea71ea768b9198428f39a5a312`**. The checked R3 runtime/test checkpoint is **`7516e7b29908108a6567b5859fab5faab4d849f8`**. The independently reopened R3 standalone export is **`96d51856825cfd36c758aebb55c3c716a2173451`**. Its app/tests match the runtime checkpoint; the export also includes instructions and run evidence. This following metadata revision pins that immutable export in [checkpoint.json](checkpoint.json) and [VALIDATION.md](VALIDATION.md). The historical R1/R2 references above remain available.

```powershell
# From the BuildKit repository root; replace CHECKPOINT_COMMIT with the chosen full SHA.
git archive --format=zip --output=cozy-room-checkpoint.zip CHECKPOINT_COMMIT:examples/cozy-room
```

Extract into a new directory and follow that checkpoint's included commands. The R1 snapshot contains its two-style instructions and tests; the finished snapshot has three styles and the R2 checks. The manifest follows the immutable source commit so it can identify that commit without a self-referencing hash. L2 records which full review-tree revision was exported and independently reopened.

Source redistribution license and public hosting are owner decisions before public-release promotion. This source tree is not a license grant, deployment or completed teaching kit.
