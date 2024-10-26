---
type: note
publish: 
title: 
description:
---

This page is for testing Dataview queries

https://blacksmithgu.github.io/obsidian-dataview/queries/dql-js-inline

---

## Dataview (`dataview`)

```dataview

```

---

## Dataview JS (`dataviewjs`)

```dataviewjs

```

---

## Inline Dataview JS (`$= `...)

first try - using page titles
```
$= dv.list(
    dv.pages('"notes/dao-primitives/group-properties/scale"')
    .where(p => !["scale", "index", "readme"].includes(p.file.name))
    .map(p => p.title)
)
```

test using types folder
```
$= dv.list(
    dv.pages('"tools/types"')
    .where(p => !["types", "index", "readme"].includes(p.file.name))
    .map(p => p.title || p.file.name)
)
```

second try - using filenames and dv.pages
```
$= dv.pages('"notes/dao-primitives/group-properties/scale"')
    .where(p => !["scale", "index", "readme"].includes(p.file.name))
    .map(p => p.file.name)
```

With p.name
```
$= dv.pages('"notes/dao-primitives/group-properties/scale"')
    .where(p => !["scale", "index", "readme"].includes(p.file.name))
    .map(p => p.file.name)
```

---

Phase
```
$= dv.pages('"notes/dao-primitives/group-properties/phase"')
    .where(p => !["phase", "index", "readme"].includes(p.file.name))
    .map(p => p.file.name)
```

Scale

```
$= dv.pages('"notes/dao-primitives/group-properties/scale"')
    .where(p => !["scale", "index", "readme"].includes(p.file.name))
    .map(p => p.file.name)
```

---

functions
```
$= dv.pages('"tags"')
    .where(p => p.tags && p.tags.includes("functions") && !["functions", "index", "readme"].includes(p.file.name))
    .map(p => p.file.name)
```