<%*
// Batch Date Updater Template
// This template helps add dates to multiple meeting files at once
// WARNING: This will modify files - use with caution!

// Date parsing function (same as in date-extraction-helper)
function parseDate(filename) {
    // Week of YYYY-MM-DD
    const weekOfMatch = filename.match(/Week of (\d{4})-(\d{2})-(\d{2})/);
    if (weekOfMatch) {
        const [_, year, month, day] = weekOfMatch;
        return `${day}-${month}-${year}`;
    }
    
    // (MMDDYY) format - US style
    const mmddyyMatch = filename.match(/\((\d{1,2})(\d{1,2})(\d{2})\)/);
    if (mmddyyMatch) {
        let [_, month, day, year] = mmddyyMatch;
        const fullYear = parseInt(year) < 30 ? `20${year}` : `19${year}`;
        return `${day.padStart(2, '0')}-${month.padStart(2, '0')}-${fullYear}`;
    }
    
    // DDMMYY format - EU style (for files marked as such)
    const ddmmyyMatch = filename.match(/(\d{1,2})(\d{1,2})(\d{2})(?:\D|$)/);
    if (ddmmyyMatch && !filename.includes("(")) {
        let [_, day, month, year] = ddmmyyMatch;
        // Validate day/month ranges
        if (parseInt(day) <= 31 && parseInt(month) <= 12) {
            const fullYear = parseInt(year) < 30 ? `20${year}` : `19${year}`;
            return `${day.padStart(2, '0')}-${month.padStart(2, '0')}-${fullYear}`;
        }
    }
    
    // Other formats...
    return null;
}

// Function to update frontmatter
async function updateFrontmatter(file, date) {
    const content = await app.vault.read(file);
    const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
    
    if (frontmatterRegex.test(content)) {
        // Has frontmatter - update it
        const updatedContent = content.replace(frontmatterRegex, (match, fm) => {
            if (fm.includes('date:')) {
                // Already has date - skip
                return match;
            }
            return `---\n${fm}\ndate: ${date}\n---`;
        });
        
        if (updatedContent !== content) {
            await app.vault.modify(file, updatedContent);
            return true;
        }
    } else {
        // No frontmatter - add it
        const newContent = `---\ntags: meetings\ndate: ${date}\n---\n\n${content}`;
        await app.vault.modify(file, newContent);
        return true;
    }
    
    return false;
}

// Get folder to process
const folder = await tp.system.prompt("Enter folder path to process:", "notes/general-circle/old-gc-meetings");

// Confirmation
const confirm = await tp.system.suggester(
    ["Test mode (show what would be done)", "Execute (modify files)", "Cancel"],
    ["test", "execute", "cancel"],
    false,
    `Process meetings in: ${folder}`
);

if (confirm === "cancel") {
    tR = "Operation cancelled.";
} else {
    const testMode = confirm === "test";
    
    // Get all files in folder
    const folderObj = app.vault.getAbstractFileByPath(folder);
    if (!folderObj || !(folderObj instanceof tp.obsidian.TFolder)) {
        tR = `Error: Folder not found: ${folder}`;
    } else {
        let processed = 0;
        let skipped = 0;
        let failed = 0;
        const results = [];
        
        for (const file of folderObj.children) {
            if (file instanceof tp.obsidian.TFile && file.extension === "md") {
                const date = parseDate(file.basename);
                
                if (date) {
                    if (testMode) {
                        results.push(`✓ ${file.basename} → ${date}`);
                        processed++;
                    } else {
                        if (await updateFrontmatter(file, date)) {
                            results.push(`✓ Updated: ${file.basename}`);
                            processed++;
                        } else {
                            results.push(`⚠ Skipped: ${file.basename} (already has date)`);
                            skipped++;
                        }
                    }
                } else {
                    results.push(`✗ Failed: ${file.basename} (couldn't parse date)`);
                    failed++;
                }
            }
        }
        
        tR = `# Batch Date Update Report\n\n`;
        tR += `**Folder:** ${folder}\n`;
        tR += `**Mode:** ${testMode ? "Test" : "Execute"}\n\n`;
        tR += `## Summary\n`;
        tR += `- Processed: ${processed}\n`;
        tR += `- Skipped: ${skipped}\n`;
        tR += `- Failed: ${failed}\n`;
        tR += `- Total: ${processed + skipped + failed}\n\n`;
        tR += `## Details\n\`\`\`\n`;
        tR += results.join('\n');
        tR += `\n\`\`\``;
        
        if (testMode && processed > 0) {
            tR += `\n\n**Note:** This was a test run. To apply changes, run again and select "Execute".`;
        }
    }
}
-%>