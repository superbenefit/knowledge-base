# Phase 4 Batch Processing Plan

**Generated**: 2025-08-02 01:15:00  
**Phase**: 4 - Plugin Conversion (Artifacts)  
**Target**: 62 files with 3,751 wikilinks in `/artifacts/`  
**Objective**: Convert all wikilinks to markdown format using Obsidian Links plugin

## Pre-Execution Status

- **Branch**: plugin-execute (verified)
- **Phase 3**: ✅ COMPLETE - All 307 leading slashes removed
- **Plugin**: Obsidian Links configured and ready
- **Tracking**: Dashboard infrastructure in place

## Batch Processing Plan

### Update: Bulk Conversion Complete ✅
**Status**: All 62 files have been bulk converted using Link Converter plugin (2025-08-02 02:00)
**Method**: Used "Convert links in folder" on entire `/artifacts/` directory
**Result**: ~2500 wikilinks converted to markdown format with absolute paths

### Remaining Work: Edge Case Cleanup
Some files contain problematic links that need manual attention:
- Angle bracket links with spaces in anchors
- Relative paths without leading slashes
- Obsidian URI links

Use templates T04-Find-Problem-Links and T04-Fix-Artifact-Links for cleanup.

---

## Original Batch Plan (Completed via Bulk Operation)

### Batch 1: Articles (13 files) ✅ COMPLETE
**Priority**: Test batch - manageable size for validation
**Status**: Successfully converted 2025-08-02 01:30

#### 1.1 Governance for Better Futures (5 files)
- [x] `Exploring governance for better futures.md`
- [x] `Governance for better futures - DAO 2 DAO Co-operation.md`
- [x] `Governance for better futures - Meta-governance.md`
- [x] `Governance for better futures - New and Old.md`
- [x] `governance-for-better-futures.md` (index)

#### 1.2 Network Evolution (6 files)
- [x] `Building DAOs as scalable networks.md`
- [x] `DAOs - From fractal primitives to network scale..md`
- [x] `DAOs aren't things... they are flows..md`
- [x] `Minimum Viable Permissionless-ness.md`
- [x] `Scale and the levers that provide DAOs their power.md`
- [x] `network-evolution.md` (index)

#### 1.3 Articles Root (2 files)
- [x] `Reimagining Power - How Web3 Can Transform Impact.md`
- [x] `articles.md` (index)

**Batch 1 Total**: 13 files ✅

### Batch 2: Guides - DAO Primitives Core (10 files)
**Priority**: Critical framework documentation

#### 2.1 Main Framework Files (3 files)
- [ ] `dao-primitives-framework.md`
- [ ] `group-facilitation.md`
- [ ] `group-state.md`

#### 2.2 Group Primitives (5 files)
- [ ] `group-primitives.md` (index)
- [ ] `roles.md`
- [ ] `tasks.md`
- [ ] `cells.md`
- [ ] `daos.md`

#### 2.3 Framework Documentation (2 files)
- [ ] `readme.md`
- [ ] `guides.md` (root index)

**Batch 2 Total**: 10 files

### Batch 3: Guides - DAO Primitives Phases & Scale (14 files)
**Priority**: Framework implementation details

#### 3.1 Group Phases (6 files)
- [ ] `group-phase.md` (index)
- [ ] `formation-phase.md`
- [ ] `conversation-phase.md`
- [ ] `coordination-phase.md`
- [ ] `organization-phase.md`
- [ ] `completion-phase.md`

#### 3.2 Group Scale (5 files)
- [ ] `group-scale.md` (index)
- [ ] `collaboration-scale.md`
- [ ] `coordination-scale.md`
- [ ] `constituency-scale.md`
- [ ] `network-scale.md`

#### 3.3 Other Guides (3 files)
- [ ] `discord-link-scraper.md`
- [ ] `poetic-harvesting-guide.md`
- [ ] `dao-primitives-implemention.md` (index)

**Batch 3 Total**: 14 files

### Batch 4: Guides - Implementation & Patterns (15 files)
**Priority**: Practical implementation guidance

#### 4.1 Implementation Guides (3 files)
- [ ] `implementation-guide-community-governance.md`
- [ ] `implementation-guide-operational-governance.md`
- [ ] `implementation-guide-multi-stakeholder-governance.md`

#### 4.2 Patterns (12 files)
- [ ] `patterns.md` (index)
- [ ] `community-governance.md`
- [ ] `gatherings.md`
- [ ] `operational-governance.md`
- [ ] `cell-state-template.md`
- [ ] `cell.md`
- [ ] `decider-protocol.md`
- [ ] `cell-state.md`
- [ ] `fiscal-bridge-pattern.md`
- [ ] `knowledge-gardens.md`
- [ ] `poetic-harvesting.md`
- [ ] `progressive-web3-adoption.md`

**Batch 4 Total**: 15 files

### Batch 5: Studies (10 files)
**Priority**: Case studies and experiments

#### 5.1 Experiments (4 files)
- [ ] `experiments.md` (index)
- [ ] `aifs-experiment-case-study.md`
- [ ] `equality-fund-experiment-case-study.md`
- [ ] `ics-experiment-case-study.md`

#### 5.2 Projects (2 files)
- [ ] `projects.md` (index)
- [ ] `rpp-governance-case-study.md`

#### 5.3 Studies Root (4 files)
- [ ] `studies.md` (index)
- [ ] `artifacts.md` (root index)
- [ ] `readme.md` (root)
- [ ] `playbooks.md` (placeholder)

**Batch 5 Total**: 10 files

## Summary by Batch

| Batch | Description | Files | Est. Links | Priority | Status |
|-------|-------------|-------|------------|----------|--------|
| 1 | Articles | 13 | ~600 | Test batch | ✅ COMPLETE |
| 2 | DAO Primitives Core | 10 | ~800 | Critical | Ready |
| 3 | DAO Phases & Scale | 14 | ~900 | High | - |
| 4 | Implementation & Patterns | 15 | ~750 | High | - |
| 5 | Studies | 10 | ~700 | Medium | - |
| **TOTAL** | **All Artifacts** | **62** | **~3,751** | - | 13/62 done |

## Execution Process

### For Each Batch:
1. **Pre-Check**: Review files for any issues
2. **Execute**: Run Obsidian Links plugin on batch
3. **Validate**: Check converted links work correctly
4. **Track**: Update CSV log with results
5. **Test**: Publishing check for critical content
6. **Commit**: Git commit after successful batch

### Plugin Settings Reminder:
- Convert wikilinks to markdown: **ON**
- Delete wikilinks after conversion: **ON**
- Include .md extension: **YES**
- Preserve aliases: **YES**

## Next Steps

1. Review this batch plan
2. Confirm plugin settings
3. Begin with Batch 1 (Articles) as test
4. Create tracking CSV for dashboard
5. Execute conversion batch by batch

---

*Ready to begin Phase 4 execution with Batch 1*
