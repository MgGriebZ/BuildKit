# PRD R: polish a PocketPlayroom-inspired Cozy Room

Revision 0.7 · September 28, 2026. R1/R2/R3 are implemented reference checkpoints. The current educational hour follows [PRD 15](15-PRD-AI-INTRO-LIVE-BUILD.md); Cozy Room is its short Code case, with the full build retained as an optional lab.

## Product decision

The optional Code lab teaches adults to refine a small, working room using AI-assisted development. PocketPlayroom is the real product context. The independent follow-along product is **Cozy Room**, an original bedroom-inspired example with one lamp to personalize. The room's promise is belonging: make a small choice and return to find it remembered.

Use Blazor WebAssembly, C#, HTML/CSS and SVG. PocketPlayroom already uses this stack; this continues its architecture. Its inspected source targets .NET 9. The new standalone example targets .NET 10, with SDK 10.0.302 observed locally. A full PocketPlayroom upgrade is separate work. Exact commands and package versions must be recorded by the implementation slice after a successful build.

The standalone room and public follow-along are implemented. A compact paid introduction is now in scope under PRD 15; an LMS and app authentication remain deferred. The free class, standalone guide and personal help share the example. Portfolio and Riot API tracks remain later options.

## Three connected outputs

| Output | Home | Purpose |
|---|---|---|
| Full PocketPlayroom | Existing product/repository | Real context and a future recipient of useful room improvements; its household remains intact |
| Independent Cozy Room and public follow-along | BuildKit: `examples/cozy-room/`, `lessons/free/cozy-room/` | Runnable learning product with no private repository dependency |
| Presenter material | Private BuildWithGriebZ: `seminars/cozy-room/` | Speaker notes, pacing, rehearsal/recovery notes and personal-session templates |

The sample is a deliberately smaller original implementation, not a maintained fork of the full household. No source-level dependency between these repositories is required. Any later upstream integration uses PocketPlayroom's current canonical docs and separate branch review. Existing public play does not imply public source licensing. Personal names, saved households and uncleared artwork stay out of the teaching example.

## Historical R1/R2 implementation

**Prepared baseline:** one calm room, one fixed lamp, two visibly different lamp styles, direct activation and local persistence. The presenter has already built and checked it.

**Guided refinement:** add a third lamp style and a brief, gentle visual acknowledgement of a style change. Let the group or client choose the new palette within that scope. Shape/pattern or another visible cue complements color. The choice survives an ordinary reload. Reduced-motion mode provides the same state change without animated feedback.

**Observable finish:** activate the lamp through all three styles, reload at the new style, and find it retained. Explain the event -> C# state -> rendering -> browser storage path and identify where the third style was added. Keyboard activation and touch produce the same result as a mouse.

The source product already has lamp-style cycling; the lesson makes this existing concept understandable and polishes a small independent instance. It does not claim to invent a missing PocketPlayroom feature. Dragging, drawing, more furniture, physics, audio and cross-room movement are outside the first lesson. They can be later refinements after this end-to-end path is usable.

## Room presentation and polish

The playable result should read as a small inviting room, with the lamp as a clear focal point. Original static wall/floor, a bedside surface and restrained window/bed silhouettes can establish place without adding mechanics. Use a coherent warm palette, consistent outlines/shadows and deliberate spacing. The initial lamp silhouette and gentle glow should communicate its role before any tutorial text.

Keep controls integrated into the scene; make the lamp itself the generous activation target. Show its current style with shape/pattern as well as color. Feedback should acknowledge an action briefly without flashing, shaking the whole room or requiring sound. Keep every style legible against the room background and a visible focus indicator available for keyboard users.

Review desktop, landscape-tablet and narrow-screen captures for room framing, clipped objects, target overlap and readable adult controls. Record actual dimensions and remaining physical-device checks. New art should be authored in CSS/SVG within this example, with no dependency on the private product's personal room names or assets. Visual polish is part of the room slice's acceptance; an isolated toggle in a generic form is only an intermediate implementation.

