# Discord Link Analysis System Instructions

## IMPORTANT: This is an automated instruction file for AI assistants. When prompted to "follow start-link-analysis.md", execute these instructions completely.

### System Overview
This system analyzes Discord links from a CSV file in batches of 20, tracking progress automatically.

### Files Involved
1. **Source CSV**: `~/Documents/GitHub/knowledge-base/notes/library/superbenefit-discord-urls.csv`
2. **Progress Tracker**: `~/Documents/GitHub/knowledge-base/notes/library/link-analysis-progress.json`
3. **This Instruction File**: `~/Documents/GitHub/knowledge-base/notes/library/start-link-analysis.md`

### Step-by-Step Instructions

#### 1. First, Check Progress
Read the progress file to determine where to start:
```
~/Documents/GitHub/knowledge-base/notes/library/link-analysis-progress.json
```

If the file doesn't exist, create it with:
```json
{
  "current_row": 1,
  "total_analyzed": 0,
  "last_session": null,
  "status_counts": {
    "Working": 0,
    "Dead": 0,
    "Redirect": 0,
    "Paywall": 0,
    "Error": 0,
    "Skip": 0
  },
  "library_candidates": [],
  "sessions": []
}
```

#### 2. Read the Next Batch
- Read 20 rows starting from `current_row` in the CSV file
- If a row already has a Status (not empty), skip it and don't count it toward the 20
- Focus only on rows where Status is empty or says "Needs analysis"

#### 3. Analyze Each Link
For each link in the batch:

1. **Quick Check** (don't fetch full content unless necessary):
   - Use firecrawl_scrape with minimal formats: `["links"]`
   - Check if the URL is accessible
   
2. **Determine Status**:
   - `Working` - Link loads successfully
   - `Dead` - 404 or similar error
   - `Redirect` - Goes to a different page (note if it's still relevant)
   - `Paywall` - Content behind login/payment
   - `Error` - Other access issues
   - `Skip` - Can't determine or not relevant

3. **Add Brief Note** (10-15 words max):
   - Topic/content type
   - Relevance to SuperBenefit's focus (DAOs, governance, web3 impact, etc.)
   - If relevant, mark with "LIBRARY:" prefix

#### 4. Update the CSV
- Read the entire CSV file
- Update only the rows you analyzed
- Write the entire file back with updates
- Use proper CSV handling to preserve formatting

#### 5. Update Progress
After each batch:
```json
{
  "current_row": [next row to process],
  "total_analyzed": [increment by batch size],
  "last_session": "[timestamp]",
  "status_counts": {[update counts]},
  "library_candidates": [add any LIBRARY: marked links],
  "sessions": [append session info]
}
```

#### 6. Report Results
After processing the batch, show:
```
Batch Analysis Complete:
- Processed rows: [X] to [Y]
- Links analyzed: [count]
- Status breakdown:
  - Working: [count]
  - Dead: [count]
  - Other: [counts]
- Library candidates found: [count]
- Next batch starts at row: [Z]

Continue with next batch? (The user will respond yes/no)
```

### Error Handling
- If a link times out, mark as "Error" with note "Timeout"
- If CSV operations fail, report the error and stop
- Save progress after every 5 links to prevent data loss
- If interrupted, the next session will resume from the last saved position

### Efficiency Rules
1. Keep notes brief and focused
2. Don't re-analyze links that already have a Status
3. Save incrementally to prevent data loss
4. Use minimal API calls per link
5. Stop at exactly 20 new analyses per batch

### Special Instructions
- Links marked with "LIBRARY:" should be tracked for later full analysis
- If you see patterns (e.g., all links from a domain are dead), note it
- Preserve all existing data in the CSV - only update Status and Notes columns

### End of Instructions
When these steps are complete, wait for user input before proceeding to the next batch.