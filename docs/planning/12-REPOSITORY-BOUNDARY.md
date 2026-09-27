# Public requirements and private teaching material

Revision 0.4. BuildKit was verified public before this documentation push. The owner asked whether it should become private; that question is not an instruction to change its visibility. No visibility change or additional repository creation has been performed.

## Recommendation and alternative

Recommended for the current push: keep public BuildKit for requirements, the eventual public site, cleared free examples and reusable code intentionally released. Put full presenter scripts, private lesson authoring, recordings and exclusive seminar assets in a separate private authoring repository/location. Client-specific files belong in private per-client storage with controlled sharing, not a single repository shared with every learner. Repository naming remains an owner choice.

If the owner wants BuildKit itself to be the single authoring home for private course material, switching it to private before adding that material is also reasonable. A public website can be planned separately. Check collaborators, integrations, CI, hosting and the applicable GitHub plan before changing visibility. Existing public forks remain public when an upstream repository becomes private; earlier public copies are not made secret retroactively. [GitHub visibility documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility).

The public requirements push can proceed without deciding this future layout, provided its contents are suitable for public viewing. A public branch or pull request is just as public as the default branch.

## Content placement

| Material | Current publication rule |
|---|---|
| Offer requirements, PRDs, acceptance checks, readiness and architecture | Public-safe documentation allowed in this push |
| Full presenter script, teaching runbook, exclusive prompts/curriculum and recordings | Private authoring until intentionally selected for public release |
| Generic public marketing copy and high-level demo descriptions | Public after accuracy/source review |
| Private source repositories, proprietary media or raw chat histories | Remain in original private locations; no blanket copy |
| Client projects, contact/payment records and personalized handoffs | Private per-client workspace and limited delivery |
| Credentials, API keys, production configuration | Appropriate secret storage; never course attachments or Git content |

The detailed session-preparation draft previously held in public-working-tree file 09 is preserved outside this repository before the push. The public file 09 contains only the preparation specification. No actual client records exist in the planned sample documents. The supplied support.js, HTML and logo remain local reference assets for now.

## Release check

Use an explicit staged file list; inspect the diff, links, suspicious credential patterns and candidate binaries before committing. Do not include local Downloads paths, private copied content, paid lesson packages or build artifacts. A pattern scan is a bounded check, not a full historical secret audit. Preserve the original already-public PRD as historical input; it is not a newly authorized source for importing private files.

Future private teaching storage must be selected and its visibility/access verified before authoring or pushing confidential materials there. Do not make a temporary public repository with a plan to privatize it afterward. If client downloads are hosted, verify authentication/sharing separately from Git repository visibility.
