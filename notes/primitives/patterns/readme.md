# Patterns Directory

This directory houses our pattern documentation - proven combinations of primitives that solve common organizational challenges. Think of patterns as tested recipes that show how to combine the basic ingredients (primitives) into reliable solutions.

## Purpose & Context 

Patterns bridge between basic building blocks and full implementation strategies:
- Take fundamental primitives from the [parent directory](../primitives.md)
- Combine them into proven, reusable solutions
- Feed into complete playbooks for specific use cases

Each pattern works at particular [scales and phases](../framework/framework.md) of organizational development, helping you choose the right approaches for your context.

## Working With Patterns

Start new pattern documentation in `/drafts/` using the Pattern Template:

```yaml
title: 
description:
url:  
tags:
  - patterns
publish: false
type: pattern
functions:
qualities:
scale:
phase:
primitives:
```

Document each pattern with:
- Core concept and introduction
- Elements and implementation details  
- Which primitives it uses and why
- Real examples and use cases
- Where it fits in broader strategies

For example: A "Self-Governing Workshops" pattern might combine primitives like role templates, multi-sig voting, and task tracking to create a proven approach for team autonomy.

## Finding Patterns

- Check [patterns.md](patterns.md) for the conceptual overview
- Use the framework to identify patterns that fit your:
  - Current phase of development
  - Operating scale
  - Organizational needs
- See `/tools/types/pattern.md` for documentation standards

Once a pattern is proven through community use and feedback, move it here and update the index.

Questions about documenting or using patterns? Join our community channels.

---

*Part of the [DAO Primitives Framework](../framework/framework.md) - Connecting basic building blocks to practical implementation.*