---
limit: 20
mapWithTag: true
icon: package
tagNames: 
filesPaths: 
bookmarksGroups: 
excludes: 
extends: 
savedViews: []
favoriteView: 
fieldsOrder:
  - pf7xkF
  - FAfyBY
  - bDuOpX
  - ypTk3j
  - dEXTlc
  - 8QLYWX
  - 9zPLbb
  - 5SD9jH
version: "2.77"
fields:
  - name: scale
    type: Multi
    options:
      sourceType: ValuesFromDVQuery
      valuesList: {}
      valuesFromDVQuery: |-
        $= dv.pages('"notes/dao-primitives/framework/scale"')
            .where(p => !["scale", "index", "readme"].includes(p.file.name))
            .map(p => p.file.name);
    path: ""
    id: 9zPLbb
  - name: phase
    type: Multi
    options:
      sourceType: ValuesFromDVQuery
      valuesList: {}
      valuesFromDVQuery: |-
        $= dv.pages('"notes/dao-primitives/framework/phase"')
            .where(p => !["phase", "index", "readme"].includes(p.file.name))
            .map(p => p.file.name);
    path: ""
    id: 5SD9jH
  - name: functions
    type: Multi
    options:
      sourceType: ValuesFromDVQuery
      valuesList: {}
      valuesFromDVQuery: |-
        $= dv.pages('"tags"')
            .where(p => p.file.tags && p.file.tags.some(tag => tag.includes("functions")))
            .map(p => p.file.name);
    path: ""
    id: dEXTlc
  - name: qualities
    type: Multi
    options:
      sourceType: ValuesFromDVQuery
      valuesList: {}
      valuesFromDVQuery: |-
        $= dv.pages('"tags"')
            .where(p => p.file.tags && p.file.tags.some(tag => tag.includes("qualities")))
            .map(p => p.file.name);
    path: ""
    id: 8QLYWX
  - name: primitives
    type: Multi
    options:
      sourceType: ValuesFromDVQuery
      valuesList: {}
      valuesFromDVQuery: |-
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
    path: ""
    id: ypTk3j
  - name: patterns
    type: Multi
    options:
      sourceType: ValuesFromDVQuery
      valuesList: {}
      valuesFromDVQuery: |-
        dv.pages()
            .where(p => 
                (Array.isArray(p.type) ? p.type.some(t => t.includes("pattern")) : p.type?.includes("pattern")) &&
                !p.file.path.includes("tools/") &&
                !p.file.path.includes("drafts/")
            )
            .map(p => p.file.name);
    path: ""
    id: bDuOpX
  - name: playbooks
    type: Multi
    options:
      sourceType: ValuesFromDVQuery
      valuesList: {}
      valuesFromDVQuery: |-
        dv.pages()
            .where(p => 
                (Array.isArray(p.type) ? p.type.some(t => t.includes("playbook")) : p.type?.includes("playbook")) &&
                !p.file.path.includes("tools/") &&
                !p.file.path.includes("drafts/")
            )
            .map(p => p.file.name);
    path: ""
    id: FAfyBY
  - name: studies
    type: Multi
    options:
      sourceType: ValuesFromDVQuery
      valuesList: {}
      valuesFromDVQuery: |-
        dv.pages()
            .where(p => 
                (Array.isArray(p.type) ? p.type.some(t => t.includes("study")) : p.type?.includes("study")) &&
                !p.file.path.includes("tools/") &&
                !p.file.path.includes("drafts/")
            )
            .map(p => p.file.name);
    path: ""
    id: pf7xkF
---