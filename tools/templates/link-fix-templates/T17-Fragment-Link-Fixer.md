<%*
// T17-Fragment-Link-Fixer
// Purpose: Fix invalid fragment links identified in validation
// Fixes: Incorrect pipe syntax and validates heading anchors

const OUTPUT_DIR = 'link-fix';
const timestamp = tp.date.now("YYYYMMDD-HHmmss");

const fixer = {
    startTime: Date.now(),
    stats: {
        filesProcessed: 0,
        fragmentLinksFound: 0,
        pipeSyntaxFixed: 0,
        headingValidated: 0,
        headingFixed: 0,
        unfixable: []
    },
    backupDir: `${OUTPUT_DIR}/backups/fragment-fix-${timestamp}`
};

// ONLY scan these directories (from the normalization plan)
const PROJECT_SCOPE = ['artifacts/', 'notes/', 'links/', 'tags/'];

// EXCLUDE these directories
const EXCLUDED_DIRS = [
    'notes/general-circle/',
    'notes/archive/',
    'notes/wp/',
    'notes/dao-primitives/primitives-archive/',
    'notes/rpp/rpp-archive/',
    'notes/ics/ccc/archive/',
    '/archive/',
    '-archive/'
];

// Create backup directory
const createBackupDir = async () => {
    try {
        await app.vault.adapter.mkdir(fixer.backupDir);
        return true;
    } catch (error) {
        console.error("Failed to create backup directory:", error);
        return false;
    }
};

// Extract headings from content
const extractHeadings = (content) => {
    const headings = [];
    const headingRegex = /^#{1,6}\s+(.+)$/gm;
    let match;
    while ((match = headingRegex.exec(content)) !== null) {
        const heading = match[1].trim();
        // Convert to anchor format (lowercase, replace special chars with hyphens)
        const anchor = heading.toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '');
        headings.push({ 
            original: heading, 
            anchor: anchor,
            variations: [
                anchor,
                heading.toLowerCase().replace(/\s+/g, '-'),
                heading.replace(/\s+/g, '-')
            ]
        });
    }
    return headings;
};

