# PRD: bring AI to life through a working browser game

Revision 0.6 · September 28, 2026. Owner-directed pivot. This is the current product and teaching contract; it supersedes revision 0.5's session-only offer, indefinitely deferred standalone guide, and palette-only seminar. R1/R2 remain valid implemented checkpoints.

## Promise and audience

Working title: **Build with GriebZ: Your First AI Build**.
Working pitch: "Understand AI, watch an idea become a playable browser game, and learn how to guide, check and improve the result yourself."

Start with curious adults, including people who have used chat but have never directed a coding agent. Explain AI as software trained on patterns that can generate useful responses and, when connected to tools, help perform work. It can also invent facts or produce broken code. Avoid claims about consciousness or guaranteed understanding. Coding is a useful demonstration because we can inspect changes, run the program and compare behavior with a stated goal; passing a few checks does not prove all code correct.

The emotional result to test is: "I saw Matt make a meaningful app change with AI, understood the decisions, and know something I can try." This is a learning and demonstration promise, not a universal one-hour application delivery guarantee.

## One product, three ways to use it

| Format | Included result | Commercial status |
|---|---|---|
| Compact standalone introduction | Readable book-like guide, prompts with explanations, before/after examples, troubleshooting, free/paid tool paths and cost reference | In scope now; proposed accessible one-time purchase, exact price and delivery platform undecided |
| Free community hour | Live guided build using the same core, audience decisions, explanation and a useful public takeaway | Core outreach; no purchase or paid account required to attend |
| Personal session | Same foundation adapted to one agreed goal, with individual help and handoff | Additional service; duration/price/support agreed separately |

No subscription to our own course, LMS, login/progress backend, large video-production pipeline or full curriculum platform is needed for the first edition. A narrated recording can complement the guide after the live path is rehearsed; the guide must make sense without it. Do not label it a bestseller, imply validated demand, or invent a monetary bonus value. The former $75 session proposal and ~$50 course idea are not approved prices. Price the finished product separately from personal delivery time.

## Demonstration selected for preparation

Default showcase is the independent BuildKit Cozy Room, inspired by PocketPlayroom. The existing R2 room is the visible starting point. Explain which art, framework and lamp interaction were prepared beforehand. The main new feature is a **three-star collection mini-game** (R3, proposed and not yet implemented):

- Three original star controls appear in the room. Each is a native button with an accessible label and visible focus.
- Activating an uncollected star collects it once; progress advances from 0/3 to 3/3. Repeated activation cannot increase the count.
- Finishing shows a calm completion message and a Replay button. Replay resets only the mini-game.
- Mouse, touch and keyboard work. A polite progress announcement conveys the count without relying on color.
- The round is temporary: reloading starts 0/3. The existing lamp styles and browser-local lamp save remain intact. No new save schema or migration.
- Any celebration respects reduced motion. No timer, leaderboard, login, AI inference at runtime, backend, external art or monetization inside the room.

The audience can choose an accent color or a short friendly completion message before the feature prompt; keep behavior and acceptance criteria stable. The existing CSS palette exercise remains an optional first practice task and recovery activity.

PocketPlayroom itself may be shown as product context using cleared screens and a clean demo profile. Live source changes in that repository need a separately scoped upstream ticket; a private source reference is not part of the learner download. An existing website/app change is a bonus transfer example, not a second full build squeezed into the core hour.

## Required learning outcomes

A learner can explain a model versus the app/agent using it; write a prompt with context, goal, constraints and checks; recognize a code diff and checkpoint; observe a feature failing or passing a check; describe one useful repair strategy; and distinguish AI usage from hosting costs. Watching, predicting and directing the presenter count as participation. Hands-on editing is an optional path with setup completed beforehand.

Teach terms where they become useful: prompt/context/model/agent in the opening; repository/branch/diff/checkpoint while editing; test/debug/build/preview during checking; deploy/domain/hosting at the end. Tokens, credits and subscription limits get a short cost explanation and a longer reference chapter. Model families take about two minutes, not a ranking lecture.

## Flexible 60-minute core

