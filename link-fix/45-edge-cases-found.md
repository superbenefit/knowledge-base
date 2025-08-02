# Edge Cases Found

**Generated**: 2025-08-01  
**Phase**: 2.3a.4  
**Purpose**: Document special cases and problematic patterns requiring special handling

## Overview

This document catalogs edge cases and special patterns discovered during link analysis that require careful handling during the normalization process.

## Edge Cases by Category

### 1. Git Merge Conflict Markers

**Pattern**: `<<<<<<<` HEAD markers in files  
**Found in**: At least one file (dao-primitives/implementation/guides/governance/implementation-guide-operational-governance.md)  
**Risk**: HIGH - Could break parsing and conversion  
**Handling**: Must resolve conflicts before processing

```
<<<<<<<< HEAD:artifacts/guides/dao-primitives-framework/dao-primitives-implemention/implementation-guide-operational-governance.md
- [Implementation-guide-operational-governance](artifacts/guides/dao-primitives-framework/dao-primitives-implemention/implementation-guide-operational-governance.md) (this guide)
========
- [Implementation-guide-operational-governance](notes/dao-primitives/implementation/guides/governance/implementation-guide-operational-governance.md) (this guide)
>>>>>>>> 6d1abc90f8826bfd258c7e0563cd4536a5f09d86:notes/dao-primitives/implementation/guides/governance/implementation-guide-operational-governance.md
```

### 2. Templater Syntax

**Pattern**: `<% ... %>` blocks  
**Found in**: /tools/templates/ directory extensively  
**Risk**: MEDIUM - May be mistaken for broken links  
**Examples**:
- `<% tp.date.now("YYYY-MM-DD") %>`
- `<% tp.file.title %>`
- Complex JavaScript within templates

**Handling**: 
- Exclude template directories from certain conversions
- Create whitelist of Templater patterns to ignore

### 3. Special Characters in Filenames

**Pattern**: Files with `#`, `!`, special unicode  
**Found in**: Task files, draft documents  
**Examples**:
- `✅ SUP-108 CXI Tactical Meeting #0.md`
- `⬜️ P-106 Theory of change - Map #1.md`
- `!! Open Civic Innovation Framework Whitepaper 1.md`

**Risk**: MEDIUM - May cause URL encoding issues  
**Handling**: Test carefully, may need URL encoding

### 4. Image References with Dimensions

**Pattern**: `![[image.png|300]]`, `![[image.png|300x200]]`  
**Found in**: Various documentation files  
**Risk**: LOW - Plugin may not preserve dimensions  
**Example**: `![[loop.png|350]]`

### 5. Embedded Blocks with IDs

**Pattern**: `![[Quote 2#^6f28bd]]`  
**Found in**: OpenCivics drafts  
**Risk**: MEDIUM - Complex reference that combines embedding, heading, and block ID  
**Handling**: May need manual review

### 6. Internal Fragment-Only Links

**Pattern**: `[text](#heading)` - links within same document  
**Found in**: Long documents with table of contents  
**Risk**: LOW - Should be preserved but verify  
**Example**: `[Quick Wins Catalog](#quick-wins-catalog)`

### 7. Mixed Quote Styles

**Pattern**: Inconsistent use of straight vs curly quotes  
**Found in**: Various files  
**Risk**: LOW - But may affect search/replace operations  
**Handling**: Normalize quotes before processing

### 8. Deeply Nested Relative Paths

**Pattern**: `[text](../../parent/file.md)`  
**Found in**: Deep directory structures  
**Risk**: HIGH - Complex path resolution required  
**Handling**: Calculate absolute paths carefully

### 9. Links in Code Blocks

**Pattern**: Links within triple backticks  
**Found in**: Technical documentation  
**Risk**: MEDIUM - Should NOT be converted  
**Example**:
````
```javascript
// This [[link]] should not be converted
```
````

### 10. Alias Syntax Edge Cases

**Pattern**: Various complex alias patterns  
**Found in**: Throughout vault  
**Examples**:
- `[[path|display with | pipe character]]`
- `[[path|display with [brackets]]]`
- Very long aliases that span lines

## Processing Considerations

### High-Risk Files

1. **Files with merge conflicts** - Resolve before ANY processing
2. **Template files** - Need special handling or exclusion
3. **Files with special characters** - Test individually first

### Validation Requirements

1. **Pre-processing validation**:
   - Check for merge conflict markers
   - Identify Templater syntax
   - Flag files with special characters

2. **Post-processing validation**:
   - Verify code blocks unchanged
   - Confirm fragment links work
   - Test embedded content with parameters

### Recommended Exclusions

Consider excluding these from automated processing:
- `/tools/templates/` - Contains Templater syntax
- `.trash/` - May contain problematic content
- Files with active merge conflicts

## Manual Review Queue

Files requiring manual review before processing:
1. Any file with Git conflict markers
2. Template files with complex Templater logic
3. Files with 5+ different link type patterns
4. Files with special unicode characters in names

## Testing Requirements

Before bulk processing, test with:
1. File containing ALL edge cases
2. Template file with Templater syntax
3. Document with code blocks
4. File with special characters
5. Deeply nested file with relative paths

---

*Document edge cases as discovered during processing*