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
1. Task file: [[✅ SUP-108 CXI Tactical Meeting #0]]
2. Project file: [[⬜️ P-106 Theory of change - Map #1]]
3. Priority marker: [[!! Important Document]]
4. Emoji path: [[notes/📁 Archive/old-file]]

### Special Characters in Paths
1. Hash in name: [[Meeting #5 Notes]]
2. Parentheses: [[Guide (Draft Version)]]
3. Square brackets: [[Document [v2]]]
4. Ampersand: [[Research & Development]]
5. Quotes: [[Article "Best Practices"]]

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
These should also not convert: `[[inline-wiki]]` and `[inline-md](link.md)`

---

## Complex Aliases

### Aliases with Special Content
1. Pipe in alias: [[notes/doc|This alias has a | pipe character]]
2. Brackets in alias: [[notes/doc|Alias with [brackets] inside]]
3. Markdown in alias: [[notes/doc|Alias with **bold** and _italic_]]
4. Very long alias: [[notes/doc|This is an extremely long alias that goes on and on and might wrap to multiple lines in some editors and could potentially cause issues with parsing or display in various tools and systems]]

---

## Whitespace Sensitivity

### Various Whitespace Patterns
1. Extra spaces: [[  notes/doc  ]]
2. Tabs: [[	notes/doc	]]
3. Newlines in wikilinks: [[notes/
doc]]
4. Spaces around pipes: [[ notes/doc | Alias ]]

### Trailing Slashes
1. Directory style: [[notes/folder/]]
2. With fragment: [[notes/doc/#section]]
3. Multiple slashes: [[notes//doc]]

---

## Fragment Edge Cases

### Complex Fragment Patterns
1. Multiple hashes: [[doc#section#subsection]]
2. Special chars in fragment: [[doc#section-with-dashes_and_underscores]]
3. Numbers in fragments: [[doc#heading-123]]
4. URL encoded fragments: [[doc#section%20with%20spaces]]

---

## Mixed Language Content

### Non-English Characters
1. Chinese: [[文档/笔记]]
2. Arabic: [[ملاحظات/مستند]]
3. Emoji mix: [[📚 Books/📖 Reading List]]
4. Accented: [[café/résumé]]

---

## Templater Syntax (Should Recognize as Non-Links)

### Template Patterns
1. Date template: <% tp.date.now("YYYY-MM-DD") %>
2. File title: <% tp.file.title %>
3. Complex template:
<%*
const title = tp.file.title;
const links = `[[${title}]] and [text](${title}.md)`;
%>

---

## Link Proximity Tests

### Adjacent Links (No Spaces)
1. [[link1]][[link2]]
2. [text1](url1.md)[text2](url2.md)
3. [[link]]![[embed]]
4. ![[embed1]]![[embed2]]

### Links with Punctuation
1. End of sentence[[.]]
2. In parentheses ([[link]])
3. With comma[[,]] between
4. Question[[?]] mark

---

## Case Sensitivity Tests

### Various Casings
1. All caps: [[NOTES/DOCUMENT]]
2. Mixed case: [[NoTeS/DoCuMeNt]]
3. Different cases same file: [[notes/doc]] vs [[Notes/Doc]] vs [[NOTES/DOC]]

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