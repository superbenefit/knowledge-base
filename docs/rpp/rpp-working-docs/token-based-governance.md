---
group: rpp
title: Token-Based Governance
description: A governance framework where influence over decisions is allocated based on the quantity of a specific token a participant holds.
url: 
tags:
  - patterns
  - governance
  - tokenomics
publish: true
type: pattern
protocols: 
---
# Token-Based Governance

_A governance framework where influence over decisions is allocated based on the quantity of a specific token a participant holds._

## Context

This is arguably the most foundational and widespread governance pattern in Web3. It applies to DAOs and decentralized protocols that need to coordinate a large, often pseudonymous group of stakeholders. It is particularly relevant for networks with a treasury or that generate revenue, as the governance token typically represents a right to steward those collective assets. The core premise of this pattern is to align decision-making power with economic "skin-in-the-game," under the assumption that those with the largest financial stake are most incentivized to ensure the long-term success of the network.

---

## Challenges

While simple in principle, the "one token, one vote" model presents several well-documented challenges that must be actively managed:

*   **Plutocracy and Whale Dominance:** The most significant risk is that governance can be controlled by a small number of wealthy token holders ("whales"). This can lead to the interests of the broader community being overlooked and can disincentivize smaller holders from participating, as they feel their vote is meaningless.
*   **Voter Apathy:** Many token holders view their assets as purely financial investments and lack the time, interest, or expertise to participate in governance. This often leads to low voter turnout, making it difficult to reach quorum and pass proposals.
*   **Short-Termism:** Without additional safeguards, token holders may be incentivized to vote for proposals that offer short-term personal gain (e.g., extracting treasury funds) at the expense of the protocol's long-term sustainability.
*   **Expertise vs. Stake:** The size of one's financial stake is not a proxy for expertise. Critical decisions about protocol upgrades, risk parameters, or strategy require deep knowledge, which a majority of token holders may not possess.

---

## Solution Framework

The core mechanism involves allocating voting power proportionally to the number of governance tokens a participant holds. To be effective and mitigate its inherent challenges, this basic model is nearly always augmented with a combination of other mechanisms:

1.  **Delegation:** This is the most critical enhancement. Token holders can delegate their voting power to active, informed community members or leaders ("delegates") who vote on their behalf. This addresses voter apathy by allowing passive holders to still be represented, and it helps concentrate influence in the hands of more engaged and knowledgeable participants.

2.  **Vote-Escrow (ve) / Time-locking:** To combat short-termism, protocols can require users to lock their tokens for a specific period to gain voting power. The longer the lock-up period, the greater the voting power assigned. This "vote-escrowed" model ensures that those with the most influence have made a long-term commitment.

3.  **Quorum and Proposal Thresholds:**
    *   **Proposal Threshold:** A minimum number of tokens required to submit a formal proposal, preventing spam.
    *   **Quorum:** A minimum percentage of the total token supply that must participate in a vote for it to be considered valid. This ensures that decisions have a baseline level of support from the community.

4.  **Hybrid Structures:** Token-based voting is often used for the highest-level decisions (e.g., budget approvals, constitutional changes), while other bodies, like elected councils, are empowered by token holders to handle more frequent or specialized operational decisions.

---

## Implementation Considerations

The success of a token-based governance system is highly dependent on its initial design and ongoing support.

*   **Token Distribution:** The allocation of the token is paramount. A concentrated initial distribution can entrench plutocracy from the start.
*   **Delegate Programs:** A healthy delegate ecosystem is vital. This means creating transparency around delegates, making it easy for token holders to discover and choose who to delegate to, and potentially even compensating delegates for their governance work.
*   **Off-Chain First:** As a best practice, nearly all token-based governance systems should adopt an off-chain first approach using tools like Snapshot for signaling votes before moving to a binding on-chain action.

---

## References

*   **[on-chain-vs.-off-chain-governance](docs/rpp/rpp-working-docs/on-chain-vs.-off-chain-governance.md):** This pattern provides the technical framework for how token votes are actually conducted and executed.
*   **Delegated Governance:** A crucial sub-pattern used to address voter apathy and the expertise gap in token-based systems.
*   **Council Governance:** Often used in conjunction with token governance, where token holders elect a council to handle more specialized or rapid decisions.
*   **[quadratic-voting](docs/rpp/rpp-working-docs/quadratic-voting.md):** A contrasting pattern that aims to solve the plutocracy problem by making an individual's subsequent votes more "expensive" than their first, thus promoting a more egalitarian distribution of power.