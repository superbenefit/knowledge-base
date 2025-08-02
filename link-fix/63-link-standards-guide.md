# Link Standards Guide

**Created**: 2025-08-01  
**Purpose**: Document agreed standards for all link types in the knowledge base  
**File**: 63-link-standards-guide.md

## Overview

This guide establishes the canonical link formats for the SuperBenefit Knowledge Base. These standards ensure compatibility with both Obsidian and the publishing pipeline (Enveloppe → GitHub → Quartz).

## Link Format Standards

### 1. Internal Links - Markdown Files

**Standard Format**: `[descriptive text](path/to/file.md)`

**Requirements**:
- Always use forward slashes (`/`) as path separators
- Always include `.md` extension
- Use paths relative to vault root (no leading slash)
- Preserve spaces in filenames (URL encoding not required in Obsidian)

**Examples**:
```markdown
✅ Correct:
[DAO Primitives Overview](notes/DAO Primitives/overview.md)
[Governance Pattern](artifacts/patterns/governance-pattern.md)
[See the index](index.md)

❌ Incorrect:
[DAO Primitives Overview](/notes/DAO Primitives/overview.md)  // No leading slash
[Governance Pattern](artifacts/patterns/governance-pattern)     // Missing .md
[[notes/DAO Primitives/overview]]                             // Wikilink format
```

### 2. Fragment Links - Headings

**Standard Format**: `[text](path/to/file.md#heading-name)`

**Requirements**:
- Heading fragment follows standard markdown anchor rules
- Lowercase, hyphenated, special characters removed
- Obsidian auto-generates these anchors
- Works in both Obsidian and published sites

**Examples**:
```markdown
✅ Correct:
[Configuration Details](tools/guide.md#configuration-details)
[See Phase 2](notes/project.md#phase-2-implementation)
[Internal heading](#overview)  // Same file

❌ Incorrect:
[Configuration](tools/guide#Configuration Details)  // Spaces not converted
[See Phase 2](notes/project.md#Phase 2)           // Missing hyphenation
```

### 3. Block References

**Standard Format**: Keep Obsidian format for now

**Note**: Block references (`^block-id`) are Obsidian-specific and will need handling for publishing.

**Current Approach**:
```markdown
[Referenced text](file.md#^block-id)  // Works in Obsidian only
```

**Future Consideration**: Convert to heading references for publishing or implement custom processing.

### 4. External Links

**Standard Format**: `[text](https://example.com)`

**Requirements**:
- Always include protocol (`https://` or `http://`)
- No modifications needed for publishing
- Consider `target="_blank"` for user experience (handled by Quartz)

**Examples**:
```markdown
✅ Correct:
[Anthropic](https://anthropic.com)
[Research Paper](https://arxiv.org/abs/2024.12345)

❌ Incorrect:
[Anthropic](anthropic.com)         // Missing protocol
[Research Paper](www.arxiv.org)    // Missing protocol
```

### 5. Embedded Content

**Note**: Embedded content requires special handling as `![[]]` is Obsidian-specific.

#### Images

**For Obsidian**: `![[image.png]]` or `![alt text](path/to/image.png)`  
**For Publishing**: Prefer markdown format with path

**Recommended**:
```markdown
![Governance diagram](assets/images/governance-diagram.png)
```

#### Other Files

**For Obsidian**: `![[document.pdf]]`  
**For Publishing**: Convert to links

**Recommended**:
```markdown
[Download the PDF](assets/documents/document.pdf)
```

### 6. Relative Paths

**Standard**: Convert all relative paths to absolute paths from vault root

**Conversion Required**:
```markdown
❌ Avoid:
[Sibling file](../other-folder/file.md)
[Parent file](../../file.md)
[Current folder](./file.md)

✅ Convert to:
[Sibling file](notes/other-folder/file.md)
[Parent file](file.md)
[Current folder](notes/current/file.md)
```

## Special Cases

### 1. Index Files

When linking to folder index files:

```markdown
Option 1: [Artifacts](artifacts/index.md)     // Explicit
Option 2: [Artifacts](artifacts/)             // May need publishing config
```

**Recommendation**: Use explicit `index.md` for clarity.

### 2. Non-Markdown Files

For PDFs, images, and other assets:

```markdown
[Download PDF](assets/documents/whitepaper.pdf)
![Logo](assets/images/logo.png)
[Excel Data](assets/data/analysis.xlsx)
```

### 3. Anchors with Special Characters

Obsidian and publishing platforms may handle these differently:

```markdown
Original heading: "Phase 2.3: Enhancement & Testing"
Anchor: #phase-23-enhancement--testing

Original heading: "What's New?"  
Anchor: #whats-new
```

## Publishing Compatibility

### Quartz-Specific Considerations

1. **Wikilinks**: Must be converted to markdown links
2. **Path Resolution**: Quartz handles paths from content root
3. **Extensions**: `.md` extensions required for internal links
4. **Fragments**: Standard HTML anchor format supported

### Enveloppe Processing

The Enveloppe plugin handles:
- Conversion of Obsidian-specific syntax
- Path adjustments for GitHub repository structure
- Asset copying and path updates

## Migration Checklist

When converting links, ensure:

- [ ] All wikilinks converted to markdown format
- [ ] All internal links include `.md` extension
- [ ] No leading slashes in paths
- [ ] Relative paths converted to absolute
- [ ] Fragment identifiers properly formatted
- [ ] External links include protocol
- [ ] Embedded content handled appropriately
- [ ] Special characters in paths addressed

## Validation

Use these patterns to validate links:

### Regex Patterns

```javascript
// Valid internal link
/\[([^\]]+)\]\(([^)]+\.md(?:#[^)]+)?)\)/

// Valid external link
/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/

// Fragment link
/\[([^\]]+)\]\(([^)]+\.md)#([^)]+)\)/

// Find remaining wikilinks
/\[\[([^\]]+)\]\]/
```

## Best Practices

### 1. Descriptive Link Text
```markdown
❌ Poor: [Click here](notes/guide.md)
✅ Good: [Review the implementation guide](notes/guide.md)
```

### 2. Consistent Path Style
```markdown
❌ Mixed: [File](Notes/Guide.md) vs [Other](notes/other.md)
✅ Consistent: [File](notes/guide.md) and [Other](notes/other.md)
```

### 3. Meaningful Anchors
```markdown
❌ Vague: [See details](#details)
✅ Specific: [See configuration details](#configuration-details)
```

### 4. Maintenance-Friendly Paths
```markdown
❌ Brittle: [Deep link](notes/2024/01/15/specific-note.md)
✅ Stable: [Topic overview](notes/topics/topic-overview.md)
```

## Future Considerations

### Planned Improvements

1. **Automated Validation**: Scripts to check link format compliance
2. **Publishing Pipeline**: Automatic format adjustments if needed
3. **Block Reference Solution**: Strategy for publishing compatibility
4. **Link Checker Integration**: Automated broken link detection

### Version Control

This guide version: **1.0**  
Last updated: **2025-08-01**  
Review schedule: **Quarterly**

---

*This guide should be referenced when creating new content and during link conversion processes. Updates require team consensus.*