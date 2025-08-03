# 🎯 Final Action Steps - Link Normalization

**Time Required**: 15 minutes  
**Current Status**: 14 embed issues remaining

## Step 1: Fix Embeds (5 minutes)

```markdown
1. In Obsidian file explorer:
   - Navigate to: /tools/templates/link-fix-templates/
   - Find: T07-Fix-Embeds.md
   - Right-click → Copy

2. Navigate to: /link-fix/
   - Right-click → Paste
   - You should now have the template in /link-fix/

3. Open the copied T07-Fix-Embeds.md file
   - Press Alt+E (Windows) or Cmd+E (Mac) to run Templater
   - When prompted, select: "All Embeds"
   - Wait for completion message

4. Check the output:
   - Should show 14 files processed
   - Look for the generated CSV log file
```

## Step 2: Validate Fix (5 minutes)

```markdown
1. Copy T11-Complete-Vault-Audit.md:
   - From: /tools/templates/link-fix-templates/
   - To: /link-fix/

2. Run the audit:
   - Open the copied file
   - Press Alt+E or Cmd+E
   - Select: "Quick Audit"

3. Review results:
   - Should show 0 wikilinks
   - Should show 0 embed issues
   - Should show 0 code block issues
```

## Step 3: Celebrate! (5 minutes)

```markdown
1. Review the final audit report
2. Check a few converted files to see the results
3. Consider running "Complete Audit" for comprehensive report
4. Save/backup the /link-fix/ folder for reference
```

## Expected Results

After these steps:
- ✅ All wikilinks → markdown links
- ✅ All paths → absolute from vault root
- ✅ All embeds → proper syntax
- ✅ Full publishing compatibility

## If Any Issues

If the embed fix encounters errors:
1. Check that all 14 files exist
2. Try running on individual files first
3. The template has "Test Mode" option

If validation shows remaining issues:
1. Note which files have problems
2. Check if they're in excluded directories
3. Consider manual fixes for edge cases

## Success Criteria

The project is complete when:
- T11 audit shows 0 issues across all categories
- All internal links use format: `[text](/path/to/file.md)`
- All note embeds use format: `![[path/to/note]]`
- No wikilinks remain: `[[link]]`

---

**You're just 15 minutes away from completing this entire project!** 🚀

Once done, your vault will be fully normalized and ready for reliable publishing through both Enveloppe and Quartz systems.