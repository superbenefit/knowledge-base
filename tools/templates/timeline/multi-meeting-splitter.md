<%*
// Multi-Meeting File Splitter Template
// This template splits consolidated meeting files into individual meeting files
// while preserving the original file for reference

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

// Function to parse various date formats
function parseDate(dateStr) {
    // Remove markdown formatting
    dateStr = dateStr.replace(/[#*]/g, '').trim();
    
    // Handle different formats
    // Format: MM/DD/YY or M/D/YY
    const slashMatch = dateStr.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2})$/);
    if (slashMatch) {
        let [_, month, day, year] = slashMatch;
        const fullYear = parseInt(year) < 30 ? `20${year}` : `19${year}`;
        return {
            date: `${day.padStart(2, '0')}-${month.padStart(2, '0')}-${fullYear}`,
            year: fullYear,
            month: month.padStart(2, '0'),
            day: day.padStart(2, '0')
        };
    }
    
    // Format: Date DD/MM/YY
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
    
    return null;
}

// Split content by meeting headers
// Look for lines starting with # or ## followed by a date
const meetings = [];
const lines = content.split('\n');
let currentMeeting = null;
let currentContent = [];
let inFrontmatter = false;
let skipNextLines = 0;

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
    const headerMatch = line.match(/^#{1,2}\s+(.+)$/);
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

// Display detailed confirmation with better formatting
const confirmOptions = [
    `✅ Yes - Create ${meetings.length} meeting files`,
    "❌ No - Cancel operation"
];

const confirmDetails = [
    `Found ${meetings.length} meetings to extract`,
    `Files will be created in: ${config.targetPath}`
];

// Show the summary information first
new Notice(`📊 Summary:\n${confirmDetails.join('\n')}\n\nFirst: ${meetings[0]?.date || 'Unknown'}\nLast: ${meetings[meetings.length - 1]?.date || 'Unknown'}`, 5000);

// Then ask for confirmation
const proceed = await tp.system.suggester(
    confirmOptions,
    [true, false],
    false,
    "Continue with splitting?"
);

if (!proceed) {
    tR = "Operation cancelled.";
    return;
}

// Create individual meeting files
const results = [];
const targetFolder = app.vault.getAbstractFileByPath(config.targetPath);

for (const meeting of meetings) {
    // Generate filename following the convention
    const filename = `${config.prefix} (${meeting.date})`;
    const filePath = `${config.targetPath}${filename}.md`;
    
    // Check if file already exists
    const existingFile = app.vault.getAbstractFileByPath(filePath);
    if (existingFile) {
        results.push(`⚠️ Skipped (already exists): ${filename}`);
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
    } catch (error) {
        results.push(`❌ Failed: ${filename} (${error.message})`);
    }
}

// Generate report
tR = `# Multi-Meeting Split Report\n\n`;
tR += `**Source:** ${selectedFile}\n`;
tR += `**Target:** ${config.targetPath}\n`;
tR += `**Meetings found:** ${meetings.length}\n\n`;
tR += `## Results\n`;
tR += results.join('\n');
tR += `\n\n## Original File\n`;
tR += `The original file has been preserved at:\n`;
tR