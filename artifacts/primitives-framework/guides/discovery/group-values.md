---
title: Values and Trade-Offs in Decentralized Organizing
description: Crafting agreements on shared priorities for selecting tooling and practices
publish: false
type: index
---

### Notes on requirements for the group-values document

- Should use [group-state](artifacts/primitives-framework/guides/design/group-state.md) as structural reference
- Should align with the [Conceptual Framework](artifacts/primitives-framework/facilitation/concepts/concepts.md), and should be functionally useful as part of the Primitives Framework (specifically as a contextual lens used for state consensus and tool selection)
- Should help the reader understand how to identify the Values that matter for their development process.
	- Should list common Values and trade-offs for groups to consider
	- Should help readers craft even-over statements or or other value statements to record in their working agreements / group state
	- Ideally should have clear hooks for tying into other complementary systems transformation and collaborative design practices the group may be using.



### Consider this meta-context:

- Values have a subjective relationship to Qualities, which are used in our knowledge base metadata system to indicate common qualities of patterns and primitives. Groups *value* certain *qualities*. A group's Values are used to determine which (of those appropriate for their phase and scale) primitives are most likely to help them achieve their organizing goals.
	- We don't refer to *qualities* as "properties", because "properties" is used for other things, like metadata keys and other software terms. *Qualities* is also more appropriate to our use case because *qualities* are non-exclusive qualitative labels, and not distinct quantifiable properties.
	- *Qualities* in this knowledge base are "meta-tags". These are tags (formally defined using entries in the tags/ directory (lexicon)) which themselves have the tag #qualities applied to them in their frontmatter. Again, those requirements for a quality meta-tag:
		1. A tag which has been added to the formal tag lexicon using an entry in the tags/ directory with a matching alias (such as #decentralization and [decentralization](tags/decentralization.md)), AND
		2. Which also has the #qualities tag applied to its "tags" frontmatter property
- Some Values cannot be simultaneously realized with the same intensity, requiring choices between different trade-offs. In these cases, *Values* can be expressed as even-over statements comparing two *qualities*.
	- Example value statement: "We *value* **Expediency** *even over* **Participation**"
		- Expediency and Participation are desired *Qualities*, and the *Value* statement prioritizes expediency over participation (but does not exclude participation as an important quality in doing so)
- Where phase and scale are useful concepts for objectively defining a group as a discrete entity within the network, Values indicate the unique priorities and opinions of the group as a non-fungible social formation, and signal the alignment of the group within the broader network.
- Values are strategic in nature, and can be expressions of the group's shared values and cultural norms. 
	- Many groups cultivate values-based organizing practices based in a nuanced desire to use their organization as a facilitator of certain cultural norms, shared values and social purposes, - but struggle to attain those goals because their institutional environment enforces externally defined norms (like boilerplate agreement language, compliance requirements for grants, legal entities, etc.) which are contradictory to the liberatory purpose the organization originally had. DAO's allow us to custody the infrastructure and common resources our organization governs within bespoke, smart-contract-enforced systems that are resistant to these perverse external influences (and corrupt internal influences). Thus we gain resilience and security while also gaining the transparency and accountability affordances provided by the blockchain consensus layer.
- From a developmental perspective, Group Values equate to "Flavors" in [The Blockchain Governance Toolkit](links/The%20Blockchain%20Governance%20Toolkit.md)
	- Step 1 of the toolkit's method ("Pick your Flavors") is equivalent to the DAO Primitives Framework's suggestion of developing consensus around Group Values to aid in the selection of the appropriate primitives (which itself is done in this document).
		- The Blockchain Governance Toolkit focuses just on picking preferred qualities, which is fine for some groups. The Primitives Framework adds the additional contextual lenses of Group Scale and Group Phase to form:
			- 1.) framework for identifying and analyzing your existing social trust zones and their relationships to inform your organizational graph, and 
			- 2.) a three-dimensional consideration matrix for the evaluation and selection of primitives, which are the tooling implementations used to augment and support the agents acting within the social graph. 
				- While Phase and Scale help to inform what 
		- In addition, the Primitives Framework introduces the concept of Group State. This is simply our recommendation that groups track the state of their protocols, practices and primitives in a human-readable manner. This is usually a document with pointers to authoritative information related to the purpose, practices and progress of the group, like its designated smart contracts, working agreements, policies, data sources (member lists, txn records, documentation, etc). 
			- An example of group state could be a governance.md file in an open source project.
			- Group state is also often reflected in documents like funding/grant applications, websites, and other public attestations. There's no one right way to express group state. We just recommend that groups have *some* way of agreeing to and expressing the state of their group in a way that's legible both internally and to their wider network.
		- Note to Claude: Use these external references to create a holistic understanding of the developmental process a group (and/or its facilitator) will use when employing resources like the Primitives Framework alongside tools like the blockchain governance toolkit. Sensemaking and decisionmaking around governance and tool selection does require a real (though manageable) amount of work which carries risk of failure if not properly considered and executed. 
			- As seen in the blockchain governance toolkit, developing consensus Values about shared practices and tooling is crucial for smooth decentralized organizing. Failure to establish these agreements early-on can lead to disruptive disagreements later on (turning simple self-governance tasks into drawn-out debates and other problems).
				- a typical example of values-driven conflict is choosing a version-control platform, like GitHub, with significant trade-offs in terms of centralization and productivity. Without agreed upon Values, there's no clear way to navigate these decisions without lengthy debate or stepping back to revisit our Values and priorities before proceeding.
			- To ensure we're always equipped with the basic social contract needed to self-organize effectively, we build consensus around our Values early on, and evolve them over time as needed.
	- Quality Trade-offs in the toolkit:
		- Expediency/Participation
		- Immutability/Adaptability
		- Determinism/Discretion
		- 
	- [Full pdf here](attachments/PL_Toolkit_Report_v7.pdf)

content template:

%% Be sure to customize headings %%

## Purpose & Context

%% Explain the purpose of this directory and its role in the broader knowledge base. What type of content belongs here? How does this content relate to the overall mission? Provide enough context for users to understand why this directory exists. %%

## Content Organization

%% Explain how content is organized within this directory. Are there sub-directories? What naming conventions or organizational principles are used? This helps users navigate and understand the structure. %%

## Key Resources

%% List and briefly describe the most important or frequently accessed resources in this directory. This section provides quick access to essential content. %%

- **[Resource Name](tools/templates/layouts/link.md)**: Brief description
- **[Resource Name](tools/templates/layouts/link.md)**: Brief description
- **[Resource Name](tools/templates/layouts/link.md)**: Brief description

## Related Directories

%% Connect this directory to related areas of the knowledge base. This helps users see the broader context and navigate between related content areas. %%

- **[Related Directory](path/to/related-directory)**: How it relates to this content
- **[Related Directory](path/to/related-directory)**: How it relates to this content
