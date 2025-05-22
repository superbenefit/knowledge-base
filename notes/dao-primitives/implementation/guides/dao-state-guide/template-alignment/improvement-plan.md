# Multi-Step Plan to Improve the State Template Repository

Based on analysis of the current documentation, several clear problems have been identified with the repository structure and content.

## Problems Identified

1. **Excessive repetition** - "multistakeholder", "network", "stakeholder groups" appear constantly
2. **Overlong paragraphs** - Many paragraphs contain multiple complex ideas that should be separated
3. **Redundant concepts** - Same ideas repeated across different sections
4. **Too much conceptual explanation** - More theory than practical guidance
5. **Template disclaimers** - Unnecessary ending notes about adaptation needed
6. **Lack of progressive information** - Each section restates basics instead of building on previous sections

## Comprehensive Improvement Plan

### Phase 1: Repository Analysis (5 minutes thinking time)

**Prompt Example:**
```
Please analyze the current state of the sb-state-template repository focusing on:

- Frequency of repetitive terms ("multistakeholder", "network", "stakeholder groups", etc.)
- Length and complexity of paragraphs in each file
- Unique vs redundant information across sections
- Template language that needs removal
- Practical guidance vs conceptual explanation ratio

Create a comprehensive list of specific problems to address in each major file (README.md, index.md, and key subdirectory files).
```

### Phase 2: Methodology Development (Extended thinking required)

**Prompt Example:**
```
Based on the analysis, develop a systematic methodology for improving these files that includes:

1. **Language guidelines** - specific alternatives to overused terms, frequency limits
2. **Structure principles** - paragraph length, unique section purposes
3. **Content hierarchy** - what information belongs where, how sections build on each other
4. **Practical focus** - ratio of conceptual vs actionable content
5. **Template cleanup** - what language patterns to remove completely

This methodology should be applicable across all files while respecting their different purposes.
```

### Phase 3: Root & Archive Improvements

**Step 3a: Root Files (README.md, index.md)**
**Prompt Example:**
```
Apply the methodology to improve the root README.md and index.md files. Focus on:

Using fs MCP tools, please:
1. Read the current README.md and index.md files from F:\projects\sb-state-template\
2. Create improved versions that:
   - Reduce length by 40-50%
   - Cut "multistakeholder" usage by 80%
   - Create distinct purposes (README as overview, index as navigation)
   - Remove template disclaimers
   - Focus on practical guidance over theory

Present each improved file as an artifact for review before saving.
```

**Step 3b: Archive Directory** 
**Prompt Example:**
```
Using the methodology, improve the archive directory files:

Using fs MCP tools, please:
1. Read F:\projects\sb-state-template\archive\index.md and F:\projects\sb-state-template\archive\readme.md
2. Create improved versions that:
   - Make index.md focus on what archives contain and how to use them
   - Make readme.md focus on implementation guidance
   - Reduce redundancy between the two files
   - Shorten overall length while maintaining essential information

Present each file as an artifact for review.
```

### Phase 4: Agreements Directory

**Prompt Example:**
```
Improve the agreements directory files using our methodology:

Using fs MCP tools, please:
1. Read F:\projects\sb-state-template\agreements\index.md and readme.md
2. Create improved versions that:
   - Define agreements more concisely 
   - Reduce theoretical explanation in favor of practical guidance
   - Create clear distinction between index (what agreements exist) and readme (how to create them)
   - Cut verbose language while maintaining core concepts

Present each file as an artifact for review.
```

### Phase 5: Policies Directory

**Prompt Example:**
```
Improve the policies directory files:

Using fs MCP tools, please:
1. Read F:\projects\sb-state-template\policies\index.md and readme.md  
2. Create improved versions that:
   - Focus index.md on navigating existing policies
   - Focus readme.md on creating and maintaining policies
   - Reduce length and complexity
   - Remove excessive "network" references
   - Emphasize practical implementation over conceptual frameworks

Present each file as an artifact for review.
```

### Phase 6: Subdirectory Cleanup

**Prompt Example:**
```
Apply the same methodology to key subdirectory files:

Using fs MCP tools, please improve the following files by applying our established methodology:
1. agreements/community/index.md and readme.md
2. agreements/dao/index.md and readme.md  
3. policies/metagovernance/index.md and readme.md
4. policies/operations/index.md and readme.md
5. policies/platforms/index.md and readme.md

For each file pair, ensure:
- Index files focus on navigation and current content
- Readme files focus on implementation guidance
- Reduced length and complexity
- Unique value proposition for each section

Present improved files as artifacts for review.
```

## Key Principles for All Steps

1. **Use human-in-the-loop workflow** - Always present files as artifacts for review before saving
2. **Apply document style guide** - Focus on natural language flow over excessive structure
3. **Maintain template generality** - Don't make it SuperBenefit-specific
4. **Progressive information** - Each section should build on previous ones without repetition
5. **Practical focus** - Shift balance toward actionable guidance over theoretical explanation

This plan will systematically address all the identified problems while maintaining the repository's usefulness as a general template for DAOs.