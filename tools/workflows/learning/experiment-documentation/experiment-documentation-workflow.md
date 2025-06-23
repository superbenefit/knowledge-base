# Experiment Documentation Workflow Guide

This guide helps you understand and use the Experiment Documentation Framework to capture insights from organizational experiments, collaborative transformations, and governance innovations. Whether you're working directly or through an AI assistant, this guide provides everything needed to create meaningful documentation that serves multiple stakeholders.

## What This Framework Does

The Experiment Documentation Framework uses progressive documentation principles to help you:
- Capture knowledge as it emerges without creating documentation burden
- Build understanding incrementally across connected phases
- Preserve multiple perspectives while creating coherent narratives
- Transform messy, real-world experiences into shareable wisdom

## Framework Overview

### The Four Phases

The framework organizes work into four interconnected phases. While presented sequentially, real work often moves fluidly between phases:

1. **Discovery** - Understanding the current context, challenges, and possibilities
2. **Intervention** - Exploring potential approaches and designing experiments
3. **Reflection** - Capturing learning from whatever you try
4. **Synthesis** - Weaving insights into shareable case studies

### How Information Flows

Each phase builds on previous work without repetition:
- Discovery insights inform intervention design
- Intervention plans provide context for reflection
- Reflections accumulate into synthesis
- All phases contribute to the final case study

See `information-flow.md` for detailed flow patterns.

## Setting Up Your Documentation Space

### Creating Your Project Folder

For each experiment or engagement, create a dedicated folder in your knowledge base:

```
your-project-name/
├── discovery/
│   ├── discovery-notes.md      # Your working notes
│   └── discovery-report.md     # Final discovery documentation
├── intervention/
│   ├── intervention-notes.md   # Your working notes
│   └── intervention-map.md     # Final intervention documentation
├── reflection/
│   ├── reflection-notes.md     # Your working notes
│   ├── reflection-1.md         # First reflection document
│   ├── reflection-2.md         # Second reflection document
│   └── ...                     # Additional reflections as needed
├── synthesis/
│   ├── synthesis-notes.md      # Your working notes
│   └── case-study.md          # Final case study
└── project-overview.md        # Quick reference for the project
```

### Initial Setup Steps

1. Copy this folder structure to your desired location
2. Create a `project-overview.md` with basic information:
   - Organization name
   - Project timeline
   - Key stakeholders
   - Primary goals or questions
3. Start with whichever phase matches your current work

## Using the Framework Resources

### Resource Types Available

Each phase provides four types of resources:

1. **Worksheets** (`[phase]-worksheet.md`) - Questions to explore during your work
2. **Templates** (`[phase]-template.md`) - Structure for final documentation  
3. **Workflows** (`[phase]-workflow.md`) - Step-by-step synthesis guidance
4. **Overview** (`[phase].md`) - Principles and quality guidance

### Locating Resources

All framework resources are in: `tools/workflows/learning/experiment-documentation/`

Each phase has its own subdirectory:
- `discovery/` - Discovery phase resources
- `intervention/` - Intervention phase resources
- `reflection/` - Reflection phase resources
- `synthesis/` - Synthesis phase resources

## Phase-by-Phase Workflow

### Discovery Phase Workflow

**Purpose**: Understand the organization's context, challenges, and possibilities

**When to use**: 
- Beginning a new engagement
- Needing to understand an organization deeply
- Preparing for intervention design

**Resources**:
- Worksheet: `discovery/discovery-worksheet.md`
- Template: `discovery/discovery-template.md`
- Workflow: `discovery/discovery-workflow.md`

**Process**:
1. Use the worksheet to guide conversations and observations
2. Capture insights in your discovery-notes.md file
3. When ready, use the workflow to transform notes into a Discovery Report
4. Save the report as discovery-report.md in your project folder

**AI Assistant Instructions**:
When a user needs discovery resources, provide the worksheet for gathering information. If they have notes ready for synthesis, guide them through the workflow prompts to create their Discovery Report.

### Intervention Phase Workflow

**Purpose**: Explore possible approaches and design experiments

**When to use**:
- After understanding the organization's context
- When ready to explore what to try
- Designing specific experiments or interventions

**Resources**:
- Worksheet: `intervention/intervention-worksheet.md`
- Template: `intervention/intervention-template.md`
- Workflow: `intervention/intervention-workflow.md`

**Process**:
1. Review insights from Discovery phase
2. Use worksheet to explore intervention possibilities
3. Capture ideas in intervention-notes.md
4. Use workflow to create an Intervention Map
5. Save as intervention-map.md in your project folder

**AI Assistant Instructions**:
When users are planning interventions, provide the worksheet to structure their thinking. Reference their Discovery insights when available. Help them explore multiple pathways rather than jumping to single solutions.

### Reflection Phase Workflow

**Purpose**: Capture learning from experiments and experiences

**When to use**:
- After significant events or milestones
- When something surprising happens
- At natural pause points in the work
- Multiple times throughout engagement

**Resources**:
- Worksheet: `reflection/reflection-worksheet.md`
- Template: `reflection/reflection-template.md`
- Workflow: `reflection/reflection-workflow.md`

