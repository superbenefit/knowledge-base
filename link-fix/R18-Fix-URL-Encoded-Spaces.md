---
purpose: Fix URL-encoded spaces in links (%20 -> space)
features:
  - Replaces %20 with spaces in link paths
  - Ignores archive directories
  - Creates backup before changes
outputs:
  - Fixed links with proper spaces
  - Detailed change log
---

# Fix URL-Encoded Spaces

**Template**: T18-Fix-URL-Encoded-Spaces
**Purpose**: Convert `%20` to spaces in link paths

## ✅ URL-Encoded Spaces Fixed!

### Results
- **Links Fixed**: 181
- **Files Modified**: 44
- **Files Processed**: 528

### Examples of Fixes

**tags/agents.md**:
- `artifacts/articles/network-evolution%201/DAOs%20aren't%20things...%20they%20are%20flows..md` → `artifacts/articles/network-evolution 1/DAOs aren't things... they are flows..md`
- `artifacts/articles/network-evolution%201/Building%20DAOs%20as%20scalable%20networks.md` → `artifacts/articles/network-evolution 1/Building DAOs as scalable networks.md`

**tags/actions.md**:
- `artifacts/articles/network-evolution%201/Minimum%20Viable%20Permissionless-ness.md` → `artifacts/articles/network-evolution 1/Minimum Viable Permissionless-ness.md`
- `Reimagining%20Power%20-%20How%20Web3%20Can%20Transform%20Impact.md` → `Reimagining Power - How Web3 Can Transform Impact.md`

**tags/scale.md**:
- `artifacts/articles/network-evolution%201/Scale%20and%20the%20levers%20that%20provide%20DAOs%20their%20power.md` → `artifacts/articles/network-evolution 1/Scale and the levers that provide DAOs their power.md`
- `artifacts/articles/network-evolution%201/Scale%20and%20the%20levers%20that%20provide%20DAOs%20their%20power.md` → `artifacts/articles/network-evolution 1/Scale and the levers that provide DAOs their power.md`
- `artifacts/articles/network-evolution%201/Building%20DAOs%20as%20scalable%20networks.md` → `artifacts/articles/network-evolution 1/Building DAOs as scalable networks.md`

### 📄 Reports
- Fix Log: `link-fix/38-url-encoded-fix-log-20250802-231525.csv`
- Summary: `link-fix/38-url-encoded-fix-report.md`
- Backup: `link-fix/backups/20250802-231525/`


---

*Fix URL-encoded spaces in links*