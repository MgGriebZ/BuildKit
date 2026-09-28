# PRD S: your idea, explained and refined in a personal seminar

Revision 0.5 · September 27, 2026. The owner selected seminar-led 60-minute teaching. Cozy Room is the first topic. Price remains proposed. This is a public production brief, not the private presenter script itself.

## Experience and promise

The presenter teaches through a working example, visual explanation, one bounded refinement and clear next steps. The first topic is a standalone, bedroom-inspired Cozy Room using Blazor WebAssembly, C#, HTML, CSS and SVG. Its R1 baseline cycles two lamp styles and persists selection; the R2 refinement adds a third patterned style and gentle feedback. The implementation has recorded keyboard, mouse, emulated touch, reduced-motion and version-1 save-compatibility checks; physical-device, screen-reader and learner checks remain open. See the current slice status and evidence in [06-EXECUTION.md](06-EXECUTION.md). A public follow-along is in review as PR #6. PocketPlayroom remains the full product/reference; the new example avoids private source dependencies. Scope for any personalized seminar is confirmed before payment.

Working copy: "Your idea, a working example, and a clear way forward. A personal AI-building seminar with a guided refinement and your take-home Build Kit included."

The same Cozy Room core supports free public/community classes and personalized seminars. The public follow-along is a useful free takeaway. Personalized scoping and tailored handoffs remain part of the personal format. Paid standalone course/LMS is deferred. See [04-PRD-COMMUNITY.md](04-PRD-COMMUNITY.md).

## Reusable hour

| Minutes | Presenter/participant activity | Visible result |
|---|---|---|
| 0–5 | Confirm the participant's goal; show the finished baseline | They know what works before the live change |
| 5–15 | Explain the room and interaction with simple visuals | Learner understands the baseline and choices |
| 15–25 | Walk through the prepared example and its implementation decisions | Learner sees how the working result is structured |
| 25–45 | Make one bounded refinement together | One observable before/after change |
| 45–55 | Check the change; participant explains it or repeats a small step | Evidence of behavior and understanding |
| 55–60 | Reopen artifact, explain included kit and agree next steps | A clear handoff and support boundary |

Adapt the pacing for experience level. A presentation-only participant can choose the refinement and explain its effect while the owner operates the tools. A hands-on participant can operate their prepared environment. Confirm the mode beforehand. Installation/account recovery should not consume a promised demonstration hour; resolve in preflight or agree a different session.

## First teaching example

The independent, child-friendly Cozy Room example and public guide now exist in BuildKit review branches `examples/cozy-room` and `lessons/free/cozy-room` (PRs #4–#6). The room is a play experience, with no course or sales CTA inside it. Seminar learners and marketing are adult-facing. The R1 baseline cycles two styles and persists the choice; R2 adds Rose diamonds and gentle acknowledgement while preserving the version-1 save and input behavior. The new example targets net10.0; existing PocketPlayroom is Blazor net9.0 and remains the full product/reference. Portfolio and Riot API tracks are deferred beyond the first room.

Do not use private PocketPlayroom code/assets as dependencies or publish them. Any later upstream room polish is a separate scoped slice; it does not automatically publish source or deploy anything.

## Mermaid and presentation requirements

For Cozy Room, prepare two or three small visuals: a goal-to-checked-result flow, a room/component map, and optionally a lamp interaction/state view. Each should answer a learner question. Provide readable static fallbacks and a text explanation in the follow-along; learners need no Mermaid editor account. Labels must match the implemented example. Prefer a few useful visuals over filling slides with complexity.

The private presenter kit contains the actual script, diagram sources, original demo checkpoints, selected prompt sequence, recovery plan and rehearsal notes. The shareable client kit contains only the agreed cleared subset plus personalized next steps. Keep private working notes and client information out of public build artifacts.

## Measured example: credits to result

This is an optional teaching case study, not routine reporting for repository tasks. A valid demonstration identifies the baseline, actual bounded change, date, model/tool configuration, measurement source, observed usage for that isolated run, retries and output checks. Separate prerecorded/prepared work from the live incremental change. If the usage source includes unrelated work, is unavailable or cannot isolate the example, label it unavailable or an explicitly qualified estimate rather than presenting a precise number.

Show the observable result with the record; do not claim that a fixed number of credits always buys the same app or convert subscription credits into cash without an applicable verified rate. Presenter preparation time and existing starter code must be visible context. No purchase or quota consumption is required just to populate a presentation slide. Do not count/report credits on every ordinary agent task; the owner explicitly waived that routine reporting.

## Preparation economics and completion

Build a reusable seminar core once and track its development effort separately from the 60-minute appointment. Initial planning allowance: one bounded preparation block chosen by the owner; no unlimited bespoke deck per inexpensive session. Personalize an existing track within a proposed 15-minute preflight block, plus 15-minute handoff; if a request needs more, reduce scope or quote different preparation/delivery before booking. Reusable content development is real work even when later sessions reuse it.

Acceptance before the first sold seminar: owner rehearses the hour against a clock; prepared demo/checkpoints and offline fallback work; sample diagrams are readable; one refinement has observable checks; fixture/live API status is explicit; client kit reopens in a fresh folder; exact policies, price and selected delivery tools are ready. Test with one adult participant and record what they can explain/repeat. A prepared spec is not a completed seminar or evidence of customer demand.
