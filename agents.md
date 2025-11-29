# AI Agent Instructions

This document provides critical instructions for AI agents working with the SuperBenefit Knowledge Base.

## ⚠️⚠️⚠️ MANDATORY LINK STRATEGY - ZERO TOLERANCE FOR VIOLATIONS ⚠️⚠️⚠️

**YOU MUST USE ABSOLUTE MARKDOWN LINKS FROM VAULT ROOT FOR ALL INTERNAL LINKS.**

This is **NOT** negotiable. This is **NOT** optional. This is **NOT** a preference. This is an **ABSOLUTE REQUIREMENT**.

### **THE ONLY ACCEPTABLE LINK FORMAT**

**Markdown links with absolute paths from vault root (NO leading slash):**

```markdown
[DAOs](tags/daos.md)                                                    ✅ USE THIS
[Framework](artifacts/primitives-framework/primitives-framework-concepts.md)  ✅ USE THIS
[Cells](tags/cells.md)                                                  ✅ USE THIS
[Guide](artifacts/primitives-framework/dao-primitives-implementation/implementation-guide-operational-governance.md)  ✅ USE THIS
```

### **ABSOLUTELY FORBIDDEN - NEVER EVER USE THESE**

```markdown
[[daos]]                           ❌ NEVER USE WIKILINKS
[[tags/daos]]                      ❌ NEVER USE WIKILINKS WITH PATHS
[DAOs](../../tags/daos.md)         ❌ NEVER USE RELATIVE PATHS
[DAOs](/tags/daos.md)              ❌ NEVER USE LEADING SLASHES
```

### **THE THREE COMMANDMENTS**

1. **THOU SHALT USE MARKDOWN LINKS ONLY**: `[text](path)` - square brackets with parentheses
2. **THOU SHALT USE ABSOLUTE PATHS ONLY**: Start from vault root - `tags/file.md` or `artifacts/directory/file.md`
3. **THOU SHALT NOT USE LEADING SLASHES**: `tags/file.md` YES - `/tags/file.md` NO

### **WHAT THIS MEANS FOR YOU**

- **When creating ANY link**: Use ONLY `[text](vault-root-path.md)` format
- **When editing ANY file**: Convert ALL non-compliant links to the required format
- **When moving/renaming files**: Update ALL links using the correct absolute path format
- **When you see a wikilink**: Replace it immediately with correct markdown format
- **When you see a relative path**: Replace it immediately with absolute path from vault root
- **When you see a leading slash**: Remove it immediately

### **WHY THIS MATTERS**

Violating this link strategy breaks content when published. There are no exceptions. There is no "it's just one link." There is no "but wikilinks are easier." **Every single link must use the required format.**

**If you are about to create or modify a link, ask yourself:**
1. Is it markdown syntax? `[text](path)` ✅
2. Is the path absolute from vault root? `tags/file.md` ✅
3. Does it have NO leading slash? Check! ✅

**If you answered NO to any question: DO NOT CREATE THAT LINK. Fix it first.**

---

## Tool Usage Guidelines

### Obsidian MCP Tools

#### ⚠️ CRITICAL: Never Use Active File Methods

The following methods are **FORBIDDEN** due to unreliable state management:
- `get_active_file`
- `update_active_file` 
- `append_to_active_file`
- `patch_active_file`
- `delete_active_file`

These methods depend on Obsidian's UI state, which is:
- Not synchronized with the API
- Unpredictable after `show_file_in_obsidian`
- Prone to race conditions
- Likely to corrupt unintended files

#### ✅ Always Use Explicit Vault Methods

Use these methods with full file paths:
- `get_vault_file(filename)` - Read files
- `create_vault_file(filename, content)` - Create/overwrite files
- `patch_vault_file(filename, ...)` - Modify specific sections
- `append_to_vault_file(filename, content)` - Add content
- `delete_vault_file(filename)` - Remove files
- `search_vault_simple(query)` - Search content
- `list_vault_files(directory)` - List directory contents

### File System Operations

When using filesystem MCP:
- Verify allowed directories with `list_allowed_directories()`
- Use explicit paths relative to project root
- Handle the Knowledge Garden at `F:\projects\knowledge-garden`

## Content Modification Protocol

1. **Always present changes as artifacts first**
   - Create artifacts showing proposed modifications
   - Explain what will change and why
   - Wait for explicit approval

2. **Request permission before saving**
   - Never modify files without explicit consent
   - Confirm file paths before operations
   - Keep original content in conversation history

3. **Test incrementally**
   - Modify one file first as a test
   - Verify success before bulk operations
   - Report results after each operation

## Knowledge Base Structure

### Type System (`/tools/types/`)
- FileClass definitions for Metadata Menu plugin
- Inheritance hierarchy: note → reference/artifact → specialized types
- Each type has frontmatter (schema) and body (documentation)

### Templates (`/tools/templates/`)
- Correspond to types
- Use Templater syntax (`<% %>`)
- Implement type metadata schemas

### Plugin Documentation (`/tools/plugin-notes/`)
- Metadata Menu reference
- Dataview documentation
- Templater guides

## Error Recovery

If file corruption occurs:
1. Immediately stop operations
2. Document exact state
3. Provide original content for restoration
4. Use `create_vault_file` to restore (never active methods)

## Capabilities

You have access to:
- Full vault read/write through vault methods
- Semantic search via `search_vault_smart`
- Template execution via `execute_template`
- Web fetch for external resources
- File system access for Knowledge Garden

## Limitations

You cannot:
- Reliably use active file methods
- Guarantee UI state after `show_file_in_obsidian`
- Access Obsidian settings directly
- Modify plugin configurations

## Best Practices

1. **Path Management**
   - Always use full paths from vault root
   - Verify paths with `list_vault_files` before operations
   - Handle both `/` and `\` path separators

2. **Content Safety**
   - Keep conversation backups of original content
   - Present changes for review before implementation
   - Use artifacts for complex modifications

3. **Type System Work**
   - Respect inheritance relationships
   - Maintain frontmatter integrity
   - Document changes clearly

## References

- [Metadata Menu Documentation](/tools/plugin-notes/metadata-menu/)
- [Type System Overview](/tools/types/types.md)
- [Technical Type Documentation](/tools/types/readme.md)
- [Contributing Guide](/CONTRIBUTING.md)