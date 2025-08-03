# Link Normalization Plan v2 - Obsidian Links Plugin + Templater

## Overview

### Project Context

This plan addresses the link normalization needs for the SuperBenefit Knowledge Base using the **Obsidian Links** plugin combined with **Templater scripts** for automation and safety. The vault is being prepared for publishing through two systems:

- **Enveloppe**: Pushes content to a GitHub repository
- **Quartz**: Static site generator that publishes to `knowledge.superbenefit.org`

### Key Organizational Improvements

1. **Sequential File Naming**: All outputs in `/link-fix/` use numbered prefixes (00-, 01-, etc.)
2. **Hybrid Approach**: Templater scripts for file processing, manual tracking for progress
3. **Rollback Functions**: Every file operation script includes rollback capabilities
4. **Execution Location**: Templates are executed in `/link-fix/` folder, not the template folder
5. **Manual Progress Tracking**: Checklist (07-processing-order.md) + dashboard (08-progress-dashboard.md) + CSV logs
6. **Data Preservation**: Always use incremental updates to prevent data loss

### Project Resources

- **Vault Location**: `F:\projects\sb-knowledge-base`
- **Branch**: `plugin-test`
- **Template Storage**: `/tools/templates/link-fix-templates/`
- **Working Directory**: `/link-fix/`
- **Total Files**: 668 markdown files
- **Estimated Links**: 2,000-3,000 internal links

### File Naming Convention

All outputs follow this pattern:
```
/link-fix/
├── 00-vault-link-analysis-report.md
├── 01-plugin-settings.md
├── 02-link-inventory.csv
├── 03-link-inventory-summary.md
├── 04-leading-slash-analysis.md
├── 05-phase-1-summary.md
├── ...etc
```

### Success Criteria

- ✓ All internal links use absolute paths from vault root WITHOUT leading slashes
- ✓ All internal links converted to markdown format (not wikilinks)
- ✓ No broken links remain (except documented external resources)
- ✓ Publishing pipeline (Enveloppe/Quartz) processes all files successfully
- ✓ Complete rollback capability for all changes
- ✓ Sequential audit trail of all operations

Don't use active_file obsidian MCP methods unless absolutely necessary and then ONLY after checking which file is active first. 

---

## Phase 1: Pre-Normalization Preparation

**Purpose**: Install plugin, create Templater infrastructure, and inventory all links.

### Step 1.0: Review Context and Setup

```
Claude, please:
1. Confirm we're on 'plugin-test' branch
2. Verify /link-fix/ and /tools/templates/link-fix-templates/ exist
3. Review Templater documentation in project knowledge
4. Rename existing files in /link-fix/ to follow naming convention
```

### Step 1.1: Install and Configure Plugin

**Summary**: Document plugin configuration (already completed).

```
Claude, ensure /link-fix/01-plugin-settings.md is properly numbered and contains:
1. Current plugin configuration
2. Key settings enabled
3. Usage instructions
```

### Step 1.2: Create Link Inventory Template

**Summary**: Create Templater script for vault analysis.

```
Claude, create Templater template "T01-Link-Inventory-Analyzer":
1. Template location: /tools/templates/link-fix-templates/T01-Link-Inventory-Analyzer.md
2. Features:
   - Scans all .md files excluding /drafts/, /tools/, /enveloppe/
   - Counts all link types (wikilinks, markdown, with/without leading slashes)
   - Generates CSV: 02-link-inventory.csv
   - Creates summary: 03-link-inventory-summary.md
   - Includes rollback function to delete generated files
3. Usage: Copy to /link-fix/ and execute via Templater
```

### Step 1.3: Execute Link Inventory

```
Claude:
1. Copy T01-Link-Inventory-Analyzer.md to /link-fix/
2. Execute the template using Templater
3. Review generated 02-link-inventory.csv and 03-link-inventory-summary.md
4. Delete the executed template file (keep only outputs)
```

### Step 1.4: Analyze Leading Slash Issues

```
Claude, create Templater template "T02-Leading-Slash-Analyzer":
1. Location: /tools/templates/link-fix-templates/T02-Leading-Slash-Analyzer.md
2. Reads 02-link-inventory.csv
3. Groups files by leading slash patterns
4. Creates priority list for pre-processing
5. Outputs: 04-leading-slash-analysis.md
6. Includes rollback function
```

### Step 1.5: Create Pre-Processing Template

