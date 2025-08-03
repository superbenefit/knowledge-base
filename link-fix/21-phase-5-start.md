# Phase 5 Start: Reference Content Conversion

**Generated**: 2025-08-02  
**Phase**: 5 - Plugin Conversion - Reference Content  
**Priority**: MEDIUM-HIGH (lexicon and entry points)

## Scope Overview

Phase 5 focuses on converting reference content that provides structure and navigation for the knowledge base:

### 5.1 Tags Directory (86 files, 819 links)
- **Location**: `/tags/`
- **Content**: Lexicon definitions, taxonomy terms
- **Priority**: MEDIUM - Important for knowledge organization
- **Approach**: Plugin conversion + validation

### 5.2 Root Files (3 files, 35 links)  
- **Files**: 
  - `README.md` (26 links) - Main entry point
  - `index.md` (6 links) - Knowledge base index
  - `CONTRIBUTING.md` (3 links) - Contributor guide
- **Priority**: HIGH - Critical entry points to vault
- **Approach**: Manual conversion with extra care

## Methodology

### For Tags Directory
1. **Scan current state** with T04-Find-Problem-Links
2. **Plugin conversion** using Link Converter on `/tags/` folder
3. **Edge case cleanup** if needed with templates
4. **Validation** that tag references still work correctly

### For Root Files  
1. **Manual review** of each file's links
2. **Careful conversion** (these are entry points)
3. **Verification** that critical navigation works
4. **Publishing test** consideration

## Expected Challenges

1. **Tag References**: Ensure internal tag references remain functional
2. **Root File Links**: Critical navigation paths must work perfectly  
3. **Cross-references**: Links between tags and other content
4. **Publishing**: Root files especially important for site navigation

## Tools Available

- ✅ T04-Find-Problem-Links (updated with claude.ai detection)
- ✅ T04-Fix-Artifact-Links (individual file processing)
- ✅ T04-Fix-All-Remaining-Artifacts (batch processing)
- ✅ Link Converter plugin for bulk operations

## Success Criteria

- [ ] All 86 tag files converted to absolute markdown links
- [ ] All 3 root files converted and validated
- [ ] No broken internal references  
- [ ] Navigation functionality preserved
- [ ] Ready for Phase 6 (notes conversion)

## Time Estimate

- **Tags Directory**: 1-2 hours (moderate size, structured content)
- **Root Files**: 30 minutes (small but critical)
- **Validation**: 30 minutes
- **Total**: 2-3 hours

Ready to begin Phase 5!