---
title: Quadratic Voting
description: A voting mechanism where participants pay for votes on a quadratic scale, designed to better reflect the intensity of individual preferences and mitigate the influence of large, dominant groups.
url: 
tags:
  - patterns
  - governance
  - public-goods
publish: true
type: pattern
protocols: 
---
# Quadratic Voting

_A voting mechanism where participants pay for votes on a quadratic scale, designed to better reflect the intensity of individual preferences and mitigate the influence of large, dominant groups._

## Context

This pattern applies to organizations seeking a more equitable and expressive form of decision-making than simple majority or token-weighted voting. It is particularly powerful in contexts where the goal is to identify outcomes that provide the most value to the most people, rather than simply what a vocal or wealthy majority prefers. It's an ideal framework for allocating collective resources, funding public goods, or in any situation where protecting the interests of passionate minorities is critical to the health of the ecosystem. It represents a move away from measuring *who* wants something towards measuring *how much* a community collectively wants something.

---

## Challenges

This pattern is a direct response to the inherent flaws in traditional voting mechanisms:

*   **Tyranny of the Majority:** In a "one person, one vote" system, a 51% majority with a weak preference can consistently overrule a 49% minority with a very strong preference, leading to suboptimal outcomes and alienation.
*   **Plutocracy in Token Voting:** In a "one token, one vote" system, governance is skewed towards whales, whose interests may not align with the broader community. This is a central challenge that the [token-based-governance](notes/rpp/rpp-working-docs/token-based-governance.md) pattern must address, and Quadratic Voting offers a direct alternative.
*   **Lack of Nuance:** Most voting systems are binary (yes/no) and fail to capture the *intensity* of preference. They don't distinguish between a casual "yes" and a deeply-held conviction, yet both are counted equally.

---

## Solution Framework

The core mechanism of Quadratic Voting (QV) is that the cost to cast multiple votes for a single option increases quadratically. A voter is allocated a budget of "voice credits" to spend across multiple proposals.

The cost (`C`) to buy a number of votes (`N`) is `C = N²`.
*   1 vote = 1² = 1 credit
*   2 votes = 2² = 4 credits
*   3 votes = 3² = 9 credits
*   10 votes = 10² = 100 credits

This has a profound effect: it makes it progressively and exponentially more expensive to express a strong preference on a single issue. This encourages participants to spread their limited voice credits across multiple issues they care about, rather than dominating a single vote.

The most prominent application of this concept is **Quadratic Funding (QF)**, a method for funding public goods. In a QF round:
1.  A central matching pool of funds is established.
2.  Community members donate to projects they support.
3.  The matching pool then matches these individual contributions based on a quadratic formula.

The key insight is that projects which receive support from a **large number of unique individuals** receive a dramatically higher share of the matching funds than projects that receive the same total donation amount from just a few wealthy donors. It optimizes for broad, grassroots support.

---

## Implementation Considerations

Implementing Quadratic Voting effectively is highly dependent on solving one critical prerequisite.

*   **Sybil Resistance (Crucial Requirement):** The entire model collapses if a single user can create multiple fake identities ("Sybils") to cast many cheap "first" votes. Therefore, a robust Sybil resistance mechanism is not optional; it is a foundational necessity. Common approaches include:
    *   **Proof of Personhood Systems:** BrightID, Proof of Humanity.
    *   **Social Trust Graphs:** Using existing social connections to verify uniqueness.
    *   **Passport-style Aggregators:** Gitcoin Passport, which aggregates on-chain and off-chain activities into a "uniqueness" score.

*   **Collusion:** While harder to solve, sophisticated actors can agree to coordinate their votes to bypass the quadratic cost. This is an ongoing area of research, with some platforms attempting to detect and penalize such behavior.

*   **User Experience (UX):** The concept can be non-intuitive. The interface must clearly show users their available voice credits, the "cost" of their votes, and the impact of their decisions.

*   **Scope:** QV is not always the best tool for every decision. It excels at resource allocation and budget planning. For simple binary (yes/no) governance proposals, a standard voting mechanism might be simpler and sufficient.

### Examples & Case Studies

*   **Gitcoin Grants:** This is the most famous and successful implementation of Quadratic Funding. For years, it has used the QF mechanism to distribute millions of dollars in matching funds to open-source and Ethereum ecosystem projects based on the collective will of the community. It is the canonical example of the pattern in action.

*   **Optimism's Retroactive Public Goods Funding (RetroPGF):** Optimism has committed hundreds of millions of dollars to funding public goods through its RetroPGF rounds. While it uses a system of "badgeholders" to vote, the underlying principle is quadratic: rewarding projects that have provided broad, demonstrated value to the ecosystem.

*   **Downtown Colorado:** In a real-world experiment, the Democratic Party in a Colorado district used a QV app to decide their platform planks, demonstrating the pattern's applicability beyond the crypto space.

---

## References

*   **[token-based-governance](notes/rpp/rpp-working-docs/token-based-governance.md)**: Quadratic Voting is often positioned as a direct alternative or remedy to the plutocratic tendencies inherent in the "one token, one vote" model.
*   **Sybil Resistance Mechanisms:** QV is fundamentally dependent on a reliable solution for proving unique identity. Its implementation is therefore tightly coupled with patterns like Proof of Personhood.
*   **Council Governance:** A council could be elected using a QV system. This would ensure that council members have broad support across the community, rather than being elected by a single powerful faction.