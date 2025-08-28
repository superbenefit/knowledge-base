---
title: Burner Wallets
description: Using disposable crypto addresses for privacy payments
author:
  - ananth
tags: 
harvester: 
curator: 
publish: "false"
type: practice
scale:
  - collaboration
  - constituency
  - coordination
  - network
phase:
  - formation
  - organization
  - coordination
functions:
  - payments
  - privacy
qualities:
  - privacy
  - decentralization
  - autonomy
primitives: 
patterns:
  - privacy-payments
---

Burner wallets are temporary, single-purpose cryptocurrency wallets to enhance privacy and security for specific transactions.

---

## Why Use Burner Wallets?

In the transparent world of public blockchains, every transaction is recorded and potentially traceable. This can link a user's entire financial history to a single pseudonymous address if care is not taken. For individuals engaging in the crypto ecosystem, this presents several challenges:

- **Privacy Exposure:** Connecting a primary wallet, which might hold significant assets or a long transaction history, to a new or unaudited decentralized application (dApp), or an unknown counterparty can inadvertently reveal more information about the user's holdings and activities than desired.
    
- **Security Risks:** Interacting with new smart contracts always carries a risk of exploits or malicious code. If a primary wallet with substantial assets is connected and approves a malicious transaction, the potential for loss is significant.
    
- **Doxxing Concerns:** Certain on-chain activities might inadvertently link a pseudonymous address to a real-world identity, which users may wish to avoid for specific interactions.
    
- **Operational Simplicity for Specific Tasks:** Sometimes, a user needs a clean wallet for a single purpose, like participating in a specific event, or testing a new feature, without cluttering their main wallet's transaction history.
    
Burner wallets provide a straightforward solution to compartmentalize risk and activity, offering a layer of operational security and privacy for discrete on-chain actions.

### Solution Context

While various privacy-enhancing technologies like mixers (e.g., Tornado Cash) or privacy coins (e.g., Monero, Zcash) offer robust anonymity, they can be complex to use, may have legal ambiguities in certain jurisdictions, or might be overkill for simple, everyday interactions where the primary goal is pseudonymity and risk isolation rather than complete untraceability. Burner wallets offer a simpler, more accessible approach:

- **Compared to Main Wallet Usage:** Directly using a main wallet for all activities offers convenience but maximizes privacy and security risks. A single compromised dApp interaction or a revealing transaction can have broad consequences.
    
- **Compared to Hardware Wallets:** Hardware wallets provide excellent security for storing primary assets but are not typically used for frequent, small, or experimental transactions due to the added steps involved. Burner wallets are usually software-based for quick deployment.
    
- **Compared to Privacy Coins/Mixers:** These aim for strong, cryptographic untraceability. Burner wallets aim for unlinkability and risk compartmentalization by creating a new, separate identity for a specific purpose. The privacy comes from the operational practice of using a fresh, unfunded (or minimally funded from a non-primary source like an exchange) address and then abandoning it.

Burner wallets are thus a practical operational security (OpSec) technique for everyday crypto users, striking a balance between usability, privacy enhancement, and security risk mitigation for specific scenarios.

## How Burner Wallets Work

The principle behind burner wallets is to create a new, independent wallet (a new private/public key pair) for a specific, limited use-case. The lifecycle typically involves:

1. **Creation:** A new wallet address is generated using any standard wallet software (e.g., MetaMask, Rabby, or a mobile wallet that supports multiple accounts). This process is instant and requires no personal information.
    
2. **Funding (Minimal):** A small amount of cryptocurrency, just enough to cover the intended transaction(s) and associated gas fees, is transferred to the burner wallet. Critically, to maximize privacy, this funding should ideally come from a source not directly linked to the user's main holdings, such as a centralized exchange withdrawal or through a privacy-preserving intermediary if higher anonymity is required.
    
3. **Usage:** The burner wallet is then used to interact with the specific dApp, smart contract, or to receive a payment. Because it's a fresh wallet with no prior history, it doesn't carry any baggage from the user's other on-chain activities.
    
4. **Defunding (Optional but Recommended):** If any valuable assets (e.g. remaining tokens) are in the burner wallet after the intended use, they should be transferred out to a more secure, long-term wallet or another intermediary address.
    
5. **Abandonment:** Once the specific purpose is fulfilled and any valuable assets are moved, the burner wallet is "burned" – meaning its private keys are discarded, and the wallet is no longer used. It's crucial not to reuse burner wallets for unrelated purposes, as this would defeat their privacy and compartmentalization benefits.

This process ensures that the specific transaction is isolated, and if the burner wallet's address or the contract it interacted with is compromised or scrutinized, it doesn't directly lead back to the user's primary identity or main asset pool.

### Affordances

Burner Wallets offer several key advantages:

- **Enhanced Privacy:** By using a fresh address for specific interactions, users can avoid linking those activities to their main, more established on-chain identity.
    
- **Improved Security:** Limits the "blast radius." If a burner wallet interacts with a malicious smart contract or its keys are compromised, only the minimal funds within that wallet are at risk, not the user's entire portfolio.
    
- **Low Commitment & Disposability:** Easy and free to create, and equally easy to abandon, making them ideal for one-off or short-term needs.
    
- **Control over On-Chain Footprint:** Enables users to be more deliberate about what activities are associated with which addresses.

### Risks and Considerations

While beneficial, using burner wallets also comes with considerations:

1. **Key Management:** Although intended to be discarded, if a burner wallet needs to be used for a slightly longer period or holds an asset temporarily, the private key must be managed securely until abandonment. Losing it means losing access to anything in that wallet.
    
2. **Transaction Costs (Gas Fees):** Funding a burner wallet and potentially transferring assets out of it incurs gas fees. This can add up if burner wallets are used very frequently for small transactions.
    
3. **Human Error:** Users might accidentally send more funds than intended to a burner wallet, or forget to transfer out valuable assets before discarding the keys.
    
4. **Source of Funds Traceability:** If a burner wallet is funded directly from a user's main, known wallet, it can still be linked through chain analysis. For stronger privacy, funding should come from exchanges or other less directly attributable sources.
    
5. **Not a Panacea for Privacy:** Burner wallets are an OpSec measure. Sophisticated chain analysis might still find links, especially if multiple burner wallets are funded from the same intermediate source without further obfuscation. They do not offer the same level of anonymity as dedicated privacy protocols.
    
6. **Operational Overhead:** Creating, funding, and managing even temporary wallets adds a layer of complexity compared to using a single wallet for everything.

Despite these considerations, the benefits of enhanced privacy and security for specific interactions often outweigh the minor operational overhead for many crypto users.

