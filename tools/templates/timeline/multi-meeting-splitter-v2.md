<%*
// Multi-Meeting File Splitter Template v2
// Enhanced date parsing to handle both MM/DD/YY and DD/MM/YY formats intelligently

// Configuration based on source file
const sourceFiles = {
    "2022-04-19 - Weekly Meeting Notes - DAO Primitives.md": {
        path: "notes/dao-primitives/primitives-archive/primitives-docs/",
        targetPath: "notes/dao-primitives/primitives-archive/primitives-meetings/",
        prefix: "DAO Primitives Meeting",
        tag: "dao-primitives"
    },
    "2023-08-08 - [TO MOVE] Meeting Notes - RP Planning Workstream.md": {
        path: "notes/rpp/rpp-archive/rpp-docs/old-rpp-docs/",
        targetPath: "notes/rpp/rpp-archive/rpp-meetings/core-team-meetings/",
        prefix: "RPP Core Team Meeting", 
        tag: "reimagining-power"
    },
    "wp-clarity-meeting-notes.md": {
        path: "notes/wp/wp-meetings/",
        targetPath: "notes/wp/wp-meetings/",
        prefix: "WP Meeting",
        tag: "wp"
    }
};

// Select source file
const fileOptions = Object.keys(sourceFiles);
const selectedFile = await tp.system.suggester(
    fileOptions,
    fileOptions,
    false,
    "Select the multi-meeting file to split:"
);

if (!selectedFile) {
    tR = "Operation cancelled.";
    return;
}

const config = sourceFiles[selectedFile];
const sourcePath = config.path + selectedFile;

// Read the source file
let content;
try {
    const file = app.vault.getAbstractFileByPath(sourcePath);
    if (!file || !(file instanceof tp.obsidian.TFile)) {
        tR = `Error: File not found: ${sourcePath}`;
        return;
    }
    content = await app.vault.read(file);
} catch (error) {
    tR = `Error reading file: ${error.message}`;
    return;
}

// Enhanced function to parse various date formats
function parseDate(dateStr) {
    // Remove markdown formatting and extra text
    dateStr = dateStr.replace(/[#*]/g, '').trim();
    
    // Handle "Date 26/10/23" format (definitely DD/MM/YY)
    const dateMatch = dateStr.match(/Date\s+(\d{1,2})\/(\d{1,2})\/(\d{2})/);
    if (dateMatch) {
        let [_, day, month, year] = dateMatch;
        const fullYear = parseInt(year) < 30 ? `20${year}` : `19${year}`;
        return {
            date: `${day.padStart(2, '0')}-${month.padStart(2, '0')}-${fullYear}`,
            year: fullYear,
            month: month.padStart(2, '0'),
            day: day.padStart(2, '0')
        };
    }
    
    // Handle simple slash format: could be MM/DD/YY or DD/MM/YY
    const slashMatch = dateStr.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2})$/);
    if (slashMatch) {
        let [_, first, second, year] = slashMatch;
        const fullYear = parseInt(year) < 30 ? `20${year}` : `19${year}`;
        
        // Intelligent detection: if first number > 12, it must be DD/MM/YY
        // Also check if the pattern around this date uses DD/MM format
        let day, month;
        
        if (parseInt(first) > 12) {
            // Definitely DD/MM/YY format
            day = first;
            month = second;
        } else if (parseInt(second) > 12) {
            // Definitely MM/DD/YY format
            month = first;
            day = second;
        } else {
            // Ambiguous - check context or default to MM/DD/YY
            // For RPP and WP files, they seem to use MM/DD/YY
            // For DAO Primitives after certain dates, they use DD/MM/YY
            // We'll check the date value and make an educated guess
            
            // If we see patterns like "25/7/23", it's likely DD/MM/YY
            if (dateStr.includes("25/7/") || dateStr.includes("18/7/")) {
                day = first;
                month = second;
            } else {
                // Default to MM/DD/YY for most cases
                month = first;
                day = second;
            }
        }
        
        return {
            date: `${day.padStart(2, '0')}-${month.padStart(2, '0')}-${fullYear}`,
            year: fullYear,
            month: month.padStart(2, '0'),
            day: day.padStart(2, '0')
        };
    }
    
    // Format: Week of Month DD, YYYY
    const weekOfMatch = dateStr.match(/Week of\s+(\w+)\s+(\d{1,2}),\s+(\d{4})/);
    if (weekOfMatch) {
        const [_, monthName, day, year] = weekOfMatch;
        const months = ["January", "February", "March", "April", "May", "June",
                       "July", "August", "September", "October", "November", "December"];
        const monthNum = months.indexOf(monthName) + 1;
        if (monthNum > 0) {
            return {
                date: `${day.padStart(2, '0')}-${String(monthNum).padStart(2, '0')}-${year}`,
                year: year,
                month: String(monthNum).padStart(2, '0'),
                day: day.padStart(2, '0')
            };
        }
    }
    
    // Format: # 16/11/23 (simple heading with date)
    const simpleHeadingMatch = dateStr.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2})$/);
    if (simpleHeadingMatch) {
        let [_, first, second, year] = simpleHeadingMatch;
        const fullYear = parseInt(year) < 30 ? `20${year}` : `19${year}`;
        
        // For RPP files, these seem to be DD/MM/YY format
        let day = first;
        let month = second;
        
        // Validate and swap if needed
        if (parseInt(first) > 12) {
            day = first;
            month = second;
        } else if (parseInt(second) > 12) {
            month = first;
            day = second;
        }
        
        return {
            date: `${day.padStart(2, '0')}-${month.padStart(2, '0')}-${fullYear}`,
            year: fullYear,
            month: month.padStart(2, '0'),
            day: day.padStart(2, '0')
        };
    }
    
    return null;
}

