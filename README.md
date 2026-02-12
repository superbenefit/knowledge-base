# SuperBenefit Knowledge Base

A local-first markdown vault for collaborative knowledge management and collective sensemaking, built with [Obsidian](https://obsidian.md/) and versioned with [GitHub](https://github.com/).

## What is This?

The SuperBenefit Knowledge Base is a collaborative workspace for storing, connecting, and developing knowledge related to decentralized organizations (DAOs), Web3 governance, and social impact initiatives. We use a "digital gardening" approach, where technical tools support the organic growth of our shared understanding.

Our [public knowledge garden](https://knowledge.superbenefit.org) shares curated artifacts and insights from this work, while this repository contains the complete workspace where that knowledge develops. This dual nature - private workspace and public garden - enables us to balance open sharing with the messy reality of knowledge development.

### Key Features

*   **Local-First Markdown:** All content is stored as plain markdown files, giving you full control over your data.
*   **Obsidian Integration:** Designed for use with [Obsidian](https://obsidian.md/), a powerful knowledge management application.
*   **GitHub Version Control:** Leverages [GitHub](https://github.com/) for version control, collaboration, and backup.
*   **Networked Knowledge:** Connects ideas through wiki-links and metadata, creating a rich and interconnected web of knowledge.
*   **Progressive Documentation:** Supports the evolution of knowledge from rough drafts to polished artifacts.

---

## Getting Started

1.  **Install Obsidian:** [Download Obsidian](https://obsidian.md/download) and familiarize yourself with its basic features.
2.  **Clone This Repository:**
    ```bash
    git clone https://github.com/superbenefit/knowledge-base.git
    cd knowledge-base
    ```
3.  **Open as Obsidian Vault:** In Obsidian, select "Open folder as vault" and choose the cloned `knowledge-base` directory.
4.  **Configure Obsidian (Recommended):**
    *   Enable "Automatically update internal links" in Obsidian settings (inside Options/Files and links).
5.  **Start Exploring:** Browse the repository structure and start exploring the existing content.

### Repository Structure

The knowledge base uses a two-space model that separates working documents from structured records:

*   **[Docs](docs/readme.md)**: Working documents organized by authoring group. This is where active development happens—ideas mature through collaboration before moving to data/.
*   **[Data](data/readme.md)**: Structured records organized by content type:
    *   `concepts/`: Our shared vocabulary and conceptual framework (lexicon)
    *   `links/`: External references and resources
    *   `resources/`: Patterns, practices, primitives, protocols, playbooks
    *   `stories/`: Articles and case studies
    *   `people/`, `groups/`, `projects/`: Entity records
*   **[Drafts](drafts/readme.md)**: Private workspace for developing thoughts and initial research. This is where new ideas begin before they're ready for wider collaboration.
*   **[Tools](tools/readme.md)**: Knowledge management utilities, including:
    *   `templates/`: Standard document structures
    *   `types/`: Metadata schemas and definitions
*   **Attachments**: Media files, images, diagrams, and other supporting content used throughout the knowledge base.

### Documentation

Each directory contains two types of documentation to serve different audiences:

*   **README Files (e.g., `data/resources/readme.md`):** These files are primarily for contributors and knowledge managers working directly with the repository. They provide information on the directory's purpose, how to contribute, and any specific guidelines for that area. They are "inner-facing" documentation.
*   **Index Files (e.g., `data/resources/index.md`):** These files are published to the SuperBenefit Knowledge Garden. They provide an overview of the directory's content and guide readers on how to navigate the resources within. They are "outward-facing" documentation.

---

## Contributing

We welcome contributions to the SuperBenefit Knowledge Base! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines on how to contribute.

Here are some ways you can contribute:

*   **Create new content:** Share your knowledge and insights by creating new notes and artifacts.
*   **Improve existing content:** Help us improve the quality and accuracy of our existing content by clarifying explanations, fixing errors, and adding new information.
*   **Connect ideas:** Create links between related notes and artifacts to build a rich and interconnected web of knowledge.
*   **Help others:** Welcome new contributors and help them find their way around the knowledge base.

## Link Format

This vault uses markdown links with absolute paths from the vault root. This format ensures links work both in Obsidian and when content is published to the knowledge garden.

**Correct format:**
```markdown
[DAOs](data/concepts/daos.md)
[Patterns](data/resources/patterns/index.md)
```

**Do not use:**
- Wikilinks (`[[page]]`) — not supported by publishing
- Relative paths (`../../data/concepts/file.md`) — break when files move
- Leading slashes (`/data/concepts/file.md`) — incompatible with static hosting

---

### Publishing & Syndication

Select content from this knowledge base is published in the [SuperBenefit Knowledge Garden](https://github.com/superbenefit/knowledge-garden).

Pages in the knowledge based with their `publish` property set to `true` may be imported to the knowledge garden and updated periodically. We're exploring [Plausibly Permanent Syndication](https://docs.google.com/presentation/d/1fptaoYuqcwp85jsrVrIaSbbQlTzjfu5LVZMdWtWClNo/) as a way to share published content with the universal knowledge commons.

### Building Your Own

This system is designed to be adaptable. You can fork this repository to create your own knowledge garden, customizing the structure and tools to match your needs. Our approach to knowledge management can be adapted to many different contexts while maintaining the core benefits of progressive documentation and networked learning.

---

## Additional Resources

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