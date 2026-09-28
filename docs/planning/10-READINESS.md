# Readiness and outstanding work

Revision 0.5 · September 27, 2026. Public documentation direction is set; the standalone example has not been implemented. Live event and paid seminar readiness still require owner facts and observed delivery checks.

## Prepared in this revision

- Seminar-led 60-minute offer and launch PRD; standalone Cozy Room and public follow-along are in scope, with outputs planned at `examples/cozy-room` and `lessons/free/cozy-room`.
- Standalone-course launch removed from the first-sale dependency chain; no unsupported monetary bonus value.
- Intake, fit, handoff/support and rehearsal specifications in [09-SESSION-PREP.md](09-SESSION-PREP.md); detailed working runbook retained privately outside Git.
- Personalized hour, Mermaid visuals, working-demo/refinement tracks and measured usage-case requirements in [11-PRD-SEMINAR.md](11-PRD-SEMINAR.md).
- Supplied logo/runtime staged and statically reviewed; hashes and runtime findings in [asset review](../asset-review.md). Availability is distinct from a successful browser preview.
- Revised decisions, source notes and execution queue, with explicit owners and gates.
- Free one-hour community classes as a parallel launch path, with host-readiness checks and separate community/paid-demand measures; 5–10 starting owner hours/week with room to grow, not a ceiling.

## Outstanding before a paid session

| Item | Owner | Needed to close it | Blocks |
|---|---|---|---|
| Pilot price | You | Accept/amend proposed $75 for the accepted one-hour format | Public price, payment product |
| Private teaching home | Resolved | `MgGriebZ/BuildWithGriebZ` verified PRIVATE with ADMIN access; future authoring path `seminars/cozy-room` | None for authoring; client sharing remains separate |
| Cozy Room example and follow-along | Owner + implementation task | Implement independent Blazor WebAssembly net10.0 example; baseline lamp cycles two styles and persists; refinement adds third style and gentle feedback; preserve mouse/touch/keyboard and reduced-motion. Follow specs 13 and 14. | Rehearsal, public follow-along and credible offer |
| Weekly capacity | You | Starting 5–10-hour/week range accepted; confirm actual bookable windows/timezone, prep/travel/support allocation and discretionary spending limit | Slots and delivery/support promise |
| First event host | You | Identify and confirm a suitable initial host/audience; no host or event date is established | Scheduling the first free class; not the room pipeline |
| Seller identity and operations | You, accountant/appropriate adviser | Existing business/DBA/EIN situation, location, applicable registration and tax handling for session plus included materials | Taking payment under the chosen identity |
| Customer policies | You | Cancellation/no-show rule, remedy choice, handoff/support response windows | Sale terms |
| Contact, scheduling and delivery | You, then agent verification | Working business contact and calendar, private handoff location and access | Inquiry-to-handoff rehearsal |
| Payment setup | You, then agent verification | Appropriate authenticated Stripe account, configuration and sandbox workflow | Paid booking; GitHub credentials do not establish this |
| Session delivery rehearsal | You with a tester; Luna can check artifacts | Run fictional-client script and let tester reopen delivered pack | Evidence that the offer is deliverable |
| First real leads | You | Three short conversations and feedback, then personal invitations | Demand evidence; agents cannot invent it |

The first prepared milestone is Cozy Room's third lamp style and gentle feedback, with the learner choosing the palette. Confirm fit at intake; requests beyond that initial scope need a separate plan. The room is prepared before the hour, and a six-lesson paid course is not a dependency.

## Outstanding before the first free community class

Cozy Room is the selected theme. Confirm the initial audience and prospective host. Prepare the shared core, one group refinement, a public takeaway and local/captured fallback; rehearse the hour. Confirm host agreement, accessibility, equipment, venue requirements and setup/travel time. Student-facing events need a separate age-appropriate plan and host requirements; the first draft is adult-facing. Agree how participants can request personal help voluntarily without collecting unnecessary data or making access conditional on a sales signup.

No paid bookings, checkout setup or new website are prerequisites for this route. Outreach and event scheduling still need the owner's task authorization. See [community PRD](04-PRD-COMMUNITY.md) and A6/H5 in the execution queue.

## Outstanding only for a new public website

When implementation is authorized, the marketing page may be a plain static HTML/CSS/JS shell. The linked Blazor Cozy Room demo is a separate output; no parallel React app is needed. PR2 A2 free-event worksheet remains open, generic and optional, not a dependency for the Cozy Room pipeline. Verify any selected brand assets and reduced-motion behavior before use.

Confirm actual DNS/Azure hosting access, quotas and the public contact destination before deploying. Check final copy, all actions, mobile/keyboard behavior, policy pages and the public build contents. A new site is useful but is not necessary to have a discovery conversation or deliver a correctly arranged session.

For public room/source release, select the hosting destination and original sample's redistribution license, include required notices and check the scoped checkpoint exports. These release decisions do not block L1 or R1 local preparation. The full PocketPlayroom repository's visibility is unchanged.

## Deferred deliberately

Paid standalone course pricing and checkout, LMS/login/progress, complete paid curriculum, database/API, automated fulfillment, Blender/Godot expansion and a multi-platform media pipeline. The free standalone Cozy Room and follow-along are in scope. Revisit paid self-serve learning after repeated independent-learning demand and its own completion/support evidence. Free community classes are already in scope.

## Minimum reply that unblocks the next launch decisions

The first topic and private authoring home are resolved: Cozy Room and `MgGriebZ/BuildWithGriebZ`. Before offering paid slots, confirm/amend "$75 for 60 minutes," give actual booking windows within the expandable 5–10-hour starting commitment, and clarify business identity/readiness. For the first free class, identify and confirm the initial host/audience. Keep client sharing separately defined. Share tax identifiers, credentials and customer information only through appropriate private channels, not this document.

## Verification scope

Document/link checks and static attachment inspection support this requirements milestone. They do not establish runtime rendering, customer demand, payment readiness, tax compliance or completed seminars. Git commit and remote verification establish the publication status separately; the requirements push does not change repository visibility.
