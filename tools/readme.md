# Tools & Resources

This directory contains the building blocks that help maintain consistency and structure in our knowledge garden. Whether you're creating new content, organizing information, or setting up metadata, these tools make it easier to contribute effectively to our shared knowledge base.

## Overview

These tools work together to support our knowledge garden's growth and organization:

- **Templates** help you create new content quickly and consistently
- **Types** ensure that our documents have the right structure and metadata
- **Workflows** provide systematic processes for content creation and management

Together, they form an ecosystem that supports the natural flow of knowledge from initial ideas to polished artifacts.

### Directory Structure

The tools directory is organized into three main areas:

```
tools/
├── templates/
│   └── layouts/   # Document templates (18 templates)
├── types/         # Metadata type definitions (21 types)
└── workflows/     # Structured processes for knowledge management
```

## Core Components

### Templates (`templates/layouts/`)

Templates are starting points for new documents. They provide the right structure and metadata fields based on what kind of content you're creating.

Available templates include:

- `note.md` - Working documents and research notes
- `pattern.md`, `practice.md`, `primitive.md`, `protocol.md`, `playbook.md` - Knowledge resources
- `article.md`, `study.md`, `guide.md` - Narrative content
- `concept.md`, `link.md`, `index.md`, `question.md` - Reference content
- `person.md`, `group.md`, `project.md`, `place.md`, `gathering.md` - Entity profiles

See the [Templates readme](tools/templates/readme.md) for complete documentation.

### Types (`types/`)

Types define the metadata structure for different kinds of documents. They use Metadata Menu's fileClass system with inheritance.

The type hierarchy:

- **file** - Root type with core fields (title, description, date, publish, permalink, aliases, tags, relatesTo)
- **resource** - Parent for patterns, practices, primitives, protocols, playbooks (adds url)
- **story** - Parent for articles, studies, guides (adds author, url)
- Direct file children: concept, link, person, group, project, place, gathering, question, index

See the [Types readme](tools/types/readme.md) for detailed information.

## Workflow Tools

### Workflows (`workflows/`)

**Workflows are currently kinda sloppy**

Workflows are meant to be structured processes for knowledge management tasks that ensure consistency and quality. They're intended to provide step-by-step guides for common activities, integrating tools and best practices. Our workflow collections include:

- **Lexicon Workflows** - Processes for creating and enhancing vocabulary entries
- **Library Workflows** - Methods for evaluating and documenting external resources

Each workflow follows a consistent pattern with research, step-by-step processes, template integration, and systematic review. See the [Workflows Directory](tools/workflows/readme.md) for comprehensive documentation.

## Integration with Obsidian

These tools are designed to work with Obsidian plugins:

- **Metadata Menu**: Manages types and frontmatter fields
- **Templater**: Enhances template capabilities
- **Dataview**: Queries and displays structured information

For detailed plugin configuration, see the plugin documentation in your Obsidian help resources.

## Additional Resources

- Detailed templates documentation
- Complete types documentation
- Contributing guidelines
- [Obsidian documentation](https://help.obsidian.md/)
