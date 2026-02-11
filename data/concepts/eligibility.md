---
title: Eligibility
description: The criteria, conditions, or qualifications that determine whether an agent can participate in activities, access resources, or exercise rights within decentralized systems.
harvester:
  - rathermercurial.eth
publish: true
type: concept
aliases:
  - "#eligibility"
tags:
  - governance
  - permissions
  - agreements
---

_Eligibility refers to the set of criteria, conditions, or qualifications that determine whether an individual, group, or entity can participate in specific activities, access particular resources, or exercise certain rights within a system or network._

In [decentralized](data/concepts/decentralization.md) contexts, eligibility mechanisms establish boundaries that help balance openness with necessary constraints. They create frameworks for determining who can participate in [governance](data/concepts/governance.md), receive resources, or take on specific roles while maintaining alignment with organizational purpose. Unlike traditional access controls that often rely on centralized gatekeepers, decentralized eligibility systems frequently leverage transparent, verifiable credentials, on-chain history, or cryptographic proofs to establish qualification without requiring trusted intermediaries.

Well-designed eligibility systems balance inclusivity with protection against exploitation or capture. They establish clear, fair criteria that align with an organization's [values](data/concepts/values.md) and purpose while remaining flexible enough to adapt to changing conditions. The mechanisms used to determine and verify eligibility represent critical governance decisions that fundamentally shape who has voice, influence, and access in decentralized systems.

---

## Uses of "Eligibility"

### Eligibility in DAO Governance

In DAO governance contexts, eligibility defines who can participate in various [decision-making](data/concepts/decisions.md) processes. These criteria help ensure that those with appropriate context, stake, or relevant experience can influence decisions while protecting against potential attacks or manipulation.

Common governance eligibility mechanisms include:

- **Token-based eligibility**: Requiring ownership of governance tokens to participate in voting
- **Reputation-based eligibility**: Using contribution history or [community](data/concepts/community.md) standing to determine voting weight
- **Proposal thresholds**: Setting minimum requirements (stake, endorsements, reputation) for submitting proposals
- **Delegation qualification**: Establishing criteria for who can receive delegated voting [power](data/concepts/power.md)
- **Committee membership**: Determining who can serve in specialized governance roles

As discussed in Community Governance, effective governance often implements different eligibility requirements at different scales, with more stringent criteria for high-impact decisions and broader [participation](data/concepts/participation.md) for constituency-level direction setting.

### Eligibility in Resource Allocation

In the context of resource distribution and funding, eligibility defines the conditions under which individuals or projects qualify for support. These criteria help direct resources toward initiatives aligned with a network's purpose while ensuring fair, transparent allocation processes.

Examples include:

- **Grant eligibility**: Qualifications required to receive funding from community treasuries
- **Retroactive funding**: Criteria for receiving rewards based on demonstrated impact
- **Treasury access**: Requirements for initiating or approving expenditures from shared resources
- **Quadratic funding matching**: Conditions for projects to participate in matching fund distributions

The Privacy-Preserving Crypto Payments pattern demonstrates how eligibility can be verified while protecting participant privacy in humanitarian contexts, using smart contracts to validate qualification without exposing sensitive identity information.

### Eligibility in Roles and Permissions

Within decentralized organizations, eligibility determines who can take on specific responsibilities, access particular resources, or execute certain functions. These systems create accountable permission structures without requiring centralized authority.

In the Cell working group pattern, eligibility for different roles is documented in the team's state, creating transparent criteria for both internal members and external stakeholders. This might include:

- **Skill or knowledge requirements**: Technical capabilities needed for specialized roles
- **Contribution history**: Track record of engagement required for responsible positions
- **Attestations**: Verification or endorsements from existing participants
- **Time commitment**: Availability requirements for consistent participation

As noted in [Minimum Viable Permissionless-ness](../docs/dao-primitives/articles/Minimum Viable Permissionless-ness.md), effective decentralized organizations balance permissionless access to the network with appropriate eligibility criteria for resource allocation and decision-making authority.

## Related Concepts

- **[Permissions](data/concepts/permissions.md)**: Controls determining what actions agents can take within a system, often based on eligibility
- **[Attestations](data/concepts/attestations.md)**: Verified claims that can establish eligibility credentials
- **[Consent](data/concepts/consent.md)**: Decision-making approaches that consider objections when determining eligible proposals
- **[Agreements](data/concepts/agreements.md)**: Formalized understandings that may include eligibility criteria as part of their terms
- **[Nfts](data/concepts/nfts.md)**: Non-fungible tokens that can represent membership or eligibility credentials
- **[Agents](data/concepts/agents.md)**: Decision-making entities that may be subject to eligibility requirements

## References and Resources

- [Ethereum Attestation Service](https://attest.sh/): Infrastructure for creating verifiable eligibility credentials
- [Quadratic Funding Principles](https://wtfisqf.com/): Eligibility in public goods funding contexts
- [OpenZeppelin AccessControl](https://docs.openzeppelin.com/contracts/4.x/access-control): Smart contract patterns for implementing eligibility checks