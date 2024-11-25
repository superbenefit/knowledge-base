---
title: 
description: 
url: 
tags:
  - patterns
publish: "false"
type: pattern
functions: 
qualities: 
scale: 
phase: 
primitives:
---

<% tp.frontmatter.description || "No description provided" %>

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

### Strategies for using This Pattern

%% Describe how this Pattern is used in strategies/playbooks here %%

```dataview
LIST description
WHERE contains(patterns, this.file.name)
AND (
    !contains(file.path, "tools/") 
    AND !contains(file.path, "drafts/")
)
```

### Primitives Used in This Pattern

%% Add an overview of primitives used here %%

%% Add a dataview query for related primitives here %%

---

## This Pattern in Practice

%% Describe how this pattern is used / expressed in practice %%

### Case Studies

%% Add case studies here %%

### Insights, Risks and Opportunities

%% Analyze the case studies and share insights. Include considerations for risk management and highlight opportunities to leverage this pattern to produce impact (in the context of SuperBenefit's mission and the interests of its network peers). %%

---

## Resources, References, and Further Reading

%% Add a list of references used in this pattern, further learning on the topic, tools and other helpful info here. %%
