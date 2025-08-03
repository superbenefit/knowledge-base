# Precise Direct Edit Prompt with Exact Link Patterns

**Copy this entire prompt into a new Claude Sonnet 3.5 chat with filesystem access:**

---

Please fix 33 broken fragment links in my Obsidian vault using filesystem:edit_file. The vault is at `F:\projects\sb-knowledge-base`.

## Exact Replacements Needed

### Multi-Stakeholder Governance (11 total)
**In all cases, replace:**
```
[Multi-Stakeholder Governance](tags/governance.md#multi-stakeholder-governance)
```
**With:**
```
[Multi-Stakeholder Governance](notes/dao-primitives/implementation/patterns/constituency-scale-patterns/multi-stakeholder-governance.md)
```

### Community Governance Fragments (10 total)
**Remove `#community-governance` from these exact links:**
- `[On-chain vs. off-chain](artifacts/articles/network-evolution/Building DAOs as scalable networks.md#community-governance)` → Remove fragment
- `[Token-based governance](artifacts/articles/network-evolution/Building DAOs as scalable networks.md#community-governance)` → Remove fragment
- `[On-chain vs. off-chain governance](artifacts/articles/network-evolution/Building DAOs as scalable networks.md#community-governance)` → Remove fragment
- `[token-based governance](artifacts/articles/network-evolution/Building DAOs as scalable networks.md#community-governance)` → Remove fragment
- `[token-based](artifacts/articles/network-evolution/Building DAOs as scalable networks.md#community-governance)` → Remove fragment

### Quadratic Voting Fragments (10 total)
**Remove `#quadratic-voting` from these exact links:**
- `[quadratic voting](artifacts/articles/governance-for-better-futures/Governance for better futures - Meta-governance.md#quadratic-voting)` → Remove fragment
- `[quadratic](artifacts/articles/governance-for-better-futures/Governance for better futures - Meta-governance.md#quadratic-voting)` → Remove fragment

### Block Reference (1 total)
**Delete this entire string:**
```
[](tags/primitives.md#^83b042)
```

## Files and Expected Counts

1. `F:\projects\sb-knowledge-base\notes\dao-primitives\implementation\guides\governance\implementation-guide-operational-governance.md`
   - 3 Multi-Stakeholder replacements
   - 1 token-based governance fragment removal
   - 1 quadratic voting fragment removal

2. `F:\projects\sb-knowledge-base\notes\dao-primitives\implementation\guides\governance\implementation-guide-multi-stakeholder-governance.md`
   - 2 Multi-Stakeholder replacements
   - 1 token-based fragment removal
   - 1 quadratic fragment removal

3. `F:\projects\sb-knowledge-base\notes\dao-primitives\implementation\guides\governance\implementation-guide-community-governance.md`
   - 1 Multi-Stakeholder replacement
   - 2 On-chain vs. off-chain fragment removals
   - 2 Token-based governance fragment removals
   - 2 quadratic voting fragment removals

4. `F:\projects\sb-knowledge-base\artifacts\guides\dao-primitives-framework\dao-primitives-implemention\implementation-guide-multi-stakeholder-governance.md`
   - 2 Multi-Stakeholder replacements
   - 1 token-based fragment removal
   - 1 quadratic fragment removal

5. `F:\projects\sb-knowledge-base\artifacts\guides\dao-primitives-framework\dao-primitives-implemention\implementation-guide-operational-governance.md`
   - 3 Multi-Stakeholder replacements
   - 1 token-based governance fragment removal
   - 1 quadratic voting fragment removal

6. `F:\projects\sb-knowledge-base\artifacts\guides\dao-primitives-framework\dao-primitives-implemention\implementation-guide-community-governance.md`
   - 1 Multi-Stakeholder replacement
   - 2 On-chain vs. off-chain fragment removals
   - 2 Token-based governance fragment removals
   - 2 quadratic voting fragment removals

7. `F:\projects\sb-knowledge-base\tags\platforms.md`
   - Delete 1 block reference

## Execution

Use filesystem:edit_file for each file with appropriate oldText and newText values. After completion, confirm exactly 33 edits were made.

Please proceed.