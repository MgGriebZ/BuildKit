# Your first AI build: a free field guide

AI tools can help turn a clear idea into a useful draft or a working code change. They can also misunderstand the request, invent details, or produce code that fails. Treat the result as a proposal: explain the goal, inspect the change, run it, and check the behavior you care about.

## A prompt you can reuse

Give the tool four things:

1. **Context:** What are you working on, and what already works?
2. **Goal:** What visible change should happen?
3. **Boundaries:** What must stay the same? What files or tools are in scope?
4. **Checks:** What will you run or observe to decide whether it worked?

Ask it to inspect first and explain a small plan. After it edits, read the diff, run the checks, and try the feature yourself. If a check fails, share the exact relevant error and ask for one focused diagnosis or repair. Keep a known-good copy so you can recover.

## Try it with the Cozy Room

The [free Cozy Room tutorial](../cozy-room/README.md) follows a checked example from its three-style lamp to a small star-collecting game. It includes exact source checkpoints, a reusable exercise prompt, local setup commands, observed checks, and the limits of that evidence. You can read the lesson without installing anything. Running or editing the Blazor source requires the .NET SDK; the tutorial explains the optional local preview and browser checks.

**Small practice task:** In the Cozy Room, collect one star twice. What should the progress display do? Try the behavior, inspect the relevant code or tests, and explain how you know whether a repeat counted. The checked reference keeps each star at one collection and announces progress; a fresh AI-generated change still needs its own checks.

## Keep the costs distinct

Watching, reading, and running this finished local sample do not call an AI model. A free or paid AI product may have access limits; API use can have separate metered charges. Hosting is a separate service and is optional for this local lesson. Exact costs and account access depend on the provider, plan, and task, so check current terms instead of assuming a subscription buys a fixed number of builds.

## What this does and does not show

The Cozy Room is a small, checkable browser app—not proof that AI always writes correct code or that any app can be finished in an hour. Its recorded automated checks ran locally in a specific environment. They do not replace human accessibility review, screen-reader or physical-device testing, or an adult's independent repeat. The original app's redistribution license is still pending; this lesson does not grant permission to relicense or republish its source.

This free introduction is useful on its own. It is not the private full guide or presenter script, and no purchase or account is needed to read it.
