# Copy-Paste Fragment Fix Commands

## Obsidian Find & Replace Instructions

1. Press `Ctrl+Shift+H` to open Find & Replace in Files
2. Copy each pair below and run separately

### Fix 1: Multi-Stakeholder Governance
```
FIND:
\[Multi-Stakeholder Governance\]\(tags/governance\.md#multi-stakeholder-governance\)

REPLACE:
[Multi-Stakeholder Governance](notes/dao-primitives/implementation/patterns/constituency-scale-patterns/multi-stakeholder-governance.md)
```

### Fix 2: Community Governance Fragments
```
FIND:
#community-governance\)

REPLACE:
)
```

### Fix 3: Quadratic Voting Fragments
```
FIND:
#quadratic-voting\)

REPLACE:
)
```

### Fix 4: Manual Edit
Open: `tags/platforms.md`
Find and delete: `[](tags/primitives.md#^83b042)`

---

After running these, validate with T13-Fragment-Link-Validator