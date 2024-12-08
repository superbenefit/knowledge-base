---
title: Modular Politics - Toward a Governance Layer for Online Communities
tags:
  - frameworks
author:
  - NATHAN SCHNEIDER
  - PRIMAVERA DE FILIPPI
  - SETH FREY
  - JOSHUA Z. TAN
  - AMY X. ZHANG
url: https://arxiv.org/pdf/2005.13701.pdf
publish: "true"
---

[Modular Politics Framework](https://arxiv.org/pdf/2005.13701.pdf) by [Metagov](links/Metagov.md)

NATHAN SCHNEIDER, University of Colorado Boulder, USA
PRIMAVERA DE FILIPPI, Harvard University, USA and CNRS, France
SETH FREY, University of California, Davis, USA
JOSHUA Z. TAN, University of Oxford, UK
AMY X. ZHANG, University of Washington, USA

![](https://www.youtube.com/watch?v=x1FvWQ3WEAE)

---

## Highlights

### Introduction
The paper introduces **Modular Politics** as a model for building governance systems in online communities by using modular, composable elements. These systems would allow communities to create flexible, portable, and interoperable governance structures.

See [frameworks](tags/frameworks.md) #frameworks  for more info

> We propose a strategy for addressing this lapse by modeling and specifying a governance layer for online networks with the following eventual design goals:
>
> 1. Modularity: Platform operators and community members should have the ability to construct systems by creating, importing, and arranging composable parts together as a coherent whole.
> 2. Expressiveness: The governance layer should be able to implement as wide a range of processes as possible.
> 3. Portability: Governance tools developed for one platform should be portable to another platform for reuse and adaptation.
> 4. Interoperability: Governance systems operating on different platforms and protocols should have the ability to interact with each other, sharing data and influencing each other’s processes

### Modularity and Governance
The core idea is to break governance processes into modular components, enabling users to build and modify governance systems according to their needs. The components could be reused and adapted across different platforms, promoting innovation and experimentation in governance.

### The Importance of Expressiveness and Portability
Governance components must be flexible enough to represent a wide range of processes, ensuring that they can adapt to diverse cultural contexts. Additionally, they should be portable so that governance tools can easily be transferred between different platforms.

### Open Standards for Governance
To support interoperability and collaboration across platforms, the paper advocates for an **open standard** that would define how modular governance components interact. This would create a common framework for online communities to innovate with governance systems.

### Use Cases and Applications
The paper discusses potential applications, such as social media moderation systems and open-source project governance, demonstrating how Modular Politics can be adapted to different governance challenges.

https://www.youtube.com/watch?v=981FhtbX8vU

![](https://www.youtube.com/watch?v=981FhtbX8vU)

---

## Key Concepts

Here is the revised summary with "agents" replacing "users":

### 1. **Instances**
Instances are the operational environments where Modular Politics is implemented. Each instance is tied to an underlying platform (e.g., a game, a social network) and defines the interface between the governance system and the platform. Instances contain all the governance components (Orgs, Modules, etc.) and regulate the scope and role of Modular Politics in that environment.

### 2. **Orgs (Organizations)**
Orgs are semi-autonomous governance environments within an instance. They represent specific groups or communities (such as guilds, companies, or factions) and define the governance structure for those groups. Orgs can be nested (i.e., one Org can exist within another) or parallel, allowing for complex governance arrangements.

### 3. **Modules** 

Modules are the building blocks of the governance system. Each module is a software package that defines a specific governance function, such as voting, petitioning, or managing resources. Modules can be combined and configured to form complex governance structures. They are highly flexible and transparent, with editable policies that allow for a variety of use cases.

### 4. **Monitors**
Monitors are special types of modules that gather and analyze data within the system. They provide feedback on various aspects of governance, such as agent behavior or resource management. Monitors can operate in real-time or be queried on demand, offering transparency and insights that guide the evolution of governance processes.

### 5. **Permissions**
Permissions control what actions agents can perform within an instance, Org, or module. They are essential for managing authority and access in the governance system. Permissions can be set at different levels (e.g., agent, group, module) and determine who can create, modify, or interact with governance components.

### 6. **Resources**
Resources are the assets or objects within the governance system that agents can manage or affect. They can represent anything from in-game items to platform data. Resources are controlled and governed by the rules set in modules and Orgs.

### 7. **Entities**
Entities (or sometimes "agents") are participants in the system, such as individuals or bots, who engage with the governance structures. Entities have roles within Orgs and permissions that define their level of involvement in governance processes.

These elements collectively enable the construction of flexible, decentralized governance systems that can be tailored to the unique needs of online communities.

---

![modular-politics](attachments/modular-politics.pdf)