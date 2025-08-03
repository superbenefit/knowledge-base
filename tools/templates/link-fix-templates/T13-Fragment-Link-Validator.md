<%*
// T13-Fragment-Link-Validator
// Purpose: Validate that fragment links (#heading, ^block-id) point to actual targets
// This catches issues the basic file existence check would miss

const OUTPUT_DIR = 'link-fix';
const timestamp = tp.date.now("YYYYMMDD-HHmmss");

const validation = {
    startTime: Date.now(),
    fragmentLinks: {
        total: 0,
        headingLinks: 0,
        blockLinks: 0,
        valid: 0,
        invalid: []
    }
};

// ONLY scan these directories (from the normalization plan)
const PROJECT_SCOPE = ['artifacts/', 'notes/', 'links/', 'tags/'];

// EXCLUDE these directories (from T12 validator)
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

// Extract headings from a file
const extractHeadings = (content) => {
    const headings = [];
    const headingRegex = /^#{1,6}\s+(.+)$/gm;
    let match;
    while ((match = headingRegex.exec(content)) !== null) {
        const heading = match[1].trim();
        // Convert to anchor format (lowercase, replace spaces with hyphens)
        const anchor = heading.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
        headings.push({ original: heading, anchor });
    }
    return headings;
};

// Extract block IDs from a file
const extractBlockIds = (content) => {
    const blockIds = [];
    const blockIdRegex = /\^([a-zA-Z0-9-]+)$/gm;
    let match;
    while ((match = blockIdRegex.exec(content)) !== null) {
        blockIds.push(match[1]);
    }
    return blockIds;
};

// Validate fragment links
const validateFragmentLinks = async () => {
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
    
    for (const file of files) {
        const content = await app.vault.read(file);
        
        // Find all markdown links with fragments
        const fragmentLinkRegex = /\[([^\]]*)\]\(([^)#]+)(#[^)]+)\)/g;
        let match;
        
        while ((match = fragmentLinkRegex.exec(content)) !== null) {
            const [fullMatch, linkText, targetPath, fragment] = match;
            validation.fragmentLinks.total++;
            
            // Determine fragment type
            if (fragment.startsWith('#^')) {
                validation.fragmentLinks.blockLinks++;
            } else {
                validation.fragmentLinks.headingLinks++;
            }
            
            // Get target file
            const targetFile = app.vault.getAbstractFileByPath(targetPath);
            if (targetFile && targetFile instanceof tp.obsidian.TFile) {
                const targetContent = await app.vault.read(targetFile);
                
                if (fragment.startsWith('#^')) {
                    // Block reference
                    const blockId = fragment.substring(2);
                    const blockIds = extractBlockIds(targetContent);
                    
                    if (blockIds.includes(blockId)) {
                        validation.fragmentLinks.valid++;
                    } else {
                        validation.fragmentLinks.invalid.push({
                            source: file.path,
                            link: fullMatch,
                            target: targetPath,
                            fragment: fragment,
                            issue: 'Block ID not found'
                        });
                    }
                } else {
                    // Heading reference
                    const headingAnchor = fragment.substring(1);
                    const headings = extractHeadings(targetContent);
                    
                    if (headings.some(h => h.anchor === headingAnchor)) {
                        validation.fragmentLinks.valid++;
                    } else {
                        validation.fragmentLinks.invalid.push({
                            source: file.path,
                            link: fullMatch,
                            target: targetPath,
                            fragment: fragment,
                            issue: 'Heading not found',
                            availableHeadings: headings.map(h => h.anchor).slice(0, 3)
                        });
                    }
                }
            }
        }
    }
};

// Generate report
const generateReport = () => {
    const duration = ((Date.now() - validation.startTime) / 1000).toFixed(1);
    let report = `# Fragment Link Validation Report\n\n`;
    report += `**Generated**: ${new Date().toISOString()}\n`;
    report += `**Duration**: ${duration} seconds\n`;
    report += `**Scope**: artifacts/, notes/, links/, tags/ (excluding archives)\n\n`;
    
    report += `## Summary\n\n`;
    report += `- **Total Fragment Links**: ${validation.fragmentLinks.total}\n`;
    report += `- **Heading Links**: ${validation.fragmentLinks.headingLinks}\n`;
    report += `- **Block References**: ${validation.fragmentLinks.blockLinks}\n`;
    report += `- **Valid**: ${validation.fragmentLinks.valid}\n`;
    report += `- **Invalid**: ${validation.fragmentLinks.invalid.length}\n\n`;
    
    if (validation.fragmentLinks.invalid.length > 0) {
        report += `## Invalid Fragment Links\n\n`;
        validation.fragmentLinks.invalid.forEach(issue => {
            report += `### ${issue.source}\n`;
            report += `- **Link**: \`${issue.link}\`\n`;
            report += `- **Fragment**: \`${issue.fragment}\`\n`;
            report += `- **Issue**: ${issue.issue}\n`;
            if (issue.availableHeadings) {
                report += `- **Available headings**: ${issue.availableHeadings.join(', ')}\n`;
            }
            report += `\n`;
        });
    }
    
    return report;
};

// Main execution
try {
    const notice = new Notice("Validating fragment links...", 0);
    await validateFragmentLinks();
    const report = generateReport();
    
    const reportPath = `${OUTPUT_DIR}/70-fragment-validation.md`;
    await app.vault.adapter.write(reportPath, report);
    
    notice.hide();
    new Notice(`Fragment validation complete. Invalid: ${validation.fragmentLinks.invalid.length}`, 5000);
    
    tR += `## Fragment Link Validation\n\n`;
    tR += `- **Total Fragment Links**: ${validation.fragmentLinks.total}\n`;
    tR += `- **Invalid**: ${validation.fragmentLinks.invalid.length}\n`;
    tR += `\nReport saved to: \`${reportPath}\``;
    
} catch (error) {
    console.error("Fragment validation error:", error);
    tR += `\n## ❌ Error\n\n${error.message}`;
}
%>