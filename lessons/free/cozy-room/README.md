# Cozy Room: from a remembered choice to a polished interaction

This follow-along accompanies the standalone Cozy Room example. You begin with a small bedroom and a lamp with two patterned shades; the finished checkpoint adds a third shade and a brief, gentle acknowledgement when the lamp changes. The selected shade survives a reload. The lesson is a bounded example of taking a visible idea through C# rules, rendering, persistence and verification—not a promise to build a complete game or arbitrary application in one hour.

The public app is original and self-contained. It does not require PocketPlayroom or the private presenter repository. No account or signup is needed to read or run a downloaded copy. This guide and its validation describe local source packages, not a hosted demo, offline/PWA behavior or a redistribution license. The source license remains an owner decision; do not treat this guide as permission to republish or relicense the app.

## Choose how to participate

**Browser-only viewer:** You need a current browser to watch a presenter share the room or to read this lesson. There is no hosted demo to open at present. Opening and playing a local copy requires the editor setup below; a browser cannot run the Blazor source tree directly.

**Hands-on editor:** To make the CSS change and publish a local copy, use Windows PowerShell and .NET SDK **10.0.302** (the app subtree pins this SDK; its `global.json` permits later patches in this feature band). Node.js **22.12.0** with npm is needed only for the included loopback preview. `npm ci` is needed only if you choose to run the optional Playwright browser checks. Node/npm are not needed to edit the source or publish it. Restore uses public NuGet feeds. No private checkout, credentials, login, or account is needed beyond a public GitHub clone. This lesson gives one concrete PowerShell path; macOS/Linux users can use their preferred shell and editor, translating the directory and file-opening commands as appropriate.

## Open the R2 source

If you do not already have a BuildKit clone, open PowerShell in the folder where you keep projects and run:

```powershell
git clone https://github.com/MgGriebZ/BuildKit.git
Set-Location .\BuildKit
```

From the repository root (the directory containing `examples`), fetch the public R2 branch and check out the exact reviewed app tree recorded in [checkpoint.json](checkpoint.json):

```powershell
git fetch origin work/r2-cozy-room
git switch --detach 15a93acae7e12fea71ea768b9198428f39a5a312
Set-Location .\examples\cozy-room
dotnet --version
```

The version command should report `10.0.302` (or a later allowed .NET 10 feature-band patch). If `git switch` says the working tree has local changes, save or commit your own work before switching; do not discard it. The R2 runtime/test source checkpoint is `91eab16835aac4cfd80a7f51017ac62f5cc6b9bd`; its self-contained, independently checked app review-tree checkpoint is `15a93acae7e12fea71ea768b9198428f39a5a312`. The R1 source and review-tree revisions, plus recorded validation counts and limits, are in the linked manifest. Only the app subtree was independently exported and checked; this lesson directory was not.

R1 is optional for the hands-on exercise. To inspect it without disturbing your R2 working copy, open a separate PowerShell window in the folder where you keep projects and make a second clone:

```powershell
git clone https://github.com/MgGriebZ/BuildKit.git BuildKit-R1
Set-Location .\BuildKit-R1
git fetch origin work/r1-cozy-room
git switch --detach 15d24cfa060f8cd0b45084426aba7c2eaebce4c1
Set-Location .\examples\cozy-room
```

This is the checked two-style baseline. Keep the R1 and R2 previews on separate ports/profiles if you run them; they use the same browser save key.

## Restore, edit, publish, and preview

The following commands assume the current directory is `examples\cozy-room`, which contains `CozyRoom.slnx`. Restore the locked .NET dependencies, make the small edit in the next section, then publish. npm is used only to serve the published files at a loopback address.

```powershell
dotnet restore CozyRoom.slnx --locked-mode
```

After the edit and save, publish from that same directory:

```powershell
dotnet publish .\src\CozyRoom.App\CozyRoom.App.csproj -c Release -o .\artifacts\publish --no-restore
npm run serve
```

Open `http://127.0.0.1:5188` in a browser. `npm run serve` serves the Release output on this computer only; it does not publish the app to the internet. After publishing again, refresh the page to reopen the updated output. Stop the preview with Ctrl+C. Browser checks are optional and are not required for this editing exercise; if you choose to run them, stop the manual preview first because the harness uses the same port:

