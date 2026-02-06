

## Trust Zones

The discovery and design processes leverage [trust zones](https://blog.hatsprotocol.xyz/making-daos-work), a comprehensive framework for developing delegations for use with (but not exclusively) Hats Protocol. Trust Zones describe delegation containers used to regulate relationships with agents (people, groups, ai bots, etc.), and are described using seven dimensions of semi-structured data: responsibilities, resources, qualifications/eligibility, Alignment, Incentives, Constraints and Decision Model. 

We use the framing of trust zones here because 1.) It's an externally-validated name for a concept we used here but did not have a clear name for, and 2.) Like the use of "values" as priorities for navigating trade-offs in decisions, the term "trust zones" makes it clear where trust plays a role in the framework. Our community often asks where values and trust play a role in decentralized systems, so we want to make it explicit that we are encoding both values and trust as key design principles within the system (rather than slapping on performative policies over an otherwise typical institutional form). When we deploy infrastructure based around our own shared trust and values, these decisions become durable and resistant to influence without the consent of the group's own members. This is one way to become more "capture-resistant".

The Trust Zones framework is an independent expression of the Group State concept. The 7 dimensions of trust zones are functionally similar to the 3 dimensions of group state we use at SuperBenefit, so the two frameworks work nicely together. However it must be noted that the Primitives Framework is meant to be far simpler, giving only basic instruction for the use of decentralized coordination tools. Additionally, the Primitives Framework's use of "Values" in navigating key trade-offs is far more broad and flexible (and also less deep/nuanced) than the Trust Zones framework's "Delegation Trilemma". So it's important to judge whether the Trust Zones framework is actually a good jumping off point based on the user's personal perspective and organizational context.

These dimensions are similar in spirit to the Purpose, Practice, Progress structure for organizing group state parameters in the DAO Primitives Framework (with PPP being a simpler starting place for groups who might not be ready to fully develop their trust zones). 

### Gardnr Integration

A gardnr integration could be created by producing a structured discovery output with required parameters for analysis during Gardnr's analysis phase, allowing users to easily load their discovery report into gardnr for further assistance.

A deeper integration might be made by using gardnr for assistance during the discovery phase itself. However it should be notes that the trust zones and primitives frameworks diverge greatly in terms of scope, depth and use case. 

Gardnr's schema could also serve as a basis for developing an input schema for SuperBenefit's discovery process, Potentially allowing for asynchronous collection and reconciliation of discovery data. This would allow contributors to collect discovery data using different and/or passive means, compiling it until such time as it's complete enough to generate a discovery report.

#### Gardnr Trust Zone Configuration

```yaml
trust_zone:
  slug: string                    # kebab-case identifier (e.g., "treasury-committee")
  
  rfp:                           # Request for Proposal metadata
    label: string                # Human-readable name
    description: string          # Purpose and scope description
    principal: string            # Who is delegating authority
  
  parameters:                    # The seven Trust Zone parameters
    responsibilities: string     # What outcomes agents should achieve
    resources: string           # Assets and budgets under control
    agentQualifications: string # Who can be agents and how they're selected
    ownershipAlignment: string  # Stake and long-term alignment mechanisms
    incentives: string          # Compensation and reward structures
    constraints: string         # Limits and safeguards (hard rules)
    decisionModel: string       # How decisions are made within the zone
  
  mechanisms: [                  # Specific implementation mechanisms
    {
      label: string,             # Mechanism name
      description: string,       # How it works
      impacts: {                 # Trilemma impact scores (0-10 scale)
        effectiveness: number,
        cost: number,
        hardness: number
      }
    }
  ]
  
  trilemma:                     # Overall trilemma assessment
    effectiveness: "LOW|MEDIUM|HIGH"
    cost: "LOW|MEDIUM|HIGH" 
    hardness: "LOW|MEDIUM|HIGH"
    rationale: [string]         # Bullet points explaining the scores
    summary: string             # One-sentence trilemma summary
  
  risks: [                      # Identified risks and mitigations
    {
      category: "ALIGNMENT|OPERATIONAL|SECURITY|EFFICIENCY",
      description: string,       # What the risk is
      severity: "LOW|MEDIUM|HIGH|CRITICAL",
      mitigation: string        # How to address it (optional)
    }
  ]
  
  levers: [                     # Improvement recommendations
    {
      parameter: string,         # Which of the 7 parameters to adjust
      currentState: string,      # Current implementation
      proposal: string,          # Suggested improvement
      expectedShift: {           # Expected trilemma impact
        effectiveness: "increase|decrease|neutral",
        cost: "increase|decrease|neutral", 
        hardness: "increase|decrease|neutral"
      },
      tradeoffs: string         # What you give up for the improvement
    }
  ]

```


