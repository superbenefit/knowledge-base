---
purpose: Remove leading slashes from all internal markdown links
critical: YES - Current links are Enveloppe-incompatible!
features:
  - Removes leading slashes from internal links
  - Preserves external links
  - Handles all link patterns
  - Creates backup before changes
outputs:
  - Backup in link-fix/backups/
  - Fix log CSV file
  - Summary report
---

# Fix Leading Slash Links - CRITICAL

**Template**: T13-Remove-Leading-Slashes
**Purpose**: Convert `/path/file.md` to `path/file.md` for Enveloppe compatibility

## ⚠️ CRITICAL FIX REQUIRED

The validation found 2,980 links with leading slashes that are incompatible with Enveloppe!

<%*
// T13-Remove-Leading-Slashes
// CRITICAL: Remove leading slashes from internal links
// From: [text](/path/file.md) 
// To: [text](path/file.md)

const OUTPUT_DIR = 'link-fix';
const BACKUP_DIR = `${OUTPUT_DIR}/backups`;
const timestamp = tp.date.now("YYYYMMDD-HHmmss");
const logFile = `${OUTPUT_DIR}/33-leading-slash-removal-log-${timestamp}.csv`;

// Statistics
const stats = {
    filesProcessed: 0,
    filesModified: 0,
    linksFixed: 0,
    errors: []
};

// Directories to process
const PROJECT_DIRS = ['artifacts/', 'notes/', 'links/', 'tags/'];
const EXCLUDED_DIRS = ['notes/general-circle/', 'notes/archive/', 'notes/wp/'];

// Get files to process
const getTargetFiles = () => {
    const files = app.vault.getMarkdownFiles();
    return files.filter(f => {
        // Exclude specific directories
        if (EXCLUDED_DIRS.some(dir => f.path.startsWith(dir))) {
            return false;
        }
        // Include only project directories
        return PROJECT_DIRS.some(dir => f.path.startsWith(dir));
    });
};

// Create backup
const createBackup = async (file, content) => {
    const backupPath = `${BACKUP_DIR}/${timestamp}/${file.path}`;
    const backupDir = backupPath.substring(0, backupPath.lastIndexOf('/'));
    
    // Ensure backup directory exists
    if (!await app.vault.adapter.exists(backupDir)) {
        await app.vault.adapter.mkdir(backupDir);
    }
    
    await app.vault.adapter.write(backupPath, content);
};

// Fix leading slashes in content
const fixLeadingSlashes = (content, filePath) => {
    let modified = false;
    let fixCount = 0;
    const fixes = [];
    
    // Pattern to match markdown links with leading slashes
    // Captures: [text](/path) but not external links
    const linkRegex = /\[([^\]]*)\]\(\/([^)]+)\)/g;
    
    const newContent = content.replace(linkRegex, (match, text, path) => {
        // Skip if it's actually an external link that starts with //
        if (path.startsWith('/')) {
            return match;
        }
        
        modified = true;
        fixCount++;
        fixes.push({
            original: match,
            fixed: `[${text}](${path})`,
            path: path
        });
        
        return `[${text}](${path})`;
    });
    
    return { newContent, modified, fixCount, fixes };
};

// Process a single file
const processFile = async (file) => {
    try {
        const content = await app.vault.read(file);
        const result = fixLeadingSlashes(content, file.path);
        
        if (result.modified) {
            // Create backup
            await createBackup(file, content);
            
            // Write fixed content
            await app.vault.modify(file, result.newContent);
            
            stats.filesModified++;
            stats.linksFixed += result.fixCount;
            
            // Log each fix
            for (const fix of result.fixes) {
                await app.vault.adapter.append(
                    logFile,
                    `"${file.path}","${fix.original}","${fix.fixed}","${timestamp}"\n`
                );
            }
            
            return {
                file: file.path,
                fixed: result.fixCount,
                samples: result.fixes.slice(0, 3)
            };
        }
        
        return null;
    } catch (error) {
        stats.errors.push({ file: file.path, error: error.message });
        return null;
    }
};

