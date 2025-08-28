/**
 * Obsidian Comment Cleaner for Quartz Export System
 * 
 * Removes Obsidian-style comments (%%comment%%) from markdown content while preserving
 * document structure and providing comprehensive processing statistics.
 * 
 * @param {string} content - The markdown content to process
 * @returns {Object} Processing result with cleaned content and statistics
 */
function cleanComments(content) {
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
        let totalCommentsRemoved = 0;
        const commentTypes = {
            inline: 0,
            multiline: 0,
            blockStart: 0,
            malformed: 0
        };
        
        // Step 1: Handle multiline comments first (%%...%% that span multiple lines)
        // Use a more careful line-by-line approach to identify true multiline comments
        const lines = processedContent.split('\n');
        const multilineRanges = []; // {startLine, endLine}
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const trimmedLine = line.trim();
            
            // Look for lines that start with %% but don't end with %% (potential multiline start)
            if (trimmedLine.startsWith('%%') && !trimmedLine.endsWith('%%')) {
                // Look for the closing %% on subsequent lines
                for (let j = i + 1; j < lines.length; j++) {
                    const endLine = lines[j];
                    if (endLine.includes('%%') && endLine.trim().endsWith('%%')) {
                        // Check that this is a valid multiline comment:
                        // All lines between start and end should NOT start with %%
                        let isValidMultiline = true;
                        for (let k = i + 1; k < j; k++) {
                            if (lines[k].trim().startsWith('%%')) {
                                isValidMultiline = false;
                                break;
                            }
                        }
                        
                        if (isValidMultiline) {
                            multilineRanges.push({ startLine: i, endLine: j });
                            break; // Found the end, stop looking
                        }
                    }
                }
            }
        }
        
        // Remove multiline comments (process in reverse order to preserve line indices)
        if (multilineRanges.length > 0) {
            commentTypes.multiline = multilineRanges.length;
            multilineRanges.reverse();
            
            for (const range of multilineRanges) {
                // Remove lines from startLine to endLine (inclusive)
                lines.splice(range.startLine, range.endLine - range.startLine + 1);
            }
            
            totalCommentsRemoved += multilineRanges.length;
            processedContent = lines.join('\n');
        }
        
        // Step 2: Handle inline comments (%%...%% within a single line)
        const inlinePattern = /%%[^\n]*?%%/g;
        const inlineMatches = processedContent.match(inlinePattern) || [];
        if (inlineMatches.length > 0) {
            commentTypes.inline = inlineMatches.length;
            processedContent = processedContent.replace(inlinePattern, '');
            totalCommentsRemoved += inlineMatches.length;
        }
        
        // Step 3: Handle line comments (lines that start with %% and don't close on the same line)
        const remainingLines = processedContent.split('\n');
        const cleanedLines = [];
        
        for (let i = 0; i < remainingLines.length; i++) {
            const line = remainingLines[i];
            const trimmedLine = line.trim();
            
            if (trimmedLine.startsWith('%%') && !trimmedLine.endsWith('%%')) {
                // This is a line comment - remove it
                commentTypes.malformed++;
                totalCommentsRemoved++;
                // Don't add this line to cleanedLines (effectively removes it)
            } else if (trimmedLine.startsWith('%%') && trimmedLine.endsWith('%%') && trimmedLine.length > 4) {
                // This is a single-line block comment - remove it  
                commentTypes.blockStart++;
                totalCommentsRemoved++;
                // Don't add this line to cleanedLines
            } else {
                cleanedLines.push(line);
            }
        }
        
        processedContent = cleanedLines.join('\n');
        
        // Improved whitespace cleanup
        // 1. Clean up trailing whitespace on each line
        processedContent = processedContent.replace(/[ \t]+$/gm, '');
        
        // 2. Clean up empty lines (but preserve single line breaks)
        processedContent = processedContent.replace(/^\s*$/gm, '');
        
        // 3. Handle whitespace left by comment removal
        // If there are multiple empty lines, reduce to single empty line for paragraph breaks
        // But if the empty lines were created by comment removal, we might want to be more aggressive
        processedContent = processedContent.replace(/\n\s*\n\s*\n+/g, '\n\n');
        
        // 4. Handle whitespace more carefully - preserve intentional paragraph breaks
        // Only collapse excessive whitespace (3+ consecutive newlines)
        processedContent = processedContent.replace(/\n{3,}/g, '\n\n');
        
        // 5. Final cleanup: normalize document boundaries
        processedContent = processedContent.trim();
        
        // Record final statistics
        result.stats.processed_length = processedContent.length;
        result.stats.items_removed = totalCommentsRemoved;
        result.stats.items_transformed = 0; // This cleaner removes rather than transforms
        
        // Set result content and success
        result.content = processedContent;
        result.success = true;
        
        // Add detailed processing summary
        if (totalCommentsRemoved > 0) {
            const reductionPercent = ((result.stats.original_length - result.stats.processed_length) / result.stats.original_length * 100).toFixed(1);
            const typesSummary = [];
            if (commentTypes.inline > 0) typesSummary.push(`${commentTypes.inline} inline`);
            if (commentTypes.multiline > 0) typesSummary.push(`${commentTypes.multiline} multiline`);
            if (commentTypes.blockStart > 0) typesSummary.push(`${commentTypes.blockStart} block-start`);
            if (commentTypes.malformed > 0) typesSummary.push(`${commentTypes.malformed} malformed`);
            
            result.warnings.push(`Successfully removed ${totalCommentsRemoved} comment(s): ${typesSummary.join(', ')}`);
            result.warnings.push(`Content reduced by ${reductionPercent}% (${result.stats.original_length} → ${result.stats.processed_length} chars)`);
        } else {
            result.warnings.push('No comments found to remove');
        }
        
    } catch (error) {
        result.success = false;
        result.errors.push(`Processing error: ${error.message}`);
        result.content = content; // Return original content on error
    }
    
    const processingTime = Date.now() - startTime;
    result.warnings.push(`Processing completed in ${processingTime}ms`);
    
    return result;
}

module.exports = cleanComments;