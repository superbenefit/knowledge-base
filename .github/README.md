# SuperBenefit Knowledge Base

A local-first markdown vault for collaborative knowledge management and collective sensemaking.

## Repository Overview

This repo is a collection of [Markdown](https://www.markdownguide.org/) files, organized using [Obsidian](https://obsidian.md/) and published with [Quartz](https://quartz.jzhao.xyz/). The primary markdown syntax used is [CommonMark](https://commonmark.org/), with some added flavor for [Obsidian](https://help.obsidian.md/Editing+and+formatting/Obsidian+Flavored+Markdown) and [GitHub](https://help.obsidian.md/Editing+and+formatting/Obsidian+Flavored+Markdown).

This knowledge base uses a local-first workflow - files are stored on your computer and synced using [git](https://www.atlassian.com/git/tutorials/what-is-git). We recommend using [Obsidian](https://obsidian.md/) for exploring and editing the knowledge base, and [VS Code](https://code.visualstudio.com/) for editing plugin files, etc. Both are free, [open-source](https://en.wikipedia.org/wiki/Open_source) and highly customizable.

Content from this knowledge base can be uploaded to the [knowledge garden](https://github.com/superbenefit/knowledge-garden), which is published [here](https://knowledge.superbenefit.org).

### Software Stack

- **Content**: [CommonMark](https://commonmark.org/) with [Obsidian](https://help.obsidian.md/Editing+and+formatting/Obsidian+Flavored+Markdown) and [GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) markdown extensions
- **Editor**: [Obsidian](https://obsidian.md/) (recommended) or any text editor
- **Version Control**: [git](https://www.atlassian.com/git/tutorials/what-is-git)
- **Publishing**: [Quartz](https://quartz.jzhao.xyz/)

### Why This Design?

This repository is built around several key principles that shape how we create and share knowledge together.

- A **local-first workflow** means your content lives on your device as markdown files. Work offline freely, then use git to sync and collaborate. You maintain control while sharing with the community.

- We structure around **networked knowledge** rather than rigid hierarchies. Follow connections between ideas through flexible metadata and visual graphs, enabling organic discovery of related concepts.

- **Progressive documentation** acknowledges that knowledge evolves. Content flows naturally from drafts to polished artifacts, supported by templates and flexible metadata that grows with your work.

- **Collective intelligence** balances individual and group needs. The system supports both deep solo work and collaborative sense-making, using shared language to build understanding together. This enables true collaborative knowledge building while preserving individual autonomy.

## Content Structure

- "Get in where you fit in" - don't overthink placement
- Link documents through wiki-style references `[[document-name]]`
- Use metadata and tags over folder hierarchy
- Create rich relationships through bidirectional links

```
knowledge-base/
├── artifacts/     # Published, finalized content
├── notes/        # Working documents by project
│   ├── dao-primitives/
│   └── rpp/
├── drafts/      # Work-in-progress documents
├── library/      # External references with commentary
├── tags/         # Tag definitions and terminology
├── templates/    # Document templates
└── types/        # Metadata type definitions
```

### Navigation

1. **Graph View**
   - Visual relationship mapping
   - Content exploration
   - Connection discovery

2. **Tags**
   - Categorical organization
   - Concept relationships
   - Topic grouping

3. **Search**
   - Full-text search
   - Metadata queries
   - Tag filtering


### Document Types

<!-- Add overview and link to types readme -->

### Metadata Schema

All documents use YAML frontmatter for metadata:

```yaml
---
title: Document Title
description: Brief description
type: [note|link|pattern|tag|index]
publish: true/false
tags:
  - tag
  - another-tag
# Additional fields based on type
---
```

### Core Tools
- **Content**: CommonMark + Obsidian Markdown extensions
- **Editor**: [Obsidian](https://obsidian.md/) (recommended)
- **Version Control**: git
- **Templates**: Custom templates for different content types

### Obsidian Plugins
- `dataview` - Advanced querying
- `metadata-menu` - Metadata management
- `tag-wrangler` - Tag organization
- `auto-template-trigger` - Template automation
- Additional plugins for specific functionalities

## Additional Resources

- See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines
- Check [index.md](index.md) for content overview
- Look for `readme.md` files inside directories to better understand their contents

## Support

For questions or issues:
1. Check existing documentation
2. Ask in community channels
3. Open an issue if needed