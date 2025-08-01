# Link Normalization Plan

## Overview

### Project Context
This plan addresses the link normalization needs for the SuperBenefit Knowledge Base, an Obsidian vault containing 668 markdown files. The vault is being prepared for publishing through two systems:
- **Enveloppe**: Pushes content to a GitHub repository
- **Quartz**: Static site generator that publishes to `knowledge.superbenefit.org`

The current mix of link formats (absolute wikilinks, relative wikilinks, markdown links with various path structures) is causing path resolution issues during the publishing process. This plan provides a systematic approach to normalize all internal links to use absolute paths from the vault root.

### Key Resources and Requirements

#### Project Resources
- **Vault Location**: `F:\projects\sb-knowledge-base`
- **Analysis Report**: Vault Link Analysis Report (generated in initial research)
- **Total Files**: 668 markdown files
- **Estimated Links**: 2,000-3,000 internal links requiring normalization

#### Technical Requirements
1. **No Direct Edits Without Permission**: All changes must be reviewed before execution
2. **Clear Change Presentation**: Show before/after examples for all modifications
3. **Use Artifacts**: Create scripts and reports as artifacts for review
4. **Backup Considerations**: Full backup required before any modifications
5. **Preserve File Integrity**: No data loss or corruption during normalization

#### Available Tools
- **MCP Filesystem Access**: Direct read/write access to vault files
- **Obsidian MCP Tools**: Access to Obsidian Local REST API (when running)
- **Templater Plugin**: JavaScript-based template execution within Obsidian
- **Analysis Tool**: JavaScript execution for data processing
- **Artifacts**: For creating scripts and documentation

#### Target Link Format
All internal links should be normalized to markdown format with absolute paths from vault root **WITHOUT leading slashes**:
- **Primary format**: `[Display Text](absolute/path/from/root/file.md)` - Note: NO leading slash
- **Critical**: Remove all leading slashes from internal link paths (e.g., `/tags/daos.md` → `tags/daos.md`)
- **Wikilinks**: Only preserved if auto-generated or absolutely necessary
- **External links**: Preserved exactly as-is

This format is essential for proper compatibility with Enveloppe and Quartz. Leading slashes can cause path resolution issues in the publishing pipeline.

### Success Criteria
- ✓ All internal links use absolute paths from vault root WITHOUT leading slashes
- ✓ All internal links converted to markdown format (not wikilinks)
- ✓ No broken links remain (except documented external resources)
- ✓ Publishing pipeline (Enveloppe/Quartz) processes all files successfully
- ✓ No loss of link functionality or display text
- ✓ Complete audit trail of all changes

---

## Phase 1: Pre-Normalization Preparation
**Purpose**: Establish a safe working environment and create a comprehensive inventory of all links in the vault. This phase ensures we have full visibility into the scope of work and protects against data loss.

### Step 1.0: Review Context and Setup
**Summary**: Load all project context and verify environment readiness.

```
Claude, please review the following resources to understand the project context:
1. Read the Vault Link Analysis Report
2. Confirm access to F:\projects\sb-knowledge-base
3. Verify you can read/write files using the filesystem MCP
4. Create the /link-fix directory if it doesn't exist
5. Summarize your understanding of the project goals and constraints
```

### Step 1.1: Create Full Vault Backup
**Summary**: Ensure we have a complete backup before making any changes. This is our safety net.

**Manual action**: Create a complete backup of the vault before any modifications. Store it in a safe location outside the vault.

### Step 1.2: Resolve Git Conflicts
**Summary**: Clean up any existing version control conflicts that could interfere with link normalization.

```
Claude, please read the file at F:\projects\sb-knowledge-base\links\links.md and:
1. Identify all git merge conflict markers (<<<<<<, ======, >>>>>>)
2. Show me the conflicting sections with context
3. Suggest how to resolve them based on the content
4. Create a cleaned version for my review
Do not modify the file directly - show me the proposed changes first.
```

### Step 1.3: Generate Comprehensive Link Inventory
**Summary**: Create a complete database of all links in the vault. This inventory will be our reference throughout the normalization process.