// Generate summary report
const generateReport = (results) => {
    let report = `# Leading Slash Removal Report\n\n`;
    report += `**Generated**: ${new Date().toISOString()}\n`;
    report += `**Template**: T13-Remove-Leading-Slashes\n\n`;
    
    report += `## 🎯 Summary\n\n`;
    report += `- **Files Processed**: ${stats.filesProcessed}\n`;
    report += `- **Files Modified**: ${stats.filesModified}\n`;
    report += `- **Links Fixed**: ${stats.linksFixed}\n`;
    report += `- **Errors**: ${stats.errors.length}\n\n`;
    
    report += `## 📊 Fix Details\n\n`;
    
    if (results.length > 0) {
        report += `### Files Fixed\n\n`;
        results.slice(0, 20).forEach(result => {
            report += `#### ${result.file}\n`;
            report += `- **Links Fixed**: ${result.fixed}\n`;
            report += `- **Examples**:\n`;
            result.samples.forEach(fix => {
                report += `  - Before: \`${fix.original}\`\n`;
                report += `  - After: \`${fix.fixed}\`\n`;
            });
            report += `\n`;
        });
        
        if (results.length > 20) {
            report += `*... and ${results.length - 20} more files*\n\n`;
        }
    }
    
    if (stats.errors.length > 0) {
        report += `## ❌ Errors\n\n`;
        stats.errors.forEach(err => {
            report += `- **${err.file}**: ${err.error}\n`;
        });
    }
    
    report += `## 📁 Backup Location\n\n`;
    report += `All original files backed up to:\n`;
    report += `\`${BACKUP_DIR}/${timestamp}/\`\n\n`;
    
    report += `## ✅ Next Steps\n\n`;
    report += `1. Run validation again to confirm all leading slashes removed\n`;
    report += `2. Test a few files in Obsidian to ensure links work\n`;
    report += `3. Check Enveloppe compatibility\n`;
    
    return report;
};

// Main execution
try {
    // Ensure directories exist
    if (!await app.vault.adapter.exists(OUTPUT_DIR)) {
        await app.vault.adapter.mkdir(OUTPUT_DIR);
    }
    if (!await app.vault.adapter.exists(BACKUP_DIR)) {
        await app.vault.adapter.mkdir(BACKUP_DIR);
    }
    
    // Initialize log file
    await app.vault.adapter.write(
        logFile,
        `"File","Original Link","Fixed Link","Timestamp"\n`
    );
    
    const files = getTargetFiles();
    const totalFiles = files.length;
    
    const confirmMsg = `This will remove leading slashes from internal links in ${totalFiles} files.\n\n` +
                      `This is CRITICAL for Enveloppe compatibility.\n\n` +
                      `Proceed?`;
    
    if (!confirm(confirmMsg)) {
        tR += `## Operation Cancelled\n\nNo changes made.`;
        return;
    }
    
    const notice = new Notice(`Processing ${totalFiles} files...`, 0);
    const results = [];
    
    // Process files
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        stats.filesProcessed++;
        
        if (i % 50 === 0) {
            notice.setMessage(`Processing file ${i + 1}/${totalFiles}...`);
        }
        
        const result = await processFile(file);
        if (result) {
            results.push(result);
        }
    }
    
    notice.hide();
    
    // Generate and save report
    const report = generateReport(results);
    const reportPath = `${OUTPUT_DIR}/33-leading-slash-removal-report.md`;
    await app.vault.adapter.write(reportPath, report);
    
    // Display results
    if (stats.linksFixed > 0) {
        new Notice(`✅ Fixed ${stats.linksFixed} links in ${stats.filesModified} files!`, 5000);
        
        tR += `## ✅ Leading Slashes Removed!\n\n`;
        tR += `### Results\n`;
        tR += `- **Links Fixed**: ${stats.linksFixed}\n`;
        tR += `- **Files Modified**: ${stats.filesModified}\n`;
        tR += `- **Files Processed**: ${stats.filesProcessed}\n\n`;
        tR += `### Examples of Fixes\n`;
        
        results.slice(0, 3).forEach(result => {
            tR += `\n**${result.file}**:\n`;
            result.samples.forEach(fix => {
                tR += `- \`${fix.original}\` → \`${fix.fixed}\`\n`;
            });
        });
        
        tR += `\n### 📄 Reports\n`;
        tR += `- Fix Log: \`${logFile}\`\n`;
        tR += `- Summary: \`${reportPath}\`\n`;
        tR += `- Backup: \`${BACKUP_DIR}/${timestamp}/\`\n\n`;
        tR += `### ⚠️ CRITICAL NEXT STEP\n`;
        tR += `Run validation again to confirm all issues resolved!`;
    } else {
        tR += `## No Leading Slashes Found\n\n`;
        tR += `No links with leading slashes were found to fix.`;
    }
    
} catch (error) {
    console.error("Error:", error);
    tR += `## ❌ Error\n\n${error.message}`;
    new Notice(`Error: ${error.message}`, 5000);
}
%>

---

*Critical fix for Enveloppe compatibility*