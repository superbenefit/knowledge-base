# Final Steps to Complete Link Normalization

**Status**: 99% Complete  
**Remaining Issues**: 14 embed fixes  
**Time Estimate**: 30 minutes

## Step-by-Step Actions

### 1. Fix Embed Issues (10 minutes)

Copy the T07-Fix-Embeds template to link-fix and execute:

```
1. In Obsidian, navigate to: /tools/templates/link-fix-templates/T07-Fix-Embeds.md
2. Copy the file to: /link-fix/
3. Open the copied file and run Templater (Alt+E or Cmd+E)
4. Select "All Embeds" mode when prompted
5. Wait for completion (should process 14 files)
6. Check the generated log file for confirmation
```

### 2. Verify All Fixes (5 minutes)

Run a quick validation to ensure all issues are resolved:

```
1. Copy T11-Complete-Vault-Audit to /link-fix/
2. Execute with "Quick Audit" option
3. Verify report shows:
   - 0 wikilinks remaining
   - 0 code block issues
   - 0 embed issues
```

### 3. Optional: Process Links Directory (15 minutes)

If you want 100% completion:

```
1. The /links/ directory has 30 files with external resources
2. These likely need the same relative path fixes as other directories
3. Use existing T05-Fix-Tags-Links template (it works for any directory)
4. Or skip this as it's low priority for publishing
```

### 4. Generate Final Report (5 minutes)

Document the completed project:

```
1. Run T11-Complete-Vault-Audit with "Complete Audit" option
2. Save the comprehensive report
3. Create a project completion summary
4. Update the main plan to show all phases complete
```

## Quick Command Summary

For fastest completion, run these in order:

1. **Fix Embeds**: Execute T07-Fix-Embeds in "All Embeds" mode
2. **Quick Check**: Run T11 audit to confirm fixes
3. **Done!**: Project complete and ready for publishing

## Expected Final State

- ✅ All internal links use absolute markdown paths
- ✅ No wikilinks remain in the vault
- ✅ All embeds use proper syntax
- ✅ Code blocks preserve their example syntax
- ✅ Compatible with Enveloppe and Quartz publishing
- ✅ Complete audit trail and documentation

## Notes

- The updated templates (T06 and T07) are already fixed and ready to use
- All code block issues have been manually resolved
- Only the embed issues remain to be fixed
- The project is functionally complete once embeds are fixed

Ready to wrap this up! 🎉