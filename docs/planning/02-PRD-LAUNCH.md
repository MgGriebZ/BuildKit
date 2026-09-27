# PRD L: session-first launch site and manual delivery

Revision 0.5 · Product specification. Requirements/PRD repository publication is authorized; site deployment and changes to public visibility are not.

## Goal and audience

Help an adult understand the seminar-led 60-minute teaching offer, review its proposed terms and inquire. Lead with the standalone bedroom-inspired Cozy Room and its public follow-along. The example teaches through visual explanation, a prepared working lamp interaction and one bounded refinement. Distinguish the free public follow-along from personalized seminar service. Inquiry is not a confirmed booking or payment.

## Launch page specification

The initial site can be a single accessible page with these sections, in order:

1. **Outcome and call to action:** “Bring one small project. Work on a realistic next step together and leave with your project files, the prompts and follow-along material we used, and personal next steps.” Primary action: send an inquiry through the owner-confirmed contact route. Do not imply a booking is available until the owner confirms fit and a slot.
2. **How it works:** inquiry → scope/fit → choose a slot → pay → work together → handoff/follow-up. State that project and outcome are agreed before payment.
3. **Cozy Room example:** a standalone, child-friendly bedroom-inspired play room built with Blazor WebAssembly, C#, HTML, CSS and SVG. Baseline: lamp cycles two styles and persists its selection. The taught refinement adds a third style and gentle feedback. Preserve mouse, touch, keyboard and reduced-motion support. Link to the public follow-along when ready; do not put a course or sales CTA in the room. Seminar learners and marketing are adult-facing. PocketPlayroom is the full product/reference; do not imply this standalone example is its full source or publish private dependencies.
4. **What the seminar teaches:** one 60-minute session with visual explanation, a prepared working example, a focused learner-chosen refinement and next steps. For personalized sessions, agree any included Build Kit, project files, prompts and checks in scope before payment. Do not suggest a full game will be built during the hour.
5. **Limits and no-fit policy:** an hour is not a promise of a finished application. Production readiness, security review, ongoing maintenance, broad debugging, and unapproved extra work are excluded. If a request is not suitable, say so before payment. Show owner-approved cancellation/refund and no-result terms before checkout.
6. **Price/status:** if shown, label “Proposed pilot: $75 for 60 minutes; final price and availability to be confirmed.” This is a proposal, not an approved offer. No standalone course price or unsupported value comparison. Until price is accepted, site copy should say “Ask about a session” without a purchasable price.
7. **Prerequisites and privacy:** state the tested device/browser/tools once known, any account or cost requirements, and what the learner should not share. Do not claim that a tool or plan is required until a path is tested.
8. **About and evidence:** owner introduction based on verified experience. Demonstrations must use cleared assets and fictional data. Do not use customer claims, testimonials, counts, or outcomes without evidence and permission.
9. **FAQ/contact:** response expectation only after owner confirms capacity; explain that inquiry is not a booking and give the confirmed support/contact route.
10. **Free community classes:** describe the one-hour public/event format, shared demonstration and public takeaway. Secondary action: "Ask about hosting a free class," through the confirmed inquiry route with host intent distinguished from personal-session intent. No confirmed dates, partnerships or unlimited availability claims. Make clear that free group attendance does not include a private customized seminar.

The initial marketing shell may use plain static HTML/CSS/JS. The linked Blazor Cozy Room demo is a separate output; no parallel React/Vite app is required. The page can link the public follow-along when ready. Use one working contact destination for personal-session and free-class host inquiries. A generic worksheet is optional and not a dependency for the room pipeline. Remove unfinished policy placeholders and unsupported activity claims. No API, database or login is needed for inquiry-first delivery.

## Session operations

1. Receive inquiry and acknowledge it on a timeframe the owner can meet.
2. Ask about the desired result, current files/tools, time-sensitive needs, and constraints. Screen fit, safety, access, and competence.
3. If suitable, send written scope: one outcome, boundaries, prerequisites, exact included handoff, duration, proposed/approved price, cancellation and refund terms, and a slot choice. If not suitable, decline plainly and offer a smaller alternative only when appropriate.
4. After the client accepts the scope and chooses a slot, send payment instructions. Payment confirms only after the provider verifies it. Do not represent a tentative slot or inquiry as paid/confirmed.
5. Work within the agreed time. Save or hand back client files using an agreed method; do not retain credentials or unnecessary personal data. Note commands and checks actually performed.
6. Send the included materials, project files/links, completion and verification notes, and personalized next steps. Identify any unfinished work or unverified claims. Invite one concise follow-up about the handoff; ongoing support is not included unless stated in writing.
7. Handle cancellation, no-fit, no-result, and any refund using the terms shown before payment. Record status and actual time privately. Do not automatically add the client to marketing.

## Included learner material and done criteria

Materials are selected to fit the agreed project; they need not constitute a complete course. Minimum handoff: a short project brief or agreed goal; the prompts/instructions materially used; relevant starter or client project files; a repeatable “what to do next” checklist; and a note distinguishing completed, tested, and untested work. The client can reopen the files and identify the next action without relying on memory of the call.

Session success is the agreed outcome plus a usable handoff—not necessarily a fully finished app. If no artifact can responsibly be completed, record the blocker and apply the pre-agreed no-result option. The owner records client feedback and time, including preparation and follow-up.

## Product acceptance criteria for a future implementation

- A first-time visitor can explain the inquiry-to-handoff sequence and identify that inquiry is not confirmation.
- A visitor can distinguish the free group class/public takeaway from the paid personalized seminar/tailored kit and can select the appropriate inquiry intent.
- The session promise, limits, proposed price status, fit process, contact method, and owner-approved policies are consistent across page and messages.
- All buttons and links work on phone and desktop; keyboard access, labels, contrast, and reduced-motion behavior are checked.
- No false urgency, unsupported valuation, fabricated evidence, or misleading “finished in an hour” promise appears.
- Demonstration, logo, and support code have documented source/use clearance before inclusion.
- No payment or customer data enters site code. If payment is later added, use a provider-hosted flow and test success, cancellation, failure, duplicate notifications, delivery failure, and refund handling before a real sale.
- Inspect the built artifact and repository diff for private learner packs, personal records, credentials, or uncleared material.
- Site deployment and changes to public visibility, live payment activation, outreach, and implementation require separate authorization and readiness checks. Documentation/requirements publication in this repository is authorized.
