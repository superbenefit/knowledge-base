# Discord Link Analysis System Instructions

## IMPORTANT: This is an automated instruction file for AI assistants. When prompted to "follow start-link-analysis.md", execute these instructions completely.

### System Overview
This system analyzes Discord links from a CSV file, tracking progress automatically and continuing until conversation limits are reached.

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
- Read rows starting from `current_row` in the CSV file, continuing until conversation limits
- If a row already has a Status (not empty), skip it 
- Focus only on rows where Status is empty or says "Needs analysis"
- Save progress every 5 analyzed links to prevent data loss

#### 3. Analyze Each Link
For each link in the batch:

1. **Primary Method** (highest reliability):
   - Use `obsidian-mcp-tools:fetch` as the primary tool
   - This has proven ~80% more reliable than other methods
   
2. **Backup Method** (if primary fails):
   - Use `firecrawl_scrape` with optimized settings:
     - `skipTlsVerification: true`
     - `timeout: 30000`
     - `waitFor: 3000`
     - `formats: ["markdown"]`

3. **Fallback Method** (for context only):
   - Use `web_search` to find information about the domain/site
   - Do NOT use `web_fetch` (blocked by permissions for Discord links)
   
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
After processing until conversation limits, show:
```
Session Analysis Complete:
- Processed rows: [X] to [Y]
- Links analyzed: [count]
- Status breakdown:
  - Working: [count]
  - Dead: [count]
  - Other: [counts]
- Library candidates found: [count]
- Next session starts at row: [Z]

Session ended due to: [conversation limit reached / user stop / completion]
```

### Error Handling
- If `obsidian-mcp-tools:fetch` fails, try `firecrawl_scrape` with optimized settings
- If both methods fail, mark as "Error" with specific reason ("Connection failed", "SSL error", etc.)
- If CSV operations fail, report the error and stop
- Save progress after every 5 links to prevent data loss
- If interrupted, the next session will resume from the last saved position

### Tool Reliability Notes (Updated July 2025)
- **obsidian-mcp-tools:fetch**: Most reliable method (~80% success rate)
- **firecrawl_scrape**: Backup method (requires specific configuration for reliability)
- **web_fetch**: Blocked for Discord links due to permissions
- **web_search**: Useful for context but doesn't retrieve actual content

### Efficiency Rules
1. Keep notes brief and focused
2. Don't re-analyze links that already have a Status
3. Save incrementally to prevent data loss
4. Try obsidian-mcp-tools:fetch first (most reliable), only use backup methods if needed
5. Continue until conversation limits are approached or all links processed
6. Document method used in progress tracking for debugging

### Special Instructions
- Links marked with "LIBRARY:" should be tracked for later full analysis
- If you see patterns (e.g., all links from a domain are dead), note it
- Preserve all existing data in the CSV - only update Status and Notes columns

### End of Instructions
When these steps are complete or conversation limits are reached, provide the session summary and wait for user input.