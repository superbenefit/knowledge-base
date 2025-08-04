---
purpose: Convert relative paths to absolute paths
modes:
  - Single File
  - Directory
  - All Relative Paths
outputs:
  - Files with resolved paths
  - Path resolution log
  - Error report
rollback: Restore from backup
---

# Resolve Relative Paths

**Executed**: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>
**Template**: T08-Resolve-Relative-Paths

## Resolution Configuration

<%*
// T08-Resolve-Relative-Paths
// Purpose: Convert relative paths (../ and ./) to absolute paths from vault root
// Features: Path calculation, fragment preservation, validation

const OUTPUT_DIR = 'link-fix';
const BACKUP_DIR = 'link-fix/backups';
const timestamp = tp.date.now("YYYYMMDD-HHmmss");
const backupFolder = `${BACKUP_DIR}/relative-path-${timestamp}`;
const logFile = `54-relative-path-conversions-${timestamp}.csv`;

// Results tracking
const results = {
    filesProcessed: 0,
    filesFixed: 0,
    pathsResolved: {
        parent: 0,      // ../
        current: 0,     // ./
        multiLevel: 0,  // ../../ etc
        withFragment: 0,
        total: 0
    },
    errors: [],
    conversionLog: []
};

// Get execution mode
const mode = await tp.system.prompt(
    "Select resolution mode",
    "",
    ["Single File", "Directory", "All Relative Paths", "Test Mode"]
);

// Normalize path (remove .md, clean up)
const normalizePath = (path) => {
    // Remove .md extension if present
    let normalized = path.replace(/\.md$/, '');
    // Clean up double slashes
    normalized = normalized.replace(/\/+/g, '/');
    // Remove trailing slash
    normalized = normalized.replace(/\/$/, '');
    return normalized;
};

// Calculate absolute path from relative
const resolveRelativePath = (relativePath, currentFilePath) => {
    // Split into path and fragment/query
    let path = relativePath;
    let fragment = '';
    let query = '';
    
    // Extract fragment
    const fragmentIndex = path.indexOf('#');
    if (fragmentIndex !== -1) {
        fragment = path.substring(fragmentIndex);
        path = path.substring(0, fragmentIndex);
    }
    
    // Extract query (if no fragment)
    if (!fragment) {
        const queryIndex = path.indexOf('?');
        if (queryIndex !== -1) {
            query = path.substring(queryIndex);
            path = path.substring(0, queryIndex);
        }
    }
    
    // Get directory of current file
    const currentDir = currentFilePath.substring(0, currentFilePath.lastIndexOf('/'));
    
    // Handle different relative patterns
    if (path.startsWith('./')) {
        // Current directory reference
        path = path.substring(2);
        path = currentDir + '/' + path;
    } else if (path.startsWith('../')) {
        // Parent directory reference(s)
        let upCount = 0;
        let tempPath = path;
        
        // Count how many levels up
        while (tempPath.startsWith('../')) {
            upCount++;
            tempPath = tempPath.substring(3);
        }
        
        // Navigate up directories
        let dirParts = currentDir.split('/');
        for (let i = 0; i < upCount && dirParts.length > 0; i++) {
            dirParts.pop();
        }
        
        // Construct absolute path
        if (dirParts.length > 0) {
            path = dirParts.join('/') + '/' + tempPath;
        } else {
            path = tempPath;
        }
        
        if (upCount > 1) {
            results.pathsResolved.multiLevel++;
        }
    }
    
    // Clean up path
    path = normalizePath(path);
    
    // Re-add .md extension
    if (!path.endsWith('.md') && !path.match(/\.(png|jpg|jpeg|gif|svg|pdf|docx?)$/i)) {
        path += '.md';
    }
    
    // Re-add fragment and query
    path += fragment + query;
    
    return path;
};

