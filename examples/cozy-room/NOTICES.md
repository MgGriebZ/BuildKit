# Source and asset notices

## Original example material

The Cozy Room C#/Razor, HTML/CSS, storage adapter, tests, room/lamp SVG illustrations and icon were authored for this R1 example. No PocketPlayroom source, private presenter material, personal room names, household saves, logo artwork or downloaded image assets were copied into the sample. PocketPlayroom informed the small-room/lamp teaching concept only. Fonts use the visitor's system font stack; there are no font downloads.

## License decision pending

No explicit redistribution license has been selected for the original example code/art. The owner must choose and record a source license before promoting downloads as freely reusable. Public visibility alone is not a redistribution license. This file does not assign a license or alter third-party rights.

## Third-party dependencies

Dependencies retain their own licenses and notices. Do not treat the pending original-source decision as replacing them. NuGet and npm lockfiles record the exact resolved dependency graph.

- The app directly uses Microsoft.AspNetCore.Components.WebAssembly and Microsoft.AspNetCore.Components.WebAssembly.DevServer 10.0.10 and the .NET SDK/runtime toolchain. Restore obtains their packaged license information and dependencies; publish also carries runtime/build-generated artifacts.
- Rule tests use Microsoft.NET.Test.Sdk 17.12.0, xunit 2.9.2 and xunit.runner.visualstudio 2.8.2 plus their locked transitive dependencies. These are development/test dependencies, not room features.
- The local browser harness uses Playwright 1.62.1 (Apache-2.0), with its own LICENSE/NOTICE in the installed npm package. It is development-only and is not shipped in the static room output. The browser executable has its own terms.

Before public packaging, review the chosen source license and the license/notice material for the resolved dependencies and intended distribution format. This PR records provenance; it is not a completed legal distribution review.
