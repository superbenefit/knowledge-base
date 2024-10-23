# Contributing to SuperBenefit Knowledge Base

Thank you for your interest in contributing to our knowledge garden! This guide will help you understand our content standards and contribution process.

## Getting Started

### Setting Up Your Environment

1. **Install [Obsidian](https://obsidian.md/)**
   - Free and open-source note-taking app
   - Works with plain text files
   - Visual interface for editing and linking

2. **Get Repository Access**
   - Request access from SuperBenefit admins
   - They'll share the repository URL and permissions

3. **Install Required Plugins**
   - GitHub Sync: Manages sync with the shared repository
   - Dataview: For data queries and views
   - Metadata Menu: Helps manage document metadata
   - Tag Wrangler: For organizing tags
   - Auto Template Trigger: Automates template usage

### Basic Workflow

1. **Open Vault in Obsidian**
   ```
   File > Open Vault > Select repository folder
   ```

2. **Sync Your Content**
   - Pull latest changes using GitHub sync plugin
   - Make your edits
   - Push changes back when done
   
   > **Tip**: Think of sync like saving to a shared drive - pull to get others' changes, push to share yours

## Understanding Document Types

### Working Documents (`type: note`)
- Daily work and research
- Project documentation
- Personal notes and thoughts
Example:
```yaml
---
title: Project Research Notes
description: Initial research for X project
type: note
publish: false
---
```

### External Resources (`type: link`)
- Articles and papers
- Relevant websites
- Project references
Example:
```yaml
---
title: Interesting Article Title
source: https://example.com/article
author:
  - Author Name
type: link
tags:
  - relevant_tags
---
```

### Concept Definitions (`type: tag`)
- Terminology explanations
- Key concepts
- Shared vocabulary
Example:
```yaml
---
title: Local-First
type: tag
aliases:
  - local-first software
  - local-first apps
publish: true
---
```

## Adding Content

### Starting a New Document

1. **Begin in Drafts**
   - All new work starts in `drafts/`
   - Private space for work in progress
   - Not published until ready

2. **Choose a Template**
   - Use `Ctrl/Cmd + P` to open command palette
   - Type "Template" to see template options
   - Select appropriate template for your content type

3. **Fill Basic Information**
   ```yaml
   title: Clear descriptive title
   description: One-line summary
   type: note (or appropriate type)
   publish: false
   ```

4. **Add Content**
   - Write in markdown format
   - Use `[[double brackets]]` to link to other documents
   - Add `#tags` where relevant

### Making Connections

1. **Link Related Content**
   - Use `[[document name]]` to create links
   - Links are bidirectional - they show up in both documents
   - Graph view helps visualize connections
   
2. **Use Tags**
   - Add `#tags` for key concepts
   - Check existing tags in the tag pane
   - Tags help group related content

3. **Create Index Pages**
   - Make overview pages for topics
   - List related documents
   - Explain connections

## Content Standards

### Writing Guidelines

1. **Be Clear and Direct**
   - Write for understanding
   - Include context
   - Explain acronyms
   - Use examples when helpful

2. **Structure Your Documents**
   - Use headings to organize
   - Keep paragraphs focused
   - Include a brief introduction
   - Summarize key points

3. **Make Connections**
   - Link to related documents
   - Use relevant tags
   - Reference source materials
   - Explain relationships

### Publishing Process

1. **From Draft to Note**
   ```
   drafts/ → notes/project-folder/
   ```
   - Move when ready for collaboration
   - Add proper metadata
   - Include project context

2. **From Note to Artifact**
   ```
   notes/ → artifacts/
   ```
   - Move when finalized
   - Set `publish: true`
   - Ensure all links work
   - Complete all metadata

## Getting Help

### When You're Stuck

1. **Check Documentation**
   - Read relevant guides
   - Look for similar examples
   - Review templates

2. **Ask the Community**
   - Join community channels
   - Share specific questions
   - Provide context

3. **Common Issues**
   - Sync not working? Check internet connection
   - Can't find a file? Use search or graph view
   - Template issues? Check template folder
   - Lost changes? Check git history

## Best Practices

### Working Habits

1. **Regular Sync**
   - Pull changes when starting work
   - Push changes when finishing
   - Communicate about major changes

2. **Organized Creation**
   - Start with drafts
   - Use templates
   - Add context
   - Make connections

3. **Collaborative Mindset**
   - Build on others' work
   - Maintain existing connections
   - Update related content
   - Help maintain documentation

### Tips for Success

1. **Don't Overthink Organization**
   - "Get in where you fit in"
   - Focus on making connections
   - Use templates as guides
   - Let structure emerge naturally

2. **Focus on Value**
   - Share useful information
   - Make knowledge discoverable
   - Help others understand
   - Build collective knowledge

3. **Stay Connected**
   - Participate in discussions
   - Share your learning
   - Ask questions
   - Offer help

Remember: This knowledge garden grows through our collective contributions. Every addition, no matter how small, helps build our shared understanding.

---

Need more help? Reach out in our community channels or ask a team member!