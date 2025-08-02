# Quick Reference Guide - Link Conversion

**Created**: 2025-08-01  
**Purpose**: One-page reference for link conversion execution  
**File**: 65-quick-reference-guide.md

## Link Pattern Handling Reference

| Pattern | Example | Tool/Template | Notes |
|---------|---------|---------------|-------|
| Wikilinks | `[[path]]` | Obsidian Links Plugin | ✅ Automatic |
| Leading slash wiki | `[[/path]]` | T03 → Plugin | Pre-process first |
| Leading slash MD | `[text](/path)` | T03 → Plugin | Pre-process first |
| Relative parent | `[text](../path)` | T08 | Convert to absolute |
| Relative current | `[text](./path)` | T08 | Convert to absolute |
| Fragments | `[[path#heading]]` | Plugin (partial) | Verify after |
| Block refs | `[[path^block]]` | Manual review | Plugin preserves |
| Embeds | `![[file]]` | Manual | Consider context |
| External | `[text](https://)` | None needed | ✅ Already correct |

## Template Execution Order

### Pre-Processing Phase
1. **T03-Remove-Leading-Slashes** - Run on all directories
2. **T08-Resolve-Relative-Paths** - Run after T03
3. Validate with spot checks

### Plugin Conversion Phase
1. Process by directory (lowest → highest complexity)
2. `/tags/` → `/artifacts/` → `/notes/subdirs` → root files
3. Track in CSV logs

### Post-Processing Phase
1. **T09-Post-Conversion-Validator** - Full vault scan
2. **T11-Complete-Vault-Audit** - Health check
3. Address issues found

## Validation Checkpoints

✓ **Before Starting**
- [ ] Pre-conversion checklist (57) complete
- [ ] Backups verified
- [ ] Git commit clean

✓ **During Processing**
- [ ] T10 monitoring active
- [ ] Progress logged to CSVs
- [ ] Anomalies < 5%

✓ **After Completion**
- [ ] No wikilinks remain
- [ ] All links have .md extension
- [ ] Publishing test passes

## Decision Tree for Edge Cases

```
Encountered unusual link?
├── Is it in a code block?
│   └── YES → Skip (preserve as-is)
│   └── NO → Continue
├── Is it Templater syntax?
│   └── YES → Manual review
│   └── NO → Continue
├── Is it a valid pattern?
│   └── YES → Apply appropriate template
│   └── NO → Log for manual review
```

## Emergency Procedures

### Quick Rollback Commands

```bash
# Git rollback (fastest)
git reset --hard HEAD~1

# Template backup restore
# Run rollback function in template

# Manual file restore
cp /link-fix/backups/[date]/file.md file.md
```

### Critical Contacts
- Backup location: `/link-fix/backups/`
- Git remote: `[your-remote-url]`
- Issue log: Update in real-time

## Common Issues & Solutions

| Issue | Solution | Prevention |
|-------|----------|------------|
| Plugin skips files | Check for syntax errors | Pre-validate |
| Broken fragments | Run T09 validator | Test samples |
| Relative paths wrong | Verify with T08 test mode | Use dry-run |
| Rollback needed | Use Git first, then backups | Commit often |

## Command Snippets

### Check link patterns
```javascript
// Find remaining wikilinks
/\[\[([^\]]+)\]\]/

// Find missing .md extensions
/\[([^\]]+)\]\(([^)]+(?<!\.md))\)/

// Find relative paths
/\[([^\]]+)\]\(\.\.?\//
```

### Quick validation
```bash
# Count wikilinks
grep -r "\[\[" --include="*.md" | wc -l

# Find files with issues
grep -l "\[\[" --include="*.md" notes/
```

## Time Estimates

| Task | Duration | Batch Size |
|------|----------|------------|
| T03 slash removal | 5 min | Per 100 files |
| T08 relative paths | 10 min | Per 50 files |
| Plugin conversion | 15 min | Per 20 files |
| T09 validation | 20 min | Full vault |
| Manual review | 2 min | Per file |

## Progress Tracking

Update these files continuously:
- `07-processing-order.md` - Check off completed
- `08-progress-dashboard.md` - Auto-updates from CSVs
- Phase-specific CSV logs - One row per file

## Quality Gates

**Must pass before proceeding:**
1. Pre-processing validation shows 0 issues
2. Sample of 10 files converts correctly
3. No critical anomalies in monitoring
4. Rollback tested and working

## Final Checklist

Before declaring complete:
- [ ] All directories processed
- [ ] T09 validation shows 100% success
- [ ] T11 audit score > 80/100
- [ ] Publishing pipeline builds
- [ ] Team notified of completion
- [ ] Documentation updated

---

*Keep this guide accessible during conversion. Update with lessons learned.*