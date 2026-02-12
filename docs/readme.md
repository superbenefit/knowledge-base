---
publish: false
---

# Docs Directory

The docs directory contains working documents organized by authoring group. This is one half of the knowledge base's two-space model—while `data/` maintains structured records by content type, `docs/` gives each working group freedom to organize their materials as they see fit.

This is where active development happens. Project notes, research in progress, collaborative drafts, and materials that haven't yet been refined into formal records all live here. Ideas grow through natural cycles: starting as rough notes, developing through collaboration, and eventually maturing into polished content that may move to `data/` or be published directly.

## Working Groups

Each subdirectory represents a working group or project area:

**dao-primitives/** contains research into the fundamental building blocks of decentralized organization—patterns, primitives, and frameworks for understanding how DAOs function. This includes the Primitives Framework and related conceptual work.

**rpp/** holds materials from the Regenerative Philanthropy Project, exploring how philanthropic practices can be transformed through decentralized governance and community ownership.

**aifs/** contains work on the AI for Sustainability initiative, investigating how artificial intelligence can support social and environmental benefit.

**cxi/** documents the Community Experience Initiative, focusing on how communities form, grow, and thrive in decentralized contexts.

**ics/** holds Impact Certificate System research, exploring mechanisms for recognizing and rewarding positive impact.

**general-circle/** contains governance materials for SuperBenefit's general operations and decision-making processes.

**wp/** holds working papers—longer-form analysis and research that doesn't fit neatly into other categories.

## Content Types in Docs

Unlike `data/` where directory path determines content type, documents in `docs/` declare their type through frontmatter. A pattern can live anywhere in the docs tree as long as it has `type: pattern` in its YAML frontmatter. This flexibility lets groups organize their work however makes sense for their projects.

When content reaches a state of completion and consensus, it may be moved to the appropriate `data/` subdirectory. A pattern document that started in `docs/dao-primitives/` might eventually move to `data/resources/patterns/` once it's been validated and refined. But this isn't required—content can be published directly from docs if that makes more sense for the material.

## Contributing

To contribute to a working group's documentation:

1. Review the existing content in the relevant subdirectory to understand current structure and conventions.
2. Use templates from `tools/templates/layouts/` to ensure correct frontmatter and structure.
3. Follow the metadata standards defined in `tools/types/` for your content type.
4. Submit contributions through the process outlined in [CONTRIBUTING.md](CONTRIBUTING.md).

Each working group may have additional conventions documented in their own readme or index files. When in doubt, look at existing content in that area to understand local patterns.
