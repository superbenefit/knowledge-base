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

---

## Related Resources

* Document templates: [tools/templates/](tools/templates/)
* Metadata schemas: [tools/types/](tools/types/)
* Contribution guide: [CONTRIBUTING.md](CONTRIBUTING.md)