<%*
// T16-Edge-Case-Pattern-Validator
// Purpose: Detect unusual link patterns and edge cases
// Catches obscure issues that standard validation might miss

const OUTPUT_DIR = 'link-fix';
const timestamp = tp.date.now("YYYYMMDD-HHmmss");

const edgeCases = {
    startTime: Date.now(),
    patterns: {
        malformedLinks: [],
        nestedBrackets: [],
        escapedCharacters: [],
        mixedSyntax: [],
        embeddedContent: [],
        unusualPaths: [],
        whitespaceIssues: [],
        specialCharacters: []
    },
    statistics: {
        totalFiles: 0,
        filesWithIssues: 0,
        totalIssues: 0
    }
};

// Pattern definitions
const patterns = {
    // Malformed link patterns
    malformed: [
        /\[\[[^\]]*\]/g,  // Missing closing bracket
        /\[[^\]]*\]\]/g,  // Missing opening bracket  
        /\[([^\]]*)\]\([^)]*$/gm,  // Unclosed parenthesis
        /\[([^\]]*)\][^(]/g  // Missing parenthesis after brackets
    ],
    
    // Nested or complex patterns
    nested: [
        /\[\[.*\[\[.*\]\].*\]\]/g,  // Nested wikilinks
        /\[.*\[.*\].*\]\(.*\)/g  // Nested markdown links
    ],
    
    // Escaped characters that might cause issues
    escaped: [
        /\\\[/g,  // Escaped brackets
        /\\\]/g,
        /\\\(/g,  // Escaped parentheses
        /\\\)/g
    ],
    
    // Mixed syntax
    mixed: [
        /\[\[([^\]]+)\]\]\(([^)]+)\)/g,  // Wikilink with parentheses
        /\[([^\]]*)\]\[\[([^\]]+)\]\]/g  // Markdown with wikilink
    ],
    
    // Unusual paths
    unusual: [
        /\]\(\.{3,}/g,  // Three or more dots
        /\]\([^)]*\s+[^)]*\)/g,  // Spaces in paths
        /\]\(.*[<>:"|?*].*\)/g,  // Invalid filename characters
        /\]\(\/\//g,  // Double slashes
        /\]\([^)]*\.{2,}[^)]*\)/g  // Multiple dots in filename
    ],
    
    // Whitespace issues
    whitespace: [
        /\[\s+[^\]]*\]/g,  // Leading whitespace in link text
        /\[[^\]]*\s+\]/g,  // Trailing whitespace in link text
        /\]\(\s+[^)]*\)/g,  // Leading whitespace in path
        /\]\([^)]*\s+\)/g  // Trailing whitespace in path
    ]
};

// Scan file for edge cases
const scanFileForEdgeCases = async (file) => {
    const content = await app.vault.read(file);
    const issues = [];
    
    // Check malformed links
    for (const pattern of patterns.malformed) {
        const matches = content.match(pattern) || [];
        if (matches.length > 0) {
            issues.push({
                type: 'malformed',
                pattern: pattern.toString(),
                matches: matches.slice(0, 3),
                count: matches.length
            });
        }
    }
    
    // Check nested patterns
    for (const pattern of patterns.nested) {
        const matches = content.match(pattern) || [];
        if (matches.length > 0) {
            issues.push({
                type: 'nested',
                pattern: 'Nested brackets',
                matches: matches.slice(0, 3),
                count: matches.length
            });
        }
    }
    
    // Check escaped characters near links
    const linkRegex = /\[([^\]]*)\](?:\(([^)]+)\))?/g;
    let match;
    while ((match = linkRegex.exec(content)) !== null) {
        const startIndex = match.index;
        const endIndex = startIndex + match[0].length;
        
        // Check for escaped characters around the link
        const contextStart = Math.max(0, startIndex - 5);
        const contextEnd = Math.min(content.length, endIndex + 5);
        const context = content.substring(contextStart, contextEnd);
        
        if (context.includes('\\[') || context.includes('\\]') || 
            context.includes('\\(') || context.includes('\\)')) {
            issues.push({
                type: 'escaped',
                pattern: 'Escaped characters near link',
                matches: [context],
                count: 1
            });
        }
    }
    
    // Check mixed syntax
    for (const pattern of patterns.mixed) {
        const matches = content.match(pattern) || [];
        if (matches.length > 0) {
            issues.push({
                type: 'mixed',
                pattern: 'Mixed link syntax',
                matches: matches.slice(0, 3),
                count: matches.length
            });
        }
    }
    
    // Check embedded content
    const embedPatterns = [
        /!\[\[([^\]]+)\]\]/g,  // Embedded wikilinks
        /!\[([^\]]*)\]\(([^)]+)\)/g  // Embedded markdown
    ];
    
    for (const pattern of embedPatterns) {
        const matches = content.match(pattern) || [];
        if (matches.length > 0) {
            issues.push({
                type: 'embedded',
                pattern: 'Embedded content',
                matches: matches.slice(0, 3),
                count: matches.length
            });
        }
    }
    
    // Check unusual paths
    for (const pattern of patterns.unusual) {
        const matches = content.match(pattern) || [];
        if (matches.length > 0) {
            issues.push({
                type: 'unusual',
                pattern: pattern.source.substring(0, 30) + '...',
                matches: matches.slice(0, 3),
                count: matches.length
            });
        }
    }
    
    // Check whitespace issues
    for (const pattern of patterns.whitespace) {
        const matches = content.match(pattern) || [];
        if (matches.length > 0) {
            issues.push({
                type: 'whitespace',
                pattern: 'Whitespace in links',
                matches: matches.map(m => `"${m}"`).slice(0, 3),
                count: matches.length
            });
        }
    }
    
    // Check for special characters in link paths
    const linkPathRegex = /\]\(([^)]+)\)/g;
    while ((match = linkPathRegex.exec(content)) !== null) {
        const path = match[1];
        
        // Check for URL encoding
        if (path.includes('%20') || path.includes('%')) {
            issues.push({
                type: 'special',
                pattern: 'URL-encoded characters',
                matches: [match[0]],
                count: 1
            });
        }
        
        // Check for query strings or fragments in unusual places
        if (path.includes('?') && !path.startsWith('http')) {
            issues.push({
                type: 'special',
                pattern: 'Query string in local path',
                matches: [match[0]],
                count: 1
            });
        }
    }
    
    return issues;
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

