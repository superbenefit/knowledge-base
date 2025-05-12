---
title: 
description: 
url: 
tags:
  - patterns
publish: "false"
type: pattern
studies: 
primitives: 
functions: 
qualities: 
scale: 
phase:
---
# <% tp.frontmatter.title || "Pattern Name" %>

_<% tp.frontmatter.description || "A concise definition (1-3 sentences) that captures the essence of this pattern. This should be immediately understandable while technically precise." %>_

## Context

%% Describe the environments or situations where this pattern applies. Include the types of organizations, networks, or communities that might benefit from this pattern, and any relevant constraints or conditions. %%

## Challenges

%% Identify the specific problems this pattern addresses. What difficulties do organizations face without this approach? What tensions or friction points emerge? Consider listing 2-4 key challenges with brief explanations of each. %%

## Solution

%% Explain how this pattern resolves the challenges identified above. Describe its key components or mechanisms, how they work together, and what outcomes they produce. Include any variations or adaptations that might be relevant for different contexts. %%

## Implementation Considerations

%% Provide practical guidance for applying this pattern. What factors should be considered during implementation? Include governance implications, technical requirements, cultural factors, adaptation needs for different scales, and potential risks or pitfalls to watch for. %%

## References and Resources

%% List relevant documentation, articles, research, tools, or templates that support understanding or implementation of this pattern. %%

### Examples

%% Describe real-world examples of this pattern in practice. Ideally include examples from the SuperBenefit ecosystem and from other contexts to show the pattern's versatility and application. %%

### Related Patterns

%% Identify other patterns that complement or contrast with this one. How do they work together or address different aspects of similar problems? What combinations might be particularly effective? %%


---

### Supporting Primitives

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

### Case Studies

```dataview
LIST description
WHERE (
    (contains(patterns, this.file.name) OR patterns = this.file.name)
) 
AND (
    contains(type, "study") OR type = "study"
)
AND (
    !contains(file.path, "tools/") 
    AND !contains(file.path, "drafts/")
)
```