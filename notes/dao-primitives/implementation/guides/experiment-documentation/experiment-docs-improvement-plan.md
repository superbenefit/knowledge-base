# Experiment Documentation Improvement Plan

## Overview
Transform the experiment documentation framework through a Claude-driven workflow with human review at each step. Focus on making documents helpful rather than demanding.

## Available Tools
- `read_file` / `read_multiple_files` - Read current documents
- `artifacts` - Create documents for review
- `write_file` - Save approved documents
- Extended thinking for complex transformations

## Phase 1: Core Consolidation

### Step 1.1: Create New README
**Prompt**:
```
Please read the current README.md and framework-guide.md from F:\projects\sb-knowledge-base\notes\dao-primitives\implementation\guides\experiment-documentation

Then create a new streamlined README with only these sections:
1. Why This Framework Helps (1 paragraph showing clear value)
2. Progressive Documentation (2-3 paragraphs in plain language)
3. Information Flow (simple text description, no complex diagrams)
4. Getting Started (5-6 clear action items)

Pull the best 2-3 concepts from framework-guide.md and the clearest parts of the progressive-documentation-principles.md. Make it feel helpful, not prescriptive.
```

### Step 1.2: Archive Unnecessary Files
**Prompt**:
```
I'll manually delete these files after confirming:
- tools-guide.md
- implementation-plan-template.md  
- framework-guide.md
- progressive-documentation-principles.md

Please confirm these files don't contain unique critical content we need to preserve elsewhere.
```

## Phase 2: Navigation Simplification

### Step 2.1: Transform All Folder Notes
**Prompt Chain**:
```
Read all folder notes from the experiment-documentation directory:
- discovery/discovery.md
- intervention/intervention.md
- reflection/reflection.md
- synthesis/synthesis.md

For each one, create a simplified 10-line version using this template:

# [Phase] Documentation

[One sentence describing what this phase captures]

## Contents
- [[specification]] - What makes good [phase] documentation
- [[worksheet]] - Questions to explore
- [[template]] - Document structure  
- [[workflow]] - How to create it

## Getting Started
[One sentence on where to begin]

Create all 4 as separate artifacts for review.
```

## Phase 3: Specification Transformation

### Step 3.1: Discovery Specification
**Prompt**:
```
Read discovery/discovery-specification.md

Transform it into a supportive guide with:
1. What Makes Good Discovery Documentation (1 inspiring paragraph)
2. Examples That Work Well (2-3 brief real examples showing variety)
3. Common Patterns (1 paragraph on what successful discovery docs share)
4. Remember (1-2 sentences emphasizing flexibility)

Remove all requirements, checklists, and prescriptive language. Make it feel like helpful advice from a colleague.
```

### Step 3.2-3.4: Remaining Specifications
**Prompt**:
```
Apply the same transformation pattern to:
- intervention/intervention-specification.md
- reflection/reflection-specification.md
- synthesis/synthesis-specification.md

Create each as a separate artifact.
```

## Phase 4: Worksheet Redesign

### Step 4.1: Discovery Worksheet
**Prompt**:
```
Read discovery/discovery-worksheet.md

Transform it into an exploration guide where each section:
1. Explains why this information matters (1-2 sentences)
2. Offers 2-3 open-ended questions to consider
3. Provides space for free-form notes

Remove ALL:
- Timeline references
- Required formats
- Granular detail demands
- Deliverable mentions

Make questions conversational, like a colleague helping you think through important aspects.
```

### Step 4.2: Critical - Reflection Worksheet
**Prompt**:
```
Read reflection/reflection-worksheet.md

This one needs complete restructuring. Transform it into a learning-focused guide that helps people capture insights naturally. Each section should invite reflection rather than demand specific outputs.

Focus on questions like:
- "What surprised us?"
- "What would we do differently?"
- "What patterns are we noticing?"
- "Who else should we talk to?"

No structured formats or requirements.
```

### Step 4.3-4.4: Remaining Worksheets
**Prompt**:
```
Apply similar transformation to:
- intervention/intervention-worksheet.md
- synthesis/synthesis-worksheet.md

Keep the conversational, exploratory tone throughout.
```

## Phase 5: Workflow Enhancement

### Step 5.1: Discovery Workflow
**Prompt with Extended Thinking**:
```
<Extended thinking requested for this complex transformation>

Read discovery/discovery-workflow.md

Transform it to focus on:
1. Understanding the Value - Why discovery documentation helps (1 paragraph)
2. Gathering Insights - Include practical conversation starters like:
   - "Tell me about a time when..."
   - "What would success look like if..."
   - "Who is most affected by..."
3. AI-Assisted Synthesis - Keep existing prompts but frame them as helpful options
4. Quality Enhancement - Tips for strengthening rather than compliance checking

Remove ALL timeline references, workflow options based on time, and project management language.

Add practical guidance for creating psychological safety and handling common situations.
```

### Step 5.2-5.4: Remaining Workflows
**Prompt**:
```
Apply the same human-centered transformation to:
- intervention/intervention-workflow.md  
- reflection/reflection-workflow.md
- synthesis/synthesis-workflow.md

Focus on HOW to have meaningful conversations and gather authentic insights.
```

## Phase 6: Final Integration

### Step 6.1: Update Master Navigation
**Prompt**:
```
Read experiment-documentation.md

Simplify it to:
- Framework purpose (2 sentences)
- Phase links (simple list)
- Where to start (2-3 sentences of genuine guidance)

Remove all other content. Make it a clean entry point.
```

### Step 6.2: Final Review
**Prompt**:
```
Read through all transformed documents and check:
1. Have we removed all timeline assumptions?
2. Does each document explain its value clearly?
3. Are questions open and inviting rather than demanding?
4. Is the language helpful rather than prescriptive?
5. Can someone start anywhere and still find value?

Provide a summary of any remaining issues to address.
```

## Execution Process

1. **Human**: Provides each prompt
2. **Claude**: Reads files, thinks through transformation, creates artifact
3. **Human**: Reviews artifact, requests adjustments if needed
4. **Claude**: Saves approved version with write_file
5. **Repeat**: Continue through prompt chain

## Success Indicators
- Documents invite exploration rather than demand compliance
- Questions spark thinking rather than require specific answers  
- Workflows provide practical help rather than abstract processes
- No timeline or project management assumptions
- Clear value explanations throughout
- Flexible guidance that adapts to context

## Remember
The goal is to create a framework that feels like a helpful colleague sharing wisdom, not a compliance officer demanding reports. Every transformation should make the framework more human and less bureaucratic.