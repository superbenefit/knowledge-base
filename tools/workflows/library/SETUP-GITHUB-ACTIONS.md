# GitHub Actions URL Fetching Setup Guide

This guide explains how to use GitHub Actions to fetch Discord URLs using Firecrawl, enabling Claude Code web to perform analysis without direct web access.

## Overview

**The Workflow:**
1. You trigger GitHub Action manually with parameters (start row, count)
2. GitHub Action fetches URLs using Firecrawl API
3. Results are saved to JSON files and committed back to repo
4. You tell Claude Code to pull latest changes
5. Claude Code analyzes the fetched content and updates progress

## One-Time Setup

### Step 1: Add Firecrawl API Key to GitHub Secrets

1. Go to your repository on GitHub
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `FIRECRAWL_API_KEY`
5. Value: `fc-5ad9bfcd2e47476ba5ee53356eba5e35`
6. Click **Add secret**

### Step 2: Verify Workflow File

The workflow file should already be committed at:
`.github/workflows/fetch-discord-urls.yml`

If not, ensure the files from this PR are merged.

## How to Use

### Triggering a Fetch

1. Go to **Actions** tab in your GitHub repository
2. Click **Fetch Discord URLs** workflow (left sidebar)
3. Click **Run workflow** button (right side)
4. Fill in parameters:
   - **start_row**: Row number to start from (e.g., `188`)
   - **count**: Number of URLs to fetch (e.g., `10`)
5. Click **Run workflow**

### Workflow Progress

- Watch the workflow run in real-time under the **Actions** tab
- It will:
  - ✅ Fetch URLs using Firecrawl
  - ✅ Save results to `tools/workflows/library/data/fetched-batches/`
  - ✅ Commit and push back to your branch
  - ✅ Upload results as downloadable artifact (backup)

### After Fetch Completes

In Claude Code conversation:

```
The GitHub Action completed. Please pull the latest changes and analyze the fetched URLs.
```

Claude Code will:
1. Pull the new batch JSON file
2. Read the fetched content
3. Evaluate each URL against triple-gate criteria
4. Update the progress JSON
5. Provide you with a session summary

## File Structure

```
tools/workflows/library/
├── batch_fetch.py                 # Batch fetching script (used by GitHub Action)
├── fetch_url.py                   # Single URL fetcher (for local testing)
├── data/
│   ├── superbenefit-discord-urls.csv      # Source CSV with all URLs
│   ├── link-analysis-progress.json        # Progress tracking
│   └── fetched-batches/                   # GitHub Action output
│       ├── batch-rows-188-to-197-*.json
│       └── batch-rows-198-to-207-*.json
```

## Local Testing (Optional)

You can also run the batch fetch script locally if you have Python and web access:

```bash
# From knowledge-base directory
python3 tools/workflows/library/batch_fetch.py --start-row 188 --count 10
```

This requires a `.env` file with `FIRECRAWL_API_KEY` in the repository root.

## Troubleshooting

### Workflow fails with "FIRECRAWL_API_KEY not found"

- Verify the secret is added correctly in GitHub Settings
- Secret name must be exactly `FIRECRAWL_API_KEY`

### Workflow succeeds but no URLs fetched

- Check the workflow logs for Firecrawl API errors
- Verify API key is valid and has credits
- Check if specific URLs are blocked or timing out

### No files committed

- If all fetches fail, the workflow won't create output files
- Check workflow logs for specific error messages
- Try a smaller batch or different row range

## Recommended Workflow

**For systematic analysis of all 600+ URLs:**

1. **Batch 1**: Rows 188-197 (10 URLs) - Test run
2. After Claude analyzes, review quality
3. **Batch 2**: Rows 198-217 (20 URLs)
4. **Batch 3**: Rows 218-247 (30 URLs)
5. Continue in batches of 20-30 until complete

This approach allows you to:
- Monitor quality and adjust evaluation criteria
- Catch any issues early
- Review library candidates before proceeding
- Pause/resume as needed

## Next Steps

Once setup is complete:
1. Run a test fetch (rows 188-197, count 10)
2. Tell Claude Code to pull and analyze
3. Review the analysis quality
4. Continue with larger batches

Good luck! 🚀
