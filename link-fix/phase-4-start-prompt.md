# Prompt for Phase 4 - Plugin Conversion (Artifacts)

## Project Context

I need to execute **Phase 4** of the link normalization project for my SuperBenefit Knowledge Base vault. This phase will convert wikilinks to markdown format in the `/artifacts/` directory using the Obsidian Links plugin.

**Project Plan Location**: `F:\projects\sb-knowledge-base\link-fix\link-normalization-plan-v2.md`  
**Phase 3 Summary**: `F:\projects\sb-knowledge-base\link-fix\14-phase-3-summary.md`

## Current Status

- **Vault**: F:\projects\sb-knowledge-base (on `plugin-execute` branch)
- **Phases 1-3**: ✅ COMPLETE
  - Phase 1: Link inventory completed (16,286 total links)
  - Phase 2: Strategy and tracking infrastructure ready
  - Phase 3: All 307 leading slashes removed from 28 files
- **Phase 4**: Ready to execute
  - 62 files in `/artifacts/` with 3,751 wikilinks to convert
  - Obsidian Links plugin installed and configured
  - Tracking infrastructure in place
  - High-priority published content

## Objective

Execute Phase 4: Plugin Conversion - Artifacts as defined in the plan

- Convert all wikilinks to markdown format in `/artifacts/`
- Process in logical batches (articles, guides, patterns, studies)
- Create proper tracking and validation
- Test publishing after each major batch
- Update all progress tracking

## Working Style Requirements

Please follow these important working principles learned from Phases 1-3:

1. **Step-by-step execution**: Work through each step methodically. Don't skip ahead.
2. **Human approval**: Always wait for human input before executing plugin operations.
3. **Plugin-based conversion**: Use Obsidian Links plugin for all conversions (no manual edits).
4. **Clear communication**: Explain what will happen before each batch conversion.
5. **Sequential numbering**: Continue pattern (15-, 16-, etc.) for new files.
6. **Incremental updates**: Add to existing files rather than rewriting them.
7. **Dashboard awareness**: Remember the dashboard uses DataviewJS to parse CSV logs.
8. **Safety first**: Test on small batches before processing entire directories.
9. **Validation after each batch**: Check converted links work correctly.

## Pre-Execution Checklist

Before starting, confirm:

- [ ] On `plugin-execute` branch (verified via git)
- [ ] Recent git commit for recovery point
- [ ] Obsidian Links plugin is properly configured
- [ ] Phase 3 validation shows no remaining leading slashes
- [ ] Understand the 62 target files in `/artifacts/`
- [ ] Publishing test environment available

## Plugin Configuration Reminder

The Obsidian Links plugin should be configured with:
- Convert wikilinks to markdown: **ON**
- Delete wikilinks after conversion: **ON** (if available)
- Include .md extension: **YES**
- Preserve aliases: **YES**

## Starting Point

Please begin with **Phase 4, Step 4.0**: Context Loading

1. Review Phase 3 summary and confirm all pre-processing complete
2. Verify plugin settings match project requirements
3. Review the 62 files in `/artifacts/` by subdirectory:
   - Articles: 17 files
   - Guides: 24 files  
   - Patterns: 11 files
   - Studies: 10 files
4. Create tracking structure for Phase 4
5. Guide me through the conversion workflow batch by batch

## Batch Processing Order

As defined in `07-processing-order.md`:

1. **Articles** (17 files) - Start here for manageable test batch
2. **Guides** (24 files) - Includes critical DAO Primitives content
3. **Patterns** (11 files) - Core reusable patterns
4. **Studies** (10 files) - Case studies and experiments

Remember: I'll be executing the actual plugin commands in Obsidian, you'll guide and track progress. Each batch should be validated before proceeding to the next.

## Expected Outputs

- `15-phase-4-batch-plan.md` - Detailed batch processing plan
- `08-phase4-artifacts-log.csv` - Dashboard-compatible tracking
- `16-artifacts-validation-report.md` - Post-conversion validation
- `17-phase-4-summary.md` - Complete phase summary
- Publishing test results after key batches

Let's ensure smooth conversion of these high-priority published files!