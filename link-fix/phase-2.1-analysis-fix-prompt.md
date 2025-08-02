# Prompt to Fix 00-vault-link-analysis-report

## Project Context

I need to fix the **00-vault-link-analysis-report.md** file in my SuperBenefit Knowledge Base vault. The file seems to have been accidentally overwritten with contents from the normalization plan. We need to reconstruct the original vault analysis report by performing the analysis again.

**Vault Location**: `F:\projects\sb-knowledge-base` (on `plugin-test` branch) **File to Fix**: `F:\projects\sb-knowledge-base\link-fix\00-vault-link-analysis-report.md`

## MCP Tool Instructions

You have access to two file systems - use the appropriate one:

### For Windows File System (F:\ paths):

Use `filesystem` MCP tools:

- **Read files**: `filesystem:read_text_file` with path like `F:\projects\sb-knowledge-base\link-fix\file.md`
- **Write files**: `filesystem:write_file` with full Windows path
- **List files**: `filesystem:list_directory`

### For Obsidian Vault (relative paths):

Use `obsidian-mcp-tools`:

- **Read files**: `obsidian-mcp-tools:get_vault_file` with path like `link-fix/file.md` (no leading slash)
- **Write files**: `obsidian-mcp-tools:create_vault_file` with relative path
- **Show in Obsidian**: `obsidian-mcp-tools:show_file_in_obsidian`

**Important Path Format Rules**:

- Windows paths: Use backslashes `\` like `F:\projects\sb-knowledge-base\link-fix\file.md`
- Obsidian paths: Use forward slashes `/` like `link-fix/file.md` (NO leading slash)
- CSV files: Use `filesystem` tools as Obsidian may not handle them well

## Current Status

- The file exists but contains incorrect content (normalization plan instead of analysis)
- Other analysis files are intact:
    - `02-link-inventory.csv` (use filesystem to read)
    - `03-link-inventory-summary.md`
- T01-Link-Inventory-Analyzer template exists and was successfully used

## Objective

Reconstruct the original vault analysis report that should contain:

1. Initial assessment of the vault's link structure
2. Overview of link types found
3. Initial observations about link patterns
4. Recommendations that led to the normalization plan

## Working Style Requirements

Please follow these important working principles:

1. **Data-driven analysis**: Use actual data from the inventory files to reconstruct the report
2. **No file editing without permission**: Show me the proposed content before writing
3. **Cross-reference for accuracy**: Check findings against inventory files
4. **Preserve historical context**: The report should reflect the initial state before any fixes
5. **Clear communication**: Explain your reconstruction process
6. **Use correct MCP tools**: filesystem for Windows paths, obsidian-mcp-tools for vault operations

## Starting Point

Please:

1. Read the existing (incorrect) file using:
    
    ```
    filesystem:read_text_filepath: F:\projects\sb-knowledge-base\link-fix\00-vault-link-analysis-report.md
    ```
    
2. Read the CSV inventory using:
    
    ```
    filesystem:read_text_file  path: F:\projects\sb-knowledge-base\link-fix\02-link-inventory.csvhead: 50  (to see sample data)
    ```
    
3. Read the summary using either tool:
    
    ```
    filesystem:read_text_filepath: F:\projects\sb-knowledge-base\link-fix\03-link-inventory-summary.md
    ```
    
4. Reconstruct the original report based on the data
5. Show me the proposed content in an artifact before writing

## Expected Report Structure

The original vault analysis report likely contained:

- Executive summary of findings
- Statistics about link types and patterns
- Key issues identified (leading slashes, mixed formats, etc.)
- Recommendations for normalization
- Technical considerations