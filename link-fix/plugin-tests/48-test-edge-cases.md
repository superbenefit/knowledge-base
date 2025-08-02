# Test File: Edge Cases

**Purpose**: Test plugin behavior on problematic patterns  
**Created**: 2025-08-01  
**Instructions**: Run plugin after resolving any conflicts

---

## Git Merge Conflicts

### Simulated Merge Conflict (RESOLVED)
Note: This shows what a conflict looks like - must be resolved before testing

```
The correct link is:
[Implementation Guide](notes/dao-primitives/implementation/guides/governance/implementation-guide-operational-governance.md)
```

Original conflict pattern:
```
<<<<<<<< HEAD
[Implementation Guide](artifacts/guides/dao-primitives-framework/dao-primitives-implemention/implementation-guide-operational-governance.md)
========
[Implementation Guide](notes/dao-primitives/implementation/guides/governance/implementation-guide-operational-governance.md)
>>>>>>>> branch-name
```

---

## Special Characters in Links

### Unicode and Emoji in Filenames
1. Task file: [✅ SUP-108 CXI Tactical Meeting #0](<%E2%9C%85 SUP-108 CXI Tactical Meeting .md#0>)
2. Project file: [⬜️ P-106 Theory of change - Map #1](<%E2%AC%9C%EF%B8%8F P-106 Theory of change - Map .md#1>)
3. Priority marker: [!! Important Document](<!! Important Document.md>)
4. Emoji path: [notes/📁 Archive/old-file](<notes/%F0%9F%93%81 Archive/old-file.md>)

### Special Characters in Paths
1. Hash in name: [Meeting #5 Notes](<Meeting .md#5 Notes>)
2. Parentheses: [Guide (Draft Version)](<Guide (Draft Version).md>)
3. Square brackets: [[Document [v2]]]
4. Ampersand: [Research & Development](<Research & Development.md>)
5. Quotes: [Article "Best Practices"](<Article %22Best Practices%22.md>)

---

## Code Block Preservation

### Links Inside Code Blocks (Should NOT Convert)

```javascript
// These links should remain unchanged
const wiki = "[[notes/example]]";
const md = "[Example](example.md)";
const embed = "![[image.png]]";
```

```markdown
# Example markdown
This [[wikilink]] and [markdown](link.md) should not convert
![[This embed should also stay as-is]]
```

### Inline Code
These should also not convert: `[inline-wiki](inline-wiki.md)` and `[inline-md](link.md)`

---

## Complex Aliases

### Aliases with Special Content
1. Pipe in alias: [This alias has a | pipe character](notes/doc.md)
2. Brackets in alias: [[notes/doc|Alias with [brackets] inside]]
3. Markdown in alias: [Alias with **bold** and _italic_](notes/doc.md)
4. Very long alias: [This is an extremely long alias that goes on and on and might wrap to multiple lines in some editors and could potentially cause issues with parsing or display in various tools and systems](notes/doc.md)

---

## Whitespace Sensitivity

### Various Whitespace Patterns
1. Extra spaces: [  notes/doc  ](%20%20notes/doc%20%20.md)
2. Tabs: [	notes/doc	](%09notes/doc%09.md)
3. Newlines in wikilinks: [notes/
doc](doc.md)
4. Spaces around pipes: [ Alias ](%20notes/doc%20.md)

### Trailing Slashes
1. Directory style: [notes/folder/](notes/folder/.md)
2. With fragment: [notes/doc/#section](notes/doc/.md#section)
3. Multiple slashes: [notes//doc](notes//doc.md)

---

## Fragment Edge Cases

### Complex Fragment Patterns
1. Multiple hashes: [doc#section#subsection](doc.md#section#subsection)
2. Special chars in fragment: [doc#section-with-dashes_and_underscores](doc.md#section-with-dashes_and_underscores)
3. Numbers in fragments: [doc#heading-123](doc.md#heading-123)
4. URL encoded fragments: [doc#section%20with%20spaces](doc.md#section%2520with%2520spaces)

---

## Mixed Language Content

### Non-English Characters
1. Chinese: [文档/笔记](%E6%96%87%E6%A1%A3/%E7%AC%94%E8%AE%B0.md)
2. Arabic: [ملاحظات/مستند](%D9%85%D9%84%D8%A7%D8%AD%D8%B8%D8%A7%D8%AA/%D9%85%D8%B3%D8%AA%D9%86%D8%AF.md)
3. Emoji mix: [📚 Books/📖 Reading List](<%F0%9F%93%9A Books/%F0%9F%93%96 Reading List.md>)
4. Accented: [café/résumé](caf%C3%A9/r%C3%A9sum%C3%A9.md)

---

## Templater Syntax (Should Recognize as Non-Links)

### Template Patterns
1. Date template: <% tp.date.now("YYYY-MM-DD") %>
2. File title: <% tp.file.title %>
3. Complex template:
<%*
const title = tp.file.title;
const links = `[${title}]($%7Btitle%7D.md) and [text](${title}.md)`;
%>

---

## Link Proximity Tests

### Adjacent Links (No Spaces)
1. [link1](link1.md)[link2](link2.md)
2. [text1](url1.md)[text2](url2.md)
3. [link](link.md)![embed](embed.md)
4. ![embed1](embed1.md)![embed2](embed2.md)

### Links with Punctuation
1. End of sentence[.](.md)
2. In parentheses ([link](link.md))
3. With comma[,](,.md) between
4. Question[?](?.md) mark

---

## Case Sensitivity Tests

### Various Casings
1. All caps: [NOTES/DOCUMENT](NOTES/DOCUMENT.md)
2. Mixed case: [NoTeS/DoCuMeNt](NoTeS/DoCuMeNt.md)
3. Different cases same file: [notes/doc](notes/doc.md) vs [Notes/Doc](Notes/Doc.md) vs [NOTES/DOC](NOTES/DOC.md)

---

## Expected Edge Case Handling

Document how the plugin handles:
- [ ] Special characters
- [ ] Code block preservation
- [ ] Whitespace normalization
- [ ] Complex aliases
- [ ] Template syntax
- [ ] Case sensitivity

---

## Actual Results (To Be Filled)

_Document edge case behavior here..._