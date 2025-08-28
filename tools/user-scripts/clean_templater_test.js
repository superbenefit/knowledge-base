/**
 * Test Suite for clean_templater.js
 * 
 * This file contains comprehensive test cases for the templater cleaner module
 * to verify it handles various Templater plugin patterns correctly.
 */

// Import the module (for testing outside of Templater)
const cleanTemplater = require('./clean_templater.js');

// Test data
const testCases = [
    // Test 1: Basic interpolation commands
    {
        name: 'Basic interpolation commands',
        input: 'Title: <% tp.frontmatter.title %>\nDate: <% tp.date.now("YYYY-MM-DD") %>\nContent here.',
        expected: 'Title: \nDate: \nContent here.',
        shouldRemove: 2,
        expectedTypes: { interpolation: 2 }
    },
    
    // Test 2: Execution commands
    {
        name: 'Execution commands',
        input: '<%* tR += "Hello World" %>\nSome text\n<%* if (tp.file.title) { tR += "Found title"; } %>',
        expected: '\nSome text\n',
        shouldRemove: 2,
        expectedTypes: { execution: 2 }
    },
    
    // Test 3: Dynamic commands (deprecated)
    {
        name: 'Dynamic commands',
        input: 'Last modified: <%+ tp.file.last_modified_date() %>\nCurrent: <%+ tp.date.now() %>',
        expected: 'Last modified: \nCurrent: ',
        shouldRemove: 2,
        expectedTypes: { dynamic: 2 }
    },
    
    // Test 4: Mixed command types
    {
        name: 'Mixed command types',
        input: '# <% tp.frontmatter.title %>\n<%* tR += "Processing..." %>\nLast updated: <%+ tp.file.last_modified_date() %>',
        expected: '# \n\nLast updated: ',
        shouldRemove: 3,
        expectedTypes: { interpolation: 1, execution: 1, dynamic: 1 }
    },
    
    // Test 5: Multiline expressions
    {
        name: 'Multiline expressions',
        input: `Before
<%*
if (tp.frontmatter.status === "draft") {
    tR += "This is a draft";
} else {
    tR += "Published content";
}
%>
After`,
        expected: `Before

After`,
        shouldRemove: 1,
        expectedTypes: { execution: 1 }
    },
    
    // Test 6: Complex JavaScript in execution commands
    {
        name: 'Complex JavaScript execution',
        input: `<%*
const pages = tp.obsidian.vault.getMarkdownFiles();
const filtered = pages.filter(p => p.basename.includes("template"));
tR += "Found " + filtered.length + " templates";
%>`,
        expected: '',
        shouldRemove: 1,
        expectedTypes: { execution: 1 }
    },
    
    // Test 7: Templater with special characters and symbols
    {
        name: 'Special characters in expressions',
        input: 'Rating: <% tp.frontmatter["rating-stars"] || "⭐⭐⭐" %>\nProgress: <% tp.frontmatter.progress + "%" %>',
        expected: 'Rating: \nProgress: ',
        shouldRemove: 2,
        expectedTypes: { interpolation: 2 }
    },
    
    // Test 8: Malformed expressions (unclosed)
    {
        name: 'Malformed expressions (unclosed)',
        input: 'Start <% tp.date.now() text continues\nNext line\n<% tp.file.title %> proper expression',
        expected: 'Start  proper expression',
        shouldRemove: 2,
        expectedTypes: { malformed: 1, interpolation: 1 }
    },
    
    // Test 9: Orphaned closing tags
    {
        name: 'Orphaned closing tags',
        input: 'Some text %> orphaned\nMore text %> another orphaned\nNormal content',
        expected: 'Some text  orphaned\nMore text  another orphaned\nNormal content',
        shouldRemove: 2,
        expectedTypes: { malformed: 2 }
    },
    
    // Test 10: Escaped templater patterns
    {
        name: 'Escaped templater patterns',
        input: 'To show templater syntax use \\<% tp.date.now() %\\> in your examples.',
        expected: 'To show templater syntax use <% tp.date.now() %> in your examples.',
        shouldRemove: 1,
        expectedTypes: { escaped: 1 }
    },
    
    // Test 11: Nested expressions (should be handled as malformed)
    {
        name: 'Nested expressions',
        input: '<% tp.frontmatter.title || "Default <% tp.file.title %> Title" %>',
        expected: '',
        shouldRemove: 1,
        expectedTypes: { interpolation: 1 }
    },
    
    // Test 12: Inline expressions mixed with text
    {
        name: 'Inline expressions with text',
        input: 'The file <% tp.file.title %> was created on <% tp.file.creation_date() %> and is <% tp.file.size %> bytes.',
        expected: 'The file  was created on  and is  bytes.',
        shouldRemove: 3,
        expectedTypes: { interpolation: 3 }
    },
    
    // Test 13: Expressions in frontmatter-like structure
    {
        name: 'Expressions in YAML-like structure',
        input: `---
title: <% tp.frontmatter.title || "Untitled" %>
date: <% tp.date.now("YYYY-MM-DD") %>
author: <% tp.frontmatter.author || "Anonymous" %>
---

Content starts here.`,
        expected: `---
title: 
date: 
author: 
---

Content starts here.`,
        shouldRemove: 3,
        expectedTypes: { interpolation: 3 }
    },
    
    // Test 14: Expressions with logical operators
    {
        name: 'Logical operators in expressions',
        input: 'Status: <% tp.frontmatter.status === "done" ? "✅ Complete" : "🔄 In Progress" %>',
        expected: 'Status: ',
        shouldRemove: 1,
        expectedTypes: { interpolation: 1 }
    },
    
    // Test 15: Empty expressions
    {
        name: 'Empty expressions',
        input: 'Text <% %> with <%* %> empty expressions',
        expected: 'Text  with  empty expressions',
        shouldRemove: 2,
        expectedTypes: { interpolation: 1, execution: 1 }
    },
    
    // Test 16: Expressions at document boundaries
    {
        name: 'Boundary expressions',
        input: '<% tp.file.title %> content in middle <%* tR += "end" %>',
        expected: ' content in middle ',
        shouldRemove: 2,
        expectedTypes: { interpolation: 1, execution: 1 }
    },
    
    // Test 17: Preserve regular angle brackets (HTML, etc.)
    {
        name: 'Preserve HTML tags',
        input: '<div>HTML content</div>\n<% tp.date.now() %>\n<span class="highlight">More HTML</span>',
        expected: '<div>HTML content</div>\n\n<span class="highlight">More HTML</span>',
        shouldRemove: 1,
        expectedTypes: { interpolation: 1 }
    },
    
    // Test 18: Only templater expressions (should result in empty/minimal content)
    {
        name: 'Only templater expressions',
        input: '<% tp.file.title %> <%* tR += "test" %> <%+ tp.date.now() %>',
        expected: '',
        shouldRemove: 3,
        expectedTypes: { interpolation: 1, execution: 1, dynamic: 1 }
    },
    
    // Test 19: Empty input
    {
        name: 'Empty input',
        input: '',
        expected: '',
        shouldRemove: 0,
        expectedTypes: {}
    },
    
    // Test 20: Whitespace handling around expressions
    {
        name: 'Whitespace handling',
        input: `Line 1

<% tp.frontmatter.title %>

Line 2`,
        expected: `Line 1

Line 2`,
        shouldRemove: 1,
        expectedTypes: { interpolation: 1 }
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
    },
    {
        name: 'Object input',
        input: { content: 'test' },
        expectError: true
    }
];

