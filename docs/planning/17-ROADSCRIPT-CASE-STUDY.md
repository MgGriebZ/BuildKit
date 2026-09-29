# RoadScript: professional-use case and source record

Reviewed September 28, 2026. Latest public master was [53aaf6d](https://github.com/MgGriebZ/RoadScript/commit/53aaf6d52186057b2bea24387981a0070c7e67b6), dated September 26. This is the same head as the prior snapshot; this pass reviewed the recent history in more detail. Reference checkout stayed read-only. No fresh build, runtime test or live-site availability check is claimed.

## Why it belongs in the core

Matt confirms regular work use. His [published README](https://github.com/MgGriebZ/RoadScript/blob/53aaf6d52186057b2bea24387981a0070c7e67b6/README.md) describes a client request for development roadmaps, a first version within a week, and subsequent daily refinement. Attribute that origin story to Matt's account; it is not an independently verified client testimonial.

The source/README support visual and JSON editing, timeline/list examples and Markdown/JSON/SVG exports. Those affordances make a useful teaching bridge: clarify messy information, decide what the audience needs, organize a plan, then make it readable. A polished chart still needs accurate facts. Nothing in this review establishes a built-in AI service.

## Recent concrete examples

| Source | Observed change | Teaching point |
|---|---|---|
| [718bdff](https://github.com/MgGriebZ/RoadScript/commit/718bdff8efdfbf87c014df4208723cf44822c9ab) and [a5737d0](https://github.com/MgGriebZ/RoadScript/commit/a5737d0a3bb02b67c71a12b5f2f530226edb8c34) | Example timeline summaries, with full details retained in reading views | Choose the right amount of information for the audience |
| [5c599d7](https://github.com/MgGriebZ/RoadScript/commit/5c599d7e82a3494e7125dbd3f28573bbf691f740) | Paused mobile items use grayscale instead of fading all content | "Make it readable" needs an observable check |
| [ad4f5da](https://github.com/MgGriebZ/RoadScript/commit/ad4f5daa577aab261eff9b91cf7de6dfb530f792) | Per-roadmap undo/redo history repair | Useful products need repair and regression review |
| [09c80aa](https://github.com/MgGriebZ/RoadScript/commit/09c80aabaa2c614e4f254d3799c914e36875fdd2) and [d7a2ebd](https://github.com/MgGriebZ/RoadScript/commit/d7a2ebddf0ff874762ac588521e5f1bcaf9e7879) | Better bullet fitting, overflow count and narrow-item icons | Small requirements turn into concrete user-facing improvements |

Commit metadata and inspected changes document development work, not comparative model performance, current runtime reliability or quantified business impact.

## Seminar use

Begin with fictional support-intake notes; ask an AI assistant for a status brief/action table with unknowns preserved. Review it before showing a roadmap. Then use public example views or a separately prepared fictional board to explain summaries versus detail. Automatic conversion/import is not assumed. Keep any AI-to-JSON exercise optional until its exact fixture and steps have been validated.

The core class can end this example with a reviewed text artifact. Participants do not need developer tools. RoadScript is the professional story; Cozy Room shows the same requirements/checking habit in a playful Code case. No copying of RoadScript source is needed. If a later task copies code, preserve applicable license notices.
