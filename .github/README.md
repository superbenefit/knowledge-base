# SuperBenefit Knowledge Base

A local-first markdown vault for collaborative knowledge management and collective sensemaking.

> [!IMPORTANT]
> Much of this documentation is machine-generated, and may not be all that useful or accurate. 

## Repository Overview

This repo is a collection of [Markdown](https://www.markdownguide.org/) files, organized using [Obsidian](https://obsidian.md/) and published with [Quartz](https://quartz.jzhao.xyz/). The primary markdown syntax used is [CommonMark](https://commonmark.org/), with some added flavor for [Obsidian](https://help.obsidian.md/Editing+and+formatting/Obsidian+Flavored+Markdown) and [GitHub](https://help.obsidian.md/Editing+and+formatting/Obsidian+Flavored+Markdown).

Content from this knowledge base can be uploaded to the [knowledge garden](https://github.com/superbenefit/knowledge-garden), which is published [here](https://knowledge.superbenefit.org).

### Software Tools

This knowledge base uses a local-first workflow - files are stored on your computer and synced using [git](https://www.atlassian.com/git/tutorials/what-is-git). We recommend using [Obsidian](https://obsidian.md/) for exploring and editing the knowledge base, and [VS Code](https://code.visualstudio.com/) for editing plugin files, etc. Both are free, [open-source](https://en.wikipedia.org/wiki/Open_source) and highly customizable.

- **Content**: [CommonMark](https://commonmark.org/) with [Obsidian](https://help.obsidian.md/Editing+and+formatting/Obsidian+Flavored+Markdown) and [GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) markdown extensions
- **Editor**: [Obsidian](https://obsidian.md/) (recommended) or any text editor
- **Version Control**: [git](https://www.atlassian.com/git/tutorials/what-is-git)

#### File Mgmt & Indexing

- [Folder Notes](https://lostpaul.github.io/obsidian-folder-notes/) - index pages for sub-directories
- [Waypoints](https://github.com/IdreesInc/Waypoint) - Lightweight content maps for folder notes

#### Metadata & Lookups:

- [Obsidian Dataview](https://blacksmithgu.github.io/obsidian-dataview/) - Advanced querying
- [Metadata Menu](https://mdelobelle.github.io/metadatamenu/) - Metadata management
- Additional QOL plugins like [Multi-Properties](https://github.com/technohiker/obsidian-multi-properties), [Tag Wrangler](https://github.com/pjeby/tag-wrangler), [Auto Template Trigger](https://github.com/numeroflip/obsidian-auto-template-trigger), etc.

#### Sync & Publish:

- [Obsidian GitHub Sync](https://github.com/kevinmkchin/Obsidian-GitHub-Sync) - Sync changes to/from the GitHub repository
- [Enveloppe](https://enveloppe.github.io/) - Push changes to [Quartz](https://github.com/jackyzha0/quartz) for review & publication

### Why This Design?

This repository is built around several key principles that shape how we create and share knowledge together.

- A **local-first workflow** means your content lives on your device as markdown files. Work offline freely, then use git to sync and collaborate. You maintain control while sharing with the community.

- We structure around **networked knowledge** rather than rigid hierarchies. Follow connections between ideas through flexible metadata and visual graphs, enabling organic discovery of related concepts.

- **Progressive documentation** acknowledges that knowledge evolves. Content flows naturally from drafts to polished artifacts, supported by templates and flexible metadata that grows with your work.

- **Collective intelligence** balances individual and group needs. The system supports both deep solo work and collaborative sense-making, using shared language to build understanding together. This enables true collaborative knowledge building while preserving individual autonomy.

## Using This Knowledge Base

This repository serves as both a collaborative workspace and a public knowledge garden. You can browse the published content online or work with the files directly on your computer.

### Viewing Notes & Artifacts

The easiest way to explore our knowledge garden is through our website at [knowledge.superbenefit.org](https://knowledge.superbenefit.org), which provides search and navigation features.

For local viewing, clone this repository to your computer and open it as a vault in [Obsidian](https://obsidian.md). This gives you full access to all content and features.

### Contributing Knowledge

To contribute, you'll need to use Obsidian to edit files locally and git to sync your changes. If you're new to this process, start with our [contribution guide](CONTRIBUTING.md) which walks through the setup and workflow.

### Re-using This Repository

Simply fork the repository on GitHub if you want to adapt this system for your own use. You can modify the structure, tools, and content to match your needs - starting with updating the README and configuration files.

## Content Structure

We keep organization simple and flexible: add content where it makes sense to you and don't overthink placement. 

Instead of relying on folders, we connect information through wiki-style references (like `[[document-name]]`) and metadata tags. These create a web of bidirectional links that help related content find each other naturally. The structure emerges from these connections rather than from rigid organization.

### File Organization

The most basic type of organization is *file location*. Files are organized in the vault according to the nature of their content:

```
knowledge-base/
├── library/      # External references with commentary
├── tags/         # Tag definitions and terminology
├── artifacts/     # Published, finalized content
├── notes/        # Working documents by project (indexed)
│   ├── primitives/        # DAO Primitives Project
│   └── rpp/        # Reimagining Power project
├── drafts/      # Work-in-progress notes (not indexed)
├── tools/        # Knowledge management utilities
    ├── templates/    # Document templates
    └── types/        # Metadata type definitions
```
Check out the [content index](/index.md) for more information on each directory.

### Navigation

There are a variety of ways to discover knowledge in the vault:

- **[Graph](https://help.obsidian.md/Plugins/Graph+view)**: Discover content relationships visually
- **[Canvas](https://help.obsidian.md/Plugins/Canvas)**: Create and share canvases with your team.
- **[Tags](https://help.obsidian.md/Editing+and+formatting/Tags)**: Explore relationships between concepts and topics
- **[Search](https://help.obsidian.md/Plugins/Search)**: Full text lookups and metadata queries
- **[Explorer](https://help.obsidian.md/Plugins/File+explorer)**: View the file tree without relationships

## Documents

Content is written in Markdown and organized using metadata and internal links. Documents typically progress from drafts to published artifacts based on their development and community input.

### Templates & Metadata Tools

The [tools directory](tools/readme.md) supports consistent document creation and organization:

- [Templates](tools/templates/readme.md) offer common starting points for different types of content
- [Types](tools/types/readme.md) define metadata schemas that help organize and connect related documents

## Additional Resources

- See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines
- Check [index.md](index.md) for content overview
- Look for `readme.md` files inside directories to better understand their contents

## Support

For questions or issues:
1. Check existing documentation
2. Ask in community channels
3. Open an issue if needed
