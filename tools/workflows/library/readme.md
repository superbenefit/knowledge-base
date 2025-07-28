# Library Workflows

The SuperBenefit Web3 Library is a rigorously curated collection of external resources that support our research, knowledge development, and community education efforts. This directory contains workflows for discovering, evaluating, and documenting resources using Claude Desktop with MCP integration.

## Purpose of the Library

The Web3 Library serves multiple important functions in our knowledge ecosystem:

- **Curated Resources**: Provides access to high-quality, vetted external content that aligns with regenerative values
- **Contextual Analysis**: Adds our community's perspective and insights to external resources
- **Knowledge Integration**: Connects external ideas to our internal knowledge structures
- **Educational Resource**: Supports learning and exploration for community members
- **Values-Aligned Collection**: Maintains focus on post-capitalist, regenerative approaches to web3

## Rigorous Curation Philosophy

Our library implements a **triple-gate evaluation system** designed to maintain exceptional quality and values alignment:

- **Target Acceptance Rate**: Maximum 15% of evaluated resources
- **Values-First Approach**: All resources must demonstrate alignment with regenerative principles
- **Quality Over Quantity**: Better to have fewer exceptional resources than many mediocre ones
- **Uniqueness Requirement**: Resources must add genuine value beyond existing content

This approach ensures our library remains a highly curated collection of transformative resources rather than a broad aggregation of web3 content.

## Resource Discovery Methods

We employ multiple systematic approaches to discover high-quality resources:

### 1. Traditional Curation
- Academic research and expert recommendations
- Community submissions and suggestions
- Cross-references from existing high-quality resources
- Exploration of adjacent fields (commons, cooperative economics, etc.)

### 2. Discord Mining
- Systematic analysis of community-shared links from Discord servers
- Automated extraction and categorization of shared resources
- Community validation through engagement patterns
- Discovery of grassroots and emerging perspectives

### 3. Semantic Search
- Targeted searches for specific concepts and frameworks
- Following citation networks from accepted resources
- Exploration of author catalogs from valued contributors
- Cross-platform discovery across web3 knowledge commons

## Available Workflows

This directory contains structured guides for library curation workflows:

- **[Link Evaluation](link-evaluation-workflow.md)**: Rigorous triple-gate process for assessing resource alignment, quality, and uniqueness
- **[Link Creation](link-creation-workflow.md)**: Guidelines for creating standardized library entries that reflect SuperBenefit's perspective
- **[Discord Mining](discord-mining-workflow.md)**: Systematic process for discovering and analyzing community-shared resources

## Environment Setup

All workflows require the following environment setup before you begin:

1. **Software Requirements**
    - Claude Desktop with extended thinking enabled
    - Web search capability activated
    - Obsidian vault with SuperBenefit knowledge-base installed locally
    - obsidian-mcp-tools server configured and running

2. **Knowledge Prerequisites**
    - Deep familiarity with SuperBenefit's regenerative values and focus areas
    - Understanding of the triple-gate evaluation system
    - Awareness of SuperBenefit's core themes and community goals
    - Basic familiarity with Markdown formatting and wiki-style internal links

3. **MCP Tool Familiarity**
    - `search_vault_smart` - For semantic search across the knowledge base
    - `create_vault_file` - To save new library entries (preferred over write_file)
    - `get_vault_file` - To examine existing content and templates
    - `list_vault_files` - To discover related files and validate links
    - `obsidian-mcp-tools:fetch` - Primary tool for web scraping and content analysis

## Triple-Gate Evaluation System

Our evaluation process requires all resources to pass three mandatory gates before receiving detailed scoring:

### Gate 1: Values Alignment (MANDATORY)
**Immediate disqualifiers include:**
- Pure profit/speculation focus without social benefit
- Extractive tokenomics or rent-seeking mechanisms
- Corporate capture narratives disguised as decentralization
- Environmental harm without acknowledgment or mitigation
- Reinforcement of existing power structures

**Required positive indicators:**
- Prioritizes community benefit over individual wealth
- Acknowledges environmental and social externalities
- Supports genuine decentralization beyond technical aspects
- Considers power dynamics and justice implications
- Aligns with regenerative/post-capitalist principles

### Gate 2: Quality Standards (MANDATORY)
**Minimum requirements:**
- Demonstrates deep understanding of subject matter
- Provides original insights beyond rehashing existing ideas
- Includes concrete examples or case studies
- Shows awareness of limitations and trade-offs
- Written by recognized experts or practitioners

### Gate 3: Uniqueness Filter (MANDATORY)
**Redundancy assessment:**
- Must offer genuinely new perspective not covered in existing library
- Should add significant value beyond current collection
- Must approach familiar topics from novel angles
- Should provide more comprehensive treatment than existing resources

Only resources passing all three gates proceed to strategic scoring and potential inclusion.

## Getting Started

1. **Review Our Values Framework**: Start by understanding SuperBenefit's regenerative approach and post-capitalist orientation documented throughout the knowledge base.
    
2. **Examine the Link Template**: Study `/tools/templates/link.md` to understand the expected structure for library entries.
    