// Process relative path in link
const processRelativeLink = (match, text, relativePath, currentFile) => {
    // Skip if not relative
    if (!relativePath.startsWith('../') && !relativePath.startsWith('./')) {
        return match;
    }
    
    try {
        const absolutePath = resolveRelativePath(relativePath, currentFile);
        const hasFragment = relativePath.includes('#');
        
        // Log conversion
        results.conversionLog.push({
            file: currentFile,
            original: relativePath,
            resolved: absolutePath,
            hasFragment: hasFragment,
            linkText: text
        });
        
        // Track stats
        if (relativePath.startsWith('../')) {
            results.pathsResolved.parent++;
        } else if (relativePath.startsWith('./')) {
            results.pathsResolved.current++;
        }
        
        if (hasFragment) {
            results.pathsResolved.withFragment++;
        }
        
        results.pathsResolved.total++;
        
        // Return fixed link
        return `[${text}](${absolutePath})`;
        
    } catch (error) {
        console.error(`Failed to resolve: ${relativePath}`, error);
        results.errors.push({
            file: currentFile,
            path: relativePath,
            error: error.message
        });
        return match;
    }
};

// Create backup
const createBackup = async (filePath) => {
    try {
        const content = await app.vault.adapter.read(filePath);
        const backupPath = `${backupFolder}/${filePath}`;
        const backupDir = backupPath.substring(0, backupPath.lastIndexOf('/'));
        
        await app.vault.adapter.mkdir(backupDir);
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

// Process a single file
const processFile = async (filePath) => {
    try {
        const file = app.vault.getAbstractFileByPath(filePath);
        if (!file || !(file instanceof TFile)) {
            throw new Error('File not found');
        }
        
        const originalContent = await app.vault.read(file);
        let fixedContent = originalContent;
        let changeCount = 0;
        
        // Match markdown links with relative paths
        fixedContent = fixedContent.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, path) => {
            const processed = processRelativeLink(match, text, path, filePath);
            if (processed !== match) changeCount++;
            return processed;
        });
        
        // Also check for wikilinks with relative paths (rare but possible)
        fixedContent = fixedContent.replace(/\[\[(\.\.\/[^\]|]+)(\|[^\]]+)?\]\]/g, (match, path, alias) => {
            try {
                const absolutePath = resolveRelativePath(path, filePath);
                results.pathsResolved.total++;
                changeCount++;
                
                if (alias) {
                    return `[${absolutePath}${alias}](${absolutePath}${alias})`;
                } else {
                    return `[${absolutePath}](${absolutePath})`;
                }
            } catch (error) {
                results.errors.push({
                    file: filePath,
                    path: path,
                    error: error.message
                });
                return match;
            }
        });
        
        // Only save if changes were made
        if (changeCount > 0) {
            if (await createBackup(filePath)) {
                await app.vault.modify(file, fixedContent);
                results.filesFixed++;
            }
        }
        
        results.filesProcessed++;
        
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error);
        results.errors.push({
            file: filePath,
            operation: 'process',
            error: error.message
        });
    }
};

// Generate CSV log
const generateCSVLog = () => {
    const headers = ['Timestamp', 'File', 'Original Path', 'Resolved Path', 'Has Fragment', 'Link Text'];
    let csv = headers.join(',') + '\n';
    
    const timestamp = new Date().toISOString();
    
    results.conversionLog.forEach(conv => {
        const row = [
            timestamp,
            `"${conv.file}"`,
            `"${conv.original}"`,
            `"${conv.resolved}"`,
            conv.hasFragment ? 'YES' : 'NO',
            `"${conv.linkText}"`
        ];
        csv += row.join(',') + '\n';
    });
    
    return csv;
};

