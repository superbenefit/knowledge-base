# Step 4 Recovery Plan: Fix and Complete Filename Normalization

## Current Issues Summary

### 1. Lost Files (AIFS)
- **12 files permanently deleted** from AIFS folder
- These had dates in their names and cannot be recovered without backups
- Remaining AIFS files don't have dates in filenames

### 2. Invalid Dates
Files with impossible dates that need correction:
- `RPP Stakeholder Meeting (14-20-2024).md` - Month 14 doesn't exist
- `RPP Stakeholder Meeting (65-20-2024).md` - Month 65 doesn't exist  
- `RPP OS Steward Meeting (51-01-2024).md` - Day 51 doesn't exist
- `RPP OS Steward Meeting (81-00-2024).md` - Day 81, Month 00 don't exist

### 3. Incomplete Normalization
- **RPP OS Steward**: ~28 files still in old format
- **RPP Stakeholder**: ~6 files with month names need conversion
- **DAO Primitives**: 3 files need fixes
- **WP**: 2 files need fixes

### 4. Duplicate Files
- `OS stewards meeting 37.md` and `OS stewards meeting 37 29425.md`
- Files with "(1)" suffix suggesting duplicates

## Recovery Steps

### Step 1: Fix Invalid Dates (15 minutes)
1. Open `notes/general-circle/timeline/fix-invalid-dates.md`
2. For each invalid date file:
   - Open the file and check frontmatter for correct date
   - Press F2 to rename with correct date
   - If no frontmatter date, check file content

### Step 2: Remove Duplicates (10 minutes)
1. In RPP OS Steward folder:
   - Compare duplicate files for content
   - Keep the one with more complete content
   - Delete duplicates

### Step 3: Complete Partial Normalization (45-60 minutes)
1. Open `notes/general-circle/timeline/complete-normalization.md`
2. Run the Templater script to identify remaining files
3. Process folders in this order (smallest first):
   - WP meetings (2 files)
   - DAO Primitives (3 files)  
   - RPP Stakeholder (6 files)
   - RPP OS Steward (28 files)

### Step 4: Handle Special Cases (20 minutes)

#### RPP Stakeholder Month Names
Files like `10th Stakeholder Meeting for Reimagining Power (August 2024).md`:
1. Open each file
2. Check content for exact date
3. Rename to `RPP Stakeholder Meeting (DD-08-2024).md`

#### Compressed Dates
Files with dates like `(12324)`:
- Parse as MDDYY: 12324 = 03-12-2024
- Parse as DDMYY: 11624 = 16-01-2024

### Step 5: Verify Results (15 minutes)
1. Check that all links still work
2. Create a test timeline page to verify
3. Run a final count of normalized files

## What About AIFS?

The 12 lost AIFS files cannot be recovered without backups. Options:
1. **Check if you have backups** (Time Machine, Git, etc.)
2. **Recreate from memory** if you remember specific meetings
3. **Accept the loss** - remaining AIFS files don't have dates anyway
4. **Future prevention**: Always test scripts on small folders first

## Safer Approach Going Forward

1. **Always backup before bulk operations**
2. **Test on smallest folder first**
3. **Use Obsidian's F2 rename** - it preserves all links
4. **Work incrementally** - don't try to do everything at once

## Estimated Time to Complete

- Fix invalid dates: 15 minutes
- Remove duplicates: 10 minutes  
- Complete normalization: 45-60 minutes
- Handle special cases: 20 minutes
- Verification: 15 minutes

**Total: ~2 hours**

## Success Criteria

✅ All files follow `[Project] Meeting (DD-MM-YYYY).md` format  
✅ No invalid dates  
✅ No duplicate files  
✅ All links preserved and working  
✅ Timeline pages display correctly  

## Next Steps After Completion

1. **Create your first timeline pages** (Step 5)
2. **Create the timeline index** (Step 6)
3. **Consider splitting consolidated files** (Step 2 - adds 70+ meetings)

---
*Remember: Work carefully and incrementally. It's better to take time and preserve your data than rush and lose files.*
