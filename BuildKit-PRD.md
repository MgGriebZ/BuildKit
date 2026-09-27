# BuildKit — PRD & Handoff

> Historical draft: on September 27, 2026 the owner reopened all business/product decisions. See [the current planning packet](docs/planning/00-START-HERE.md) and its decision register. The original text below is retained for provenance; its "locked" labels and instructions do not override the owner's latest direction.

> git init for **MgGriebZ/BuildKit**. Single source for a fresh Claude Code / Codex session. Exported 2026-09-27 from the design project. Visual references (HTML mocks) are optional; everything needed to build is in this file.

---

## 0. How to use this file

1. `git init` MgGriebZ/BuildKit, commit this file as `PRD.md`.
2. First agent task: split it into the repo layout in §12 (CLAUDE.md, docs/, lessons/). Don't rewrite decisions while splitting.
3. Build in the slices listed in §13, one at a time, committing after each slice works.

---

## 1. Product

**Course name:** Build with GriebZ · Chat → Work → Code
**Repo:** MgGriebZ/BuildKit
**URL:** build.mggriebz.com (the sales page + lessons)
**Promise:** Take one idea from a chat window to something real that works.
**Who:** People who've used ChatGPT but haven't built anything with it: complete beginners, office/knowledge workers, hobbyists/parents, small-business owners.
**North Star question:** Does this lesson leave the buyer holding something they made?

### Offer (three rungs, no more)
| Rung | What | Price |
|---|---|---|
| 1 | Free AI clips on LinkedIn / Facebook / Instagram, pointing to build.mggriebz.com | Free |
| 2 | The course. Pay once, every future release included | **$49** |
| 3 | 1:1 sessions / consulting (prototypes, web design, agent setup) | **$75/hr, 1-hour minimum** |

### Scope guard
BuildKit is one $49 course. It is **not** a seminar program, a membership, or a dump of every project. Sessions exist for buyers who want more. When in doubt, cut.

### Non-goals
- No income, career, or "replace your job" claims; no fake "valued at" numbers
- No video-first course (lessons are written pages; clips are marketing)
- No community/forum at launch
- No subscription
- No shipping of original private files without a KIT_REVIEW decision

---

## 2. Decisions (locked)

| Area | Decision |
|---|---|
| Repo | MgGriebZ/BuildKit |
| Name | Build with GriebZ · Chat → Work → Code |
| Price | $49 course; $75/hr sessions, 1-hr minimum |
| Updates | Pay once; release notes by email per version |
| Format | Written lesson pages + prompt cards + templates |
| Beginners | All 3 modules, with a setup guide for M2–M3 |
| Case study | Real PocketPlayroom repo (Blazor), scrubbed |
| Buyer stack | React + Vite (base: MgGriebZ/WebsiteTemplate `client/`) |
| Hosting (buyer + course) | Azure: Static Web Apps (front end), App Service (API), Cosmos DB only when a DB is needed. Free tiers first |
| Kids | OK in requirements lessons, user-testing screenshots, marketing clips |
| Business | Sole proprietor, Pipestone, MN. Revisit LLC before client builds |
| Payments | Stripe (Stage A manual, Stage B automated; §9) |
| Time budget | ~5 hrs/week |

### Open
- Subdomain + #BuildwithGriebZ availability
- Refund window (proposed 14 days)
- v0.1 target date
- Accountant answer on MN tax for sessions (§10)

---

## 3. Course structure

Each lesson has: **goal paragraph → steps → prompt card (copy-paste) → real example → "Done when" check.**
One project runs through all three modules: the buyer's own **Pocket Playroom**-style app (or their own subject).

### Module 1 · Chat — From an idea to a one-page spec
Leaves with: a one-page spec. Tools: any chat app, no install. Proof: Playroom kickoff, Evie's requests as requirements, Sol vs Fable test.
- 1.1 Let the AI interview you first
- 1.2 Get requirements from a real person
- 1.3 Write down what you won't build
- 1.4 Turn the thread into a one-page spec
- 1.5 Test a model on your spec before you commit