3. **Explore Example Entries**: Review well-developed library entries in the `/links` directory to understand the expected depth and style.
    
4. **Choose Your Discovery Method**: Decide whether to evaluate submitted resources, conduct Discord mining, or pursue targeted research.
    
5. **Prepare Your Claude Environment**: Ensure Claude has access to MCP tools and extended thinking for comprehensive resource analysis.

## Advanced Techniques

These advanced techniques apply to both resource discovery and evaluation.

### Connection Discovery Process

Creating meaningful connections between external resources and the knowledge base requires systematic exploration:

1. **Identify Key Themes and Concepts**
    - Extract the main themes and conceptual elements from the external resource
    - Use `search_vault_smart` to find related content in the knowledge base:
        ```
        "Please use search_vault_smart to find knowledge base content related to [THEME/CONCEPT]"
        ```

2. **Explore SuperBenefit's Perspective**
    - Examine how SuperBenefit approaches these themes:
        ```
        "Please analyze how SuperBenefit's approach to [THEME/CONCEPT] might align with or differ from this resource"
        ```

3. **Map to Focus Areas**
    - Connect to SuperBenefit's priority themes:
        - Power transformation and social impact
        - Community currencies and solidarity infrastructure
        - Bioregional and mycelial approaches
        - Decentralized knowledge commons
        - Ethereum localism and community activism
        - DAO frameworks and implementation
        - Post-capitalist economics and regenerative systems

4. **Reference Specific Initiatives**
    - Identify concrete connections to SuperBenefit projects or initiatives:
        ```
        "Please use search_vault_smart to identify specific SuperBenefit initiatives related to the concepts in this resource"
        ```

### Resource Classification Framework

To ensure consistent evaluation and classification of resources:

1. **Resource Type Assessment**
    
    Determine the primary resource type using these categories:
    
    - **Guide**: Step-by-step instructions or methodologies
    - **Framework**: Structured approach to understanding a problem space
    - **Case Study**: Practical implementation example
    - **Theory**: Conceptual model or explanation
    - **Tool**: Software, template, or other practical resource
    - **Directory**: Collection of resources or organizations
    - **Reading List**: Curated collection of related resources
    - **Podcast/Video**: Audiovisual content
    
2. **Audience Level Identification**
    
    Determine the appropriate audience level:
    
    - **Introductory**: Accessible to newcomers with minimal background knowledge
    - **Intermediate**: Requires some familiarity with basic concepts and terminology
    - **Advanced**: Assumes substantial existing knowledge and experience
    
3. **Priority Classification**
    
    Apply the rigorous priority levels:
    
    - **ESSENTIAL (90-100 points)**: Core resources for understanding regenerative web3 approaches
    - **VALUABLE (75-89 points)**: Important supplementary resources
    - **CONSIDER (60-74 points)**: Potential future additions (parking lot)
    - **REJECT (<60 points)**: Resources that don't meet our standards

### Discord Mining Techniques

Systematic discovery of community-validated resources:

1. **Automated Link Extraction**
    - Use specialized tools to extract links from Discord servers
    - Categorize links by status (working, dead, private, etc.)
    - Track community engagement patterns around shared resources

2. **Community Validation Assessment**
    - Analyze discussion context around shared links
    - Note endorsements or critical responses from community members
    - Consider sharing frequency and cross-server appearances

3. **Batch Processing Workflow**
    - Process links in manageable batches (20-30 per session)
    - Maintain systematic progress tracking
    - Document patterns in link quality and relevance

4. **Integration with Evaluation Pipeline**
    - Apply same rigorous standards regardless of discovery source
    - Note community context as additional evaluation dimension
    - Track success rates from different discovery methods

### Content Extraction Techniques

To effectively extract and document key concepts from external resources:

1. **Concept Mapping Approach**
    
    Create a systematic overview of the resource's conceptual structure:
    
    ```
    "Let's extract the key concepts from this resource using a mapping approach:
    
    1. First, identify the central thesis or main argument
    2. List the primary supporting concepts
    3. Note any novel frameworks or models introduced
    4. Identify key examples or case studies used
    5. Extract any methodologies or actionable approaches"
    ```
    
2. **Values-Oriented Analysis**
    
    Focus specifically on regenerative and post-capitalist aspects:
    
    ```
    "Please analyze this resource specifically for its regenerative values alignment:
    
    1. Identify concepts that challenge extractive paradigms
    2. Extract community-empowerment approaches discussed
    3. Note any power redistribution mechanisms
    4. Identify environmental/social impact considerations
    5. Extract approaches to collective ownership or governance"
    ```
    
3. **Practical Applications Focus**
    
    Extract actionable insights with an implementation lens:
    
    ```
    "Let's extract practical applications from this resource:
    
    1. Identify specific methodologies or processes that could be implemented
    2. Note any tools, templates, or frameworks provided
    3. Extract concrete examples of successful implementation
    4. Identify metrics or evaluation approaches mentioned
    5. Note any prerequisites or conditions for successful application"
    ```

### Using Web Search Strategically

Leverage Claude's web search capabilities to enrich your resource analysis:

```
"To provide fuller context for this resource, please search for:

1. Background on the author(s) and their approach to regenerative/post-capitalist work
2. Reception and influence of this resource in progressive web3 communities
3. Related resources or follow-up work that extends these ideas
4. Critical perspectives or alternative approaches to the ideas presented

This will help us position the resource more accurately within the regenerative web3 ecosystem."
```

## Tips for Content Quality

### Entry Structure Best Practices

When creating library entries, ensure they include these key components:

1. **Clear Description**: Provide a concise 1-2 sentence overview that emphasizes regenerative aspects
2. **Contextual Introduction**: Begin with a paragraph explaining the resource's significance for post-capitalist web3
3. **Key Highlights**: Present 4-6 main concepts or insights with concise explanations
4. **Practical Applications**: Explain how the resource can be applied in community contexts
5. **SuperBenefit Connections**: Create meaningful links to SuperBenefit's regenerative focus areas

### Content Quality Standards

Maintain high standards for content quality:

- **Concise Analysis**: Aim for 500-1000 words total, focusing on essential insights
- **Values-Centered Perspective**: Emphasize regenerative and community-empowering aspects
- **Clear Language**: Use accessible language while maintaining appropriate technical depth
- **Strategic Connections**: Link to relevant concepts in the SuperBenefit lexicon
- **Appropriate Context**: Position the resource within regenerative web3 frameworks

### Reflecting SuperBenefit's Perspective

To ensure entries reflect SuperBenefit's regenerative approach:

1. **Study Priority Themes**
    
    Before creating entries, review SuperBenefit's focus areas:
    
    ```
    "Before drafting, let's identify which of SuperBenefit's regenerative themes this resource connects with most strongly and how it aligns with our post-capitalist approach in these areas."
    ```
    
2. **Connect to Community Goals**
    
    Relate resources to SuperBenefit's community-oriented mission:
    
    ```
    "How does this resource support SuperBenefit's goals of community empowerment, regenerative approaches, and transformative power structures?"
    ```
    
3. **Balance Theory and Practice**
    
    Emphasize both conceptual understanding and practical application:
    
    ```
    "Let's ensure we balance theoretical insights with practical implementation guidance, reflecting SuperBenefit's commitment to applied knowledge for systemic transformation."
    ```

## Troubleshooting Common Issues

### Resource Outside Priority Areas

When evaluating resources that don't clearly align with priority themes:

```
"This resource doesn't seem to directly align with SuperBenefit's regenerative focus areas. Let's:

1. Identify any potential connections to post-capitalist or community-empowering approaches
2. Consider whether it offers perspectives that complement existing knowledge
3. Evaluate if it provides critical analysis of extractive systems
4. Determine if it warrants inclusion despite not being a perfect fit"
```

### Conflicting Resource Perspectives

When a resource presents perspectives that differ from SuperBenefit's approach:

```
"This resource presents a perspective that differs from SuperBenefit's regenerative approach. Let's:

1. Clearly identify the points of divergence from post-capitalist values
2. Acknowledge any valuable insights while maintaining our values framework
3. Explain how SuperBenefit's approach differs and why our approach is preferable
4. Consider whether these differences create productive tension worth exploring"
```

### Limited Information for Evaluation

When there's insufficient information to fully evaluate a resource:

```
"There seems to be limited information available for a complete evaluation. Let's:

1. Clearly identify what we can assess based on available information
2. Note specific gaps in our evaluation, particularly around values alignment
3. Suggest additional research needed for a more complete assessment
4. Provide a provisional evaluation with appropriate caveats about incomplete information"
```

### Borderline Values Cases

When a resource presents complex values alignment questions:

```
"This resource presents some values alignment complexities. Let's:

1. Document specific concerns about potential extractive elements
2. Identify any regenerative aspects that might outweigh concerns
3. Consider precedent from previous borderline decisions
4. When in doubt, err on the side of rejection to maintain collection integrity"
```

## Best Practices

- **Values First**: Always prioritize regenerative alignment over technical quality
- **Community Focus**: Emphasize resources that empower communities over individuals
- **Critical Analysis**: Look for resources that challenge rather than reinforce extractive paradigms
- **Practical Application**: Prioritize resources with clear implementation pathways
- **Unique Perspectives**: Seek diverse viewpoints within the regenerative framework
- **Document Decisions**: Maintain clear reasoning for all acceptance/rejection decisions

## Contribution Guidelines

The library is a community resource that benefits from diverse perspectives within our values framework. When contributing:

1. Focus on resources that genuinely advance regenerative web3 understanding
2. Prioritize quality over quantity in resource selection
3. Look for resources that bridge theory and practice in post-capitalist contexts
4. Seek perspectives from marginalized communities and Global South contexts
5. Pay special attention to resources exploring social, philosophical, or ethical dimensions
6. Challenge extractive narratives common in mainstream web3 discourse

Our goal is to build the premier collection of regenerative web3 resources that supports community empowerment, ecological restoration, and systemic transformation away from extractive paradigms.

For more detailed contribution guidelines, see the [SuperBenefit Knowledge Base CONTRIBUTING.md](../../../CONTRIBUTING.md) file.