| Minutes | Teaching purpose | Evidence or audience action |
|---|---|---|
| 0–7 | What AI can do, why code offers checkable outputs, limits | One relatable non-code example; show the prepared room and disclose prior work |
| 7–13 | Vocabulary, model choice and money basics | Distinguish model/app/agent and subscription/usage/hosting; choose a model for this job |
| 13–18 | Goal, baseline and acceptance | Play R2, state three-star behavior and boundaries; audience chooses a cosmetic detail |
| 18–38 | Live AI feature build | Read the planned prompts, inspect the proposed plan and diff, build and preview |
| 38–48 | Verify and debug | Check behavior and existing lamp; one focused repair if needed, then checkpoint/fallback |
| 48–54 | Polish and deployment explanation | Show final result; demonstrate an already-prepared deployment only if ready, otherwise explain the path |
| 54–60 | Cost recap, explain-back and next action | Separate prepared/live work and observed/unknown usage; share guide/sample and a starter prompt |

Seven + six + five + twenty + ten + six + six = 60 minutes. This is a target, not rehearsal evidence. A 75–90 minute workshop may add a 15–30 minute Azure resource/deployment lab after the core. Do not let deployment consume the closing learning check.

## Prompt and debugging contract

Prepare cards for inspect/plan, implement, verify, repair, explain/handoff and optional deploy. Each card names its input checkpoint, allowed paths, goal, observable checks and next step. Prompts are live inputs whose output may vary; checkpoints provide a dependable recovery path.

Show actual prompting, a meaningful behavior change and human review. Do not present a prepared finished feature as live generated. If an error happens, show the relevant message, state a hypothesis, request a small repair and rerun the failed check. Allow one focused repair or five minutes of diagnosis within the check segment, whichever comes first. Then use a verified reference checkpoint and explain what remains unresolved. If everything works, discuss a labeled prepared failure example; do not secretly introduce a bug and pretend it occurred naturally.

Use disposable teaching branches/folders and scoped diffs so a failed attempt can be preserved without disrupting the reference demo. Never overwrite unrelated work to reset a classroom example.

## Required kit and truthful usage story

The short guide, deeper optional chapters, prompt cards, baseline/finished source references, failure walkthrough, glossary, cost sheet and next exercise form the first edition. Label every outcome as live observed, recorded, prepared reference, hypothetical or not checked. Include timestamps and the exact revision for a recorded run.

The teaching case must report what is known about cost even when exact tokens are unavailable. Record provider/product, account mode, full model/version, effort/speed, task boundary, elapsed time, retries and the usage source. Keep preparation, live work and repairs separate. Do not calculate a per-run dollar amount by dividing a subscription price by prompts or by treating a remaining-limit percentage as tokens. See [16-TOOLS-MODELS-AND-COSTS.md](16-TOOLS-MODELS-AND-COSTS.md). Routine repository work still needs no credit reports.

## Acceptance before releasing the first edition

1. A novice can read the guide without Matt and explain prompt -> change -> check -> repair.
2. The R3 reference is built and tested; a fresh baseline can follow the prompt path. Record actual timing and failures, not a predetermined success story.
3. The public example and free takeaway reopen from documented revisions; private paid text and recordings are excluded from public exports.
4. The core fits an observed rehearsal with an adult; the optional cloud lab has a separate duration.
5. The cost sheet identifies free observation/local use, limited free AI access, one-subscription use, optional API spend and hosting separately, with dated official sources.
6. Product price, scope, support/update policy, license, delivery access and checkout/refund path are decided and tested before taking product payments.
7. A failed build or cloud quota still leaves the learner with an understandable result, working reference and next action.

## Evidence now versus work next

R1/R2 and L2 are merged in BuildKit PRs #3–#7. Recorded R2 evidence is 25 rule cases and 12 browser scenarios. That evidence does not cover R3, a new live AI run, current subscription entitlements, Azure capacity, or learner success. The existing private L1/L3 kit is a draft, now being revised.

Use [14-EXECUTION-HANDOFF.md](14-EXECUTION-HANDOFF.md) for L4, R3, L5, D1 and H1. The current task refines requirements and presenter preparation; no game feature, purchase, Azure resource, outreach or paid publication is created by this document.
