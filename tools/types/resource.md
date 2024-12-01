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
version: "2.56"
fields:
  - name: scale
    type: Multi
    options:
      sourceType: ValuesFromDVQuery
      valuesList: {}
      valuesFromDVQuery: |-
        $= dv.pages('"notes/primitives/framework/scale"')
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
        $= dv.pages('"notes/primitives/framework/phase"')
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
        const ext = dv.pages('"tools/types"')
            .where(t => t.extends === "primitive")
            .map(t => t.file.name);

        dv.table(
            ["Primitive", "Description"],
            dv.pages()
                .where(p => 
                    p.type && 
                    (p.type.includes("primitive") || ext.some(n => p.type.includes(n))) &&
                    !p.file.path.startsWith("tools/") && 
                    !p.file.path.startsWith("drafts/")
                )
                .sort(p => p.title, 'asc')
                .map(p => [
                    `**[${p.title}](${p.file.path})**`
                ])
        );
    path: ""
    id: ypTk3j
  - name: patterns
    type: Multi
    options:
      sourceType: ValuesFromDVQuery
      valuesList: {}
      valuesFromDVQuery: |-
        LIST file.name
        WHERE contains(type, "pattern")
        AND !contains(file.path, "tools/")
        AND !contains(file.path, "drafts/")
    path: ""
    id: bDuOpX
  - name: playbooks
    type: Multi
    options:
      sourceType: ValuesFromDVQuery
      valuesList: {}
      valuesFromDVQuery: |-
        LIST file.name
        WHERE contains(type, "playbook")
        AND !contains(file.path, "tools/")
        AND !contains(file.path, "drafts/")
    path: ""
    id: FAfyBY
  - name: studies
    type: Multi
    options:
      sourceType: ValuesFromDVQuery
      valuesList: {}
      valuesFromDVQuery: |-
        LIST file.name
        WHERE contains(type, "study")
        AND !contains(file.path, "tools/")
        AND !contains(file.path, "drafts/")
    path: ""
    id: pf7xkF
---