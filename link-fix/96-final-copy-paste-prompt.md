# 🎯 Final Direct Edit Prompt - Ready to Copy

## Instructions
1. Open a new Claude Sonnet 3.5 chat
2. Make sure it has filesystem MCP access
3. Copy everything between the lines below
4. Paste and send

---

I need you to fix 33 broken fragment links in my Obsidian knowledge base. These are markdown links with #anchors that point to non-existent headings.

**Vault path**: `F:\projects\sb-knowledge-base`

## The 33 Fixes

### Fix Type 1: Multi-Stakeholder Governance (11 fixes)
Replace ALL instances of:
```
[Multi-Stakeholder Governance](tags/governance.md#multi-stakeholder-governance)
```
With:
```
[Multi-Stakeholder Governance](notes/dao-primitives/implementation/patterns/constituency-scale-patterns/multi-stakeholder-governance.md)
```

Files and counts:
- `notes\dao-primitives\implementation\guides\governance\implementation-guide-operational-governance.md` (3)
- `notes\dao-primitives\implementation\guides\governance\implementation-guide-multi-stakeholder-governance.md` (2)
- `notes\dao-primitives\implementation\guides\governance\implementation-guide-community-governance.md` (1)
- `artifacts\guides\dao-primitives-framework\dao-primitives-implemention\implementation-guide-multi-stakeholder-governance.md` (2)
- `artifacts\guides\dao-primitives-framework\dao-primitives-implemention\implementation-guide-operational-governance.md` (3)
- `artifacts\guides\dao-primitives-framework\dao-primitives-implemention\implementation-guide-community-governance.md` (1)

### Fix Type 2: Remove #community-governance fragment (10 fixes)
Just delete `#community-governance` from the end of any link that has it.

### Fix Type 3: Remove #quadratic-voting fragment (10 fixes)  
Just delete `#quadratic-voting` from the end of any link that has it.

### Fix Type 4: Delete broken block reference (1 fix)
In `tags\platforms.md`, delete: `[](tags/primitives.md#^83b042)`

## Action Required

Please use filesystem:edit_file to:
1. Make these 33 edits across the 7 files listed
2. Report the count of edits per file
3. Confirm total = 33

Start now by editing the first file in the list.

---

## 📋 After Running This

Come back here and run `T13-Fragment-Link-Validator` to confirm all fragment links are now valid!