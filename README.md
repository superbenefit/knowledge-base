# SuperBenefit Knowledge Base

A local-first markdown vault for collaborative knowledge management and collective sensemaking. This repository serves both as a collaborative workspace and a public knowledge garden, enabling us to develop and share knowledge in ways that respect both individual thought processes and collective understanding.

## Repository Overview

This repo is a collection of [Markdown](https://www.markdownguide.org/) files, organized using [Obsidian](https://obsidian.md/) and published with [Quartz](https://quartz.jzhao.xyz/). The primary markdown syntax used is [CommonMark](https://commonmark.org/), with some added flavor for [Obsidian](https://help.obsidian.md/Editing+and+formatting/Obsidian+Flavored+Markdown) and [GitHub](https://help.obsidian.md/Editing+and+formatting/Obsidian+Flavored+Markdown).

Our [public knowledge garden](https://knowledge.superbenefit.org) shares curated artifacts and insights from this work, while this repository contains the complete workspace where that knowledge develops. This dual nature - private workspace and public garden - enables us to balance open sharing with the messy reality of knowledge development.

### Why This Design?

Knowledge gardens are fundamentally different from traditional documentation systems. Rather than enforcing rigid structures or final forms, we've built a system that lets knowledge evolve naturally while maintaining clear paths for development and sharing.

Four key principles shape how we create and share knowledge:

- **Local-First**: All content lives as markdown files on contributors' devices, syncing through [git](https://www.atlassian.com/git/tutorials/what-is-git). This preserves individual autonomy while enabling collaboration. By keeping content in simple text files under personal control, we enable both independent thought and collective development.

- **Networked Knowledge**: Rather than rigid hierarchies, we connect information through wiki-links and metadata. Related ideas find each other naturally through these associations. This organic structure lets us discover relationships between concepts that might be hidden in traditional organizational schemes.

- **Progressive Documentation**: Knowledge evolves from rough drafts to collaborative development to polished artifacts. Our directory structure reflects this natural progression, providing appropriate spaces for each stage of development while maintaining clear paths between them.

- **Collective Intelligence**: By balancing individual work with group development, we build shared understanding while preserving diverse perspectives. Our system supports both deep solo work and collaborative refinement, using shared language to bridge individual insights and collective knowledge.

---

## Repository Structure 

Knowledge typically develops through natural stages: from individual drafts, through project-specific collaborative work, into published artifacts. Throughout this progression, ideas are connected by our shared vocabulary and enriched by references to external knowledge. Rather than enforce strict organization, we let structure emerge through:
- Wiki-style document links 
- Consistent metadata schemas
- Topic tags and relationships
- Project-specific organization

Each directory serves a specific purpose in our knowledge ecosystem:

### Core Content Areas

- **artifacts/** - Published, refined content that represents our collective understanding. Contains finished research, documentation, and community-validated knowledge.

- **drafts/** - Private workspace for developing thoughts and initial research. This is where new ideas begin before they're ready for wider collaboration.

- **notes/** - Working documents organized by project. This is where active development happens and where ideas mature through collaboration.

### Support and Organization

- **attachments/** - Media files, images, diagrams, and other supporting content used throughout the knowledge base.

- **links/** - External references and resources, enriched with community commentary and analysis.

- **tags/** - Our shared vocabulary and conceptual framework, including term definitions and relationships.

- **tools/** - Knowledge management utilities, including:
  - templates/ - Standard document structures
  - types/ - Metadata schemas and definitions

Each directory's `readme.md` provides additional guidance about its specific role and usage guidelines.

### Publishing & Syndication

Select content from this knowledge base is published in the [SuperBenefit Knowledge Garden](https://github.com/superbenefit/knowledge-garden). 

Pages in the knowledge based with their `publish` property set to `true` may be imported to the knowledge garden and updated periodically. We're exploring [Plausibly Permanent Syndication](https://docs.google.com/presentation/d/1fptaoYuqcwp85jsrVrIaSbbQlTzjfu5LVZMdWtWClNo/) as a way to share published content with the universal knowledge commons.

#### 

## Working with the Knowledge Base

The repository supports several ways of discovering and connecting knowledge:

- **[Graph](https://help.obsidian.md/Plugins/Graph+view)**: Discover content relationships visually
- **[Canvas](https://help.obsidian.md/Plugins/Canvas)**: Create and share canvases with your team
- **[Tags](https://help.obsidian.md/Editing+and+formatting/Tags)**: Explore relationships between concepts and topics
- **[Search](https://help.obsidian.md/Plugins/Search)**: Full text lookups and metadata queries
- **[Explorer](https://help.obsidian.md/Plugins/File+explorer)**: View the file tree without relationships

### Browsing Published Knowledge

Our [public knowledge garden](https://knowledge.superbenefit.org) offers several entry points to our work. You can explore curated content on our website, follow concept relationships through [topic maps](tags/tags.md), or dive into specific project documentation in [artifacts](artifacts/artifacts.md). This layered access helps you find relevant information whether you're looking for quick insights or deep understanding.

### Contributing to Projects

Contributing to the knowledge base starts with developing ideas in your private drafts. From there, you can collaborate in project workspaces and help refine content for publication. See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed workflows that will help you participate effectively.

### Building Your Own

This system is designed to be adaptable. You can fork this repository to create your own knowledge garden, customizing the structure and tools to match your needs. Our approach to knowledge management can be adapted to many different contexts while maintaining the core benefits of progressive documentation and networked learning.

## Additional Resources

- Project overviews in [index.md](index.md)
- Directory-specific guides in local readme files
- Technical details in [tools](tools/readme.md)
- Templates for different content types in [tools/templates](tools/templates/readme.md)
- Metadata schemas in [tools/types](tools/types/readme.md)

For support:
1. Check existing documentation
2. Ask in community channels
3. Open GitHub issues

---

This knowledge base grows through community contribution. Every addition enriches our collective understanding by adding not just content, but new connections and perspectives to our shared knowledge.