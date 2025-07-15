# Timeline Template System (Improved)

Clean, efficient templates for creating a meeting timeline system without cluttering your vault.

## Core Philosophy
- **Minimal queries**: Each page uses 1-2 efficient Dataview queries max
- **Create on demand**: Only make timeline pages when you need them
- **Single source of truth**: Dates live in frontmatter, everything else is dynamic
- **Progressive enhancement**: Start simple, add features as needed

## Templates Overview

### 📅 Core Timeline Templates

#### timeline-monthly-simple.md
**What**: Creates a clean monthly timeline with meetings grouped by week  
**When**: Standard monthly view - recommended default  
**Output**: Single efficient query, clean navigation, meeting count

#### timeline-year.md  
**What**: Annual overview showing all months at a glance  
**When**: For year-end reviews or planning  
**Output**: Month grid, summary table, yearly statistics

#### timeline-index-improved.md
**What**: Master navigation page for all timelines  
**When**: Create once as your main timeline hub  
**Output**: Single table of all timeline pages with meeting counts

### 🔧 Setup & Maintenance Tools

#### batch-date-updater-enhanced.md
**What**: Adds dates to hundreds of files automatically  
**When**: Initial setup (saves hours of manual work)  
**Features**:
- Test mode for safe preview
- Handles 10+ date formats
- Recursive folder processing
- Detailed failure reporting

#### multi-meeting-splitter.md
**What**: Splits consolidated meeting files into individual files  
**When**: For historical files containing multiple meetings  
**Preserves**: Original files remain untouched and linked

#### coverage-analyzer.md
**What**: Shows timeline completeness and gaps  
**When**: To audit your meeting system  
**Shows**: Missing dates, gaps in coverage, files needing attention

### 🛠️ Helper Tools

#### date-extraction-helper.md
**What**: Tests date extraction on a single file  
**When**: When batch updater can't parse a specific filename  
**Use**: For debugging problem files

## Quick Start (10 minutes)

1. **Add dates to existing meetings** (5 min)
   - Create new note → Insert `batch-date-updater-enhanced` 
   - Process each meeting folder in test mode first

2. **Create timeline index** (1 min)
   - Create `notes/general-circle/timeline/timeline.md`
   - Insert `timeline-index-improved` template

3. **Create your first monthly timeline** (1 min)
   - Create `notes/general-circle/timeline/2024-01.md` (or any YYYY-MM)
   - Insert `timeline-monthly-simple` template

4. **Check coverage** (optional)
   - Create temporary note → Insert `coverage-analyzer`
   - Identify any gaps or issues

## Template Selection Guide

```
Need to see meetings for a specific month?
→ Use timeline-monthly-simple

Want an annual overview?
→ Use timeline-year

Setting up the system initially?
→ Use batch-date-updater-enhanced

Have old consolidated meeting files?
→ Use multi-meeting-splitter

Want to audit completeness?
→ Use coverage-analyzer
```

## Design Principles

1. **Performance First**: Maximum 2 Dataview queries per page
2. **Progressive Disclosure**: Start simple, complexity is opt-in
3. **No Empty Pages**: Create timelines only when needed
4. **Maintainable**: Templates are readable and modifiable

## File Naming Conventions

- Monthly timelines: `YYYY-MM.md` (e.g., `2024-01.md`)
- Yearly timelines: `YYYY.md` (e.g., `2024.md`)
- Index: `timeline.md`
- All in: `notes/general-circle/timeline/`

## Requirements
- Templater plugin (configured with templates folder)
- Dataview plugin (for dynamic content)
- Meeting files tagged with `#meetings`
- Dates in frontmatter as `DD-MM-YYYY`