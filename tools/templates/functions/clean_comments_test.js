/**
 * Test Suite for clean_comments.js
 * 
 * This file contains comprehensive test cases for the comment cleaner module
 * to verify it handles various Obsidian comment patterns correctly.
 */

// Import the module (for testing outside of Templater)
const cleanComments = require('./clean_comments.js');

// Test data
const testCases = [
    // Test 1: Basic inline comments
    {
        name: 'Basic inline comments',
        input: 'This is text %% this is a comment %% and this continues.',
        expected: 'This is text  and this continues.',
        shouldRemove: 1
    },
    
    // Test 2: Multiple inline comments on same line
    {
        name: 'Multiple inline comments',
        input: 'Start %% comment1 %% middle %% comment2 %% end.',
        expected: 'Start  middle  end.',
        shouldRemove: 2
    },
    
    // Test 3: Block-level comments
    {
        name: 'Block-level comments',
        input: `# Title
%% This is a block comment
Some text here
%% Another block comment`,
        expected: `# Title
Some text here`,
        shouldRemove: 2
    },
    
    // Test 4: Multiline comments
    {
        name: 'Multiline comments',
        input: `Before text
%% This is a multiline
comment that spans
multiple lines %%
After text`,
        expected: `Before text
After text`,
        shouldRemove: 1
    },
    
    // Test 5: Mixed comment types
    {
        name: 'Mixed comment types',
        input: `# Heading
%% Block comment
Text with %% inline comment %% here.
%% Another multiline
comment here %%
Final text.`,
        expected: `# Heading
Text with  here.
Final text.`,
        shouldRemove: 3
    },
    
    // Test 6: Nested percent signs (should not break)
    {
        name: 'Text with percent signs (not comments)',
        input: 'This has 100% success rate and 50% chance.',
        expected: 'This has 100% success rate and 50% chance.',
        shouldRemove: 0
    },
    
    // Test 7: Malformed comments (unclosed)
    {
        name: 'Malformed comments',
        input: `Normal text
%% This comment is not closed
More text here`,
        expected: `Normal text
More text here`,
        shouldRemove: 1
    },
    
    // Test 8: Empty comments
    {
        name: 'Empty comments',
        input: 'Text with %% %% empty comment.',
        expected: 'Text with  empty comment.',
        shouldRemove: 1
    },
    
    // Test 9: Comments with special characters
    {
        name: 'Comments with special characters',
        input: 'Text %% comment with !@#$%^&*()_+ symbols %% more text.',
        expected: 'Text  more text.',
        shouldRemove: 1
    },
    
    // Test 10: Comments at start and end
    {
        name: 'Comments at boundaries',
        input: '%% Start comment %% Middle text %% End comment %%',
        expected: ' Middle text ',
        shouldRemove: 2
    },
    
    // Test 11: Only comments (should result in empty/minimal content)
    {
        name: 'Only comments',
        input: '%% Comment 1 %% %% Comment 2 %%',
        expected: '',
        shouldRemove: 2
    },
    
    // Test 12: Empty input
    {
        name: 'Empty input',
        input: '',
        expected: '',
        shouldRemove: 0
    },
    
    // Test 13: Whitespace handling
    {
        name: 'Whitespace handling',
        input: `Line 1

%% Comment in between %%

Line 2`,
        expected: `Line 1

Line 2`,
        shouldRemove: 1
    }
];

// Error test cases
const errorTestCases = [
    {
        name: 'Non-string input',
        input: null,
        expectError: true
    },
    {
        name: 'Undefined input',
        input: undefined,
        expectError: true
    },
    {
        name: 'Number input',
        input: 123,
        expectError: true
    }
];

