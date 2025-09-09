/**
 * Obsidian Dataview Cleaner for Quartz Export System
 * 
 * Removes Dataview plugin queries and expressions from markdown content while preserving
 * document structure and providing comprehensive processing statistics.
 * 
 * Handles:
 * - ```dataview code blocks (DQL queries)
 * - ```dataviewjs code blocks (JavaScript queries)  
 * - Inline DQL expressions (`= expression`)
 * - Inline DataviewJS expressions (`$= expression`)
 * - Malformed/incomplete dataview syntax
 * 
 * CRITICAL: Only removes dataview blocks, preserves regular code blocks
 * (```javascript, ```python, etc.)
 * 
 * @param {string} content - The markdown content to process
 * @returns {Object} Processing result with cleaned content and statistics
 */
function cleanDataview(content) {
    const startTime = Date.now();
    
    // Initialize result structure
    const result = {
        success: false,
        content: '',
        stats: {
            original_length: 0,
            processed_length: 0,
            items_removed: 0,
            items_transformed: 0
        },
        warnings: [],
        errors: []
    };
    
    try {
        // Input validation
        if (typeof content !== 'string') {
            result.errors.push('Invalid input: content must be a string');
            return result;
        }
        
        // Handle empty content
        if (content.length === 0) {
            result.success = true;
            result.content = '';
            return result;
        }
        
        // Record original length
        result.stats.original_length = content.length;
        
        // Process the content with a clear step-by-step approach
        let processedContent = content;
        let totalItemsRemoved = 0;
        const queryTypes = {
            dql_blocks: 0,
            dataviewjs_blocks: 0,
            inline_dql: 0,
            inline_dataviewjs: 0,
            malformed: 0
        };
        
        // Step 1: Handle all dataview blocks (both complete and malformed)
        // Process dataview blocks to distinguish between complete and malformed
        
        // First, find all dataview block starts  
        const dqlStarts = [];
        let dqlStartRegex = /```dataview\s*\n/g;
        let match;
        while ((match = dqlStartRegex.exec(processedContent)) !== null) {
            dqlStarts.push(match.index);
        }
        
        // Process each dataview block
        for (let startIndex of dqlStarts.reverse()) { // reverse to avoid index shifts
            let blockStart = startIndex;
            let searchFrom = blockStart + 12; // after "```dataview\n"
            
            // Look for the closing ``` that directly closes this dataview block
            // We need to make sure there's no other ``` block opening between the dataview start and this closing
            let closingFound = false;
            let blockEnd;
            
            // Search character by character for the first \n```\n that isn't part of another block
            let searchPos = searchFrom;
            while (searchPos < processedContent.length) {
                let closingIndex = processedContent.indexOf('\n```\n', searchPos);
                if (closingIndex === -1) {
                    // No closing found, search for ``` at end
                    closingIndex = processedContent.indexOf('\n```', searchPos);
                    if (closingIndex !== -1 && closingIndex + 4 === processedContent.length) {
                        // Found closing at very end
                        blockEnd = closingIndex + 4;
                        closingFound = true;
                        break;
                    } else {
                        break; // No proper closing
                    }
                }
                
                // Check if there's another code block opening between searchPos and this closing
                let nextBlockStart = processedContent.indexOf('\n```', searchPos);
                if (nextBlockStart !== -1 && nextBlockStart < closingIndex) {
                    // There's another block starting before this closing, so this closing doesn't belong to our dataview
                    break;
                } else {
                    // This closing belongs to our dataview block
                    blockEnd = closingIndex + 4; // Include \n```\n
                    closingFound = true;
                    break;
                }
            }
            
            if (closingFound) {
                // Complete block found
                let completeBlock = processedContent.substring(blockStart, blockEnd);
                processedContent = processedContent.substring(0, blockStart) + processedContent.substring(blockEnd);
                queryTypes.dql_blocks++;
                totalItemsRemoved++;
            } else {
                // Malformed block - find where it should end (next ``` block or end of content)
                let nextBlockMatch = /\n```[a-zA-Z]/g;
                nextBlockMatch.lastIndex = searchFrom;
                let nextBlock = nextBlockMatch.exec(processedContent);
                
                let blockEnd;
                if (nextBlock) {
                    blockEnd = nextBlock.index + 1; // Include the \n before ```
                } else {
                    // Goes to end of content, find last meaningful line
                    blockEnd = processedContent.length;
                }
                
                let malformedBlock = processedContent.substring(blockStart, blockEnd);
                processedContent = processedContent.substring(0, blockStart) + processedContent.substring(blockEnd);
                queryTypes.malformed++;
                totalItemsRemoved++;
                result.warnings.push(`Malformed dataview block found and removed`);
            }
        }
        
        // Step 2: Handle all dataviewjs blocks (both complete and malformed)
        const jsStarts = [];
        let jsStartRegex = /```dataviewjs\s*\n/g;
        while ((match = jsStartRegex.exec(processedContent)) !== null) {
            jsStarts.push(match.index);
        }
        
        // Process each dataviewjs block
        for (let startIndex of jsStarts.reverse()) { // reverse to avoid index shifts
            let blockStart = startIndex;
            let searchFrom = blockStart + 14; // after "```dataviewjs\n"
            
            // Look for the closing ``` that directly closes this dataviewjs block
            let closingFound = false;
            let blockEnd;
            
            // Search for proper closing that doesn't cross other blocks
            let searchPos = searchFrom;
            while (searchPos < processedContent.length) {
                let closingIndex = processedContent.indexOf('\n```\n', searchPos);
                if (closingIndex === -1) {
                    // No closing found, search for ``` at end
                    closingIndex = processedContent.indexOf('\n```', searchPos);
                    if (closingIndex !== -1 && closingIndex + 4 === processedContent.length) {
                        blockEnd = closingIndex + 4;
                        closingFound = true;
                        break;
                    } else {
                        break;
                    }
                }
                
                // Check if there's another code block opening between searchPos and this closing
                let nextBlockStart = processedContent.indexOf('\n```', searchPos);
                if (nextBlockStart !== -1 && nextBlockStart < closingIndex) {
                    // There's another block starting before this closing
                    break;
                } else {
                    // This closing belongs to our dataviewjs block
                    blockEnd = closingIndex + 4;
                    closingFound = true;
                    break;
                }
            }
            
            if (closingFound) {
                // Complete block found
                let completeBlock = processedContent.substring(blockStart, blockEnd);
                processedContent = processedContent.substring(0, blockStart) + processedContent.substring(blockEnd);
                queryTypes.dataviewjs_blocks++;
                totalItemsRemoved++;
            } else {
                // Malformed block - find where it should end
                let nextBlockMatch = /\n```[a-zA-Z]/g;
                nextBlockMatch.lastIndex = searchFrom;
                let nextBlock = nextBlockMatch.exec(processedContent);
                
                let blockEnd;
                if (nextBlock) {
                    blockEnd = nextBlock.index + 1; // Include the \n before ```
                } else {
                    blockEnd = processedContent.length;
                }
                
                let malformedBlock = processedContent.substring(blockStart, blockEnd);
                processedContent = processedContent.substring(0, blockStart) + processedContent.substring(blockEnd);
                queryTypes.malformed++;
                totalItemsRemoved++;
                result.warnings.push(`Malformed dataviewjs block found and removed`);
            }
        }
        
        // Step 4: Remove inline DQL expressions (`= expression`)
        const inlineDqlPattern = /`= [^`]+`/g;
        while ((match = inlineDqlPattern.exec(processedContent)) !== null) {
            queryTypes.inline_dql++;
            totalItemsRemoved++;
        }
        processedContent = processedContent.replace(inlineDqlPattern, '');
        
        // Step 5: Remove inline DataviewJS expressions (`$= expression`)
        const inlineDataviewJsPattern = /`\$= [^`]+`/g;
        while ((match = inlineDataviewJsPattern.exec(processedContent)) !== null) {
            queryTypes.inline_dataviewjs++;
            totalItemsRemoved++;
        }
        processedContent = processedContent.replace(inlineDataviewJsPattern, '');
        
        // Step 6: Clean up extra whitespace left by removals
        // Remove multiple consecutive empty lines (more than 2)
        processedContent = processedContent.replace(/\n{4,}/g, '\n\n\n');
        
        // Remove trailing whitespace from lines
        processedContent = processedContent.replace(/[ \t]+$/gm, '');
        
        // Update stats
        result.stats.processed_length = processedContent.length;
        result.stats.items_removed = totalItemsRemoved;
        
        // Generate summary warnings/info
        if (totalItemsRemoved > 0) {
            const typesSummary = [];
            if (queryTypes.dql_blocks > 0) typesSummary.push(`${queryTypes.dql_blocks} DQL blocks`);
            if (queryTypes.dataviewjs_blocks > 0) typesSummary.push(`${queryTypes.dataviewjs_blocks} DataviewJS blocks`);
            if (queryTypes.inline_dql > 0) typesSummary.push(`${queryTypes.inline_dql} inline DQL`);
            if (queryTypes.inline_dataviewjs > 0) typesSummary.push(`${queryTypes.inline_dataviewjs} inline DataviewJS`);
            if (queryTypes.malformed > 0) typesSummary.push(`${queryTypes.malformed} malformed`);
            
            result.warnings.push(`Removed ${totalItemsRemoved} dataview items: ${typesSummary.join(', ')}`);
        }
        
        // Validate that we didn't accidentally remove regular code blocks
        const remainingCodeBlocks = (processedContent.match(/```[a-zA-Z]+/g) || []);
        const dataviewBlocks = remainingCodeBlocks.filter(block => 
            block.includes('```dataview') || block.includes('```dataviewjs')
        );
        
        if (dataviewBlocks.length > 0) {
            result.warnings.push(`${dataviewBlocks.length} dataview blocks may still remain`);
        }
        
        // Success!
        result.success = true;
        result.content = processedContent;
        
        // Add performance info
        const processingTime = Date.now() - startTime;
        if (processingTime > 100) {
            result.warnings.push(`Processing took ${processingTime}ms for ${result.stats.original_length} characters`);
        }
        
    } catch (error) {
        result.errors.push(`Processing failed: ${error.message}`);
        result.content = content; // Return original content on error
    }
    
    return result;
}

// Export the function for Templater
module.exports = cleanDataview;