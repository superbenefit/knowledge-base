# Primitives Directory

This repository documents fundamental building blocks for creating and managing effective organizations across various contexts. Primitives represent core, reusable components that can be combined to address complex organizational challenges—similar to how fundamental ingredients form the basis of sophisticated culinary creations.

---

## What is a Primitive?

Primitives are foundational organizational elements that can be strategically combined to achieve sophisticated collaborative outcomes. They provide a structured approach to understanding and designing organizational mechanisms. Examples include:

* **Governance Mechanisms:**  Methods for making decisions and allocating resources (e.g., voting systems, consensus-building processes).
* **Operational Functions:** Core processes for managing tasks and workflows (e.g., role assignment, task management, resource allocation).
* **Organizational Structures:** Ways of organizing people and resources (e.g., teams, committees, hierarchies).
* **Coordination Tools:** Methods for facilitating communication and collaboration (e.g., communication platforms, shared documentation systems).

---

## Working with Primitives

When documenting a new primitive, start by creating a draft in the `/drafts/` directory.  Consider these key questions:

1. What specific problem does this primitive solve?
2. How does it work in its simplest form?
3. What other primitives does it commonly combine with?
4. Where has it been used successfully (provide examples)?

For example:  Role rotation mechanisms combined with weighted voting can enable more equitable and efficient decision-making in a decentralized setting.  The framework helps determine when these combinations are most effective.

### Querying Primitives

Primitives can be queried using dataviewjs queries. Because the Primitive fileclass is extended (into practices, protocols, modules, etc.), regular dataview queries aren't suitable. We need to check the frontmatter of several fileclass notes to find the current list of primitive type extensions, which can only be done with dataviewjs.

An example of this pattern in a dataviewjs query would be:
```
dv.list(
    dv.pages()
        .where(p => 
            p.type &&
            (
                Array.isArray(p.type)
                    ? p.type.includes("primitive") ||
                      p.type.some(t => 
                          dv.pages('"tools/types"')
                              .where(t => t.extends === "primitive")
                              .map(t => t.file.name)
                              .includes(t)
                      )
                    : p.type === "primitive" ||
                      dv.pages('"tools/types"')
                          .where(t => t.extends === "primitive")
                          .map(t => t.file.name)
                          .includes(p.type)
            ) &&
            !p.file.path.startsWith("tools/") &&
            !p.file.path.startsWith("drafts/")
        )
        .map(p => p.file.name)
);
```

%%  Here is the bare query for fileclass field values:
```javascript
dv.pages()
    .where(p => 
        p.type &&
        (
            Array.isArray(p.type)
                ? p.type.includes("primitive") ||
                  p.type.some(t => 
                      dv.pages('"tools/types"')
                          .where(t => t.extends === "primitive")
                          .map(t => t.file.name)
                          .includes(t)
                  )
                : p.type === "primitive" ||
                  dv.pages('"tools/types"')
                      .where(t => t.extends === "primitive")
                      .map(t => t.file.name)
                      .includes(p.type)
        ) &&
        !p.file.path.startsWith("tools/") &&
        !p.file.path.startsWith("drafts/")
    )
    .map(p => p.file.name);
```
%%

---

## Documenting Primitives

### Using the [Primitive Template](tools/templates/Primitive%20Template.md) 

The [primitive template](tools/templates/Primitive%20Template.md) can be used to create a pre-populated Obsidian note for artifacts documenting primitives.

### Suggested Practices 

Here's a step-by-step guide to creating a primitive note, aligned with the provided template:

**1. Identify the Core Functionality:**

Begin by identifying the fundamental tool, rule, or process you want to document. What is its core functionality? What problem does it solve at a basic level? Focus on the essential, irreducible element. Avoid including implementation details or specific use cases at this stage; concentrate on the core function itself.

**2. Define the Primitive's Purpose and Features:**

Clearly articulate the primitive's purpose. What is its intended use? What problem does it solve? Highlight its key features and functionalities. What makes it unique or valuable as a building block? This section should provide a concise yet comprehensive overview of the primitive's capabilities.

**3. Illustrate Pro-Social Use Cases:**

Describe real-world scenarios where the primitive can be used to create positive social impact. This section demonstrates the primitive's potential value within the context of decentralized systems and social good initiatives. Focus on concrete examples to illustrate its practical application.

**4. Develop Implementation Guidance:**

Provide clear and concise instructions on how to implement or utilize the primitive. Include:

- **Prerequisites:** List any skills, knowledge, or resources needed to use the primitive effectively.
    
- **Setup Guide:** Provide step-by-step instructions for initial configuration or access.
    
- **Quick Start:** Offer simple first tasks or experiments to help users quickly build familiarity with the primitive.
    

**5. Document Implementation Patterns:**

Describe how this primitive is used within larger patterns. This section connects the primitive to a higher level of abstraction, showing how it contributes to more complex solutions. Include examples of patterns that utilize this primitive and explain their interactions.

**6. Outline Best Practices:**

Provide guidance on best practices for using the primitive effectively and safely. Include:

- **Technical and Security Considerations:** Address any technical requirements, risks, or precautions (e.g., data protection, key management).
    
- **Integration:** Explain how to incorporate the primitive into existing workflows or systems.
    
- **Scalability:** Discuss strategies for scaling the primitive to handle increased usage.
    
- **Optimization:** Offer tips for efficient and effective use, highlighting common pitfalls to avoid.
    

**7. Gather Reviews and Case Studies:**

Collect feedback and real-world examples of the primitive's use. This section provides valuable insights into the primitive's effectiveness and identifies areas for improvement. Include both your own experiences and those of others.

**8. Curate Additional Resources:**

Compile a list of relevant resources, including links to official documentation, community-made resources, support channels, and information on updates. This section enhances the primitive's value and provides users with additional support and information.

By following these steps, you can create a well-documented primitive that serves as a robust and reusable building block for decentralized systems, contributing to the development of innovative and impactful solutions. Remember to focus on clarity, conciseness, and practical applicability.

---

## Related Resources

* Document templates: [tools/templates/](tools/templates/)
* Metadata schemas: [tools/types/](tools/types/)
* Contribution guide: [CONTRIBUTING.md](CONTRIBUTING.md)