// Split content by meeting headers
const meetings = [];
const lines = content.split('\n');
let currentMeeting = null;
let currentContent = [];
let inFrontmatter = false;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Skip frontmatter of the source file
    if (i === 0 && line === '---') {
        inFrontmatter = true;
        continue;
    }
    if (inFrontmatter && line === '---') {
        inFrontmatter = false;
        continue;
    }
    if (inFrontmatter) continue;
    
    // Check if this is a meeting header
    const headerMatch = line.match(/^#{1,3}\s+(.+)$/);
    if (headerMatch) {
        const headerText = headerMatch[1];
        const parsedDate = parseDate(headerText);
        
        if (parsedDate) {
            // Save previous meeting if exists
            if (currentMeeting && currentContent.length > 0) {
                currentMeeting.content = currentContent.join('\n').trim();
                meetings.push(currentMeeting);
            }
            
            // Start new meeting
            currentMeeting = {
                date: parsedDate.date,
                year: parsedDate.year,
                month: parsedDate.month,
                day: parsedDate.day,
                header: headerText,
                content: ''
            };
            currentContent = [];
        } else {
            // Not a date header, add to current content
            currentContent.push(line);
        }
    } else {
        // Regular content line
        if (currentMeeting) {
            currentContent.push(line);
        }
    }
}

// Save last meeting
if (currentMeeting && currentContent.length > 0) {
    currentMeeting.content = currentContent.join('\n').trim();
    meetings.push(currentMeeting);
}

// Show summary in a notice before confirmation
const summaryText = `📊 Meeting Split Summary:
━━━━━━━━━━━━━━━━━━━━
Source: ${selectedFile}
Found: ${meetings.length} meetings
First: ${meetings[0]?.date || 'Unknown'}
Last: ${meetings[meetings.length - 1]?.date || 'Unknown'}
Target: ${config.targetPath}
━━━━━━━━━━━━━━━━━━━━`;

new Notice(summaryText, 8000);

// Wait a moment for the notice to be visible
await new Promise(resolve => setTimeout(resolve, 500));

// Confirmation with clear options
const userChoice = await tp.system.suggester(
    ["✅ Yes - Create meeting files", "❌ No - Cancel operation"],
    [true, false],
    false,
    `Continue splitting ${meetings.length} meetings?`
);

if (!userChoice) {
    tR = "Operation cancelled.";
    return;
}

// Create individual meeting files
const results = [];
const targetFolder = app.vault.getAbstractFileByPath(config.targetPath);
let created = 0;
let skipped = 0;
let failed = 0;

for (const meeting of meetings) {
    // Generate filename following the convention
    const filename = `${config.prefix} (${meeting.date})`;
    const filePath = `${config.targetPath}${filename}.md`;
    
    // Check if file already exists
    const existingFile = app.vault.getAbstractFileByPath(filePath);
    if (existingFile) {
        results.push(`⚠️ Skipped (already exists): ${filename}`);
        skipped++;
        continue;
    }
    
    // Create file content with frontmatter
    const fileContent = `---
tags:
  - meetings
date: ${meeting.date}
source: "[[${selectedFile.replace('.md', '')}]]"
---

# ${config.prefix} - ${meeting.header}

${meeting.content}`;
    
    try {
        await app.vault.create(filePath, fileContent);
        results.push(`✅ Created: ${filename}`);
        created++;
    } catch (error) {
        results.push(`❌ Failed: ${filename} (${error.message})`);
        failed++;
    }
}

// Generate report
tR = `# Multi-Meeting Split Report\n\n`;
tR += `**Source:** ${selectedFile}\n`;
tR += `**Target:** ${config.targetPath}\n`;
tR += `**Meetings found:** ${meetings.length}\n\n`;
tR += `## Summary\n`;
tR += `- ✅ Created: ${created} files\n`;
tR += `- ⚠️ Skipped: ${skipped} files (already exist)\n`;
if (failed > 0) tR += `- ❌ Failed: ${failed} files\n`;
tR += `\n## Results\n`;
tR += results.join('\n');
tR += `\n\n## Original File\n`;
tR += `The original file has been preserved at:\n`;
tR += `[[${sourcePath.replace('.md', '')}|${selectedFile}]]\n\n`;
tR += `## Next Steps\n`;
tR += `1. Review the extracted meeting files\n`;
tR += `2. Check the [[meeting-split-progress|Progress Tracker]] to verify completeness\n`;
tR += `3. Consider adding a note in the original file indicating meetings have been extracted\n\n`;
tR += `---\n*Split completed at ${new Date().toLocaleString()}*`;

-%>