// Fix pipe syntax in fragment links
const fixPipeSyntax = (content) => {
    let fixed = content;
    let fixCount = 0;
    
    // Pattern 1: Empty link text with pipe in fragment
    // [](path#heading|display) -> [display](path#heading)
    const emptyLinkPattern = /\[\]\(([^)#]+)(#[^|)]+)\|([^)]+)\)/g;
    fixed = fixed.replace(emptyLinkPattern, (match, path, fragment, display) => {
        fixCount++;
        // Clean up the fragment (remove the pipe part)
        const cleanFragment = fragment.split('|')[0];
        // Convert to proper anchor format
        const anchor = cleanFragment.substring(1).toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '');
        return `[${display}](${path}#${anchor})`;
    });
    
    // Pattern 2: Link text with pipe in fragment
    // [text](path#heading|display) -> [text](path#heading)
    const linkWithPipePattern = /\[([^\]]+)\]\(([^)#]+)(#[^|)]+)\|([^)]+)\)/g;
    fixed = fixed.replace(linkWithPipePattern, (match, text, path, fragment, display) => {
        fixCount++;
        // Clean up the fragment
        const cleanFragment = fragment.split('|')[0];
        const anchor = cleanFragment.substring(1).toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '');
        return `[${text}](${path}#${anchor})`;
    });
    
    return { content: fixed, count: fixCount };
};

// Validate and fix heading anchors
const validateAndFixHeadings = async (content, filePath) => {
    let fixed = content;
    let validatedCount = 0;
    let fixedCount = 0;
    const issues = [];
    
    // Find all markdown links with fragments
    const fragmentLinkRegex = /\[([^\]]*)\]\(([^)#]+)(#[^)]+)\)/g;
    const matches = [...fixed.matchAll(fragmentLinkRegex)];
    
    for (const match of matches) {
        const [fullMatch, linkText, targetPath, fragment] = match;
        
        // Skip block references (they use ^)
        if (fragment.includes('^')) continue;
        
        // Get target file
        const targetFile = app.vault.getAbstractFileByPath(targetPath);
        if (targetFile && targetFile instanceof tp.obsidian.TFile) {
            const targetContent = await app.vault.read(targetFile);
            const headings = extractHeadings(targetContent);
            
            const fragmentAnchor = fragment.substring(1);
            
            // Check if anchor exists
            let found = false;
            let correctAnchor = null;
            
            // Try exact match first
            for (const heading of headings) {
                if (heading.anchor === fragmentAnchor || 
                    heading.variations.includes(fragmentAnchor)) {
                    found = true;
                    correctAnchor = heading.anchor;
                    validatedCount++;
                    break;
                }
            }
            
            // If not found, try fuzzy matching
            if (!found) {
                // Try to find a close match
                const searchTerm = fragmentAnchor.replace(/-/g, ' ').toLowerCase();
                for (const heading of headings) {
                    const headingText = heading.original.toLowerCase();
                    if (headingText.includes(searchTerm) || 
                        searchTerm.includes(headingText)) {
                        correctAnchor = heading.anchor;
                        found = true;
                        break;
                    }
                }
                
                if (found && correctAnchor) {
                    // Fix the anchor
                    const newLink = `[${linkText || correctAnchor}](${targetPath}#${correctAnchor})`;
                    fixed = fixed.replace(fullMatch, newLink);
                    fixedCount++;
                } else {
                    issues.push({
                        file: filePath,
                        link: fullMatch,
                        fragment: fragment,
                        availableHeadings: headings.map(h => h.anchor).slice(0, 5)
                    });
                }
            }
        }
    }
    
    return { 
        content: fixed, 
        validated: validatedCount, 
        fixed: fixedCount,
        issues 
    };
};

// Process a single file
const processFile = async (file) => {
    const content = await app.vault.read(file);
    let modified = false;
    let newContent = content;
    
    // Check if file has fragment links
    if (!content.includes('](') || !content.includes('#')) {
        return { modified: false };
    }
    
    // Create backup
    const backupPath = `${fixer.backupDir}/${file.path}`;
    const backupDir = backupPath.substring(0, backupPath.lastIndexOf('/'));
    await app.vault.adapter.mkdir(backupDir);
    await app.vault.adapter.write(backupPath, content);
    
    // Fix pipe syntax first
    const pipeFix = fixPipeSyntax(newContent);
    if (pipeFix.count > 0) {
        newContent = pipeFix.content;
        fixer.stats.pipeSyntaxFixed += pipeFix.count;
        modified = true;
    }
    
    // Validate and fix heading anchors
    const headingFix = await validateAndFixHeadings(newContent, file.path);
    if (headingFix.fixed > 0) {
        newContent = headingFix.content;
        fixer.stats.headingFixed += headingFix.fixed;
        modified = true;
    }
    
    fixer.stats.headingValidated += headingFix.validated;
    
    if (headingFix.issues.length > 0) {
        fixer.stats.unfixable.push(...headingFix.issues);
    }
    
    // Save if modified
    if (modified) {
        await app.vault.modify(file, newContent);
    }
    
    return { 
        modified, 
        pipeSyntaxFixed: pipeFix.count,
        headingFixed: headingFix.fixed,
        issues: headingFix.issues
    };
};

// Generate fix report
const generateReport = () => {
    const duration = ((Date.now() - fixer.startTime) / 1000).toFixed(1);
    let report = `# Fragment Link Fix Report\n\n`;
    report += `**Generated**: ${new Date().toISOString()}\n`;
    report += `**Duration**: ${duration} seconds\n`;
    report += `**Backup Location**: ${fixer.backupDir}\n\n`;
    
    report += `## Summary\n\n`;
    report += `- **Files Processed**: ${fixer.stats.filesProcessed}\n`;
    report += `- **Fragment Links Found**: ${fixer.stats.fragmentLinksFound}\n`;
    report += `- **Pipe Syntax Fixed**: ${fixer.stats.pipeSyntaxFixed}\n`;
    report += `- **Headings Validated**: ${fixer.stats.headingValidated}\n`;
    report += `- **Headings Fixed**: ${fixer.stats.headingFixed}\n`;
    report += `- **Unfixable Issues**: ${fixer.stats.unfixable.length}\n\n`;
    
    if (fixer.stats.pipeSyntaxFixed > 0) {
        report += `## Pipe Syntax Fixes\n\n`;
        report += `Fixed ${fixer.stats.pipeSyntaxFixed} instances of incorrect pipe syntax in fragments.\n\n`;
        report += `**Pattern fixed**: \`[](path#heading|text)\` → \`[text](path#heading)\`\n\n`;
    }
    
    if (fixer.stats.headingFixed > 0) {
        report += `## Heading Anchor Fixes\n\n`;
        report += `Corrected ${fixer.stats.headingFixed} heading anchors to match actual headings.\n\n`;
    }
    
    if (fixer.stats.unfixable.length > 0) {
        report += `## Unfixable Issues\n\n`;
        report += `These fragment links could not be automatically fixed and need manual attention:\n\n`;
        
        // Group by file
        const byFile = {};
        fixer.stats.unfixable.forEach(issue => {
            if (!byFile[issue.file]) {
                byFile[issue.file] = [];
            }
            byFile[issue.file].push(issue);
        });
        
        Object.entries(byFile).forEach(([file, issues]) => {
            report += `### ${file}\n\n`;
            issues.forEach(issue => {
                report += `- **Link**: \`${issue.link}\`\n`;
                report += `- **Fragment**: \`${issue.fragment}\`\n`;
                if (issue.availableHeadings.length > 0) {
                    report += `- **Available headings**: ${issue.availableHeadings.join(', ')}\n`;
                }
                report += `\n`;
            });
        });
    }
    
    report += `## Next Steps\n\n`;
    if (fixer.stats.unfixable.length === 0) {
        report += `✅ All fragment links have been fixed! Run the Fragment Link Validator again to confirm.\n`;
    } else {
        report += `⚠️ ${fixer.stats.unfixable.length} links need manual fixing. Review the unfixable issues above.\n`;
    }
    
    return report;
};

// Main execution
try {
    const notice = new Notice("Fixing fragment links...", 0);
    
    // Create backup directory
    if (!await createBackupDir()) {
        throw new Error("Failed to create backup directory");
    }
    
    // Get files to process
    const files = app.vault.getMarkdownFiles().filter(f => {
        // Check if file should be excluded
        for (const excludeDir of EXCLUDED_DIRS) {
            if (f.path.includes(excludeDir)) {
                return false;
            }
        }
        
        // Check if in project scope
        return PROJECT_SCOPE.some(dir => f.path.startsWith(dir));
    });
    
    // Process each file
    for (const file of files) {
        notice.setMessage(`Processing ${file.path}...`);
        
        const result = await processFile(file);
        if (result.modified) {
            fixer.stats.filesProcessed++;
        }
    }
    
    // Count total fragment links (do a quick scan)
    for (const file of files) {
        const content = await app.vault.read(file);
        const fragmentMatches = content.match(/\[([^\]]*)\]\(([^)#]+)(#[^)]+)\)/g) || [];
        fixer.stats.fragmentLinksFound += fragmentMatches.length;
    }
    
    // Generate report
    const report = generateReport();
    const reportPath = `${OUTPUT_DIR}/75-fragment-fix-report.md`;
    await app.vault.adapter.write(reportPath, report);
    
    notice.hide();
    
    const successMsg = fixer.stats.unfixable.length === 0 
        ? `✅ Fixed all fragment links!` 
        : `⚠️ Fixed ${fixer.stats.pipeSyntaxFixed + fixer.stats.headingFixed} links, ${fixer.stats.unfixable.length} need manual attention`;
    
    new Notice(successMsg, 5000);
    
    tR += `## Fragment Link Fix Complete\n\n`;
    tR += `- **Pipe Syntax Fixed**: ${fixer.stats.pipeSyntaxFixed}\n`;
    tR += `- **Heading Anchors Fixed**: ${fixer.stats.headingFixed}\n`;
    tR += `- **Unfixable Issues**: ${fixer.stats.unfixable.length}\n\n`;
    tR += `Report saved to: \`${reportPath}\`\n`;
    tR += `Backups saved to: \`${fixer.backupDir}\``;
    
} catch (error) {
    console.error("Fragment fix error:", error);
    tR += `\n## ❌ Error\n\n${error.message}`;
    new Notice(`Fragment fix error: ${error.message}`, 5000);
}
%>