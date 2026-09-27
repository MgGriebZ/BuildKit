# Sales-page asset review

Reviewed September 27, 2026. Bounded local-prep review only. Staging paths here are relative to the BuildKit repository root. User-supplied files were staged unchanged in `../reference/sales-page/` next to `Build with GriebZ Sales Page.dc.html`.

| File | Bytes | SHA256 | Source / staging result |
|---|---:|---|---|
| `support.js` | 69,150 | `8FE7DF74405F3C55F49B7249C74EA1397E65D07DEA2B1BD3B4A489BEC2E28CBE` | User-supplied attachment; staged as `../reference/sales-page/support.js`; hashes match. |
| `assets/Logo2.webp` | 1,238,809 | `0A117C2AF4191E2B9276CA7E251B42492E2E5C1AAA153EE0876A263DAEF6F126` | User-supplied attachment; staged as `../reference/sales-page/assets/Logo2.webp`; hashes match the attachment and the existing MgGriebZ asset. |

## Static runtime review

The HTML references `./support.js` and `assets/Logo2.webp`; those local paths now resolve. It also links Google Fonts (Poppins and Inter) and contains outbound project links. Static inspection of `support.js` found:

- Runtime loading of React 18.3.1, ReactDOM 18.3.1, and Babel Standalone 7.29.0 from `unpkg.com` (integrity attributes are present in the loader).
- Network reads using `fetch`, including the current document, external component/module URLs, and other runtime targets. Component URLs may be literal or supplied by the HTML/runtime.
- Dynamic code execution through `new Function`, including code built from loaded module source and component logic; JSX loading invokes Babel transformation.
- Dynamic script element insertion for Babel. No attached code was executed and no embedded commands were followed.

This is the reference prototype runtime, not an intended production dependency. Availability is resolved for local review; runtime behavior, external service availability and rendering remain unverified.

## Source and clearance status

- Local source availability and byte identity: verified by SHA256.
- Logo comparison to the asset path in the private MgGriebZ repository: hashes match; a folder named public does not make the repository public.
- User supplied the logo for this local PRD-prep task, which is sufficient to stage it here. This is not a public asset rights audit or a determination of third-party rights, provenance, or release clearance.
- `support.js` is prototype support code and is not cleared or proposed as a production dependency. Any production implementation should use its own selected, reviewed runtime/dependencies.