```
Claude, please create a Templater script as an artifact titled "Link Inventory Scanner" that:
1. Uses Templater functions to recursively scan all .md files in the vault
2. Extracts all links (both wikilinks [[]] and markdown links []())
3. For each link, captures:
   - Source file path
   - Line number
   - Link type (wikilink/markdown)
   - Original link text
   - Link target
   - Display text/alias (if any)
   - Whether target file exists
4. Outputs results to CSV: /link-fix/link-inventory.csv
5. Includes progress indicator (processing 668 files)
6. Generates summary statistics
7. Handles errors gracefully and logs them

Template should use:
- tp.file.find_tfile() for file operations
- app.vault.read() for reading file content
- Regular expressions for link extraction
- window.fs.writeFile() for CSV output

Save the template as /link-fix/link-inventory-scanner.md
```

### Step 1.4: Identify Broken Links
**Summary**: Find all links pointing to non-existent files so we can address them before normalization.

```
Claude, using the link inventory CSV from step 1.3:
1. Create a Templater script that reads the CSV and analyzes broken links
2. Group them by source directory
3. For each broken link, search for similar filenames in the vault
4. Suggest potential fixes based on:
   - Similar file names
   - Common typos
   - Moved/renamed files
5. Save the report as /link-fix/broken-links-report.md
6. Create a priority list based on file importance (artifacts > tags > notes)
```

### Step 1.5: Create Link Mapping Rules
**Summary**: Develop a comprehensive set of rules for converting various link patterns to absolute paths.

```
Claude, analyze the link inventory and create a JSON artifact titled "Link Mapping Rules" containing:
1. Pattern matching rules for common link types:
   - [[/tags/X]] → [X](tags/X.md) (remove leading slash)
   - [[../tags/X]] → [X](tags/X.md) (relative to absolute)
   - ../tags/X.md → tags/X.md (relative to absolute)
   - ../../artifacts/X → artifacts/X.md
   - /absolute/path.md → absolute/path.md (remove leading slash)
   - Simple filename → full path resolution
2. Wikilink to markdown conversion rules:
   - [[path|alias]] → [alias](absolute/path.md)
   - [[path]] → [path](absolute/path.md)
   - [[/path/file]] → [file](path/file.md) (remove leading slash)
   - Preserve only if marked as auto-generated
3. Special case handlers for:
   - Leading slash removal from all internal paths
   - URL-encoded filenames (%20 for spaces)
   - Missing .md extensions
   - Anchor links (#section)
   - Query parameters
4. Directory-specific rules based on common patterns
5. Precedence order for rule application
6. Test cases for each rule type

Save the rules to /link-fix/link-mapping-rules.json
```

### Step 1.6: Phase 1 Wrap-up
**Summary**: Document all preparation work completed for future reference.

```
Claude, create a phase summary document at /link-fix/normalization-phase-1-summary.md containing:
1. Work completed in each step
2. Key findings and decisions made
3. Statistics from link inventory
4. Issues identified and their resolutions
5. Files created/modified
6. Next phase prerequisites confirmed
7. Any risks or concerns identified
```

---

## Phase 2: Script Development and Testing
**Purpose**: Create robust, tested tools for link normalization. This phase focuses on building reliable automation that preserves data integrity while transforming links.

### Step 2.0: Review Context and Phase 1 Results
**Summary**: Load previous work and understand the technical requirements for normalization scripts.

```
Claude, please:
1. Read /link-fix/normalization-phase-1-summary.md
2. Load /link-fix/link-inventory.csv statistics
3. Review /link-fix/link-mapping-rules.json
4. Confirm understanding of link patterns to handle
5. List any technical challenges identified in Phase 1
```

### Step 2.1: Develop Link Normalization Script
**Summary**: Create the core script that will transform links according to our rules while preserving all other content.

