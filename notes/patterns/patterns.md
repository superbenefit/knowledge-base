---
title: Pattern Library
description: A library of patterns
publish: "true"
type: index
---

**Patterns** are combinations of [primitives](tags/primitives.md), often used according to [frameworks](tags/frameworks.md), to compose implementations of organizational tooling. ^152f26

---

Patterns are the fundamental building blocks of organizational design - they represent proven combinations of practices, primitives, and protocols that emerge repeatedly in successful organizations. While primitives provide the basic elements and playbooks offer complete solutions, patterns occupy the crucial middle ground where theory meets practice. They are the "recipes" that show how basic ingredients can be combined into reliable solutions.

## Understanding Patterns

At their heart, patterns are more than tools for solving problems; they are the connective tissue of a living, evolving system of knowledge. Each pattern captures the distilled essence of repeated successes, revealing not just what worked but why it worked in a particular context. Like DNA sequences that code for complex traits, patterns encode organizational wisdom in a form that can be understood, transmitted, and adapted.

Consider how a pattern like "Self-Governing Workshops" works: it combines basic primitives like role templates and voting mechanisms into a coherent whole that's greater than the sum of its parts. The pattern doesn't just prescribe a structure - it creates a space where autonomy and accountability can flourish together.

### The Living Nature of Patterns

Patterns evolve alongside the organizations they support. They aren't static solutions but dynamic templates that adapt to new challenges, technologies, and cultural shifts. When we document a pattern, we're capturing a moment in its evolution, understanding that it will continue to grow and change.

This evolutionary nature manifests in several ways:
- Patterns interact and combine to form more complex solutions
- They adapt to different scales and contexts while maintaining their core principles
- New patterns emerge as organizations face novel challenges
- Existing patterns refine themselves through repeated application

### Pattern Relationships

No pattern exists in isolation. Like an ecosystem, patterns form a web of relationships:
- Horizontal relationships between complementary patterns that work together
- Vertical relationships with the primitives they're built from and the playbooks they enable
- Temporal relationships as patterns evolve and adapt over time

Understanding these relationships is crucial for effective pattern use. A pattern like "Pods, Guilds, and Squads" might depend on complementary patterns like "Rotating Facilitation" or "Nested Circles" to achieve its full potential.

## The Pattern Lifecycle

Patterns begin as emerging practices, often discovered through trial and error in real organizations. As these practices prove their value and their underlying principles become clear, they crystallize into documented patterns. Through continued use and refinement, they either evolve to meet new challenges or fade away as contexts change.

### From Theory to Practice

The true value of patterns emerges in their application. Each implementation of a pattern adapts its principles to a specific context while maintaining its essential character. This balance between consistency and flexibility allows patterns to:
- Scale across different organization sizes
- Adapt to various cultural contexts
- Evolve with technological change
- Maintain effectiveness while allowing for innovation

## Working with Patterns

To work effectively with patterns, start by understanding the problem you're trying to solve and the context you're working in. Pattern selection should consider:
- The scale of your organization
- Your current phase of development
- The specific challenges you're facing
- The cultural and technical context you're working in

For practical implementation details and contribution guidelines, see our [README](README.md).

## Discovering Patterns

The pattern library is organized through several lenses:
- By organizational function (governance, operations, etc.)
- By scale (individual, team, organization, etc.)
- By development phase (forming, norming, etc.)
- By the primitives they employ

## Pattern Index

```
$= dv.list(
    dv.pages()
    .where(p => 
        (p.type === "pattern" || (Array.isArray(p.type) && p.type.includes("pattern"))) &&
        !p.file.path.startsWith("tools/") &&
        !p.file.path.startsWith("drafts/") &&
        p.publish === true
    )
.map(p => `[[${p.file.path}|${p.title}]]`)
)
```