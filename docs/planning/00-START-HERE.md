# Build with GriebZ: practical AI build sessions

Planning revision 0.5 · September 27, 2026 · Owner review draft

## Direction

The accepted format is seminar-led 60-minute teaching: visual explanation, a prepared working example, one bounded learner-chosen refinement and a practical take-home. The first example is a standalone bedroom-inspired Cozy Room in Blazor WebAssembly, C#, HTML, CSS and SVG. Its baseline lamp cycles two styles and persists selection; the taught refinement adds a third style and gentle feedback. Mouse, touch and keyboard operation plus reduced-motion support remain requirements. A public follow-along is in scope. This is focused teaching, not an unstructured debugging hour. The proposed $75 price, availability and final policies remain unapproved.

**Current implementation status:** R1, R2 and L2 are implemented in BuildKit branches and under review in [PR #4](https://github.com/MgGriebZ/BuildKit/pull/4), [PR #5](https://github.com/MgGriebZ/BuildKit/pull/5), [PR #6](https://github.com/MgGriebZ/BuildKit/pull/6) and [PR #7](https://github.com/MgGriebZ/BuildKit/pull/7). The R2 validation record documents 25 rule cases and 12 browser scenarios; its standalone export and the R1 baseline export were also checked. L1 and the reconciled L3 presenter kit are in review branches in the selected private authoring repository. The next evidence milestone is a timed seminar rehearsal with an adult. Branches and recorded local checks do not establish a merge, hosted demo, source redistribution license, or completed rehearsal.

Prepare the working demo beforehand; do not promise to build a complete game or arbitrary app during the hour. The first Cozy Room pipeline now has an independent R1/R2 app, L2 guide and beginner edit exercise in open review branches at `examples/cozy-room` and `lessons/free/cozy-room`; see the status table in [06-EXECUTION.md](06-EXECUTION.md). L3 presenter materials are also ready for review privately. No public hosting or source license has been selected. The canonical specification and bounded handoff are [13-PRD-COZY-ROOM.md](13-PRD-COZY-ROOM.md) and [14-EXECUTION-HANDOFF.md](14-EXECUTION-HANDOFF.md). PocketPlayroom remains the full product/reference; the independent example avoids private source dependencies. Gamer portfolio/guide and Riot API tracks are deferred beyond the first room. Custom presentation preparation is tracked separately from ordinary session prep; bound extra personalized prep or re-scope and quote it before selling. Paid standalone course/LMS remains deferred.

Free one-hour classes for public/community events are an accepted early outreach and service activity, not an optional afterthought or a reward unlocked by paid demand. Reuse the teaching core, provide a useful public takeaway, and offer an optional route to personalized paid help without requiring a purchase. Start time planning at 5–10 owner hours/week as a minimum initial commitment range, expandable as the business develops; actual bookable windows remain to be set.

## Evidence and limits

PocketPlayroom is the full product/reference, not a source to publish as part of this example. The standalone room must use independently authored or cleared content and avoid private source dependencies. Existing brand assets remain subject to source review and do not establish paying customers or novice completion. See [asset review](../asset-review.md) and [08-SOURCE-REVIEW.md](08-SOURCE-REVIEW.md).

No revenue forecast is supported. The plan tests whether people will pay for focused help and whether delivery time is workable, while keeping spending controlled.

## Read this packet

1. [01-BUSINESS.md](01-BUSINESS.md): audience, offer, funnel, economics, and validation gates.
2. [02-PRD-LAUNCH.md](02-PRD-LAUNCH.md): launch-site content and manual session workflow.
3. [03-PRD-COURSE.md](03-PRD-COURSE.md): included learner materials and completion criteria; standalone course is deferred.
4. [04-PRD-COMMUNITY.md](04-PRD-COMMUNITY.md): free one-hour classes, host readiness and community discovery.
5. [05-OPERATIONS.md](05-OPERATIONS.md): setup and open operational questions.
6. [06-EXECUTION.md](06-EXECUTION.md): proposed sequencing and implementation tickets.
7. [07-DECISIONS.md](07-DECISIONS.md): accepted direction, open proposals, and evidence gaps.
8. [08-SOURCE-REVIEW.md](08-SOURCE-REVIEW.md): source evidence, reuse limits, and clearances.
9. [09-SESSION-PREP.md](09-SESSION-PREP.md): public preparation requirements; full working templates are retained privately outside Git.
10. [10-READINESS.md](10-READINESS.md): outstanding launch items, owners and next actions.
11. [11-PRD-SEMINAR.md](11-PRD-SEMINAR.md): seminar format, demo and Build Kit requirements.
12. [12-REPOSITORY-BOUNDARY.md](12-REPOSITORY-BOUNDARY.md): repository and publication boundaries.
13. [13-PRD-COZY-ROOM.md](13-PRD-COZY-ROOM.md): room behavior, stack, visual polish and acceptance evidence.
14. [14-EXECUTION-HANDOFF.md](14-EXECUTION-HANDOFF.md): bounded Luna/Sol goals, output paths and sequencing.

## Initial validation

Keep the first milestone narrow: prepare a usable session worksheet and learner handoff, confirm the practical operating limits, and seek the first two paid sessions only when the owner is ready to offer them. Record inquiry, agreed scope, time, result, follow-up, and whether the client could continue independently. Review the offer after the second delivered session; do not treat bookings or compliments as proof of repeatable demand.

In parallel, prepare and rehearse the first free class for a suitable host. It needs host/audience approval, a checked demo and public takeaway, not checkout or paid bookings. Review participant learning and useful next steps separately from paid inquiries.

The first event host, pilot price, actual booking windows, discretionary spending limit and final customer policies remain open. The private presenter/business authoring home is resolved as `MgGriebZ/BuildWithGriebZ`, verified PRIVATE with ADMIN access; future seminar materials belong under `seminars/cozy-room`. Client sharing remains separate. A plain static HTML/CSS/JS marketing shell is allowed as supporting work; the linked Blazor demo is a separate output and no parallel React app is required. PR2 A2's free-event worksheet remains open and optional, not a room-pipeline dependency. Documentation/requirements publication is authorized; it does not authorize deployment, outreach, payment setup or repository visibility changes.