```
Claude, create a Templater script as an artifact titled "Link Normalizer" that:
1. Normalizes links in markdown files with these features:
   - Convert all links to markdown format with absolute paths (NO leading slashes)
   - Remove any leading slashes from internal paths
   - Convert wikilinks to markdown format (unless auto-generated)
   - Preserve external links (http/https) exactly
   - Maintain display text and aliases
   - Add .md extension if missing for internal links
   - Preserve URL encoding (%20, etc.)
   - Handle anchor links (#section)
2. Operation modes:
   - Single file mode for testing
   - Dry-run mode (preview changes without modifying)
   - Backup original before modifying
3. Logging:
   - Each link transformation
   - Skipped links with reasons
   - Error handling with context
4. Use the mapping rules from /link-fix/link-mapping-rules.json
5. Generate detailed change report

Template should use:
- tp.file.content to read current file
- Regular expressions for link matching
- app.vault.modify() to update files
- window.fs for file operations

Save the script as /link-fix/link-normalizer.md
```

### Step 2.2: Create Test Suite
**Summary**: Build comprehensive test cases covering all link patterns and edge cases found in the vault.

```
Claude, create a test file as an artifact titled "Link Test Cases" containing:
1. Examples of every link pattern from the analysis:
   - Wikilinks without paths: [[filename]]
   - Wikilinks with relative paths: [[../path/file]]
   - Markdown relative parent: [text](../file.md)
   - Markdown relative child: [text](subdir/file.md)
   - External links: [text](https://example.com)
   - Anchor links: [text](#section)
   - Mixed patterns in same paragraph
2. Edge cases:
   - URL-encoded spaces: [[name%20with%20spaces]]
   - Special characters in filenames
   - Missing extensions
   - Broken references
   - Links in code blocks (should be skipped)
   - Links in frontmatter
3. Expected output for each test case
4. At least 50 test cases covering all scenarios

Save as /link-fix/test-cases.md
```

### Step 2.3: Test Script on Sample Files
**Summary**: Validate the normalization script works correctly on real vault content before batch processing.

```
Claude, test the normalization script on these files and create a detailed report:
1. Copy these files to /link-fix/test-samples/:
   - F:\projects\sb-knowledge-base\artifacts\patterns\community-governance.md
   - F:\projects\sb-knowledge-base\tags\daos.md
   - F:\projects\sb-knowledge-base\index.md
2. Run link-normalizer.md template on each in dry-run mode
3. Create a comparison report showing:
   - Original link → Normalized link for each change
   - Any links skipped and why
   - Verification that target files exist
4. Run in actual mode on the copies
5. Diff the files to confirm only links changed
6. Save report as /link-fix/test-results.md
```

### Step 2.4: Create Link Validator Script
**Summary**: Build a tool to verify link integrity after normalization.

```
Claude, create a Templater script as an artifact titled "Link Validator" that:
1. Scans markdown files for all links
2. Verifies each link:
   - Internal links point to existing files
   - Absolute paths are used (except external)
   - NO leading slashes on internal paths
   - No broken references
   - Proper encoding maintained
3. Reports:
   - Any links with leading slashes (critical issue)
   - Broken links by file
   - Relative paths found
   - External links summary
   - Statistics by directory
4. Output formats:
   - Console summary
   - Detailed CSV report
   - Markdown report for documentation

Template should use:
- app.vault.getMarkdownFiles() to get all files
- tp.file.find_tfile() to check file existence
- Regular expressions for link validation

Save as /link-fix/link-validator.md
```

### Step 2.5: Phase 2 Wrap-up
**Summary**: Document all development work and confirm scripts are ready for production use.

```
Claude, create a phase summary at /link-fix/normalization-phase-2-summary.md containing:
1. Scripts developed and their purposes
2. Test results summary
3. Known limitations or edge cases
4. Performance metrics from test runs
5. Recommended execution order for Phase 3
6. Any code modifications made after testing
7. Confidence level in script reliability
```

---

## Phase 3: Batch Processing Preparation
**Purpose**: Prepare for safe, efficient processing of the entire vault. This phase ensures we can handle large-scale normalization with proper controls and recovery options.

### Step 3.0: Review Context and Scripts
**Summary**: Verify all tools are ready and understand the processing strategy.

```
Claude, please:
1. Read phase summaries 1 and 2
2. Test that all Templater scripts run without errors
3. Review the vault statistics and estimate processing time
4. Check available disk space for backups
5. Confirm the processing strategy is sound
```

### Step 3.1: Enhance Script for Batch Processing
**Summary**: Add production-ready features to handle processing hundreds of files safely and efficiently.

