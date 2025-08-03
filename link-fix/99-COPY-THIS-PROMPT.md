# COPY THIS PROMPT TO NEW CLAUDE CHAT

---

I need you to fix 33 broken fragment links in markdown files. Use filesystem:edit_file to make these replacements.

**Base path**: F:\projects\sb-knowledge-base

## Task 1: Replace Multi-Stakeholder Governance links (11 total)

In these 6 files, find and replace ALL instances:

Files:
- notes\dao-primitives\implementation\guides\governance\implementation-guide-operational-governance.md
- notes\dao-primitives\implementation\guides\governance\implementation-guide-multi-stakeholder-governance.md  
- notes\dao-primitives\implementation\guides\governance\implementation-guide-community-governance.md
- artifacts\guides\dao-primitives-framework\dao-primitives-implemention\implementation-guide-multi-stakeholder-governance.md
- artifacts\guides\dao-primitives-framework\dao-primitives-implemention\implementation-guide-operational-governance.md
- artifacts\guides\dao-primitives-framework\dao-primitives-implemention\implementation-guide-community-governance.md

Find: `[Multi-Stakeholder Governance](tags/governance.md#multi-stakeholder-governance)`
Replace: `[Multi-Stakeholder Governance](notes/dao-primitives/implementation/patterns/constituency-scale-patterns/multi-stakeholder-governance.md)`

## Task 2: Remove #community-governance (10 total)

In the same 6 files above, remove `#community-governance` from any link ending with it.

## Task 3: Remove #quadratic-voting (10 total)

In the same 6 files above, remove `#quadratic-voting` from any link ending with it.

## Task 4: Delete broken link (1 total)

In file: tags\platforms.md
Delete this text: `[](tags/primitives.md#^83b042)`

Please execute these edits and report how many changes were made in each file. Total should be 33.

---