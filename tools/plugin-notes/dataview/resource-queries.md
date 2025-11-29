---
title: Querying Knowledge Resources
description: 
author: 
url: 
tags: 
curator: 
harvester: 
publish: false
type: resource
functions: 
qualities: 
scale: 
phase: 
patterns: 
primitives: 
playbooks: 
studies:
---




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

### Querying Playbooks

Playbooks can be queried in a dataview query like this:
```
LIST description
WHERE 
    type AND
    (
        contains(type, "playbook") OR
        (type = "playbook")
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
                ? p.type.some(t => t.includes("playbook")) 
                : p.type?.includes("playbook")) &&
            !p.file.path.includes("tools/") &&
            !p.file.path.includes("drafts/")
        )
        .map(p => p.file.name)
);
```

%% Here is the bare query for fileclass field values:
```javascript
dv.pages()
    .where(p => 
        (Array.isArray(p.type) ? p.type.some(t => t.includes("playbook")) : p.type?.includes("playbook")) &&
        !p.file.path.includes("tools/") &&
        !p.file.path.includes("drafts/")
    )
    .map(p => p.file.name);
```
 %%

---

### Querying Case Studies

Studies can be queried in a dataview query like this:
```
LIST description
WHERE 
    type AND
    (
        contains(type, "study") OR
        (type = "study")
    ) AND
    !contains(file.path, "tools/") AND
    !contains(file.path, "drafts/")
```

Studies can be queried with dataviewjs using this type of pattern:
```
dv.list(
    dv.pages()
        .where(p => 
            p.type?.includes("study") &&
            !p.file.path.includes("tools/") &&
            !p.file.path.includes("drafts/")
        )
        .map(p => p.file.name)
);
```

%% Here is the bare query for fileclass field values:
```javascript
dv.pages()
    .where(p => 
        (Array.isArray(p.type) ? p.type.some(t => t.includes("study")) : p.type?.includes("study")) &&
        !p.file.path.includes("tools/") &&
        !p.file.path.includes("drafts/")
    )
    .map(p => p.file.name);
```
 %%

