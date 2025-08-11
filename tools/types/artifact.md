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
fieldsOrder: []
version: "2.87"
fields: []
---
The Artifact type represents polished, validated content that has successfully completed the knowledge development cycle. Artifacts embody the collective understanding and consensus of the SuperBenefit community on specific topics, having evolved from exploratory notes through collaborative refinement.

Extending the Note type, Artifacts inherit core metadata while adding the semantic weight of "published" status within the knowledge base. The `/artifacts/` directory serves as the repository for these refined pieces, signaling to readers that this content has been vetted and represents established knowledge rather than work in progress.

This type serves as the parent for specialized artifacts (patterns, playbooks, studies, articles), providing consistent quality standards while allowing domain-specific extensions. The distinction between Note and Artifact is primarily about maturity and validation rather than structure, supporting a clear content lifecycle.

**Template**: [artifact.md](/tools/templates/artifact.md) (rarely used directly)