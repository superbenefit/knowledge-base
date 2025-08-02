# Enhanced Rollback Procedures

**Created**: 2025-08-01  
**Purpose**: Comprehensive rollback capabilities for all conversion scenarios  
**File**: 60-enhanced-rollback-procedures.md

## Overview

This document provides detailed rollback procedures for different failure scenarios during link conversion. Each procedure includes specific commands, validation steps, and recovery options.

## Rollback Scenarios

### 1. Complete Plugin Conversion Rollback (via Git)

**When to use**: After running Obsidian Links plugin on entire directories

**Prerequisites**:
- Clean Git commit before conversion
- No uncommitted changes during conversion

**Procedure**:
```bash
# 1. Check current status
git status

# 2. View recent commits
git log --oneline -10

# 3. Identify the last good commit (before conversion)
# Example: abc1234 "Pre-conversion backup"

# 4. Create a safety branch
git branch backup-current-state

# 5. Hard reset to pre-conversion state
git reset --hard abc1234

# 6. Verify rollback
git status
git diff HEAD~1
```

**Validation**:
- [ ] All files reverted to pre-conversion state
- [ ] No uncommitted changes remain
- [ ] Obsidian recognizes reverted links

### 2. Partial Rollback Procedures

**When to use**: Only specific directories or files need reverting

#### 2.1 Directory-Level Rollback

**Via Git** (if directory was committed separately):
```bash
# Revert specific directory to previous state
git checkout <commit-hash> -- path/to/directory/

# Example: Revert only /artifacts/
git checkout abc1234 -- artifacts/

# Stage and commit the reversion
git add artifacts/
git commit -m "Rollback: Revert artifacts/ to pre-conversion state"
```

**Via Backup**:
```javascript
// Templater script for directory restoration
const backupPath = "link-fix/backups/full-backup-20250801/artifacts/";
const targetPath = "artifacts/";

// Copy all files from backup to target
// (Would need actual implementation)
```

#### 2.2 File-Level Rollback

**Individual file via Git**:
```bash
# Revert single file
git checkout <commit-hash> -- path/to/file.md

# Example
git checkout abc1234 -- notes/index.md
```

**Multiple specific files**:
```bash
# Create a list of files to revert
cat > files-to-revert.txt << EOF
notes/important-note.md
artifacts/key-artifact.md
tags/critical-tag.md
EOF

# Revert all listed files
while read file; do
  git checkout abc1234 -- "$file"
done < files-to-revert.txt
```

### 3. Link-Type Specific Rollback

#### 3.1 Revert Only Wikilink Conversions

**Pattern-based reversion**:
```bash
# Find files with markdown links that were wikilinks
git diff <pre-conversion-commit> --name-only | \
  xargs grep -l '\[.*\](.*\.md)' > converted-files.txt

# Selectively revert files with many conversions
while read file; do
  # Check how many links were converted
  CONVERTED=$(git diff <commit> -- "$file" | grep -c '^\+.*\[.*\](.*\.md)')
  if [ $CONVERTED -gt 10 ]; then
    echo "Reverting $file (${CONVERTED} conversions)"
    git checkout <commit> -- "$file"
  fi
done < converted-files.txt
```

#### 3.2 Restore Leading Slashes

If T03 pre-processing needs reversal:

```javascript
// Restore leading slashes from backup
<%*
const restoreLeadingSlashes = async () => {
    const backupFolder = 'link-fix/backups/slash-removal-20250801';
    const files = await app.vault.adapter.list(backupFolder);
    
    for (const file of files.files) {
        const originalPath = file.replace(backupFolder + '/', '');
        const backupContent = await app.vault.adapter.read(file);
        const currentFile = app.vault.getAbstractFileByPath(originalPath);
        
        if (currentFile) {
            await app.vault.modify(currentFile, backupContent);
        }
    }
};
%>
```

### 4. Rollback from Template Backups

Each template creates timestamped backups. To restore:

#### 4.1 Locate Backup

```bash
# List all backups
ls -la link-fix/backups/

# Typical structure:
# link-fix/backups/
#   ├── full-backup-20250801/
#   ├── slash-removal-20250801-143022/
#   ├── relative-path-20250801-153045/
#   └── pre-processing-20250801-163015/
```

#### 4.2 Restore from Specific Backup

