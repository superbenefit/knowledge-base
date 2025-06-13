# Creating New Lexicon Entries with Claude and MCP

This guide will help you create new lexicon entries from scratch for the SuperBenefit Knowledge Base using Claude Desktop with MCP integration. Each new entry you create will help build a comprehensive vocabulary for understanding DAOs, Web3 governance, and social impact concepts.

%% **For humans using Claude:** If you're using Obsidian and Claude desktop with MCP, you can use the following prompt to execute these instructions automatically:

```Claude
I'd like your help creating a new lexicon entry for the SuperBenefit Knowledge Base. Let's follow the process outlined in the guide at /tools/workflows/lexicon/tag-creation.md, executing steps 1-4 in sequence:

## Step 1: Concept Identification
Please begin by following the instructions in the "1. Identify Concepts to Define" section of the guide. If I've already specified a concept, you can acknowledge it and proceed directly to step 2. Otherwise, help me identify a suitable concept for a new lexicon entry.

## Step 2: Research Phase
Once we have our concept, please execute the research process outlined in the "2. Research the Concept Thoroughly" section. Use search_vault_smart to find all mentions in the knowledge base, analyze SuperBenefit's usage patterns, and supplement with web search for broader context. Present your research findings clearly.

## Step 3: Entry Generation
Based on your research, follow the template instructions in the "3. Generate the Entry Using Templates" section. Read the template at /tools/templates/tag.md and create a draft entry that reflects SuperBenefit's perspective while maintaining educational value.

During this step, please incorporate any relevant advanced techniques from the "Advanced Techniques" section of the readme.md file that would enhance this particular entry.

## Step 4: Review and Saving
Follow the "4. Review and Finalize" section to evaluate and improve your draft. Ensure all links are valid, the tone matches existing entries, and the content accurately reflects SuperBenefit's approach.

IMPORTANT: Present the draft entry for my review. Wait for my feedback and approval before saving it to the knowledge base.

Throughout this process, if you encounter challenges described in the "Troubleshooting Common Issues" section of the readme.md file, please apply the recommended approaches.

The concept I'd like to create an entry for is: [CONCEPT]
```

Alternatively, Claude can help you decide what tags to create. Describe what you'd like to add to the lexicon using brain dumps, uploaded documents, links, or other files in the knowledge base (like artifacts, notes, etc.). You can even give it broad instructions to analyze the lexicon and add to it as needed.

%%

## Overview

Creating a new lexicon entry requires thoughtful research, synthesis, and integration with the existing knowledge base. By leveraging Claude's extended thinking, web search capabilities, and the obsidian-mcp-tools integration, you can create entries that are:

- Deeply researched and technically accurate
- Connected meaningfully to existing concepts
- Reflective of SuperBenefit's unique perspective and language
- Valuable for both newcomers and experienced practitioners

## Before You Begin

