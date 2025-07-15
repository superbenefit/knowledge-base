<%*
// Universal Batch Date Updater
// Comprehensive date parsing for all SuperBenefit meeting formats

// Validate if a date is legitimate
function isValidDate(day, month, year) {
    const d = parseInt(day);
    const m = parseInt(month);
    const y = parseInt(year);
    
    if (m < 1 || m > 12) return false;
    if (d < 1) return false;
    
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    // Check for leap year
    if (m === 2 && ((y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0))) {
        daysInMonth[1] = 29;
    }
    
    return d <= daysInMonth[m - 1];
}

// Comprehensive date parsing function
function parseDate(filename) {
    // Remove .md extension if present
    filename = filename.replace(/\.md$/, '');
    
    // === STANDARD FORMATS ===
    
    // ISO format YYYY-MM-DD (highest priority)
    const isoMatch = filename.match(/(\d{4})-(\d{2})-(\d{2})/);
    if (isoMatch) {
        const [_, year, month, day] = isoMatch;
        if (isValidDate(day, month, year)) {
            return `${day}-${month}-${year}`;
        }
    }
    
    // Week of YYYY-MM-DD
    const weekOfMatch = filename.match(/Week of (\d{4})-(\d{2})-(\d{2})/);
    if (weekOfMatch) {
        const [_, year, month, day] = weekOfMatch;
        if (isValidDate(day, month, year)) {
            return `${day}-${month}-${year}`;
        }
    }
    
    // DD-MM-YY with dashes
    const dashMatch = filename.match(/(\d{1,2})-(\d{1,2})-(\d{2})/);
    if (dashMatch) {
        let [_, day, month, year] = dashMatch;
        const fullYear = parseInt(year) < 30 ? `20${year}` : `19${year}`;
        if (isValidDate(day, month, fullYear)) {
            return `${day.padStart(2, '0')}-${month.padStart(2, '0')}-${fullYear}`;
        }
    }
    
    // === COMPRESSED FORMATS ===
    
    // Special case with dot separator (215.24)
    const dotMatch = filename.match(/(\d{1,2})(\d{1,2})\.(\d{2})/);
    if (dotMatch) {
        let [_, day, month, year] = dotMatch;
        const fullYear = `20${year}`;
        if (isValidDate(day, month, fullYear)) {
            return `${day.padStart(2, '0')}-${month.padStart(2, '0')}-${fullYear}`;
        }
    }
    
    // Format: (DMYYYY) or (MDYYYY) - 7 digits in parentheses
    const sevenDigitParenMatch = filename.match(/\((\d{7})\)/);
    if (sevenDigitParenMatch) {
        const digits = sevenDigitParenMatch[1];
        
        // Try DMYYYY format first (e.g., 2132024 = 21/3/2024)
        let day = digits.substring(0, 2);
        let month = digits.substring(2, 3);
        let year = digits.substring(3, 7);
        
        if (isValidDate(day, month, year)) {
            return `${day}-${month.padStart(2, '0')}-${year}`;
        }
        
        // Try MDYYYY format (e.g., 1142024 = 11/4/2024)
        month = digits.substring(0, 2);
        day = digits.substring(2, 3);
        year = digits.substring(3, 7);
        
        if (isValidDate(day, month, year)) {
            return `${day.padStart(2, '0')}-${month}-${year}`;
        }
    }
    
    // Format: (DDMMYY) or (MMDDYY) - 6 digits in parentheses
    const sixDigitParenMatch = filename.match(/\((\d{6})\)/);
    if (sixDigitParenMatch) {
        const digits = sixDigitParenMatch[1];
        
        // Try DDMMYY format first (European)
        let day = digits.substring(0, 2);
        let month = digits.substring(2, 4);
        let year = digits.substring(4, 6);
        let fullYear = parseInt(year) < 30 ? `20${year}` : `19${year}`;
        
        if (isValidDate(day, month, fullYear)) {
            return `${day}-${month}-${fullYear}`;
        }
        
        // Try MMDDYY format (US)
        month = digits.substring(0, 2);
        day = digits.substring(2, 4);
        
        if (isValidDate(day, month, fullYear)) {
            return `${day}-${month}-${fullYear}`;
        }
        
        // Try DMMYYY format (e.g., 300924 = 30/09/24)
        day = digits.substring(0, 2);
        month = digits.substring(2, 4);
        year = digits.substring(4, 6);
        fullYear = parseInt(year) < 30 ? `20${year}` : `19${year}`;
        
        if (isValidDate(day, month, fullYear)) {
            return `${day}-${month}-${fullYear}`;
        }
    }
    
    // Format: (DMMYY) or (MDDYY) or (DDMYY) - 5 digits in parentheses
    const fiveDigitParenMatch = filename.match(/\((\d{5})\)/);
    if (fiveDigitParenMatch) {
        const digits = fiveDigitParenMatch[1];
        
        // Try DMMYY format first
        let day = digits.substring(0, 1);
        let month = digits.substring(1, 3);
        let year = digits.substring(3, 5);
        let fullYear = parseInt(year) < 30 ? `20${year}` : `19${year}`;
        
        if (isValidDate(day, month, fullYear)) {
            return `${day.padStart(2, '0')}-${month}-${fullYear}`;
        }
        
        // Try MDDYY format
        month = digits.substring(0, 1);
        day = digits.substring(1, 3);
        
        if (isValidDate(day, month, fullYear)) {
            return `${day}-${month.padStart(2, '0')}-${fullYear}`;
        }
        
        // Try DDMYY format
        day = digits.substring(0, 2);
        month = digits.substring(2, 3);
        
        if (isValidDate(day, month, fullYear)) {
            return `${day}-${month.padStart(2, '0')}-${fullYear}`;
        }
        
        // Try DMYYY format (e.g., 21024 = 2/10/24)
        day = digits.substring(0, 1);
        month = digits.substring(1, 3);
        year = digits.substring(3, 5);
        fullYear = parseInt(year) < 30 ? `20${year}` : `19${year}`;
        
        if (isValidDate(day, month, fullYear)) {
            return `${day.padStart(2, '0')}-${month}-${fullYear}`;
        }
        
        // Try DDMMY format (e.g., 11625 = 1/16/25 or 11/6/25)
        day = digits.substring(0, 2);
        month = digits.substring(2, 3);
        year = digits.substring(3, 5);
        fullYear = parseInt(year) < 30 ? `20${year}` : `19${year}`;
        
        if (isValidDate(day, month, fullYear)) {
            return `${day}-${month.padStart(2, '0')}-${fullYear}`;
        }
        
        // Try MDYYY format (e.g., 91024 = 9/10/24)
        month = digits.substring(0, 1);
        day = digits.substring(1, 3);
        year = digits.substring(3, 5);
        fullYear = parseInt(year) < 30 ? `20${year}` : `19${year}`;
        
        if (isValidDate(day, month, fullYear)) {
            return `${day}-${month.padStart(2, '0')}-${fullYear}`;
        }
    }
    
    // Format: (MDYY) or (DMYY) - 4 digits in parentheses
    const fourDigitParenMatch = filename.match(/\((\d{4})\)/);
    if (fourDigitParenMatch && !filename.includes("2024") && !filename.includes("2025")) {
        const digits = fourDigitParenMatch[1];
        
        // Try MDYY format
        let month = digits.substring(0, 1);
        let day = digits.substring(1, 2);
        let year = digits.substring(2, 4);
        let fullYear = parseInt(year) < 30 ? `20${year}` : `19${year}`;
        
        if (isValidDate(day, month, fullYear)) {
            return `${day.padStart(2, '0')}-${month.padStart(2, '0')}-${fullYear}`;
        }
        
        // Try DMYY format
        day = digits.substring(0, 1);
        month = digits.substring(1, 2);
        
        if (isValidDate(day, month, fullYear)) {
            return `${day.padStart(2, '0')}-${month.padStart(2, '0')}-${fullYear}`;
        }
        
        // Try DDMY format (for year 2024 = 24)
        day = digits.substring(0, 2);
        month = digits.substring(2, 3);
        year = digits.substring(3, 4);
        fullYear = `202${year}`;
        
        if (isValidDate(day, month, fullYear)) {
            return `${day}-${month.padStart(2, '0')}-${fullYear}`;
        }
    }
    
    // === NO PARENTHESES FORMATS ===
    
    // Format: DDMMYY - 6 digits no parentheses
    const sixDigitMatch = filename.match(/\b(\d{6})\b/);
    if (sixDigitMatch) {
        const digits = sixDigitMatch[1];
        let day = digits.substring(0, 2);
        let month = digits.substring(2, 4);
        let year = digits.substring(4, 6);
        let fullYear = parseInt(year) < 30 ? `20${year}` : `19${year}`;
        
        if (isValidDate(day, month, fullYear)) {
            return `${day}-${month}-${fullYear}`;
        }
    }
    
    // Format: DMMYY or MDDYY - 5 digits no parentheses
    const fiveDigitMatch = filename.match(/\b(\d{5})\b/);
    if (fiveDigitMatch) {
        const digits = fiveDigitMatch[1];
        
        // Try DMMYY format
        let day = digits.substring(0, 1);
        let month = digits.substring(1, 3);
        let year = digits.substring(3, 5);
        let fullYear = parseInt(year) < 30 ? `20${year}` : `19${year}`;
        
        if (isValidDate(day, month, fullYear)) {
            return `${day.padStart(2, '0')}-${month}-${fullYear}`;
        }
        
        // Try MDDYY format
        month = digits.substring(0, 1);
        day = digits.substring(1, 3);
        
        if (isValidDate(day, month, fullYear)) {
            return `${day}-${month.padStart(2, '0')}-${fullYear}`;
        }
        
        // Try DDMYY format
        day = digits.substring(0, 2);
        month = digits.substring(2, 3);
        
        if (isValidDate(day, month, fullYear)) {
            return `${day}-${month.padStart(2, '0')}-${fullYear}`;
        }
    }
    
    // Format: MDYY or DMYY - 4 digits no parentheses
    const fourDigitMatch = filename.match(/\b(\d{4})\b/);
    if (fourDigitMatch) {
        const digits = fourDigitMatch[1];
        
        // Skip years
        if (parseInt(digits) >= 2020 && parseInt(digits) <= 2030) {
            return null;
        }
        
        // Try MDYY
        let month = digits.substring(0, 1);
        let day = digits.substring(1, 2);
        let year = digits.substring(2, 4);
        let fullYear = parseInt(year) < 30 ? `20${year}` : `19${year}`;
        
        if (isValidDate(day, month, fullYear)) {
            return `${day.padStart(2, '0')}-${month.padStart(2, '0')}-${fullYear}`;
        }
        
        // Try DMYY
        day = digits.substring(0, 1);
        month = digits.substring(1, 2);
        
        if (isValidDate(day, month, fullYear)) {
            return `${day.padStart(2, '0')}-${month.padStart(2, '0')}-${fullYear}`;
        }
        
        // Try DDMY format (for single digit months)
        day = digits.substring(0, 2);
        month = digits.substring(2, 3);
        year = digits.substring(3, 4);
        fullYear = `202${year}`;
        
        if (isValidDate(day, month, fullYear)) {
            return `${day}-${month.padStart(2, '0')}-${fullYear}`;
        }
    }
    
    // === MONTH NAME FORMATS ===
    
    const monthNames = ["January", "February", "March", "April", "May", "June",
                       "July", "August", "September", "October", "November", "December"];
    const monthPattern = monthNames.join("|");
    const monthMatch = filename.match(new RegExp(`(${monthPattern})\\s+(\\d{1,2})[,\\s]+(\\d{4})`, 'i'));
    if (monthMatch) {
        const [_, month, day, year] = monthMatch;
        const monthNum = monthNames.findIndex(m => m.toLowerCase() === month.toLowerCase()) + 1;
        if (isValidDate(day, monthNum, year)) {
            return `${day.padStart(2, '0')}-${String(monthNum).padStart(2, '0')}-${year}`;
        }
    }
    
    return null;
}

