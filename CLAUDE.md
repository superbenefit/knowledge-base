# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a collaborative knowledge management system built for Obsidian, focused on decentralized governance, Web3 social impact, and community sustainability. It uses a "digital gardening" approach where content evolves from drafts → notes → published artifacts.

## Key Architecture & Concepts

### Content Type Hierarchy
The knowledge base uses an inheritance-based type system defined in `tools/types/fileClasses/`:
- `note` (base type) - All content inherits from this
- `artifact` (extends note) - Published, refined content
- `pattern`, `playbook`, `study` (extend artifact) - Specialized content types
- `link` - External resources with commentary
- `tag` - Lexicon entries defining shared vocabulary
- `index` - Directory overview pages

### Directory Structure & Purpose
- `/artifacts/` - Published content representing collective understanding
- `/notes/` - Active workspace for works in progress, organized by project
- `/drafts/` - Private workspace for developing initial ideas
- `/links/` - Curated external resources
- `/tags/` - Shared vocabulary (the "Lexicon")
- `/tools/` - Templates, metadata schemas, and workflows
- `/attachments/` - Media files and supporting documents

### Metadata System
Every document uses YAML frontmatter with fields defined in the type schemas:
- `title` - Document title
- `description` - Brief summary
- `publish` - Boolean for public knowledge garden syndication
- `harvester`/`curator` - Attribution fields
- `tags` - Cross-references to lexicon entries

### Template Usage
Templates in `tools/templates/` use Templater syntax (`<% %>`) and include:
- Pre-configured frontmatter matching type schemas
- Content structure with section headers
- Helper comments (`%% comment %%`) for guidance

## Working with Content

### Creating New Content
1. Use appropriate template from `tools/templates/`
2. Place in correct directory based on content stage (drafts → notes → artifacts)
3. Follow metadata schema for the content type
4. Use wiki-links `[[]]` to connect related content
5. Add relevant tags from the lexicon

### Content Evolution Path
1. **Draft Stage**: Personal research in `/drafts/`
2. **Note Stage**: Collaborative work in `/notes/[project]/`
3. **Artifact Stage**: Published content in `/artifacts/[type]/`

### Linking & Navigation
- Use wiki-links `[[page-name]]` for internal connections
- Folder notes (e.g., `/artifacts/artifacts.md`) serve as public-facing indexes
- README files (e.g., `/artifacts/readme.md`) are for contributors

### Publishing to Knowledge Garden
- Set `publish: true` in frontmatter for public syndication
- Content is periodically synced to the public knowledge garden repository

## Important Workflows

### When Adding to the Lexicon (Tags)
1. Create new tag file in `/tags/` using tag template
2. Define the term clearly with examples
3. Link to related concepts
4. Update any documents using this concept

### When Working on Projects
- DAO Primitives: Framework content in `/notes/dao-primitives/`
- ICS (Institute for Community Sustainability): Local sustainability initiatives
- AIFS (All In For Sport): Web3 sports funding
- RPP (Reimagining Power Project): Philanthropic transformation

## Obsidian Integration

This vault is designed for Obsidian with these key features:
- Metadata Menu plugin for type management
- Templater plugin for dynamic templates
- Dataview plugin for content queries
- Internal link auto-update should be enabled

## Development Notes

- This is a markdown-only repository (no build/test/lint commands)
- Version control via Git for collaboration
- No external dependencies or package managers
- Focus on content quality and interconnections over technical complexity