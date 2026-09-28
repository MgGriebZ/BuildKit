# Cozy Room: from a remembered choice to a polished interaction

This follow-along accompanies the standalone Cozy Room example. You begin with a small bedroom and a lamp with two patterned shades; the finished checkpoint adds a third shade and a brief, gentle acknowledgement when the lamp changes. The selected shade survives a reload. The lesson is a bounded example of taking a visible idea through C# rules, rendering, persistence and verification—not a promise to build a complete game or arbitrary application in one hour.

The public app is original and self-contained. It does not require PocketPlayroom or the private presenter repository. No account or signup is needed to read or run a downloaded copy. This guide and its validation describe local source packages, not a hosted demo, offline/PWA behavior or a redistribution license. The source license remains an owner decision; do not treat this guide as permission to republish or relicense the app.

## Choose how to participate

**Viewer / seminar participant:** To follow a live or hosted presentation, you need only a current browser. The local app preview described below requires the editor setup. A browser by itself cannot open the Blazor source tree as a playable app.

**Editor:** For the .NET build and local app, use Windows, macOS or Linux with .NET SDK **10.0.302** (the subtree pins this SDK; the `global.json` allows later patches in this feature band). To run the static preview and browser checks, also install Node.js **22.12.0** with npm. Restore needs access to public NuGet/npm package feeds. No private checkout, credentials, external runtime API or asset CDN is required. Browser-test runs use the included Playwright dependency; Windows selects installed Microsoft Edge, while other platforms default to locally provisioned Playwright Chromium.

## Get the two checkpoints

Only the `examples/cozy-room/` app subtree is exported and independently checked. The lesson directory itself was not separately exported or tested. From a local BuildKit clone, create each package in a separate temporary directory; these commands use the exact reviewed-tree revisions recorded in [checkpoint.json](checkpoint.json):

```powershell
git archive --format=zip --output="$env:TEMP/cozy-room-r1.zip" 15d24cfa060f8cd0b45084426aba7c2eaebce4c1:examples/cozy-room
git archive --format=zip --output="$env:TEMP/cozy-room-r2.zip" 15a93acae7e12fea71ea768b9198428f39a5a312:examples/cozy-room
```

Extract each ZIP to its own directory (for example, `cozy-room-r1` and `cozy-room-r2`). Open a terminal in the extracted app directory—the one containing `CozyRoom.slnx`. The ZIP contains the app subtree only, not this lesson, the whole repository or Git history. The full runtime/test source checkpoint IDs are also listed in the manifest; the review-tree revisions add the validated app README, validation record and checkpoint metadata around those source checkpoints.

## Build and run locally

Run from the extracted app directory. These are editor/local-preview steps; attending as a viewer does not require them.

```powershell
dotnet restore CozyRoom.slnx --locked-mode
dotnet build CozyRoom.slnx --no-restore
dotnet test CozyRoom.slnx --no-build --no-restore
dotnet publish src/CozyRoom.App/CozyRoom.App.csproj -c Release -o artifacts/publish --no-restore
npm ci --ignore-scripts --no-fund --no-audit
npm run serve
```

Open `http://127.0.0.1:5188` in a browser. `npm run serve` serves the Release output locally on loopback; it is not deployment or an internet-hosted site. Stop the server with Ctrl+C. In another terminal (or after stopping the preview), browser checks can be run with:

```powershell
npm run test:browser
```

The browser harness starts its own local server on port 5188, so stop a manual preview on that port first. It uses an installed Edge on Windows; other platforms use Playwright Chromium, which may need local browser provisioning. No global browser install is performed automatically. The commands and test results below describe app checkpoints, not independent tests of this guide.

## Follow the change

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

## Bounded R2 prompt

This is a faithful learner-facing restatement of the R2 task, not a claim to reproduce a private agent transcript verbatim:

