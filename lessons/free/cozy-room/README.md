# Cozy Room: from a saved lamp to a small star hunt

This free follow-along uses the standalone Blazor Cozy Room. The checked R2 starting point has three patterned lamp shades, a calm change acknowledgement, and browser-local saving. The checked R3 result adds three star controls, progress from 0/3 to 3/3, a completion message, and Replay. Collecting stars is temporary: reload begins a new round. The lamp choice and its save key/schema remain unchanged.

R1/R2's optional palette edit remains a historical beginner exercise below. The main worked example is the R2-to-R3 mini-game. This is a small demonstration with inspectable code and checks, not a promise that an arbitrary app will be completed in an hour.

## Choose a path

**Read or observe:** Read this lesson without setup. No hosted demo is provided. A browser alone cannot run the Blazor source tree; a presenter may show a locally running copy.

**Run the checked reference locally:** Use Windows PowerShell, Git, .NET SDK 10.0.302 (or a later allowed .NET 10 feature-band patch), Node.js 22.12.0 and npm. Node/npm are needed for the included local preview; npm installation is needed only for optional browser checks. Restore needs access to public NuGet feeds. No account, private repository, credential, paid AI subscription, API key, or cloud resource is needed to build and run the sample. This is the tested Windows path; other systems may use a compatible shell and editor, but were not independently verified here.

## Checkpoints and honest before/after

The R2 standalone app export is `15a93acae7e12fea71ea768b9198428f39a5a312`; its runtime/test source checkpoint is `91eab16835aac4cfd80a7f51017ac62f5cc6b9bd`. R3 starts from that R2 app source. The R3 checked runtime/test revision is `7516e7b29908108a6567b5859fab5faab4d849f8`; the independently reopened app-only export is `96d51856825cfd36c758aebb55c3c716a2173451`. The root [R3 run record](../../../examples/cozy-room/R3-RUN.md), [validation record](../../../examples/cozy-room/VALIDATION.md), and [checkpoint manifest](../../../examples/cozy-room/checkpoint.json) describe the run and evidence.

**Before (R2):** a bedroom with three lamp styles, a calm lamp acknowledgement, and a version-1 browser-local lamp save.

**After (R3):** window, bed, and rug star buttons; each collects once; progress is announced from 0/3 through 3/3; completion says “You found every star. Nicely done.”; Replay resets the round and returns focus to the first star. Reload resets the round, while the lamp save remains. The game has no timer, leaderboard, account, backend, runtime AI, or new dependency.

The actual user task was: “Sol R3 builds and validates the mini-game”. The scoped implementation request asked for three accessible star buttons, single collection, announced progress, completion and Replay, a temporary round, preserved lamp storage, reduced-motion support, and checks. The agent then inspected the diff and ran the documented validation. This was one AI-assisted development task; private presenter cards were not separately performed as a live A–E teaching sequence. No audience-selected color or message was supplied; the checked reference uses warm gold and the message above.

## Open and run the standalone R3 reference

Run these commands from a BuildKit repository root (the folder containing `examples`). They export only the checked app subtree into a new folder, leaving your checkout untouched:

If you need the public source checkout, clone BuildKit after the checked R3 reference is available on its default branch:

```powershell
git clone https://github.com/MgGriebZ/BuildKit.git
Set-Location .\BuildKit
```

The pinned archive command below requires a checkout that contains the recorded R3 export revision.

```powershell
git archive --format=zip --output=cozy-room-r3.zip 96d51856825cfd36c758aebb55c3c716a2173451:examples/cozy-room
Expand-Archive -LiteralPath cozy-room-r3.zip -DestinationPath cozy-room-r3
Set-Location .\cozy-room-r3
dotnet restore CozyRoom.slnx --locked-mode
dotnet build CozyRoom.slnx --no-restore
dotnet test CozyRoom.slnx --no-build --no-restore
dotnet publish src/CozyRoom.App/CozyRoom.App.csproj -c Release -o artifacts/publish --no-restore
npm run serve
```

Open `http://127.0.0.1:5188`. This is a loopback preview on your computer; it does not host or deploy the app. Stop it with Ctrl+C. Use a new destination directory for another export. R2 and R3 use the same browser storage key, so compare them in separate browser profiles/origins or reset only this sample's state deliberately.