### Module 2 · Work — Design it, pull it down, build it
Leaves with: a live URL on Azure SWA, built from a design, in a GitHub repo they own. Tools: Claude Design, GitHub, local coding agent (Claude Code or Codex), Azure SWA. Proof: Pocket Playroom, mggriebz /birthday, ClaudeDesign polish passes.
- 2.1 Spec → design: prototyping screens in Claude Design
- 2.2 Handoff: Claude Design's bundle into Claude Code (`/design-sync`, `/design`)
- 2.3 The repo on your machine: clone, commit, instruction file
- 2.4 Local agent, web code: small slices, commit after each works
- 2.5 Ship: deploy to Azure SWA; never commit secrets
- 2.6 Case study: /birthday, a one-off page on existing infrastructure
- (Optional add-on) When you need an API: App Service + Cosmos DB, following WebsiteTemplate `api/`

### Module 3 · Code — Agents that use your computer
Leaves with: one Playroom toy as a Blender model, exported GLB, running in a Godot scene the agent launches and checks. Tools: Godot, Blender, Node 18+, Godot MCP (`@coding-solo/godot-mcp`), Blender MCP. Proof: CoreClock (Unity → Godot), #blendermcp / #godotmcp workflow.
- 3.1 What MCP is: giving an agent hands on your tools
- 3.2 Godot MCP: agent launches editor, runs project, reads errors
- 3.3 Blender MCP: simple model from a prompt → GLB (keep it blocky; organic shapes/rigging are unreliable)
- 3.4 Plans → slices: the play → log → fix loop
- 3.5 Permissions and safety: what to let an agent do unattended
- 3.6 Knowing when to stop, and when to hire someone (→ sessions)

### Setup guide (M2–M3)
Separate `lessons/setup/`: GitHub account, Git, Node, VS Code, Claude Code or Codex, Azure account + SWA, Godot, Blender, MCP config. Test on a clean machine before v0.5 and v1.0. Note: M2–M3 need a paid AI plan (Claude Design shares limits with chat/Claude Code). Say this on the sales page.

### Lesson counts (drive progress UI)
M1 = 5 · M2 = 6 · M3 = 6 · total 17.

---

## 4. Module 1 lesson content (draft v0.1, ready to publish after review)

#### 1.1 · Let the AI interview you first

_20 min_

Most people open a chat and ask for the answer. Ask the AI to ask you questions instead. You know things about your idea that you haven't said yet, and questions pull them out before anything gets built on a guess.

##### Steps
1. Write your idea in one or two messy sentences. Don't polish it.
2. Paste the prompt below. Answer each question honestly, including "I don't know."
3. When it runs out of questions, ask it to summarize what it learned about your idea.
4. Save that summary. It's the first input to 1.4.

##### Prompt card

```
I have an idea: [your idea in one or two sentences].

Before you suggest anything, interview me. Ask one question at a time, up to 8 questions. Cover: who it's for, what problem it solves for them, what they'd do first, what would make them come back, and what I'm worried about.

After my last answer, summarize what you learned in 5 bullet points. Mark anything I was unsure about.
```

##### Real example

The eight questions in Playroom's AGENTS.md started out as an interview like this one. Two of them: "Which child need or curiosity does this serve?" and "What is the smallest playable proof?" They now open every feature.

##### Done when

You have a five-bullet summary, and at least one bullet surprised you.

---

#### 1.2 · Get requirements from a real person

_30 min_

Your first user is someone you can actually talk to: a coworker, a customer, your kid. What they ask for is better than what you imagine they want. Watch them, write down their words, and let the AI sort the notes. Don't let it make up the notes.

##### Steps
1. Show your user the idea: a sketch, a similar app, or just a description.
2. Ask open questions, then stay quiet: "What would you do first?" "What do you think this does?"
3. Write down their exact words, plus what you noticed them do.
4. Paste the notes into the prompt below.

##### Prompt card