## Architecture and scope

- Create one standalone `blazorwasm` application, a small C# rules project and focused rule tests inside `examples/cozy-room/`. Keep solution, SDK pin, package pins, assets and run instructions in that subtree so it can be distributed independently.
- Use .NET 10 and pin the tested SDK in a subtree `global.json`. No SDK installation or machine-wide defaults need changing for the observed local environment. Recheck tool availability on another machine.
- Use semantic HTML controls, CSS scenes and original SVG/CSS art. The lamp may be a button with an accessible action name, visible keyboard focus and a generous activation area. No drag-only, hover-only, sound-only or color-only requirement for play.
- C# owns style selection and validation. JavaScript is a narrow browser-storage adapter; CSS handles the feedback transition. No 3D engine, physics library or repeated cross-runtime animation calls are needed for this lesson.
- Save only version, stable room/object IDs and lamp style. A small versioned JSON record in localStorage is sufficient for this sample; PocketPlayroom's IndexedDB household store remains unchanged. Saves are local to the browser/device and can be cleared.
- Use a sample-specific namespace, such as `buildwithgriebz.cozy-room.v1`. Never open or migrate PocketPlayroom storage keys. Side-by-side baseline/finished previews must use different namespaces or origins. Document how a learner deliberately returns to a checkpoint.
- For unavailable storage, keep play functional and show an adult-readable persistence notice. For malformed or future-version data, retain the stored value, explain recovery and avoid overwriting it until the user explicitly chooses a fresh demo state. Any reset confirmation affects only this example.
- The baseline schema must accept the later third style when the finished checkpoint loads old valid state. Validate unknown values and missing fields; record the chosen fallback. Do not claim migration coverage without checks.
- Publish output is static files, served over HTTP(S); double-clicking an HTML file is not a supported way to run the app. No server-side Blazor connection, API, login or cloud save is required. [Microsoft hosting guidance](https://learn.microsoft.com/en-us/aspnet/core/blazor/hosting-models?view=aspnetcore-10.0).
- Local persistence does not establish offline reload. PWA/service-worker installation is deferred; use a tested local server or captured presentation fallback at the seminar. Label any untested offline behavior explicitly.

## Audience and presentation

Seminar learners are adults or an appropriately arranged supervised audience. People can participate by choosing the palette and explaining the result while the presenter operates the tools. A viewer needs only a supported browser for the eventual hosted demo. A source-editing learner needs the documented SDK/editor setup, prepared before class; local source setup is not required to attend.

The room is suitable for demonstrating the child-friendly product's principles: direct play, gentle feedback and remembered choices. Put tutorial instructions and business contact links on the adult learning page, outside the play surface. Use no accounts, telemetry, child identifiers or sales prompts in the room. Actual suitability for children is an observation question, not a claim established by a browser test.

Use the hour in PRD S: finished preview, a few clear diagrams, baseline explanation, the bounded refinement, checks and handoff. For the first class, teach only the third-style/feedback change. Presentation preparation, SDK setup and the already-working baseline are disclosed as work done beforehand.

## Public follow-along and checkpoints

Keep one canonical source tree with named baseline and finished commit checkpoints. Record exact revisions and runnable commands in a checkpoint manifest. Do not maintain two drifting app copies. Export only the example subtree from each revision into local distribution artifacts; include the necessary run instructions and notices. Do not package the entire repository, history or private authoring workspace.

The public guide provides: prerequisites for viewers versus editors, checkpoint selection, the changed files, the prompt used, an expected before/after result, verification steps, failure recovery and one next exercise. A learner can download/open the documented checkpoint and resume without the presenter. The existing event-page worksheet in PR #2 is an optional general scoping resource; it does not block this room guide.

Use original example code/art. Record provenance and required third-party notices. An explicit redistribution license is an owner decision before promoting source downloads as freely reusable; it does not block authoring the original example or its guide.

## Acceptance evidence

| Gate | Required observation |
|---|---|
| Independent build | Restore/build/test/publish commands succeed from the example subtree; no private checkout, secret, external API or asset CDN is needed at runtime |
| Baseline | Two styles cycle; valid saved choice returns after reload; no writes to the full product's storage |
| Finished | Third style cycles and persists; older valid baseline save survives; feedback respects reduced motion |
| Input and layout | Mouse, keyboard and touch-emulated interactions work at desktop and representative tablet/mobile viewports; focus and controls stay usable |
| Room polish | Captures show a coherent room, clear lamp affordance, legible style choices and calm feedback; no clipping or overlapping controls at the recorded viewports |
| Failure recovery | Storage denial, malformed/future saves and explicit reset behave as documented; no silent destruction of existing saved data |
| Distribution | Both source checkpoint exports open and run using only their included instructions; public package inspection excludes private material |
| Teaching | Guide matches actual files/revisions; presenter completes a timed rehearsal and another adult can repeat the change or explain it |
| Device evidence | Record tested browser/device/viewport; physical touch device and learner observations remain explicit gaps until performed |

These requirements originated as implementation gates. R1/R2/R3 now have recorded automated evidence; R3 records 40 rule cases and 21 browser scenarios at its exact checkpoint. This documentation revision performs no new runtime validation. Human device, screen-reader and revised-hour rehearsal checks remain pending; see [readiness](10-READINESS.md).

## Later public release and upstream improvement

First produce a reviewable local room and lesson. Public hosting requires the chosen destination, source/license review, acceptance evidence and an explicit release task. Keep the public product name and tutorial association clear without claiming all PocketPlayroom source is open.

Then consider one upstream room improvement backed by the lesson/rehearsal results. Review current PocketPlayroom behavior first; avoid a cosmetic transplant that duplicates an existing feature. That separate slice must preserve both bedroom instances, household saves, cross-room interactions and the product's child-facing rules. Runtime upgrade, deployment workflow and repository visibility are separate changes.

## R3: three-star mini-game for the live AI demonstration

Status: implemented at runtime/test revision `7516e7b29908108a6567b5859fab5faab4d849f8`, with checked app export `96d51856825cfd36c758aebb55c3c716a2173451`. The requirements below document the existing R2-to-R3 change and optional extended lab. Follow [PRD 15](15-PRD-AI-INTRO-LIVE-BUILD.md) for current timing and [handoff](14-EXECUTION-HANDOFF.md) for remaining work.

Add three native star buttons with distinct accessible names and usable pointer targets. Collection is unique per star; progress goes from 0/3 to 3/3, with a polite status announcement. Completed round shows a calm message and Replay. Replay returns all three stars and clears only round progress. Reload also starts a new round; preserve the existing lamp save and all existing storage failure protections.

Collected controls must not leave keyboard users stranded: use a predictable focus policy when a control is removed/disabled; keep remaining stars and Replay reachable. Retain visible focus, mouse/touch/keyboard behavior and reduced-motion handling. No color-only distinction, timer, leaderboard, cloud save, account, runtime AI, API, external art or unrelated room expansion.

Checks cover unique collection, repeated activation, progression/completion, replay, reload reset, keyboard focus/status announcement, pointer/touch, reduced motion and lamp/save regression. Verify publish/output and scoped export. Record new tests separately from historical R2 counts. Human screen-reader/device checks remain explicit if not performed.

Provide a checked finished checkpoint and a repeatable teaching path from an exact clean R2 tree. Document actual prompts, elapsed build/check/repair time and failures; no fabricated successful transcript or usage. Preserve R1/R2 historical commits and any failed attempt separately. A feature implementation does not demonstrate that a novice understood it or that it fits the hour; H1 supplies that evidence.
