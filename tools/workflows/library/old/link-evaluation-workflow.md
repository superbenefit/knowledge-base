# Resource Evaluation Framework

This guide provides a structured process for evaluating resources for potential inclusion in the SuperBenefit Web3 Library. It implements a rigorous triple-gate system designed to maintain a carefully curated collection that aligns with regenerative values and extends our collective understanding.

## Before You Begin

Before starting this workflow, ensure you have completed the environment setup described in the [Library Workflows README](readme.md). You should be familiar with:

- SuperBenefit's priority themes and regenerative values
- The triple-gate evaluation system
- The structure and purpose of the Web3 Library
- The rigorous curation standards and scoring system

## Evaluation Philosophy

Our evaluation process prioritizes **quality over quantity** with a target acceptance rate of **maximum 15%**. Every resource must pass through three mandatory gates before receiving a numerical score. This ensures that our library remains a highly curated collection of genuinely transformative, values-aligned resources rather than a broad aggregation of web3 content.

## Triple-Gate Evaluation System

All resources must pass **ALL THREE GATES** before proceeding to detailed scoring. If a resource fails any gate, it is immediately rejected regardless of other qualities.

### Gate 1: Values Alignment (PASS/FAIL)

Apply this mandatory filter first to ensure regenerative alignment:

```
"Please evaluate this resource against SuperBenefit's values alignment criteria:

IMMEDIATE DISQUALIFIERS (if ANY are true, REJECT immediately):
- Pure profit/speculation focus without social benefit
- Extractive tokenomics (wealth concentration, rent-seeking)
- Corporate capture narratives disguised as decentralization
- Environmental harm without acknowledgment or mitigation
- Reinforcement of existing power structures
- 'Move fast and break things' mentality

POSITIVE VALUES INDICATORS (should demonstrate several):
- Prioritizes community benefit over individual wealth
- Acknowledges environmental/social externalities
- Supports genuine decentralization (not just technical)
- Considers power dynamics and justice implications
- Aligns with regenerative/post-capitalist principles

GATE 1 RESULT: PASS or FAIL (with reasoning)"
```

### Gate 2: Quality Standards (PASS/FAIL)

Assess whether the resource meets our high quality bar:

```
"Please evaluate this resource against our quality standards:

MINIMUM QUALITY REQUIREMENTS:
- Demonstrates deep understanding of subject matter
- Provides original insights, not just rehashing existing ideas
- Includes concrete examples or case studies
- Shows awareness of limitations and trade-offs
- Written by recognized experts or practitioners

QUALITY DISQUALIFIERS (if ANY are true, REJECT):
- Surface-level analysis without depth
- Promotional content disguised as education
- Significant factual errors or outdated information
- Poor writing quality that impedes understanding
- Lack of sources or supporting evidence

GATE 2 RESULT: PASS or FAIL (with reasoning)"
```

### Gate 3: Uniqueness Filter (PASS/FAIL)

Ensure the resource adds genuine value to our existing collection:

```
"Please evaluate this resource for uniqueness against our existing library:

1. Use search_vault_smart to find similar content in our knowledge base
2. Assess similarity percentage to existing resources
3. Evaluate unique value proposition:
   - Offers genuinely new perspective not covered in existing library
   - Adds significant value beyond articles we already have
   - Approaches familiar topics from novel angle
   - Provides more comprehensive treatment than existing resources

UNIQUENESS THRESHOLD: Reject if >70% similar unless significantly higher quality

GATE 3 RESULT: PASS or FAIL (with reasoning and similarity assessment)"
```

## Strategic Value Scoring (Only for Gate-Passers)

Resources that pass all three gates proceed to detailed scoring using weighted criteria:

```
"For this resource that passed all gates, please provide strategic value scoring:

**Theme Relevance** (25% weight): Score 1-5
- Perfect fit (5): Directly addresses core SuperBenefit themes
- Strong fit (4): Adjacent to core themes with clear connections  
- Moderate fit (3): Relevant but peripheral
- Weak fit (2): Tangentially related
- Poor fit (1): Minimal relevance

**Depth & Actionability** (25% weight): Score 1-5
- Exceptional (5): Deep analysis with clear implementation guidance
- Strong (4): Good analysis with some actionable insights
- Moderate (3): Adequate depth with limited actionability
- Weak (2): Surface-level with minimal practical value
- Poor (1): Shallow analysis without actionable content

**Audience Alignment** (20% weight): Score 1-5
- Perfect (5): Directly serves SuperBenefit community needs
- Strong (4): Valuable for most community members
- Moderate (3): Useful for subset of community
- Weak (2): Limited audience appeal
- Poor (1): Misaligned with community needs

**Innovation Factor** (15% weight): Score 1-5
- Groundbreaking (5): Introduces novel concepts or approaches
- Innovative (4): Fresh take on established concepts
- Solid (3): Good treatment of known topics
- Standard (2): Conventional approach
- Derivative (1): Mostly rehashes existing work

**Implementation Readiness** (10% weight): Score 1-5
- Ready (5): Can be applied immediately
- Near-term (4): Applicable with minor adaptation
- Medium-term (3): Requires significant development
- Long-term (2): Mostly theoretical
- Conceptual (1): Academic/theoretical only

**Authority & Credibility** (5% weight): Score 1-5
- Expert (5): Recognized leader in field
- Practitioner (4): Active practitioner with track record
- Informed (3): Knowledgeable contributor
- Emerging (2): New voice with potential
- Unknown (1): Limited credibility indicators

TOTAL SCORE: ___/100"
```

## Priority Classification

Based on total scores, classify resources into priority levels:

- **ESSENTIAL** (90-100): Must-have articles (target: max 5% of evaluated articles)
- **VALUABLE** (75-89): Strong additions (target: max 10% of evaluated articles)  
- **CONSIDER** (60-74): Potential future additions (parking lot)
- **REJECT** (<60): Do not include

## Complete Evaluation Workflow

### 1. Initial Resource Review

Begin with a comprehensive review of the resource:

```
"I'd like to evaluate this resource for potential inclusion in our Web3 Library:
[RESOURCE TITLE/URL]

Please begin by:
1. Reviewing the complete resource (or a substantial sample if it's very lengthy)
2. Identifying the central thesis and key arguments
3. Noting the author's background and expertise
4. Determining the resource type (guide, framework, case study, etc.)
5. Identifying the intended audience level (introductory, intermediate, advanced)"
```

### 2. Apply Triple-Gate System

Apply each gate sequentially, stopping if any gate fails:

```
"Please apply our triple-gate evaluation system:

GATE 1: Values Alignment (PASS/FAIL)
[Apply Gate 1 evaluation from above]

If PASS, continue to:
GATE 2: Quality Standards (PASS/FAIL)
[Apply Gate 2 evaluation from above]

If PASS, continue to:
GATE 3: Uniqueness Filter (PASS/FAIL)
[Apply Gate 3 evaluation from above]

If all gates PASS, proceed to strategic scoring."
```

### 3. Strategic Value Assessment (Gate-Passers Only)

For resources that pass all gates:

```
"This resource passed all gates. Please complete strategic value scoring:
[Apply strategic scoring criteria from above]

Then provide:
1. Final priority classification (ESSENTIAL/VALUABLE/CONSIDER/REJECT)
2. Specific connections to SuperBenefit's focus areas
3. Clear recommendation for inclusion/exclusion
4. If recommending inclusion, suggest appropriate tags and audience level"
```

### 4. Documentation and Tracking

Generate structured output for decision tracking:

```
"Please provide a complete evaluation summary in this format:

**RESOURCE**: [Title]
**URL**: [URL]
**AUTHOR**: [Author(s)]

**GATE RESULTS**:
- Values Alignment: PASS/FAIL [reason]
- Quality Standards: PASS/FAIL [reason]  
- Uniqueness Filter: PASS/FAIL [reason]

**STRATEGIC SCORES** (if applicable):
- Theme Relevance: __/25
- Depth & Actionability: __/25
- Audience Alignment: __/20
- Innovation Factor: __/15
- Implementation Readiness: __/10
- Authority & Credibility: __/5
- **TOTAL**: __/100

**PRIORITY**: ESSENTIAL/VALUABLE/CONSIDER/REJECT
**RECOMMENDATION**: Include/Exclude
**REASONING**: [2-3 sentence summary]"
```

## Discord Mining Integration

For resources discovered through Discord mining, follow the same triple-gate process but note discovery context:

```
"This resource was discovered through Discord mining analysis. Please:

1. Apply the full triple-gate evaluation system
2. Note the Discord context where it was shared
3. Consider community validation (was it well-received/discussed?)
4. Apply the same rigorous standards regardless of discovery source

Discovery context should not lower standards but may provide additional insight into community relevance."
```

## Red Flags and Warning Signs

### Content Red Flags
- Uses "disruption" language without considering harm
- Focuses on "scaling" without addressing externalities
- Presents complex social issues as simple technical problems
- Ignores power dynamics and justice implications
- Promotes financial instruments without social benefit analysis

### Author/Source Red Flags
- Heavy promotion of own products/services
- Lack of community involvement or grassroots experience
- History of extractive business practices
- Venture capital or corporate capture influences
- Dismissive of concerns about equity or environmental impact

### Structural Red Flags
- Lack of acknowledgment of limitations
- Overly optimistic without addressing risks
- No discussion of potential negative consequences
- Absence of diverse perspectives or voices
- Solutions that primarily benefit already-privileged groups

## Troubleshooting Common Issues

### Borderline Values Cases
When a resource presents complex values alignment questions:
- Document reasoning in detailed evaluation
- Consider precedent from previous decisions
- When in doubt, err on the side of rejection
- Seek team input for particularly complex cases

### High-Quality but Values-Misaligned Resources
For technically excellent resources that fail values alignment:
- Acknowledge technical quality while maintaining values standards
- Consider if alternative framing could address concerns
- Remember that values alignment is non-negotiable
- Document as precedent for future similar cases

### Partial Resource Relevance
When only portions of a resource are relevant:
- Focus evaluation on most relevant sections
- Clearly indicate which portions provide value
- Consider if partial relevance justifies full inclusion
- Note limitations in evaluation summary

## Success Metrics

### Quantitative Targets
- **Maximum 15% acceptance rate** (down from previous 38%)
- **Maximum 3-5 ESSENTIAL articles per evaluation cycle**
- **Clear values alignment** in 100% of accepted resources
- **Documented reasoning** for all rejections

### Qualitative Outcomes
- Library reflects SuperBenefit values consistently
- Articles provide unique value not available elsewhere
- Content supports regenerative web3 development
- Community finds library genuinely useful vs. overwhelming

## Best Practices

- **Focus on Unique Value**: Emphasize what makes each resource uniquely valuable
- **Maintain Educational Tone**: Keep evaluations informative and balanced
- **Prioritize Regenerative Perspectives**: Look for resources that challenge extractive paradigms
- **Document Edge Cases**: Build precedent database for consistent future decisions
- **Quality Over Quantity**: Better to have fewer exceptional resources than many mediocre ones

The goal is to maintain a highly curated collection of genuinely transformative resources that align with SuperBenefit's regenerative values and meaningfully extend our collective understanding of post-capitalist web3 approaches.
