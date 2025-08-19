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
  - U2d0e1
version: "2.88"
fields:
  - name: relatedArtifacts
    type: Multi
    options:
      sourceType: ValuesFromDVQuery
      valuesList: {}
      valuesFromDVQuery: |-
        dv.pages()
                .where(p => ['article', 'pattern', 'study', 'playbook', 'guide', 'protocol'].includes(p.type) 
                        && p.file.path !== dv.current().file.path)
                .map(p => `[${p.type}] ${p.file.link}`)
    path: ""
    id: U2d0e1
---
The Artifact type represents polished, validated content that has successfully completed the knowledge development cycle. Artifacts embody the collective understanding and consensus of the SuperBenefit community on specific topics, having evolved from exploratory notes through collaborative refinement.

Extending the Note type, Artifacts inherit core metadata while adding the semantic weight of "published" status within the knowledge base. The `/artifacts/` directory serves as the repository for these refined pieces, signaling to readers that this content has been vetted and represents established knowledge rather than work in progress.

This type serves as the parent for specialized artifacts (patterns, playbooks, studies, articles), providing consistent quality standards while allowing domain-specific extensions. The distinction between Note and Artifact is primarily about maturity and validation rather than structure, supporting a clear content lifecycle.

**Template**: [artifact.md](/tools/templates/artifact.md) (rarely used directly)