```
Claude, create Templater template "T03-Remove-Leading-Slashes":
1. Location: /tools/templates/link-fix-templates/T03-Remove-Leading-Slashes.md
2. Features:
   - Removes leading slashes from [[/path]] and [text](/path)
   - Dry-run mode for preview
   - Creates automatic backups
   - Logs all changes
   - ROLLBACK: Restores from backup
3. Outputs when executed:
   - Creates backup in /link-fix/backups/YYYYMMDD-HHMMSS/
   - Logs changes to numbered CSV file
```

### Step 1.6: Test Pre-Processing

```
Claude:
1. Create /link-fix/test-samples/ with 3-5 test files
2. Execute T03-Remove-Leading-Slashes in test mode
3. Verify changes are correct
4. Test rollback function
5. Document results in 05-pre-processing-test-results.md
```

### Step 1.7: Phase 1 Summary

```
Claude, create 06-phase-1-summary.md containing:
1. Completed setup tasks
2. Template creation status
3. Inventory statistics
4. Leading slash analysis results
5. Pre-processing test confirmation
6. Ready for Phase 2
```

---

## Phase 2: Strategy and Planning

**Purpose**: Create detailed processing plan and workflow templates.

### Step 2.0: Context Loading

```
Claude, review:
1. 06-phase-1-summary.md
2. 03-link-inventory-summary.md
3. 04-leading-slash-analysis.md
```

### Step 2.1: Create Processing Order

```
Claude, create Templater template "T04-Generate-Processing-Order":
1. Analyzes inventory data
2. Creates optimal processing sequence
3. Estimates time per directory
4. Outputs: 07-processing-order.md with checklist format
```

### Step 2.2: Setup Progress Tracking System

```
Claude, create manual tracking structure:
1. Use 07-processing-order.md checklist as main tracker
2. Create 08-progress-dashboard.md with Dataview queries for dynamic status
3. Plan for simple CSV logs per phase:
   - 08-phase3-preprocessing-log.csv (tracks leading slash fixes)
   - 08-phase4-artifacts-log.csv (tracks wikilink conversions)
   - 08-phase5-reference-log.csv (tracks wikilink conversions)
   - 08-phase6-notes-log.csv (tracks wikilink conversions)
   - (all logs use 08- prefix, contain rows for each processed file)
4. Dashboard uses DataviewJS to parse CSV logs for live progress
```

### Step 2.3: Document Workflows

```
Claude, create 09-conversion-workflows.md documenting:
1. Pre-processing with Templater
2. Plugin conversion steps
3. Batch processing guidelines
4. Validation checkpoints
```

### Step 2.4: Identify High-Risk Files

```
Claude, analyze inventory data to:
1. Identify files with 50+ links
2. Flag template files needing special care
3. Create 10-high-risk-files.md with handling guidelines
4. Update 08-progress-dashboard.md with risk summary
```

### Step 2.5: Phase 2 Summary

```
Claude, create 11-phase-2-summary.md
```

---

## Phase 2.3: Link Type Coverage Enhancement

**Note**: After completing Phase 2.2, a comprehensive review identified critical gaps in link type coverage. The initial plan only addressed basic wikilinks and markdown links with leading slashes, missing several important patterns:

- Fragment links: `[[page#heading]]` and `[text](page.md#heading)`
- Block references: `[[page^block-id]]`
- Relative paths: `[text](../path)` and `[text](./path)`
- Embedded content: `![[file]]`
- Mixed patterns and edge cases

**Phase 2.3 Activities** (see detailed plan in Phase 2.3 artifact):
- **Phase 2.3a**: Comprehensive link analysis to discover ALL link types (outputs 42-46)
- **Phase 2.3b**: Plugin capability testing to understand limitations (outputs 47-52)
- **Phase 2.3c**: Enhanced template development for gap coverage (outputs 53-56)
- **Phase 2.3d**: Validation framework creation (outputs 57-62)
- **Phase 2.3e**: Documentation and integration (outputs 63-66)

**Purpose**: This enhancement phase ensures comprehensive link coverage before Phase 3 execution, significantly reducing project risks by understanding tool limitations and creating appropriate handling for all link patterns found in the vault.

**Status**: To be executed before proceeding to Phase 3

---

## Phase 3: Pre-Processing Execution

**Purpose**: Remove all leading slashes using Templater scripts.

### Step 3.0: Context Loading

```
Claude, review 10-phase-2-summary.md and confirm T03-Remove-Leading-Slashes is tested
```

### Step 3.1: Create Full Backup

```
Claude, create "T07-Create-Full-Backup":
1. Backs up all directories that need processing
2. Creates manifest with checksums
3. Outputs: 12-backup-manifest.md
4. Stores backup in /link-fix/backups/full-backup-YYYYMMDD/
```

### Step 3.2: Execute Slash Removal