```
Here are my notes from talking with [who] about [idea]:

[paste notes: their words in quotes, my observations as plain lines]

Sort these into three lists:
1. What they said (quote them)
2. What I observed
3. What I'm guessing (your inference, clearly labeled)

Then turn lists 1 and 2 into up to 6 requirements, each starting with "They need to be able to…". Don't add requirements that aren't supported by the notes.
```

##### Real example

Playroom's playtest rule is "observe before coaching," with concrete questions like "Where did the flower go?" Evie's requests became the backlog: what she wants to do or play with next.

MEDIA TODO: 2–3 user-testing screenshots or a short clip of Evie.

##### Done when

You have up to six "They need to be able to…" lines, each traceable to a quote or observation.

---

#### 1.3 · Write down what you won't build

_15 min_

AI will happily add features. A non-goals list is what keeps it, and you, from building everything. It's also the fastest way to tell an agent in Module 2 what not to do.

##### Prompt card

```
Here's my idea and requirements:

[paste 1.1 summary + 1.2 requirements]

List 10 things someone might expect this to do or include that I should rule out for the first version. For each, give one line on why leaving it out keeps the first version small or keeps it true to who it's for.

I'll pick which ones to keep. Don't decide for me.
```

##### Real example

VISION.md opens by saying what Playroom isn't: not a game, not an arcade, not an educational app. The rules add "no ads, streaks, loot boxes, battle passes, urgency loops." Cloud accounts are "intentionally deferred."

##### Done when

You've kept 4–6 non-goals, and at least one was something you were tempted to build.

---

#### 1.4 · Turn the thread into a one-page spec

_30 min_

A long chat thread is hard to reuse. A one-page spec can be pasted into any AI tool, given to a designer, or handed to an agent in Module 2.

##### The seven parts
1. Promise: one sentence, what it is and for whom
2. Who: the one person it's designed around
3. North Star question: a yes/no question every feature must pass
4. Requirements: from 1.2
5. Non-goals: from 1.3
6. Smallest proof: one path, start to finish
7. Done when: 3–5 checks you could test

##### Prompt card

```
Using everything in this conversation, write a one-page spec with exactly these headings:

Promise · Who · North Star question · Requirements · Non-goals · Smallest proof · Done when

Rules: under 400 words. The North Star is one yes/no question. The Smallest proof is one path written as "A → B → C → D". Use my words where I gave them. Flag anything you had to guess with [?].
```

##### Real example

North Star: "Does this make the world feel more alive and more like it belongs to the child?"
Smallest proof: "House interior → grow a flower in the backyard → carry it visibly → arrange it in a bedroom → return and find it remembered."

##### Done when

The spec fits on one page, every [?] is resolved, and someone else could read it and describe your idea back to you.

---

#### 1.5 · Test a model on your spec before you commit

_25 min_

New models come out every few weeks, and the hype doesn't tell you which one suits your project. Your spec is now a fair test: give the same page to two models and compare what comes back.

##### Score each answer 1–3
- Respected the non-goals
- Asked useful questions
- Used your words
- Didn't invent features

##### Prompt card

```
Here's my one-page spec:

[paste spec]

1. What's unclear or missing? List up to 5 questions.
2. Which requirement is riskiest to build first, and why?
3. Describe the first screen of the Smallest proof in plain words.
```

##### Real example

The "Fable 5 vs GPT-Sol" post: a new model on a real project, the weekly limit gone in 24 hours, and Playroom as the result. This lesson is the repeatable version, run before spending the limit.

##### Done when

You've picked a model for Module 2 and can say why in one sentence.


---

## 5. Kit review gate

Decision values: **Original · Rewrite · Describe · Cut**. Nothing ships in `kit/` while Decision is Pending. Default proposal is Rewrite; real files are reference only.