```
Claude, enhance the link-normalizer.md template with these batch processing features:
1. Directory processing:
   - Recursive directory traversal using app.vault.getMarkdownFiles()
   - Include/exclude patterns
   - File filtering (exclude drafts, tools, enveloppe)
2. Progress tracking:
   - Files processed counter
   - Estimated time remaining
   - Current file being processed
3. Batch operations:
   - Process multiple files in sequence
   - Memory-efficient for large vaults
4. Safety features:
   - Confirm before processing >10 files
   - Automatic backup directory creation
   - Rollback capability (restore from backups)
   - Maximum changes per file limit
5. Reporting:
   - Summary statistics
   - Detailed change log
   - Error report with stack traces
   - CSV export of all changes

Save the enhanced version and test on /link-fix/test-samples/
```

### Step 3.2: Create Processing Order Plan
**Summary**: Determine the optimal sequence for processing directories based on dependencies and importance.

```
Claude, create a detailed processing order plan:
1. Analyze the vault structure and link dependencies
2. Create a processing sequence that:
   - Prioritizes published content (/artifacts/)
   - Handles reference content next (/tags/)
   - Processes project notes by importance
   - Excludes drafts, tools, and enveloppe directories
3. For each directory, note:
   - Number of files
   - Estimated links to process
   - Dependencies on other directories
   - Special considerations
4. Create a checklist format I can follow
5. Include rollback points between major sections
6. Save as /link-fix/processing-order.md
```

### Step 3.3: Identify High-Risk Files
**Summary**: Flag files requiring special attention due to complexity or importance.

```
Claude, analyze the link inventory and create a high-risk files report:
1. Identify files with:
   - More than 50 links
   - Complex nested structures
   - Special plugin content (Dataview, etc.)
   - Critical vault functions (indexes, navigation)
2. For each high-risk file:
   - Explain why it's high-risk
   - Suggest manual review points
   - Note any special handling needed
3. Rank by risk level (critical/high/medium)
4. Recommend whether to process automatically or manually
5. Save as /link-fix/high-risk-files.md
```

### Step 3.4: Create Pre-flight Checklist
**Summary**: Develop a comprehensive checklist to ensure safe execution.

```
Claude, create a pre-flight checklist for batch processing:
1. System readiness:
   - Backup verified
   - Disk space available
   - Scripts tested
   - Obsidian running (for Templater)
2. Data validation:
   - Link inventory current
   - Broken links documented
   - High-risk files identified
3. Process validation:
   - Dry-run completed successfully
   - Change preview reviewed
   - Rollback tested
4. Documentation ready:
   - Processing order defined
   - Issue escalation plan
   - Recovery procedures
5. Format as interactive checklist
6. Save as /link-fix/preflight-checklist.md
```

### Step 3.5: Phase 3 Wrap-up
**Summary**: Confirm all preparation is complete and we're ready for execution.

```
Claude, create a phase summary at /link-fix/normalization-phase-3-summary.md containing:
1. Batch processing capabilities added
2. Processing order rationale
3. Risk assessment summary
4. Estimated processing time
5. Go/no-go recommendation
6. Any concerns or prerequisites for Phase 4
```

---

## Phase 4: Execution - Published Content
**Purpose**: Process the most important content first - the published artifacts that are actively used in the knowledge garden. This phase requires extra care as it affects public-facing content.

### Step 4.0: Review Context and Pre-flight Check
**Summary**: Ensure everything is ready for processing published content.

```
Claude, please:
1. Read all previous phase summaries
2. Verify backup exists and is complete
3. Run through /link-fix/preflight-checklist.md
4. Confirm /artifacts/ directory statistics
5. Load high-risk files list for artifacts
6. Set up monitoring for the execution
```

### Step 4.1: Dry-Run Artifacts Directory
**Summary**: Preview all changes that would be made to artifacts without modifying files.

