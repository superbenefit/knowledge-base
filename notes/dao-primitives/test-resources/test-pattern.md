---
title: Test Pattern
description: This pattern is a test
url: 
tags:
  - patterns
publish: "false"
type: pattern
studies:
  - test-study
patterns:
  - test-pattern
playbooks:
  - test-playbook
primitives:
  - test-primitive
  - test-practice
  - test-module
  - test-protocol
functions:
  - governance
qualities:
  - decentralization
scale:
  - collaboration
  - constituency
  - coordination
  - network
phase:
  - conversation
  - coordination
  - formation
  - organization
  - completion
---

This pattern is a test

%% Introduce the pattern here %%

---

## Problem / Solution Context

%% Introduce the problem space / related function here %%

### Solution Landscape

%% Describe the various approaches to the problem/function here. Be sure to link alternative patterns if they exist %%

%% Optional: add a segue to help the reader understand when this pattern might be more useful than the alternatives %%

---

## Pattern Documentation

%% Document the Pattern here %%

### Mechanism

%% Describe how the pattern works %%

### Affordances

%% Describe affordances here %%

### Insights, Risks and Opportunities

%% Analyze the case studies and share insights. Include considerations for risk management and highlight opportunities to leverage this pattern to produce impact (in the context of SuperBenefit's mission and the interests of its network peers). %%

---

## This Pattern in Practice

%% Describe how this pattern is used / expressed in practice %%

### Primitives Used in This Pattern

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
        .map(p => [
            `**[${p.title}](${p.file.path})**`,  
            p.description
        ])
);
```

### Strategies for using This Pattern

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

### Case Studies

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