```powershell
npm run test:browser
```

The browser harness starts its own local server on port 5188, so stop a manual preview on that port first. It uses an installed Edge on Windows; other platforms use Playwright Chromium, which may need local browser provisioning. No global browser install is performed automatically. The commands and test results below describe app checkpoints, not independent tests of this guide.

For optional automated browser checks only, install the locked Playwright package and its local browser as needed:

```powershell
npm ci --ignore-scripts --no-fund --no-audit
npm run test:browser
```

## See the R1-to-R2 change

First open the R1 package and activate the lamp. It cycles between **Honey stripes** and **Mint dots**. Reload: the chosen style returns. R1 is the baseline, not a partially working R2.

Then open the R2 package. Activate the lamp through **Honey stripes → Mint dots → Rose diamonds → Honey stripes**. The patterned shapes distinguish the options beyond color. After each activation, a restrained ring briefly expands and fades around the shade. Reload at Rose diamonds: the selection returns. The acknowledgement is decorative and does not take keyboard focus; reduced-motion preference removes the animation while preserving the style change and save.

R2 intentionally preserves the version-1 save schema, key and valid R1 choices (styles 0 and 1). Do not edit both checkpoints at the same origin while comparing them: they share the storage key. Use separate browser profiles/origins/ports, or clear/replace only this example's save through its confirmed **Room care** reset when you mean to do so. Never clear all browser storage as a recovery shortcut.

## Change map

| File area | What to inspect |
|---|---|
| `src/CozyRoom.Core/RoomRules.cs` | Style values/cycle, validation, and version-1 serialization rules |
| `src/CozyRoom.App/App.razor` | Native lamp button, state updates, persistence notices, confirmed reset and feedback lifecycle |
| `src/CozyRoom.App/Components/LampArt.razor` | The three SVG lamp shades; Rose diamonds is the new patterned option |
| `src/CozyRoom.App/wwwroot/css/room.css` | Scene presentation, focus treatment, third palette, acknowledgement timing and reduced-motion handling |
| `tests/CozyRoom.Core.Tests/` | Rule, compatibility, serialization and invalid-state coverage |
| `tests/browser/baseline.mjs` | Published-app browser checks; filename retained from R1 while coverage now includes R2 |
| `checkpoint.json`, `README.md`, `VALIDATION.md`, `NOTICES.md` | Revision identity, run/recovery instructions, observed evidence and provenance/license status |

The interaction path is native button → C# state/rules → SVG/CSS rendering → isolated browser storage. The acknowledgement is CSS-driven; no game logic was added to JavaScript.

## Make one small edit

This exercise changes an authored CSS value in the app source. It does not add a style or change the SVG artwork, save format, or application logic.

1. In PowerShell, confirm you are in `examples\cozy-room` (the folder containing `CozyRoom.slnx`). Open the source stylesheet:

   ```powershell
   notepad .\src\CozyRoom.App\wwwroot\css\room.css
   ```

2. In Notepad, find the exact line `.style-2 .lamp-shade { fill: #d8a9b3; }`. Change only the color to `.style-2 .lamp-shade { fill: #c98e67; }`, then save. This makes the third style a warmer contrasting terracotta. Keep the `.style-2` selector and all other CSS unchanged. Rose diamonds are drawn by the SVG in `src/CozyRoom.App/Components/LampArt.razor`; leave that file untouched.
3. Publish the source edit using the publish command above. Keep `npm run serve` running if it is already open; otherwise start it after publishing.
4. In the browser, open or refresh `http://127.0.0.1:5188`. Activate the lamp until **Rose diamonds** appears. Its shade should now be terracotta, while the diamond pattern remains visible. Cycle through all three styles and reload while Rose diamonds is selected: the third style should still be selected and only its color should differ.
5. To undo, reopen the same `room.css` source file, change `#c98e67` back to `#d8a9b3`, save, run the publish command again, and refresh the preview.

Edit the source file, not `artifacts/publish`. That folder is generated output and a later publish replaces it from source; a change made only there is not a lasting source edit. This exercise demonstrates a visual refinement to the existing third style. It does not promise a new style or independently validate the modified build.

