---
purpose: Fix embedded content after plugin conversion
modes:
  - Single File
  - Directory  
  - All Embeds
outputs:
  - Fixed embed syntax
  - Embed fix log
  - Statistics report
rollback: Restore from backup
---

# Fix Embedded Content

**Executed**: 2025-08-02 17:03:13
**Template**: T07-Fix-Embeds

## Fix Configuration

## Fix Results

- **Mode**: All Embeds
- **Files processed**: 14
- **Files fixed**: 14

### Embeds Fixed
- **Notes**: 151
- **Images**: 6
- **Documents**: 2
- **With size params**: 0
- **With fragments**: 4
- **With blocks**: 4
- **Total**: 165

### 📁 Outputs

- **Backup**: `link-fix/backups/embed-fix-20250802-170313`
- **Fix log**: `link-fix/54-embed-fix-log-20250802-170313.csv`

### Files with Embed Issues Processed

The following files were processed:
- tools/plugin-notes/plugin-notes.md
- tools/templates/link-fix-templates/T07-Fix-Embeds.md
- drafts/OpenCivics-Wiki/OpenCivics Thesis/Our Critical Path.md
- drafts/OpenCivics-Wiki/OpenCivics Thesis/Full Thesis.md
- drafts/OpenCivics-Wiki/OpenCivics Concepts/Theory of Change.md
- drafts/OpenCivics-Wiki/OpenCivics Concepts/Practice Ethics.md
- drafts/OpenCivics-Wiki/OpenCivics Concepts/Participatory Design Process.md
- drafts/OpenCivics-Wiki/OpenCivics Concepts/Open Protocols.md
- drafts/OpenCivics-Wiki/OpenCivics Concepts/Glossary.md
- drafts/OpenCivics-Wiki/OpenCivics Concepts/Assembly Protocol.md
- drafts/OpenCivics-Wiki/Open Civic Innovation Framework/Full Framework.md
- drafts/OpenCivics-Wiki/Open Civic Innovation Framework/Design Practice.md
- drafts/OpenCivics-Wiki/Open Civic Innovation Framework/Design Philosophy.md
- drafts/OpenCivics-Wiki/About OpenCivics/About Membership.md


## Rollback Instructions

To restore files from backup:

```javascript
(async () => {
    const backupFolder = 'link-fix/backups/embed-fix-20250802-170313';
    const files = await app.vault.adapter.list(backupFolder);
    let restored = 0;
    
    for (const file of files.files) {
        const originalPath = file.replace(backupFolder + '/', '');
        const content = await app.vault.adapter.read(file);
        await app.vault.adapter.write(originalPath, content);
        restored++;
    }
    
    new Notice(`Restored ${restored} files from backup`);
})();
```

---

*Template: T07-Fix-Embeds*