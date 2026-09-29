# Tools, models and costs: teaching reference

Checked September 28, 2026. A dated reference for the author and learner-material writer. Recheck prices, availability and quotas before recording or selling an edition. Public list prices do not establish Matt's or a learner's account entitlements.

## Three separate bills

| Category | What the learner is paying for | How to describe it |
|---|---|---|
| AI subscription | Access to a product and included usage under plan limits | Recurring fee; not unlimited work or a guaranteed number of apps |
| AI metered usage | Provider credits or API input/output/cache tokens and any tool charges | Task-dependent; API billing is distinct from subscription access |
| Hosting and delivery | Resources, bandwidth, domains, storage and CI use | Infrastructure quotas and bills; these are not model tokens |

The resulting Cozy Room is deterministic browser code. Playing it does not call an AI service, consume model tokens or require the viewer to subscribe to the tool that helped build it. AI-assisted development and an AI-powered application are different things.

## Current provider examples

- OpenAI lists ChatGPT Plus at USD $20/month with Codex access. A Free path is listed with Luna subject to rollout. Account limits vary; use the actual dashboard. API-key usage has separate API pricing. [OpenAI pricing](https://learn.chatgpt.com/docs/pricing).
- Claude lists Pro at $20/month when billed monthly; the advertised annual discount is $200 billed up front. Free access and Pro capabilities differ; the current comparison includes Claude Code with Pro, not Free. Taxes and usage limits apply. [Claude pricing](https://claude.com/pricing).
- Neither subscription is required merely to watch Matt, read the purchased guide or run the completed local sample. Learners choose a provider; purchasing both is not a course prerequisite.

## Model choice in about two minutes

A model is the engine; ChatGPT/Codex or Claude/Claude Code is the product and tool environment around it. A more expensive model is not automatically better value for every task. Explain task clarity, speed, capability, available tools, account access and cost; evaluate the result.

OpenAI's current guidance positions GPT-6 Luna for focused repeatable tasks, GPT-6 Sol for everyday/complex coding, and GPT-6 Astra for demanding work. GPT-5.6 Terra is an earlier-generation named option, not a required rung between current Luna and Sol. Always show the full model/version actually selected. [OpenAI models](https://learn.chatgpt.com/docs/models).

Claude offers families such as Haiku, Sonnet and Opus, with availability and rates varying by version and product. Do not claim Luna equals Haiku or Sol equals Sonnet. Use the available model on a small defined task, inspect the output, then change the model or effort only for a concrete reason. [Claude model and plan comparison](https://claude.com/pricing).

## Four honest learning paths

| Path | What can be done | Constraint and fallback |
|---|---|---|
| No paid AI or cloud purchase | Watch/read, inspect prompts/diffs, run and manually change the local example using the documented tools | A live AI run needs available access; the tested reference and manual practice remain usable |
| Available free AI access | Try short prompts or a small change | Model/tool limits and rollout can stop a run; do not promise the same agent workflow on every free plan |
| One paid subscription | Follow the selected product's agent workflow with included usage | Limits still apply; wait, reduce scope or use reference output when exhausted |
| Optional API/cloud | Metered model calls or public hosting | Separately enabled, separately billed; not a requirement for the first lesson |

Software/tool availability does not remove device, internet or installation requirements. The guide must distinguish watching in a browser from running a local .NET build.

## Measured example and calculation

A blank case-study record contains: date; provider/product; sign-in/billing mode; full model/version and effort; baseline and resulting commit; exact task; preparation/live/repair phases; elapsed time; retries; checks passed/failed; usage evidence source; input/cached-input/output tokens or provider credits if exposed; pricing source/date; and explicit unknowns.

When an API provides separate noncached input I, cached input C and output O counts, and matching dollar rates per million tokens, the illustrative estimate is (I × input rate + C × cached rate + O × output rate) / 1,000,000, plus applicable cache-write/tool/other charges. Match the provider's definitions to avoid counting cached input twice. This is a calculation method, not a quoted price for the demo.

For a subscription run without isolated usage, say: "Run used included subscription access; exact per-run tokens/credits unavailable. Subscription fee shown separately." Record preparation and failures even if the polished recording omits their waiting time. Never manufacture a token count, infer it from messages, or promise a fixed number of games from $20.

## Azure capacity and deployment choices

Microsoft currently lists 10 Free Static Web Apps per subscription, 100 GB included monthly bandwidth, three preview environments per app and 250 MB per environment. These published quotas do not tell us how much capacity Matt has left. GitHub Actions storage has its own quotas. [SWA quotas](https://learn.microsoft.com/en-us/azure/static-web-apps/quotas).

App Service Free/Shared has different CPU, memory, bandwidth and filesystem quotas; some exceeded limits stop the app until reset. Do not substitute App Service for SWA and assume the same limits. [App Service quotas](https://learn.microsoft.com/en-us/azure/app-service/web-sites-monitor).

D1 first inventories the selected subscription read-only: resource names/types/SKUs, SWA count, hosting target, relevant usage/quotas, CI and DNS needs. Keep subscription identifiers and detailed inventory private; publish only a non-identifying conclusion. Access/capacity has not been verified here.

If quota is reached: keep the local demo; use a labeled existing recording; or plan a scoped route on an appropriate existing static host after checking base paths and ownership. Reuse must not overwrite a different site. Creating a new subscription, deleting resources or upgrading a plan is not an automatic fallback. The owner chooses any actual hosting change.

Azure resource creation is an optional 15–30 minute lab; core class deployment is at most a short demonstration with a prepared target. A new resource is not needed for every learner or rehearsal. Build a static Release output, verify it locally, then explain workflow -> host -> URL -> browser check. [Microsoft Blazor deployment guide](https://learn.microsoft.com/en-us/azure/static-web-apps/deploy-blazor).

## Maintenance contract

Luna's content slice copies only the concise learner explanation and links, preserving this check date. Before release, recheck official pages and visible model names; record changed facts in an edition note. Do not promise lifetime updates. Service limits, a subscription fee and a metered inference price must never appear as interchangeable "token cost."
