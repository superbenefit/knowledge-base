/**
 * Test suite for the Dataview cleaner module
 * 
 * Tests various dataview patterns and edge cases to ensure proper functionality
 */

const cleanDataview = require('./clean_dataview.js');

function runTests() {
    console.log('=== Dataview Cleaner Test Suite ===\n');
    
    let testsPassed = 0;
    let testsFailed = 0;
    
    function assert(condition, message) {
        if (condition) {
            console.log('✓ ' + message);
            testsPassed++;
        } else {
            console.log('✗ ' + message);
            testsFailed++;
        }
    }
    
    // Test 1: Basic DQL block removal
    console.log('Test 1: Basic DQL block removal');
    const test1Input = '# Sample Note\n\n```dataview\nLIST \nFROM #projects\nWHERE status = "active"\n```\n\nSome content after.';
    
    const test1Result = cleanDataview(test1Input);
    assert(test1Result.success, 'DQL block removal succeeded');
    assert(!test1Result.content.includes('```dataview'), 'DQL block was removed');
    assert(test1Result.content.includes('# Sample Note'), 'Regular content preserved');
    assert(test1Result.content.includes('Some content after.'), 'Content after block preserved');
    assert(test1Result.stats.items_removed === 1, 'Correct item count');
    console.log('');
    
    // Test 2: DataviewJS block removal  
    console.log('Test 2: DataviewJS block removal');
    const test2Input = '# JavaScript Query\n\n```dataviewjs\ndv.table(["File", "Rating"], \n  dv.pages("#books")\n    .sort(b => b.rating)\n    .map(b => [b.file.link, b.rating])\n)\n```\n\nEnd of note.';
    
    const test2Result = cleanDataview(test2Input);
    assert(test2Result.success, 'DataviewJS block removal succeeded');
    assert(!test2Result.content.includes('```dataviewjs'), 'DataviewJS block was removed');
    assert(test2Result.content.includes('# JavaScript Query'), 'Regular content preserved');
    assert(test2Result.stats.items_removed === 1, 'Correct item count');
    console.log('');
    
    // Test 3: Inline DQL expressions
    console.log('Test 3: Inline DQL expressions');
    const test3Input = 'Today is `= date(today)` and the deadline is `= [[project]].deadline`.\n\nSome more text here.';
    
    const test3Result = cleanDataview(test3Input);
    assert(test3Result.success, 'Inline DQL removal succeeded');
    assert(!test3Result.content.includes('`= date(today)`'), 'First inline DQL removed');
    assert(!test3Result.content.includes('`= [[project]].deadline`'), 'Second inline DQL removed');
    assert(test3Result.content.includes('Today is  and the deadline is .'), 'Text structure preserved');
    assert(test3Result.stats.items_removed === 2, 'Correct item count');
    console.log('');
    
    // Test 4: Inline DataviewJS expressions
    console.log('Test 4: Inline DataviewJS expressions');
    const test4Input = 'The current file is `$= dv.current().file.name` and modified `$= dv.current().file.mtime`.';
    
    const test4Result = cleanDataview(test4Input);
    assert(test4Result.success, 'Inline DataviewJS removal succeeded');
    assert(!test4Result.content.includes('`$= dv.current().file.name`'), 'First inline DataviewJS removed');
    assert(!test4Result.content.includes('`$= dv.current().file.mtime`'), 'Second inline DataviewJS removed');
    assert(test4Result.stats.items_removed === 2, 'Correct item count');
    console.log('');
    
    // Test 5: Mixed patterns
    console.log('Test 5: Mixed dataview patterns');
    const test5Input = '# Complex Note\n\n```dataview\nTABLE rating, genre\nFROM #books\nSORT rating DESC\n```\n\nToday is `= date(today)`.\n\n```dataviewjs\ndv.list(dv.pages("#tasks").map(p => p.file.name))\n```\n\nCurrent file: `$= dv.current().file.name`\n\nRegular content.';
    
    const test5Result = cleanDataview(test5Input);
    assert(test5Result.success, 'Mixed patterns removal succeeded');
    assert(!test5Result.content.includes('```dataview'), 'DQL block removed');
    assert(!test5Result.content.includes('```dataviewjs'), 'DataviewJS block removed');
    assert(!test5Result.content.includes('`= date(today)`'), 'Inline DQL removed');
    assert(!test5Result.content.includes('`$= dv.current().file.name`'), 'Inline DataviewJS removed');
    assert(test5Result.content.includes('# Complex Note'), 'Regular content preserved');
    assert(test5Result.content.includes('Regular content.'), 'End content preserved');
    assert(test5Result.stats.items_removed === 4, 'Correct total item count');
    console.log('');
    
    // Test 6: Preserve regular code blocks
    console.log('Test 6: Preserve regular code blocks');
    const test6Input = '# Code Examples\n\n```javascript\nfunction test() {\n    return "hello";\n}\n```\n\n```python  \ndef hello():\n    print("world")\n```\n\n```dataview\nLIST FROM #test\n```\n\n```json\n{\n    "key": "value"\n}\n```\n\nEnd.';
    
    const test6Result = cleanDataview(test6Input);
    assert(test6Result.success, 'Code block preservation succeeded');
    assert(test6Result.content.includes('```javascript'), 'JavaScript block preserved');
    assert(test6Result.content.includes('```python'), 'Python block preserved');  
    assert(test6Result.content.includes('```json'), 'JSON block preserved');
    assert(!test6Result.content.includes('```dataview'), 'Dataview block removed');
    assert(test6Result.stats.items_removed === 1, 'Only dataview block removed');
    console.log('');
    
    // Test 7: Malformed blocks
    console.log('Test 7: Malformed dataview blocks');
    const test7Input = '# Malformed\n\n```dataview\nLIST FROM #test\nWHERE incomplete\n\n```javascript\nconsole.log("regular code");\n```\n\nEnd.';
    
    const test7Result = cleanDataview(test7Input);
    assert(test7Result.success, 'Malformed block handling succeeded');
    assert(!test7Result.content.includes('LIST FROM #test'), 'Malformed content removed');
    assert(test7Result.content.includes('```javascript'), 'Regular code preserved');
    assert(test7Result.warnings.length > 0, 'Warning generated for malformed block');
    console.log('');
    
    // Test 8: Empty and edge cases
    console.log('Test 8: Empty and edge cases');
    const test8Empty = cleanDataview('');
    assert(test8Empty.success, 'Empty string handled');
    assert(test8Empty.content === '', 'Empty content returned');
    assert(test8Empty.stats.items_removed === 0, 'No items removed from empty');
    
    const test8Invalid = cleanDataview(null);
    assert(!test8Invalid.success, 'Invalid input rejected');
    assert(test8Invalid.errors.length > 0, 'Error message provided');
    
    const test8NoDataview = cleanDataview('# Regular note\n\nJust some text.');
    assert(test8NoDataview.success, 'Regular content handled');
    assert(test8NoDataview.stats.items_removed === 0, 'No items removed from regular content');
    console.log('');
    
    // Test 9: Complex DQL with special characters
    console.log('Test 9: Complex DQL patterns');
    const test9Input = '# Complex Queries\n\n```dataview\nTABLE WITHOUT ID "**" + title + "**" AS "Title", \n  default(rating, "N/A") AS "Rating"\nFROM #books AND -#books/finished\nWHERE contains(lower(genre), "sci")\nSORT rating DESC\nLIMIT 10\n```\n\nText between.\n\n```dataviewjs  \nconst pages = dv.pages("#project")\n    .where(p => p.status === "active")\n    .groupBy(p => p.category);\n    \nfor (let group of pages) {\n    dv.header(3, group.key);\n    dv.list(group.rows.map(r => r.file.link));\n}\n```\n\nEnd.';
    
    const test9Result = cleanDataview(test9Input);
    assert(test9Result.success, 'Complex DQL removal succeeded');
    assert(!test9Result.content.includes('TABLE WITHOUT ID'), 'Complex DQL removed');
    assert(!test9Result.content.includes('const pages = dv.pages'), 'Complex DataviewJS removed');
    assert(test9Result.content.includes('Text between.'), 'Intermediate text preserved');
    assert(test9Result.stats.items_removed === 2, 'Both complex blocks removed');
    console.log('');
    
    // Summary
    console.log('=== Test Results ===');
    console.log(`Tests passed: ${testsPassed}`);
    console.log(`Tests failed: ${testsFailed}`);
    console.log(`Total tests: ${testsPassed + testsFailed}`);
    
    if (testsFailed === 0) {
        console.log('\n🎉 All tests passed! The dataview cleaner is working correctly.');
    } else {
        console.log(`\n❌ ${testsFailed} test(s) failed. Please review the implementation.`);
    }
    
    return testsFailed === 0;
}

// Run tests if called directly
if (require.main === module) {
    runTests();
}

module.exports = runTests;