```
Claude, execute a dry-run of link normalization on artifacts:
1. Run link-normalizer.md template on F:\projects\sb-knowledge-base\artifacts in dry-run mode
2. Generate a summary report showing:
   - Total files to be processed
   - Total links to be changed
   - Breakdown by link type (wikilink vs markdown)
   - Most common transformations
   - Any errors or warnings
3. Create detailed change preview for:
   - First 5 files (as examples)
   - All high-risk files in artifacts
4. Save full change log to /link-fix/artifacts-dryrun-changes.csv
5. Create summary at /link-fix/artifacts-dryrun-summary.md
6. Flag any unexpected patterns or concerns
```

### Step 4.2: Review and Approve Artifacts Changes
**Summary**: Manually review the proposed changes before execution.

**Manual action**: 
1. Review /link-fix/artifacts-dryrun-summary.md
2. Spot-check the detailed changes in the CSV
3. Verify high-risk files look correct
4. Make go/no-go decision
5. Document any files to exclude from batch processing

### Step 4.3: Execute Artifacts Normalization
**Summary**: Perform the actual link normalization on artifacts with full logging.

```
Claude, execute link normalization on the artifacts directory:
1. Create backup directory: /link-fix/backups/artifacts-[timestamp]
2. Copy all artifacts files to backup location
3. Run link-normalizer.md template on F:\projects\sb-knowledge-base\artifacts
4. Monitor execution and report:
   - Progress updates every 10 files
   - Any errors immediately
   - Running statistics
5. Generate execution report with:
   - Files processed successfully
   - Total links normalized
   - Any files skipped and why
   - Execution time
6. Save logs to /link-fix/artifacts-execution.log
7. Create summary at /link-fix/artifacts-execution-summary.md
```

### Step 4.4: Validate Artifacts Links
**Summary**: Verify all links in artifacts are correct and resolve to valid targets.

```
Claude, validate all links in the processed artifacts:
1. Run link-validator.md template on F:\projects\sb-knowledge-base\artifacts
2. Check for:
   - Any remaining relative paths
   - Broken links (target doesn't exist)
   - Malformed links
   - External links still intact
3. Create validation report showing:
   - Total links validated
   - Issues found by type
   - Specific files with problems
4. For any issues found:
   - Suggest fixes
   - Determine if manual intervention needed
5. Save report as /link-fix/artifacts-validation-report.md
6. If critical issues found, prepare rollback plan
```

### Step 4.5: Test Sample with Publishing Pipeline
**Summary**: Verify the normalized content works with Enveloppe and Quartz.

**Manual action**:
1. Select 3-5 representative files from different artifact types
2. Test with Enveloppe push process
3. Verify Quartz renders the links correctly
4. Document any issues in /link-fix/publishing-test-results.md

### Step 4.6: Phase 4 Wrap-up
**Summary**: Document the successful processing of artifacts and any lessons learned.

```
Claude, create phase summary at /link-fix/normalization-phase-4-summary.md containing:
1. Execution statistics:
   - Files processed
   - Links normalized
   - Processing time
   - Error count
2. Validation results
3. Publishing pipeline test results
4. Issues encountered and resolutions
5. Confidence level for proceeding
6. Specific notes for processing remaining directories
```

---

## Phase 5: Execution - Reference Content
**Purpose**: Process the foundational reference content (tags and root files) that other content depends on. This phase ensures consistent references throughout the vault.

### Step 5.0: Review Context and Artifacts Impact
**Summary**: Understand how artifacts changes affect reference content processing.

```
Claude, please:
1. Read phase 4 summary and results
2. Analyze if artifacts normalization created new patterns
3. Check for any references from artifacts to tags
4. Review tag directory statistics
5. Identify which root files need processing
```

### Step 5.1: Normalize Tags Directory
**Summary**: Process the lexicon/tag definitions that are referenced throughout the vault.

```
Claude, process the tags directory:
1. Run dry-run first on F:\projects\sb-knowledge-base\tags
2. Review changes - tags are heavily referenced, so accuracy is critical
3. After approval, execute normalization with full backup
4. Special attention to:
   - Self-references within tags
   - Bi-directional links
   - Alias patterns
5. Generate reports:
   - /link-fix/tags-dryrun-summary.md
   - /link-fix/tags-execution-summary.md
6. Validate all tag links resolve correctly
```

### Step 5.2: Normalize Root Files
**Summary**: Process critical navigation and documentation files at the vault root.

