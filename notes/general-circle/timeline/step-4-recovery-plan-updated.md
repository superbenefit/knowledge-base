# Step 4 Recovery Plan: Complete Filename Normalization

_Last updated: 2025-07-15 - Accurate assessment completed_

## Overview

This is the updated recovery plan for Step 4 of the Meeting Timeline Project. After reviewing all folders, we have a clear picture of what needs to be done.

**Goal**: Transform all meeting filenames to follow this pattern:
```
[Project] Meeting (DD-MM-YYYY).md
```

## Current Situation (Accurate Assessment)

### Overall Progress
- **Total meeting files**: ~365 files
- **Have date metadata**: 312 files (85%)
- **Properly normalized**: ~215 files (59%)
- **Still need normalization**: ~150+ files

### Folder-by-Folder Status

#### 1. General Circle (old-gc-meetings) - NEEDS MAJOR WORK
- **Total**: 203 files
- **Normalized**: ~138 files (68%)
- **Still need work**: ~65 files
- **Common patterns to fix**:
  - `GC Weekly Meeting (15724).md` → `GC Meeting (15-07-2024).md`
  - `GC Weekly Meeting 10225.md` → `GC Meeting (10-02-2025).md`
  - `General Circle Meeting 121123.md` → `GC Meeting (12-11-2023).md`
  - `GC weekly meeting 290724.md` → `GC Meeting (29-07-2024).md`
- **Duplicate**: `GC weekly meeting 24325 (1).md` and `GC weekly meeting 24325.md`

#### 2. RPP OS Steward - PARTIALLY DONE
- **Total**: 48 files
- **Normalized**: 32 files (67%)
- **Still need work**: 16 files
- **Pattern to fix**: `OS Stewards meeting [NUMBER] [DATE].md`
  - Example: `OS Stewards meeting 36 22425.md`
  - "36" = meeting number (ignore)
  - "22425" = date (22-04-2025)

#### 3. AIFS - NOTHING DONE YET
- **Total**: 33 files
- **Normalized**: 0 files (0%)
- **Still need work**: ALL 33 files
- **Issues**:
  - No dates in filenames
  - Need to add date metadata first
  - Database export has dates for all files!

#### 4. Other Folders - STATUS UNCLEAR
- **DAO Primitives**: Supposedly done but needs verification
- **RPP Core Team**: Status unclear
- **RPP Stakeholder**: Status unclear  
- **WP**: Status unclear

## Phase-by-Phase Action Plan

### Phase 1: Run Comprehensive Diagnostic (15 minutes)
1. Open `notes/general-circle/timeline/comprehensive-issues-check.md`
2. Run the diagnostic to get exact counts per folder
3. Save results for reference

### Phase 2: Fix General Circle Folder (1.5 hours)
This is the biggest task with ~65 files to fix.

#### Common Date Patterns:
- `(15724)` → 15-07-2024
- `10225` → 10-02-2025
- `121123` → 12-11-2023
- `290724` → 29-07-2024
- `17-2-25` → 17-02-2025

#### Process:
1. Sort files by name to group similar patterns
2. Work through each pattern group:
   - Parse the date
   - Check frontmatter if unsure
   - Rename with F2 to `GC Meeting (DD-MM-YYYY).md`
3. Handle duplicate: Check content and keep better version
4. Remove variations like "Weekly", normalize capitalization

### Phase 3: Process AIFS Files (45 minutes)
All 33 files need both dates and normalization.

#### Use the database mapping:
```
AIFS Gathering #0 → 13-11-2024
AIFS Gathering #1 → 11-12-2024
AIFS Gathering #2 → 08-01-2025
AIFS Gathering #3 → 22-01-2025
AIFS Gathering #4 → 05-02-2025
AIFS Gathering #5 → 19-02-2025
[etc - full list in aifs-processor-complete.md]
```

#### Process:
1. Run `aifs-processor-complete.md`
2. Add date metadata to each file
3. Rename to `AIFS Meeting (DD-MM-YYYY).md`

### Phase 4: Fix OS Steward Meeting Numbers (30 minutes)
16 files with meeting numbers in names.

#### Process:
1. Run `os-steward-parser.md`
2. For each file like `OS Stewards meeting 36 22425.md`:
   - Ignore the meeting number (36)
   - Parse the date (22425 → 22-04-2025)
   - Rename to `RPP OS Steward Meeting (22-04-2025).md`

### Phase 5: Verify Other Folders (30 minutes)
1. Check each remaining folder:
   - DAO Primitives
   - RPP Core Team  
   - RPP Stakeholder
   - WP meetings
2. Fix any files not following the pattern
3. Ensure consistency

### Phase 6: Final Verification (15 minutes)
1. Run `status-check.md`
2. Create a test timeline page
3. Verify all folders are complete
4. Check for any remaining issues

## Key Patterns Reference

### Date Parsing Guide:
- `DDMMYY`: `150724` → 15-07-2024
- `DMYY`: `10225` → 10-02-2025  
- `DDMYY`: `121123` → 12-11-2023
- `DD-M-YY`: `17-2-25` → 17-02-2025
- `DMDDYY`: `290724` → 29-07-2024

### Naming Conventions:
- General Circle → `GC Meeting`
- OS Steward → `RPP OS Steward Meeting`
- AIFS → `AIFS Meeting`
- Core Team → `RPP Core Team Meeting`
- Stakeholder → `RPP Stakeholder Meeting`
- DAO Primitives → `DAO Primitives Meeting`
- Windfall → `WP Meeting`

## Time Estimate

- Phase 1: Diagnostic - 15 minutes
- Phase 2: GC folder - 1.5 hours
- Phase 3: AIFS - 45 minutes
- Phase 4: OS Steward - 30 minutes
- Phase 5: Other folders - 30 minutes
- Phase 6: Verification - 15 minutes

**Total: 3.5-4 hours**

## Success Criteria

✅ All ~365 meeting files follow `[Project] Meeting (DD-MM-YYYY).md` format  
✅ No invalid dates  
✅ No duplicate files  
✅ All links preserved and working  
✅ Timeline pages display all meetings correctly  

## Tips for Success

1. **Use F2 exclusively** - Preserves all links automatically
2. **Check frontmatter** when date parsing is unclear
3. **Work systematically** - Complete one folder before moving to next
4. **Take breaks** - This is detail-oriented work
5. **Save progress** - Commit or backup after each folder

## Next Steps After Step 4

1. **Split consolidated files** (Step 2) - Adds 70+ meetings
2. **Create more timeline pages** (Step 5) - Test the system
3. **Create timeline index** (Step 6) - Navigation hub
4. **Run coverage analyzer** (Step 7) - Find any gaps

---
*This plan is based on actual folder inspection on 2025-07-15. The main discovery is that more work remains than initially thought, but all tools are available to complete it successfully.*