```
Claude:
1. Execute T03-Remove-Leading-Slashes in dry-run mode
2. Review proposed changes
3. Create 13-slash-removal-preview.md
4. After approval, execute in actual mode
5. Output: 08-phase3-preprocessing-log.csv
6. Update 08-progress-dashboard.md with results
```

### Step 3.3: Validate Results

```
Claude, create and execute "T08-Validate-Slash-Removal":
1. Re-scans all processed files
2. Confirms no leading slashes remain
3. Outputs: 15-pre-processing-validation.md
```

### Step 3.4: Phase 3 Summary

```
Claude, create 16-phase-3-summary.md
```

---

## Phase 4: Plugin Conversion - Artifacts

**Purpose**: Convert /artifacts/ directory using the plugin.

### Step 4.0: Context Loading

```
Claude, review previous summaries and prepare manual tracking:
1. Create 17-artifacts-tracking.csv template
2. Update 08-progress-dashboard.md
3. Check off completed items in 07-processing-order.md
```

### Step 4.1: Convert Artifacts

**Manual process with tracking**:

```
Claude, for each batch in /artifacts/:
1. User processes 10-20 files with plugin
2. Update 17-artifacts-tracking.csv
3. Note any issues in 18-artifacts-issues.md
4. Check off items in 07-processing-order.md
5. Update 08-progress-dashboard.md
```

### Step 4.2: Validate Conversion

```
Claude, create and execute "T09-Validate-Artifacts":
1. Scans /artifacts/ for remaining wikilinks
2. Verifies .md extensions
3. Outputs: 19-artifacts-validation.md
```

### Step 4.3: Test Publishing

```
Manual test, Claude documents results in 20-artifacts-publishing-test.md
```

### Step 4.4: Phase 4 Summary

```
Claude, create 21-phase-4-summary.md
```

---

## Phase 5: Plugin Conversion - Reference Content

**Purpose**: Convert /tags/ and root files.

### Step 5.0: Context Loading

```
Claude:
1. Review 21-phase-4-summary.md
2. Update 08-progress-dashboard.md
3. Prepare tracking templates for this phase
```

### Step 5.1: Convert Tags

```
Process /tags/ directory:
1. Track in 22-tags-tracking.csv
2. Check off items in 07-processing-order.md
3. Update 08-progress-dashboard.md
```

### Step 5.2: Convert Root Files

```
Process root files individually:
1. Log in 23-root-files-log.md
2. Check off items in 07-processing-order.md
3. Update 08-progress-dashboard.md
```

### Step 5.3: Validate

```
Execute "T10-Validate-Reference", output: 24-reference-validation.md
```

### Step 5.4: Phase 5 Summary

```
Create 25-phase-5-summary.md
```

---

## Phase 6: Plugin Conversion - Notes

**Purpose**: Process main content in /notes/.

### Step 6.0: Context Loading

```
Claude:
1. Review all previous summaries
2. Update 08-progress-dashboard.md with notes/ overview
3. Prepare tracking CSV templates for each subdirectory
```

### Step 6.1-6.4: Process Each Directory

```
For each directory:
1. Track progress in numbered CSV files:
   - 26-dao-primitives-tracking.csv
   - 27-rpp-tracking.csv
   - 28-ics-tracking.csv
   - 29-other-notes-tracking.csv
2. Check off completed sections in 07-processing-order.md
3. Update 08-progress-dashboard.md after each major batch
```

### Step 6.5: Validate All Notes

```
Execute "T11-Validate-Notes", output: 30-notes-validation.md
```

### Step 6.6: Phase 6 Summary

```
Create 31-phase-6-summary.md
```

---

## Phase 7: Final Validation

### Step 7.0: Context Loading

```
Claude:
1. Review all previous summaries
2. Update 08-progress-dashboard.md and 07-processing-order.md if/as needed
3. Make sure all tracking CSV templates and other progress assets are in order
```

### Step 7.1: Complete Validation

```
Execute "T12-Final-Vault-Validation", output: 32-final-validation.md
Stop to instruct the user as needed
```

### Step 7.2: Publishing Test

Skip

### Step 7.3: Change Report

```
Generate 34-complete-changes-report.md
```

### Step 7.4: Phase 7 Summary

```
Create 35-phase-7-summary.md
```

---

## Phase 8: Documentation

### Step 8.1: Maintenance Guide

```
Create 36-link-maintenance-guide.md
```

### Step 8.2: Plugin Guide

```
Create 37-plugin-configuration-guide.md
```

### Step 8.3: Final Report

```
Create 38-final-project-report.md
```

### Step 8.4: Archive Organization

```
Create archive structure and 39-archive-index.md
```

