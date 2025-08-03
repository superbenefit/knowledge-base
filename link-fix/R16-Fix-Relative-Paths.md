---
purpose: Convert relative paths to absolute Obsidian paths
features:
  - Handles ../ and ./ relative paths
  - Resolves paths relative to current file location
  - Creates backup before changes
outputs:
  - Fixed absolute paths
  - Detailed change log
---

# Fix Relative Paths

**Template**: T16-Fix-Relative-Paths
**Purpose**: Convert relative paths like `../file.md` to absolute `path/to/file.md`

## ✅ Relative Paths Fixed!

### Results
- **Paths Fixed**: 218
- **Files Modified**: 42
- **Files Processed**: 1151

### Examples of Fixes

**tags/local-nodes.md**:
- `../tags/coordi-nations.md` → `tags/coordi-nations.md`

**notes/ics/ccc/docs/I-Fund/README.md**:
- `./I.01-impact-yield-fund-concept.md` → `notes/ics/ccc/docs/I-Fund/I.01-impact-yield-fund-concept.md`
- `./I.03-diagrams-and-visuals.md` → `notes/ics/ccc/docs/I-Fund/I.03-diagrams-and-visuals.md`
- `./I.04-project-plan.md` → `notes/ics/ccc/docs/I-Fund/I.04-project-plan.md`

**notes/ics/ccc/docs/I-Fund/I.00-overview.md**:
- `./I-Fund-README.md` → `notes/ics/ccc/docs/I-Fund/I-Fund-README.md`
- `./I.01-impact-yield-fund-concept.md` → `notes/ics/ccc/docs/I-Fund/I.01-impact-yield-fund-concept.md`
- `./I.02-meeting-notes.md` → `notes/ics/ccc/docs/I-Fund/I.02-meeting-notes.md`

### 📄 Reports
- Fix Log: `link-fix/36-relative-path-fix-log-20250802-222217.csv`
- Summary: `link-fix/36-relative-path-fix-report.md`
- Backup: `link-fix/backups/20250802-222217/`


---

*Convert relative paths to absolute Obsidian paths*