Before starting this workflow, ensure you have the proper environment setup. For details about required software, knowledge prerequisites, and MCP tool familiarity, see the [Lexicon Workflows README](https://claude.ai/chat/readme.md).

## Workflow for Creating New Lexicon Entries

### 1. Identify Concepts to Define

Begin by identifying concepts that:

- Are referenced in existing entries but lack their own definitions
- Appear frequently in the knowledge base but aren't in the lexicon
- Are foundational to understanding SuperBenefit's approach to DAOs and governance

You can identify these by:

```
Ask Claude to search for internal links in existing documents that don't have corresponding entries:

"Please use search_vault_smart to find references to concepts that don't have corresponding entries in the /tags directory. Look for patterns like [[tags/concept]] where /tags/concept.md doesn't exist."
```

### 2. Research the Concept Thoroughly

Before creating an entry, conduct comprehensive research:

```
"I'd like to create a new lexicon entry for '[CONCEPT]'. Before we start drafting:

1. Please use search_vault_smart to find all mentions of '[CONCEPT]' in the knowledge base
2. Analyze how this concept is used in different contexts within SuperBenefit's work
3. Use your web search capability to research current understandings of this concept in the broader web3/DAO ecosystem
4. Identify which existing lexicon entries are most closely related to this concept
5. Summarize your findings, highlighting:
   - How SuperBenefit specifically uses or understands this concept
   - Different contexts or domains where this concept appears
   - Key relationships to other concepts in the lexicon
   - Any tensions or evolution in how this concept is understood"
```

### 3. Generate the Entry Using Templates

Once you have a thorough understanding of the concept, use the template system:

```
"Now let's create the lexicon entry for '[CONCEPT]'. Please:

1. Read the tag template at /tools/templates/tag.md
2. Analyze several well-developed entries like /tags/daos.md, /tags/governance.md, and /tags/resources.md to understand the expected depth and style
3. Based on our research, create a draft entry with comprehensive content that:
   - Provides a clear, concise definition that captures the essence of [CONCEPT]
   - Explains its importance in the context of DAOs, web3, and governance
   - Documents how it's used in different contexts within SuperBenefit's work
   - Creates meaningful connections to related concepts in the knowledge base
   - Uses SuperBenefit's terminology and reflects their perspective"
```

For advanced techniques to enrich your entry, including contextual exploration, comparative analysis, and visual mental models, see the [Advanced Techniques section in the README](https://claude.ai/chat/readme.md#advanced-techniques).

### 4. Review and Finalize

Once Claude generates a draft, review it carefully:

```
"Please review this draft entry and enhance it by:

1. Verifying all internal links point to existing files or concepts that should exist
2. Ensuring the tone matches other lexicon entries (educational and neutral)
3. Checking that the technical content is accurate but accessible
4. Confirming the entry reflects SuperBenefit's unique approach and language
5. Adding any additional contexts or relationships we may have missed
6. Refining the frontmatter to include appropriate tags and aliases"
```

For detailed guidance on link validation, see the [Link Validation Process section in the README](https://claude.ai/chat/readme.md#link-validation-process).

After your review and approval, save the entry:

```
"Please save this new lexicon entry to /tags/[concept].md using the create_vault_file function. Then verify the file was created successfully."
```

If you encounter any issues during this workflow, refer to the [Troubleshooting Common Issues section in the README](https://claude.ai/chat/readme.md#troubleshooting-common-issues).

## Example: Creating an Entry for "Delegation"

Here's a complete example of how to create an entry for a concept like "Delegation":

```
I'd like to create a new lexicon entry for 'Delegation' in the SuperBenefit Knowledge Base. 

First, let's research thoroughly:

1. Please use search_vault_smart to find all mentions of 'delegation' or related terms like 'delegate' and 'delegating' in the knowledge base
2. Look specifically for how delegation is discussed in DAO governance contexts
3. Use web search to research how delegation functions in web3 governance systems, including delegation of voting power, authority, and responsibilities
4. Examine lexicon entries for related concepts like 'governance', 'voting', 'power', and 'authority'
5. Summarize your findings about how SuperBenefit understands and approaches delegation

Now, let's create the entry:

1. Read the template at /tools/templates/tag.md to understand the structure
2. Based on our research, create a comprehensive entry that:
   - Defines delegation clearly and concisely
   - Explains its importance in decentralized systems
   - Documents different forms and applications of delegation in DAO contexts
   - Discusses any tensions or challenges in delegation mechanisms
   - Creates meaningful connections to related concepts in the lexicon
   - Uses language and framing consistent with SuperBenefit's approach

Please craft the entry following the template structure, including proper frontmatter with:
- title: Delegation
- appropriate description (1-2 sentences)
- aliases including #delegation
- relevant tags like governance, decisions, etc.
- publish: true

Once you've created a thorough draft, we'll review and refine it before saving it to the knowledge base.
```

By following this guide and referring to the shared techniques in the README, you'll create lexicon entries that are not only informative and well-structured but also deeply integrated with SuperBenefit's knowledge ecosystem and reflective of their unique perspective on DAOs, governance, and social impact.