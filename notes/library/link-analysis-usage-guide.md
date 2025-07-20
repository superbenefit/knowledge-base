# How to Use the Discord Link Analysis System

## Quick Start
Simply tell the AI: **"follow start-link-analysis.md"**

The system will automatically:
1. Check where it left off
2. Process the next 20 links
3. Update your CSV file
4. Save progress
5. Ask if you want to continue

## What It Does
- Analyzes Discord links from your CSV file in batches
- Checks if links are working, dead, redirected, etc.
- Adds brief notes about relevance to SuperBenefit
- Tracks library candidates for deeper analysis
- Saves progress automatically

## Files Used
- **Source**: `superbenefit-discord-urls.csv`
- **Progress**: `link-analysis-progress.json`
- **Instructions**: `start-link-analysis.md`

## Manual Control
- To start from a specific row, edit `current_row` in the progress file
- To reset completely, delete the progress file
- To skip a batch, just say "no" when asked to continue

## Understanding the Output
After each batch, you'll see:
- Which rows were processed
- Status breakdown (Working, Dead, etc.)
- Any library candidates found
- Where the next batch will start

## Tips
- The system skips already-analyzed links automatically
- Progress is saved every 5 links to prevent data loss
- Library candidates are marked with "LIBRARY:" prefix
- Each session is logged with timestamp

## Troubleshooting
- If it stops unexpectedly, just run "follow start-link-analysis.md" again
- Check the progress file to see where it left off
- The system will resume from the last saved position