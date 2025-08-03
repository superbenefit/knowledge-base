# Quick Validation Execution Guide

**Created**: 2025-08-03
**Purpose**: Step-by-step guide for running the comprehensive validation suite

## Prerequisites

Ensure you have:
- Completed phases 1-7 of link normalization
- Access to `/tools/templates/link-fix-templates/`
- 30-45 minutes for full validation

## Validation Scope

All validators check ONLY these directories:
- `artifacts/`
- `notes/` (excluding archives)
- `tags/`
- `links/`

Excluded subdirectories:
- `notes/general-circle/`
- `notes/archive/`
- `notes/wp/`
- `notes/dao-primitives/primitives-archive/`
- Any path containing `/archive/` or `-archive/`

## Execution Steps

### Step 1: Fragment Link Validation
```
1. Copy T13-Fragment-Link-Validator.md from templates to /link-fix/
2. Execute template with Templater (Alt+E)
3. Review output: 70-fragment-validation.md
4. Delete the executed template file
```

### Step 2: Cross-Reference Validation
```
1. Copy T14-Cross-Reference-Validator.md from templates to /link-fix/
2. Execute template with Templater
3. Review output: 71-cross-reference-validation.md
4. Delete the executed template file
```

### Step 3: Historical Comparison
```
1. Copy T15-Historical-Comparison-Validator.md from templates to /link-fix/
2. Execute template with Templater
3. Review output: 72-historical-comparison.md
4. Delete the executed template file
```

### Step 4: Edge Case Detection
```
1. Copy T16-Edge-Case-Pattern-Validator.md from templates to /link-fix/
2. Execute template with Templater
3. Review output: 73-edge-case-validation.md
4. Delete the executed template file
```

## What to Look For

### Green Flags ✅
- Fragment validation: <5 invalid fragments
- Cross-reference: Some orphaned files expected (indexes, standalone docs)
- Historical: >99% conversion rate
- Edge cases: Only whitespace/formatting issues

### Yellow Flags ⚠️
- Fragment validation: 5-20 invalid fragments
- Cross-reference: Many unreferenced files
- Historical: 95-99% conversion rate
- Edge cases: Embedded content or unusual paths

### Red Flags ❌
- Any wikilinks found in Cross-Reference Validator
- Historical comparison shows missing files
- Edge cases show malformed links or mixed syntax
- Multiple validation angles show same files as problematic

## Creating Final Summary

After running all validators, create `74-final-validation-summary.md` with:

1. **Overall Assessment**
   - Confidence level (High/Medium/Low)
   - Major findings from each validator
   - Patterns across validators

2. **Action Items**
   - Any critical fixes needed
   - Minor cleanup tasks
   - Future monitoring suggestions

3. **Publishing Readiness**
   - Ready to publish: Yes/No
   - Any pre-publishing tasks
   - Recommended testing approach

## Quick Reference

| Validator | Output File | Focus Area |
|-----------|-------------|------------|
| T13 | 70-fragment-validation.md | Fragment link validity |
| T14 | 71-cross-reference-validation.md | Link consistency & orphans |
| T15 | 72-historical-comparison.md | Conversion completeness |
| T16 | 73-edge-case-validation.md | Unusual patterns |

---

*Remember: These validators complement the initial validation (32) by checking aspects that basic file existence and format checks might miss.*