The recorded standalone export passed locked restore, build (0 warnings/errors), 40 rule cases, Release publish, and 21 browser scenarios: **12 lamp/save regression scenarios plus 9 game scenarios**. The earlier R2 checkpoint passed 25 rule cases and 12 browser scenarios. R2's counts are historical and are not R3 coverage. R3 added 15 rule cases to the 25 retained lamp/save cases. These automated results apply to the named, unedited reference in the recorded environment; they do not prove a learner's new AI-generated change works.

Touch was emulated in a browser, not tested on a physical phone/tablet. The checks used Windows and headless Microsoft Edge 154.0.4258.37; wider browser compatibility, physical-device use, screen-reader speech, and human accessibility review remain unverified. The lesson itself was not separately archived and tested as an independent package. No deployment, offline/PWA test, Azure capacity check, or hosting test is implied.

## Actual development run, timing, and cost evidence

The R3 record says implementation began at 18:49:55 UTC and the passing browser result was observed at 18:56:23 UTC on September 28, 2026: 6m28s from implementation start through the passing browser run. Visual inspection, writing, committing, and standalone reopening followed. The first browser attempt failed because the test tool's normal click refused an already collected `aria-disabled` star. The agent changed the harness to send a real pointer event; the app's duplicate guard then passed. This was a harness failure, not an observed game defect.

This time is an agent implementation/validation interval, not a one-hour seminar or a learner result. Provider/product was OpenAI Codex desktop, and the owner selected Sol. The exact serving model/version, effort, billing mode, isolated tokens/credits, and per-run cost were unavailable. No usage was inferred from a subscription fee or remaining-limit percentage. Playing the resulting game makes no AI request and consumes no model tokens.

## Prepared prompt for a separate replay

The prompt below was prepared after the checked run. It was **not** the verbatim prompt sequence executed in that run and has not been independently replayed as another AI run. Outputs may vary. Treat it as a starting point, then inspect and test any new result.

> Inspect this standalone R2 Blazor Cozy Room and propose the smallest change before editing. Add three native star buttons around the room, with distinct accessible names and visible focus. Each star counts once; show and politely announce 0/3 through 3/3. At completion show “You found every star. Nicely done.” and Replay. Replay resets only the round; reload starts a new round while the existing lamp choice/save continues unchanged. Keep collected controls reachable with a predictable keyboard focus path, and return focus to the first star after Replay. Use original static SVG/CSS and a warm gold accent. Respect reduced motion. No dependencies, save-schema changes, backend, timer, leaderboard, external assets or runtime AI. Work only in this sample. Build, test and publish; check duplicate activation, replay/reload, keyboard/pointer/touch and lamp/storage failures. Show the diff and actual results. Do not commit, push or deploy this live attempt.

For your own run, save a copy of the untouched R2 export first. Review the plan and allowed files, inspect the diff after editing, and run the checks from the standalone sample root. If something fails, give the tool the actual error and request one focused diagnosis; do not call the prepared harness failure an app bug. Compare your observed result with the R3 reference, and keep your own run's counts and cost separate from its.

## Optional historical R1/R2 palette practice

This earlier exercise changes only the third lamp shade's CSS color. It is a small beginner edit, separate from the R3 game feature, and does not reproduce R3.

The R2 standalone export is `15a93acae7e12fea71ea768b9198428f39a5a312`. From a BuildKit repository root, export it into a separate folder using the R2 revision and path, then enter that exported folder:

```powershell
git archive --format=zip --output=cozy-room-r2.zip 15a93acae7e12fea71ea768b9198428f39a5a312:examples/cozy-room
Expand-Archive -LiteralPath cozy-room-r2.zip -DestinationPath cozy-room-r2
Set-Location .\cozy-room-r2
```

From the standalone app root, restore, open `src/CozyRoom.App/wwwroot/css/room.css`, and change only `.style-2 .lamp-shade { fill: #d8a9b3; }` to use `#c98e67`. Then publish with the command above and preview with `npm run serve`. Confirm the Rose diamonds pattern remains visible and the selected style still returns after reload. Undo by restoring `#d8a9b3` and publishing again. This manual edit was not separately tested; the R2 validation counts apply only to the unedited checkpoint.

## Sources, license, and next human checks

The game sources, test evidence, and commands are linked above. See the free [AI introduction](../ai-intro/README.md) for a reusable prompt framework and cost distinctions. The original sample source license is pending an owner decision; neither the manifest nor this lesson grants redistribution or relicensing permission.

Still outstanding: physical phone/tablet input; human screen-reader and accessibility review; broader browser coverage; an adult independently following the instructions and explaining the result; timed seminar rehearsal; and the original-source license decision. The R3 automated checks do not complete these human checks.
