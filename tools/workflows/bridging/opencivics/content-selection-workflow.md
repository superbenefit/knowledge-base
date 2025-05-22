# Content Selection and Transformation Workflow

This workflow guides the process of selecting valuable OpenCivics content for integration into SuperBenefit's knowledge base and transforming it effectively using semiotic bridging techniques. It combines content selection and basic transformation into a streamlined process.

## Overview

Successful knowledge integration begins with thoughtful selection of the most valuable content to integrate. This workflow helps you identify OpenCivics content that will enrich SuperBenefit's knowledge base while maintaining SuperBenefit's cultural integrity. After selection, it guides you through the initial transformation process to create integration-ready content.

## Environment Setup

Before starting this workflow, ensure you have:

1. **Software Requirements**
    - Claude Desktop with extended thinking enabled
    - Access to OpenCivics content files
    - Obsidian vault with SuperBenefit knowledge base installed locally
    - obsidian-mcp-tools server configured and running

2. **Knowledge Prerequisites**
    - Familiarity with both SuperBenefit and OpenCivics knowledge systems
    - Understanding of semiotic bridging concepts from [README.md](readme.md)
    - Review of the [terminology mapping](terminology-mapping.md) and [template alignment](template-alignment.md) guides

3. **MCP Tool Familiarity**
    - `search_vault_smart` - For semantic search across the knowledge base
    - `get_vault_file` - To examine existing content and templates
    - `create_vault_file` - To save transformed content

## Workflow Process

### Step 1: Content Selection

The selection process identifies OpenCivics content that adds the most value to SuperBenefit's knowledge base, focusing on complementary rather than redundant information.

#### A. Identify Potential Content

Begin by identifying OpenCivics content with potential integration value:

```
I need help identifying valuable OpenCivics content for integration into SuperBenefit's knowledge base.

Please help me analyze the available OpenCivics content to determine which pieces would add the most value to SuperBenefit. I'd like to prioritize content that:

1. Addresses gaps in SuperBenefit's existing knowledge
2. Provides strong practical implementation guidance
3. Offers valuable conceptual frameworks not present in SuperBenefit
4. Can be logically integrated with existing SuperBenefit content
5. Aligns with SuperBenefit's focus areas

First, let's explore what content is available in the OpenCivics collection:

1. Please list the main categories of content in the OpenCivics materials I've provided
2. Identify key protocols, patterns, or playbooks that appear particularly well-developed
3. Note any content that seems to address areas not well-covered in SuperBenefit's knowledge base

Then, after your analysis, suggest 3-5 specific content pieces that would be most valuable to integrate, explaining why each would be valuable.
```

#### B. Assess Integration Value

For each potential piece of content, evaluate its integration value:

```
Now that we've identified [CONTENT NAME] as a potential candidate for integration, let's assess its value more thoroughly.

Please analyze this content using our value-first selection criteria:

1. **Complementary Knowledge**: How does this content address gaps in SuperBenefit's existing knowledge base? Please use search_vault_smart to identify what SuperBenefit already covers in this area.

2. **Practical Implementation**: How strong is the practical application guidance in this content? Does it provide actionable steps that would benefit SuperBenefit's community?

3. **Conceptual Enrichment**: What conceptual frameworks or approaches does this content offer that aren't present in SuperBenefit?

4. **Structural Coherence**: How well could this content integrate with existing SuperBenefit patterns and playbooks? Identify specific connections to existing content.

5. **Maturity Assessment**: Is this content mature enough for integration, or still in early development? What indicators suggest its readiness?

Based on your analysis, score this content on each criterion (High/Medium/Low) and provide an overall integration priority assessment.
```

#### C. Prioritize Integration

Use the scoring results to prioritize content for integration:

```
Based on our assessments, let's create a prioritized integration plan for the OpenCivics content we've evaluated.

1. Please rank the content pieces in order of integration priority, based on our scoring
2. For each high-priority item, identify:
   - The appropriate SuperBenefit content type (pattern, playbook, etc.)
   - The most relevant directory location 
   - Key existing SuperBenefit content it should connect with
   - Any special considerations for integration

3. Create a brief integration roadmap that sequences these pieces in a logical order, considering dependencies and building from foundational concepts to more complex applications.
```

### Step 2: Content Analysis

Before transformation, conduct a thorough analysis of the selected content:

```
I'd like to analyze [CONTENT NAME] thoroughly before beginning the transformation process.

Please help me understand:

1. **Core Concepts and Structure**: What are the key concepts and structural elements in this content? How is it organized?

2. **Terminology Analysis**: Using our terminology mapping, identify:
   - Direct equivalent terms between systems
   - Terms requiring translation to SuperBenefit terminology
   - OpenCivics-specific concepts that need special handling

3. **Template Mapping**: Using our template alignment guide, how should this content map to SuperBenefit's structure? What sections align directly and what will need restructuring?

4. **Knowledge Context**: What background knowledge or context from OpenCivics is essential to understanding this content? How should we preserve this context during transformation?

5. **Connection Points**: What are the natural connection points to existing SuperBenefit content? How can we strengthen these connections during integration?

Please present your analysis in a structured format that I can reference during the transformation process.
```

