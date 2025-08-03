# Validation Template Reference Guide

**Purpose**: Quick reference for all validation and fix templates created

## Validation Templates

### T13-Fragment-Link-Validator
**Purpose**: Validate fragment links (#heading, ^block-id)
**Use When**: After any link changes to ensure fragments still work
**Output**: 70-fragment-validation.md
**Time**: ~30 seconds

### T14-Cross-Reference-Validator  
**Purpose**: Analyze link relationships and find orphaned files
**Use When**: Periodic maintenance to find disconnected content
**Output**: 71-cross-reference-validation.md
**Time**: ~45 seconds

### T15-Historical-Comparison-Validator
**Purpose**: Compare current state with original inventory
**Use When**: To verify conversion completeness
**Output**: 72-historical-comparison.md
**Time**: ~20 seconds

### T16-Edge-Case-Pattern-Validator
**Purpose**: Find unusual link patterns and edge cases
**Use When**: Deep inspection for quality assurance
**Output**: 73-edge-case-validation.md
**Time**: ~45 seconds

## Fix Templates

### T17-Fragment-Link-Fixer
**Purpose**: Automatically fix fragment link issues
**Features**: 
- Fixes pipe syntax
- Validates heading anchors
- Creates automatic backups
**Output**: 75-fragment-fix-report.md
**Time**: ~3 minutes

### T18-Fragment-Fix-Rollback
**Purpose**: Rollback fragment fixes if needed
**Use When**: If fixes cause problems
**Features**: Restores from automatic backups
**Output**: 76-fragment-rollback-report.md

## Usage Pattern

### For Regular Maintenance:
1. Run T13 (Fragment Validator) - Quick health check
2. If issues found, run T17 (Fragment Fixer)
3. Re-run T13 to confirm

### For Deep Analysis:
1. Run all validators (T13-T16)
2. Review reports 70-73
3. Address any systematic issues

### For Publishing Preparation:
1. Run T12 (Final Vault Validation) - Overall check
2. Run T13 (Fragment Validator) - Fragment check
3. Fix any issues found
4. Re-validate

## Template Locations

All templates stored in:
`/tools/templates/link-fix-templates/`

To use:
1. Copy template to `/link-fix/`
2. Execute with Templater (Alt+E)
3. Review output report
4. Delete executed template

## Maintenance Schedule

**Weekly**: Quick fragment validation (T13)
**Monthly**: Full validation suite (T13-T16)
**Before Publishing**: Complete validation + fixes

---

**Remember**: These templates only scan the project scope (artifacts/, notes/, tags/, links/) and exclude all archive directories.