// Function to check if date already exists in frontmatter
function hasDate(content) {
    const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
    const match = content.match(frontmatterRegex);
    if (match) {
        return match[1].includes('date:');
    }
    return false;
}

// Function to update frontmatter with validation
async function updateFrontmatter(file, date) {
    const content = await app.vault.read(file);
    
    // Skip if already has date
    if (hasDate(content)) {
        return { status: 'skipped', reason: 'already has date' };
    }
    
    const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
    let updatedContent;
    
    if (frontmatterRegex.test(content)) {
        // Has frontmatter - add date
        updatedContent = content.replace(frontmatterRegex, (match, fm) => {
            // Ensure meetings tag is present
            if (!fm.includes('tags:')) {
                fm += '\ntags: meetings';
            } else if (!fm.includes('meetings')) {
                fm = fm.replace(/tags:\s*(.+)/, (m, tags) => {
                    return `tags: ${tags}, meetings`;
                });
            }
            return `---\n${fm}\ndate: ${date}\n---`;
        });
    } else {
        // No frontmatter - create it
        updatedContent = `---\ntags: meetings\ndate: ${date}\n---\n\n${content}`;
    }
    
    await app.vault.modify(file, updatedContent);
    return { status: 'updated' };
}

// Get folder to process
const folders = [
    "notes/general-circle/old-gc-meetings",
    "notes/dao-primitives/primitives-archive/primitives-meetings",
    "notes/wp/wp-meetings",
    "notes/aifs/aifs-meetings",
    "notes/rpp/rpp-archive/rpp-meetings",
    "notes/rpp/rpp-archive/rpp-meetings/core-team-meetings",
    "notes/rpp/rpp-archive/rpp-meetings/os-steward-meetings",
    "notes/rpp/rpp-archive/rpp-meetings/stakeholder-meetings",
    "Custom folder..."
];

