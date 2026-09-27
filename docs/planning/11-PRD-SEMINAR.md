# PRD S: your idea, explained and refined in a personal seminar

Revision 0.4 · September 27, 2026. The owner selected a one-hour, seminar-style one-to-one experience with visual explanations, a working product and included Build Kit. Price remains proposed. This is a production brief for future seminar content, not the private presenter script itself.

## Experience and promise

The participant chooses a small project direction before the appointment. The presenter arrives with a working, relevant example and a short visual explanation of how it was built, then guides one agreed refinement. The participant sees the original and changed behavior, helps make a decision, and leaves with a usable handoff. Scope is confirmed before payment; "any room/game/toy" is an invitation to propose a subject, not a guarantee that any request fits one hour.

Working copy: "Your idea, a working example, and a clear way forward. A personal AI-building seminar with a guided refinement and your take-home Build Kit included."

## Reusable hour

| Minutes | Presenter/participant activity | Visible result |
|---|---|---|
| 0–5 | Confirm the participant's goal; show the finished baseline | They know what works before the live change |
| 5–15 | Explain the idea, constraints and system with a few Mermaid diagrams | They can point to where their requested change belongs |
| 15–25 | Walk through a prepared build example: prompts, decisions, result and limits | They see the work behind the result, including preparation |
| 25–45 | Make one bounded refinement together | One observable before/after change |
| 45–55 | Check the change; participant explains it or repeats a small step | Evidence of behavior and understanding |
| 55–60 | Reopen artifact, explain included kit and agree next steps | A clear handoff and support boundary |

Adapt the pacing for experience level. A presentation-only participant can choose the refinement and explain its effect while the owner operates the tools. A hands-on participant can operate their prepared environment. Confirm the mode beforehand. Installation/account recovery should not consume a promised demonstration hour; resolve in preflight or agree a different session.

## Initial tracks

| Track | Prepared example | Session-sized refinement | Take-home outcome |
|---|---|---|---|
| Playroom-inspired room/toy | Original or cleared room with one working interaction | Change one object's behavior, feedback or placement rule | Cleared project/checkpoint, behavior map, prompts and checks |
| Gamer portfolio or guide | Original portfolio/guide with fictional player data | Add one profile card, guide section or navigation behavior | Editable frontend and content map; no game API needed |
| Riot API concepts, conditional | Fixture-backed stats example and architecture explanation | Transform one documented response into a useful display; optional live request if ready | Fixture, transformation example, setup requirements and safe architecture |

Use the existing PocketPlayroom/shaco projects as evidence and inspiration. Do not edit their production branches or redistribute private code/assets by default. A direct PocketPlayroom modification requires a scoped branch task separately; a customer's request during a seminar does not implicitly authorize changing production.

The Riot path is game-specific. Development keys are temporary and personal/production uses have different access requirements; review the actual product/game policy before promising a live integration. A publicly released product may require production approval. Default the seminar to original labeled fixtures when access is unavailable. [Riot developer portal](https://developer.riotgames.com/docs/portal), [League of Legends guidance](https://developer.riotgames.com/docs/lol).

No developer/production key in frontend source, a public repo, an example URL, slides or a recording. A real API path uses a server-side secret with appropriate rate/error handling and redacted logs. Teach 401/403 access failure and 429 throttling conceptually or with fixtures; do not defeat limits or borrow the presenter's production key for customer deployments. Do not imply Riot endorsement, account approval or game-asset redistribution rights.

## Mermaid and presentation requirements

Prepare two or three small diagrams per chosen track: a goal-to-checked-result flow, a state/component map, and optionally a data/API request flow. Each should answer a participant question. Provide readable static fallback images and a text explanation in the handout; participants need no Mermaid editor account. Diagram labels must match the actual example rather than an imaginary architecture. Prefer a few useful diagrams over filling slides with complexity.

The private presenter kit contains the actual script, diagram sources, original demo checkpoints, selected prompt sequence, recovery plan and rehearsal notes. The shareable client kit contains only the agreed cleared subset plus personalized next steps. Keep private working notes and client information out of public build artifacts.

## Measured example: credits to result

This is an optional teaching case study, not routine reporting for repository tasks. A valid demonstration identifies the baseline, actual bounded change, date, model/tool configuration, measurement source, observed usage for that isolated run, retries and output checks. Separate prerecorded/prepared work from the live incremental change. If the usage source includes unrelated work, is unavailable or cannot isolate the example, label it unavailable or an explicitly qualified estimate rather than presenting a precise number.

Show the observable result with the record; do not claim that a fixed number of credits always buys the same app or convert subscription credits into cash without an applicable verified rate. Presenter preparation time and existing starter code must be visible context. No purchase or quota consumption is required just to populate a presentation slide. Do not count/report credits on every ordinary agent task; the owner explicitly waived that routine reporting.

## Preparation economics and completion

Build a reusable seminar core once and track its development effort separately from the 60-minute appointment. Initial planning allowance: one bounded preparation block chosen by the owner; no unlimited bespoke deck per inexpensive session. Personalize an existing track within a proposed 15-minute preflight block, plus 15-minute handoff; if a request needs more, reduce scope or quote different preparation/delivery before booking. Reusable content development is real work even when later sessions reuse it.

Acceptance before the first sold seminar: owner rehearses the hour against a clock; prepared demo/checkpoints and offline fallback work; sample diagrams are readable; one refinement has observable checks; fixture/live API status is explicit; client kit reopens in a fresh folder; exact policies, price and selected delivery tools are ready. Test with one adult participant and record what they can explain/repeat. A prepared spec is not a completed seminar or evidence of customer demand.
