---
purpose: Protect code blocks and inline code from link conversion
modes:
  - Single File
  - Directory
  - From List
outputs:
  - Protected files ready for plugin conversion
  - Code block inventory CSV
  - Protection log
rollback: Restore original code blocks
---

# Code Block Protection

**Executed**: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>
**Template**: T06-Protect-Code-Blocks

## Protection Configuration

<%*
// T06-Protect-Code-Blocks
// Purpose: Replace code blocks with placeholders before link conversion
// Features: Protects code blocks, inline code, and Templater syntax

const OUTPUT_DIR = 'link-fix';
const BACKUP_DIR = 'link-fix/backups';
const timestamp = tp.date.now("YYYYMMDD-HHmmss");
const backupFolder = `${BACKUP_DIR}/code-protection-${timestamp}`;
const inventoryFile = `53-code-block-inventory-${timestamp}.csv`;
const logFile = `53-code-protection-log-${timestamp}.md`;

// Storage for protected content
const protectedContent = new Map();
let protectionId = 0;

// Results tracking
const results = {
    filesProcessed: 0,
    filesProtected: 0,
    blocksProtected: 0,
    inlineProtected: 0,
    templaterProtected: 0,
    errors: []
};

// Get execution mode
const mode = await tp.system.prompt(
    "Select protection mode",
    "",
    ["Single File", "Directory", "From List", "Test Mode"]
);

// Create unique placeholder
const createPlaceholder = (type) => {
    const id = `CODE_BLOCK_${type}_${protectionId++}_PROTECTED`;
    return id;
};

// Protect code blocks
const protectCodeBlocks = (content, filePath) => {
    let protected = content;
    let count = 0;
    
    // Protect fenced code blocks ```
    protected = protected.replace(/```[\s\S]*?```/g, (match) => {
        const placeholder = createPlaceholder('FENCED');
        protectedContent.set(`${filePath}:${placeholder}`, match);
        count++;
        return placeholder;
    });
    
    // Protect indented code blocks (4 spaces or tab)
    protected = protected.replace(/(?:^|\n)((?:    |\t).*(?:\n(?:    |\t).*)*)/g, (match, block) => {
        const placeholder = createPlaceholder('INDENTED');
        protectedContent.set(`${filePath}:${placeholder}`, match);
        count++;
        return placeholder;
    });
    
    results.blocksProtected += count;
    return protected;
};