let folder = await tp.system.suggester(folders, folders, false, "Select folder to process:");

if (folder === "Custom folder...") {
    folder = await tp.system.prompt("Enter folder path:");
}

if (!folder) {
    tR = "Operation cancelled.";
    return;
}

// Mode selection
const mode = await tp.system.suggester(
    ["🔍 Test mode - Preview changes", "✅ Execute - Apply changes", "🔬 Debug mode - Show parsing details", "❌ Cancel"],
    ["test", "execute", "debug", "cancel"],
    false,
    `Process meetings in: ${folder}`
);

if (mode === "cancel") {
    tR = "Operation cancelled.";
    return;
}

const testMode = mode === "test";
const debugMode = mode === "debug";

// Process files
const folderObj = app.vault.getAbstractFileByPath(folder);
if (!folderObj || !(folderObj instanceof tp.obsidian.TFolder)) {
    tR = `Error: Folder not found: ${folder}`;
    return;
}

let processed = 0;
let skipped = 0;
let failed = 0;
const results = [];
const debugInfo = [];

// Recursively process files
async function processFolder(folder) {
    for (const child of folder.children) {
        if (child instanceof tp.obsidian.TFile && child.extension === "md") {
            const date = parseDate(child.basename);
            
            if (debugMode) {
                debugInfo.push({
                    filename: child.basename,
                    parsedDate: date || "FAILED",
                    patterns: {
                        iso: child.basename.match(/(\d{4})-(\d{2})-(\d{2})/),
                        weekOf: child.basename.match(/Week of (\d{4})-(\d{2})-(\d{2})/),
                        dash: child.basename.match(/(\d{1,2})-(\d{1,2})-(\d{2})/),
                        dot: child.basename.match(/(\d{1,2})(\d{1,2})\.(\d{2})/),
                        sevenDigitParen: child.basename.match(/\((\d{7})\)/)?.[1],
                        sixDigitParen: child.basename.match(/\((\d{6})\)/)?.[1],
                        fiveDigitParen: child.basename.match(/\((\d{5})\)/)?.[1],
                        fourDigitParen: child.basename.match(/\((\d{4})\)/)?.[1],
                        sixDigit: child.basename.match(/\b(\d{6})\b/)?.[1],
                        fiveDigit: child.basename.match(/\b(\d{5})\b/)?.[1],
                        fourDigit: child.basename.match(/\b(\d{4})\b/)?.[1]
                    }
                });
            }
            
            if (date) {
                if (testMode || debugMode) {
                    const content = await app.vault.read(child);
                    if (hasDate(content)) {
                        results.push(`⏭️ ${child.path} (already has date)`);
                        skipped++;
                    } else {
                        results.push(`✅ ${child.path} → ${date}`);
                        processed++;
                    }
                } else {
                    const result = await updateFrontmatter(child, date);
                    if (result.status === 'updated') {
                        results.push(`✅ Updated: ${child.path}`);
                        processed++;
                    } else {
                        results.push(`⏭️ Skipped: ${child.path} (${result.reason})`);
                        skipped++;
                    }
                }
            } else {
                results.push(`❌ Failed: ${child.path} (couldn't parse date)`);
                failed++;
            }
        } else if (child instanceof tp.obsidian.TFolder) {
            await processFolder(child);
        }
    }
}

