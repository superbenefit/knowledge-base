# Type System Reference

This guide documents the SuperBenefit Knowledge Base type system (v3.0), implemented through Obsidian's Metadata Menu plugin fileClass feature.

## Overview

The type system provides:
- **Metadata schemas** with fields and validation
- **Inheritance** through the `extends` property
- **Auto-application** via directory mappings (`filesPaths`) or tags (`mapWithTag`)
- **UI customization** through icons and table views
- **Query support** through consistent metadata structures

## Type Hierarchy

```
file (root)
├── resource (+ url)
│   ├── pattern
│   ├── practice
│   ├── primitive
│   ├── protocol
│   └── playbook
├── story (+ author, url)
│   ├── article
│   ├── study
│   └── guide
├── concept (+ harvester)
├── link (+ url, linkType)
├── person (+ groups)
├── group (+ url, members)
├── project (+ url, status)
├── place (+ geo, region)
├── gathering (+ location, startDate, endDate)
├── question (+ status)
└── index
```

## Core Fields (file.md)

All types inherit these fields from `file`:

| Field | Type | Description |
|-------|------|-------------|
| title | Input | Content title |
| description | Input | Brief summary |
| date | Date | Creation/modification date |
| publish | Boolean | Knowledge Garden visibility |
| permalink | Input | URL slug for publishing |
| aliases | Multi | Alternative names |
| tags | Multi | Content tags |
| relatesTo | MultiFile | Links to related content |

## Type Reference

| Type | Extends | Directory | Tag | Icon | Additional Fields |
|------|---------|-----------|-----|------|-------------------|
| **file** | - | docs/, drafts/ | - | file-text | (core fields) |
| **resource** | file | - | - | package | url |
| **story** | file | - | - | book-open | author, url |
| **pattern** | resource | data/resources/patterns | patterns | layout-template | - |
| **practice** | resource | data/resources/practices | practices | repeat | - |
| **primitive** | resource | data/resources/primitives | primitives | box | - |
| **protocol** | resource | data/resources/protocols | protocols | notepad-text | - |
| **playbook** | resource | data/resources/playbooks | playbooks | notebook-tabs | - |
| **article** | story | data/stories/articles | - | newspaper | - |
| **study** | story | data/stories/studies | studies | search | - |
| **guide** | story | data/stories/guides | guides | book | - |
| **concept** | file | data/concepts | (mapWithTag) | lightbulb | harvester |
| **link** | file | data/links | - | link | url, linkType |
| **person** | file | data/people | - | user | groups |
| **group** | file | data/groups | - | users | url, members |
| **project** | file | data/projects | - | folder-kanban | url, status |
| **place** | file | data/places | - | map-pin | geo, region |
| **gathering** | file | data/gatherings | - | calendar | location, startDate, endDate |
| **question** | file | data/questions | questions | help-circle | status |
| **index** | file | - | - | folder-search | - |

## Directory Mappings

| Directory | Type |
|-----------|------|
| docs/, drafts/ | file |
| data/resources/patterns | pattern |
| data/resources/practices | practice |
| data/resources/primitives | primitive |
| data/resources/protocols | protocol |
| data/resources/playbooks | playbook |
| data/stories/articles | article |
| data/stories/studies | study |
| data/stories/guides | guide |
| data/concepts | concept |
| data/links | link |
| data/people | person |
| data/groups | group |
| data/projects | project |
| data/places | place |
| data/gatherings | gathering |
| data/questions | question |

## Type Selection Guide

| If you're creating... | Use |
|-----------------------|-----|
| Working document | file (note.md template) |
| Directory overview | index |
| Term definition | concept |
| External resource reference | link |
| Reusable solution | pattern |
| Repeated activity | practice |
| Building block | primitive |
| Formal procedure | protocol |
| Implementation guide | playbook |
| Formal publication | article |
| Case study | study |
| Tutorial | guide |
| Research question | question |
| Person profile | person |
| Organization | group |
| Initiative | project |
| Location | place |
| Event | gathering |

## Field Type Options

| Type | Description |
|------|-------------|
| Input | Free text entry |
| Boolean | True/false toggle |
| Number | Numeric values |
| Select | Single choice from list |
| Multi | Multiple choices |
| Date | Date picker |
| MultiFile | Links to vault files |

## Template Integration

Each type has a corresponding template in `/tools/templates/layouts/`:

| Type | Template |
|------|----------|
| file | note.md |
| pattern | pattern.md |
| practice | practice.md |
| primitive | primitive.md |
| protocol | protocol.md |
| playbook | playbook.md |
| article | article.md |
| study | study.md |
| guide | guide.md |
| concept | concept.md |
| link | link.md |
| person | person.md |
| group | group.md |
| project | project.md |
| place | place.md |
| gathering | gathering.md |
| question | question.md |
| index | index.md |

## Creating New Types

1. Create type file in `/tools/types/` with YAML frontmatter:
   ```yaml
   ---
   limit: 20
   mapWithTag: false
   icon: icon-name
   tagNames: []
   filesPaths:
     - path/to/content
   extends: parent-type
   version: "3.0"
   fields:
     - name: fieldName
       type: FieldType
       options: {}
       id: uniqueId
   ---
   ```

2. Add description in markdown body
3. Create corresponding template in `/tools/templates/layouts/`
4. Test with Metadata Menu

## Dataview Queries

```javascript
// Find all resources
dv.pages()
  .where(p => ["pattern", "practice", "primitive", "protocol", "playbook"]
    .includes(p.type))

// Find all stories
dv.pages()
  .where(p => ["article", "study", "guide"]
    .includes(p.type))

// Find unpublished content
dv.pages('"data"')
  .where(p => p.publish === false)
```

## Version History

- **v3.0**: Current version - simplified hierarchy with file as root
- **v2.x**: Previous structure with note/reference/artifact parents

## Related

- [Template System](/tools/templates/readme.md)
- [Metadata Menu Documentation](https://mdelobelle.github.io/metadatamenu/)
