---
title: Treasury
description: A collectively managed, on-chain pool of digital assets that a DAO uses to fund operations, incentivize participation, and advance its shared purpose.
harvester: lexicon-bot
publish: true
type: tag
aliases:
  - "#treasury"
  - "#treasuries"
tags:
  - "resources"
  - "governance"
  - "daos"
---

*In the context of a DAO, a treasury is a collectively-owned and governed pool of on-chain assets, managed through smart contracts, which serves as the primary financial resource for funding operations, rewarding contributors, and achieving the organization's purpose.*

Unlike a traditional corporate bank account controlled by a few executives, a DAO treasury is transparent and programmatically controlled by the organization's members. All funds, transactions, and governance decisions affecting the treasury are typically recorded on a public blockchain, providing unprecedented transparency. The treasury is not just a digital vault; it's an active, programmable system. The rules for how its funds can be allocated are encoded in smart contracts, making the treasury a direct manifestation of the DAO's governance structure and values.

The health, size, and management of its treasury are critical indicators of a DAO's viability and operational capacity. It represents the collective economic power of the community and is the engine that translates ideas and proposals into funded actions, making it the focal point for much of a DAO's governance activity.

---

## Uses of "Treasury"

### As a Central Component of DAO Frameworks

As highlighted in notes/links/to-review/A Pocket Guide to DAO Frameworks, different technical frameworks are often designed around specific models of treasury management. The choice of framework dictates who can access treasury funds and how.
- The **Moloch** framework, for example, centers on grant-giving, with a "Ragequit" mechanism that allows members to exit by claiming their proportional share of the treasury.
- Frameworks like **Aragon** or those using **OpenZeppelin Governor** provide extensive tooling for token-holder voting on proposals that directly allocate treasury funds for various purposes, from developer grants to liquidity provision.

### As the Engine of Scalable Operations

In scalable network models, as described in artifacts/articles/network-evolution 1/[Building DAOs as scalable networks](../artifacts/articles/network-evolution/Building DAOs as scalable networks.md), the treasury is the critical resource that fuels the entire system. It is managed through a multi-layered governance approach:
- **Community Governance** acts as a safeguard, holding ultimate authority by approving the overall operational budget from the main treasury. This ensures all operations remain aligned with the network's long-term purpose.
- **Operational Governance**, carried out by coordinating [Cells](drafts/test-resources/test-pattern.md), then has the autonomy to allocate this budgeted capital to specific projects and contributors, enabling agility and innovation at the team scale.

### As the Subject of Governance and Resource Allocation

The treasury is the primary [shared resource](tags/resources.md) that a DAO's [governance](tags/governance.md) processes are designed to manage. Collective decision-making is fundamentally about how to best allocate the treasury's assets to achieve the DAO's goals. Proposals, votes, and debates within a DAO very often revolve around a single question: "How should we use our collective treasury?" This makes the treasury the practical nexus of power, coordination, and purpose within the organization.

## Related Concepts

- [Governance](tags/governance.md): The set of processes used to manage and allocate the treasury's assets.
- [DAOs](tags/daos.md): The organizations that collectively own and are powered by a treasury.
- [Resources](tags/resources.md): The treasury is the primary financial resource pool for a DAO.
- [Wallets](tags/wallets.md): The treasury itself is often a multi-signature wallet or smart contract, and members use their personal wallets to vote on its use.
<<<<<<< HEAD
- [Cells](drafts/test-resources/test-pattern.md): The autonomous operational units often funded by the DAO's treasury to perform work.
- [A Pocket Guide to DAO Frameworks](drafts/trash/A Pocket Guide to DAO Frameworks.md): An overview of technical systems that define how a treasury can be managed.
=======
- Cells: The autonomous operational units often funded by the DAO's treasury to perform work.
- notes/links/to-review/A Pocket Guide to DAO Frameworks: An overview of technical systems that define how a treasury can be managed.
>>>>>>> ed3965f10697610f55ce4cd0e9e9f7e5f60c486a
