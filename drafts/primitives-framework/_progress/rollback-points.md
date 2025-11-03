# Git Rollback Points

## Purpose
Track git checkpoints for each phase completion. Allows safe rollback if issues arise.

## Rollback Procedure
1. Identify the target tag from the list below
2. Run: `git reset --hard [tag]`
3. Update progress files to reflect rollback
4. Verify `_outputs/` directory state matches checkpoint
5. Resume work from rolled-back state

## Checkpoint Tags

### Phase 0: Setup Complete
- **Tag**: `primitives-phase-0-setup-complete`
- **Date**: 2025-11-03
- **State**: Directory structure and progress tracking initialized
- **Files**: All `_progress/` files created, `_outputs/` subdirectories ready

### Phase 1: Publish Ready Content
- **Tag**: `primitives-phase-1-complete`
- **Date**: TBD
- **State**: 5 unpublished resources copied to `_outputs/` with publish flags set

### Phase 2: Terminology Standardization
- **Tag**: `primitives-phase-2-terminology-complete`
- **Date**: TBD
- **State**: 27 files updated with new terminology

### Phase 3: Core Documents Created
- **Tag**: `primitives-phase-3-documents-complete`
- **Date**: TBD
- **State**: 8 new documents created from scratch

### Phase 4: Structural Reorganization
- **Tag**: `primitives-phase-4-structure-complete`
- **Date**: TBD
- **State**: Content reorganized into 4-section hierarchy

### Phase 5: Integration Documentation
- **Tag**: `primitives-phase-5-integration-complete`
- **Date**: TBD
- **State**: Integration guides complete, replacement map finalized

### Phase 6: Quality Assurance
- **Tag**: `primitives-phase-6-qa-complete`
- **Date**: TBD
- **State**: All 35 resources validated, framework transformation complete

## Notes
- Always commit progress files with each checkpoint
- Include descriptive commit messages
- Test rollback procedure before critical work
- Document any non-standard git operations here
