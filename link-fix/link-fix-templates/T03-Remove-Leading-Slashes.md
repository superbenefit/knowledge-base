---
purpose: Remove leading slashes from internal links
modes: 
  - Single File
  - Priority List
  - All from Analysis
  - Dry Run Test
outputs:
  - Backup folder with originals
  - Change log CSV
  - Execution summary
rollback: Restore all files from backup
---

# Remove Leading Slashes - Execution Log

**Executed**: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>
**Executed By**: <% tp.user.name || "User" %>

## Execution Configuration

<%*
// T03-Remove-Leading-Slashes
// Purpose: Remove leading slashes from [/path](/path) and [text](/path) patterns
// Features: Automatic backup, detailed logging, rollback capability

const OUTPUT_DIR = 'link-fix';
const BACKUP_DIR = 'link-fix/backups';
const ANALYSIS_FILE = '04-leading-slash-analysis.md';
const timestamp = tp.date.now("YYYYMMDD-HHmmss");
const backupFolder = `${BACKUP_DIR}/slash-removal-${timestamp}`;
const logFile = `05-slash-removal-log-${timestamp}.csv`;

// Link patterns to fix
const PATTERNS = {
    wikilink: {
        regex: /\[\[\/([^\]]+?)\]\]/g,
        replacement: '[$1]($1)',
        name: 'wikilink'
    },
    markdown: {
        regex: /\[([^\]]*?)\]\(\/([^)]+?)\)/g,
        replacement: '[$1]($2)',
        name: 'markdown'
    }
};

// Results tracking
let results = {
    mode: '',
    filesProcessed: 0,
    filesModified: 0,
    totalChanges: 0,
    changesByType: { wikilink: 0, markdown: 0 },
    errors: [],
    changeLog: [],
    backupLocation: backupFolder
};

// Get execution mode
const mode = await tp.system.prompt(
    "Select processing mode",
    "",
    ["Single File", "Priority List", "All from Analysis", "Dry Run Test"]
);
results.mode = mode;

// Rollback function
const rollback = async () => {
    try {
        const backupNotice = new Notice("Starting rollback...", 0);
        
        // Get all backup files
        const backupList = await app.vault.adapter.list(backupFolder);
        let restoredCount = 0;
        
        // Restore each file
        for (const backupFile of backupList.files) {
            const relativePath = backupFile.replace(backupFolder + '/', '');
            
            try {
                const backupContent = await app.vault.adapter.read(backupFile);
                await app.vault.adapter.write(relativePath, backupContent);
                restoredCount++;
            } catch (err) {
                console.error(`Failed to restore ${relativePath}:`, err);
            }
        }
        
        backupNotice.setMessage(`Rollback complete: ${restoredCount} files restored`);
        setTimeout(() => backupNotice.hide(), 3000);
        
        return restoredCount;
        
    } catch (error) {
        new Notice(`Rollback failed: ${error.message}`);
        throw error;
    }
};

// Create backup of a file
const createBackup = async (filePath) => {
    try {
        // Read original content
        const content = await app.vault.adapter.read(filePath);
        
        // Create backup path
        const backupPath = `${backupFolder}/${filePath}`;
        const backupDir = backupPath.substring(0, backupPath.lastIndexOf('/'));
        
        // Ensure directory exists
        await app.vault.adapter.mkdir(backupDir);
        
        // Write backup
        await app.vault.adapter.write(backupPath, content);
        
        return true;
    } catch (error) {
        console.error(`Backup failed for ${filePath}:`, error);
        results.errors.push({
            file: filePath,
            operation: 'backup',
            error: error.message
        });
        return false;
    }
};

// Get line number for a match
const getLineNumber = (content, matchStart) => {
    return content.substring(0, matchStart).split('\n').length;
};

// Process a single file
const processFile = async (filePath, isDryRun = false) => {
    try {
        const file = app.vault.getAbstractFileByPath(filePath);
        if (!file || !(file instanceof TFile)) {
            throw new Error('File not found');
        }
        
        const originalContent = await app.vault.read(file);
        let modifiedContent = originalContent;
        const changes = [];
        
        // Process each pattern type
        for (const [type, pattern] of Object.entries(PATTERNS)) {
            let match;
            let lastIndex = 0;
            
            while ((match = pattern.regex.exec(originalContent)) !== null) {
                const lineNum = getLineNumber(originalContent, match.index);
                const original = match[0];
                const fixed = original.replace(pattern.regex, pattern.replacement);
                
                changes.push({
                    file: filePath,
                    line: lineNum,
                    type: pattern.name,
                    original: original,
                    fixed: fixed
                });
                
                results.changesByType[type]++;
                
                // Reset regex lastIndex to avoid infinite loops
                pattern.regex.lastIndex = match.index + 1;
            }
            
            // Reset for actual replacement
            pattern.regex.lastIndex = 0;
            
            if (!isDryRun && changes.length > 0) {
                modifiedContent = modifiedContent.replace(pattern.regex, pattern.replacement);
            }
        }
        
        // Save changes if not dry run
        if (!isDryRun && changes.length > 0) {
            if (await createBackup(filePath)) {
                await app.vault.modify(file, modifiedContent);
                results.filesModified++;
            } else {
                throw new Error('Backup creation failed');
            }
        }
        
        results.filesProcessed++;
        results.totalChanges += changes.length;
        results.changeLog.push(...changes);
        
        return changes.length;
        
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error);
        results.errors.push({
            file: filePath,
            operation: 'process',
            error: error.message
        });
        return 0;
    }
};