**Process**:
1. Use worksheet to capture fresh insights
2. Include multiple perspectives
3. Create reflection documents as needed
4. Number them sequentially (reflection-1.md, reflection-2.md, etc.)

**AI Assistant Instructions**:
Reflection can happen multiple times. When users mention capturing learning, provide the worksheet. Encourage them to reflect while insights are fresh. Each reflection becomes a building block for synthesis.

### Synthesis Phase Workflow

**Purpose**: Weave all insights into a shareable case study

**When to use**:
- After multiple reflection cycles
- When ready to share learning broadly
- Creating deliverables for funders or stakeholders
- Contributing to collective knowledge

**Resources**:
- Worksheet: `synthesis/synthesis-worksheet.md`
- Template: `synthesis/synthesis-template.md`
- Workflow: `synthesis/synthesis-workflow.md`

**Process**:
1. Gather all documentation from previous phases
2. Use worksheet to identify key threads
3. Follow workflow to create case study
4. Save as case-study.md in your project folder

**AI Assistant Instructions**:
Synthesis requires documentation from all previous phases. Help users gather their materials first. The worksheet helps identify the most important story threads before writing.

## AI Assistant Task Handling

### Understanding User Requests

When users describe their task, listen for key indicators:

**Phase Indicators**:
- Discovery: "initial conversation", "understanding context", "exploring challenges"
- Intervention: "planning approaches", "designing experiments", "what to try"
- Reflection: "capturing learning", "what happened", "insights from"
- Synthesis: "case study", "final report", "sharing learning"

**Resource Type Indicators**:
- Worksheet needed: "gather information", "questions to ask", "structure conversation"
- Template needed: "format for", "structure for final", "organizing documentation"
- Workflow needed: "how to synthesize", "transform notes", "create report"

### Providing Customized Resources

1. **Identify the phase** based on their description
2. **Determine resource type** they need (usually worksheet for gathering, workflow for synthesis)
3. **Locate the appropriate file** in the framework structure
4. **Customize if needed** by:
   - Adding their organization name
   - Adjusting language for their context
   - Highlighting relevant sections
   - Removing irrelevant portions

### Example Request Handling

**User**: "I'm helping the freestyle football league with some governance experiments with All In For Sport, and am having an initial conversation with the director next week - please provide a worksheet I can use to help me gather information in an organized manner during our conversation"

**Response Process**:
1. Identify phase: "initial conversation" = Discovery phase
2. Identify need: "worksheet to gather information"
3. Locate resource: `discovery/discovery-worksheet.md`
4. Customize: Add organization names, emphasize governance-related questions
5. Provide customized worksheet with guidance

## Advanced Workflows

### Non-Linear Progression

Work rarely follows a straight line. Common patterns include:

- **Starting mid-stream**: Join during implementation, begin with Reflection
- **Iterative cycles**: Discover → Intervene → Reflect → Discover again
- **Parallel tracks**: Multiple interventions running simultaneously
- **Compressed timelines**: All phases happening in rapid succession

The framework adapts to these patterns. Use whatever sequence serves the work.

### Multiple Organizations

When working with multiple organizations:
- Create separate project folders for each
- Look for patterns across projects during synthesis
- Consider meta-synthesis documents that draw from multiple engagements

### Long-Term Engagements

For multi-year projects:
- Create date-stamped reflection documents
- Consider annual synthesis documents
- Archive older materials while keeping them accessible
- Track how understanding evolves over time

## Quality Guidance

### Signs of Good Documentation

**Discovery**: Captures real complexity, includes multiple perspectives, reveals systemic patterns
**Intervention**: Shows genuine alternatives, honest about resources needed, connects to discovery
**Reflection**: Includes surprises and failures, multiple voices present, actionable insights
**Synthesis**: Tells compelling story, extracts transferable wisdom, honest about challenges

### Common Pitfalls

- Over-structuring too early - let understanding emerge
- Forcing linear progression - follow the work's natural flow
- Smoothing over disagreement - preserve productive tensions
- Documentation as afterthought - capture while fresh

## Technical Notes

### File Formats
- All resources are in Markdown format
- Compatible with Obsidian, Notion, and similar tools
- Can be converted to other formats as needed

### AI Integration
- Worksheets can be parsed and customized by AI assistants
- Templates provide clear structure for content generation
- Workflows include specific prompts for AI-assisted synthesis

### Version Control
- Consider using Git for documentation versioning
- Tag major milestones in documentation development
- Preserve earlier versions to show evolution

## Getting Help

If you need assistance:
1. Check the phase-specific README files for detailed guidance
2. Review the `information-flow.md` document for how phases connect
3. Look at examples in each phase's documentation
4. Ask your AI assistant to explain specific components

Remember: The framework serves your work, not the other way around. Adapt everything to meet your needs while maintaining the core principle of progressive documentation - building understanding incrementally without redundancy.

---

*For AI Assistants: This guide provides complete instructions for helping users with the Experiment Documentation Framework. When users describe their needs, match them to the appropriate phase and resource type, then provide customized materials from the framework structure.*