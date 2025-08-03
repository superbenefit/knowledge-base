# Templater Scripts for Phase 4 Edge Case Cleanup

**Created**: 2025-08-02 02:15:00  
**Purpose**: Fix remaining link issues after bulk conversion

## Templates Created

### 1. T04-Find-Problem-Links

**Location**: `/tools/templates/link-fix-templates/T04-Find-Problem-Links.md`  
**Purpose**: Scan artifacts folder for files with problematic link patterns

**Usage**:
1. Create a new note or open any existing note
2. Run template: `Ctrl+P` → "Templater: Insert template" → "T04-Find-Problem-Links"
3. Review the generated report showing all files with issues

**What it finds**:
- Angle bracket links: `[text](<path>)`
- Relative paths needing `/`: `[text](artifacts/...)`
- Obsidian URI links: `obsidian://open?vault=...`
- Anchors with spaces: `[text](path#anchor with spaces)`

**Output**: Detailed report with:
- Total files scanned
- Files with issues (sorted by problem count)
- Breakdown by issue type
- File list for easy processing

### 2. T04-Fix-Artifact-Links

**Location**: `/tools/templates/link-fix-templates/T04-Fix-Artifact-Links.md`  
**Purpose**: Fix problematic links in individual artifact files

**Usage**:
1. Open a file identified by T04-Find-Problem-Links
2. Run template: `Ctrl+P` → "Templater: Insert template" → "T04-Fix-Artifact-Links"
3. Review the changes summary that gets inserted

**What it fixes**:
1. **Angle bracket links** → Standard markdown links
   - `[text](<path#anchor>)` → `[text](/path#anchor)`
2. **Relative paths** → Absolute paths
   - `[text](artifacts/guide.md)` → `[text](/artifacts/guide.md)`
3. **Obsidian URIs** → Standard paths
   - `obsidian://open?vault=...&file=artifacts%2Fguide` → `/artifacts/guide.md`
4. **Anchor spaces** → Hyphenated anchors
   - `#Community Governance` → `#community-governance`

**Features**:
- Shows clear status at the top: ✅ ALL FIXED or ⚠️ NEEDS ATTENTION
- Lists any remaining problematic links that couldn't be fixed
- Only works on files in `/artifacts/` folder
- Shows detailed change log
- Provides summary of changes made
- Safe - original content stored before modifications

## Recommended Workflow

1. **Run T04-Find-Problem-Links** to identify files needing attention
2. **Process files** starting with those having the most issues
3. **Run T04-Fix-Artifact-Links** on each problematic file
4. **Review changes** in the inserted summary
5. **Delete the summary** after reviewing (it's just for your information)
6. **Test a few links** to ensure they work correctly
7. **Run T04-Find-Problem-Links again** to verify all issues resolved

## Safety Notes

- Templates only modify files in `/artifacts/` folder
- Each change is logged in the summary
- Original content is preserved in memory during execution
- Can set `processFile = false` in template for dry run mode

## Next Steps

After cleaning up all edge cases:
1. Validate links work correctly in Obsidian
2. Test publishing to Knowledge Garden
3. Create git commit to save progress
4. Move on to next phase (Tags, Root files, or Notes)
