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

**Executed**: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>
**Template**: T07-Fix-Embeds

## Fix Configuration

<%*
// T07-Fix-Embeds
// Purpose: Restore proper embed syntax after plugin converts everything to image syntax
// Features: Context-aware conversion, size parameter restoration, validation

const OUTPUT_DIR = 'link-fix';
const BACKUP_DIR = 'link-fix/backups';
const timestamp = tp.date.now("YYYYMMDD-HHmmss");
const backupFolder = `${BACKUP_DIR}/embed-fix-${timestamp}`;
const logFile = `54-embed-fix-log-${timestamp}.csv`;

// Common file extensions
const IMAGE_EXTENSIONS = ['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp'];
const DOCUMENT_EXTENSIONS = ['pdf', 'docx', 'doc', 'pptx', 'xlsx'];
const NOTE_EXTENSIONS = ['md'];

// Results tracking
const results = {
    filesProcessed: 0,
    filesFixed: 0,
    embedsFixed: {
        notes: 0,
        images: 0,
        documents: 0,
        withSize: 0,
        withFragment: 0,
        withBlock: 0
    },
    errors: [],
    fixLog: []
};

// Get execution mode
const mode = await tp.system.prompt(
    "Select fix mode",
    "",
    ["Single File", "Directory", "All Embeds", "Test Mode"]
);

// Determine file type from path
const getFileType = (path) => {
    const extension = path.split('.').pop().toLowerCase();
    
    if (NOTE_EXTENSIONS.includes(extension) || !path.includes('.')) {
        return 'note';
    } else if (IMAGE_EXTENSIONS.includes(extension)) {
        return 'image';
    } else if (DOCUMENT_EXTENSIONS.includes(extension)) {
        return 'document';
    }
    return 'unknown';
};

// Extract size parameters from alt text
const extractSizeParams = (altText) => {
    // Check for |width×height or |width patterns
    const sizeMatch = altText.match(/\|(\d+×\d+|\d+)$/);
    if (sizeMatch) {
        return {
            altText: altText.replace(sizeMatch[0], '').trim(),
            size: sizeMatch[1]
        };
    }
    return { altText, size: null };
};

