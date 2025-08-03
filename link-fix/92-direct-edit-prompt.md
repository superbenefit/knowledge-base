# Prompt for Direct Fragment Link Fixes

Copy this entire prompt into a new Claude chat:

---

I need you to fix 33 broken fragment links in my Obsidian vault. These are links pointing to sections that don't exist. Please edit the files directly using the filesystem tools.

## Context
A link normalization project identified 33 fragment links that point to non-existent headings. They fall into 4 patterns that need fixing.

## Files to Edit

### Pattern 1: Multi-Stakeholder Governance (11 instances)
Fix in these files:
- `F:\projects\sb-knowledge-base\notes\dao-primitives\implementation\guides\governance\implementation-guide-operational-governance.md`
- `F:\projects\sb-knowledge-base\notes\dao-primitives\implementation\guides\governance\implementation-guide-multi-stakeholder-governance.md`
- `F:\projects\sb-knowledge-base\notes\dao-primitives\implementation\guides\governance\implementation-guide-community-governance.md`
- `F:\projects\sb-knowledge-base\artifacts\guides\dao-primitives-framework\dao-primitives-implemention\implementation-guide-multi-stakeholder-governance.md`
- `F:\projects\sb-knowledge-base\artifacts\guides\dao-primitives-framework\dao-primitives-implemention\implementation-guide-operational-governance.md`
- `F:\projects\sb-knowledge-base\artifacts\guides\dao-primitives-framework\dao-primitives-implemention\implementation-guide-community-governance.md`

**Find**: `[Multi-Stakeholder Governance](tags/governance.md#multi-stakeholder-governance)`
**Replace with**: `[Multi-Stakeholder Governance](notes/dao-primitives/implementation/patterns/constituency-scale-patterns/multi-stakeholder-governance.md)`

### Pattern 2: Community Governance Fragments (10 instances)
In the same governance guide files above, remove the `#community-governance` fragment from these links:
- `[On-chain vs. off-chain](artifacts/articles/network-evolution/Building DAOs as scalable networks.md#community-governance)`
- `[Token-based governance](artifacts/articles/network-evolution/Building DAOs as scalable networks.md#community-governance)`
- `[On-chain vs. off-chain governance](artifacts/articles/network-evolution/Building DAOs as scalable networks.md#community-governance)`
- `[token-based governance](artifacts/articles/network-evolution/Building DAOs as scalable networks.md#community-governance)`
- `[token-based](artifacts/articles/network-evolution/Building DAOs as scalable networks.md#community-governance)`

Just remove `#community-governance` from each, leaving the rest of the link intact.

### Pattern 3: Quadratic Voting Fragments (10 instances)
In the same governance guide files, remove the `#quadratic-voting` fragment from these links:
- `[quadratic voting](artifacts/articles/governance-for-better-futures/Governance for better futures - Meta-governance.md#quadratic-voting)`
- `[quadratic](artifacts/articles/governance-for-better-futures/Governance for better futures - Meta-governance.md#quadratic-voting)`

Just remove `#quadratic-voting` from each.

### Pattern 4: Block Reference (1 instance)
In file: `F:\projects\sb-knowledge-base\tags\platforms.md`
**Find and delete**: `[](tags/primitives.md#^83b042)`

## Execution Steps

1. For each file listed, use filesystem:edit_file to make the replacements
2. Count the total replacements made
3. Confirm all 33 fixes were completed

## Validation
After making all edits, report:
- Total replacements made per file
- Confirmation that all 33 fragment links were fixed
- Any issues encountered

Please proceed with editing these files to fix the broken fragment links.