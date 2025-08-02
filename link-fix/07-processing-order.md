# Processing Order - Link Normalization Project

**Generated**: 2025-08-01  
**Total Files to Process**: 1,070 files containing links  
**Pre-processing Required**: 28 files with leading slashes

## Overview

This document provides the recommended processing sequence for link normalization. Each section can be checked off as completed.

---

## Phase 3: Pre-Processing (28 files)

### 3.1 Pre-Processing Checklist
- [ ] **Execute T03-Remove-Leading-Slashes** on all 28 files
- [ ] **Validate**: Confirm no leading slashes remain
- [ ] **Document**: Update tracking in Phase 3 summary

### Files to Pre-Process:
```
artifacts/ (25 files, 296 links)
notes/ (2 files, 9 links)  
links/ (1 file, 2 links)
```

---

## Phase 4: Plugin Conversion - Artifacts (62 files, 3,751 links)

**Priority**: HIGH - Published content visible on website

### 4.1 Articles (17 files)
- [ ] `/artifacts/articles/governance-for-better-futures/` (5 files)
- [ ] `/artifacts/articles/network-evolution/` (6 files)
- [ ] `/artifacts/articles/` (6 root files)

### 4.2 Guides (24 files)
- [ ] `/artifacts/guides/dao-primitives-framework/` (21 files)
- [ ] `/artifacts/guides/` (3 root files)

### 4.3 Patterns (11 files)
- [ ] `/artifacts/patterns/` (all files)

### 4.4 Studies (10 files)
- [ ] `/artifacts/studies/experiments/` (3 files)
- [ ] `/artifacts/studies/` (7 root files)

---

## Phase 5: Plugin Conversion - Reference Content

### 5.1 Tags Directory (86 files, 819 links)
**Priority**: MEDIUM - Lexicon/taxonomy content

- [ ] Process all files in `/tags/`
- [ ] Validate tag references still work

### 5.2 Root Files (3 files, 35 links)
**Priority**: HIGH - Entry points to vault

- [ ] `README.md` (26 links)
- [ ] `index.md` (6 links)
- [ ] `CONTRIBUTING.md` (3 links)

---

## Phase 6: Plugin Conversion - Notes (1,680 files, 10,957 links)

**Priority**: STANDARD - Internal working documents

### 6.1 DAO Primitives (427 files)
- [ ] `/notes/dao-primitives/implementation/` (subcategories)
- [ ] `/notes/dao-primitives/primitives-archive/`
- [ ] `/notes/dao-primitives/` (root files)

### 6.2 RPP (465 files)
- [ ] `/notes/rpp/rpp-experiments/`
- [ ] `/notes/rpp/rpp-archive/`
- [ ] `/notes/rpp/` (root files)

### 6.3 ICS (212 files)
- [ ] `/notes/ics/ccc/`
- [ ] `/notes/ics/` (other subdirectories)

### 6.4 General Circle (94 files)
- [ ] `/notes/general-circle/old-gc-meetings/`
- [ ] `/notes/general-circle/` (root files)

### 6.5 Archive (399 files)
- [ ] `/notes/archive/clarity/`
- [ ] `/notes/archive/` (other content)

### 6.6 Other Notes (83 files)
- [ ] Remaining directories and root files

---

## Phase 6.7: Links Directory (30 files, 417 links)

**Priority**: LOW - External resource collection

- [ ] Process all files in `/links/`

---

## Processing Guidelines

### Batch Sizes
- **Small directories** (<20 files): Process entire directory
- **Medium directories** (20-100 files): Process in batches of 20-30
- **Large directories** (>100 files): Process in batches of 50

### Validation Checkpoints
1. After each major directory
2. After every 100 files in large directories
3. Before moving to next phase

### High-Risk Files (>150 links each)
Special attention needed for these files:
- `notes/archive/clarity/Tags/newsletter updates.md` (343 links)
- `links/organizing-handbooks.md` (296 links)
- `notes/general-circle/general-circle.md` (275 links)
- `notes/ics/ccc/archive/archive.md` (224 links)
- `notes/rpp/rpp-archive/rpp-tasks/rpp-tasks.md` (221 links)

### Progress Tracking
- Update CSV tracking files after each batch
- Note any issues in phase-specific issue logs
- Test publishing after each major directory

---

## Summary Statistics

| Directory | Files | Links | Priority | Est. Batches |
|-----------|-------|-------|----------|--------------|
| Pre-process | 28 | 307 | CRITICAL | 1 |
| artifacts | 62 | 3,751 | HIGH | 3-4 |
| tags | 86 | 819 | MEDIUM | 3-4 |
| Root files | 3 | 35 | HIGH | 1 |
| notes | 1,680 | 10,957 | STANDARD | 30-40 |
| links | 30 | 417 | LOW | 1 |
| **TOTAL** | **1,889** | **16,286** | - | **40-50** |

---

*Use this checklist to track progress through the conversion process. Check off items as completed and update phase summaries accordingly.*