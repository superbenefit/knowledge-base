# Step 4 Recovery Plan: Fix & Complete Filename Normalization

_Last updated: 2025-07-13 - AIFS files restored from backup_

## Overview

This is the recovery plan for Step 4 of the Meeting Timeline Project. During the first attempt at filename normalization, several issues occurred that require systematic fixes.

**Goal**: Transform all meeting filenames to follow this pattern:
```
[Project] Meeting (DD-MM-YYYY).md
```

## Current Situation

### What Happened
During the first attempt at Step 4, several issues occurred:
1. **Parsing errors**: Meeting numbers incorrectly parsed as dates (e.g., "Meeting 5 1112024" → "(51-01-2024)")
2. **Lost files**: 12 AIFS files accidentally deleted (**now restored from backup**)
3. **Incomplete normalization**: ~45 files still need work
4. **Database findings**: CSV exports revealed dates for ALL AIFS files!

### Current Status
- ✅ **Already normalized**: ~287 files (GC: 136, RPP Core: 81, most others)
- 🔧 **Need fixes**: ~45 files in partially done folders
- 🆕 **AIFS restored**: 33 files need both date metadata AND normalization
- 📊 **Invalid dates**: 4 files with impossible date values

## Issues to Fix

### 1. Invalid Dates (4 files) - **FIX FIRST**
These have impossible dates due to parsing errors:

| File | Invalid Date | Correct Date (from frontmatter) |
|------|--------------|----------------------------------|
| `RPP OS Steward Meeting (51-01-2024).md` | Month 51 | Should be (05-11-2024) |
| `RPP OS Steward Meeting (81-00-2024).md` | Day 81, Month 00 | Should be (08-10-2024) |
| `RPP Stakeholder Meeting (14-20-2024).md` | Day 14, Month 20 | Check frontmatter |
| `RPP Stakeholder Meeting (65-20-2024).md` | Day 65, Month 20 | Check frontmatter |

**Why these happened**: Parser included meeting numbers as part of dates

### 2. OS Steward Meeting Numbers (~28 files)
Pattern: `OS Stewards meeting [NUMBER] [DATE].md`
- Example: `OS Stewards meeting 36 22425.md`
- "36" is the meeting number (NOT part of date)
- "22425" is the date (22-04-2025)

### 3. Other Issues
- **RPP Stakeholder**: 4 files with ordinal numbers (9th, 10th, etc.)
- **WP**: 2 files with legacy "Cell" naming
- **DAO Primitives**: 3 files needing minor fixes
- **AIFS**: All 33 files need complete processing

### 4. Duplicate Files
- `OS stewards meeting 37.md` vs `OS stewards meeting 37 29425.md`
- Files with "(1)" suffix

## Recovery Tools Available

All tools are in `notes/general-circle/timeline/`:

### Diagnostic Tools
- **[[comprehensive-issues-check]]** - Master scan for all issues
- **[[status-check]]** - Quick progress verification
- **[[fix-invalid-dates]]** - Targets the 4 invalid date files

### Processing Scripts  
- **[[os-steward-parser]]** - Handles meeting number patterns
- **[[aifs-processor-complete]]** - Has complete date mapping from database!

## Phase-by-Phase Recovery Plan

### Phase 1: Fix Critical Issues (20 minutes)

#### A. Fix 4 Invalid Dates
1. Run `fix-invalid-dates.md` to identify them
2. For each file:
   - Open in Obsidian
   - Check `date:` in frontmatter
   - Press F2 to rename
   - Use format: `[Project] Meeting (DD-MM-YYYY).md`

#### B. Remove Duplicates
1. In RPP OS Steward folder, compare:
   - Content of duplicate files
   - Keep the more complete version
   - Delete duplicates

### Phase 2: Practice on Small Folders (30 minutes)

#### WP Meetings (2 files)
- `WP Cell Weekly Meeting (12224).md` → `WP Meeting (02-12-2024).md`
- `WREEP Cell Weekly Meeting (111323).md` → `WP Meeting (13-11-2023).md`

#### DAO Primitives (3 files)
- Remove "Weekly" from names
- Fix capitalization
- Ensure DD-MM-YYYY format

#### RPP Stakeholder (8-10 files)
Files with month names like "10th Stakeholder Meeting (August 2024)":
1. Open each file
2. Find exact date in content/frontmatter
3. Rename to standard format

### Phase 3: Process AIFS Files (45 minutes)

**Great news**: Database export revealed dates for ALL files!

#### AIFS Gatherings (from database):
- `AIFS Gathering #0.md` → 13-11-2024
- `AIFS Gathering #1.md` → 11-12-2024
- `AIFS Gathering #2.md` → 08-01-2025
- `AIFS Gathering #3.md` → 22-01-2025
- `AIFS Gathering #4.md` → 05-02-2025
- `AIFS Gathering #5.md` → 19-02-2025

#### Other AIFS Files:
All dates available in `aifs-processor-complete.md`

#### Process:
1. Run `aifs-processor-complete.md`
2. Use batch script to add frontmatter
3. Rename each file with F2
4. Result: All 33 AIFS files properly dated!

### Phase 4: Handle OS Steward Pattern (30 minutes)

For ~28 files like `OS Stewards meeting 36 22425.md`:

1. Run `os-steward-parser.md`
2. Review parsing results
3. For each file:
   - Verify parsed date
   - Rename using F2
   - Format: `RPP OS Steward Meeting (DD-MM-YYYY).md`

#### Date Parsing Examples:
- `22425` → 22-04-2025
- `1425` → 01-04-2025
- `20525` → 20-05-2025
- `101224` → 10-12-2024

### Phase 5: Verify & Test (20 minutes)

1. Run `status-check.md` for final counts
2. Create test timeline page (e.g., `2024-11.md`)
3. Insert monthly timeline template
4. Verify normalized files appear correctly
5. Check a few links work properly

## Summary

**Total Files to Process**: ~78
- 45 files needing fixes
- 33 AIFS files needing complete processing

**Estimated Time**: 2-3 hours

**Key Insight**: Database export solved the AIFS dating problem!

## Success Checklist

- [ ] All 4 invalid dates fixed
- [ ] Duplicates removed
- [ ] WP folder complete (2 files)
- [ ] DAO Primitives complete (3 files)
- [ ] RPP Stakeholder complete (~10 files)
- [ ] AIFS processed with database dates (33 files)
- [ ] RPP OS Steward complete (~28 files)
- [ ] Test timeline page works
- [ ] No broken links

## Tips for Success

1. **Work incrementally** - Complete one phase before moving to next
2. **Use F2 rename** - Always preserves links
3. **Check frontmatter** when dates seem wrong
4. **Take breaks** between phases
5. **Run status checks** to verify progress

## Next Steps After Recovery

1. **Split consolidated files** (Step 2) - Adds 70+ meetings
2. **Create timeline pages** (Step 5) - Monthly views
3. **Create timeline index** (Step 6) - Navigation hub

---
*Remember: The database export discovery turned a difficult AIFS problem into a straightforward task!*