// Run tests
function runTests() {
    console.log('🧪 Running Comment Cleaner Test Suite\n');
    
    let passedTests = 0;
    let totalTests = testCases.length + errorTestCases.length;
    
    // Test normal cases
    console.log('📝 Testing Normal Cases:');
    testCases.forEach((test, index) => {
        try {
            const result = cleanComments(test.input);
            
            let passed = true;
            const issues = [];
            
            // Check if processing succeeded
            if (!result.success) {
                passed = false;
                issues.push('Processing failed');
            }
            
            // Check content output
            const actualOutput = result.content.trim();
            const expectedOutput = test.expected.trim();
            if (actualOutput !== expectedOutput) {
                passed = false;
                issues.push(`Content mismatch. Expected: "${expectedOutput}", Got: "${actualOutput}"`);
            }
            
            // Check items removed count
            if (result.stats.items_removed !== test.shouldRemove) {
                passed = false;
                issues.push(`Items removed count mismatch. Expected: ${test.shouldRemove}, Got: ${result.stats.items_removed}`);
            }
            
            if (passed) {
                console.log(`  ✅ Test ${index + 1}: ${test.name}`);
                passedTests++;
            } else {
                console.log(`  ❌ Test ${index + 1}: ${test.name}`);
                issues.forEach(issue => console.log(`     - ${issue}`));
            }
            
        } catch (error) {
            console.log(`  ❌ Test ${index + 1}: ${test.name} - Error: ${error.message}`);
        }
    });
    
    // Test error cases
    console.log('\n🚨 Testing Error Cases:');
    errorTestCases.forEach((test, index) => {
        try {
            const result = cleanComments(test.input);
            
            let passed = true;
            
            if (test.expectError && result.success) {
                passed = false;
                console.log(`  ❌ Error Test ${index + 1}: ${test.name} - Should have failed but succeeded`);
            } else if (test.expectError && !result.success && result.errors.length > 0) {
                console.log(`  ✅ Error Test ${index + 1}: ${test.name} - Correctly handled error`);
                passedTests++;
            } else {
                passed = false;
                console.log(`  ❌ Error Test ${index + 1}: ${test.name} - Unexpected result`);
            }
            
        } catch (error) {
            console.log(`  ❌ Error Test ${index + 1}: ${test.name} - Unexpected exception: ${error.message}`);
        }
    });
    
    // Summary
    console.log(`\n📊 Test Results: ${passedTests}/${totalTests} tests passed`);
    
    if (passedTests === totalTests) {
        console.log('🎉 All tests passed! The comment cleaner module is working correctly.');
    } else {
        console.log('⚠️  Some tests failed. Please review the implementation.');
    }
    
    return passedTests === totalTests;
}

// Demo function to show the module in action
function demoModule() {
    console.log('\n🚀 Comment Cleaner Demo:\n');
    
    const demoContent = `# Example Document

%% This is a block comment that should be removed %%

This paragraph has %% an inline comment %% in the middle.

%% Another block comment
that spans multiple
lines and should be completely removed %%

Final paragraph with normal text and 100% success rate.`;

    console.log('📄 Input Content:');
    console.log('---');
    console.log(demoContent);
    console.log('---\n');
    
    const result = cleanComments(demoContent);
    
    console.log('📋 Processing Result:');
    console.log(`Success: ${result.success}`);
    console.log(`Original Length: ${result.stats.original_length}`);
    console.log(`Processed Length: ${result.stats.processed_length}`);
    console.log(`Comments Removed: ${result.stats.items_removed}`);
    console.log(`Warnings: ${result.warnings.length}`);
    console.log(`Errors: ${result.errors.length}\n`);
    
    if (result.warnings.length > 0) {
        console.log('⚠️  Warnings:');
        result.warnings.forEach(warning => console.log(`  - ${warning}`));
        console.log();
    }
    
    if (result.errors.length > 0) {
        console.log('❌ Errors:');
        result.errors.forEach(error => console.log(`  - ${error}`));
        console.log();
    }
    
    console.log('📄 Cleaned Content:');
    console.log('---');
    console.log(result.content);
    console.log('---\n');
}

// Export for use in other test files
if (typeof module !== 'undefined') {
    module.exports = { runTests, demoModule, testCases, errorTestCases };
}

// Run tests if this file is executed directly
if (require.main === module) {
    demoModule();
    runTests();
}