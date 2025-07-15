<%*
// Date Extraction Helper Template
// This template helps extract and format dates from meeting filenames

// Common date patterns found in meeting files:
// - Week of YYYY-MM-DD (General Circle)
// - (MMDDYY) or MMDDYY (DAO Primitives, WP, RPP)
// - (DDMMYY) or DDMMYY (some files)
// - #N (AIFS Gatherings - need manual dates)
// - Month YYYY (some stakeholder meetings)

// Function to parse various date formats
function parseDate(filename) {
    // Week of YYYY-MM-DD
    const weekOfMatch = filename.match(/Week of (\d{4})-(\d{2})-(\d{2})/);
    if (weekOfMatch) {
        const [_, year, month, day] = weekOfMatch;
        return `${day}-${month}-${year}`;
    }
    
    // (DDMMYY) or DDMMYY formats
    const ddmmyyMatch = filename.match(/[(\s](\d{1,2})(\d{2})(\d{2})[\s)]/);
    if (ddmmyyMatch) {
        let [_, day, month, year] = ddmmyyMatch;
        // Assume 20XX for years 00-30, 19XX for years 70-99
        const fullYear = parseInt(year) < 30 ? `20${year}` : `19${year}`;
        return `${day.padStart(2, '0')}-${month.padStart(2, '0')}-${fullYear}`;
    }
    
    // MMDDYY in parentheses (US format)
    const mmddyyMatch = filename.match(/\((\d{2})(\d{2})(\d{2})\)/);
    if (mmddyyMatch) {
        let [_, month, day, year] = mmddyyMatch;
        const fullYear = parseInt(year) < 30 ? `20${year}` : `19${year}`;
        return `${day}-${month}-${fullYear}`;
    }
    
    // YYMMDD format (e.g., 240122)
    const yymmddMatch = filename.match(/(\d{2})(\d{2})(\d{2})/);
    if (yymmddMatch && filename.includes("20" + yymmddMatch[1])) {
        let [_, year, month, day] = yymmddMatch;
        return `${day}-${month}-20${year}`;
    }
    
    // Month YYYY format
    const monthYearMatch = filename.match(/(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{4})/i);
    if (monthYearMatch) {
        const [_, month, year] = monthYearMatch;
        const monthNum = ["january", "february", "march", "april", "may", "june", 
                         "july", "august", "september", "october", "november", "december"]
                         .indexOf(month.toLowerCase()) + 1;
        // Default to first of month
        return `01-${String(monthNum).padStart(2, '0')}-${year}`;
    }
    
    // DD-MM-YY format (e.g., 27-2-25)
    const ddmmyyDashMatch = filename.match(/(\d{1,2})-(\d{1,2})-(\d{2})/);
    if (ddmmyyDashMatch) {
        let [_, day, month, year] = ddmmyyDashMatch;
        const fullYear = parseInt(year) < 30 ? `20${year}` : `19${year}`;
        return `${day.padStart(2, '0')}-${month.padStart(2, '0')}-${fullYear}`;
    }
    
    return null;
}

// Get current file
const currentFile = tp.config.target_file;
const filename = currentFile.basename;

// Try to extract date
const extractedDate = parseDate(filename);

if (extractedDate) {
    tR = `Extracted date: ${extractedDate}\n\n`;
    tR += `To add this to frontmatter, update the file with:\n\n`;
    tR += `\`\`\`yaml\n---\ntags: meetings\ndate: ${extractedDate}\n---\n\`\`\``;
} else {
    tR = `Could not extract date from filename: "${filename}"\n\n`;
    tR += `Please check the file content for date information or add manually.\n\n`;
    tR += `Common formats:\n`;
    tR += `- DD-MM-YYYY (e.g., 21-11-2023)\n`;
    tR += `- For ambiguous dates, check file content to determine correct date`;
}
-%>