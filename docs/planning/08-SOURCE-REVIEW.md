# Source evidence and reuse review

Reviewed September 27, 2026. A bounded source review by the planner and two Luna workers, not an exhaustive audit or a runtime certification. Private references remained read-only; no private code or personal content was imported into BuildKit. The owner's descriptions of daily use are first-person context, distinct from independently observed software behavior.

## Local source inventory

BuildKit planning branch: `planning/business-launch`, based on `ad9de17`. The earlier access test pushed and removed a temporary empty-commit branch. That establishes GitHub push access to BuildKit, not Azure, Stripe, email, school or social access.

Reference roots are local siblings of this repo under `../reference/`. The table records repository-relative evidence paths to let the next agent read only what its ticket needs.

| Source / snapshot | Evidence inspected | Useful teaching input | Limits |
|---|---|---|---|
| BuildKit `ad9de17` | `BuildKit-PRD.md`, `README.md` | M1 interview/spec methods, brand, early offer and architecture | Draft decisions reopened; no sales or learner-test evidence |
| PocketPlayroom, private, `edb7673` | `README.md`, `VISION.md`, `docs/WORLD.md`, `docs/ARCHITECTURE.md`, `src/PocketPlayroom.Core/World/WorldRules.cs`, `src/PocketPlayroom.App/Services/BrowserWorldStateStore.cs` | Blazor/C# interaction rules, local world persistence, small playable proof | Not React; no root LICENSE found in bounded review; third-party notice is not whole-repo permission; app not run |
| RoadScript, public, `53aaf6d` | `README.md`, `RoadScript.csproj`, `Pages/Home.razor`, `Models/RoadmapModels.cs`, `Services/MarkdownExportService.cs`, `Services/StorageService.cs`, `LICENSE` | .NET 9 Blazor, structured plans, local saves and export; small schema-to-view exercise | MIT notice needed for copied portions; third parties separate; share URLs can carry data; app not run |
| MgGriebZ, private, `0af7e35` | `README.md`, `mggriebzUI/public/staticwebapp.config.json`, `mggriebzUI/vite.config.js`; asset/path presence | React/Vite + .NET/Azure patterns; static event page alongside an app; own brand logo available | Private event content/contact details excluded; no reproduction of birthday data; deployment not tested |
| WebsiteTemplate, public, `16cd01d` | `README.md`, `client/package.json`, `api/DemoSiteAPI.csproj` | React 19/Vite/Tailwind 3/Router 7 frontend conventions; .NET 8 backend is optional reference | Includes CMS/media/backend features unnecessary for pilot; verify versions and licenses before reuse |
| shaco, private, `8315b18` | `README.md`, package manifest, media path inventory | Astro 5/Tailwind 4 static Markdown authoring pattern and media workflow | A reference for content organization, not reason to adopt another stack or copy assets |
| CoreClock, private | Authenticated top-level README/documentation index through GitHub API; earlier recursive tree access | Godot run/validate workflow as later teaching candidate | No retained LFS checkout; Blender production capability not independently verified by this review |
| Sales-page export | `sales-page/Build with GriebZ Sales Page.dc.html` | Layout, brand, course/session draft copy | Missing export runtime; placeholders and noninteractive CTA spans; not a deployable sales flow |
| Animation bundle | `ai-coaching-business-report/exports/zpath/README.md`, builder and React files; SVG/MP4 inventory | Six SVG variants, two MP4s, generator, mark/progress components | Videos not played, frames not visually verified; React behavior not runtime tested |

The folder named "AI Coaching Business Report" contains an animation export bundle, not a narrative market/business report. No previous chat archives, whole Git histories, deployed runtime tests, analytics, customer interviews or market-size study were included. This packet does not claim to have reviewed years of conversations.

## Concrete findings that affect implementation

