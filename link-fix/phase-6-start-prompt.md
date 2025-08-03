# Prompt for Phase 6 - Plugin Conversion (Notes Directory)

## Project Context

I need to execute **Phase 6** of the link normalization project for my SuperBenefit Knowledge Base vault. This phase will convert wikilinks to markdown format in the `/notes/` directory - the largest conversion phase of the project.

**Project Plan Location**: `F:\projects\sb-knowledge-base\link-fix\link-normalization-plan-v2.md`  
**Phase 5 Summary**: `F:\projects\sb-knowledge-base\link-fix\22-phase-5-complete-summary.md`

## Current Status

- **Vault**: F:\projects\sb-knowledge-base (on `plugin-test` branch)
- **Phases 1-5**: ✅ COMPLETE with outstanding results
  - Phase 1: Link inventory completed (16,286 total links identified)
  - Phase 2: Strategy, planning, and comprehensive enhancement completed
  - Phase 3: All 307 leading slashes removed from 28 files (100% success)
  - Phase 4: All 62 artifacts files converted (2,500+ wikilinks + 1,583 edge cases = 100% clean)
  - Phase 5: All 89 reference files converted (68 files, 487 links = 100% clean)
- **Phase 6**: Ready to execute - largest phase of project
  - 1,680 files in `/notes/` directory with ~10,957 links to convert
  - Standard priority internal working documents
  - Multiple subdirectories requiring systematic approach

## Phase 6 Scope Overview

**Target**: `/notes/` directory (1,680 files, ~10,957 links)
**Priority**: STANDARD (internal working documents)

### Subdirectories by Size:
1. **RPP**: 465 files (largest)
2. **DAO Primitives**: 427 files  
3. **Archive**: 399 files
4. **ICS**: 212 files
5. **General Circle**: 94 files
6. **Other Notes**: 83 files

### **Critical Difference from Previous Phases**:
Phase 6 represents the bulk of content (~65% of all files) and requires efficient batch processing strategies rather than individual file attention.

## Objective

Execute Phase 6: Plugin Conversion - Notes as defined in the plan:

- Convert all wikilinks to markdown format in `/notes/` directory
- Process in logical subdirectory batches  
- Efficiently handle large volume (1,680 files)
- Maintain systematic tracking and validation
- Balance speed with accuracy for internal documents
- Update all progress tracking to reflect completion

## Working Style Requirements & Lessons Learned

Please follow these principles refined through Phases 1-5:

### **Proven Strategies**:
1. **Batch processing works**: Phase 4 & 5 showed batch templates are highly effective
2. **Scanner-first approach**: Always scan before processing to understand scope
3. **Template reusability**: Adapt existing templates (T04/T05 series) for Phase 6
4. **Simple issue patterns**: Most issues are relative paths needing "/" prefix
5. **100% success achievable**: All previous phases achieved perfect execution

### **Phase 6 Specific Considerations**:
1. **Volume strategy**: Process by subdirectory, not individual files
2. **Efficient tooling**: Adapt T05-Fix-Tags-Links approach for notes subdirectories
3. **Strategic ordering**: Largest directories first for maximum progress visibility
4. **Validation checkpoints**: After each major subdirectory
5. **Internal content handling**: Less critical than artifacts/root files, allow for efficient processing

### **Operational Guidelines**:
1. **Sequential numbering**: Continue pattern (23-, 24-, etc.) for new files
2. **Dashboard compatibility**: Maintain CSV log format for DataviewJS parsing
3. **Git safety**: Regular commits after major subdirectory completions
4. **Template evolution**: Build on T05 templates, don't start from scratch

## Available Tools & Templates

**Proven Templates from Previous Phases**:
- `T05-Fix-Tags-Links.md` - Batch processor (adapt for notes subdirectories)
- `T05-Scan-Reference-Content.md` - Scanner template (adapt scope)
- `T04-Find-Problem-Links.md` - Issue detection (with claude.ai detection)
- All fix templates handle: relative paths, angle brackets, Obsidian URIs, anchor spaces, claude.ai links

**Infrastructure Ready**:
- Sequential file numbering system
- Dashboard tracking via `08-progress-dashboard.md`
- Processing order checklist in `07-processing-order.md`
- Comprehensive validation frameworks

## Pre-Execution Checklist

Before starting Phase 6, confirm:

- [ ] On `plugin-test` branch with recent git commit
- [ ] Phase 5 validation shows all reference content (tags + root files) clean  
- [ ] Templates T04/T05 series available and tested
- [ ] Processing order checklist shows Phases 1-5 complete
- [ ] Dashboard shows accurate progress through Phase 5
- [ ] Ready for large-volume batch processing approach

## Recommended Phase 6 Strategy

Based on successful Phase 4 & 5 patterns:

### **Step 6.0: Comprehensive Notes Scan**
- Create Phase 6 scanner to analyze entire `/notes/` directory
- Identify actual issues vs. predictions
- Assess subdirectory complexity
- Plan optimal processing order

### **Step 6.1-6.6: Subdirectory Batch Processing**  
Process in strategic order (largest first for progress visibility):
1. **RPP** (465 files) - Largest subdirectory
2. **DAO Primitives** (427 files) - Second largest
3. **Archive** (399 files) - Historical content
4. **ICS** (212 files) - Impact & coordination
5. **General Circle** (94 files) - Governance content
6. **Other Notes** (83 files) - Miscellaneous content

### **Step 6.7: Final Validation**
- Comprehensive scan of entire `/notes/` directory
- Validation of cross-references
- Phase 6 summary and metrics

## Starting Point

Please begin with **Phase 6, Step 6.0**: Comprehensive Notes Analysis

1. Review Phase 5 completion status and metrics
2. Create scanner template for `/notes/` directory analysis
3. Identify actual scope vs. plan predictions (1,680 files, ~10,957 links)
4. Assess subdirectory complexity and issue patterns
5. Recommend optimal processing strategy based on findings
6. Create Phase 6 tracking structure

## Expected Outputs

- `23-phase-6-notes-scan.md` - Comprehensive notes directory analysis
- `24-phase-6-batch-strategy.md` - Subdirectory processing plan
- `08-phase6-notes-log.csv` - Dashboard-compatible tracking
- `25-27-rpp-dao-primitives-archive-reports.md` - Major subdirectory completion reports
- `28-phase-6-complete-summary.md` - Full phase completion summary

## Success Criteria

- All 1,680 files in `/notes/` converted to absolute markdown links
- Maintain systematic tracking through largest phase
- Efficient processing (batch approach vs. individual files)
- 100% accuracy maintaining standard set by Phases 1-5
- Ready for Phase 7 (final validation) and Phase 8 (documentation)

Let's complete the largest conversion phase efficiently while maintaining our 100% success record!