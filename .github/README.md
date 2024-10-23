# SuperBenefit Knowledge Base

A local-first markdown repository designed for collaborative knowledge management, using Obsidian for editing, git for version control, and Quartz for publishing.

## Repository Overview

This repo is a collection of [Markdown](https://www.markdownguide.org/) files, organized using [Obsidian](https://obsidian.md/) and published with [Quartz](https://quartz.jzhao.xyz/). The primary markdown syntax used is [CommonMark](https://commonmark.org/), with some added flavor for [Obsidian](https://help.obsidian.md/Editing+and+formatting/Obsidian+Flavored+Markdown) and [GitHub](https://help.obsidian.md/Editing+and+formatting/Obsidian+Flavored+Markdown).

This knowledge base can be synced to your computer using [git](https://www.atlassian.com/git/tutorials/what-is-git), and modified using a text or code editor. We recommend using [Obsidian](https://obsidian.md/) for exploring and editing the knowledge base, and [VS Code](https://code.visualstudio.com/) for editing plugin files, etc. Both are free, [open-source](https://en.wikipedia.org/wiki/Open_source) and highly customizable. This can be described as a [local-first](https://www.inkandswitch.com/local-first/) workflow.

Content from this knowledge base can be uploaded to the [knowledge garden](https://github.com/superbenefit/knowledge-garden), which is published [here](https://knowledge.superbenefit.org).

## Why This Design?

This repository is built around several key principles:

1. **Local-First Workflow**
   - Files stored locally as markdown, enabling offline work
   - Git for version control and collaboration
   - Sync to personal devices for direct editing
   - Published online while maintaining local control

2. **Networked Knowledge**
   - Flat hierarchy with semantic connections
   - Focus on relationships between ideas
   - Flexible organization through metadata
   - Graph-based navigation and discovery

3. **Progressive Documentation**
   - Clear workflow from drafts to published content
   - Separation of working notes and finished artifacts
   - Structured metadata for organization
   - Templates for consistency

## Technical Stack

- **Content**: [CommonMark](https://commonmark.org/) with [Obsidian](https://help.obsidian.md/Editing+and+formatting/Obsidian+Flavored+Markdown) and [GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) markdown extensions
- **Editor**: [Obsidian](https://obsidian.md/) (recommended) or any text editor
- **Version Control**: [git](https://www.atlassian.com/git/tutorials/what-is-git)
- **Publishing**: [Quartz](https://quartz.jzhao.xyz/)

## Repository Structure

```
knowledge-base/
├── artifacts/     # Published, finalized content
├── library/      # External references with commentary
├── notes/        # Working documents by project
│   ├── dao-primitives/
│   └── rpp/
├── tags/         # Tag definitions and terminology
├── templates/    # Document templates and schemas
│   └── types/   # Metadata type definitions
└── drafts/      # Work-in-progress documents
```

## How It Works

### Document Organization
- Uses metadata (YAML frontmatter) instead of deep folder structures
- Links documents through wiki-style references `[[document-name]]`
- Organizes content through tags defined in `tags/`
- Creates relationships through bidirectional links

### Document Types

We use a structured type system to organize different kinds of content:

1. **Notes** (`type: note`)
   - Working documents and documentation
   - Project-specific content
   - Research and analysis

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
  - relevant_tag
  - another_tag
# Additional fields based on type
---
```

## Technical Stack

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
- Create new documents using templates
- Follow the content workflow
- Use appropriate metadata schemas

## Content Workflow

1. **Creating Content**
   - Start in `drafts/`
   - Use appropriate template
   - Fill in required metadata
   - Add content and links

2. **Development**
   - Move to `notes/` when active
   - Organize in project folders
   - Link to related content
   - Add tags and references

3. **Publication**
   - Move to `artifacts/` when complete
   - Update metadata
   - Ensure all links work
   - Tag and categorize properly

## Templating System

### Available Templates

1. **Basic Templates**
   - Note Template
   - Link Template
   - Pattern Template
   - Tag Page Template
   - Folder Note Template

2. **Type Definitions**
Located in `templates/types/`:
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
2. Open an issue
3. Join community discussions