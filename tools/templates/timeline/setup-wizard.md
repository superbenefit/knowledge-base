<%*
// Timeline Setup Wizard
// Interactive guide to set up the timeline system

const steps = [];
let currentStep = 1;

// Step 1: Check prerequisites
steps.push("## Step 1: Checking Prerequisites\n\n");

const hasDataview = app.plugins.enabledPlugins.has("dataview");
const hasTemplater = tp.user ? true : false;
const timelineFolderExists = app.vault.getAbstractFileByPath("notes/general-circle/timeline");

steps[0] += `- Dataview plugin: ${hasDataview ? "✅ Enabled" : "❌ Not enabled - Please enable it"}\n`;
steps[0] += `- Templater plugin: ${hasTemplater ? "✅ Installed" : "❌ Not found - Please install it"}\n`;
steps[0] += `- Timeline folder: ${timelineFolderExists ? "✅ Exists" : "⚠️ Missing - Will create it"}\n`;

if (!hasDataview || !hasTemplater) {
    tR = steps[0] + "\n\n**Please install/enable the required plugins before continuing.**";
    return;
}

// Step 2: Create timeline folder if needed
if (!timelineFolderExists) {
    const createFolder = await tp.system.suggester(
        ["Yes, create the folder", "No, I'll do it manually"],
        [true, false],
        false,
        "Create timeline folder at notes/general-circle/timeline/?"
    );
    
    if (createFolder) {
        await app.vault.createFolder("notes/general-circle/timeline");
        steps.push("## Step 2: Created Timeline Folder\n\n✅ Created: `notes/general-circle/timeline/`\n");
        currentStep++;
    } else {
        tR = steps.join("\n") + "\n\n**Setup paused. Please create the folder manually and run again.**";
        return;
    }
}

// Step 3: Check meeting files
const dv = app.plugins.plugins.dataview.api;
const meetingFiles = dv.pages("#meetings");
const filesWithDates = meetingFiles.where(p => p.date);
const filesWithoutDates = meetingFiles.where(p => !p.date);

steps.push(`## Step ${currentStep}: Meeting Files Status\n\n`);
steps[steps.length-1] += `- Total meeting files: ${meetingFiles.length}\n`;
steps[steps.length-1] += `- Files with dates: ${filesWithDates.length}\n`;
steps[steps.length-1] += `- Files needing dates: ${filesWithoutDates.length}\n`;
currentStep++;

// Step 4: Offer to run batch date updater
if (filesWithoutDates.length > 0) {
    const runBatchUpdate = await tp.system.suggester(
        ["Yes, help me add dates", "No, I'll do it manually", "Skip for now"],
        ["yes", "manual", "skip"],
        false,
        `Found ${filesWithoutDates.length} files without dates. Run batch updater?`
    );
    
    if (runBatchUpdate === "yes") {
        steps.push(`## Step ${currentStep}: Date Processing\n\n`);
        steps[steps.length-1] += `To add dates to your meeting files:\n\n`;
        steps[steps.length-1] += `1. Create a new note\n`;
        steps[steps.length-1] += `2. Insert template: \`batch-date-updater-enhanced\`\n`;
        steps[steps.length-1] += `3. Process each folder in TEST mode first\n`;
        steps[steps.length-1] += `4. Review results, then run in EXECUTE mode\n\n`;
        steps[steps.length-1] += `**Folders to process:**\n`;
        
        // Get unique folders with meeting files
        const folders = [...new Set(filesWithoutDates.map(p => p.file.folder))];
        folders.forEach(folder => {
            const count = filesWithoutDates.filter(p => p.file.folder === folder).length;
            steps[steps.length-1] += `- ${folder} (${count} files)\n`;
        });
        currentStep++;
    }
}

// Step 5: Create timeline index
steps.push(`## Step ${currentStep}: Create Timeline Index\n\n`);
const indexExists = app.vault.getAbstractFileByPath("notes/general-circle/timeline/timeline.md");

if (indexExists) {
    steps[steps.length-1] += `✅ Timeline index already exists\n`;
} else {
    const createIndex = await tp.system.suggester(
        ["Yes, guide me", "No, I'll do it manually"],
        [true, false],
        false,
        "Create the timeline index page?"
    );
    
    if (createIndex) {
        steps[steps.length-1] += `To create your timeline index:\n\n`;
        steps[steps.length-1] += `1. Create file: \`notes/general-circle/timeline/timeline.md\`\n`;
        steps[steps.length-1] += `2. Insert template: \`timeline-index-improved\`\n`;
        steps[steps.length-1] += `3. This will be your main timeline navigation page\n`;
    }
}
currentStep++;

// Step 6: Create first timeline
steps.push(`## Step ${currentStep}: Create Your First Timeline\n\n`);

// Suggest a month with meetings
const recentMonth = filesWithDates.sort(p => p.date, 'desc').limit(1).values[0]?.date?.toFormat("yyyy-MM") || "2024-01";

steps[steps.length-1] += `To create your first monthly timeline:\n\n`;
steps[steps.length-1] += `1. Create file: \`notes/general-circle/timeline/${recentMonth}.md\`\n`;
steps[steps.length-1] += `2. Insert template: \`timeline-monthly-simple\`\n`;
steps[steps.length-1] += `3. The page will automatically show all meetings for that month\n\n`;
steps[steps.length-1] += `**Suggested month:** ${recentMonth} (has meetings)\n`;

// Final summary
steps.push("\n## Setup Summary\n\n");
steps[steps.length-1] += `### What We've Done\n`;
steps[steps.length-1] += `- ✅ Verified plugins are installed\n`;
steps[steps.length-1] += timelineFolderExists ? `- ✅ Timeline folder exists\n` : `- ✅ Created timeline folder\n`;
steps[steps.length-1] += `- ✅ Analyzed your meeting files\n`;
steps[steps.length-1] += `- ✅ Provided setup instructions\n\n`;

steps[steps.length-1] += `### Next Steps\n`;
steps[steps.length-1] += `1. ${filesWithoutDates.length > 0 ? "Add dates to meeting files" : "✓ All meetings have dates"}\n`;
steps[steps.length-1] += `2. ${indexExists ? "✓ Timeline index exists" : "Create timeline index"}\n`;
steps[steps.length-1] += `3. Create monthly timeline pages as needed\n`;
steps[steps.length-1] += `4. (Optional) Run \`coverage-analyzer\` to check completeness\n\n`;

steps[steps.length-1] += `### Quick Reference\n`;
steps[steps.length-1] += `- **Monthly timelines**: Create \`YYYY-MM.md\` files\n`;
steps[steps.length-1] += `- **Annual overview**: Create \`YYYY.md\` files\n`;
steps[steps.length-1] += `- **All timelines**: in \`notes/general-circle/timeline/\`\n`;

// Output everything
tR = `# Timeline Setup Wizard\n\n`;
tR += `Welcome! This wizard will help you set up the meeting timeline system.\n\n`;
tR += steps.join("\n");
tR += `\n---\n*Setup wizard completed at ${tp.date.now("YYYY-MM-DD HH:mm")}*`;
-%>