# AI Agent Instructions

This document provides instructions for AI agents working with the SuperBenefit Knowledge Base.

## Link Format

All internal links must use markdown syntax with absolute paths from the vault root.

**Correct format:**
```markdown
[DAOs](data/concepts/daos.md)
[Patterns](data/resources/patterns/index.md)
[Guide](docs/dao-primitives/guides/implementation-guide.md)
```

**Do not use:**
- Wikilinks (`[[page]]` or `[[path/to/page]]`) — not supported by publishing
- Relative paths (`../../data/concepts/file.md`) — break when files move
- Leading slashes (`/data/concepts/file.md`) — incompatible with static hosting

When creating or editing content, convert any non-compliant links to the correct format.

---

## Knowledge Base Structure

The knowledge base uses a two-space model:

- **docs/** — Working documents organized by authoring group
- **data/** — Structured records organized by content type

### Type System

FileClass definitions in `tools/types/` define metadata schemas for different content types. The hierarchy:

- **file** — Root type with core fields (title, description, date, publish, permalink, aliases, tags, relatesTo)
- **resource** — Parent for patterns, practices, primitives, protocols, playbooks
- **story** — Parent for articles, studies, guides
- Direct children of file: concept, link, person, group, project, place, gathering, question, index

### Templates

Templates in `tools/templates/layouts/` provide starting structures for each content type. They implement the corresponding type's metadata schema.

---

## Obsidian MCP Tools

If using the Obsidian MCP server, follow these guidelines.

### Avoid Active File Methods

These methods depend on unpredictable UI state and should not be used:
- `get_active_file`
- `update_active_file`
- `append_to_active_file`
- `patch_active_file`
- `delete_active_file`

### Use Explicit Vault Methods

Always specify full file paths:
- `get_vault_file(filename)` — Read files
- `create_vault_file(filename, content)` — Create/overwrite files
- `patch_vault_file(filename, ...)` — Modify specific sections
- `append_to_vault_file(filename, content)` — Add content
- `delete_vault_file(filename)` — Remove files
- `search_vault_simple(query)` — Search content
- `list_vault_files(directory)` — List directory contents

---

## Content Modification Protocol

1. **Present changes first** — Show proposed modifications and explain what will change before making edits.

2. **Request permission** — Don't modify files without explicit consent. Confirm file paths before operations.

3. **Work incrementally** — When making bulk changes, modify one file first to verify success before proceeding.

---

## Error Recovery

If file corruption occurs:
1. Stop operations immediately
2. Document exact state
3. Provide original content for restoration
4. Use `create_vault_file` to restore (never active file methods)

---

## References

- [Type System Documentation](tools/types/readme.md)
- [Templates Overview](tools/templates/readme.md)
- [Metadata Menu Reference](tools/plugin-notes/metadata-menu/index.md)
- [Contributing Guide](CONTRIBUTING.md)