| Mod | Item | Reference (not shipped as-is) | Concern | Proposed | Decision |
|---|---|---|---|---|---|
| M1 | Brainstorm prompt ("ask me questions first") | Playroom + CoreClock kickoff threads | May mention family or unreleased ideas | Rewrite | Pending |
| M1 | One-page spec template | PRD shape across MgGriebZ docs | Low | Rewrite | Pending |
| M1 | New-model test card | Sol vs Fable 5 post | Model names date fast | Rewrite | Pending |
| M1 | Worked example: Playroom spec | PocketPlayroom VISION.md + AGENTS.md | Kids names (now OK per decision) | Original (scrubbed) | Pending |
| M2 | Claude Design → handoff walkthrough | ClaudeDesign polish passes | Private screens; tool UI changes | Describe | Pending |
| M2 | Playroom starter repo (React + Vite) | PocketPlayroom (Blazor) as reference | No history or private assets | Rewrite | Pending |
| M2 | Starter instruction file | PocketPlayroom/AGENTS.md, shaco/CLAUDE.md | Internal paths, private URLs | Rewrite | Pending |
| M2 | Secrets checklist | MgGriebZ/SECURITY-AUDIT.md | High: real infrastructure | Rewrite | Pending |
| M2 | /birthday case study | PRD-birthday-invite.md | High: names, phone, town | Describe | Pending |
| M3 | Annotated MCP config (Godot + Blender) | CoreClock/.mcp.json + godot-mcp docs | Local paths | Rewrite | Pending |
| M3 | Toy → GLB → Godot exercise | CoreClock workflow | Needs clean-machine test | Rewrite | Pending |
| M3 | Plan → slice → fix templates | CoreClock PRD/EXECUTION/HANDOFF/FIXES | Unreleased design details | Rewrite | Pending |
| M3 | Agent permissions guide | CoreClock autonomous runs | Low | Rewrite | Pending |

M1 kit (proposed): 5 prompt cards · one-page spec template (7 headings) · notes sheet (said / observed / guessed) · model scorecard · Playroom VISION.md scrubbed as worked example.

---

## 6. Brand

- Colors come from the MgGriebZ logo order: **Chat #f97316 (orange) → Work #16a34a (green) → Code #14b8a6 (teal)**. Neutrals: heading #1f2937, body #374151, muted #6b7280, dark bg #111827→#1f2937.
- Type: Poppins (UI/headings), Inter (mono/code).
- Signature: L-shaped corner brackets (MgGriebZ design system).
- Hero: painted MgGriebZ logo with "Build with" above it and a three-column colored rule under it (Chat / Work / Code).
- **No pills/chips for modules.** Use the Z-path mark instead.