### Step 3: Content Transformation

With the content selected and analyzed, proceed to transformation:

```
Now I'd like to transform [CONTENT NAME] from OpenCivics format to SuperBenefit format using our semiotic bridging framework.

Please help me with this transformation by:

1. **Template Selection**: Retrieve the appropriate SuperBenefit template for this content type (pattern, playbook, etc.) using get_vault_file.

2. **Metadata Transformation**: Create complete frontmatter with all required SuperBenefit fields, following our metadata mapping guidance. Include proper attribution to OpenCivics sources.

3. **Content Restructuring**: Transform the content to follow SuperBenefit's structure while preserving essential meaning. Follow our section mapping guidance from the template alignment document.

4. **Terminology Translation**: Apply consistent terminology translation following our terminology mapping document. Preserve OpenCivics-specific concepts with proper contextual explanations.

5. **Bridge Notes Addition**: Create appropriate "Bridge Notes" that acknowledge the original source and explain significant adaptations, particularly for concepts with different meanings across systems.

6. **Connection Enhancement**: Add relevant connections to existing SuperBenefit content through links, references, and relationships.

Please draft the transformed content following SuperBenefit's conventions and format. I'll review it before we finalize integration.
```

### Step 4: Quality Verification

Before finalizing the transformation, conduct a quality review:

```
Before finalizing the transformation of [CONTENT NAME], let's conduct a thorough quality review.

Please verify:

1. **Structural Verification**:
   - All required template sections are complete
   - Proper formatting is used throughout the document
   - All links to other content work correctly
   - All metadata fields are correctly populated

2. **Content Integrity**:
   - Essential meaning from the original is preserved
   - OpenCivics concepts are properly explained in SuperBenefit's context
   - Terminology is consistently translated throughout
   - "Bridge Notes" appropriately explain contextual differences
   - Proper attribution to original sources is included

3. **SuperBenefit Alignment**:
   - Content aligns with SuperBenefit's existing knowledge base
   - Content follows SuperBenefit's cultural approach and voice
   - Connections to existing content are meaningful and appropriate
   - Content fits logically within SuperBenefit's directory structure

Please highlight any areas needing improvement and suggest specific enhancements before we finalize the transformation.
```

### Step 5: Integration

After the quality review, proceed to integration:

```
Now that we've completed the quality review, let's integrate [CONTENT NAME] into SuperBenefit's knowledge base.

Please:

1. Determine the appropriate location for this content based on its type and maturity:
   - Polished, validated content: /artifacts/
   - Content requiring further refinement: /notes/
   - Early-stage adaptations: /drafts/

2. Within the selected directory, determine the appropriate subdirectory

3. Format the filename according to SuperBenefit conventions (kebab-case)

4. Set the appropriate publish status based on integration readiness

5. Save the file using create_vault_file

6. Verify the file was created successfully

Once the file is created, please document any follow-up tasks needed, such as creating connections to existing content, updating index files, or adding to relevant tags pages.
```

## Troubleshooting Common Issues

### Complex Terminology Translation

If you encounter challenging terminology that doesn't map cleanly:

- Prioritize SuperBenefit terminology in the main text
- Explain OpenCivics terminology in contextual notes or Bridge Notes
- Consider creating new lexicon entries for particularly valuable OpenCivics concepts

### Structural Conflicts

When content doesn't map easily to SuperBenefit's structure:

- Focus on preserving meaning rather than adhering rigidly to original structure
- Create custom sections when necessary, while maintaining SuperBenefit's overall approach
- Document structural adaptations clearly in Bridge Notes

### Content Dependencies

If integrated content refers to other OpenCivics concepts not yet integrated:

- Create brief contextual explanations for essential dependencies
- Consider adding a "Related OpenCivics Concepts" section for transparency
- Prioritize dependent content in future integration efforts

### Balancing Depth and Accessibility

When OpenCivics content is highly technical or uses specialized language:

- Maintain technical accuracy while increasing accessibility
- Add explanatory context for specialized concepts
- Consider creating a glossary section for technical terms

## Best Practices

- **Start Small**: Begin with well-defined, standalone content before tackling complex interconnected pieces
- **Preserve Context**: Always include enough context for the integrated content to make sense in its new environment
- **Document Translation Decisions**: Maintain transparency about adaptation choices
- **Follow the Principles**: Consistently apply the Bridging Principles from the README
- **Seek Feedback**: Review transformed content with someone familiar with both knowledge systems

By following this workflow and applying the bridging framework consistently, you'll create high-quality integrations that enrich SuperBenefit's knowledge base while respecting both knowledge systems.