> Starting from the recorded R1 two-style Cozy Room checkpoint, add one third lamp style with a visible pattern as well as a distinct palette, and a short, calm visual acknowledgement after a user activates the lamp. Keep the room, interaction and version-1 storage key/schema bounded. Preserve valid R1 style-0/style-1 saves without rewriting them on load. Keep the native control keyboard operable and visibly focused; honor reduced motion without suppressing the style change or persistence. Add focused rule and published-app browser coverage for all styles, reload, legacy saves, storage failures and invalid data. Verify the standalone Release output and record what still needs human/device review. Do not add room mechanics, accounts, telemetry, external runtime dependencies or deployment.

## Learner checks

Try these in the finished package:

1. Activate the lamp with mouse, Enter and Space; confirm the same three-style cycle and visible keyboard focus.
2. Choose Rose diamonds, reload, and verify the style returns. Confirm that an ordinary load does not rewrite an existing valid save.
3. Enable reduced motion in the operating system/browser and activate the lamp. The style and save should change, but the acknowledgement element/animation should be absent. Changing the preference while feedback is playing should stop it.
4. Inspect `VALIDATION.md` for the automated baseline and finished checks, including R1 save compatibility, invalid/future records, storage denial/failure and explicit reset behavior. The browser suite is evidence for the tested browser/environment, not a substitute for human review.
5. If you have the local browser tooling installed, run `npm run test:browser` after publishing. The expected observed counts for these exact exports are R1: **22 rule cases and 10 browser scenarios**; R2: **25 rule cases and 12 browser scenarios**.

## Recovery and completion

- **Restore/build fails:** Check that the terminal is in the extracted app root and that the .NET 10 SDK is installed. Retry the locked restore with public package-feed access; do not remove lockfiles or change package versions as a first fix.
- **Preview is blank or port 5188 is occupied:** Confirm Release publish succeeded, stop another local server using that port, then rerun `npm run serve`. Open the printed loopback address, not the ZIP's `index.html` directly.
- **Browser suite cannot find a browser:** Windows uses installed Edge. Elsewhere provision the pinned Playwright Chromium locally as described in the app README; the harness does not install a browser automatically.
- **Your chosen shade does not appear after reload:** Saves are scoped to the browser profile and origin. Confirm you reopened the same checkpoint at the same origin/profile. In Room care, read the notice first. A valid R1 style should restore in R2; malformed, future or unknown-style saves are protected and are not silently overwritten. Only confirm the example's explicit fresh-room reset when replacing that example save is intended.
- **Comparing R1 and R2:** They share a key and storage origin can collide. Use separate origins/profiles or deliberately reset the sample state; do not erase unrelated site data.

You are done when you can open both app checkpoints independently, describe the R1-to-R2 change, cycle and reload all three finished styles, explain the event → state → rendering → storage path, and locate the test/recovery evidence. Optional next exercise: add a fourth style with a non-color pattern while keeping it valid, persisted and covered by both rule and browser checks. Keep that as a separate bounded change; do not infer that the public product or course is being expanded here.

## Evidence boundaries and remaining work

The app-subtree exports were extracted and independently built/tested using the observed toolchain and Microsoft Edge **154.0.4258.37**. Baseline R1 passed 22 rules and 10 browser scenarios; finished R2 passed 25 rules and 12 browser scenarios. See the app's [validation record](../../../examples/cozy-room/VALIDATION.md) for command-level details. Those are local checks of the extracted app packages. They do not mean this lesson subtree was itself archived/tested, nor that the app was hosted, deployed, validated offline/PWA-style, or tested in a wide range of browsers.

Touch input in the recorded browser checks was emulated. Physical phone/tablet use, broader browser coverage, screen-reader testing, human accessibility review, adult learner explain-back/repeat, timed seminar rehearsal and child-suitability observation remain open. Optional `wasm-tools`/native AOT and network-performance checks were not run. The owner must decide the original source license and release destination before promoting source downloads; this guide grants no license.
