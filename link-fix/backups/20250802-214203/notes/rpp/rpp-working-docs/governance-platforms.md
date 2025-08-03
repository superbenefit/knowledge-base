---
title: Governance Platforms
description: A pattern for using dedicated software platforms that provide the infrastructure for discussion, proposal creation, and voting in decentralized organizations.
url: 
tags:
  - patterns
  - governance
  - tooling
publish: "true"
type: pattern
protocols: 
---
# Governance Platforms

_A pattern for using dedicated software platforms that provide the infrastructure for discussion, proposal creation, and voting in decentralized organizations._

## Context

This pattern applies to any DAO or decentralized community that has matured beyond making decisions in informal chat groups. Once a need arises for structured proposals, transparent debate, auditable voting records, and a single source of truth for governance activities, the adoption of one or more dedicated platforms becomes necessary. These platforms serve as the digital "town squares," "forums," and "voting booths" of the organization, providing the essential infrastructure for legitimate, scalable governance.

---

## Challenges

Without a dedicated governance platform or stack, DAOs face significant operational and legitimacy challenges:

*   **Disorganization and Lost Context:** Important discussions and informal polls are often scattered across Discord channels or Telegram threads, making it impossible to track the history of a decision or for new members to get up to speed.
*   **Lack of a Formal Process:** There is no clear, standardized way for a member to formulate an idea, present it for debate, and move it to a formal vote. This leads to confusion and inconsistency.
*   **Inaccessibility:** Raw on-chain governance, which involves interacting directly with smart contracts, is intimidating and inaccessible to the vast majority of community members.
*   **High Barrier to Participation:** If the process of debating and voting is cumbersome, voter apathy increases dramatically. A smooth user experience is critical for engagement.
*   **Lack of Transparency and Auditability:** It's difficult to maintain a clear, immutable, and publicly accessible record of all proposals and their outcomes, which is essential for organizational legitimacy.

---

## Solution Framework

The solution is not to adopt a single platform, but to compose a **Governance Stack** where different platforms are used for distinct stages of the decision-making lifecycle. This creates a clear pipeline that takes an idea from conception to execution.

1.  **Phase 1: Discussion & Deliberation (The Forum)**
    *   **Purpose:** This is the "pre-proposal" stage for unstructured ideation, debate, and community feedback. It's where ideas are refined and support is built.
    *   **Common Platforms:** **Discourse, Commonwealth.** These platforms provide long-form, threaded discussion environments that are ideal for deep conversations.

2.  **Phase 2: Signaling & Consensus (The Gasless Poll)**
    *   **Purpose:** Once an idea is well-defined, a non-binding "signaling" vote is used to gauge community sentiment formally. Because these votes are off-chain, they are gas-free, encouraging maximum participation.
    *   **Common Platform:** **Snapshot.** It has become the de-facto standard for off-chain, token-weighted voting.

3.  **Phase 3: On-Chain Voting & Execution (The Binding Vote Interface)**
    *   **Purpose:** This is the final, binding stage for proposals that have passed the previous gates. These platforms provide a user-friendly frontend to interact with the DAO's on-chain governance contracts (e.g., a Governor or Safe contract).
    *   **Common Platforms:** **Tally.** They display on-chain proposals, show delegate leaderboards, and allow users to cast their binding on-chain votes with their wallets.

By combining these platforms, a DAO can create a robust and transparent governance pipeline: an idea is born on Discourse, tested on Snapshot, and finally ratified and executed via Tally.

---

## Implementation Considerations

*   **Start Simple, Evolve:** A new DAO does not need a complex on-chain voting system from day one. It is often best to start with a forum (Discourse/Commonwealth) and a signaling tool (Snapshot), with execution handled by a trusted multi-sig. The DAO can "progressively decentralize" to a more formal on-chain voting system as it matures.
*   **Integration is Key:** The user experience is vastly improved when the platforms are well-integrated. A proposal on Tally should always link back to its corresponding discussion on Discourse and its signaling vote on Snapshot. This provides the full context for voters.
*   **User Onboarding and Education:** DAOs must actively teach their members how to use the governance stack. This includes creating guides, tutorials, and providing support for members who are new to the process.

---

## References

*   **[on-chain-vs.-off-chain-governance](/notes/rpp/rpp-working-docs/on-chain-vs.-off-chain-governance.md):** This pattern provides the conceptual underpinning for *why* a multi-platform stack is necessary, separating the domains of signaling and execution.
*   **[token-based-governance](/notes/rpp/rpp-working-docs/token-based-governance.md):** Platforms like Snapshot and Tally are the primary user interfaces for exercising token-based voting rights.