1. The supplied `Logo2.webp` is now staged at `work/reference/sales-page/assets/Logo2.webp`; its SHA256 matches both the supplied download and `MgGriebZ/mggriebzUI/public/assets/images/Logo2.webp`. `support.js` is now staged beside the HTML, resolving file availability. Static inspection identifies it as a prototype runtime with external dependency loading, network access and dynamic code execution; it is not an intended production dependency, and runtime behavior remains unverified. See `docs/asset-review.md` for file details and clearance limits. This resolves local prep availability only; it is not a public-asset rights audit.
2. Prototype price interpolation (`{{ price }}`), CTA spans, policy text placeholders, future-course descriptions and lifetime-update copy need reconciliation with the approved offer. They are design inputs, not working purchase functionality.
3. `ZProgress.jsx` hardcodes Chat 5 / Work 6 / Code 6. Course progress is unnecessary for the session-first launch. If a curriculum is later selected, use its actual totals and a readable text equivalent rather than reusing those counts.
4. Inline animation generator uses generic SVG IDs (`bg`, `gl`, `tc`), keyframe names and broad SVG element CSS selectors. When rendering multiple inline instances, review for ID/style collisions and isolate styles. Reduced-motion completion is documented but needs visual testing. Do not call the assets production-verified yet.
5. Original typography calls Inter "mono"; use it as sans-serif if desired and select a real monospace family/fallback for code.
6. Original API/auth/Cosmos plan is considerably larger than pilot delivery requires. Existing infrastructure is evidence of experience, not a requirement to duplicate every component.
7. Existing source confirms useful behaviors/patterns but not willingness to pay, novice completion, current hosting health or ownership of every embedded asset.

## Item-level reuse register

| Material | Proposed handling | Release status |
|---|---|---|
| Existing public course-draft concepts | Rewrite as short tested lessons with fictional examples | Editorial review needed |
| Supplied Z animations and owner logo | Adapt after owner provenance/rights confirmation and motion checks | Pending |
| Private Playroom code/art/vision text | Use concepts; original teaching example | No direct redistribution cleared |
| Birthday page content/calendar/media | Describe static-page pattern with fictional event | Original personal data excluded |
| RoadScript code | Prefer small original exercise; if copied, retain applicable MIT notice | Item-level selection needed |
| WebsiteTemplate frontend | Inspect license/dependencies; adapt minimal frontend pattern | Blanket copying not approved |
| CoreClock assets/MCP configuration | Later original exercise; verify tool and asset rights | Deferred |
| Private security/workplace materials | Do not redistribute; abstract principles only | Excluded |

Read access and owner enthusiasm do not settle third-party licensing, employer rights or permission to publish another person's details. Clear specific selected assets rather than demanding a full audit of every repo before a clean original example.

## External sources used in the plan

Checked September 27, 2026. Recheck commercial terms and applicable guidance at launch. These support the named operational points, not proof of market demand.

- [Minnesota digital products](https://www.revenue.state.mn.us/digital-products): product distinctions and interactive-webinar conditions.
- [Minnesota assumed name/DBA](https://www.sos.mn.gov/business-liens/business-forms-fees/assumed-namedba): naming and publication requirements.
- [Minnesota sales/use tax guide](https://www.revenue.state.mn.us/book/export/html/10021): registration/collection framework.
- [IRS EIN](https://www.irs.gov/businesses/employer-identification-number) and [SS-4 instructions](https://www.irs.gov/instructions/iss4): free application, need and existing sole-proprietor EIN considerations.
- [IRS sole proprietorships](https://www.irs.gov/businesses/small-businesses-self-employed/sole-proprietorships) and [Publication 583](https://www.irs.gov/publications/p583): reporting and records/estimated-tax context.
- [Stripe US pricing](https://stripe.com/us/pricing): illustrative domestic-card fee and refund economics; verify account-specific charges.
- [Southwest SBDC](https://mn.gov/deed/business/help/sbdc/find-sbdcs/sbdc-southwest.jsp) and [SBDC service overview](https://mn.gov/deed/business/help/sbdc/overview/): local advisory support.
- [OpenAI usage/pricing](https://learn.chatgpt.com/docs/pricing): model-dependent usage and limits; does not establish a fixed cost for this planning session.