## Bounded R2 prompt

This is a faithful learner-facing restatement of the R2 task, not a claim to reproduce a private agent transcript verbatim:

> Starting from the recorded R1 two-style Cozy Room checkpoint, add one third lamp style with a visible pattern as well as a distinct palette, and a short, calm visual acknowledgement after a user activates the lamp. Keep the room, interaction and version-1 storage key/schema bounded. Preserve valid R1 style-0/style-1 saves without rewriting them on load. Keep the native control keyboard operable and visibly focused; honor reduced motion without suppressing the style change or persistence. Add focused rule and published-app browser coverage for all styles, reload, legacy saves, storage failures and invalid data. Verify the standalone Release output and record what still needs human/device review. Do not add room mechanics, accounts, telemetry, external runtime dependencies or deployment.

## Learner checks

Try these in the finished package:

1. Activate the lamp with mouse, Enter and Space; confirm the same three-style cycle and visible keyboard focus.
2. Choose Rose diamonds, reload, and verify the style returns. Confirm that an ordinary load does not rewrite an existing valid save.
3. Enable reduced motion in the operating system/browser and activate the lamp. The style and save should change, but the acknowledgement element/animation should be absent. Changing the preference while feedback is playing should stop it.
4. Inspect `VALIDATION.md` for the recorded baseline and finished checks, including R1 save compatibility, invalid/future records, storage denial/failure and explicit reset behavior. The browser suite is evidence for the tested browser/environment, not a substitute for human review.
5. The existing R1/R2 validation counts apply to their recorded, unedited app checkpoints. They do not cover the color edit you made. Browser checks are optional; if you run `npm run test:browser`, do so after publishing and stop the manual preview first.

## Recovery and completion

- **Restore/build fails:** Check that the terminal is in the extracted app root and that the .NET 10 SDK is installed. Retry the locked restore with public package-feed access; do not remove lockfiles or change package versions as a first fix.
- **Preview is blank or port 5188 is occupied:** Confirm Release publish succeeded, stop another local server using that port, then rerun `npm run serve`. Open the printed loopback address, not the ZIP's `index.html` directly.
- **Browser suite cannot find a browser:** Windows uses installed Edge. Elsewhere provision the pinned Playwright Chromium locally as described in the app README; the harness does not install a browser automatically.
- **Your chosen shade does not appear after reload:** Saves are scoped to the browser profile and origin. Confirm you reopened the same checkpoint at the same origin/profile. In Room care, read the notice first. A valid R1 style should restore in R2; malformed, future or unknown-style saves are protected and are not silently overwritten. Only confirm the example's explicit fresh-room reset when replacing that example save is intended.
- **Comparing R1 and R2:** They share a key and storage origin can collide. Use separate origins/profiles or deliberately reset the sample state; do not erase unrelated site data.

You are done when you can open R2 locally, change and restore the third-style color in source, publish and reopen it, see the Rose diamonds pattern remain, cycle all three styles, and explain the event → state → rendering → storage path. The recorded test evidence describes the unedited checkpoints; this lesson does not claim its folder or your edited build was tested. A later, separate exercise could add a style with a non-color pattern, but that is outside this change.

## Evidence boundaries and remaining work

The app-subtree exports were extracted and independently built/tested using the observed toolchain and Microsoft Edge **154.0.4258.37**. Baseline R1 passed 22 rules and 10 browser scenarios; finished R2 passed 25 rules and 12 browser scenarios. See the app's [validation record](../../../examples/cozy-room/VALIDATION.md) for command-level details. Those are local checks of the extracted app packages. They do not mean this lesson subtree was itself archived/tested, nor that the app was hosted, deployed, validated offline/PWA-style, or tested in a wide range of browsers.

Touch input in the recorded browser checks was emulated. Physical phone/tablet use, broader browser coverage, screen-reader testing, human accessibility review, adult learner explain-back/repeat, timed seminar rehearsal and child-suitability observation remain open. Optional `wasm-tools`/native AOT and network-performance checks were not run. The owner must decide the original source license and release destination before promoting source downloads; this guide grants no license.