// Scan all files
const scanAllFiles = async () => {
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
    
    edgeCases.statistics.totalFiles = files.length;
    
    for (const file of files) {
        const issues = await scanFileForEdgeCases(file);
        
        if (issues.length > 0) {
            edgeCases.statistics.filesWithIssues++;
            edgeCases.statistics.totalIssues += issues.length;
            
            // Categorize issues
            issues.forEach(issue => {
                const category = edgeCases.patterns[issue.type + (issue.type.endsWith('s') ? '' : 's')] || 
                               edgeCases.patterns[issue.type] ||
                               edgeCases.patterns.unusualPaths;
                
                category.push({
                    file: file.path,
                    ...issue
                });
            });
        }
    }
};

// Generate report
const generateReport = () => {
    const duration = ((Date.now() - edgeCases.startTime) / 1000).toFixed(1);
    let report = `# Edge Case & Pattern Validation Report\n\n`;
    report += `**Generated**: ${new Date().toISOString()}\n`;
    report += `**Duration**: ${duration} seconds\n\n`;
    
    report += `## Summary\n\n`;
    report += `- **Total Files Scanned**: ${edgeCases.statistics.totalFiles}\n`;
    report += `- **Files with Issues**: ${edgeCases.statistics.filesWithIssues}\n`;
    report += `- **Total Issues Found**: ${edgeCases.statistics.totalIssues}\n\n`;
    
    // Report each category
    const categories = [
        { key: 'malformedLinks', title: 'Malformed Links' },
        { key: 'nestedBrackets', title: 'Nested Brackets' },
        { key: 'escapedCharacters', title: 'Escaped Characters' },
        { key: 'mixedSyntax', title: 'Mixed Syntax' },
        { key: 'embeddedContent', title: 'Embedded Content' },
        { key: 'unusualPaths', title: 'Unusual Paths' },
        { key: 'whitespaceIssues', title: 'Whitespace Issues' },
        { key: 'specialCharacters', title: 'Special Characters' }
    ];
    
    categories.forEach(cat => {
        const issues = edgeCases.patterns[cat.key];
        if (issues.length > 0) {
            report += `## ${cat.title}\n\n`;
            report += `Found ${issues.length} instances:\n\n`;
            
            // Group by file
            const byFile = {};
            issues.forEach(issue => {
                if (!byFile[issue.file]) {
                    byFile[issue.file] = [];
                }
                byFile[issue.file].push(issue);
            });
            
            Object.entries(byFile).slice(0, 5).forEach(([file, fileIssues]) => {
                report += `### ${file}\n`;
                fileIssues.forEach(issue => {
                    report += `- **Pattern**: ${issue.pattern}\n`;
                    report += `- **Count**: ${issue.count}\n`;
                    report += `- **Examples**: ${issue.matches.join(', ')}\n`;
                });
                report += `\n`;
            });
            
            if (Object.keys(byFile).length > 5) {
                report += `*... and ${Object.keys(byFile).length - 5} more files*\n\n`;
            }
        }
    });
    
    // Risk assessment
    report += `## Risk Assessment\n\n`;
    
    const highRisk = edgeCases.patterns.malformedLinks.length + 
                    edgeCases.patterns.mixedSyntax.length;
    const mediumRisk = edgeCases.patterns.nestedBrackets.length + 
                      edgeCases.patterns.unusualPaths.length;
    const lowRisk = edgeCases.patterns.whitespaceIssues.length + 
                   edgeCases.patterns.escapedCharacters.length;
    
    report += `- **High Risk Issues**: ${highRisk} (malformed, mixed syntax)\n`;
    report += `- **Medium Risk Issues**: ${mediumRisk} (nested, unusual paths)\n`;
    report += `- **Low Risk Issues**: ${lowRisk} (whitespace, escaped chars)\n`;
    
    return report;
};

// Main execution
try {
    const notice = new Notice("Scanning for edge cases...", 0);
    await scanAllFiles();
    
    const report = generateReport();
    const reportPath = `${OUTPUT_DIR}/73-edge-case-validation.md`;
    await app.vault.adapter.write(reportPath, report);
    
    notice.hide();
    new Notice(`Edge case validation complete. Issues: ${edgeCases.statistics.totalIssues}`, 5000);
    
    tR += `## Edge Case Validation\n\n`;
    tR += `- **Files Scanned**: ${edgeCases.statistics.totalFiles}\n`;
    tR += `- **Files with Issues**: ${edgeCases.statistics.filesWithIssues}\n`;
    tR += `- **Total Issues**: ${edgeCases.statistics.totalIssues}\n`;
    tR += `\nReport saved to: \`${reportPath}\``;
    
} catch (error) {
    console.error("Edge case validation error:", error);
    tR += `\n## ❌ Error\n\n${error.message}`;
}
%>