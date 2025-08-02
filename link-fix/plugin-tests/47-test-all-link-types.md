# Test File: All Link Types

**Purpose**: Test Obsidian Links plugin behavior on all link patterns  
**Created**: 2025-08-01  
**Instructions**: Run plugin on this file and document results

---

## Basic Wikilinks

### Standard Wikilinks
1. Basic: [notes/dao-primitives/dao-primitives](notes/dao-primitives/dao-primitives.md)
2. With spaces: [notes/general-circle/general circle](<notes/general-circle/general circle.md>)
3. Root level: [README](README.md)
4. Deep path: [notes/dao-primitives/implementation/guides/governance/implementation-guide-operational-governance](notes/dao-primitives/implementation/guides/governance/implementation-guide-operational-governance.md)

### Wikilinks with Aliases
1. Simple alias: [DAO Primitives](notes/dao-primitives/dao-primitives.md)
2. Long alias: [The Complete DAO Primitives Framework Guide](artifacts/guides/dao-primitives-framework/dao-primitives-framework.md)
3. Special chars in alias: [Governance (Community & Operational)](tags/governance.md)

### Wikilinks with Fragments
1. Heading reference: [artifacts/patterns/community-governance#Implementation](artifacts/patterns/community-governance.md#Implementation)
2. With alias: [See Overview Section](notes/dao-primitives/dao-primitives.md#Overview)
3. Multiple levels: [artifacts/guides/dao-primitives-framework/group-facilitation#Step-2-Design#Subsection](artifacts/guides/dao-primitives-framework/group-facilitation.md#Step-2-Design#Subsection)

### Wikilinks with Block References
1. Block reference: [notes/dao-primitives/dao-primitives^block-123](notes/dao-primitives/dao-primitives%5Eblock-123.md)
2. With alias: [Important Note](artifacts/patterns/community-governance%5Eimportant-note.md)

### Problematic Wikilinks
1. Leading slash: [/artifacts/patterns/community-governance](/artifacts/patterns/community-governance)
2. Leading slash with fragment: [/artifacts/guides/dao-primitives-framework/dao-primitives-framework#Overview](/artifacts/guides/dao-primitives-framework/dao-primitives-framework#Overview)
3. Leading slash with alias: [Governance](/tags/governance)

---

## Embedded Content

### Basic Embeds
1. Note embed: ![notes/dao-primitives/key-concepts](notes/dao-primitives/key-concepts.md)
2. Image embed: ![attachments/dao-structure.png](attachments/dao-structure.png)
3. PDF embed: ![attachments/whitepaper.pdf](attachments/whitepaper.pdf)

### Embeds with References
1. Heading embed: ![artifacts/patterns/community-governance#Implementation](artifacts/patterns/community-governance.md#Implementation)
2. Block embed: ![notes/dao-primitives/dao-primitives^block-123](notes/dao-primitives/dao-primitives%5Eblock-123.md)
3. Image with size: ![attachments/diagram.png](attachments/diagram.png)
4. Image with dimensions: ![attachments/chart.png](attachments/chart.png)

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
1. Wiki to markdown mix: [notes/note1](notes/note1.md) and [Note 2](notes/note2.md)
2. Embed after link: See [notes/guide](notes/guide.md) and ![notes/guide#summary](notes/guide.md#summary)
3. Multiple in one line: Check [doc1](doc1.md), [doc2](doc2.md), and ![doc3](doc3.md)

### Links in Lists
- [notes/item1](notes/item1.md)
- [Item 2](notes/item2.md)
- ![notes/item3](notes/item3.md)
- [External](https://example.com)

### Links in Tables
| Wikilink | Markdown | Embed |
|----------|----------|--------|
| [cell1](cell1.md) | [cell2](cell2.md) | ![cell3](cell3.md) |
| [/cell4](/cell4) | [cell5](../cell5.md) | ![cell6#section](cell6.md#section) |

### Links in Blockquotes
> This is a quote with [wikilink](wikilink.md) and [markdown](link.md) and ![embed](embed.md).
> 
> Multiple lines with [different](different.md) [types](types.md) of links.

---

## Special Cases

### Query Parameters
1. Internal with query: [Search](search.md?query=test)
2. External with query: [Google Search](https://google.com?q=test&lang=en)

### URL Encoded Paths
1. With spaces: [File Name](file%20name.md)
2. Special chars: [Special#File](special%23file.md)

### Very Long Paths
1. Deeply nested: [notes/very/deeply/nested/directory/structure/with/many/levels/file](notes/very/deeply/nested/directory/structure/with/many/levels/file.md)
2. Long filename: [this-is-a-very-long-filename-that-might-cause-issues-with-some-systems-and-tools](this-is-a-very-long-filename-that-might-cause-issues-with-some-systems-and-tools.md)

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