---
limit: 20
mapWithTag: false
icon: package
tagNames:
filesPaths:
  - artifacts
bookmarksGroups:
excludes:
extends: note
savedViews: []
favoriteView:
fieldsOrder:
  - Rb39zF
  - hJMtaE
  - vFMyvP
  - h26qa9
  - xqlwWc
  - r60EO1
  - CQuKMb
version: "2.107"
fields:
  - name: relatedArtifacts
    type: MultiFile
    options:
      dvQueryString: |-
        dv.pages().where(p => {
          if (!p.publish || (p.publish != true && p.publish != "true")) return false;
          if (!p.type) return false;
          const artifactTypes = ["artifact", "pattern", "playbook", "study", "article"];
          if (Array.isArray(p.type)) {
            return p.type.some(t => artifactTypes.includes(t));
          } else {
            return artifactTypes.includes(p.type);
          }
        })
      customRendering: 'page.file.name + " (" + (Array.isArray(page.type) ? page.type.join(", ") : page.type) + ")"'
      customSorting: a.file.name.localeCompare(b.file.name)
    path: ""
    id: CQuKMb
  - name: test
    type: MultiFile
    options:
      dvQueryString: dv.pages().where(p => p.publish && (p.publish == true || p.publish == "true") && p.type)
      customRendering: '"Type: " + JSON.stringify(page.type)'
    path: ""
    id: r60EO1
  - name: test3
    type: MultiFile
    options: {}
    path: ""
    id: xqlwWc
  - name: test4
    type: Multi
    options:
      sourceType: ValuesList
      valuesList:
        "1": "1"
        "2": "2"
        "3": "3"
        "4": "4"
    path: ""
    id: h26qa9
    display: asList
  - name: test5
    type: Multi
    options:
      sourceType: ValuesFromDVQuery
      valuesList: {}
      valuesFromDVQuery: dv.pages().where(p => p.publish && (p.publish == true || p.publish == "true") && p.type)
    display: asList
    path: ""
    id: vFMyvP
  - name: test6
    type: Multi
    options:
      sourceType: ValuesFromDVQuery
      valuesList: {}
      valuesFromDVQuery: dv.pages('"/"')
    path: ""
    id: hJMtaE
  - name: test7
    type: File
    options:
      dvQueryString: ""
    path: ""
    id: Rb39zF
---
The Artifact type represents polished, validated content that has successfully completed the knowledge development cycle. Artifacts embody the collective understanding and consensus of the SuperBenefit community on specific topics, having evolved from exploratory notes through collaborative refinement.

Extending the Note type, Artifacts inherit core metadata while adding the semantic weight of "published" status within the knowledge base. The `/artifacts/` directory serves as the repository for these refined pieces, signaling to readers that this content has been vetted and represents established knowledge rather than work in progress.

This type serves as the parent for specialized artifacts (patterns, playbooks, studies, articles), providing consistent quality standards while allowing domain-specific extensions. The distinction between Note and Artifact is primarily about maturity and validation rather than structure, supporting a clear content lifecycle.

**Template**: [artifact.md](/tools/templates/artifact.md) (rarely used directly)