**Full Restoration Script**:
```javascript
<%*
// T12-Restore-From-Backup
const listBackups = async () => {
    const backupRoot = 'link-fix/backups';
    const backups = await app.vault.adapter.list(backupRoot);
    return backups.folders;
};

const restoreFromBackup = async (backupFolder) => {
    const files = await app.vault.adapter.list(backupFolder);
    let restored = 0;
    let failed = 0;
    
    for (const filePath of files.files) {
        try {
            const relativePath = filePath.replace(backupFolder + '/', '');
            const content = await app.vault.adapter.read(filePath);
            
            // Check if target exists
            const targetFile = app.vault.getAbstractFileByPath(relativePath);
            if (targetFile) {
                await app.vault.modify(targetFile, content);
                restored++;
            } else {
                // Create if doesn't exist
                await app.vault.create(relativePath, content);
                restored++;
            }
        } catch (error) {
            console.error(`Failed to restore ${filePath}:`, error);
            failed++;
        }
    }
    
    return { restored, failed };
};

// Main execution
const backups = await listBackups();
const selected = await tp.system.suggester(
    backups,
    backups,
    false,
    "Select backup to restore from:"
);

if (selected) {
    const result = await restoreFromBackup(selected);
    new Notice(`Restored ${result.restored} files, ${result.failed} failures`);
}
%>
```

### 5. Emergency Recovery Procedures

#### 5.1 When Git Is Corrupted

1. **Use filesystem backup**:
   ```bash
   # Copy from external backup
   cp -r /external/backup/sb-knowledge-base/* .
   
   # Reinitialize Git if needed
   rm -rf .git
   git init
   git add .
   git commit -m "Emergency recovery from backup"
   ```

2. **Restore from cloud backup**:
   - Download latest snapshot
   - Extract to temporary location
   - Validate vault integrity
   - Replace corrupted vault

#### 5.2 Partial Corruption Recovery

**Identify corrupted files**:
```javascript
// Check for malformed files
const findCorruptedFiles = async () => {
    const files = app.vault.getMarkdownFiles();
    const corrupted = [];
    
    for (const file of files) {
        try {
            const content = await app.vault.read(file);
            // Check for common corruption patterns
            if (content.includes('<<<<<<< HEAD') || 
                content.includes('�') || 
                content.length === 0) {
                corrupted.push(file.path);
            }
        } catch (error) {
            corrupted.push(file.path);
        }
    }
    
    return corrupted;
};
```

### 6. Rollback Validation

After any rollback, validate:

#### 6.1 Quick Validation Checklist
- [ ] Obsidian opens without errors
- [ ] Graph view displays correctly
- [ ] Search returns expected results
- [ ] Sample files have correct link format
- [ ] No Git merge conflicts present

#### 6.2 Automated Validation Script

```javascript
// Run T09-Post-Conversion-Validator in "rollback validation" mode
const validateRollback = async () => {
    const checks = {
        filesAccessible: true,
        linksValid: true,
        gitClean: true,
        searchWorks: true
    };
    
    // Test file access
    try {
        const testFiles = app.vault.getMarkdownFiles().slice(0, 10);
        for (const file of testFiles) {
            await app.vault.read(file);
        }
    } catch {
        checks.filesAccessible = false;
    }
    
    // Check Git status
    // (Would need actual implementation)
    
    return checks;
};
```

### 7. Prevention Strategies

To minimize rollback needs:

1. **Incremental Commits**:
   ```bash
   # Commit after each major phase
   git add artifacts/
   git commit -m "Conversion: Complete artifacts directory"
   ```

2. **Test Branches**:
   ```bash
   # Create test branch for risky operations
   git checkout -b test-conversion
   # If successful, merge back
   git checkout plugin-test
   git merge test-conversion
   ```

3. **Backup Automation**:
   ```bash
   # Pre-conversion backup script
   #!/bin/bash
   TIMESTAMP=$(date +%Y%m%d-%H%M%S)
   BACKUP_DIR="backups/pre-conversion-$TIMESTAMP"
   
   mkdir -p "$BACKUP_DIR"
   cp -r artifacts/ notes/ tags/ "$BACKUP_DIR/"
   echo "Backup created: $BACKUP_DIR"
   ```

## Rollback Decision Tree

```
Conversion Issue Detected
├── Affects entire vault?
│   ├── Yes → Complete Git rollback
│   └── No → Continue
├── Affects specific directory?
│   ├── Yes → Directory-level rollback
│   └── No → Continue
├── Affects specific files?
│   ├── Yes → File-level rollback
│   └── No → Continue
├── Specific link type issue?
│   ├── Yes → Pattern-based rollback
│   └── No → Continue
└── Template-specific issue?
    ├── Yes → Restore from template backup
    └── No → Manual investigation required
```

## Communication Template

When rollback is needed:

```markdown
## Rollback Notification

**Issue**: [Brief description]
**Scope**: [Files/directories affected]
**Impact**: [What functionality is affected]
**Rollback Type**: [Complete/Partial/Specific]
**Estimated Time**: [Duration]
**Status**: [In Progress/Complete/Failed]

### Actions Taken:
1. [Step 1]
2. [Step 2]

### Next Steps:
- [ ] [Required action]
- [ ] [Required action]
```

---

*Document rollback procedures before starting conversion. Test at least one rollback scenario to ensure familiarity with the process.*