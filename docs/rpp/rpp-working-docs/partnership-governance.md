---
title: Partnership governance 
description: A pattern for creating and governing something that requires its own dedicated governace oversight and guidence. Often used for collaborative projects that pull together multiple partners from outside of a DAO. 
author: 
tags:
  - patterns
harvester: 
curator: 
publish: false
type: pattern
url: 
studies: 
primitives: 
- stakeholder group 
- cell
functions:
- governance
qualities: 
- decentralization
- autonomy
- capture resistance
scale: 
- coordination
- constituency
phase:
- coordination 
- conversation
- formation 
- organisation
---

This pattern is for creating a fractal of a community and operational [governance](data/concepts/governance.md) (a DAO within a DAO). Creating a functioning [community governance](docs/rpp/rpp-working-docs/community-governance.md) (stakeholder group) and a Cell-based operational network execute on the goals of the stakeholders.


Use this pattern to design the governance for a partnership between a [DAO](data/concepts/daos.md) and one or more other organizations where:
	1. The partnership has the intent to work on a specific project
	2. The DAO will coordinate the execution of the project



Example - RPP governance and operational structure. 


%% Introduce your note here. %%

---

%% Write the body of your note here %%

<% tp.frontmatter.description || "%% Please add a ddescription %%" %>

%% Introduce the pattern here %%

---

## Problem / Solution Context

%% Introduce the problem space / related function here %%

### Solution Landscape

%% Describe the various approaches to the problem/function here. Be sure to link alternative patterns if they exist %%

%% Optional: add a segue to help the reader understand when this pattern might be more useful than the alternatives %%

---

## How <% tp.frontmatter.title || "This Pattern" %> Works

%% Document the Pattern here %%

### Mechanism

%% Describe how the pattern works %%

#### Affordances

%% Describe affordances here %%

### Risks and Opportunities

%% Analyze the case studies and share insights. Include considerations for risk management and highlight opportunities to leverage this pattern to produce impact (in the context of SuperBenefit's mission and the interests of its network peers). %%

---

## <% tp.frontmatter.title || "This Pattern" %> in Practice

%% Describe how this pattern is used / expressed in practice %%

### Strategies for <% tp.frontmatter.title || "This Pattern" %>

%% Describe how this Pattern is used in strategies/playbooks here %%

```dataview
LIST description
WHERE contains(patterns, this.file.name)
AND (
    !contains(file.path, "tools/") 
    AND !contains(file.path, "drafts/")
)
AND (
    contains(type, "playbook") OR
    (type = "playbook")
)
```

### Implementation

Add implementation details here

#### Primitives for <% tp.frontmatter.title || "This Pattern" %>

%% Add an overview of primitives used here %%

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
        .map(p => 
            `**[${p.title}**`,  
            p.description
        ])
);
```

---

## <% tp.frontmatter.title || "This Pattern" %> Case Studies

%% Add insights from case studies here %%

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

---

## Resources, References, and Further Reading

%% Add a list of references used in this pattern, further learning on the topic, tools and other helpful info here. %%
