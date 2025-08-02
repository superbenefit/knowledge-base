---
purpose: Analyze vault for all link types
outputs: 
  - 02-link-inventory.csv
  - 03-link-inventory-summary.md
rollback: Delete generated output files
---

# Link Inventory Analysis - Execution Log

**Executed**: 2025-08-01 10:57:22
**Executed By**: User

## Execution Results

Starting analysis...

Found 1862 files to analyze

✅ Created 02-link-inventory.csv
✅ Created 03-link-inventory-summary.md

## Summary Statistics

- Total files analyzed: 1862
- Total links found: 15982
- Files with leading slash issues: 28
- Wikilinks to convert: 6627


## Rollback Function

To rollback this operation and delete the generated files, run the following in the console:

```javascript
// Paste this in the console or create a button
(async () => {
    const files = ['link-fix/02-link-inventory.csv', 'link-fix/03-link-inventory-summary.md'];
    for (const file of files) {
        if (await app.vault.adapter.exists(file)) {
            await app.vault.adapter.remove(file);
            console.log(`Deleted ${file}`);
        }
    }
    new Notice("Rollback completed");
})();
```

---

*Template: T01-Link-Inventory-Analyzer*  
*Location: /tools/templates/link-fix-templates/*