```
Claude, normalize links in root files:
1. Process these files individually with careful review:
   - index.md (main entry point)
   - README.md (repository documentation)
   - CONTRIBUTING.md (contributor guide)
2. For each file:
   - Show me the exact changes before applying
   - Explain any complex transformations
   - Verify all linked sections exist
3. Create backup copies in /link-fix/backups/root-files/
4. Document changes in /link-fix/root-files-changes.md
```

### Step 5.3: Update Cross-References
**Summary**: Ensure consistency between processed directories.

```
Claude, check for cross-reference consistency:
1. Scan all processed files (artifacts, tags, root)
2. Identify any references between them
3. Verify all inter-directory links are:
   - Using absolute paths
   - Pointing to valid targets
   - Consistent in format
4. Create report of any inconsistencies
5. Suggest fixes for any issues found
6. Save as /link-fix/cross-reference-check.md
```

### Step 5.4: Validate Reference Content
**Summary**: Comprehensive validation of all reference content.

```
Claude, validate all reference content:
1. Run link-validator.md template on:
   - /tags/ directory
   - All root .md files
2. Create comprehensive report of:
   - Link statistics
   - Any remaining issues
   - External link integrity
3. Cross-check with artifacts to ensure bidirectional links work
4. Save as /link-fix/reference-content-validation.md
```

### Step 5.5: Phase 5 Wrap-up
**Summary**: Document reference content processing completion.

```
Claude, create phase summary at /link-fix/normalization-phase-5-summary.md containing:
1. Files processed by category
2. Special handling required
3. Cross-reference findings
4. Validation results
5. Impact on remaining content
6. Ready state for Phase 6
```

---

## Phase 6: Execution - Working Content
**Purpose**: Process all remaining working content including project notes. This phase handles the bulk of the vault's content.

### Step 6.0: Review Context and Strategy
**Summary**: Assess remaining work and refine processing strategy.

```
Claude, please:
1. Read all previous phase summaries
2. Calculate remaining files to process
3. Review processing order from Phase 3
4. Identify any new high-risk patterns
5. Estimate time for remaining work
```

### Step 6.1: Process Notes by Project
**Summary**: Handle each major project area separately to maintain context and catch project-specific patterns.

```
Claude, process the notes directory by project:
1. Process in this order with separate validation for each:
   a. F:\projects\sb-knowledge-base\notes\dao-primitives
      - Run dry-run and review
      - Execute after approval
      - Validate links
   b. F:\projects\sb-knowledge-base\notes\rpp
      - Note: ~250 files, largest section
      - Process in sub-batches if needed
      - Monitor for memory issues
   c. F:\projects\sb-knowledge-base\notes\ics
      - Note: ~200 files with deep nesting
      - Watch for complex relative paths
2. For each project directory:
   - Create separate backup
   - Generate execution summary
   - Run validation
3. Save reports as:
   - /link-fix/notes-[project]-summary.md
4. If errors occur, process that project manually
```

### Step 6.2: Handle Special Directories
**Summary**: Process directories requiring extra attention due to special content or prior issues.

```
Claude, process special directories with care:
1. /links/ directory (after conflict resolution from Phase 1):
   - Verify conflicts were resolved
   - Process with extra logging
   - Watch for duplicate entries
2. /attachments/ directory:
   - May have image references
   - Document any special handling
3. For each directory:
   - Run individually
   - Review changes before execution
   - Create summary report
4. Save as /link-fix/special-directories-summary.md

Note: Skip /tools/, /drafts/, and /enveloppe/ directories as instructed.
```

### Step 6.3: Process Remaining Files
**Summary**: Handle any files not covered by directory processing.

```
Claude, identify and process any remaining files:
1. Scan vault for any .md files not yet processed
2. Exclude /drafts/, /tools/, and /enveloppe/ directories
3. List any found with their locations
4. Determine why they were missed
5. Process individually with careful review
6. Common locations to check:
   - Hidden directories
   - Newly created files
   - Files with unusual extensions
7. Document in /link-fix/remaining-files-summary.md
```

### Step 6.4: Final Validation Sweep
**Summary**: Validate the entire vault to ensure complete normalization.