// Read files from analysis
const getFilesFromAnalysis = async () => {
    const analysisPath = `${OUTPUT_DIR}/${ANALYSIS_FILE}`;
    const content = await app.vault.adapter.read(analysisPath);
    
    // Extract file paths from the table
    const files = [];
    const lines = content.split('\n');
    let inTable = false;
    
    for (const line of lines) {
        if (line.includes('| File | Wiki | MD | Total |')) {
            inTable = true;
            continue;
        }
        
        if (inTable && line.startsWith('|') && !line.includes('---')) {
            const match = line.match(/\| ([^|]+) \|/);
            if (match && match[1] && match[1].trim() !== 'File') {
                files.push(match[1].trim());
            }
        }
        
        if (inTable && !line.startsWith('|')) {
            break;
        }
    }
    
    return files;
};

// Generate CSV log
const generateCSVLog = () => {
    const headers = ['Timestamp', 'File', 'Line', 'Type', 'Original', 'Fixed'];
    let csv = headers.join(',') + '\n';
    
    const timestamp = new Date().toISOString();
    
    results.changeLog.forEach(change => {
        const row = [
            timestamp,
            `"${change.file}"`,
            change.line,
            change.type,
            `"${change.original}"`,
            `"${change.fixed}"`
        ];
        csv += row.join(',') + '\n';
    });
    
    return csv;
};

// Main execution
try {
    let targetFiles = [];
    let isDryRun = false;
    
    // Get files based on mode
    if (mode === "Single File") {
        const filePath = await tp.system.prompt("Enter file path:");
        if (filePath) targetFiles = [filePath];
        
    } else if (mode === "Priority List") {
        const count = await tp.system.prompt("Process top N files:", "5");
        const files = await getFilesFromAnalysis();
        targetFiles = files.slice(0, parseInt(count));
        
    } else if (mode === "All from Analysis") {
        targetFiles = await getFilesFromAnalysis();
        
    } else if (mode === "Dry Run Test") {
        isDryRun = true;
        const files = await getFilesFromAnalysis();
        targetFiles = files.slice(0, 3); // Test on first 3 files
    }
    
    if (targetFiles.length === 0) {
        throw new Error("No files selected for processing");
    }
    
    // Display configuration
    tR += `- **Mode**: ${mode}\n`;
    tR += `- **Files to process**: ${targetFiles.length}\n`;
    tR += `- **Dry run**: ${isDryRun ? 'Yes' : 'No'}\n`;
    tR += `- **Backup location**: ${backupFolder}\n\n`;
    
    // Create backup directory
    if (!isDryRun) {
        await app.vault.adapter.mkdir(backupFolder);
    }
    
    // Process files
    tR += `## Processing Results\n\n`;
    const progressNotice = new Notice(`Processing files...`, 0);
    
    for (let i = 0; i < targetFiles.length; i++) {
        const file = targetFiles[i];
        progressNotice.setMessage(`Processing ${i + 1}/${targetFiles.length}: ${file}`);
        
        const changeCount = await processFile(file, isDryRun);
        
        if (changeCount > 0 || results.errors.some(e => e.file === file)) {
            tR += `- ${file}: ${changeCount} changes`;
            if (results.errors.some(e => e.file === file)) {
                tR += ` ⚠️ (see errors)`;
            }
            tR += `\n`;
        }
    }
    
    progressNotice.hide();
    
    // Save change log
    if (results.changeLog.length > 0 && !isDryRun) {
        const csvContent = generateCSVLog();
        await app.vault.adapter.write(`${OUTPUT_DIR}/${logFile}`, csvContent);
    }
    
    // Summary
    tR += `\n## Summary\n\n`;
    tR += `- **Files processed**: ${results.filesProcessed}\n`;
    tR += `- **Files modified**: ${results.filesModified}\n`;
    tR += `- **Total changes**: ${results.totalChanges}\n`;
    tR += `  - Wikilinks fixed: ${results.changesByType.wikilink}\n`;
    tR += `  - Markdown links fixed: ${results.changesByType.markdown}\n`;
    
    if (results.errors.length > 0) {
        tR += `\n### ⚠️ Errors (${results.errors.length})\n\n`;
        results.errors.forEach(err => {
            tR += `- ${err.file}: ${err.operation} - ${err.error}\n`;
        });
    }
    
    if (!isDryRun && results.totalChanges > 0) {
        tR += `\n### 📁 Outputs\n\n`;
        tR += `- **Backup**: \`${backupFolder}\`\n`;
        tR += `- **Change log**: \`${OUTPUT_DIR}/${logFile}\`\n`;
    }
    
    if (isDryRun && results.changeLog.length > 0) {
        tR += `\n### 🔍 Sample Changes (Dry Run)\n\n`;
        results.changeLog.slice(0, 10).forEach(change => {
            tR += `- ${change.file} (line ${change.line}): \`${change.original}\` → \`${change.fixed}\`\n`;
        });
    }
    
    new Notice(`Processing complete: ${results.totalChanges} changes ${isDryRun ? 'would be' : 'were'} made`);
    
} catch (error) {
    console.error("Execution error:", error);
    tR += `\n## ❌ Error\n\n${error.message}`;
    new Notice(`Error: ${error.message}`);
}
%>

## Rollback Instructions

To restore all files from backup, run this in the console:

```javascript
// Rollback function
(async () => {
    const backupFolder = '<% results.backupLocation %>';
    const backupList = await app.vault.adapter.list(backupFolder);
    let restored = 0;
    
    for (const file of backupList.files) {
        const original = file.replace(backupFolder + '/', '');
        const content = await app.vault.adapter.read(file);
        await app.vault.adapter.write(original, content);
        restored++;
    }
    
    new Notice(`Restored ${restored} files from backup`);
})();
```

---

*Template: T03-Remove-Leading-Slashes*  
*Location: /tools/templates/link-fix-templates/*
