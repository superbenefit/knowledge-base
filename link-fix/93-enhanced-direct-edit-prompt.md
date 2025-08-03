# Enhanced Direct Edit Prompt for Fragment Link Fixes

**Copy this entire prompt into a new Claude Sonnet 3.5 chat:**

---

I need you to fix 33 broken fragment links across 7 files in my Obsidian vault at `F:\projects\sb-knowledge-base`. These are markdown links with fragments (#sections) that point to non-existent headings.

## Task Summary

Fix 4 types of broken fragment links:
1. Multi-Stakeholder Governance links (11 total)
2. Community Governance fragments (10 total) 
3. Quadratic Voting fragments (10 total)
4. One broken block reference (1 total)

## Detailed Fix Instructions

### File 1: `notes\dao-primitives\implementation\guides\governance\implementation-guide-operational-governance.md`
**Expected fixes: 7 total**
- Replace 3 instances of `[Multi-Stakeholder Governance](tags/governance.md#multi-stakeholder-governance)` with `[Multi-Stakeholder Governance](notes/dao-primitives/implementation/patterns/constituency-scale-patterns/multi-stakeholder-governance.md)`
- Remove `#community-governance` from 1 link ending with that fragment
- Remove `#quadratic-voting` from 1 link ending with that fragment

### File 2: `notes\dao-primitives\implementation\guides\governance\implementation-guide-multi-stakeholder-governance.md`
**Expected fixes: 4 total**
- Replace 2 instances of `[Multi-Stakeholder Governance](tags/governance.md#multi-stakeholder-governance)` with `[Multi-Stakeholder Governance](notes/dao-primitives/implementation/patterns/constituency-scale-patterns/multi-stakeholder-governance.md)`
- Remove `#community-governance` from 1 link
- Remove `#quadratic-voting` from 1 link

### File 3: `notes\dao-primitives\implementation\guides\governance\implementation-guide-community-governance.md`
**Expected fixes: 8 total**
- Replace 1 instance of `[Multi-Stakeholder Governance](tags/governance.md#multi-stakeholder-governance)` with `[Multi-Stakeholder Governance](notes/dao-primitives/implementation/patterns/constituency-scale-patterns/multi-stakeholder-governance.md)`
- Remove `#community-governance` from 5 different links
- Remove `#quadratic-voting` from 2 links

### File 4: `artifacts\guides\dao-primitives-framework\dao-primitives-implemention\implementation-guide-multi-stakeholder-governance.md`
**Expected fixes: 4 total**
- Replace 2 instances of Multi-Stakeholder Governance link
- Remove `#community-governance` from 1 link
- Remove `#quadratic-voting` from 1 link

### File 5: `artifacts\guides\dao-primitives-framework\dao-primitives-implemention\implementation-guide-operational-governance.md`
**Expected fixes: 5 total**
- Replace 3 instances of Multi-Stakeholder Governance link
- Remove `#community-governance` from 1 link
- Remove `#quadratic-voting` from 1 link

### File 6: `artifacts\guides\dao-primitives-framework\dao-primitives-implemention\implementation-guide-community-governance.md`
**Expected fixes: 4 total**
- Replace 1 instance of Multi-Stakeholder Governance link
- Remove `#community-governance` from 2 links
- Remove `#quadratic-voting` from 1 link

### File 7: `tags\platforms.md`
**Expected fixes: 1 total**
- Delete the entire link: `[](tags/primitives.md#^83b042)`

## Important Notes

1. When removing fragments like `#community-governance`, only remove that part - keep the rest of the link intact
2. Use filesystem:edit_file with the exact oldText and newText for each replacement
3. The full path prefix is `F:\projects\sb-knowledge-base\`
4. Total fixes should equal exactly 33

## Success Criteria

After completion, report:
- Number of replacements made in each file
- Confirmation that total equals 33
- Any errors or issues encountered

Please proceed with these edits.