```
Claude, perform final comprehensive validation:
1. Run link-validator.md template on entire vault:
   F:\projects\sb-knowledge-base
   (excluding /drafts/, /tools/, /enveloppe/)
2. Generate report showing:
   - Total files scanned
   - Total links validated
   - Any remaining relative paths
   - Broken links by directory
   - External links summary
3. Create visualizations:
   - Link type distribution
   - Issues by directory
   - Processing completion status
4. Save as /link-fix/final-validation-report.md
```

### Step 6.5: Phase 6 Wrap-up
**Summary**: Document completion of main processing work.

```
Claude, create phase summary at /link-fix/normalization-phase-6-summary.md containing:
1. Complete processing statistics:
   - Total files processed
   - Total links normalized
   - Processing time by directory
2. Issues encountered and resolutions
3. Remaining problems (if any)
4. Validation results
5. Ready for final QA phase
```

---

## Phase 7: Validation and Quality Assurance
**Purpose**: Ensure the normalization was successful across the entire vault and the publishing pipeline works correctly. This phase provides confidence that the project goals have been met.

### Step 7.0: Review Complete Project Status
**Summary**: Assess the overall success of the normalization project.

```
Claude, please:
1. Read all phase summaries (1-6)
2. Compile overall statistics
3. List any outstanding issues
4. Review original project goals
5. Assess completion status
```

### Step 7.1: Run Comprehensive Link Report
**Summary**: Generate final statistics and verify complete normalization.

```
Claude, create a comprehensive link analysis:
1. Run link-validator.md template on entire vault
2. Compare with original link inventory from Phase 1
3. Generate report showing:
   - Before/after statistics
   - Transformation success rate
   - Remaining issues
   - Link type distribution
4. Create visualization of:
   - Links by directory
   - Internal vs external ratio
   - Most linked files
5. Save as /link-fix/final-link-analysis.md
```

### Step 7.2: Test Publishing Pipeline
**Summary**: Verify the normalized vault works correctly with Enveloppe and Quartz.

**Manual action**:
1. Select 20 representative files across all directories
2. Test Enveloppe push for each
3. Verify Quartz rendering
4. Check that links work in published site
5. Document results in /link-fix/publishing-validation.md

### Step 7.3: Create Difference Report
**Summary**: Document all changes made during normalization.

```
Claude, create a comprehensive difference report:
1. Compare backed-up vault with current vault
2. Generate report showing:
   - Files modified count by directory
   - Total links changed
   - Link pattern transformations applied
   - Files skipped and why
3. Create detailed change log:
   - Sample before/after for each pattern
   - Edge cases handled
   - Special decisions made
4. Save as /link-fix/complete-changes-report.md
```

### Step 7.4: Performance Analysis
**Summary**: Analyze the efficiency of the normalization process.

```
Claude, create performance analysis:
1. Compile timing data from all phases
2. Calculate:
   - Files processed per minute
   - Links normalized per minute
   - Total execution time
3. Identify:
   - Bottlenecks encountered
   - Optimization opportunities
   - Resource usage patterns
4. Save as /link-fix/performance-analysis.md
```

### Step 7.5: Phase 7 Wrap-up
**Summary**: Final validation complete, ready for project closure.

```
Claude, create phase summary at /link-fix/normalization-phase-7-summary.md containing:
1. QA results summary
2. Publishing pipeline status
3. Final statistics
4. Confidence level in results
5. Recommendations for Phase 8
```

---

## Phase 8: Cleanup and Documentation
**Purpose**: Fix any remaining issues, update configurations, and create comprehensive documentation for future maintenance. This phase ensures the normalized vault remains maintainable.

### Step 8.0: Review Project Completion
**Summary**: Assess what cleanup and documentation is needed.

```
Claude, please:
1. Read Phase 7 summary and validation results
2. List any remaining issues to fix
3. Identify documentation gaps
4. Review maintenance needs
```

### Step 8.1: Fix Remaining Issues
**Summary**: Address any problems identified during validation.

```
Claude, fix remaining issues:
1. Based on validation reports, create fix template for:
   - Any remaining relative paths
   - Broken links that can be resolved
   - Format inconsistencies
2. Show me what will be fixed before executing
3. Run fixes with full logging
4. Validate fixes were successful
5. Document in /link-fix/final-fixes-report.md
```

