# Fix Code Block Issues - Manual Script

## Files to Fix

1. `tools/plugin-notes/dataview/dataview-queries.md`
2. `tools/templates/link-fix-templates/T06-Protect-Code-Blocks.md` 
3. `notes/rpp/rpp-playbooks/playbook-working-docs/07-resource-audit.md`

## Issue

These files have links inside code blocks that were incorrectly converted from wikilinks to markdown format. They need to be reverted inside the code blocks only.

## Solution

Since there are only 3 files, we can fix them manually:

### File 1: dataview-queries.md
Look for code blocks containing markdown links that should be wikilinks or plain text examples.

### File 2: T06-Protect-Code-Blocks.md
This is the template we just fixed - it should be OK now.

### File 3: 07-resource-audit.md
Look for the Resource Directory code block with converted links.

## Manual Fix Process

1. Open each file
2. Find code blocks (between ``` markers)
3. Look for `[text](path)` patterns that should be `[[path]]` or plain text
4. Revert these back to their original format
5. Save the file

## Alternative: Direct Edit

Let me check the specific issues in each file and fix them directly.