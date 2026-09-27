# Room seminar execution slices

Revision 0.5 · September 27, 2026. Use [PRD R](13-PRD-COZY-ROOM.md) for the product and this file for execution boundaries. These are ready-to-use goal prompts; no loop or automation has been started.

## Settled inputs

- First example: PocketPlayroom-inspired Cozy Room; two-style lamp baseline, then third style and gentle feedback.
- Public source/guide home: BuildKit. Private presenter home: owner-created `MgGriebZ/BuildWithGriebZ`, verified private with admin access.
- Standalone Blazor WebAssembly/.NET 10; SDK 10.0.302 observed locally. PocketPlayroom's existing .NET 9 app is a reference; its upgrade is separate.
- Adult seminar audience, one prepared hour, free community and paid personal formats. Price, booking windows and first host remain owner decisions that do not block local room preparation.
- PR #2 contains the generic event worksheet and remains independent. Use the branch containing these requirements until its PR is merged; never merge another PR implicitly to begin a slice.

## Work order

| Slice | Model / repository | Allowed output | Acceptance and next step |
|---|---|---|---|
| L1 | Luna / private BuildWithGriebZ | `seminars/cozy-room/` planning material | 60-minute script outline, diagram specifications, rehearsal checklist, handoff template; mark app-dependent details unverified. Can run beside R1 |
| R1 | Sol / public BuildKit | `examples/cozy-room/` | Independent baseline with two styles, persistence and recovery; build/rule/browser checks recorded; baseline commit identified |
| R2 | Sol / public BuildKit | `examples/cozy-room/` | Add third style and feedback, retain baseline save compatibility and input behavior; finished checkpoint identified |
| L2 | Luna / public BuildKit | `lessons/free/cozy-room/` | Write guide against R1/R2 exact revisions; checkpoint manifest, scoped export instructions and actual local reopening check |
| L3 | Luna / private BuildWithGriebZ | `seminars/cozy-room/` | Update presenter material to observed demo; diagram sources/static fallbacks, 60-minute free-class adaptation and recovery; reference public files rather than duplicate app code |
| H1 | Owner with adult tester | Private rehearsal record | Timed rehearsal, learner explain-back/repeat attempt, device and host facts; agent prep alone does not close this |
| U1 | Sol / PocketPlayroom, later separately scoped | One selected upstream room change | Review evidence, agree exact improvement, preserve product invariants; separate PR before any production release |

R1 -> R2 -> L2 and L1 -> L3 -> H1 are the main paths; L3 also needs L2. A new marketing site, merged event worksheet, Stripe setup and full paid course are not prerequisites for these local outputs. A1/A3 branding/site tickets remain supporting work.

## Shared execution contract

Read the repository's AGENTS.md and current requirements first. Check clean/dirty state, preserve other changes, and create a feature branch from the required approved checkpoint. If these planning PRs are still open, use their reviewed branch contents explicitly and state the base; do not silently run against stale main. Linked PRs may be stacked; when a dependency merges, retarget/rebase deliberately and recheck the diff.

Work to the named slice's acceptance criteria, commit the scoped files, push a branch and open a PR. Attach the PR to the chat. Stop with a concise result and remaining human checks. No automatic merge, public deployment, source-visibility change, purchases, outreach or unrelated app migration is included in these default goals. A requested implementation goal authorizes the named source/guide changes and their checks.

Use the requested model for its slice. Luna may report a precise integration blocker for Sol after one focused repair; it should not repeatedly regenerate the app. Record practical test results, not routine credit counts. Bounded goals end at a reviewable PR; a recurring unattended loop is unnecessary for this sequence.

## Goal: Luna / L1

> In the private MgGriebZ/BuildWithGriebZ checkout, execute L1 using planning/ROOM-SEMINAR-HANDOFF.md and the linked public PRD R. Author only seminars/cozy-room/: a 60-minute seminar outline, speaker-note draft, specifications for a few diagrams, a rehearsal checklist and blank client handoff. Teach the two-style lamp baseline -> third style plus gentle feedback, explaining local saves and verification. Provide free-group and personal-session pacing using one core. Mark all unbuilt app behavior and file references pending; don't invent results. Verify timing sums, links and consistency. Commit, push a private branch and open a PR. Stop at the reviewable draft; no merge or deployment.

## Goal: Sol / R1

> In MgGriebZ/BuildKit, execute R1 from docs/planning/13-PRD-COZY-ROOM.md and 14-EXECUTION-HANDOFF.md. Write only examples/cozy-room/. Build an original standalone .NET 10 Blazor WebAssembly Cozy Room with one lamp, two styles, semantic activation and versioned isolated local persistence with documented recovery. Keep all run/build configuration within the subtree. Use original HTML/CSS/SVG art and no private repository dependency. Record SDK/packages, run focused rules and browser checks including reload, keyboard/touch, reduced motion and storage failures, and verify Release output. Record what needs real-device/human testing. Commit the baseline, push a feature branch and open a PR. Stop there; no merge or deployment.

## Goal: Sol / R2

> Continue from R1's reviewed baseline revision in BuildKit. Execute R2 in examples/cozy-room/: add the third lamp style and gentle feedback from PRD R. Keep the baseline checkpoint immutable and record its commit. Check all style cycles, older valid save compatibility, reload persistence, keyboard/mouse/touch and reduced motion. Avoid expanding the room. Commit a finished checkpoint, push the branch and open/update the explicitly named slice PR with evidence. Stop for review; no merge or deployment.

## Goal: Luna / L2

> After R1/R2 have actual checked revisions, author only lessons/free/cozy-room/ in BuildKit. Use the real baseline/finished source to write a concise follow-along with viewer/editor prerequisites, exact commands, changed files, prompts, expected output, recovery and done checks. Include a manifest of both full commit IDs and instructions that export only examples/cozy-room/ to temporary local packages. Open each export independently and check the documented run path using the existing toolchain. State any missing tools; don't install globally or claim a check you couldn't run. Record source/license release status accurately. Commit, push and open a PR; no merge or deployment.

## Goal: Luna / L3

> In private BuildWithGriebZ, finish L3 after the public guide and demo have checked revisions. Update only seminars/cozy-room/ to the actual behavior and paths; create readable diagram sources with static/text fallbacks, presenter recovery steps and a free 60-minute class adaptation. Link to the public source/checkpoints rather than copying app code. Check pacing and references; leave actual timed adult rehearsal and physical-device checks as owner tasks. Commit, push and open a private PR. Stop at the reviewed kit; no outreach, merge or deployment.

## Owner choices before release or paid delivery

Original sample source license, public hosting destination, first host/date/audience details, price/customer policies and business/payment readiness. Their resolution is timed to the affected release or sale, not a prerequisite to L1 or R1. See [readiness](10-READINESS.md).
