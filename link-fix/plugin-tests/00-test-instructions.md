# Plugin Test Instructions

**Phase**: 2.3b.2  
**Created**: 2025-08-01  
**Purpose**: Document the Obsidian Links plugin behavior on all link types

## Test Setup Complete ✅

Three comprehensive test files have been created in `/link-fix/plugin-tests/`:
1. `47-test-all-link-types.md` - Every link pattern
2. `48-test-edge-cases.md` - Problematic patterns
3. `49-test-mixed-formats.md` - Realistic combinations

Backup copies saved in `/link-fix/plugin-tests/backups/`

## Testing Instructions

### Step 1: Verify Plugin Settings
1. Open Obsidian Settings → Community Plugins → Obsidian Links
2. Confirm these settings are enabled:
   - ✓ Append .md extension
   - ✓ Convert wikilinks to markdown
   - ✓ Context menu enabled
3. Take a screenshot of settings for documentation

### Step 2: Test Individual Files

For each test file, follow this process:

#### A. Test 47-test-all-link-types.md
1. Open the file in Obsidian
2. Right-click → "Convert all links in file"
3. Wait for completion
4. Document results in the "Actual Results" section at bottom
5. Note:
   - Which link types converted successfully?
   - Which were skipped or failed?
   - Any error messages?

#### B. Test 48-test-edge-cases.md
1. Open the file
2. Run the plugin conversion
3. Pay special attention to:
   - Code block preservation
   - Special character handling
   - Whitespace normalization
   - Template syntax preservation

#### C. Test 49-test-mixed-formats.md
1. Open the file
2. Run the plugin conversion
3. Check realistic document scenarios
4. Note any performance issues

### Step 3: Create Comparison Report

For each test file, create a side-by-side comparison:
- Original (from backup)
- Converted result
- Note specific changes

### Step 4: Test Rollback

1. Restore one file from backup to test recovery process
2. Verify file returns to original state

## What to Document

### For Each Link Type:

1. **Conversion Success**
   - ✅ Converts correctly
   - ⚠️ Partially converts
   - ❌ Fails or skipped

2. **Specific Behavior**
   - Exact output format
   - Any modifications to path
   - Fragment/block handling
   - Alias preservation

3. **Edge Cases**
   - Unexpected changes
   - Data loss
   - Format corruption

### Critical Questions:

1. **Embedded Content**: Does `![[file]]` convert at all?
2. **Fragments**: Are `#heading` references preserved?
3. **Relative Paths**: How does plugin handle `../` paths?
4. **Leading Slashes**: Does plugin remove them or fail?
5. **Block References**: Are `^block-id` preserved?
6. **Code Blocks**: Are links in code protected?

## Results Documentation

Please update each test file's "Actual Results" section with findings, then create:
- `50-plugin-test-results.md` - Summary of all findings

## Ready to Test!

The test environment is prepared. Please run the tests and document the plugin's actual behavior.

**Important**: If the plugin shows any dialogs or options during conversion, document those as well.

---

*After testing, we'll proceed to Step 2.3b.3: Manual Intervention Planning*