// Main execution
try {
    let targetFiles = [];
    
    // Get files based on mode
    if (mode === "Single File") {
        const filePath = await tp.system.prompt("Enter file path:");
        if (filePath) targetFiles = [filePath];
        
    } else if (mode === "Directory") {
        const dir = await tp.system.prompt("Enter directory path:");
        const files = app.vault.getMarkdownFiles();
        targetFiles = files
            .filter(f => f.path.startsWith(dir))
            .map(f => f.path);
            
    } else if (mode === "All Relative Paths") {
        // Scan for files containing relative paths
        const files = app.vault.getMarkdownFiles();
        const notice = new Notice('Scanning for relative paths...', 0);
        
        for (const file of files) {
            const content = await app.vault.read(file);
            if (content.match(/\[^\](^%5C)+\]\(\.\.?\/[^)]+\)/) || content.match(/\[\[\.\.\/[^\]]+\]\]/)) {
                targetFiles.push(file.path);
            }
        }
        
        notice.hide();
        
    } else if (mode === "Test Mode") {
        // Create test file with various relative paths
        const testContent = `# Relative Path Test

## Current Directory
- [Sibling file](./sibling.md)
- [Sibling with fragment](./page.md#section)
- [In subfolder](./subfolder/file.md)

## Parent Directory  
- [Parent file](../parent.md)
- [Parent with fragment](../doc.md#heading)
- [Parent sibling](../sibling-dir/file.md)

## Multiple Levels
- [Grandparent](../../grandparent.md)
- [Great grandparent](../../../root-file.md)
- [Complex path](../../other-dir/sub/file.md#section)

## Edge Cases
- [With query](../file.md?param=value)
- [Image](../images/photo.png)
- Wikilink: [../relative-wiki](../relative-wiki)
- Wikilink with alias: [Display Text](../relative)`;
        
        await app.vault.adapter.write(`${OUTPUT_DIR}/test-relative/nested/relative-path-test.md`, testContent);
        targetFiles = [`${OUTPUT_DIR}/test-relative/nested/relative-path-test.md`];
    }
    
    if (targetFiles.length === 0) {
        throw new Error("No files with relative paths found");
    }
    
    // Create backup directory
    await app.vault.adapter.mkdir(backupFolder);
    
    // Process files
    const notice = new Notice(`Resolving relative paths...`, 0);
    
    for (let i = 0; i < targetFiles.length; i++) {
        notice.setMessage(`Processing ${i + 1}/${targetFiles.length}`);
        await processFile(targetFiles[i]);
    }
    
    notice.hide();
    
    // Save log
    const csvContent = generateCSVLog();
    await app.vault.adapter.write(`${OUTPUT_DIR}/${logFile}`, csvContent);
    
    // Generate report
    tR += `## Resolution Results\n\n`;
    tR += `- **Mode**: ${mode}\n`;
    tR += `- **Files scanned**: ${results.filesProcessed}\n`;
    tR += `- **Files fixed**: ${results.filesFixed}\n\n`;
    
    tR += `### Paths Resolved\n`;
    tR += `- **Parent paths (../)**: ${results.pathsResolved.parent}\n`;
    tR += `- **Current paths (./)**: ${results.pathsResolved.current}\n`;
    tR += `- **Multi-level**: ${results.pathsResolved.multiLevel}\n`;
    tR += `- **With fragments**: ${results.pathsResolved.withFragment}\n`;
    tR += `- **Total resolved**: ${results.pathsResolved.total}\n\n`;
    
    if (results.errors.length > 0) {
        tR += `### ⚠️ Errors\n\n`;
        results.errors.forEach(err => {
            tR += `- ${err.file}: ${err.operation || err.path} - ${err.error}\n`;
        });
    }
    
    tR += `### 📁 Outputs\n\n`;
    tR += `- **Backup**: \`${backupFolder}\`\n`;
    tR += `- **Conversion log**: \`${OUTPUT_DIR}/${logFile}\`\n`;
    
    new Notice(`Resolution complete: ${results.pathsResolved.total} paths resolved`);
    
} catch (error) {
    console.error("Resolution error:", error);
    tR += `\n## ❌ Error\n\n${error.message}`;
    new Notice(`Error: ${error.message}`);
}
%>

## Rollback Instructions

To restore files from backup:

```javascript
(async () => {
    const backupFolder = '<% backupFolder %>';
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

*Template: T08-Resolve-Relative-Paths*