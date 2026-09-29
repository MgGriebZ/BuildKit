# Execution handoff: AI introduction and live build

Revision 0.6 · September 28, 2026. Read [15-PRD-AI-INTRO-LIVE-BUILD.md](15-PRD-AI-INTRO-LIVE-BUILD.md), [03-PRD-COURSE.md](03-PRD-COURSE.md) and [16-TOOLS-MODELS-AND-COSTS.md](16-TOOLS-MODELS-AND-COSTS.md). Old L1/R1/R2/L2/L3 prompts are completed or superseded; do not dispatch them as new work.

## Existing evidence and starting points

Public requirements/R1/R2/L2 merged in BuildKit PRs #3–#7. Public main was `b4e4a7fe7eb78b726dfdb0d96b840d2a2ad00449` before this requirements revision. R2 source/test checkpoint is `91eab16835aac4cfd80a7f51017ac62f5cc6b9bd`; standalone export tree is `15a93acae7e12fea71ea768b9198428f39a5a312`. R1 source is `40bc75fa779ce3a3a9c4f94a3f6dda18109a3ffc`. Existing L2 exercise content is `814d525a2d41f62e43adfc976049bdb2c0b68233`.

Current revision is on `planning/ai-intro-live-build` in each repo. Use its reviewed requirements while its PR is open, then main after merge. Public and private branches have different history. Private requirements branch starts from `work/l3-cozy-room`; preserve that dependency. Check actual heads and dirty state before branching. A2 worksheet PR #2 is independent.

## Next slices

| ID | Worker / repository | Allowed outputs | Acceptance and stop |
|---|---|---|---|
| L4 | Luna / private BuildWithGriebZ | `courses/ai-intro/`, `seminars/cozy-room/` | Draft six chapters, glossary, setup routes, prompt cards, cost explanation, audience choices and fallback; link pending R3 honestly. Check timing/links and source dates; commit/push PR |
| R3 | Sol / public BuildKit | `examples/cozy-room/` | Implement/check three-star game and reference checkpoint; document reproducible starting tree, real prompts, failed attempts, commands and timing without private transcripts. Preserve R1/R2; commit/push PR |
| L5 | Luna / public BuildKit, then separate private PR | Public `lessons/free/ai-intro/`, `lessons/free/cozy-room/`; private `courses/ai-intro/`, `seminars/cozy-room/` | After R3: synchronize actual prompts, checkpoints and before/after lesson; reopen scoped export and check independent instructions. Separate commits/PRs per repo |
| D1 | Sol / BuildKit plus private inventory | Public `docs/hosting/`, `.github/workflows/`, sample hosting config in `examples/cozy-room/`; private inventory outside Git | Read-only selected Azure inventory first, propose existing/new host, prepare and validate a manually triggered workflow and deployment instructions. No dispatch/resource change in this slice |
| H1 | Matt and adult tester | Private observation record | Rehearse the revised hour and independent reader path; record actual prompt/build/repair timing and explain-back |
| P1 | Luna + owner, after L5/H1 | Private `courses/ai-intro/release/` | Concrete edition inventory, price/format/delivery/terms decisions and delivery test plan; no checkout activation until directed |
| U1 | Sol / PocketPlayroom, only if selected later | One explicitly selected upstream feature | Separate product change and PR; never import private source into public tutorial |

L4 and R3 can proceed in parallel after requirements review. L5 depends on their actual outputs. D1 is optional and not a prerequisite for local teaching. H1 follows the synchronized materials; P1 follows the useful tested edition. Marketing work uses the revised offer, not the old session-only copy.

## Shared contract

Read repository AGENTS.md and this revision. Preserve existing edits. Create a scoped branch, inspect the diff and run proportionate checks. Commit, push and open a PR; attach it to the chat. Each default slice stops at its acceptance criteria and reviewable PR. No automatic merge, resource creation, deployment, checkout, outreach or purchases. Earlier explicit owner authorization governs any separately requested action.

Use the selected worker model. Luna handles bounded authoring and mechanical reconciliation; Sol handles app integration and hosting workflow. These worker assignments are not learner levels or claims that vendors' models are interchangeable. No routine credit reports; the teaching case study records only its isolated observed usage or explicit unknowns.

## Goal: L4 / Luna

> Execute L4 in private BuildWithGriebZ from planning/ai-intro-live-build (or its merged successor). Read planning/ROOM-SEMINAR-HANDOFF.md and public PRDs 03/15/16 plus handoff 14. Write only courses/ai-intro/ and seminars/cozy-room/. Draft a concise standalone introduction with six chapters, glossary, free/paid setup routes, cost references and a flexible 60-minute script. Live AI prompting and a three-star game extension are central; palette editing is optional practice. Include specific inspect/implement/check/repair/handoff cards, audience choices and a truthful fallback. Mark R3 results/transcript/usage pending until observed. Preserve source references and keep paid prose private. Check timing, links and internal consistency. Commit, push and open a private PR; stop for review.

## Goal: R3 / Sol

> Execute R3 in BuildKit using the reviewed revision 0.6 requirements in docs/planning/15-PRD-AI-INTRO-LIVE-BUILD.md and 13-PRD-COZY-ROOM.md. Write only examples/cozy-room/. Start from the current R2 app, preserve its historical commits, and add three accessible star buttons with single collection, 0/3 through 3/3 progress, calm completion and replay. The round is temporary on reload; preserve lamp state/storage. No runtime AI, backend, timer or leaderboard. Build a checked reference result and record a repeatable live prompt path from a clean R2 tree, including real failures and timing; don't invent usage. Validate unique collection/replay, keyboard/mouse/touch, progress announcement, reduced motion, reload reset and lamp regression, plus build/test/publish. Record exact baseline/finished/export revisions and outstanding human checks. Commit, push, open a PR and stop; no merge or deploy.

## Goal: L5 / Luna

> After L4 and R3 supply actual checked revisions, execute L5. In BuildKit update only lessons/free/ai-intro/ and lessons/free/cozy-room/ with a useful free takeaway, prompt/check framework, documented feature exercise, exact checkpoints and free/local path. Keep private paid chapters out of the public repository. In a separate BuildWithGriebZ branch update only courses/ai-intro/ and seminars/cozy-room/ against that evidence. Export only the app subtree, reopen it and check the documented commands. Match real prompt results and cost unknowns; do not inherit R2 test counts as R3 evidence. Commit/push separate PRs, attach both and stop before release.

## Goal: D1 / Sol

> Prepare D1 from the reviewed revision 0.6 requirements. Establish the selected Azure subscription/target from owner context; if ambiguous, prepare the offline workflow and request only the missing selection. Inspect resources/quotas read-only and keep identifiers outside Git. Do not delete resources, change a plan or provision a subscription to work around limits. Prepare a manually triggered deployment workflow and hosting instructions that publish only the Cozy Room static output with the pinned .NET SDK, named target environment and protected credentials. Validate the build/output and config locally; do not dispatch the workflow or create resources. If quota blocks a new app, document a scoped existing-host option or local-demo fallback. Commit/push a PR and report the concrete destination/cost decision still needed.

## Review result required from every worker

Changed paths and artifact links; observed checks; exact reference revisions; unverified/pending items; next dependency. An actual live run, a prepared recording and a successful deployment are distinct. Never mark H1 done from agent checks alone.
