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

*   **[Artifacts](/artifacts/readme.md)**: Published, refined content that represents our collective understanding. Contains finished research, documentation, and community-validated knowledge.
*   **[Notes](docs/readme.md)**: Working documents organized by project. This is where active development happens and where ideas mature through collaboration.
*   **[Drafts](/drafts/readme.md)**: Private workspace for developing thoughts and initial research. This is where new ideas begin before they're ready for wider collaboration.
*   **[Links](data/links/readme.md)**: External references and resources, enriched with community commentary and analysis.
*   **[Tags](data/concepts/readme.md)**: Our shared vocabulary and conceptual framework, including term definitions and relationships.
*   **[Tools](/tools/readme.md)**: Knowledge management utilities, including:
    *   `templates/`: Standard document structures
    *   `types/`: Metadata schemas and definitions
*   **Attachments**: Media files, images, diagrams, and other supporting content used throughout the knowledge base.

### Documentation

Each directory contains two types of documentation to serve different audiences:

*   **README Files (e.g., `artifacts/readme.md`):** These files are primarily for contributors and knowledge managers working directly with the repository. They provide information on the directory's purpose, how to contribute, and any specific guidelines for that area. They are "inner-facing" documentation.
*   **Folder Notes (e.g., `artifacts/artifacts.md`):** These files are equivalent to index files and are published to the SuperBenefit Knowledge Garden to be displayed publicly. They provide an overview of the directory's content and guide readers on how to use and get the most value from the resources within. Folder notes always have the *same name as their parent directory* (e.g., the folder note for `/artifacts` is `/artifacts/artifacts.md`). They are "outward-facing" documentation.

---

## Contributing

We welcome contributions to the SuperBenefit Knowledge Base! Please see [CONTRIBUTING.md](/CONTRIBUTING.md) for detailed guidelines on how to contribute.

Here are some ways you can contribute:

*   **Create new content:** Share your knowledge and insights by creating new notes and artifacts.
*   **Improve existing content:** Help us improve the quality and accuracy of our existing content by clarifying explanations, fixing errors, and adding new information.
*   **Connect ideas:** Create links between related notes and artifacts to build a rich and interconnected web of knowledge.
*   **Help others:** Welcome new contributors and help them find their way around the knowledge base.

## ⚠️⚠️⚠️ CRITICAL: Link Strategy - MUST BE FOLLOWED AT ALL TIMES ⚠️⚠️⚠️

This vault uses **ABSOLUTE MARKDOWN LINKS FROM VAULT ROOT** for ALL internal links. This is **NON-NEGOTIABLE**.

### **REQUIRED FORMAT - The ONLY Acceptable Format**

**Markdown links with absolute paths from vault root (NO leading slash):**

```markdown
[DAOs](tags/daos.md)                                                    ✅ CORRECT
[Framework](artifacts/primitives-framework/primitives-framework-concepts.md)  ✅ CORRECT
[Cells](tags/cells.md)                                                  ✅ CORRECT
[Tools](tools/readme.md)                                                ✅ CORRECT
```

### **FORBIDDEN FORMATS - NEVER USE THESE**

```markdown
[[daos]]                           ❌ WIKILINK - ABSOLUTELY FORBIDDEN
[[tags/daos]]                      ❌ WIKILINK WITH PATH - ABSOLUTELY FORBIDDEN
[DAOs](../../tags/daos.md)         ❌ RELATIVE PATH - ABSOLUTELY FORBIDDEN
[DAOs](/tags/daos.md)              ❌ LEADING SLASH - ABSOLUTELY FORBIDDEN
```

### **THE THREE IMMUTABLE RULES**

1. **MARKDOWN LINKS ONLY**: Always use `[text](path)` syntax
2. **ABSOLUTE PATHS ONLY**: Paths MUST start from vault root - `tags/file.md` or `artifacts/dir/file.md`
3. **NO LEADING SLASHES**: Paths MUST NOT begin with `/`

**WHY**: This strategy ensures links work both in Obsidian AND when content is published. Violations break published content. **NO EXCEPTIONS**.

---

### Publishing & Syndication

Select content from this knowledge base is published in the [SuperBenefit Knowledge Garden](https://github.com/superbenefit/knowledge-garden).

Pages in the knowledge based with their `publish` property set to `true` may be imported to the knowledge garden and updated periodically. We're exploring [Plausibly Permanent Syndication](https://docs.google.com/presentation/d/1fptaoYuqcwp85jsrVrIaSbbQlTzjfu5LVZMdWtWClNo/) as a way to share published content with the universal knowledge commons.

### Building Your Own

This system is designed to be adaptable. You can fork this repository to create your own knowledge garden, customizing the structure and tools to match your needs. Our approach to knowledge management can be adapted to many different contexts while maintaining the core benefits of progressive documentation and networked learning.

---

## Additional Resources

- Directory-specific guides in local readme files
- Technical details in [tools](/tools/readme.md)
- Templates for different content types in [tools/templates](/tools/templates/readme.md)
- Metadata schemas in [tools/types](/tools/types/readme.md)

For support:
1. Check existing documentation
2. Ask in community channels
3. Open GitHub issues

---

This knowledge base grows through community contribution. Every addition enriches our collective understanding by adding not just content, but new connections and perspectives to our shared knowledge.