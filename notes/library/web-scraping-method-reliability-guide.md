# Web Scraping Method Reliability Guide - July 2025

## Overview
This document captures key learnings about web scraping tool reliability discovered during Discord link analysis for the SuperBenefit Web3 Library project.

## Tool Reliability Rankings (Based on Testing)

### 🏆 Tier 1: Primary Methods
1. **obsidian-mcp-tools:fetch**
   - **Success Rate**: ~80%
   - **Pros**: Most reliable, handles various site types well, no special configuration needed
   - **Cons**: Can still fail on sites with connection issues
   - **Use For**: Primary method for all link analysis

### ✅ Tier 2: Backup Methods  
2. **firecrawl_scrape (with optimized settings)**
   - **Success Rate**: ~60% (much improved with proper configuration)
   - **Required Settings**:
     ```
     skipTlsVerification: true
     timeout: 30000
     waitFor: 3000
     formats: ["markdown"]
     ```
   - **Pros**: Good for complex JavaScript sites when configured properly
   - **Cons**: Requires specific configuration, higher failure rate
   - **Use For**: Backup when obsidian-mcp-tools:fetch fails

3. **web_search**
   - **Success Rate**: 100% (for intended purpose)
   - **Pros**: Always works, good for domain context and research
   - **Cons**: Indirect approach, doesn't get actual page content
   - **Use For**: Context research, domain information gathering

### ❌ Tier 3: Blocked/Problematic Methods
4. **web_fetch**
   - **Success Rate**: 0% (for Discord links)
   - **Issue**: Requires URLs from user input or search results due to permissions
   - **Use For**: Only URLs explicitly provided by user or found in search results

5. **firecrawl_scrape (default settings)**
   - **Success Rate**: ~20% (poor with default settings)
   - **Issues**: High timeout rates, SSL failures, connection problems
   - **Solution**: Use optimized settings (see Tier 2 above)

## Key Discoveries

### Configuration Matters
- Default firecrawl_scrape settings had ~80% failure rate
- Optimized settings improved this to ~60% success rate
- `skipTlsVerification: true` was crucial for many sites

### Tool Selection Impact
- Switching from firecrawl_scrape to obsidian-mcp-tools:fetch as primary method improved overall success rate from ~20% to ~80%
- Tool hierarchy approach (primary + backup) provides best reliability

### Permission Restrictions
- web_fetch is blocked for arbitrary Discord URLs due to security restrictions
- Only works with URLs provided by user or found in search results

## Recommended Workflow

```
1. Try obsidian-mcp-tools:fetch (primary)
   ↓ (if fails)
2. Try firecrawl_scrape with optimized settings (backup)
   ↓ (if fails)  
3. Try web_search for context (fallback)
   ↓ (if all fail)
4. Mark as "Error" with specific reason
```

## Implementation Examples

### Primary Method
```javascript
// Use obsidian-mcp-tools:fetch for most reliable results
const content = await obsidian_mcp_tools_fetch(url);
```

### Backup Method  
```javascript
// Use firecrawl_scrape with optimized settings
const content = await firecrawl_scrape({
    url: url,
    formats: ["markdown"],
    skipTlsVerification: true,
    timeout: 30000,
    waitFor: 3000
});
```

### Error Handling
```javascript
try {
    // Primary method
    result = await obsidian_mcp_tools_fetch(url);
} catch (error) {
    try {
        // Backup method
        result = await firecrawl_scrape_optimized(url);
    } catch (error2) {
        // Mark as error with specific reason
        status = "Error: " + error2.message;
    }
}
```

## Impact Metrics

### Before Optimization
- Success Rate: ~20%
- Failure Rate: ~80%  
- Manual intervention: Frequent

### After Optimization
- Success Rate: ~80%
- Failure Rate: ~20%
- Manual intervention: Rare

## Future Considerations

1. **Monitor Tool Performance**: Success rates may change as tools are updated
2. **Test New Tools**: Evaluate new scraping tools as they become available
3. **Update Configurations**: Fine-tune settings based on failure patterns
4. **Document Patterns**: Track which domains/site types cause failures

## Related Documentation
- `start-link-analysis.md` - Updated with new method hierarchy
- `link-analysis-usage-guide.md` - Updated with reliability improvements
- `Discord Link Analysis Method Testing Results - July 20, 2025` (Basic Memory)

---
*Last Updated: July 20, 2025*
*Status: Active - Use this as reference for all web scraping projects*