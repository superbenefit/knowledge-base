---
type: concept
title: Attestations
description: Verified digital statements that provide cryptographically secured proof of claims, relationships, or properties, enabling trusted information sharing without centralized authorities.
harvester:
  - shannonlanigan.eth
  - rathermercurial.eth
tags:
  - actions
aliases:
  - "#attestations"
publish: true
---

_Attestations are cryptographically verified digital statements or claims that establish proof of specific facts, relationships, or properties, enabling trust and [transparency](data/concepts/transparency.md) in [decentralized](data/concepts/decentralization.md) systems without requiring centralized authorities._

Attestations serve as fundamental building blocks for trust in digital environments by providing verifiable evidence that specific conditions have been met, relationships exist, or claims are valid. Unlike traditional certification systems that rely on centralized authorities, cryptographic attestations leverage public-key cryptography and distributed ledgers to create tamper-resistant records that can be independently verified by any party. This decentralized approach to verification enables more open, transparent, and censorship-resistant systems for establishing trust.

In web3 ecosystems, attestations create the infrastructure for reputation, identity, and accountability while preserving user sovereignty and data control. By separating the verification of information from its storage and presentation, attestation systems allow selective disclosure of credentials, minimizing data exposure while maximizing utility. This capability bridges traditional real-world systems with decentralized digital infrastructure, creating interoperable layers of trust across domains.

---

## Uses of "Attestations"

### General Attestations

In traditional contexts, attestations are formal validations that confirm the truth or authenticity of statements, documents, or qualifications. These include notarized documents, academic credentials, professional certifications, and legal affidavits. Their validity typically relies on trusted third parties and institutional reputation.

Traditional attestations serve critical social functions by reducing information asymmetry and establishing reliable signals of quality, expertise, or authorization. However, they often suffer from verification challenges across institutional boundaries, susceptibility to forgery, and limitations in digital environments.

### Cryptographic Attestations

In web3 systems, cryptographic attestations leverage [blockchain](data/concepts/blockchain.md) technology and public-key cryptography to create tamper-evident, verifiable claims without relying on centralized authorities. These attestations are issued using decentralized identifiers (DIDs), signed cryptographically, and often recorded on public blockchains to ensure transparency and immutability.

Platforms like Ethereum Attestation Service (EAS) provide standardized infrastructure for creating, managing, and verifying on-chain attestations. EAS enables composable, schema-based attestations that can represent virtually any type of claim while maintaining cryptographic verifiability. These systems support diverse applications including identity verification, credential issuance, reputation systems, and [governance](data/concepts/governance.md) [participation](participation.md).

As noted in the ecosystem: "At its core, attestation is simply evidence or proof of something. In the case of Web3, it contains digital signatures and cryptographic proofs that state a fact about an identity or entity. These proofs can be used to prove the identity of a user, confirm that a device or system is trustworthy, or to demonstrate that certain conditions have been met."

### Impact Attestations in Web3

Impact attestations represent a specialized application of attestation technology focused on documenting, verifying, and communicating social and environmental outcomes. These systems enable more transparent, verifiable reporting on impact initiatives while creating new mechanisms for directing resources toward effective interventions.

Impact attestation systems like Hypercerts and Karma GAP establish frameworks for capturing, verifying, and representing impact claims on-chain. These systems help address persistent challenges in the impact ecosystem including outcome verification, impact attribution, and the creation of markets for positive externalities.

Impact attestations typically involve three distinct roles:

#### Project Self-Reporting

Self-attestations are claims made directly by project implementers about their activities, outputs, and outcomes. These include project updates, progress reports, and impact claims asserted by the organizations or individuals conducting the work. While valuable for transparency, self-attestations carry inherent conflicts of interest that limit their standalone credibility.

Self-attestation mechanisms provide standardized formats for reporting progress, ensuring consistency across projects and enabling easier aggregation and analysis of impact data. They serve as the foundation for more robust verification by establishing documented claims that can be subsequently validated.

#### [Community](data/concepts/community.md) Verification

Validator attestations provide independent verification of impact claims through third-party confirmation. Community validators, experts, or affected stakeholders can corroborate specific outcomes, confirming that reported impacts genuinely occurred and meet quality standards. This creates a distributed verification layer that enhances credibility without requiring centralized certification bodies.

Validator attestation mechanisms often implement reputation systems, stake-based commitments, or sampling methods to ensure the integrity of verification processes. By creating transparent records of who validated what claims and under what conditions, these systems enable progressive trust-building over time.

#### Resource Provider Confirmation

Funder attestations document financial support and milestone verification within funded initiatives. Grant-making organizations or investors can confirm disbursement of resources, validate the completion of agreed deliverables, and attest to satisfactory due diligence processes. These attestations create transparent audit trails of resource flows and establish verified records of project performance.

Funder attestation mechanisms can streamline reporting requirements, automate conditional payments based on verified outcomes, and create portable records of project success that future funders can reference. This reduces redundant due diligence while establishing more objective measures of implementation quality and impact.

## Related Concepts

- **Resources**: Attestations serve as trusted information resources for decision-making about resource allocation and coordination
- **Privacy**: Modern attestation systems incorporate selective disclosure to protect sensitive information
- **Grants**: Attestations play a crucial role in grant verification and impact reporting
- **NFTs**: Non-fungible tokens can serve as on-chain representations of attestations
- **Decisions**: Verified attestations provide a foundation for more informed decision-making
- **Impact**: Impact attestations specifically document and verify social and environmental outcomes

## References and Resources

- [Ethereum Attestation Service (EAS)](https://attest.org/)
- [Hypercerts](https://www.hypercerts.org/)
- [Karma GAP Protocol](https://gap.karmahq.xyz/)
- [Disco Protocol](https://www.disco.xyz/)