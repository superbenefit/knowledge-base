# Obsidian Links Plugin Settings

**Date Configured**: August 01, 2025  
**Plugin Version**: (Check in Community Plugins)  
**Purpose**: Link normalization for SuperBenefit Knowledge Base

## Current Configuration

### Core Settings

- ✅ **Append .md Extension**: `true` (`onConvertToMdlinkAppendMdExtension`)
  - Automatically adds `.md` to markdown links when converting from wikilinks
  
- ✅ **Convert Links in Folder**: `true` (`ffConvertLinksInFolder`)
  - Enables batch folder conversion feature (excellent for our bulk processing needs!)

- ✅ **Skip Frontmatter in Note-Wide Commands**: `true` (`skipFrontmatterInNoteWideCommands`)
  - Prevents accidental conversion of frontmatter content

### Context Menu Options

The following options are enabled in the right-click context menu:

**Conversion Commands**:
- ✅ Convert to Markdown Link (`convertToMakrdownLink`)
- ✅ Convert All Links to Markdown Links (`convertAllLinksToMdLinks`)

**Link Management**:
- ✅ Edit Link Text
- ✅ Set Link Text
- ✅ Set Link Text from Clipboard
- ✅ Edit Link Destination
- ✅ Copy Link Destination
- ✅ Unlink
- ✅ Replace Link
- ✅ Embed/Unembed Link
- ✅ Delete Link
- ✅ Create Link
- ✅ Create Link from Clipboard

**Copy Functions**:
- ✅ Copy Link to Clipboard
- ✅ Copy Link to Heading to Clipboard
- ✅ Cut Link to Clipboard

### Other Notable Settings

- **Title Separator**: ` • ` (for multi-part titles)
- **Autoselect Word on Create Link**: `true`
- **Delete Unreferenced Link Target**: `true`

## Usage Notes

1. **Primary Commands for Our Project**:
   - "Convert all links to Markdown links" - Use this for each file
   - "Convert links in folder" - Use this for batch processing directories

2. **Keyboard Shortcuts** (if configured):
   - Check Settings → Hotkeys → search for "Links" to see/set shortcuts

3. **Important**: The plugin will NOT remove leading slashes - we need our pre-processing script for that.

## Backup of Raw Configuration

```json
{
  "onConvertToMdlinkAppendMdExtension": true,
  "ffConvertLinksInFolder": true,
  "skipFrontmatterInNoteWideCommands": true,
  "contexMenu": {
    "convertToMakrdownLink": true,
    "convertAllLinksToMdLinks": true
  }
}
```

---

*Configuration documented as part of the link normalization project*
