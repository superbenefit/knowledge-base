*Part of the DAO Primitives Framework - Building better organizations through proven patterns*

# Patterns Directory

This directory provides a practical guide to implementing organizational patterns. While our [main patterns index](artifacts/patterns/patterns.md) explores the theoretical underpinnings and relationships between patterns, this README focuses on how to use, document, and contribute to our pattern library.

---

## Getting Started

Patterns bridge the gap between theory and practice in organizational design. Each pattern in this directory represents a proven solution to common challenges, tested and refined through real-world implementation. Whether you're building a new organization or evolving an existing one, patterns provide reliable building blocks for your journey.

### Finding the Right Pattern

To find the patterns most relevant to your needs, follow these steps:

1. **Identify Your Challenge:** Clearly define the specific organizational problem you're trying to solve.
2. **Browse the Directory:** Explore the patterns directory, looking for solutions that address your challenge.
3. **Check Annotations:** Pay attention to the `scale` and `phase` annotations to ensure the pattern is appropriate for your organization's size and stage of development.
4. **Review Examples and Case Studies:** Examine the implementation examples and case studies provided to understand how the pattern has been successfully applied in different contexts.
5. **Consider Interactions:**  Think about how the pattern might interact with your existing organizational practices and structures.

### Querying Patterns

Patterns can be queried in a dataview query like this:
``` 
LIST description
WHERE 
    type AND
    (
        contains(type, "pattern") OR
        (type = "pattern")
    ) AND
    !contains(file.path, "tools/") AND
    !contains(file.path, "drafts/")
```

An example of this pattern in a dataviewjs query would be:
```
dv.list(
    dv.pages()
        .where(p => 
            (Array.isArray(p.type) 
                ? p.type.some(t => t.includes("pattern")) 
                : p.type?.includes("pattern")) &&
            !p.file.path.includes("tools/") &&
            !p.file.path.includes("drafts/")
        )
        .map(p => p.file.name)
);
```

%% 
Here is the bare query for fileclass field values:
```javascript
dv.pages()
    .where(p => 
        (Array.isArray(p.type) ? p.type.some(t => t.includes("pattern")) : p.type?.includes("pattern")) &&
        !p.file.path.includes("tools/") &&
        !p.file.path.includes("drafts/")
    )
    .map(p => p.file.name);
```
 %%
---

## Contributing

Have you discovered a new pattern or refined an existing one? We welcome contributions that help our pattern library evolve. Here's how to share your knowledge:

Start by creating a new file in the `/drafts/` directory using this structure:

```yaml
title: Pattern Name
description: A concise description of what the pattern achieves
url: Optional link for patterns defined elsewhere on the web
tags:
  - patterns
publish: false
type: pattern
functions: What functions this pattern serves
qualities: Key characteristics and benefits
scale: What organizational scale this works at
phase: Which development phases it's suitable for
primitives: List of primitives this pattern uses
```

Document your pattern with clear examples, implementation guidance, and real-world cases. Once your draft is ready, submit it for community review

### Using the [Pattern Template](tools/templates/Pattern%20Template.md) 

The [pattern template](tools/templates/Pattern%20Template.md) can be used to create a pre-populated Obsidian note for patterns.

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
    
	- Describe different ways the solution can be implemented and adapted. Provide practical examples and guidance.
    
- **Specify Required Primitives:**
    
	- Identify the fundamental building blocks (primitives) the solution relies upon. Explain how these primitives interact.
    
- **Gather and Analyze Case Studies:**
    
	- Collect real-world examples documenting context, implementation, challenges, outcomes, and lessons learned. Analyze these case studies to refine the pattern.
    
- **Refine and Iterate:**
    
	- Review and refine the pattern based on feedback and new insights. Patterns evolve as new information becomes available.
    
- **Curate Resources and References:**
    
	- Compile relevant resources, including links to documentation and related patterns.

---

For deeper exploration of pattern theory and relationships, visit our [pattern index](artifacts/patterns/patterns.md) in the knowledge garden.