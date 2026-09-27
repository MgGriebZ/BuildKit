# PRD L: session-first launch site and manual delivery

Revision 0.4 · Product specification. Requirements/PRD repository publication is authorized; site deployment and changes to public visibility are not.

## Goal and audience

Help an adult decide whether a personalized one-to-one seminar fits their project, understand the proposed terms, and inquire. Explain the full-hour guided presentation, Mermaid visuals, prepared working demo, learner-chosen focused refinement, and reusable Build Kit. It is not an unstructured debugging session or a promise to build a full game live. Distinguish inquiry from confirmed booking and payment.

## Launch page specification

The initial site can be a single accessible page with these sections, in order:

1. **Outcome and call to action:** “Bring one small project. Work on a realistic next step together and leave with your project files, the prompts and follow-along material we used, and personal next steps.” Primary action: send an inquiry through the owner-confirmed contact route. Do not imply a booking is available until the owner confirms fit and a slot.
2. **How it works:** inquiry → scope/fit → choose a slot → pay → work together → handoff/follow-up. State that project and outcome are agreed before payment.
3. **What may fit:** Playroom room/game/toy; gamer portfolio/guide; or a conditional Riot API lesson. Use fixtures by default for Riot examples. Live API work requires the learner to meet key and applicable policy prerequisites; never request or expose key details.
4. **What is included:** one full 60-minute seminar; personalized visual presentation with Mermaid diagrams; working product demo prepared in advance; one focused learner-chosen refinement; reusable Build Kit; prompts/files, checks and personal next steps. Adapt pacing by track. Do not suggest a full game will be built during the hour.
5. **Limits and no-fit policy:** an hour is not a promise of a finished application. Production readiness, security review, ongoing maintenance, broad debugging, and unapproved extra work are excluded. If a request is not suitable, say so before payment. Show owner-approved cancellation/refund and no-result terms before checkout.
6. **Price/status:** if shown, label “Proposed pilot: $75 for 60 minutes; final price and availability to be confirmed.” This is a proposal, not an approved offer. No standalone course price or unsupported value comparison. Until price is accepted, site copy should say “Ask about a session” without a purchasable price.
7. **Prerequisites and privacy:** state the tested device/browser/tools once known, any account or cost requirements, and what the learner should not share. Do not claim that a tool or plan is required until a path is tested.
8. **About and evidence:** owner introduction based on verified experience. Demonstrations must use cleared assets and fictional data. Do not use customer claims, testimonials, counts, or outcomes without evidence and permission.
9. **FAQ/contact:** response expectation only after owner confirms capacity; explain that inquiry is not a booking and give the confirmed support/contact route.
10. **Free community classes:** describe the one-hour public/event format, shared demonstration and public takeaway. Secondary action: "Ask about hosting a free class," through the confirmed inquiry route with host intent distinguished from personal-session intent. No confirmed dates, partnerships or unlimited availability claims. Make clear that free group attendance does not include a private customized seminar.

The page should use one working contact destination with a primary personal-session inquiry and a secondary free-class host inquiry, plus a complete public worksheet when ready. A future course can be omitted. Remove unfinished public-policy placeholders and unsupported activity claims. The supplied logo/runtime are staged and statically inspected in [asset review](../asset-review.md); appearance and browser behavior remain untested. Use a normal static React/Vite frontend; the Design Canvas support runtime is reference-only, with no production dependency on it. No API, database or login is needed for inquiry-first delivery.

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
