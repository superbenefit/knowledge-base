# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a collaborative knowledge management system built for Obsidian, focused on decentralized governance, Web3 social impact, and community sustainability. It uses a "digital gardening" approach where content evolves from drafts → notes → published artifacts.

## Key Architecture & Concepts

### Content Type Hierarchy
The knowledge base uses an inheritance-based type system defined in `tools/types/` with Metadata Menu plugin integration:
- `note` (base type) - Foundation with core metadata fields (title, description, publish, harvester, curator)
- `artifact` (extends note) - Published, refined content for collective understanding
- `pattern`, `playbook`, `study` (extend artifact) - Specialized content types with additional fields
- `link` - External resources with commentary and analysis
- `tag` - Lexicon entries defining shared vocabulary and concepts
- `index` - Directory navigation and overview pages

### Type System Implementation
Each content type is defined by:
- **YAML schema** in `tools/types/fileClasses/` with field definitions and validation
- **Corresponding template** in `tools/templates/` with matching frontmatter structure
- **Workflow documentation** in `tools/workflows/` for creation and management processes
- **Directory mapping** that determines which type applies to which folders

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

### Template & Workflow System
Templates in `tools/templates/` use Templater syntax (`<% %>`) and include:
- **One-to-one mapping** between content types and templates
- **Dynamic content generation** from frontmatter and file metadata
- **Pre-configured frontmatter** matching type schemas exactly
- **Structured content scaffolding** with section headers and guidance comments (`%% comment %%`)
- **Integration with workflows** in `tools/workflows/` for standardized processes

### Plugin Dependencies
This system requires specific Obsidian plugins:
- **Metadata Menu** - Type system management and metadata validation
- **Templater** - Dynamic template content generation
- **Dataview** - Content querying and organization
- **Auto-update internal links** should be enabled in Obsidian settings

## Working with Content

### Creating New Content
1. **Choose appropriate template** from `tools/templates/` based on content type
2. **Place in correct directory** based on content stage and type:
   - `/drafts/` → `note` type for early ideas
   - `/notes/[project]/` → `note` type for collaborative work
   - `/artifacts/[type]/` → specialized types (`pattern`, `playbook`, `study`)
3. **Follow metadata schema** exactly as defined in `tools/types/fileClasses/`
4. **Use wiki-links** `[[]]` to connect related content
5. **Add relevant tags** from the lexicon (existing tags in `/tags/`)
6. **Consult workflows** in `tools/workflows/` for process guidance

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

## Technical Implementation

### File System Architecture
- **Markdown-only repository** with no build/test/lint commands
- **Git version control** for collaboration and content history
- **No external dependencies** or package managers required
- **Directory-based type mapping** determines content type automatically

### Obsidian Integration Requirements
- **Metadata Menu plugin** for type system functionality
- **Templater plugin** for dynamic template processing
- **Dataview plugin** for content organization and querying
- **Internal link auto-update** must be enabled in Obsidian settings
- **File path structure** must match type definitions for proper functionality

### Content Management Principles
- **Type inheritance** ensures consistent metadata across content hierarchy
- **Template-schema alignment** maintains structural consistency
- **Workflow integration** standardizes content creation and management processes
- **Focus on content quality** and interconnections over technical complexity