### Step 8.5: Project Closure

```
Create 40-phase-8-summary.md and 41-project-complete.md
```

---

## Templater Script Standards

Templates for file processing follow these standards:

1. **Naming**: T##-Descriptive-Name.md
2. **Header**: Include purpose, inputs, outputs
3. **Rollback**: Every template includes rollback function
4. **Logging**: All operations logged with timestamps
5. **Safety**: Dry-run mode where applicable
6. **Progress**: Visual feedback during execution

## Manual Tracking Standards

Progress tracking uses simple, maintainable approaches:

1. **Primary Tracker**: 07-processing-order.md checklist
2. **Dashboard**: 08-progress-dashboard.md with DataviewJS parsing CSV logs for live updates
3. **Phase Logs**: Simple CSV files (08- prefix) with one row per processed file
4. **Issue Tracking**: Markdown files documenting problems  
5. **Updates**: Incremental additions to preserve all data
6. **CSV Format**: Each log should contain file path, action taken, timestamp

Example template structure:
```javascript
<%*
// T01-Link-Inventory-Analyzer
// Purpose: Analyze vault for all link types
// Outputs: 02-link-inventory.csv, 03-link-inventory-summary.md
// Rollback: Delete generated files

const rollback = () => {
    // Rollback logic here
};

try {
    // Main logic here
} catch (error) {
    console.error("Error:", error);
    if (confirm("Error occurred. Run rollback?")) {
        rollback();
    }
}
%>
```

---

## Benefits of This Approach

1. **Sequential Tracking**: Clear progression through numbered files
2. **Hybrid Automation**: Templater for file processing, manual for tracking
3. **Rollback Safety**: Every file operation can be undone
4. **Organized Templates**: Reusable scripts in dedicated folder
5. **Simple Progress Tracking**: Checklist + dashboard + CSV logs
6. **Data Preservation**: Incremental updates prevent data loss
7. **Session Continuity**: Easy to resume at any phase
8. **Reduced Complexity**: Manual tracking is more straightforward

---

_This plan emphasizes organization, safety, and the ability to track progress across multiple sessions using Obsidian's native tools._
# Phase 2.3: Link Type Coverage Enhancement
## Phase 2.3: Link Type Coverage Enhancement ✅

**Status**: COMPLETE (2025-08-01)

**Note**: After completing Phase 2.2, a comprehensive review identified critical gaps in link type coverage. The initial plan only addressed basic wikilinks and markdown links with leading slashes, missing several important patterns.

### Gaps Discovered:
- Fragment links: `[[page#heading]]` and `[text](page.md#heading)`
- Block references: `[[page^block-id]]`
- Relative paths: `[text](../path)` and `[text](./path)`
- Embedded content: `![[file]]`
- Mixed patterns and edge cases

### Phase 2.3 Completed Activities:
- **Phase 2.3a**: ✅ Comprehensive link analysis (outputs 42-46)
  - Discovered 12 distinct link patterns
  - Found 2,847 total links across 668 files
  - Identified 89 edge cases requiring special handling
  
- **Phase 2.3b**: ✅ Plugin capability testing (outputs 47-52)
  - Confirmed plugin handles basic wikilinks only
  - Leading slashes, relative paths require pre-processing
  - Fragment links partially supported
  
- **Phase 2.3c**: ✅ Enhanced template development (outputs 53-56)
  - T08-Resolve-Relative-Paths created and tested
  - T09-Post-Conversion-Validator created
  - Templates handle all identified gap patterns
  
- **Phase 2.3d**: ✅ Validation framework creation (outputs 57-62)
  - Pre-conversion checklist (57)
  - Real-time progress monitoring (T10)
  - Complete vault audit tool (T11)
  - Enhanced rollback procedures tested
  
- **Phase 2.3e**: ✅ Documentation and integration (outputs 63-66)
  - Link standards guide created (63)
  - Integrated inventory with complexity scoring (64)
  - Main plan updated (this update)

### Key Outcomes:
1. **Complete link coverage**: All 12 link patterns documented
2. **Tool limitations understood**: Plugin capabilities and gaps mapped
3. **Safety mechanisms**: Multiple validation and rollback options
4. **Time estimates refined**: 15-20 hours total (up from 10-15)
5. **Risk significantly reduced**: Comprehensive handling for all patterns

### Updated Phase 3 Requirements:
Before executing Phase 3, ensure:
- [ ] Review integrated inventory (64-integrated-link-inventory.md)
- [ ] All Phase 2.3 templates tested
- [ ] Pre-conversion checklist (57) ready
- [ ] 15-20 hour time allocation confirmed