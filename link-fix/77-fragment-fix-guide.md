# Fragment Link Fix Execution Guide

**Created**: 2025-08-03
**Purpose**: Fix the 109 invalid fragment links identified in validation

## Issue Summary

The Fragment Link Validator (70) found:
- **188 total fragment links**
- **109 invalid** (58% failure rate)
- **55 valid**

### Main Issues to Fix:

1. **Incorrect Pipe Syntax** (~80% of issues)
   ```markdown
   WRONG: [](tags/governance.md#Community Governance|Community Governance)
   RIGHT: [Community Governance](tags/governance.md#community-governance)
   ```

2. **Non-existent Heading Anchors** (~20% of issues)
   - Link points to heading that doesn't exist
   - Heading exists but anchor format is wrong

## Fix Process

### Step 1: Create Backup Point
```bash
1. Commit current state to git (if using version control)
2. Note the current time for backup reference
```

### Step 2: Execute Fragment Link Fixer
```bash
1. Copy T17-Fragment-Link-Fixer.md from templates to /link-fix/
2. Execute template with Templater (Alt+E)
3. Wait for completion (should take ~30 seconds)
4. Review output message
```

### Step 3: Review Fix Report
```bash
1. Open 75-fragment-fix-report.md
2. Check summary statistics
3. Review any unfixable issues
```

### Step 4: Re-validate
```bash
1. Copy T13-Fragment-Link-Validator.md to /link-fix/
2. Execute to re-check fragment links
3. Compare new results with original
```

## Expected Results

### Best Case Scenario
- All 109 invalid links fixed automatically
- 0 unfixable issues
- Re-validation shows 188/188 valid

### Likely Scenario
- ~90-100 links fixed automatically
- 5-10 manual fixes needed
- Mostly in DAO Primitives guides

### Worst Case Scenario
- Rollback available via T18-Fragment-Fix-Rollback
- Backups stored in /link-fix/backups/

## Manual Fix Guidelines

For any unfixable issues:

1. **Missing Headings**: Check if heading was renamed
2. **Complex Anchors**: Simplify to basic format
3. **Block References**: Verify block IDs exist

## Safety Features

- **Automatic Backups**: All modified files backed up
- **Rollback Template**: T18 can restore original state
- **Incremental Changes**: Only modifies files with issues

## Post-Fix Validation

After fixes complete:
1. Run Fragment Validator again
2. Spot check a few fixed files
3. Test navigation in Obsidian
4. Consider testing in preview/publishing

---

**Time Estimate**: 10-15 minutes including validation