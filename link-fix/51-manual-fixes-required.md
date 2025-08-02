# Manual Fixes Required - Intervention Planning

**Generated**: 2025-08-01  
**Phase**: 2.3b.3  
**Based on**: Plugin test results analysis

## Overview

The Obsidian Links plugin testing revealed significant gaps requiring manual intervention. This document outlines required fixes, estimates effort, and proposes solutions.

## Critical Issues Requiring Manual Intervention

### 1. Leading Slashes Not Removed ❌ CRITICAL

**Scope**: 28 files, 307 links  
**Current state**: `[text](/path/file.md)` remains unchanged  
**Required**: `[text](path/file.md)`

**Solution**: 
- ✅ Already have T03 template for this
- Must run BEFORE plugin conversion
- **Time estimate**: 30 minutes

### 2. Code Block Protection ❌ CRITICAL

**Scope**: Estimated 50+ files (templates, technical docs)  
**Issue**: Links inside code blocks are converted, breaking examples

**Solution needed**: New template (T06-Protect-Code-Blocks)
- Extract code blocks before conversion
- Replace with placeholders
- Restore after conversion
- **Time estimate**: 2-3 hours to develop, 1 hour to execute

### 3. Embedded Content Semantic Loss ⚠️ HIGH

**Scope**: 100+ files with embeds  
**Issue**: All `![[]]` → `![]()` losing meaning

**Types affected**:
```
![[note.md]] → ![note.md](note.md)         ❌ Wrong syntax
![[image.png|300]] → ![image.png](image.png)  ❌ Lost size
![[doc.pdf]] → ![doc.pdf](doc.pdf)         ❌ Won't embed
```

**Solution needed**: New template (T07-Fix-Embeds)
- Detect file type by extension
- Restore proper syntax for notes
- Preserve size parameters
- **Time estimate**: 3-4 hours to develop, 2 hours to execute

### 4. Relative Path Resolution ⚠️ HIGH

**Scope**: 20-30 files  
**Issue**: `[text](../parent/file.md)` not converted to absolute

**Solution needed**: New template (T08-Resolve-Relative-Paths)
- Calculate absolute paths from current location
- Handle multiple ../ levels
- Preserve fragments
- **Time estimate**: 3-4 hours to develop, 1 hour to execute

### 5. Block Reference Encoding ⚠️ MEDIUM

**Scope**: 5-10 files  
**Issue**: `^block-id` → `%5Eblock-id` creating wrong filenames

**Solution**: Post-processing fix
- Un-encode %5E back to ^
- Verify block references work
- **Time estimate**: 30 minutes

### 6. Special Character Over-Encoding ⚠️ MEDIUM

**Scope**: 30+ files  
**Issues**: 
- Unicode heavily encoded: `✅` → `%E2%9C%85`
- Spaces over-encoded: `file name` → `file%20name`
- Hash splits filenames: `Meeting #5` → `Meeting .md#5`

**Solution**: Selective decoding
- Preserve necessary encoding
- Fix hash-related splits
- **Time estimate**: 2 hours

### 7. Square Bracket Wikilinks ⚠️ LOW

**Scope**: Few files  
**Issue**: `[[Document [v2]]]` not converted at all

**Solution**: Manual fix or special handling
- Pre-process to escape brackets
- Or handle manually
- **Time estimate**: 30 minutes

## Proposed Processing Workflow

### Phase 3 Enhanced (Pre-Processing)

1. **Step 3.2**: Remove leading slashes (T03) ✅
2. **NEW Step 3.3**: Protect code blocks (T06)
3. **NEW Step 3.4**: Normalize special filenames
4. **Step 3.5**: Validate pre-processing

**Total Phase 3 time**: 4-5 hours (was 2 hours)

### Phase 4-6 (Plugin Conversion)

No change - run plugin as planned

### NEW Phase 6.5 (Post-Processing)

1. **Step 6.5.1**: Fix embeds (T07)
2. **Step 6.5.2**: Resolve relative paths (T08)
3. **Step 6.5.3**: Fix block reference encoding
4. **Step 6.5.4**: Clean special character encoding
5. **Step 6.5.5**: Validate all fixes

**Total Phase 6.5 time**: 6-8 hours

## Manual Processing Queue

### High Priority Manual Review
1. **Template files** in `/tools/templates/`
   - Risk: Templater syntax corruption
   - Action: Process separately with extra care

2. **Files with Git conflicts**
   - Must resolve before any processing

3. **Complex mixed-format documents**
   - Review after automated processing

### Batch Processing Strategy

For efficiency, process in this order:
1. Pre-process ALL files needing it
2. Run plugin in large batches
3. Post-process by issue type (not by directory)

## Updated Time Estimates

| Phase | Original Estimate | Revised Estimate | Increase |
|-------|------------------|------------------|----------|
| Phase 3 | 2 hours | 4-5 hours | +150% |
| Phase 4-6 | 8 hours | 8 hours | No change |
| Phase 6.5 | N/A | 6-8 hours | New phase |
| Phase 7 | 2 hours | 3-4 hours | +100% |
| **Total** | **15 hours** | **25-30 hours** | **+100%** |

## Risk Mitigation

### Automated Safeguards
1. Every template includes rollback
2. Incremental processing with validation
3. Comprehensive logging

### Manual Safeguards  
1. Review high-risk files before bulk processing
2. Test each new template on samples
3. Maintain manual intervention log

### Fallback Options
1. Git restore for major issues
2. Process smaller batches if problems
3. Manual fixing for edge cases

## Next Steps (Phase 2.3c)

Develop enhanced templates:
1. **T06-Protect-Code-Blocks** - Prevent code corruption
2. **T07-Fix-Embeds** - Restore embed semantics
3. **T08-Resolve-Relative-Paths** - Convert to absolute
4. **T09-Post-Conversion-Validator** - Comprehensive check

## Conclusion

The plugin's limitations require significant manual intervention, effectively doubling the project timeline. However, with proper templates and systematic approach, all issues can be resolved.

The key is to:
1. Pre-process what plugin can't handle
2. Let plugin do basic conversion
3. Post-process to fix plugin issues
4. Validate thoroughly

---

*Manual intervention plan complete. Ready for Phase 2.3c: Enhanced Template Development*