### Step 8.2: Update Plugin Configurations
**Summary**: Configure Obsidian to maintain the new link format.

**Manual action**:
1. Open Obsidian settings
2. Update link format preferences to use absolute paths
3. Configure any link-related plugins
4. Document settings in /link-fix/obsidian-config-changes.md

### Step 8.3: Create Maintenance Guide
**Summary**: Document how to maintain normalized links going forward.

```
Claude, create a maintenance guide as artifact "Link Maintenance Guide":
1. Link format standards:
   - Required format for new links
   - When to use wikilinks vs markdown
   - Special cases handling
2. Maintenance procedures:
   - How to check link health
   - Periodic validation schedule
   - Fixing broken links
3. Common issues and solutions:
   - Moved files
   - Renamed files
   - External link changes
4. Validation scripts usage:
   - How to run link-validator.md template
   - Understanding reports
   - Quick fixes
5. Save as /link-fix/link-maintenance-guide.md
```

### Step 8.4: Generate Final Report
**Summary**: Create comprehensive project documentation.

```
Claude, generate final project report with:
1. Executive summary:
   - Project goals achieved
   - Key statistics
   - Time invested
2. Detailed accomplishments:
   - Links normalized by type
   - Issues resolved
   - Improvements made
3. Lessons learned:
   - What went well
   - Challenges faced
   - Recommendations for similar projects
4. Maintenance plan:
   - Ongoing requirements
   - Monitoring approach
   - Update schedule
5. Appendices:
   - Script documentation
   - Configuration changes
   - Resource links
Save as /link-fix/final-project-report.md
```

### Step 8.5: Archive Project Files
**Summary**: Organize all project files for future reference.

```
Claude, organize project archive:
1. Create /link-fix/archive/ directory
2. Move all working files to appropriate subdirectories:
   - /scripts/ - All Templater scripts
   - /reports/ - All analysis and reports  
   - /backups/ - Backup references
   - /logs/ - Execution logs
3. Create index file listing all deliverables
4. Compress large log files
5. Create README for archive
6. Save archive index as /link-fix/archive/index.md
```

### Step 8.6: Phase 8 Wrap-up
**Summary**: Project completion and handover.

```
Claude, create final summary at /link-fix/normalization-phase-8-summary.md containing:
1. Cleanup work completed
2. Documentation created
3. Archive organization
4. Project status: COMPLETE
5. Future recommendations
6. Contact for questions
```

---

## Emergency Procedures

### Rollback Process
**Summary**: How to restore the vault if something goes wrong.

```
Claude, if rollback is needed:
1. Stop all processing immediately
2. Identify the scope of rollback needed:
   - Entire vault
   - Specific directories
   - Individual files
3. For full rollback:
   - Restore from complete backup
   - Document what went wrong
4. For partial rollback:
   - Restore only affected directories
   - Re-run validation on restored content
5. Create incident report at /link-fix/rollback-incident.md
```

### Partial Recovery
**Summary**: Restore specific directories while preserving successfully processed content.

```
Claude, for selective restoration:
1. Identify directories needing restoration
2. Copy from backup to vault, preserving:
   - Successfully processed directories
   - Manual fixes already made
3. Re-run validation on restored directories
4. Update processing status
5. Document in /link-fix/partial-recovery-log.md
```

---

## Timeline Estimate

- **Phase 1**: 2-3 hours (including manual backup)
- **Phase 2**: 2-3 hours (script development and testing)
- **Phase 3**: 1-2 hours (preparation and planning)
- **Phase 4**: 2-3 hours (artifacts processing)
- **Phase 5**: 1-2 hours (reference content)
- **Phase 6**: 4-6 hours (main content processing)
- **Phase 7**: 2-3 hours (validation and QA)
- **Phase 8**: 2-3 hours (cleanup and documentation)

**Total estimated time**: 16-25 hours of active work across multiple sessions

---

*Note: This plan is designed for execution across multiple chat sessions. Each phase includes context loading and wrap-up steps to maintain continuity. Always review outputs before executing any file modifications.*