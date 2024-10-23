# SuperBenefit Knowledge Base

A local-first markdown repository designed for collaborative knowledge management and collective sensemaking. Using Obsidian for editing, git for version control, and Quartz for publishing, this knowledge garden enables both deep individual work and shared understanding.

## Repository Overview

This repo is a collection of [Markdown](https://www.markdownguide.org/) files, organized using [Obsidian](https://obsidian.md/) and published with [Quartz](https://quartz.jzhao.xyz/). The primary markdown syntax used is [CommonMark](https://commonmark.org/), with some added flavor for [Obsidian](https://help.obsidian.md/Editing+and+formatting/Obsidian+Flavored+Markdown) and [GitHub](https://help.obsidian.md/Editing+and+formatting/Obsidian+Flavored+Markdown).

This knowledge base uses a local-first workflow - files are stored on your computer and synced using [git](https://www.atlassian.com/git/tutorials/what-is-git). We recommend using [Obsidian](https://obsidian.md/) for exploring and editing the knowledge base, and [VS Code](https://code.visualstudio.com/) for editing plugin files, etc. Both are free, [open-source](https://en.wikipedia.org/wiki/Open_source) and highly customizable.

Content from this knowledge base can be uploaded to the [knowledge garden](https://github.com/superbenefit/knowledge-garden), which is published [here](https://knowledge.superbenefit.org).

## Why This Design?

This repository is built around several key principles:

1. **Local-First Workflow**
   - Files stored locally as markdown, enabling offline work
   - Simple git sync for collaboration
   - Work directly on your device
   - Control over your content while sharing publicly

2. **Networked Knowledge**
   - Organic discovery through relationships
   - Focus on connections between ideas
   - Flexible organization through metadata
   - Visual graph exploration

3. **Progressive Documentation**
   - Natural flow from drafts to published content
   - Space for both working notes and finished artifacts
   - Structured but flexible metadata
   - Templates for consistency

4. **Collective Intelligence**
   - Support for both individual deep work and group sensemaking
   - Rich onboarding through connected content
   - Shared terminology and concepts
   - Collaborative knowledge building

## Technical Stack

- **Content**: [CommonMark](https://commonmark.org/) with [Obsidian](https://help.obsidian.md/Editing+and+formatting/Obsidian+Flavored+Markdown) and [GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) markdown extensions
- **Editor**: [Obsidian](https://obsidian.md/) (recommended) or any text editor
- **Version Control**: [git](https://www.atlassian.com/git/tutorials/what-is-git)
- **Publishing**: [Quartz](https://quartz.jzhao.xyz/)

## Content Structure

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

## How It Works

### Document Organization
- "Get in where you fit in" - don't overthink placement
- Link documents through wiki-style references `[[document-name]]`
- Use metadata and tags over folder hierarchy
- Create rich relationships through bidirectional links

### Document Types

We use a structured but flexible type system:

1. **Notes** (`type: note`)
   - Working documents and documentation
   - Project-specific content
   - Research and analysis
   - Start here when unsure

2. **Links** (`type: link`)
   - External resource documentation
   - Includes source URL and author info
   - Contains summary and commentary

3. **Patterns** (`type: pattern`)
   - Reusable solutions or approaches
   - Implementation guidelines
   - Usage examples

4. **Tags** (`type: tag`)
   - Terminology definitions
   - Concept explanations
   - Relationship mappings

5. **Indices** (`type: index`)
   - Directory listings
   - Category overviews
   - Navigation aids

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

## Getting Started

1. **Setup Local Environment**
```bash
# Clone repository
git clone [repository-url]

# Open in Obsidian
# 1. Open Obsidian
# 2. Choose "Open folder as vault"
# 3. Select cloned repository folder
```

2. **Configure Obsidian**
- Install recommended plugins
- Enable templates
- Configure metadata menu
- Set up tag management

3. **Start Contributing**
- Begin with drafts - they're private to your machine
- Use templates when helpful
- Don't worry too much about organization
- Focus on creating connections

## Content Creation

1. **Starting Out**
   - Use the drafts folder freely
   - Begin with simple notes
   - Link to related content
   - Add basic metadata

2. **Development**
   - Move to project folders when ready
   - Build relationships between documents
   - Collaborate through git sync
   - Focus on connections

3. **Publication**
   - Move finished work to artifacts
   - Ensure metadata is complete
   - Verify links work
   - Tag appropriately

## Templating System

### Available Templates

1. **Basic Templates**
   - Note Template
   - Link Template
   - Pattern Template
   - Tag Page Template
   - Folder Note Template

2. **Type Definitions**
Located in `types/`:
   - note.md
   - link.md
   - pattern.md
   - resource.md
   - protocol.md
   - practice.md
   - primitive.md
   - index.md
   - tag.md

### Using Templates

1. **New Documents**
   - Use template picker in Obsidian
   - Fill in required fields
   - Follow type-specific guidelines

2. **Type Definitions**
   - Define metadata schema
   - Set required fields
   - Specify validation rules

## Navigation

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

## Additional Resources

- See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines
- Check [index.md](index.md) for content overview
- Visit project documentation for specific guidelines

## Support

For questions or issues:
1. Check existing documentation
2. Ask in community channels
3. Open an issue if needed