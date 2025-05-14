# Workflows

This directory contains structured guides and processes for working with the SuperBenefit Knowledge Base using Claude Desktop with MCP integration. Workflows help standardize common knowledge management tasks, ensuring consistency and quality across contributions.

## Purpose of Workflows

The workflows in this directory serve as systematic guides for:

- **Standardizing Processes**: Providing step-by-step instructions for common knowledge management tasks
- **Ensuring Quality**: Maintaining consistent standards across contributions
- **Knowledge Preservation**: Documenting effective approaches for future reference
- **Onboarding Support**: Helping new contributors quickly become productive
- **Tool Integration**: Demonstrating optimal use of Claude and MCP tools for knowledge work

## Available Workflow Collections

This directory contains specialized workflows for different aspects of the knowledge base:

- **[Lexicon](lexicon/readme.md)**: Processes for creating and enhancing shared vocabulary entries
- **[Library](library/readme.md)**: Methods for evaluating and documenting external resources

Each workflow collection is contained in its own subdirectory with:
- A readme.md file explaining the collection's purpose and shared techniques
- Individual workflow files for specific processes
- Examples and templates to guide implementation

## Environment Setup

All workflows in this directory require the following environment setup:

1. **Software Requirements**
    - Claude Desktop with extended thinking enabled
    - Web search capability activated (for certain workflows)
    - Obsidian vault with SuperBenefit knowledge-base installed locally
    - obsidian-mcp-tools server configured and running

2. **Knowledge Prerequisites**
    - Basic familiarity with the SuperBenefit knowledge base structure
    - Understanding of Markdown formatting and wiki-style internal links
    - Awareness of relevant templates and type definitions

3. **MCP Tool Familiarity**
    - `search_vault_smart` - For semantic search across the knowledge base
    - `create_vault_file` - To save new files (preferred over write_file)
    - `get_vault_file` - To examine existing content and templates
    - `list_vault_files` - To discover related files and validate links
    - `search_files` - To help find specific content

## Common Workflow Patterns

Our workflows generally follow these common patterns that have proven effective:

### 1. Research and Context

Begin with thorough research to understand existing content, patterns, and context:

```
"Before beginning this task, let's gather the necessary context:

1. Retrieve relevant templates using get_vault_file
2. Use search_vault_smart to find related content in the knowledge base
3. Examine well-developed examples to understand the expected style and depth
4. Identify connections to the broader knowledge ecosystem"
```

### 2. Step-by-Step Process

Break down complex tasks into clear, sequential steps:

```
"Let's approach this methodically, following these steps:

1. First, we'll [initial analysis/research step]
2. Next, we'll [content development/drafting step]
3. Then, we'll [refinement/enhancement step]
4. Finally, we'll [review and finalization step]

Let's begin with step 1..."
```

### 3. Template Integration

Leverage templates and type definitions to ensure consistency:

```
"Let's retrieve the appropriate template to ensure we follow the expected structure:

get_vault_file({
  filename: '/tools/templates/[template-name].md'
})

Now, let's analyze this template to understand the required sections and metadata fields..."
```

### 4. Review and Validation

Include systematic review processes before finalizing content:

```
"Before finalizing, let's review this draft for:

1. Consistency with the template structure
2. Validation of all internal links
3. Appropriate technical depth and accessibility
4. Proper formatting and metadata completeness
5. Alignment with SuperBenefit's approach and terminology"
```

## Workflow Development Guidelines

When creating new workflows or improving existing ones:

1. **Follow Consistent Patterns**: Structure workflows similarly to existing ones for consistency
2. **Centralize Common Knowledge**: Place shared techniques and guidance in readme.md files
3. **Cross-Reference Related Content**: Link to relevant templates, types, and other workflows
4. **Include Concrete Examples**: Provide specific examples showing the workflow in action
5. **Balance Structure and Flexibility**: Create clear processes that still allow for creativity
6. **Build in Validation Steps**: Include quality checks throughout the process
7. **Consider Different Skill Levels**: Make workflows accessible to both new and experienced contributors

## Best Practices

When using workflows in this directory:

- **Read Before You Begin**: Review the entire workflow before starting to understand the full process
- **Follow Sequential Steps**: Complete steps in the recommended order for best results
- **Adapt Thoughtfully**: Customize processes for your specific needs while maintaining core quality standards
- **Contribute Improvements**: Share insights and enhance workflows based on your experience
- **Respect Original Intent**: When refining workflows, maintain the original purpose and philosophy

## Adding New Workflow Collections

If you identify a need for workflows in other areas of the knowledge base:

1. Create a new subdirectory with a descriptive name
2. Begin with a readme.md file explaining the purpose and shared techniques
3. Develop individual workflow files for specific processes
4. Include examples showing the workflows in action
5. Cross-reference relevant templates and type definitions
6. Update this main readme.md to include the new collection

For more details on contributing to the knowledge base, see the [SuperBenefit Knowledge Base CONTRIBUTING.md](F:\projects\sb-knowledge-base\CONTRIBUTING.md) file.