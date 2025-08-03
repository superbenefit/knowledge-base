# Phase 4 - Remaining Link Issues

**Generated**: 2025-08-02 02:00:00  
**Status**: In Progress

## Link Patterns Requiring Attention

After running Link Converter plugin on `/artifacts/`, the following patterns need manual attention:

### 1. Angle Bracket Links with Anchor Spaces
**Pattern**: `[text](<path#anchor with spaces>)`  
**Example**: `[Community Governance](<tags/governance.md#Community Governance>)`  
**Fix Needed**: 
- Remove angle brackets
- Add leading slash
- Replace spaces in anchors with hyphens
- Result: `[Community Governance](/tags/governance.md#community-governance)`

### 2. Relative Paths (Missing Leading Slash)
**Pattern**: `[text](path/to/file.md)` where path doesn't start with `/`  
**Example**: `[DAO primitives](artifacts/guides/dao-primitives.md)`  
**Fix Needed**: 
- Add leading `/`
- Result: `[DAO primitives](/artifacts/guides/dao-primitives.md)`

### 3. Obsidian URI Links
**Pattern**: `obsidian://open?vault=...`  
**Example**: `obsidian://open?vault=sb-knowledge-base&file=artifacts%2Fguides%2F...`  
**Fix Needed**: 
- Convert to standard markdown link
- URL decode the path
- Add `.md` extension

### 4. Self-referential Links
**Pattern**: Links to the same file they're in  
**Example**: In `implementation-guide-operational-governance.md`:  
`[Implementation-guide-operational-governance](artifacts/.../implementation-guide-operational-governance.md)`  
**Fix Needed**: Consider if these should be removed or converted to anchors

## Search Patterns for Finding Issues

Use these regex patterns in VS Code or search tools:

1. **Angle brackets**: `\]\(<[^>]+>\)`
2. **Missing leading slash**: `\]\((?!\/|http|#|mailto:)[a-zA-Z][^)]+\.md`
3. **Obsidian URIs**: `obsidian:\/\/open\?[^\s\]]+`
4. **Spaces in anchors**: `#[^)\]]*\s[^)\]]*\)`

## Files Known to Have Issues

Based on initial inspection:
- `/artifacts/guides/dao-primitives-framework/dao-primitives-implemention/implementation-guide-operational-governance.md`
- `/artifacts/guides/dao-primitives-framework/dao-primitives-implemention/implementation-guide-multi-stakeholder-governance.md`
- `/artifacts/guides/dao-primitives-framework/dao-primitives-implemention/implementation-guide-community-governance.md`
- (More to be identified through systematic search)

## Recommended Approach

1. **Run systematic search** across `/artifacts/` for each pattern
2. **Process files individually** using Link Converter's "All Links to Absolute Path"
3. **Manual cleanup** for angle brackets and anchor spaces
4. **Validate** after each batch of fixes
