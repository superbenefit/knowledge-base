# Link Normalization Conversion Workflows

**Created**: 2025-08-01  
**Purpose**: Document standard workflows for each phase of link conversion

## Overview

This document provides step-by-step workflows for converting links in the SuperBenefit Knowledge Base. Each workflow includes validation steps and rollback procedures.

---

## Phase 3: Pre-Processing Workflow (Leading Slash Removal)

### 3.1 Preparation
1. **Verify branch**: Ensure on `plugin-test` branch
2. **Check template**: Confirm T03-Remove-Leading-Slashes-v2 is in `/tools/templates/link-fix-templates/`
3. **Review targets**: Check `04-leading-slash-analysis.md` for 28 files to process

### 3.2 Execute Pre-Processing
1. **Copy template** to `/link-fix/` directory
2. **Run in dry-run mode** first:
   ```
   Execute template with dry_run = true
   Review output showing proposed changes
   ```
3. **Create backup** (automatic with template)
4. **Execute actual processing**:
   ```
   Run template with dry_run = false
   Monitor console output
   Check generated CSV log
   ```
5. **Clean up**: Delete executed template from `/link-fix/`

### 3.3 Validation
1. Check backup created in `/link-fix/backups/`
2. Review `08-phase3-preprocessing-log.csv` for processed files
3. Spot-check 2-3 high-impact files
4. Update checklist in `07-processing-order.md`

### 3.4 Rollback (if needed)
- Use rollback function in T03 template
- Restores files from timestamped backup

---

## Phase 4-6: Plugin Conversion Workflow

### Setup
1. **Open Obsidian Links plugin** settings
2. **Verify settings**:
   - ✓ Append .md extension
   - ✓ Convert wikilinks to markdown
   - ✓ Context menu enabled

### Batch Processing Steps

#### For Each Batch:
1. **Select batch size**:
   - Small directories (<20 files): Process all
   - Medium (20-100): Process 20-30 at a time
   - Large (>100): Process 50 at a time

2. **Open directory** in file explorer (left sidebar)

3. **Select files**:
   - Click first file
   - Shift+click last file in batch
   - Or Ctrl/Cmd+click individual files

4. **Convert links**:
   - Right-click on selection
   - Choose "Convert links in folder" from context menu
   - Wait for completion notification

5. **Log progress**:
   - Add entries to appropriate CSV:
     - `08-phase4-artifacts-log.csv`
     - `08-phase5-reference-log.csv`
     - `08-phase6-notes-log.csv`
   - Format: `filepath,converted,timestamp`

6. **Update tracking**:
   - Check off items in `07-processing-order.md`
   - Refresh `08-progress-dashboard.md` to see updates

### Validation Checkpoints

#### After Each Batch:
1. **Spot-check 2-3 files** for proper conversion
2. **Look for**:
   - All wikilinks converted to `[text](path.md)`
   - .md extensions added
   - No broken links
   - External links unchanged

#### After Each Directory:
1. Run validation query in console
2. Check for remaining wikilinks
3. Test internal navigation
4. Document any issues

---

## High-Risk File Handling

### Files with 150+ Links
Special care needed for:
- `notes/archive/clarity/Tags/newsletter updates.md` (343 links)
- `links/organizing-handbooks.md` (296 links)
- `notes/general-circle/general-circle.md` (275 links)

#### Process:
1. **Process individually** (not in batch)
2. **Create manual backup** first
3. **Convert using plugin**
4. **Thoroughly validate**:
   - Check file still opens
   - Verify links work
   - Ensure no content corruption
5. **Test in preview mode**

### Template Files
Files in `/tools/templates/`:
1. **Create backup** of entire templates directory
2. **Process carefully** - templates may have special syntax
3. **Test template** after conversion
4. **Verify** template variables not affected

---

## Validation Queries

### Check for Remaining Wikilinks
After each phase, search for remaining wikilinks:
```
Search: /\[\[(?!.*\|).*\]\]/
```

### Check for Missing Extensions
Search for markdown links without .md:
```
Search: /\[.*\]\([^)]+(?<!\.md)\)/
```

---

## Common Issues and Solutions

### Issue: Bulk conversion missed some files
**Solution**: Re-run on specific files, check file permissions

### Issue: External links converted incorrectly  
**Solution**: External links should be preserved - report as bug

### Issue: Broken links after conversion
**Solution**: Check if target file exists, verify path accuracy

### Issue: Performance slow on large batches
**Solution**: Reduce batch size to 20-30 files

---

## Progress Tracking Reminders

1. **Always update** the appropriate CSV log after processing
2. **Check off** completed items in `07-processing-order.md`
3. **Document issues** in phase-specific issue files
4. **Test publishing** after each major directory

---

## Emergency Procedures

### If Obsidian Crashes:
1. Restart Obsidian
2. Check last CSV log entry
3. Resume from last logged file

### If Links Break Vault:
1. Close Obsidian
2. Restore from Git backup
3. Or use T03 rollback function
4. Review what went wrong

---

*Follow these workflows carefully to ensure safe and complete link conversion.*