// Fix a single embed
const fixEmbed = (match, altText, path, filePath) => {
    const fileType = getFileType(path);
    let fixed = match;
    let changeType = 'none';
    
    // Extract size if present in alt text
    const { altText: cleanAlt, size } = extractSizeParams(altText);
    
    // Check for fragment or block reference
    const hasFragment = path.includes('#');
    const hasBlock = path.includes('%5E') || path.includes('^');
    
    switch (fileType) {
        case 'note':
            // Convert to proper note embed
            if (size) {
                fixed = `![[${path}|${size}]]`;
                changeType = 'note_with_size';
                results.embedsFixed.withSize++;
            } else {
                fixed = `![[${path}]]`;
                changeType = 'note';
            }
            results.embedsFixed.notes++;
            break;
            
        case 'image':
            // Keep as image but restore size if needed
            if (size && !match.includes(`|${size}`)) {
                // Restore size parameter
                fixed = `![[${path}|${size}]]`;
                changeType = 'image_size_restored';
                results.embedsFixed.withSize++;
            } else {
                // Convert to wikilink embed for consistency
                fixed = `![[${path}]]`;
                changeType = 'image_format';
            }
            results.embedsFixed.images++;
            break;
            
        case 'document':
            // Convert to proper embed
            fixed = `![[${path}]]`;
            changeType = 'document';
            results.embedsFixed.documents++;
            break;
            
        default:
            // Unknown type - convert to wikilink embed
            fixed = `![[${path}]]`;
            changeType = 'unknown';
    }
    
    // Track fragments and blocks
    if (hasFragment) results.embedsFixed.withFragment++;
    if (hasBlock) results.embedsFixed.withBlock++;
    
    // Log the change
    results.fixLog.push({
        file: filePath,
        original: match,
        fixed: fixed,
        type: fileType,
        changeType: changeType,
        hadSize: !!size,
        hadFragment: hasFragment,
        hadBlock: hasBlock
    });
    
    return fixed;
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
        
        // Match markdown image syntax: ![alt](path)
        fixedContent = fixedContent.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, path) => {
            const fixed = fixEmbed(match, alt, path, filePath);
            if (fixed !== match) changeCount++;
            return fixed;
        });
        
        // Only save if changes were made
        if (fixedContent !== originalContent) {
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
    const headers = ['Timestamp', 'File', 'Original', 'Fixed', 'Type', 'Change', 'Size', 'Fragment', 'Block'];
    let csv = headers.join(',') + '\n';
    
    const timestamp = new Date().toISOString();
    
    results.fixLog.forEach(fix => {
        const row = [
            timestamp,
            `"${fix.file}"`,
            `"${fix.original}"`,
            `"${fix.fixed}"`,
            fix.type,
            fix.changeType,
            fix.hadSize ? 'YES' : 'NO',
            fix.hadFragment ? 'YES' : 'NO',
            fix.hadBlock ? 'YES' : 'NO'
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
            
    } else if (mode === "All Embeds") {
        // Process all files that might have embeds
        const files = app.vault.getMarkdownFiles();
        targetFiles = files.map(f => f.path);
        
    } else if (mode === "Test Mode") {
        // Create test file with various embed types
        const testContent = `# Embed Test File
        
Note embeds converted by plugin:
![note content](notes/example.md)
![with fragment](notes/guide.md#section)
![with block](notes/doc%5Eblock-id.md)

Image embeds:
![diagram](attachments/diagram.png)
![sized image|300](attachments/photo.jpg)
![banner|700×200](attachments/banner.png)

Document embeds:
![whitepaper](docs/whitepaper.pdf)
![presentation](docs/slides.pptx)

Mixed cases:
![](empty-alt.md)
![complex path](path/to/nested/file.md)`;
        
        await app.vault.adapter.write(`${OUTPUT_DIR}/embed-test.md`, testContent);
        targetFiles = [`${OUTPUT_DIR}/embed-test.md`];
    }
    
    if (targetFiles.length === 0) {
        throw new Error("No files selected for processing");
    }
    
    // Create backup directory
    await app.vault.adapter.mkdir(backupFolder);
    
    // Process files
    const notice = new Notice(`Fixing embeds...`, 0);
    
    for (let i = 0; i < targetFiles.length; i++) {
        notice.setMessage(`Processing ${i + 1}/${targetFiles.length}`);
        await processFile(targetFiles[i]);
    }
    
    notice.hide();
    
    // Save log
    const csvContent = generateCSVLog();
    await app.vault.adapter.write(`${OUTPUT_DIR}/${logFile}`, csvContent);
    
    // Generate report
    tR += `## Fix Results\n\n`;
    tR += `- **Mode**: ${mode}\n`;
    tR += `- **Files processed**: ${results.filesProcessed}\n`;
    tR += `- **Files fixed**: ${results.filesFixed}\n\n`;
    
    tR += `### Embeds Fixed\n`;
    tR += `- **Notes**: ${results.embedsFixed.notes}\n`;
    tR += `- **Images**: ${results.embedsFixed.images}\n`;
    tR += `- **Documents**: ${results.embedsFixed.documents}\n`;
    tR += `- **With size params**: ${results.embedsFixed.withSize}\n`;
    tR += `- **With fragments**: ${results.embedsFixed.withFragment}\n`;
    tR += `- **With blocks**: ${results.embedsFixed.withBlock}\n`;
    tR += `- **Total**: ${results.fixLog.length}\n\n`;
    
    if (results.errors.length > 0) {
        tR += `### ⚠️ Errors\n\n`;
        results.errors.forEach(err => {
            tR += `- ${err.file}: ${err.operation} - ${err.error}\n`;
        });
    }
    
    tR += `### 📁 Outputs\n\n`;
    tR += `- **Backup**: \`${backupFolder}\`\n`;
    tR += `- **Fix log**: \`${OUTPUT_DIR}/${logFile}\`\n`;
    
    new Notice(`Fix complete: ${results.fixLog.length} embeds fixed`);
    
} catch (error) {
    console.error("Fix error:", error);
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

*Template: T07-Fix-Embeds*