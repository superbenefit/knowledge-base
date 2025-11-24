---
name: syncing-knowledge-garden
description: Syncs the sb-knowledge-base Obsidian vault to the knowledge-garden Quartz site. Use after reorganizing content in Obsidian or when the vault has been updated and the Quartz site needs to match.
---

# Syncing Knowledge Base to Knowledge Garden

## Overview

This skill synchronizes content from **sb-knowledge-base** (Obsidian vault) to **knowledge-garden** (Quartz static site). The vault is the source of truth—all content reorganization should happen in Obsidian first, then sync to Quartz.

## When to Use

- After reorganizing artifacts in Obsidian
- After adding or editing content in the vault
- When preparing to test a Quartz build with updated content

## Repository Structure

**sb-knowledge-base** (source):
```
sb-knowledge-base/
├── artifacts/       ← Content to sync
├── links/
├── notes/
├── tags/
└── tools/
```

**knowledge-garden** (target):
```
knowledge-garden/
├── content/
│   └── artifacts/   ← Sync destination
├── quartz/
└── quartz.config.ts
```

## Workflow

### 1. Locate Repositories

Find where both repos are cloned on your machine. Common locations:

```bash
# Find sb-knowledge-base
find ~ -type d -name "sb-knowledge-base" 2>/dev/null | head -5

# Find knowledge-garden
find ~ -type d -name "knowledge-garden" 2>/dev/null | head -5
```

Set variables for your paths:
```bash
KB_REPO="/path/to/sb-knowledge-base"
KG_REPO="/path/to/knowledge-garden"
```

### 2. Verify Clean State

Both repos should have no uncommitted changes before syncing:

```bash
cd "$KB_REPO" && git status
cd "$KG_REPO" && git status
```

### 3. Sync Artifacts

```bash
rm -rf "$KG_REPO/content/artifacts"/*
cp -r "$KB_REPO/artifacts"/* "$KG_REPO/content/artifacts"/
```

### 4. Verify Sync

```bash
# Compare file counts
echo "Source:" && find "$KB_REPO/artifacts" -name "*.md" | wc -l
echo "Target:" && find "$KG_REPO/content/artifacts" -name "*.md" | wc -l
```

### 5. Test Build

```bash
cd "$KG_REPO"
npx quartz build
```

## Quick One-Liner

For teammates who have both repos in the same parent directory:

```bash
# From parent directory containing both repos
rm -rf knowledge-garden/content/artifacts/* && cp -r sb-knowledge-base/artifacts/* knowledge-garden/content/artifacts/
```

## Validation Checklist

- [ ] sb-knowledge-base is on correct branch
- [ ] knowledge-garden is on correct branch
- [ ] Both repos have clean git status
- [ ] File counts match after sync
- [ ] `npx quartz build` succeeds
- [ ] Spot-check a few pages in dev server

## Troubleshooting

### Build fails with type errors
The Quartz type definitions may not match the new content structure. Check `content/types/release.md` and `quartz/types/typeRegistry.ts`.

### Missing files after sync
Ensure you used `cp -r` (recursive) and included the trailing `/*` to copy contents, not the folder itself.

### Links broken on site
Content should be reorganized IN Obsidian first (which auto-updates links), then synced. If you moved files outside Obsidian, links won't be updated.

## Notes

- **Source of truth**: sb-knowledge-base (the Obsidian vault)
- **Never edit content directly in knowledge-garden**—it will be overwritten on next sync
- Always reorganize content in Obsidian to preserve internal links
