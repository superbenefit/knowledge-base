---
purpose: Remove broken links from active content
features:
  - Identifies broken links pointing to non-existent files
  - Converts broken links to plain text
  - Creates detailed log of removals
  - Allows filtering by category
outputs:
  - Cleaned files with broken links removed
  - Detailed removal log
  - Backup of modified files
---

# Remove Broken Links

**Template**: T21-Remove-Broken-Links
**Purpose**: Clean up broken links by converting them to plain text

## ✅ Broken Links Removed!

### Results
- **Links Removed**: 506
- **Files Modified**: 124
- **Files Processed**: 528
- **Scope**: all

### Examples of Removals

**tags/autonomy.md** (1 removals):
- `[Sovereignty](tags/sovereignty)` → `Sovereignty`

**tags/agents.md** (3 removals):
- `[Anticapture framework](Anticapture.md)` → `Anticapture framework`
- `[DAOs aren't things... they are flows](artifacts/articles/network-evolution 1/DAOs aren't things... they are flows..md)` → `DAOs aren't things... they are flows`
- `[Building DAOs as scalable networks](artifacts/articles/network-evolution 1/Building DAOs as scalable networks.md)` → `Building DAOs as scalable networks`

**tags/actions.md** (4 removals):
- `[Minimum Viable Permissionless-ness](artifacts/articles/network-evolution 1/Minimum Viable Permissionless-ness.md)` → `Minimum Viable Permissionless-ness`
- `[Reimagining Power](Reimagining Power - How Web3 Can Transform Impact.md)` → `Reimagining Power`
- `[Execution](tags/execution.md)` → `Execution`

### 📄 Reports
- Removal Log: `link-fix/41-broken-link-removal-log-20250803-021121.csv`
- Summary: `link-fix/41-broken-link-removal-report.md`
- Backup: `link-fix/backups/20250803-021121/`

### ⚠️ Important
- Original files backed up
- Links converted to plain text
- Run validation to confirm cleanup


---

*Remove broken links by converting to plain text*