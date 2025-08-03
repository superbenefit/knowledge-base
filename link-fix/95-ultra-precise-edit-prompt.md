# Ultra-Precise Direct Edit Prompt

**Copy this ENTIRE prompt into a new Claude Sonnet 3.5 chat with filesystem MCP access:**

---

Please fix exactly 33 broken fragment links in my Obsidian vault. Use filesystem:edit_file to make these specific replacements.

## Setup
- Vault location: `F:\projects\sb-knowledge-base`
- Total fixes needed: 33
- Files to edit: 7

## Exact Edits Required

### Edit Set 1: Multi-Stakeholder Governance (11 instances)

**Find this exact text:**
```
[Multi-Stakeholder Governance](tags/governance.md#multi-stakeholder-governance)
```

**Replace with:**
```
[Multi-Stakeholder Governance](notes/dao-primitives/implementation/patterns/constituency-scale-patterns/multi-stakeholder-governance.md)
```

**In these files:**
- `notes\dao-primitives\implementation\guides\governance\implementation-guide-operational-governance.md` (3 times)
- `notes\dao-primitives\implementation\guides\governance\implementation-guide-multi-stakeholder-governance.md` (2 times)
- `notes\dao-primitives\implementation\guides\governance\implementation-guide-community-governance.md` (1 time)
- `artifacts\guides\dao-primitives-framework\dao-primitives-implemention\implementation-guide-multi-stakeholder-governance.md` (2 times)
- `artifacts\guides\dao-primitives-framework\dao-primitives-implemention\implementation-guide-operational-governance.md` (3 times)
- `artifacts\guides\dao-primitives-framework\dao-primitives-implemention\implementation-guide-community-governance.md` (1 time)

### Edit Set 2: Remove #community-governance (10 instances)

Make these exact replacements:

1. `[On-chain vs. off-chain](artifacts/articles/network-evolution/Building DAOs as scalable networks.md#community-governance)` 
   → `[On-chain vs. off-chain](artifacts/articles/network-evolution/Building DAOs as scalable networks.md)`

2. `[Token-based governance](artifacts/articles/network-evolution/Building DAOs as scalable networks.md#community-governance)`
   → `[Token-based governance](artifacts/articles/network-evolution/Building DAOs as scalable networks.md)`

3. `[On-chain vs. off-chain governance](artifacts/articles/network-evolution/Building DAOs as scalable networks.md#community-governance)`
   → `[On-chain vs. off-chain governance](artifacts/articles/network-evolution/Building DAOs as scalable networks.md)`

4. `[token-based governance](artifacts/articles/network-evolution/Building DAOs as scalable networks.md#community-governance)`
   → `[token-based governance](artifacts/articles/network-evolution/Building DAOs as scalable networks.md)`

5. `[token-based](artifacts/articles/network-evolution/Building DAOs as scalable networks.md#community-governance)`
   → `[token-based](artifacts/articles/network-evolution/Building DAOs as scalable networks.md)`

### Edit Set 3: Remove #quadratic-voting (10 instances)

Make these exact replacements:

1. `[quadratic voting](artifacts/articles/governance-for-better-futures/Governance for better futures - Meta-governance.md#quadratic-voting)`
   → `[quadratic voting](artifacts/articles/governance-for-better-futures/Governance for better futures - Meta-governance.md)`

2. `[quadratic](artifacts/articles/governance-for-better-futures/Governance for better futures - Meta-governance.md#quadratic-voting)`
   → `[quadratic](artifacts/articles/governance-for-better-futures/Governance for better futures - Meta-governance.md)`

### Edit Set 4: Delete Block Reference (1 instance)

In file `tags\platforms.md`, find and delete this entire text:
```
[](tags/primitives.md#^83b042)
```

## Verification

After each file edit, report:
1. File path
2. Number of replacements made
3. Running total

Final total must equal 33.

## Start Editing

Begin with the first file and proceed systematically through all 7 files. Use filesystem:edit_file with the exact oldText and newText strings provided above.

---