// Protect inline code
const protectInlineCode = (content, filePath) => {
    let protected = content;
    let count = 0;
    
    // Protect inline code `code`
    protected = protected.replace(/`[^`\n]+`/g, (match) => {
        const placeholder = createPlaceholder('INLINE');
        protectedContent.set(`${filePath}:${placeholder}`, match);
        count++;
        return placeholder;
    });
    
    results.inlineProtected += count;
    return protected;
};

// Protect Templater syntax
const protectTemplaterSyntax = (content, filePath) => {
    let protected = content;
    let count = 0;
    
    // Protect Templater blocks <%* ... %>
    protected = protected.replace(/<%\*[\s\S]*?%>/g, (match) => {
        const placeholder = createPlaceholder('TEMPLATER_BLOCK');
        protectedContent.set(`${filePath}:${placeholder}`, match);
        count++;
        return placeholder;
    });
    
    // Protect Templater inline <% ... %>
    protected = protected.replace(/<%[^*][^%]*%>/g, (match) => {
        const placeholder = createPlaceholder('TEMPLATER_INLINE');
        protectedContent.set(`${filePath}:${placeholder}`, match);
        count++;
        return placeholder;
    });
    
    results.templaterProtected += count;
    return protected;
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
            error: error.message
        });
        return false;
    }
};

// Process a single file
const processFile = async (filePath) => {
    try {
        const file = app.vault.getAbstractFileByPath(filePath);
        if (!file) {
            throw new Error('File not found');
        }
        
        const originalContent = await app.vault.read(file);
        let protectedContent = originalContent;
        
        // Apply protection in order
        protectedContent = protectCodeBlocks(protectedContent, filePath);
        protectedContent = protectInlineCode(protectedContent, filePath);
        
        // Only protect Templater in template files
        if (filePath.includes('/templates/')) {
            protectedContent = protectTemplaterSyntax(protectedContent, filePath);
        }
        
        // Only save if changes were made
        if (protectedContent !== originalContent) {
            if (await createBackup(filePath)) {
                await app.vault.modify(file, protectedContent);
                results.filesProtected++;
            }
        }
        
        results.filesProcessed++;
        
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error);
        results.errors.push({
            file: filePath,
            error: error.message
        });
    }
};

// Generate inventory CSV
const generateInventory = () => {
    const headers = ['File Path', 'Placeholder ID', 'Type', 'Original Length'];
    let csv = headers.join(',') + '\n';
    
    protectedContent.forEach((content, key) => {
        const [filePath, placeholder] = key.split(':');
        const type = placeholder.match(/CODE_BLOCK_([^_]+)_/)[1];
        const row = [
            `"${filePath}"`,
            placeholder,
            type,
            content.length
        ];
        csv += row.join(',') + '\n';
    });
    
    return csv;
};

// Generate restoration script
const generateRestorationScript = () => {
    let script = `// Code Block Restoration Script
// Generated: ${new Date().toISOString()}
// Total placeholders: ${protectedContent.size}

const restoreCodeBlocks = async (filePath) => {
    const file = app.vault.getAbstractFileByPath(filePath);
    if (!file) return;
    
    let content = await app.vault.read(file);
    const placeholders = [
`;
    
    protectedContent.forEach((original, key) => {
        const [fp, placeholder] = key.split(':');
        script += `        { file: "${fp}", placeholder: "${placeholder}", content: ${JSON.stringify(original)} },\n`;
    });
    
    script += `    ];
    
    placeholders.forEach(item => {
        if (item.file === filePath) {
            content = content.replace(item.placeholder, item.content);
        }
    });
    
    await app.vault.modify(file, content);
};

// To restore all files:
const restoreAll = async () => {
    const files = new Set(${JSON.stringify([...new Set([...protectedContent.keys()].map(k => k.split(':')[0]))])});
    for (const file of files) {
        await restoreCodeBlocks(file);
    }
};
`;
    
    return script;
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
            
    } else if (mode === "From List") {
        // Provide the list of 3 files with code block issues
        const filesWithCodeBlockIssues = [
            "tools/plugin-notes/dataview/dataview-queries.md",
            "tools/templates/link-fix-templates/T06-Protect-Code-Blocks.md",
            "notes/rpp/rpp-playbooks/playbook-working-docs/07-resource-audit.md"
        ];
        targetFiles = filesWithCodeBlockIssues;
        
    } else if (mode === "Test Mode") {
        // Create a test file
        const testContent = `# Test File
        
Regular [[wikilink]] and [markdown](link.md).

\`\`\`javascript
// Code block with [[wikilink]] and [markdown](link.md)
const test = "[another](another) link";
\`\`\`

Inline code: \`[[inline-wiki]]\` and \`[inline-md](link.md)\`

<%* 
// Templater block
const link = "[[templater-link]]";
%>

Regular text with [[more-links]].`;
        
        await app.vault.adapter.write(`${OUTPUT_DIR}/code-protection-test.md`, testContent);
        targetFiles = [`${OUTPUT_DIR}/code-protection-test.md`];
    }
    
    if (targetFiles.length === 0) {
        throw new Error("No files selected for processing");
    }
    
    // Create backup directory
    await app.vault.adapter.mkdir(backupFolder);
    
    // Process files
    const notice = new Notice(`Protecting code blocks...`, 0);
    
    for (let i = 0; i < targetFiles.length; i++) {
        notice.setMessage(`Processing ${i + 1}/${targetFiles.length}`);
        await processFile(targetFiles[i]);
    }
    
    notice.hide();
    
    // Save inventory
    const inventoryContent = generateInventory();
    await app.vault.adapter.write(`${OUTPUT_DIR}/${inventoryFile}`, inventoryContent);
    
    // Save restoration script
    const restorationScript = generateRestorationScript();
    await app.vault.adapter.write(`${OUTPUT_DIR}/restore-code-blocks-${timestamp}.js`, restorationScript);
    
    // Generate report
    tR += `## Protection Results\n\n`;
    tR += `- **Mode**: ${mode}\n`;
    tR += `- **Files processed**: ${results.filesProcessed}\n`;
    tR += `- **Files protected**: ${results.filesProtected}\n`;
    tR += `- **Code blocks**: ${results.blocksProtected}\n`;
    tR += `- **Inline code**: ${results.inlineProtected}\n`;
    tR += `- **Templater syntax**: ${results.templaterProtected}\n`;
    tR += `- **Total placeholders**: ${protectedContent.size}\n\n`;
    
    if (results.errors.length > 0) {
        tR += `### ⚠️ Errors\n\n`;
        results.errors.forEach(err => {
            tR += `- ${err.file}: ${err.error}\n`;
        });
    }
    
    tR += `### 📁 Outputs\n\n`;
    tR += `- **Backup**: \`${backupFolder}\`\n`;
    tR += `- **Inventory**: \`${OUTPUT_DIR}/${inventoryFile}\`\n`;
    tR += `- **Restoration script**: \`${OUTPUT_DIR}/restore-code-blocks-${timestamp}.js\`\n`;
    
    tR += `\n### Files with Code Block Issues\n\n`;
    if (mode === "From List") {
        tR += `The following files were processed:\n`;
        targetFiles.forEach(file => {
            tR += `- ${file}\n`;
        });
    }
    
    new Notice(`Protection complete: ${protectedContent.size} code sections protected`);
    
} catch (error) {
    console.error("Protection error:", error);
    tR += `\n## ❌ Error\n\n${error.message}`;
    new Notice(`Error: ${error.message}`);
}
%>

## After Link Conversion

To restore code blocks after running the Obsidian Links plugin:

1. Run the generated restoration script
2. Or use the rollback function below

## Rollback Function

```javascript
// Copy and run this in console to restore all code blocks
<% `(async () => {
    const restorationFile = '${OUTPUT_DIR}/restore-code-blocks-${timestamp}.js';
    const script = await app.vault.adapter.read(restorationFile);
    eval(script);
    await restoreAll();
    new Notice('Code blocks restored!');
})();` %>
```

---

*Template: T06-Protect-Code-Blocks*