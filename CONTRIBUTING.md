# Contributing to SuperBenefit's Knowledge Base

This guide introduces you to our collaborative knowledge-building process. We use a "digital gardening" approach, where technical tools support the organic growth of our shared understanding.

## How Knowledge Develops

Ideas in our knowledge base evolve through natural cycles. A draft might begin as personal notes from your research, blossom into a collaborative working document as others contribute their insights, and eventually mature into a published artifact that represents our collective understanding.

Our shared language grows similarly - new terms emerge naturally in our work, get refined through discussion and application, and gradually become well-defined concepts in our lexicon. This parallel growth of content and vocabulary helps us develop increasingly sophisticated ways to think and talk about our work together.

## ⚠️ CRITICAL: Link Strategy - MANDATORY FOR ALL CONTRIBUTORS ⚠️

**Before you create or edit ANY content, you MUST understand and follow our link strategy.**

This vault uses **ABSOLUTE MARKDOWN LINKS FROM VAULT ROOT** for ALL internal links. This is **NON-NEGOTIABLE**.

### **REQUIRED FORMAT - Use This ALWAYS**

```markdown
[DAOs](tags/daos.md)                                                    ✅ CORRECT
[Framework](artifacts/primitives-framework/primitives-framework-concepts.md)  ✅ CORRECT
[Cells](tags/cells.md)                                                  ✅ CORRECT
[Templates](tools/templates/readme.md)                                  ✅ CORRECT
```

### **FORBIDDEN FORMATS - NEVER USE THESE**

```markdown
[[daos]]                           ❌ WIKILINK - DO NOT USE
[[tags/daos]]                      ❌ WIKILINK WITH PATH - DO NOT USE
[DAOs](../../tags/daos.md)         ❌ RELATIVE PATH - DO NOT USE
[DAOs](/tags/daos.md)              ❌ LEADING SLASH - DO NOT USE
```

### **The Three Rules**

1. **MARKDOWN LINKS ONLY**: `[text](path)` - square brackets with parentheses
2. **ABSOLUTE PATHS ONLY**: Start from vault root - `tags/file.md` or `artifacts/dir/file.md`
3. **NO LEADING SLASHES**: `tags/file.md` YES - `/tags/file.md` NO

**WHY**: This ensures links work both in Obsidian AND when published to the knowledge garden. Violations break published content.

---

## Getting Started

### Documents & Metadata

Every document in our base has both visible content and helpful metadata that helps it find its place in the ecosystem. Our [type definitions](tools/types/readme.md) provide patterns for different kinds of content, but don't let the structure overshadow the substance. The most important thing is capturing and connecting ideas effectively.

### Setting Up Your Environment

*   **Install Obsidian:** Obsidian is our primary tool for working with the knowledge base. It's free, open-source, and works directly with markdown files on your computer. [Download it here](https://obsidian.md/).
*   **Clone This Repository:** You'll need to clone this repository to work with the knowledge base on your local computer.
*   **Get Repository Access:** Reach out to SuperBenefit admins to get access to our repository. They'll help you set up the necessary permissions and share connection details.

## Ways to Contribute

-   **Tend Existing Content:** Start by helping maintain what's already growing. Clarify explanations, update outdated information, fix broken links, or add helpful examples. This helps you learn the base while making valuable contributions.

-   **Plant New Ideas:** When you're ready, start growing your own ideas in your drafts folder. Let them develop naturally, using our templates and tags to give them structure. Connect your thoughts to related concepts as they mature.

-   **Cultivate Connections:** Some of the most valuable gardening is helping ideas find each other. Create meaningful links between documents, add relevant tags, and help build topic maps that show how different pieces of knowledge relate.

-   **Help Others Grow:** Welcome new contributors, help them find their way around, and share what you've learned. Review others' work thoughtfully and share your expertise generously.

## Getting Help

When you need assistance:

1.  Check existing documentation and templates
2.  Ask questions in our community channels
3.  Reach out directly to experienced contributors

Remember: every contributor was new once. Don't hesitate to ask for help as you learn to tend our shared knowledge space.

---

Join us in growing this base together. Every contribution, no matter how small, helps our collective understanding flourish.
```