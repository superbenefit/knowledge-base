---
title: Sarafu.Network Technical Appendix
description: Technical considerations, limitations, and workarounds for using Sarafu.Network as the digital infrastructure for Community Connection & Commitment Commons
author: ICS Team
tags:
  - sarafu
  - technical
  - implementation
  - blockchain
  - limitations
aliases:
  - Sarafu Technical Details
  - Sarafu Limitations
publish: "false"
type: technical
---

# Sarafu.Network Technical Appendix

This appendix outlines technical considerations when implementing Community Connection & Commitment Commons on Sarafu.Network, including platform limitations and potential workarounds.

## Current Platform Limitations

### 1. Expiration System
- **Current**: Sarafu uses decay/demurrage with continuous half-life
- **Our Need**: 3-month cliff expiration for pilot simplicity
- **Workaround**: Use spreadsheet tracking alongside Sarafu for expiration management in pilot phase
- **Future Solution**: Fork and modify Sarafu code or implement custom UI solution

### 2. Transaction Fees
- **Current**: Only charges fees on swaps between different Commitment Voucher types within a pool
- **Our Preference**: Per-transaction fees on Voucher exchanges
- **Workaround**: Design pool structure to create swap opportunities that trigger fees
- **Future Solution**: Implement custom smart contract for desired fee structure

### 3. Partial Balance Swaps
- **Current**: Cannot swap entire balance at once; must specify exact Voucher pairs
- **Impact**: Multiple transactions needed if holding various Voucher types
- **Example**: Swapping tomato, carrot, and potato Vouchers requires three separate transactions
- **Workaround**: Educate users on batching transactions; consider UI improvements
- **Future Solution**: Develop all-balance swap function in custom interface

### 4. Decay Rate Standardization
- **Current**: Each Commitment Voucher type can have different decay rates
- **Our Preference**: Uniform decay rate across all Vouchers in a pool
- **Status**: Currently no way to lock standardized rates across the network
- **Workaround**: Manual governance policies to maintain consistent rates
- **Future Solution**: Fork Sarafu to implement locked standardization or develop UI controls

## Implementation Workarounds

### Commitment Voucher Limits Management
Since Sarafu has flexibility in Voucher issuance:
- **Issuance Tracking**: Implement separate tracking system to monitor member issuance
- **Balance Monitoring**: Use custom alerts for tracking balance limits
- **Governance Layer**: Manual review of issuance levels until automated solutions available

### Expiration Handling Options
1. **Parallel Tracking**: Maintain spreadsheet for exact expiration dates
2. **UI Layer**: Build custom interface that translates continuous decay into cliff expiration display
3. **Education**: Train users to understand decay system and its relationship to our 3-month target

## Available Solutions

### Open Source Control
- **Forking**: Sarafu is open-source and can be forked for custom modifications
- **Support Offered**: Sarafu team has offered assistance with deployment on new chains (e.g., Gnosis)
- **Development Resources**: ICS network has developers willing to work on customizations

### Chain Migration Options
- Current: Celo blockchain
- Option: Deploy fork on Gnosis chain for improved performance
- Alternative: Consider other EVM-compatible chains based on needs

## Recommended Approach

### Phase 1: Pilot Adaptation
- Work with current Sarafu limitations
- Use spreadsheet for expiration tracking
- Manual enforcement of standardized decay rates
- Accept multiple transactions for full balance swaps

### Phase 2: Technical Evolution
- Evaluate need for forking vs. UI solutions
- Prioritize most impactful modifications
- Leverage developer network for implementation
- Consider Gnosis deployment for improved performance

### Phase 3: Custom Development
- Implement prioritized custom features
- Develop standardized UI for all communities
- Create seamless integration with local tools
- Maintain compatibility with original Sarafu ecosystem

## Technical Resources

### Development Support
- Sarafu core team consultation
- ICS developer network
- Open-source contributor community

### Documentation
- Sarafu GitHub repository
- API documentation
- Smart contract specifications

## Future-Proofing Considerations

### Modularity
Design system architecture to:
- Allow incremental upgrades
- Maintain backward compatibility
- Support multiple deployment options
- Enable easy integration with other platforms

### Standards Alignment
Ensure compatibility with:
- EVM standards
- Web3 wallet protocols
- Existing regenerative finance networks
- Broader solidarity economy tools

---

*This technical appendix will be updated as the implementation progresses and new solutions are discovered.*