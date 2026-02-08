---
group: ics
title: v.02 Documentation Cleanup Task Tracker
description: Task tracking document for cleaning up Community Exchange v0.2 documentation, including file naming standardization and index updates
author: ICS Team
tags:
  - community-exchange
  - documentation
  - task-tracker
  - cleanup
aliases:
  - Documentation Cleanup Tracker
  - CE Documentation Tasks
publish: false
type: project-tracker
---

# v.02 Documentation Cleanup Task Tracker

## Task Overview

This document tracks the progress of cleaning up the Community Exchange v0.2 documentation. The work involves:
1. Converting all file names from snake_case to kebab-case throughout the directory structure
2. Reviewing and correcting all README/index files to ensure they contain proper references to files within their directories

## Progress Status

### Phase 1: File Naming (Snake case to kebab-case) - ✅ COMPLETE

All files have been successfully renamed from snake_case to kebab-case across all directories.

### Phase 2: README and Index File Review - IN PROGRESS

#### Master Index File - ✅ COMPLETE
- [x] v0-2-master-index.md: Updated all file references to use kebab-case
- [x] v0-2-master-index.md: Fixed section references (v0.1 → v0.2)
- [x] v0-2-master-index.md: Fixed directory references (I-Reference → H-Reference)
- [x] v0-2-master-index.md: Corrected index file names
- [x] v0-2-master-index.md: Added missing files in G-Future section
- [x] v0-2-master-index.md: Removed references to non-existent files
- [x] v0-2-master-index.md: Made all paths relative and consistent

#### Directory Index Files - ✅ COMPLETE
- [x] A-Cover/A-Cover.md - Updated to kebab-case (A.01-pdf-cover.md and A.02-table-of-contents.md)
- [x] B-Overview/B-Overview.md - Updated all file references to kebab-case
- [x] C-Implementation/C-Implementation.md - Updated all references and added missing files (C.06 and C.07)
- [x] D-Examples/D-Examples.md - Updated all references to kebab-case
- [x] E-Activities/E-Activities.md - File was empty, created proper index content
- [x] E-Guides/E-Guides.md - Updated all references to kebab-case
- [x] F-Activities/F-Activities.md - Removed template content, updated references, added missing files
- [x] G-Future/G-Future.md - Fixed references, corrected paths, added missing files (G.04-G.10)
- [x] H-Reference/H-Reference.md - Fixed file reference letters and paths

## Current Status

**TASK COMPLETE**

All directory index files have been reviewed and updated. The documentation cleanup is now complete with:
1. All file references converted to kebab-case
2. All missing files added to relevant index files
3. All broken links fixed
4. Empty files populated with appropriate content
5. All file paths corrected to use relative references

## Major Changes Made

1. **File Renaming:** Successfully converted all files from snake_case to kebab-case
2. **Master Index:** Completely revised to reflect new file names and correct structure
3. **Directory Structure:** Identified inconsistencies in file naming patterns

## Notes for Next Steps

- Some directories may be missing their index files (need to check E-Activities)
- All index files need to be reviewed for:
  - Correct kebab-case references
  - Complete file listings
  - Proper relative path usage
- Need to verify no files reference removed sections

## Summary

The documentation cleanup for v0.2 is complete. All file names use kebab-case throughout the directory structure, and all index files correctly reference their contents with proper relative paths. The documentation is now consistent and well-organized.

## File Naming Summary

All files have been successfully renamed following these patterns:
- Underscores (_) → Hyphens (-)
- All file names now consistently use kebab-case

Successfully renamed a total of 35 files across 9 directories plus 2 root files.