---
group: rpp
type: note
title: Playbook Structural Guidelines & Templates
tags:
  - playbooks
publish: false
---
Instructions for understanding and creating playbook components for the Reimagining Power project  

---

---

# Playbooks Overview

> Please add an overview of Playbooks here

## 

### Playbook Components (Artifacts)

A knowledge "artifact" refers to any piece of useful information we generate for RPP, usable independently or as part of a larger artifact. It's a catch-all for "information we use to create playbooks and stuff."

---

# Working with the Knowledge Base

The [knowledge base](https://github.com/superbenefit/knowledge-base) is a local-first markdown vault for collaborative knowledge management and collective sensemaking. We record our artifacts in the knowledge base, and publish them to the [knowledge garden](https://knowledge.superbenefit.org/artifacts/) (a public website).

**You don't have to use the knowledge base**. Read on for [instructions](https://app.charmverse.io/superbenefit/playbook-structural-guidelines-templates-3342054248529809#creating-artifacts-w-other-tools) on creating artifacts with some basic instructions and templates.

We use 2 main platforms for managing our knowledge artifacts:

- **[_DAO Knowledge Base_](https://github.com/superbenefit/knowledge-base/tree/main)** ([Obsidian](https://obsidian.md/))

  - Artifacts can be created and archived in the knowledge base, which is a collaborative obsidian vault hosted on GitHub.

  - Anyone can read and download the knowledge base [here](https://github.com/superbenefit/knowledge-base/tree/main). Contributors may request access to save their changes to the repository.

    - You can find instructions for using the knowledge base on the [contributing page](https://github.com/superbenefit/knowledge-base/blob/main/CONTRIBUTING.md). There are videos embedded in the page which can be seen when opening the knowledge base in [Obsidian](https://help.obsidian.md/Home). 

    - To open the knowledge base, install obsidian, download the knowledge base to your computer using GitHub, and open it as a vault in Obsidian.

- **[_Public Knowledge Garden_](https://knowledge.superbenefit.org/artifacts/)** ([Quartz](https://quartz.jzhao.xyz/))

  - Artifacts and related documents can be published to the knowledge garden by setting their `publish` property to `true`

  - If you're familiar with Quartz, request access to the repository. Otherwise stage your changes in the knowledge base and ask a Playbook Steward to publish them.

### Creating Artifacts w/ Other Tools

You can create your artifacts without using the knowledge base. Below are some templates and instructions for creating artifacts without using the knowledge base. 

---

# Making Knowledge Artifacts

> **These are just suggestions & guidelines.** Check with your team to determine the best way to accomplish your task. You can use these as a starting place if you want to.

> **These guidelines are also machine generated**. There may be some mistakes, or some parts might not make sense. Take them with a grain of salt and adapt them to your context and workflow.

## Playbooks

A playbook is a living document that provides step-by-step guidance for achieving specific organizational goals.  Unlike static documentation, playbooks are designed to evolve and adapt as organizations learn and grow.  They bring together technical details, governance frameworks, and community insights into clear, actionable steps.

- Playbooks are archived in the [knowledge base](https://github.com/superbenefit/knowledge-base/tree/main/artifacts/playbooks).

  - You can use the knowledge base to write, save and share your playbooks. Or use the template below and pass along to a playbook steward.

- From there, playbooks are published in the [Playbook Library](https://knowledge.superbenefit.org/artifacts/playbooks/).

  - If you have playbooks in the knowledge base, you can make a PR to the knowledge garden to publish them. Or notify a playbook steward that they're ready to publish.

### Assembling Playbooks

**1. Define the Playbook's Purpose and Scope:**

Begin by clearly articulating the playbook's purpose. What problem does it solve?  For whom?  What are the specific goals the playbook aims to achieve?  Define the scope—what is included and, crucially, what is _excluded_.  This prevents the playbook from becoming unwieldy and ensures focus.  Consider the target audience's needs and technical expertise.

**2.  Identify and Select Relevant Patterns and Primitives:**

Based on the playbook's purpose, identify the relevant patterns and primitives that will form its core components.  Research existing patterns and primitives, selecting those that best address the specific challenges and opportunities within the playbook's scope.  Justify your choices, explaining why each pattern or primitive was selected and how it contributes to the overall solution.

**3. Develop the Context and Orientation Section:**

This section sets the stage for the entire playbook.  It should provide readers with everything they need to determine if the playbook is relevant to their needs.  Include:

- **Problem Space:** Clearly define the challenges and opportunities the playbook addresses.

- **Target Audience:** Describe the intended users, their roles, and their level of technical expertise.

- **Use Cases:** Provide concrete examples of how the playbook can be applied in different scenarios.

- **Prerequisites:** Specify any required knowledge, resources, or organizational conditions.

- **Key Terms:** Define any domain-specific terminology, linking to relevant definitions or glossaries.

- **Core Principles:** Outline the fundamental principles that guide the playbook's approach and pattern selection.

**4.  Structure the Playbook's Core Sections:**

Organize the playbook's content logically, guiding the reader through the implementation process.  Consider these sections:

- **Understanding Patterns in Context:** Briefly explain how the selected patterns address the problem space.

- **Core Pattern Set:**  Provide an overview of the chosen patterns, explaining why they were selected and how they work together.

- **Pattern Interactions:** Detail how the patterns interact, including dependencies, synergies, potential conflicts, and synergistic effects.

- **Implementation Guide:** Provide step-by-step instructions for implementing the solution, including technical specifications, resource requirements, and risk management strategies.  Break this down into phases (e.g., initial setup, ongoing maintenance).

- **Case Studies & Examples:** Include real-world examples of successful implementations, highlighting adaptations, results, and lessons learned.

**5.  Foster Community Engagement:**

Design the playbook to be a living document.  Include a section on how users can contribute improvements, access support resources, and participate in the playbook's ongoing development.  This fosters a sense of community ownership and ensures the playbook remains relevant and useful.

**6.  Refine and Iterate:**

Once a draft is complete, gather feedback from potential users.  Refine the playbook based on this feedback, ensuring clarity, accuracy, and usability.  Playbooks should evolve over time, adapting to new information and user experiences.

---

## Patterns

Patterns represent proven combinations of primitives that emerge repeatedly in successful organizations. While primitives provide the basic elements and playbooks offer complete solutions, patterns occupy the crucial middle ground where theory meets practice. They are the "recipes" that show how basic ingredients can be combined into reliable solutions.

- Patterns are archived in the [knowledge base](https://github.com/superbenefit/knowledge-base/tree/main/artifacts/patterns).

  - You can use the knowledge base to write, save and share your patterns. Or use the template below and pass along to a playbook steward.

- From there, patterns are published in the [Pattern Library](https://knowledge.superbenefit.org/artifacts/patterns/) or elsewhere as appropriate.

  - If you have patterns in the knowledge base, you can make a PR to the knowledge garden to publish them. Or notify a playbook steward that they're ready to publish.

### Documenting Patterns

- **Identify a Repeatable Solution:** 

  - Begin by identifying a solution that has proven successful in multiple, varied situations. Look for recurring themes and practices that consistently deliver positive outcomes. Document these instances meticulously, noting the common elements and specific contexts.

- **Define the Problem and Context:** 

  - Clearly articulate the problem the solution addresses. Define the context thoroughly, including prerequisites, limitations, or dependencies.

- **Describe the Solution's Mechanism:** 

  - Explain how the solution works, breaking down the process into manageable steps. Use clear language, avoiding jargon; use visual aids if necessary.

- **Analyze Affordances, Risks, and Opportunities:**

  - Identify the solution's capabilities and benefits (affordances). Analyze potential risks and challenges. Explore opportunities for broader impact.

- **Document Implementation Strategies:**

  -  Describe different ways the solution can be implemented and adapted. Provide practical examples and guidance.

- **Specify Required Primitives:**

  - Identify the fundamental building blocks (primitives) the solution relies upon. Explain how these primitives interact.

- **Gather and Analyze Case Studies:**

  - Collect real-world examples documenting context, implementation, challenges, outcomes, and lessons learned. Analyze these case studies to refine the pattern.

- **Refine and Iterate:**

  - Review and refine the pattern based on feedback and new insights. Patterns evolve as new information becomes available.

- **Curate Resources and References:** 

  - Compile relevant resources, including links to documentation and related patterns.

---

## Primitives

Reviewing a primitive involves identifying and documenting a fundamental building block for decentralized systems.  It's about clearly defining a tool, rule, or process that can be combined with others to create more complex solutions.

- Primitives are archived in the [knowledge base](https://github.com/superbenefit/knowledge-base/tree/main/artifacts/primitives).

  - You can use the knowledge base to write, save and share your primitives. Or use the template below and pass along to a playbook steward.

- From there, patterns are published in the [Primitive Library](https://knowledge.superbenefit.org/artifacts/primitives/).

  - If you have primitives in the knowledge base, you can make a PR to the knowledge garden to publish them. Or notify a playbook steward that they're ready to publish.

### Documenting Primitives

Here's a step-by-step guide to creating a primitive note, aligned with the provided template:

**1. Identify the Core Functionality:**

Begin by identifying the fundamental tool, rule, or process you want to document.  What is its core functionality?  What problem does it solve at a basic level?  Focus on the essential, irreducible element.  Avoid including implementation details or specific use cases at this stage; concentrate on the core function itself.

**2. Define the Primitive's Purpose and Features:**

Clearly articulate the primitive's purpose.  What is its intended use?  What problem does it solve?  Highlight its key features and functionalities.  What makes it unique or valuable as a building block?  This section should provide a concise yet comprehensive overview of the primitive's capabilities.

**3.  Illustrate Pro-Social Use Cases:**

Describe real-world scenarios where the primitive can be used to create positive social impact.  This section demonstrates the primitive's potential value within the context of decentralized systems and social good initiatives.  Focus on concrete examples to illustrate its practical application.

**4. Develop Implementation Guidance:**

Provide clear and concise instructions on how to implement or utilize the primitive.  Include:

- **Prerequisites:** List any skills, knowledge, or resources needed to use the primitive effectively.

- **Setup Guide:** Provide step-by-step instructions for initial configuration or access.

- **Quick Start:** Offer simple first tasks or experiments to help users quickly build familiarity with the primitive.

**5.  Document Implementation Patterns:**

Describe how this primitive is used within larger patterns.  This section connects the primitive to a higher level of abstraction, showing how it contributes to more complex solutions.  Include examples of patterns that utilize this primitive and explain their interactions.

**6.  Outline Best Practices:**

Provide guidance on best practices for using the primitive effectively and safely.  Include:

- **Technical and Security Considerations:** Address any technical requirements, risks, or precautions (e.g., data protection, key management).

- **Integration:** Explain how to incorporate the primitive into existing workflows or systems.

- **Scalability:** Discuss strategies for scaling the primitive to handle increased usage.

- **Optimization:** Offer tips for efficient and effective use, highlighting common pitfalls to avoid.

**7.  Gather Reviews and Case Studies:**

Collect feedback and real-world examples of the primitive's use.  This section provides valuable insights into the primitive's effectiveness and identifies areas for improvement.  Include both your own experiences and those of others.

**8.  Curate Additional Resources:**

Compile a list of relevant resources, including links to official documentation, community-made resources, support channels, and information on updates.  This section enhances the primitive's value and provides users with additional support and information.

By following these steps, you can create a well-documented primitive that serves as a robust and reusable building block for decentralized systems, contributing to the development of innovative and impactful solutions.  Remember to focus on clarity, conciseness, and practical applicability.

---

## Case Studies

- Studies are archived in the [knowledge base](https://github.com/superbenefit/knowledge-base/tree/main/artifacts/studies).

  - You can use the knowledge base to write, save and share your studies. Or use the template below and pass along to a playbook steward.

- From there, patterns are published in the [Case Studies Library](https://knowledge.superbenefit.org/artifacts/studies/).

  - If you have studies in the knowledge base, you can make a PR to the knowledge garden to publish them. Or notify a playbook steward that they're ready to publish.

### Case Study Instructions

Here's a step-by-step guide to creating a case study, structured to directly address each section of the provided outline:

**1.  Write a Compelling Introduction:**

Begin by crafting a concise and engaging introduction (one to two sentences) that summarizes the case study's purpose and key outcomes.  This should immediately grab the reader's attention and clearly state the case study's central theme.  Highlight the most significant results or impacts to pique the reader's interest.  Include a brief overview of the organization/community involved, focusing on its mission, size, and relevant characteristics.  Finally, present 2-3 major outcomes or impacts in a snapshot format, providing a quick overview of the key results.

**2.  Establish the Background and Context:**

This section sets the stage for the case study.  Clearly articulate:

- **The Challenge:** What problem, limitation, or gap was the organization facing?  Be specific and quantify the challenge whenever possible.

- **The Goals:** What were the intended outcomes or objectives of adopting the web3 tool, protocol, or practice?  What were they hoping to achieve?

- **The Setting:** Provide relevant context, such as geographic location, community demographics, or operating environment.  This helps the reader understand the specific circumstances of the implementation.

**3.  Detail the Selected Tool/Practice/Pattern:**

Clearly describe the pattern or primitive that was implemented.  This section should justify the choice:

- **Name of the Tool/Practice:** Clearly identify the solution.

- **Description:** Briefly explain the chosen solution and its relevance to the organization's goals.  Use plain language, avoiding technical jargon.

- **Rationale for Selection:** Explain _why_ this solution was chosen over others, highlighting specific criteria (e.g., scalability, inclusivity, ease of adoption, cost-effectiveness).  This demonstrates thoughtful consideration and strengthens the case study's credibility.

**4.  Document the Implementation Journey:**

This section forms the narrative core of your case study.  Chronologically describe the implementation process, emphasizing key decisions and actions:

- **Planning Phase:** Detail the initial assessment, design process, and stakeholder engagement.  Highlight any significant decisions or challenges during this phase.

- **Deployment:** Describe the steps taken to implement the solution, including timelines, milestones, and challenges encountered.  Explain _how_ these challenges were addressed—what strategies were employed, and what were the results?

- **Team Involved:** Identify the individuals and teams involved, highlighting their roles, expertise, and contributions.  This adds a human element to the case study.

**5.  Analyze Outcomes and Draw Conclusions:**

This section presents the results of the implementation and draws key conclusions.  Use a combination of quantitative and qualitative data:

- **Quantitative Metrics:** Provide data where applicable (e.g., increased participation, funds raised, reduced operational costs).  Use charts or graphs to visualize this data effectively.

- **Qualitative Insights:** Share stories, testimonials, or observations from participants.  Direct quotes can add a powerful human element.

- **Social Impact:** Analyze how the solution advanced the organization's mission or created positive change.  Quantify the social impact whenever possible.

- **Lessons Learned:** Identify success factors, challenges, and key takeaways.  Provide actionable advice for others considering similar approaches.

- **Next Steps:** Describe the organization's future plans related to the implemented solution.  This shows the ongoing relevance of the case study.

**6.  Include Optional Appendices:**

Enhance the case study with appendices containing additional information, such as resources, references, visual aids (charts, diagrams, screenshots), and contact information.