// Run tests
function runTests() {
    console.log('🧪 Running Templater Cleaner Test Suite\n');
    
    let passedTests = 0;
    let totalTests = testCases.length + errorTestCases.length;
    
    // Test normal cases
    console.log('📝 Testing Normal Cases:');
    testCases.forEach((test, index) => {
        try {
            const result = cleanTemplater(test.input);
            
            let passed = true;
            const issues = [];
            
            // Check if processing succeeded
            if (!result.success) {
                passed = false;
                issues.push('Processing failed');
                if (result.errors.length > 0) {
                    issues.push(`Errors: ${result.errors.join(', ')}`);
                }
            }
            
            // Check content output
            if (result.success) {
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
            const result = cleanTemplater(test.input);
            
            if (test.expectError && result.success) {
                console.log(`  ❌ Error Test ${index + 1}: ${test.name} - Should have failed but succeeded`);
            } else if (test.expectError && !result.success && result.errors.length > 0) {
                console.log(`  ✅ Error Test ${index + 1}: ${test.name} - Correctly handled error`);
                passedTests++;
            } else {
                console.log(`  ❌ Error Test ${index + 1}: ${test.name} - Unexpected result`);
            }
            
        } catch (error) {
            console.log(`  ❌ Error Test ${index + 1}: ${test.name} - Unexpected exception: ${error.message}`);
        }
    });
    
    // Summary
    console.log(`\n📊 Test Results: ${passedTests}/${totalTests} tests passed`);
    
    if (passedTests === totalTests) {
        console.log('🎉 All tests passed! The templater cleaner module is working correctly.');
    } else {
        console.log('⚠️  Some tests failed. Please review the implementation.');
    }
    
    return passedTests === totalTests;
}

// Demo function to show the module in action
function demoModule() {
    console.log('\n🚀 Templater Cleaner Demo:\n');
    
    const demoContent = `# <% tp.frontmatter.title || "Demo Document" %>

_<% tp.frontmatter.description || "A sample document with templater expressions" %>_

**Created:** <% tp.date.now("YYYY-MM-DD") %>
**Author:** <% tp.frontmatter.author || "Unknown" %>

<%*
// This is a complex execution block
const tags = tp.frontmatter.tags || [];
if (tags.length > 0) {
    tR += "\\n\\n**Tags:** " + tags.map(tag => \`#\${tag}\`).join(' ');
}
%>

Last modified: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>

This paragraph contains <% tp.file.title %> inline expressions.

Some malformed templater: <% tp.file.title
And orphaned closing: %>

Regular HTML: <div class="content">This should be preserved</div>`;

    console.log('📄 Input Content:');
    console.log('---');
    console.log(demoContent);
    console.log('---\n');
    
    const result = cleanTemplater(demoContent);
    
    console.log('📋 Processing Result:');
    console.log(`Success: ${result.success}`);
    console.log(`Original Length: ${result.stats.original_length}`);
    console.log(`Processed Length: ${result.stats.processed_length}`);
    console.log(`Expressions Removed: ${result.stats.items_removed}`);
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