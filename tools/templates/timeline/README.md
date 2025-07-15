# Timeline Template System (Simplified)

This folder contains templates for creating a meeting timeline system. We kept it minimal - just what you actually need.

## Why These Templates?

Instead of creating 40+ empty timeline pages that clutter your vault, this system lets you:
1. Add dates to all meeting files quickly (one-time setup)
2. Create timeline pages only when you need them
3. Have those pages automatically populate with meeting data

## The Templates

### 1. timeline-monthly.md
**What it does:** Creates a single month's timeline page  
**When to use:** Whenever you want to see a specific month's meetings  
**How:** Create a new file named `YYYY-MM.md` in the timeline folder and apply this template

### 2. timeline-index.md  
**What it does:** Creates a master list of all your timeline pages  
**When to use:** Once, to create the main navigation page  
**How:** Create `timeline.md` in the timeline folder and apply this template

### 3. batch-date-updater.md
**What it does:** Adds dates to hundreds of meeting files automatically  
**When to use:** Once during initial setup (saves hours of manual work)  
**How:** Run from any file, point it at a folder of meetings

### 4. date-extraction-helper.md
**What it does:** Tests date extraction on a single file  
**When to use:** When the batch updater fails on specific files  
**How:** Run from the problem file to see what date would be extracted

### 5. multi-meeting-splitter.md
**What it does:** Splits consolidated meeting files into individual files  
**When to use:** For old meeting notes files that contain multiple meetings  
**How:** Run the template, select the source file, and it creates individual meeting files

This handles special cases like:
- DAO Primitives consolidated notes (2022-2024)
- RPP Planning workstream notes (Aug-Nov 2023)
- WP/WREEP consolidated notes

The original files are preserved for reference and linked from the new files.

## Why Not Pre-Generate Everything?

We could create all 43 monthly timeline pages at once, but:
- It clutters your vault with empty pages
- You might not care about months with few/no meetings  
- Pages auto-populate anyway when you create them
- Better to create timeline pages as you actually need them

This way you get the same result with less clutter and more flexibility.