### Z-path mark
viewBox 0 0 100 100, round caps, stroke 13 (18 at favicon size):
- Chat (top): `M24 26 H76` #f97316
- Work (diagonal): `M76 26 L24 74` #16a34a
- Code (bottom): `M24 74 H76` #14b8a6
Assets to generate: `zpath-mark.svg` (transparent), `zpath-icon-dark.svg` (#1f2937 rounded square rx18), `zpath-icon-light.svg`, `favicon.svg`.

### 3A: short animation (4s loop): intro, sales page load
Order and timing as % of loop:
1. Chat stroke draws 0–12%, label "Chat" lights with it
2. Work stroke draws 12–24%, label lights
3. Code stroke draws 24–36%, label lights
4. Corner brackets (4) snap in from ~12% inward offset 34–46%
5. `build.mggriebz.com` rises **inside the bracket frame, under the Z**, small and muted (only "mggriebz" in teal) 40–50%
6. Hold to 85%, then reset 85–95%
Below the frame: labels `Chat → Work → Code` (plain uppercase text + gray arrows, no pills).

### 3B: long animation (8s loop): clip end card 16:9
1. `> Build with GriebZ` types in (16 steps) 0–25%, teal block cursor blinking
2. Z draws beside it: Chat 28–36%, Work 36–44%, Code 44–52%; labels light in sync
3. Brackets snap around the whole lockup 52–62%
4. URL fades in 62–70%
5. Hold to 88%, reset 88–96%

### 3C: progress mark (lesson pages, dashboard)
- Base: three separate gray strokes (#e5e7eb). **Draw as three paths, not one joined path**, so the colored strokes overlay exactly.
- Each module's stroke fills in proportion to lessons done: `dasharray = (done/total)*100` with `pathLength=100`.
- Labels use real counts: "Chat · n of 5", "Work · n of 6", "Code · n of 6".
- Course complete = full Z + corner brackets ("Built").
- Compact lesson header: 28px progress Z · lesson title · "Chat → Work → Code" with the current module colored.

### Motion rules
- `prefers-reduced-motion`: disable animation and render the **finished** state (strokes drawn, brackets, URL, labels visible). Do not freeze on the last keyframe (that's the reset state).
- Export 3A/3B as MP4/GIF for clips via screen recording or rebuild in a video editor using the timings above.

---

## 7. Sales page: build.mggriebz.com

Single page, React + Vite, Azure SWA. Sections in order:
1. **Nav:** dark Z icon · "Build with" · logo · Modules / Kit / FAQ · "Get the course" button
2. **Hero:** logo-led lockup + Chat/Work/Code rule. H1 "Take one idea from a chat window to something real that works." Sub: "A written course with real prompts, templates, and the project files behind the apps I build with Claude and Codex. It's for people who've used ChatGPT but haven't built anything with it yet." CTA "Get the course · $49" + "Pay once. Every future update included." Optionally play 3A once on load.
3. **Proof strip (4 cols → 2):** Pocket Playroom (playroom.mggriebz.com), Shaco (shaco.mggriebz.com), MgGriebZ (mggriebz.com), "557 commits in July 2026, with Codex and Claude Code"
4. **Modules (3 cards, one row ≥ tablet):** each with a mini Z (only its stroke lit), description, "You leave with".
5. **Kit (dark band):** rows with mini Z icon (module stroke lit) + label + item. Only list items that passed KIT_REVIEW.
6. **Changelog:** timeline markers are progress Zs, centered on the line: v0.1 Chat (top stroke), v0.5 Work (top + diagonal), v1.0 Code (full Z + brackets), "Then · ongoing" (solid gray ring).
7. **About:** "Hi, I'm GriebZ." Placeholder text, which the owner writes in their own voice.
8. **FAQ:** Do I need to code? · Which AI plan? (free for M1, paid for M2–M3) · Refunds (14 days, confirm) · What if I get stuck? (→ sessions)
9. **Sessions (dark):** "Want me to build it, or build it with you?" · "$75/hr, 1-hour minimum." · "Book an hour"
10. **Footer:** mini Z · "Build with GriebZ · build.mggriebz.com" · Terms · Refunds · Privacy

Grid rules: use `auto-fit, minmax(180–240px, 1fr)` so no card orphans alone on a row at ~900px.

---

## 8. Architecture (Azure, from WebsiteTemplate)

- `site/`: React 19 + Vite + Tailwind + React Router + lucide-react (copy WebsiteTemplate `client/`). Routes: `/` sales page, `/learn` lesson index (gated), `/learn/:module/:lesson` lesson page rendered from `lessons/*.md`, `/terms`, `/refunds`, `/privacy`.
- `api/`: .NET 8 minimal API on App Service (copy WebsiteTemplate `api/` patterns: HMAC token validation, CORS). Endpoints: `POST /stripe/webhook`, `POST /auth/magic-link`, `GET /auth/verify`, `GET /me` (purchase + progress), `POST /progress`.
- Cosmos DB container `buyers` (partition `/email`): { email, stripeCustomerId, purchasedAt, product, progress: { m1: [], m2: [], m3: [] } }.
- Email: magic links + release notes. Pick one provider (e.g. Azure Communication Services Email or Resend); keep it behind one interface.
- Secrets only in App Service config / GitHub secrets. Never in repo.

---

## 9. Payments & delivery

**Stage A (v0.1, first ~10 buyers):** Stripe Payment Link ($49) → success page "check your email within 24 hours" → owner emails private course link manually → log buyer.
**Stage B (v0.5):** `checkout.session.completed` → API verifies Stripe signature → upsert buyer in Cosmos → send magic link → add to course email list → `/learn` checks access.
**Sessions:** Stripe product $75/hr, 1-hr minimum; booking via Cal.com + Stripe.
**Net:** $49 → ~$47.28 (2.9% + 30¢), ~$47.03 with Stripe Tax · $75 → ~$72.53. Disputes cost $15+; a clear refund policy is cheaper.

---

## 10. Business, tax, policies (research, not legal/tax advice)

- Sole proprietor, Pipestone, MN: EIN (free), separate bank account, Assumed Name filing if selling under a brand, Schedule C + quarterly estimates.
- **MN sales tax:** MN taxes digital audio/audiovisual courses delivered electronically; the exemption covers only post-secondary/career-school coursework. Sourced to buyer address; local tax may apply. Register for MN sales tax permit; enable Stripe Tax. Ask accountant: are live sessions taxable, and do recorded replays change that?
- Other states: only after crossing each state's threshold (unlikely early).
- Policies to write: Terms of sale (one-person license, updates included, no resale of kit), Refund (14 days proposed), Privacy (email + purchase; Stripe stores card), Session terms (paid at booking, reschedule window, recording consent, clip permission).

---

## 11. Rung 1: free clips (marketing)

- One topic per post (not multi-topic updates). Each clip maps to one lesson and ends on the 3B end card → build.mggriebz.com.
- Owner records and scripts manually; the pipeline only handles post-processing.
- Pipeline TODO: `box:clip --social` command (in shaco or BuildKit): input mp4 → trim → captions → 3A intro / 3B outro → 1:1 and 9:16 exports → draft caption with lesson link + #BuildwithGriebZ.
- Kids content (Evie as first user / playtester) is allowed and fits lesson 1.2.

---

## 12. Repo layout (split this file into)

```
CLAUDE.md             agent guide (from §1 scope, §2 decisions, §5 kit rule, lesson DoD)
README.md
docs/
  PRD.md              this file
  DECISIONS.md        §2
  KIT_REVIEW.md       §5
  BRAND.md            §6
  LAUNCH.md           §9–10
  CHANGELOG.md
lessons/
  m1-chat/1.1 … 1.5   §4
  m2-work/  m3-code/  setup/
kit/                  approved files only
brand/                Z-path SVGs, favicon
site/                 React + Vite (from WebsiteTemplate/client)
api/                  .NET 8 (from WebsiteTemplate/api), Stage B
```

### CLAUDE.md essentials
- Read only what the task needs; start with docs/DECISIONS.md.
- Don't invent a second source of truth; update the canonical doc.
- Nothing enters `kit/` without a KIT_REVIEW decision.
- Before adding a lesson: which module/step, what the buyer leaves with, the prompt card, the real project that proves it, the Done-when check.
- Lesson done = beginner can finish it (or setup guide covers the gap), prompt tested on a current model, example accurate and scrubbed, added to CHANGELOG.

---

## 13. Build slices (in order)

1. **Split & scaffold:** create layout §12 from this file; copy WebsiteTemplate `client/` into `site/`; add brand SVGs (§6).
2. **Sales page:** §7 at `/`, static, $49 Payment Link on the CTA. Deploy to SWA at build.mggriebz.com.
3. **Lesson renderer:** `/learn/:module/:lesson` from markdown; prompt cards get a copy button; 3C progress header (local storage for now).
4. **Z animations:** 3A on hero load (once), reduced-motion finished state; 3B as a standalone `/endcard` route for screen recording.
5. **v0.1 launch:** M1 published, Stage A delivery, policies pages.
6. **Stage B:** api/ webhook → Cosmos → magic link → gated `/learn` + server-side progress + release-note emails.
7. **v0.5:** M2 + setup guide. **v1.0:** M3 + MCP setup, clean-machine test.

## 14. Release plan
- v0.1 · Chat: M1, spec template, notes sheet, scorecard
- v0.5 · Work: M2 + setup guide, Stage B delivery
- v1.0 · Code: M3, MCP config, 3D toy build
- Then: new builds and tool updates, announced by email
