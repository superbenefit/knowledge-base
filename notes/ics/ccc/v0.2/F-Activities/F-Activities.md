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
        .map(p => [
            `**[${p.title}](${p.file.path})**`,  
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
# Community Exchange Activities: Index

This directory contains detailed information about the essential activities and events that directly support the Community Exchange commitment pooling system, helping to build relationships, facilitate exchanges, celebrate successes, and strengthen the system over time.

## Core Commitment Pool Activities

1. [F.01-connection_circles.md](./F.01-connection_circles.md)
   - Monthly gatherings that build relationships, identify needs and offerings, and spark new exchanges

2. [F.02-celebrations_and_reviews.md](./F.02-celebrations_and_reviews.md)
   - Quarterly gatherings to celebrate exchanges, reflect on system health, and make improvements

3. [F.03-jubilee.md](./F.03-jubilee.md)
   - Annual event to clear debts, refresh commitments, and celebrate the year's achievements

4. [F.04-community_market_day.md](./F.04-community_market_day.md)
   - Marketplace events to exchange physical goods and showcase member offerings

5. [F.05-new_member_orientation.md](./F.05-new_member_orientation.md)
   - Sessions to introduce new members to the system and begin relationship building

6. [F.06-steward_circle_meetings.md](./F.06-steward_circle_meetings.md)
   - Regular gatherings to maintain system health, address challenges, and plan activities

7. [F.07-commitment_showcase.md](./F.07-commitment_showcase.md)
   - Online presentations highlighting available commitments and inspiring new offerings

## Implementation Note

Activities should be phased in gradually as outlined in the implementation timeline. Begin with core relationship-building activities like Connection Circles, then add specialized activities based on community interest and capacity.

### Getting Started
For the first six months, focus on:
1. Monthly Connection Circles
2. New Member Orientations (as needed)
3. Quarterly Celebration & Review
4. Steward Circle Meetings

As the system grows and matures, additional activities can be added based on community needs and interests. Supplementary activities that are not essential to commitment pooling but enhance community life can be found in the `/more-activities` folder.