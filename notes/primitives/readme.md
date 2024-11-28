# Primitives Directory

This directory documents fundamental building blocks for creating and managing effective organizations, whether they are onchain or offchain.  We use the term "primitives" to refer to these core components.  Just as recipes rely on basic ingredients, and cookbooks organize recipes, effective organizations are built from simple, reusable components.

---

## What is a Primitive?

A primitive is a simple, foundational element or process that can be combined in various ways to achieve complex organizational goals.  Examples include:

* **Governance Mechanisms:**  Methods for making decisions and allocating resources (e.g., voting systems, consensus-building processes).
* **Operational Functions:** Core processes for managing tasks and workflows (e.g., role assignment, task management, resource allocation).
* **Organizational Structures:** Ways of organizing people and resources (e.g., teams, committees, hierarchies).
* **Coordination Tools:** Methods for facilitating communication and collaboration (e.g., communication platforms, shared documentation systems).

---

## Directory Structure

Our documentation is organized into three interconnected layers:

1. **Core Concepts:**  This layer defines the fundamental building blocks of organizational design.  These are the essential elements upon which all other aspects of organizational structure and function are built. [Link to `primitives.md`]

2. **Framework:** This layer provides tools and models for understanding how primitives operate in different contexts. It helps you analyze your organization's current state, identify suitable tools and approaches, plan transitions, and avoid common pitfalls. This includes models for:

    * **Phase:**  Stages of organizational development (e.g., initial formation, growth, maturity). [Link to `framework/phase/` directory]
    * **Scale:**  The size and complexity of the organization (e.g., small team, large network). [Link to `framework/scale/` directory]
    * **State:**  The properties and characteristics of the organization at a given point in time. [Link to `framework/state.md`]

3. **Patterns:** This layer documents proven combinations of primitives that solve common organizational challenges. These patterns represent practical, tested solutions that can be adapted and implemented in various contexts. [Link to `../patterns/` directory]

### Test Files

Several unpublished test files are present in the notes directory. These are for testing out the functionality of various file types in-situ. Please use them as needed for your projects, but please avoid overwriting others' content wherever possible.

---

## Working with Primitives

When documenting a new primitive, start by creating a draft in the `/drafts/` directory.  Consider these key questions:

1. What specific problem does this primitive solve?
2. How does it work in its simplest form?
3. What other primitives does it commonly combine with?
4. Where has it been used successfully (provide examples)?

For example:  Role rotation mechanisms combined with weighted voting can enable more equitable and efficient decision-making in a decentralized setting.  The framework helps determine when these combinations are most effective.

---

## Project Navigation

* **Core Documentation:** [notes/primitives.md](notes/primitives.md)
* **Framework Documentation:** [notes/primitives/framework/](notes/primitives/framework/)
    * Group Phase: [notes/primitives/framework/phase/](notes/primitives/framework/phase/)
    * Group Scale: [notes/primitives/framework/scale/](notes/primitives/framework/scale/)
    * Group State: [notes/primitives/framework/state.md](notes/primitives/framework/state.md)
* **Pattern Library:** [notes/patterns/](notes/patterns/)

---

## Related Resources

* Document templates: [tools/templates/](tools/templates/)
* Metadata schemas: [tools/types/](tools/types/)
* Contribution guide: [CONTRIBUTING.md](CONTRIBUTING.md)