await processFolder(folderObj);

// Generate report
tR = `# Universal Batch Date Update Report\n\n`;
tR += `**Folder:** ${folder}\n`;
tR += `**Mode:** ${testMode ? "Test (Preview)" : debugMode ? "Debug" : "Execute (Applied)"}\n`;
tR += `**Time:** ${moment().format("YYYY-MM-DD HH:mm")}\n\n`;
tR += `## Summary\n`;
tR += `- ✅ Processed: ${processed}\n`;
tR += `- ⏭️ Skipped: ${skipped}\n`;
tR += `- ❌ Failed: ${failed}\n`;
tR += `- **Total:** ${processed + skipped + failed}\n\n`;

if (debugMode) {
    tR += `## Debug Information\n`;
    tR += `<details>\n<summary>Click to see parsing details</summary>\n\n`;
    tR += `\`\`\`json\n${JSON.stringify(debugInfo, null, 2)}\n\`\`\`\n`;
    tR += `</details>\n\n`;
}

if (failed > 0) {
    tR += `## Failed Files (Need Manual Review)\n`;
    tR += results.filter(r => r.startsWith('❌')).map(r => `- ${r}`).join('\n');
    tR += `\n\n`;
}

tR += `## All Results\n`;
tR += `<details>\n<summary>Click to expand detailed results</summary>\n\n`;
tR += `\`\`\`\n${results.join('\n')}\n\`\`\`\n`;
tR += `</details>\n\n`;

if (testMode && processed > 0) {
    tR += `> **Note:** This was a test run. No files were modified.\n`;
    tR += `> To apply these changes, run again and select "Execute".`;
}

if (debugMode) {
    tR += `> **Debug mode:** Review the parsing details above to understand date extraction.`;
}

if (failed > 0) {
    tR += `\n\n## Next Steps for Failed Files\n`;
    tR += `1. Files without dates in the filename need manual checking\n`;
    tR += `2. Template files can be ignored\n`;
    tR += `3. Index files (folder notes) can be ignored\n`;
    tR += `4. Check file content for date information and add manually if needed\n\n`;
    tR += `### Supported Date Formats:\n`;
    tR += `- **Standard**: YYYY-MM-DD, Week of YYYY-MM-DD, DD-MM-YY\n`;
    tR += `- **Compressed**: (DDMMYY), (MDDYY), DDMYY, MDYY, etc.\n`;
    tR += `- **Special**: 215.24 (dot separator)\n`;
    tR += `- **Month names**: January 15, 2024\n`;
}
-%>