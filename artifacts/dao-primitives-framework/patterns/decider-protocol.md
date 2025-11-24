---
title: Decider Protocol
description: A social protocol for small team decision-making
type: pattern
publish: true
tags:
  - decisions
  - practices
  - consensus
  - consent
---

---

The Decider Protocol is a fast way of reaching agreement in a small team context while reducing opportunities for poor team dynamics and bad decision-making.


---
## What is the decider protocol

The decider protocol creates a shared common standard for group decision-making that is designed to support [collaboration](artifacts/dao-primitives-framework/group-scale/collaboration-scale.md) scale teams to make decisions in a way that:
1. Is fast and efficient 
2. Protects against group anti-patterns that lead to poor decisions


This primitive is based on the [core protocols](https://mccarthyshow.com/protocols/the-core-protocols-english-v3.03.pdf). 

---

## Why use the decider protocol 

If you are a [collaboration](artifacts/dao-primitives-framework/group-scale/collaboration-scale.md) scale team that needs to make decisions quickly, then the decider protocol could be a useful practice to implement. 

Benefits of the decider protocol are:
1. Consistency - it gives members of a team a single reliable ritual for decision-making that can counteract the tendency for groups to evolve unbalanced decision-making patterns that preference the will of a minority of the group.  
2. Participation - people are required to include other team members (potentially all team members) in decision-making
3. Transparency and auditability - internal and external. Logging the use of the decider protocol makes it easy to see and understand team decision-making. Internally, everyone in the team can see what decisions are being made and by whom. Likewise, people looking into a team from the outside can see the decisions the team is making and judge the quality of the process they are using to make them.  
4. Accountability - especially for consent and consensus based decisions
5. Safe decent - team members have a trusted process with which to oppose decisions and protect the team from making unsafe decisions. 

------

## Details

### Steps in the decider process

**1. Proposal Initiation** 
The team member presents a clear, actionable proposal to the group and initiates the voting sequence by stating "1-2-3."

**2. Simultaneous Response** 
Team members indicate their position using one of three gestures:
- Agreement (thumbs up)
- Object (thumbs down)
- Support it/abstain (horizontal hand)

**3. Critical Objection Check** 
Team members with absolute objections declare "I am an absolute no." Any critical objection immediately pauses the proposal for reconsideration.

**4. Assessment** 
The proposing team member evaluates responses, considering:

- The ratio of Support to total responses
- The effort required to find resolution versus expected value of the decision
- Whether to proceed to resolution or withdraw the proposal

**5. Resolution Phase** 
If justified, the proposing team member can engage with no voters to see if the proposal can be modified to get them to a yes.

**6. Completion** 
The proposal passes when either:
- All team members indicate Agreement or Support
- All objections have been resolved through modification
The agreed proposal becomes a binding agreement for all participating team members.

**Key Principles**
- Rapid iteration
- Collective intelligence
- Constructive objection
- Efficient resolution
- Shared commitment

---

## How to use the decider protocol 

- **Define which decisions you will make using the protocol** - There maybe certain decisions that a team will want to use a different proposal process to make (more formal, onchain, higher scale etc). For example making financial decisions above a specific threshold. This decision-making policy must be clearly defined so that the decider protocol is not used inappropriately. 

- **Define what method of decision-making you want to employ**
- The protocol can be modified to be used for different types of decisions. For example:
	1. [Consent](tags/consent.md) - the original design of the protocol is for small teams making fast consent based decisions. A decision only passes if everyone is either a thumbs-up or support vote - i.e there are no strong objections. See [https://patterns.sociocracy30.org/consent-decision-making.html](https://patterns.sociocracy30.org/consent-decision-making.html)
	2. Consensus - the protocol can be used for consensus based decisions if the criteria is shifted to getting everyone to a thumbs up. This process is generally slower as it requires more conversation and negotiation
	3. Majority rule - the protocol can also be used to quickly get to a majority decision based on requiring a simple majority of voters to be thumbs up or support.

- **Making decision in different mediums** - Decider can be used in any format where a vote can be registered 
	1. In-person - through a show of physical hands
	2. Video/audio call - through hand gestures, spoken votes, emojis, chat messages etc
	3. In chat formats - e.g discord, telegram. In these formats it is recommended that an agreed timeframe is set for engagement with async decisions so that the efficiency of the decider protocol is not lost because of communication lags
	
- **Recording decisions** - depending on a team's decision-making policies and transparency requirements for different types of decisions, decider results can be recorded in different ways. E.g in a formal decision log, in meeting notes, in a chat history etc.  

- **Keep decision groups small and context high** - the decider protocol is designed to be used with small high-context collaborating teams. If the group making a decision is too large or doesn't have sufficient context, then the decider protocol will not provide the desired efficiency. Because of it is a decision tool and not a sensemaking tool, it requires that the group using it has enough shared understanding of the context to make rapid decisions. If not then using decider will likely produce lengthy and unproductive discussions (in lieu of doing proper sensemaking). For groups of more than 10 people it is recommended to use a more formal decision-making practice such as a formal proposal process that includes feedback and iteration steps. 

---

### Combining other primitives

The decider primitive can be combined with:
- [Decision-log](notes/dao-primitives/implementation/patterns/collaboration-scale-patterns/decision-log.md) - a formal log of decisions, ideally that provides some security and version control
- [Cells](notes/archive/clarity/Tags/cells.md) - the decider protocol is often the go-to tool for Cells to use for collaborative decision making



