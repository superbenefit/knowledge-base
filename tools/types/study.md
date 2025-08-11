---
mapWithTag: true
limit: 50
icon: search
tagNames:
  - studies
filesPaths: 
bookmarksGroups: 
excludes: 
extends: artifact
savedViews: 
favoriteView: 
fieldsOrder:
  - D3j1km
version: "2.5"
fields:
  - name: case
    type: Multi
    options:
      sourceType: ValuesFromDVQuery
      valuesList: {}
      valuesFromDVQuery: |-
        dv.pages('-"/tools"')
          .where(p => p.type?.includes("entity"))
          .map(p => p.file.name)
    path: ""
    id: D3j1km
---
## Study Type

Real-world implementation documentation that bridges theory and practice through empirical analysis of how patterns, protocols, and playbooks perform in actual organizational contexts.

Studies provide the evidence base for our knowledge claims, documenting what happened when specific approaches were implemented, what outcomes emerged, and what lessons were learned. The unique 'case' field enables linking studies to specific entities or organizations, creating a rich web of implementation examples that others can learn from.

With automatic tagging through `mapWithTag` and a higher record limit to accommodate detailed documentation, studies serve as the empirical foundation of our knowledge base. They validate theoretical patterns, reveal unexpected adaptations, and highlight contextual factors that influence success.

**Key distinction**: Studies document and analyze real implementations with measurable outcomes, while articles provide opinion or analysis. A study examines "how ConsensusDAO implemented quadratic voting and what happened"; an article might argue "why quadratic voting improves governance."

**Template**: [/tools/templates/study.md](/tools/templates/study.md)