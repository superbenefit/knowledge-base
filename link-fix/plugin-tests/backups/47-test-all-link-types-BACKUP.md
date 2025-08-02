# Test File: All Link Types

**Purpose**: Test Obsidian Links plugin behavior on all link patterns  
**Created**: 2025-08-01  
**Instructions**: Run plugin on this file and document results

---

## Basic Wikilinks

### Standard Wikilinks
1. Basic: [[notes/dao-primitives/dao-primitives]]
2. With spaces: [[notes/general-circle/general circle]]
3. Root level: [[README]]
4. Deep path: [[notes/dao-primitives/implementation/guides/governance/implementation-guide-operational-governance]]

### Wikilinks with Aliases
1. Simple alias: [[notes/dao-primitives/dao-primitives|DAO Primitives]]
2. Long alias: [[artifacts/guides/dao-primitives-framework/dao-primitives-framework|The Complete DAO Primitives Framework Guide]]
3. Special chars in alias: [[tags/governance|Governance (Community & Operational)]]

### Wikilinks with Fragments
1. Heading reference: [[artifacts/patterns/community-governance#Implementation]]
2. With alias: [[notes/dao-primitives/dao-primitives#Overview|See Overview Section]]
3. Multiple levels: [[artifacts/guides/dao-primitives-framework/group-facilitation#Step-2-Design#Subsection]]

### Wikilinks with Block References
1. Block reference: [[notes/dao-primitives/dao-primitives^block-123]]
2. With alias: [[artifacts/patterns/community-governance^important-note|Important Note]]

### Problematic Wikilinks
1. Leading slash: [[/artifacts/patterns/community-governance]]
2. Leading slash with fragment: [[/artifacts/guides/dao-primitives-framework/dao-primitives-framework#Overview]]
3. Leading slash with alias: [[/tags/governance|Governance]]

---

## Embedded Content

### Basic Embeds
1. Note embed: ![[notes/dao-primitives/key-concepts]]
2. Image embed: ![[attachments/dao-structure.png]]
3. PDF embed: ![[attachments/whitepaper.pdf]]

### Embeds with References
1. Heading embed: ![[artifacts/patterns/community-governance#Implementation]]
2. Block embed: ![[notes/dao-primitives/dao-primitives^block-123]]
3. Image with size: ![[attachments/diagram.png|300]]
4. Image with dimensions: ![[attachments/chart.png|300x200]]

---

## Markdown Links

### Internal Links (no extension)
1. Basic: [DAO Primitives](notes/dao-primitives/dao-primitives)
2. Root level: [Read Me](README)
3. With spaces: [General Circle](notes/general-circle/general circle)

### Internal Links (with .md)
1. Basic: [DAO Primitives](notes/dao-primitives/dao-primitives.md)
2. Root level: [Read Me](README.md)
3. Deep path: [Implementation Guide](notes/dao-primitives/implementation/guides/governance/implementation-guide-operational-governance.md)

### Fragment Links
1. Page with heading: [See Implementation](artifacts/patterns/community-governance.md#Implementation)
2. Same page heading: [Jump to Overview](#overview)
3. Complex fragment: [Detailed Section](artifacts/guides/guide.md#section-1#subsection-a)

### Relative Path Links
1. Parent directory: [Up One Level](../README.md)
2. Sibling file: [Related Pattern](./community-governance.md)
3. Deep relative: [Deep Reference](../../tags/governance.md)
4. Multiple parents: [Root from Deep](../../../../README.md)

### Problematic Markdown Links
1. Leading slash: [Patterns](/artifacts/patterns/patterns.md)
2. Leading slash no extension: [Patterns](/artifacts/patterns/patterns)
3. With fragment and slash: [Section](/artifacts/guides/guide.md#section)

### External Links
1. HTTPS: [SuperBenefit Website](https://superbenefit.org)
2. HTTP: [Example Site](http://example.com)
3. With fragment: [MDN Docs](https://developer.mozilla.org/en-US/docs/Web#reference)
4. With query: [Search Results](https://google.com/search?q=dao+primitives)

---

## Mixed and Complex Patterns

### Combined References
1. Wiki to markdown mix: [[notes/note1]] and [Note 2](notes/note2.md)
2. Embed after link: See [[notes/guide]] and ![[notes/guide#summary]]
3. Multiple in one line: Check [[doc1]], [doc2](doc2.md), and ![[doc3]]

### Links in Lists
- [[notes/item1]]
- [Item 2](notes/item2.md)
- ![[notes/item3]]
- [External](https://example.com)

### Links in Tables
| Wikilink | Markdown | Embed |
|----------|----------|--------|
| [[cell1]] | [cell2](cell2.md) | ![[cell3]] |
| [[/cell4]] | [cell5](../cell5.md) | ![[cell6#section]] |

### Links in Blockquotes
> This is a quote with [[wikilink]] and [markdown](link.md) and ![[embed]].
> 
> Multiple lines with [[different]] [types](types.md) of links.

---

## Special Cases

### Query Parameters
1. Internal with query: [Search](search.md?query=test)
2. External with query: [Google Search](https://google.com?q=test&lang=en)

### URL Encoded Paths
1. With spaces: [File Name](file%20name.md)
2. Special chars: [Special#File](special%23file.md)

### Very Long Paths
1. Deeply nested: [[notes/very/deeply/nested/directory/structure/with/many/levels/file]]
2. Long filename: [[this-is-a-very-long-filename-that-might-cause-issues-with-some-systems-and-tools]]

---

## Expected Results

After running the Obsidian Links plugin, we expect:
- All wikilinks → markdown format with .md extension
- All paths to use absolute paths from vault root
- External links unchanged
- Embeds converted appropriately (or documented if not supported)

**Document actual results below:**

---

## Actual Results (To Be Filled)

_Run the plugin and document what actually happens to each link type..._