# Discord Links Analysis System

## Instructions for AI Assistant

When this file is referenced, execute the following steps automatically:

### Step 1: Check Progress Status
1. Read the progress file at: `~/Documents/GitHub/knowledge-base/notes/library/link-analysis-progress.json`
2. If file doesn't exist, create it with initial state (see template below)
3. Determine the next batch to process

### Step 2: Load Current Batch
1. Read the CSV file: `~/Documents/GitHub/knowledge-base/notes/library/superbenefit-discord-urls.csv`
2. Load only rows from `current_row` to `current_row + batch_size - 1`
3. Skip any rows that already have both Status and Notes filled

### Step 3: Analyze Links (Max 20 per session)
For each link in the current batch:
1. Check if URL is accessible (use HEAD request or quick scrape)
2. Assign status:
   - `Working` - Link loads successfully
   - `Dead` - 404 or connection error
   - `Redirect` - URL redirects elsewhere
   - `Paywall` - Content behind paywall
   - `Private` - Requires login/authentication
   - `Skip` - Not relevant for library
   
3. Add brief note (max 15 words):
   - Topic/category (e.g., "DAO governance", "Web3 impact", "Technical guide")
   - Relevance assessment (e.g., "Highly relevant", "Tangential", "Not aligned")
   - Action suggestion (e.g., "Add to library", "Review later", "Skip")

### Step 4: Update Files
1. Update the CSV file directly with Status and Notes
2. Save progress every 5 links
3. Update progress file with new `current_row` and timestamp

### Step 5: Report Progress
Display a brief summary:
```
Batch Complete!
- Processed rows: [X] to [Y]
- Working links: [count]
- Dead links: [count]
- Links marked for library: [count]
- Next batch starts at row: [Z]
```

### Step 6: Check Continuation
- If more rows remain AND session is stable, ask: "Continue with next batch? (yes/no)"
- If "yes", go to Step 2
- If "no" or session approaching limit, save state and exit

## Progress File Template
```json
{
  "total_rows": null,
  "current_row": 1,
  "batch_size": 20,
  "analyzed_count": 0,
  "last_updated": null,
  "status_counts": {
    "Working": 0,
    "Dead": 0,
    "Redirect": 0,
    "Paywall": 0,
    "Private": 0,
    "Skip": 0
  },
  "session_history": []
}
```

## Error Handling
- If CSV read fails: Report error and stop
- If progress file corrupted: Scan CSV to find last analyzed row
- If link check times out: Mark as "Timeout" and continue
- If approaching token limit: Save progress and exit gracefully

## Quick Reference
- CSV Path: `~/Documents/GitHub/knowledge-base/notes/library/superbenefit-discord-urls.csv`
- Progress Path: `~/Documents/GitHub/knowledge-base/notes/library/link-analysis-progress.json`
- Batch Size: 20 links per session
- Save Frequency: Every 5 links