#### Gardnr Input Schema

This "de-facto schema" was generated by [Gardnr](https://gardnr.hatsprotocol.xyz/) as a suggested format for inputting organizational context to its chat interface:

```yaml
trust_zone_discovery:
  # Minimum required
  delegation_context: "..."
  decision_authority_scope: "..."
  resource_control: "..."
  decision_mechanism: "..."
  
  # Ideal complete (include whatever you collected)
  responsibilities: {...}
  resources: {...}
  agent_qualifications: {...}
  ownership_alignment: {...}
  incentives: {...}
  constraints: {...}
  decision_model: {...}
  organizational_context: {...}
  reference_materials: {...}
  
  # Meta information
  completeness_level: "HIGH|MEDIUM|LOW|MINIMAL"
  collection_method: "interview|document_analysis|survey"
  confidence_level: "high|medium|low"
  assumptions_made: ["list", "of", "assumptions"]
```

Expanded definitions:

```yaml
delegation_context:
  principal: text (required) # Who is delegating (e.g., "Uniswap DAO")
  agent_description: text (required) # Who receives authority (e.g., "Technical Advisory Board")
  delegation_purpose: text (required) # Why this delegation exists
  project_name: text (optional) # Name for the Trust Zone
responsibilities:
  primary_outcomes: text (required) # Main goals/KPIs
  behavioral_expectations: text (optional) # Soft rules, cultural norms
  success_metrics: text (optional) # How success is measured
  reporting_requirements: text (optional) # Communication expectations
  scope_boundaries: text (optional) # What's explicitly out of scope
resources:
  budget_amount: number (optional) # Specific dollar amount
  budget_currency: text (optional) # USD, ETH, protocol tokens
  budget_period: text (optional) # "monthly", "quarterly", "annual"
  asset_types: array[text] (optional) # ["treasury_funds", "protocol_tokens", "NFTs"]
  spending_authority: text (optional) # Limits and approval processes
  resource_renewal: text (optional) # How resources are replenished
agent_qualifications:
  selection_criteria: text (required) # How agents are chosen
  required_skills: array[text] (optional) # Technical, domain expertise
  token_requirements: text (optional) # Minimum holdings
  reputation_requirements: text (optional) # Past experience, credentials
  exclusion_criteria: text (optional) # Disqualifying factors
  term_length: text (optional) # How long agents serve
  removal_process: text (optional) # How agents can be removed
ownership_alignment:
  token_holdings: text (optional) # Required stake in protocol
  vesting_schedules: text (optional) # Lock-up periods
  skin_in_game: text (optional) # Personal financial exposure
  reputation_stake: text (optional) # Reputational consequences
  long_term_incentives: text (optional) # Equity, token grants
incentives:
  compensation_structure: text (optional) # Base pay, bonuses
  compensation_amount: number (optional) # Specific amounts
  compensation_currency: text (optional) # USD, tokens, etc.
  performance_bonuses: text (optional) # Success-based rewards
  penalty_mechanisms: text (optional) # Slashing, reputation loss
  non_financial_incentives: text (optional) # Recognition, access, etc.
constraints:
  spending_limits: text (optional) # Transaction size limits
  time_constraints: text (optional) # Timelocks, cooling periods
  approval_requirements: text (optional) # What needs higher approval
  rate_limits: text (optional) # Frequency constraints
  technical_constraints: text (optional) # Smart contract limitations
  legal_constraints: text (optional) # Regulatory compliance
  emergency_overrides: text (optional) # How constraints can be bypassed
decision_model:
  voting_mechanism: text (required) # Multisig, token voting, consensus
  threshold_requirements: text (optional) # "3-of-5", "60% majority"
  quorum_requirements: text (optional) # Minimum participation
  voting_period: text (optional) # How long votes are open
  proposal_process: text (optional) # How decisions are initiated
  veto_powers: text (optional) # Who can block decisions
  emergency_procedures: text (optional) # Fast-track processes
organizational_context:
  organization_size: text (optional) # "10-person team", "10K+ members"
  organization_type: text (optional) # "DAO", "traditional company", "protocol"
  risk_tolerance: text (optional) # "conservative", "moderate", "aggressive"
  decentralization_goals: text (optional) # How decentralized they want to be
  timeline_constraints: text (optional) # Implementation deadlines
  budget_constraints: text (optional) # Overall budget limitations
  regulatory_environment: text (optional) # Legal considerations
reference_materials:
  governance_docs: url (optional) # Links to existing governance
  similar_examples: text (optional) # "Like Compound governance but..."
  previous_attempts: text (optional) # What they've tried before
  stakeholder_feedback: text (optional) # Community input

```
