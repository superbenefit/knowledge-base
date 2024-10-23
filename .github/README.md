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
.
├── drafts/          # Work-in-progress documents
├── notes/           # Active working documents by project
├── artifacts/       # Published, finalized content
├── library/         # External references with commentary
├── tags/           # Tag definitions and terminology
└── templates/       # Document templates and schemas
```

## How It Works

### Document Organization
- Uses metadata (YAML frontmatter) instead of deep folder structures
- Links documents through wiki-style references `[[document-name]]`
- Organizes content through tags defined in `tags/`
- Creates relationships through bidirectional links

### Metadata Structure
```yaml
title: Document title
description: Brief description
publish: true/false
type: [note|link|index|etc]
# Additional fields based on document type
```

### Navigation Methods
1. Graph view (relationships between documents)
2. Tag-based filtering
3. Full-text search
4. Wiki-style links

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

2. **Basic Workflow**
   - Create/edit documents in Obsidian or preferred editor
   - Use templates from `templates/` for new documents
   - Commit changes using git
   - Push to shared repository when ready

3. **Publishing Content**
   - Documents marked `publish: true` will be included in the public garden
   - Build and deploy handled by Quartz
   - Published at [knowledge.superbenefit.org](https://knowledge.superbenefit.org)

## Contributing

1. **New Content**
   - Start in `drafts/`
   - Use appropriate template
   - Include required metadata
   - Add relevant tags and links

2. **Editing Existing Content**
   - Maintain metadata structure
   - Preserve existing links
   - Update relationships as needed
   - Keep document types consistent

3. **Publishing**
   - Move finalized content to appropriate directory
   - Update publish status in metadata
   - Ensure all links and references work
   - Commit and push changes

## Additional Resources

- [Obsidian Documentation](https://help.obsidian.md/)
- [Quartz Documentation](https://quartz.jzhao.xyz/)
- [Git Tutorial](https://www.atlassian.com/git/tutorials)
- [CommonMark Spec](https://commonmark.org/)

For content guidelines and documentation about specific projects or areas, see the [index](index.md).