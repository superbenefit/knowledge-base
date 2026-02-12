# Data Directory

The data directory contains structured records organized by content type. This is one half of the knowledge base's two-space model—while `docs/` holds working documents organized by authoring group, `data/` maintains a flat structure where each subdirectory corresponds to a specific content type.

This organization serves the knowledge server and publishing infrastructure by providing predictable paths for typed content. When a file lives in `data/resources/patterns/`, it's automatically recognized as a pattern. When it lives in `data/concepts/`, it's a lexicon entry. The directory path determines the content type, which simplifies publishing workflows and enables consistent querying.

## Directory Structure

**concepts/** contains lexicon entries—the shared vocabulary that enables precise communication across the knowledge base. Each concept defines a term, provides context, and links to related ideas. These entries form the terminological foundation for all other content.

**links/** holds curated external resources. Rather than simple bookmarks, each link entry includes analysis, commentary, and connections to internal knowledge. This transforms external references into contextualized resources that bridge our work with the broader ecosystem.

**resources/** contains knowledge artifacts that can be commoned—reusable solutions with value across contexts:
- `patterns/` — Conceptual solutions to recurring challenges
- `practices/` — Documented ways of doing things
- `primitives/` — Foundational building blocks
- `protocols/` — Formal procedures and standards
- `playbooks/` — Comprehensive implementation guides

**stories/** holds narrative content:
- `articles/` — Formal essays and publications
- `studies/` — Case studies documenting real implementations
- `guides/` — Tutorials and instructional content

**Entity directories** record people, organizations, and initiatives:
- `people/` — Individual profiles
- `groups/` — Organizations, DAOs, and collectives
- `projects/` — Time-bounded initiatives
- `places/` — Locations and bioregions
- `gatherings/` — Events and meetings

**questions/** captures open research questions—generative unknowns that sit at the growing edge of knowledge, distinct from the commoned artifacts in other directories.

## Working with Data Content

Content in `data/` follows strict type schemas defined in `tools/types/`. Each content type has a corresponding template in `tools/templates/layouts/` that provides the correct frontmatter structure and content scaffolding.

When creating new content, start with the appropriate template. The Metadata Menu plugin will recognize files in these directories and apply the correct type automatically based on path.

Working documents, drafts, and in-progress research belong in `docs/` or `drafts/`, not here. Content moves to `data/` when it reaches a state of sufficient completeness and consensus to serve as a reference record.

## Index Files

Each subdirectory contains an `index.md` file that serves as the public-facing overview when content is published to the knowledge garden. These index files are curated landing pages, not auto-generated listings—they should provide context and guide readers to the most relevant content.
