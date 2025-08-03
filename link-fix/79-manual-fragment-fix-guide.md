# Manual Fragment Link Fix Guide - Updated

**Created**: 2025-08-03
**Purpose**: Fix the remaining 33 invalid fragment links

## Summary of Remaining Issues

The Fragment Link Fixer successfully fixed 103 links (from 109 down to 33). The remaining issues fall into just **4 unique patterns**.

## Important Discovery

Looking at `tags/governance.md`, the Multi-Stakeholder Governance heading exists but may have an anchor generation issue. The file contains:

```markdown
### [multi-stakeholder-governance](notes/dao-primitives/implementation/patterns/constituency-scale-patterns/multi-stakeholder-governance.md)
```

This suggests the fragment links SHOULD work, but there may be an Obsidian bug with how anchors are generated when the heading itself is a link.

## Recommended Fixes

### 1. Multi-Stakeholder Governance (11 instances)

**Option A - Link directly to the pattern file (RECOMMENDED):**
```markdown
CHANGE: [Multi-Stakeholder Governance](tags/governance.md#multi-stakeholder-governance)
TO:     [Multi-Stakeholder Governance](notes/dao-primitives/implementation/patterns/constituency-scale-patterns/multi-stakeholder-governance.md)
```

**Option B - Try lowercase anchor (may work):**
```markdown
CHANGE: [Multi-Stakeholder Governance](tags/governance.md#multi-stakeholder-governance)
TO:     [Multi-Stakeholder Governance](tags/governance.md#multi-stakeholder-governancenotesdao-primitivesimplementationpatternsconstituency-scale-patternsmulti-stakeholder-governancemd)
```
(This is the mangled anchor shown in available headings)

### 2. Community Governance Links (10 instances)

The article doesn't have a `#community-governance` section. Options:

**Option A - Remove the fragment (RECOMMENDED):**
```markdown
CHANGE: [On-chain vs. off-chain](artifacts/articles/network-evolution/Building DAOs as scalable networks.md#community-governance)
TO:     [On-chain vs. off-chain](artifacts/articles/network-evolution/Building DAOs as scalable networks.md)
```

**Option B - Link to the pattern instead:**
```markdown
TO:     [On-chain vs. off-chain](artifacts/patterns/community-governance.md)
```

### 3. Quadratic Voting Links (10 instances)

The article doesn't have a `#quadratic-voting` section.

**Remove the fragment:**
```markdown
CHANGE: [quadratic voting](artifacts/articles/governance-for-better-futures/Governance for better futures - Meta-governance.md#quadratic-voting)
TO:     [quadratic voting](artifacts/articles/governance-for-better-futures/Governance for better futures - Meta-governance.md)
```

### 4. Block Reference (1 instance)

In `tags/platforms.md`:
```markdown
CURRENT: [](tags/primitives.md#^83b042)
```

This is an empty link with invalid block reference. Either:
- Delete the entire link
- Or add link text: `[See primitives](tags/primitives.md)`

## Bulk Find & Replace

Use Obsidian's Find & Replace in Files (Ctrl+Shift+H):

### Fix 1: Multi-Stakeholder (11 instances)
- **Find:** `\[Multi-Stakeholder Governance\]\(tags/governance\.md#multi-stakeholder-governance\)`
- **Replace:** `[Multi-Stakeholder Governance](notes/dao-primitives/implementation/patterns/constituency-scale-patterns/multi-stakeholder-governance.md)`
- **Files:** Limit to `/dao-primitives/` folder

### Fix 2: Remove Community Governance Fragments (10 instances)
- **Find:** `#community-governance\)`
- **Replace:** `)`
- **Files:** Limit to `/dao-primitives/` folder

### Fix 3: Remove Quadratic Voting Fragments (10 instances)
- **Find:** `#quadratic-voting\)`
- **Replace:** `)`
- **Files:** Limit to `/dao-primitives/` folder

### Fix 4: Block Reference (1 instance)
- Manually edit `tags/platforms.md`
- Delete `[](tags/primitives.md#^83b042)` or replace with proper link

## Files Affected

All in DAO Primitives guides:
- `notes/dao-primitives/implementation/guides/governance/` (3 files)
- `artifacts/guides/dao-primitives-framework/dao-primitives-implemention/` (3 files)
- `tags/platforms.md` (1 file)

## Validation

After fixing, run T13-Fragment-Link-Validator again. Expected result:
- **Total Fragment Links**: 155 (33 removed/changed)
- **Valid**: 155
- **Invalid**: 0

---

**Time Estimate**: 10-15 minutes using Find & Replace