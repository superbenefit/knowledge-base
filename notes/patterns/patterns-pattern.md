---
title: Patterns (Pattern)
description: A pattern describing patterns
url: 
tags:
  - patterns
publish: "false"
type: pattern
functions: 
qualities: []
scale: 
phase: 
primitives:
---

A pattern describing patterns

Patterns capture how successful solutions work in practice, bridging the gap between basic building blocks (primitives) and complete solution guides (playbooks) by showing not just what works, but why it works and how it can be adapted to different contexts.

---

## Context

Patterns are the connective tissue in a living system of knowledge. They capture the essence of solutions that work repeatedly, explaining not just what worked but why it worked and how it can be adapted. When creating a pattern, you're not just documenting a solution - you're creating a bridge between abstract principles and practical action.

A pattern is needed when you observe a solution that consistently succeeds across different situations. More importantly, you need to understand why it succeeds. Patterns aren't step-by-step instructions; they're flexible frameworks that others can adapt to their context. Don't create patterns from one-off solutions or highly specific approaches. Wait until you've seen a solution work multiple times and truly understand the principles behind its success.

## Implementation

Creating a pattern begins with careful observation. Look for the implicit logic in successful solutions. What problem does it really solve? What conditions need to be present? What principles make it work? Your goal is to capture this knowledge in a way that others can understand and apply.

A good pattern needs:
- A memorable, evocative name that suggests its purpose
- A clear problem statement explaining the challenge it addresses
- Context about when and where it's useful
- The core solution framework, explained in plain language
- Examples showing how it works in practice
- The capabilities it enables (its affordances)

The key is finding the right level of abstraction. Extract the essential principles while maintaining practical clarity. Think of each pattern as a "knowledge seed" that can grow in different environments. Your pattern should be specific enough to be actionable but flexible enough to adapt.

## Challenges & Solutions

The greatest challenge in pattern creation is balance - between abstract and concrete, between flexible and precise, between simple and complete. When patterns are too abstract, they become hard to implement. When they're too specific, they become brittle recipes rather than adaptable solutions.

To solve this:
1. Always include real examples alongside principles
2. Explain both what works and what doesn't
3. Show how the pattern can be adapted
4. Document the conditions needed for success

Another common challenge is patterns becoming outdated. Treat patterns as living documents that evolve through use and feedback. Track changes, document variations, and update based on new experiences. But maintain a clear record of what changes and why.

## Pattern Relationships

%% This section needs more specific detail about how patterns relate to primitives and playbooks in practice. Could you provide some clear examples of how specific patterns use primitives and how they're used in playbooks? %%

Patterns sit between primitives and playbooks in our knowledge hierarchy. They combine primitives (fundamental building blocks) into useful solutions, which can then be used as components in playbooks (comprehensive solution guides). Understanding these relationships is crucial for effective pattern creation and use.

A pattern should clearly document:
- Which primitives it uses and how they work together
- How it can combine with other patterns
- Where it fits in different playbooks
- What support it needs from other patterns to work effectively

## Case Studies

%% We need some real case studies here. Could you provide examples of patterns that have been documented and evolved effectively? Include specific details about their development and use. %%

The most effective way to understand patterns is to see how they work in practice. Case studies should show:
- The original context where the pattern emerged
- How it was implemented
- What challenges arose
- How it was adapted
- What results were achieved

Each case study should provide concrete details that help others understand how to apply and adapt the pattern in their own context.

---

## Elements of Patterns

%% - Templates - providing structure for consistent documentation
- Metadata - enabling pattern discovery and relationships
- Documentation standards - ensuring clarity and completeness
- Version control - tracking pattern evolution %%

### Patterns (Pattern) Primitives

```dataviewjs
const ext = dv.pages('"tools/types"')
    .where(t => t.extends === "primitive")
    .map(t => t.file.name);

dv.table(
    ["Primitive", "Description"],
    dv.pages()
        .where(p => 
            p.type && 
            (p.type.includes("primitive") || ext.some(n => p.type.includes(n))) &&
            dv.current().primitives && dv.current().primitives.includes(p.file.name) &&
            !p.file.path.startsWith("tools/") && 
            !p.file.path.startsWith("drafts/")
        )
        .sort(p => p.title, 'asc')
        .map(p => [
            `**[${p.title}](${p.file.path})**`,  
            p.description
        ])
);
```

---

## Pattern Strategies

%% Describe how this Pattern is used in strategies/playbooks here %%

```dataview
LIST description
WHERE contains(patterns, this.file.name)
AND (
    !contains(file.path, "tools/") 
    AND !contains(file.path, "drafts/")
)
```