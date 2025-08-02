# Prompt for Phase 3 - Pre-Processing Execution

## Project Context

I need to execute **Phase 3** of the link normalization project for my SuperBenefit Knowledge Base vault. This phase will remove leading slashes from links in preparation for the main conversion.

**Project Plan Location**: `F:\projects\sb-knowledge-base\link-fix\link-normalization-plan-v2.md` **Phase 2 Summary**: `F:\projects\sb-knowledge-base\link-fix\11-phase-2-summary.md`

## Current Status

- **Vault**: F:\projects\sb-knowledge-base (on NEW `plugin-execute` branch)
- **Phases 1-2**: ✅ COMPLETE
- **Phase 3**: Ready to execute
    - 28 files with 307 leading slash links identified
    - T03-Remove-Leading-Slashes-v2 template tested and ready
    - Tracking infrastructure in place
    - Backup strategy defined

## Objective

Execute Phase 3: Pre-Processing as defined in the plan

- Remove leading slashes from 28 identified files
- Create proper backups and logging
- Validate results
- Update all tracking

## Working Style Requirements

Please follow these important working principles learned from Phases 1-2:

1. **Step-by-step execution**: Work through each step methodically. Don't skip ahead.
2. **Human approval**: Always wait for human input before executing file changes.
3. **No direct file editing**: Use the T03 template for all file modifications.
4. **Clear communication**: Explain what will happen before template execution.
5. **Sequential numbering**: Continue pattern (12-, 13-, etc.) for new files.
6. **Incremental updates**: Add to existing files rather than rewriting them.
7. **Dashboard awareness**: Remember the dashboard uses DataviewJS to parse logs.
8. **Safety first**: Always run dry-run mode before actual execution.

## Pre-Execution Checklist

Before starting, confirm:

- [ ] On `plugin-execute` branch (not `plugin-test`)
- [ ] Recent git commit for recovery
- [ ] T03 template is in correct location
- [ ] Understand the 28 target files

## Starting Point

Please begin with **Phase 3, Step 3.0**: Context Loading

1. Review Phase 2 summary and confirm readiness
2. Verify T03-Remove-Leading-Slashes-v2 is tested
3. Check the 28 target files from leading slash analysis
4. Guide me through the pre-processing workflow step by step

Remember: I'll be executing the actual template commands, you'll guide and track progress.