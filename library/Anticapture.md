---
title: Anticapture
url: https://spengrah.mirror.xyz/f6bZ6cPxJpP-4K_NB7JcjbU0XblJcaf7kVLD75dOYRQ
author:
  - Spencer Graham
tags:
  - frameworks
  - governance
  - daos
publish: "true"
---

[Anticapture](https://spengrah.mirror.xyz/f6bZ6cPxJpP-4K_NB7JcjbU0XblJcaf7kVLD75dOYRQ) is a framework for designing decentralized governance systems that resist monopolization and corruption by distributing decision-making power across autonomous agents.

---

## Summary

Anticapture is designed to combat *governance capture*, where individuals or groups monopolize shared resources for selfish gain. Traditional governance relies on hierarchical trust models, which are vulnerable to corruption. In contrast, Anticapture aims to develop capture-resistant governance by decentralizing decision-making and execution of actions. By distributing power and using cryptographic protections, this model creates resilient governance systems, ideal for DAOs and decentralized communities.

### Key Elements of the Framework

- **Agents and Networks**: Agents are individuals or groups that take actions. Anticapture views organizations as #networks of these #agents. Strong agent relationships can prevent capture, but weak or anonymous relationships require more robust protections.
- **Shared Resources**: These are assets controlled by networks of agents. Shared #resources are vulnerable to internal and external capture. Anticapture defines different types of resources (e.g., financial, social) and emphasizes the importance of decentralized control.
- **Actions and Phases**: Governance is achieved through #actions, which are divided into four phases —**Propose**, **Decide**, **Execute**, and **Evaluate**. Decentralizing the execution phase is key to resisting internal capture, while ensuring autonomy during execution helps avoid external capture.
- **Decentralized Autonomous Organizations (DAOs)**: Anticapture considers DAOs a strong form of capture-resistant governance. DAOs decentralize execution and ensure that only internal agents can take actions affecting shared resources. This makes DAOs resistant to both internal and external capture attempts.

The Anticapture framework’s structure revolves around four key phases that work together to create resilient and decentralized governance. Here's a detailed breakdown of each phase:

#### 1. **Propose**
This phase involves introducing an idea or action for the community to consider. The proposal can be made by any agent within the network, but this process must be designed to prevent dominance by any one party. Mechanisms for limiting who can propose, or ensuring broad input from the community, help prevent capture at this stage. Transparency and accessibility are emphasized here to ensure everyone can participate in governance. #proposals 

#### 2. **Decide**
Once a proposal is made, the network must decide whether to move forward. The decision-making process can vary in complexity—from simple majority voting to more sophisticated consensus mechanisms. The Anticapture framework focuses on ensuring that the decision phase is decentralized and fair. It prevents manipulation by diversifying decision power among many agents, minimizing the risk of capture. Key features of this phase include quorum rules, anonymous voting, and weighted decision-making based on contribution or reputation. #decisions 

#### 3. **Execute**
In this phase, the approved proposal is carried out. Anticapture focuses heavily on ensuring that the execution of decisions is decentralized. This means no single agent or small group can monopolize the execution process. The framework proposes dividing responsibilities across different agents and ensuring autonomous execution mechanisms (like smart contracts in DAOs) to reduce reliance on any individual. Decentralizing execution protects the system from internal capture by preventing any agent from sabotaging or altering the proposal’s implementation. #execution 

#### 4. **Evaluate**
After execution, the final phase is evaluation, where the impact of the decision is reviewed. This phase is vital for accountability and ensuring continuous improvement of the governance system. Feedback loops, public reporting, and transparent audits of actions are used to hold agents accountable and ensure that the community can assess whether the executed actions aligned with the proposal’s goals. Evaluation also allows the community to identify areas of vulnerability to future capture and improve processes for the next governance cycle. #evaluation

#### Implementing Anticapture

The elements of the Anticapture framework—Propose, Decide, Execute, and Evaluate—can be combined into a cohesive governance system by following these steps:

1. **Propose**: Open the floor for proposals from agents within the network, ensuring inclusivity and transparency. Rules may determine who can propose and how proposals are formatted.
   
2. **Decide**: Use decentralized decision-making processes like voting, consensus mechanisms, or weighted input to approve or reject proposals. Mechanisms like quorum requirements or reputation-based voting can safeguard against manipulation.

3. **Execute**: Decentralize the implementation of decisions to ensure that no single agent can dominate or sabotage the process. This could involve smart contracts or multi-party execution agreements that autonomously carry out the approved proposal.

4. **Evaluate**: After execution, implement continuous feedback loops to assess the success of the action. This phase involves audits, reports, and transparent communication with the community. Evaluations should be used to refine the process and mitigate risks of future capture attempts.

By ensuring decentralization and accountability at every step, the governance system becomes resilient against both internal and external threats of capture.

---
## Towards a Framework of Capture-Resistant Governance

_Special thanks to the many people who have greatly influenced my thinking and provided feedback to various versions of this article: [Nick Naraghi](https://twitter.com/nicknaraghi), [Aaron Soskin](https://twitter.com/AaronSoskin), [David Ehrlichman](https://twitter.com/davehrlichman), [Jon Hillis](https://twitter.com/JonathanHillis), [Ven Gist](https://twitter.com/0xd2_eth), [Tracheopteryx](https://twitter.com/tracheopteryx), [David Phelps](https://twitter.com/divine_economy), [Kames Cox-Gheraghty](https://twitter.com/KamesCG), [Nich Kesonpat](https://twitter.com/nichanank), [Travis Wyche](https://twitter.com/Travis_Wyche), Tae, [Christian Lemp](https://twitter.com/c_lemp), [Joshua Tan](https://twitter.com/joshuaztan), [Kevin Seigler](https://twitter.com/topocount), [Chase Chapman](https://twitter.com/chaserchapman), [Marcus Phillips](https://twitter.com/mracus), [Stefen Deleveaux](https://twitter.com/stefdelev), [earth2travis](https://twitter.com/earth2travis), [Daniel Ospina](https://twitter.com/_Daniel_Ospina), [Lane Rettig](https://twitter.com/lrettig), [Richard Bartlett](https://twitter.com/RichDecibels)._

---

We see the story of resource and governance capture so often we accept it as a fact of life.

An executive embezzles funds from his firm for a lavish vacation. A politician accepts “campaign contributions” from an industry consortium in return for supporting a law that unfairly crowds out new competitors. A corporate board chair guides her company to acquire a friend’s business for an excessive premium.

Constrained by the realities of the world of atoms, the safest way to manage resources shared by the many has been to place them in the custody of a trusted few. Organizations’ internal governance policies, striving to address the risk that even those few cannot be trusted, are backed by external governance policies enforced by governments.

Each of those governance systems are in turn forced to place shared resources in the custody of a few, creating opportunities for bad actors to capture an organization’s shared resources for selfish wants, or worse, to capture the very governance mechanisms designed to prevent resource capture in the first place.

This model of “security” by hierarchies of concentrated power has long been the status quo. While it has enabled organizations to help create the modern world of relative luxury in which we live, it leaves a lot to be desired. If humanity is to solve challenges like climate change and public goods infrastructure, we must come up with methods of managing shared resources with significantly lower risk of capture.

Recently, there has been a breakthrough. Blockchains and smart contracts have revealed a new trust model for governance over shared resources that relies instead on a combination of cryptography and wide distribution of power. This model makes possible a new category of governance, called capture-resistant governance.

**The promise of capture-resistant governance is managing shared resources in a way that prevents capture of those resources by bad actors.** In so doing, it also unlocks a new frontier of what is possible together. The amazing fluidity, flexibility, and adaptability exhibited by early web3-native communities is testament to what’s possible when our governance structures avoid capture of shared resources without the rigidity of traditional approaches. ^f53fa2

This article introduces _Anticapture_, a framework for understanding capture-resistant governance. _Anticapture_ seeks to understand the fundamentals of capture-resistant governance by examining how organizations – modeled as _networks_ of _agents_ – take _actions_ to manage _resources_ in service of their objectives.

By the time you’re finished reading, you’ll be equipped with the beginnings of a taxonomy and a set of terminology to use in the context of DAOs, decentralized communities, and capture-resistant governance.

This article begins by defining the key components of the _Anticapture_ framework, and then puts it to the test to answer one foundational question:

1. Agents and networks
2. Shared resources
3. Actions and their four phases
4. Case Study: What makes a DAO a DAO
5. Where to go from here?

### 1. Agents and Networks

![An illustrative example of agents in a network. This network happens to have shared resources (see section 2).](https://spengrah.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FFYjembAeKUAZELofqEaKQ.png&w=3840&q=75)

An illustrative example of agents in a network. This network happens to have shared resources (see section 2).

**Agents** are individual entities that have the ability to take actions. Agents can be individual humans, software acting on behalf of an individual or group (e.g., an Ethereum client), or a group of multiple agents.

_Anticapture_ models any group, community, or organization of agents as a **network**. Networks provide grounds for formal analysis, including the relationships between nodes. One example is how the strength of those relationships impacts the network’s susceptibility to capture.

Networks where most agents have relationships with one another resist capture by relying on the game theory of repeated interactions – in other words, trust. On the other hand, when most agents in a given network do not have strong relationships with one another – such as in larger networks, when agents don’t initially know each other, or when some agents have anonymous digital identities – the network must rely not on trust but on stronger protections against internal capture. The next sections will explore where such stronger protections can come from.

### 2. Shared Resources

Anything we can use to do or get what we want – from basics like energy, food, and water to more complex things like financial assets, tools, and social reputation – is a resource.

When a resource is under the power of a _single_ agent, we consider it a **private resource**.¹ Private resources cannot, by definition, be captured by internal agents. They can be captured by external agents unless the agent controlling the resource is autonomous (see the Execute section).

When a resource is under the power of a _network_ of agents, we consider it a **shared resource**. Historically, shared resources have been susceptible to capture by agents both inside and outside the network.

The important difference between a private and a shared resource is the structure of power over it. Money, for example, can be owned either by a single person or by a company, government, et cetera.

Some resources can only be private. Short of mind control, nobody can _force_ you to pay attention or to spend your time in a particular way. They may induce you to do so by changing your incentives, but the actual resources of time and attention remain under your power.²

Some resources can only be shared. Power over such resources is distributed and cannot be privatized. We call these **distributed resources**. One reason many distributed resources cannot be controlled by any single agent is that they are emergent properties of some larger system.

![Several examples of resources, by categories in the Anticapture framework.](https://spengrah.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2F2GfCkLAKTKQkORRYQbpcm.png&w=3840&q=75)

Several examples of resources, by categories in the Anticapture framework.

Like agents and (as we’ll see in the next section) actions, the _Anticapture_ framework treats resources as recursive concepts. Agents can be networks of agents, and every action by a given agent is composed of smaller actions by sub-agents. Similarly, agents often use one resource to deploy a second resource with the goal of impacting a third resource.

The first level of resource in the previous sentence is often a coordination mechanism or governance structure. While in everyday discourse these aren’t often considered resources at all, the _Anticapture_ framework treats them as such because actions taken by agents can impact them, and they can be captured.

While potentially daunting at first, this approach provides a simple way to model what can be complex dynamics, thereby laying the groundwork for both formal analysis and concise terminology.

### 3. Actions and Their Four Phases

![The four phases of actions in the Anticapture framework. Note how each phase is itself composed of smaller instances of all the phases.](https://spengrah.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FWZE2xhgj0k-jF_DEvEl3r.png&w=3840&q=75)

The four phases of actions in the Anticapture framework. Note how each phase is itself composed of smaller instances of all the phases.

Actions are how agents put resources to work to achieve their goals. All governance over shared resources is conducted via actions.

In the _Anticapture_ framework, actions have four phases.

1. **Propose**: delineate the options on the table
2. **Decide**: select the preferred option
3. **Execute**: put the selected option into action
4. **Evaluate**: analyze the impact of the executed action

These phases are cyclical. The Evaluate phase of one action often feeds into the Propose phase of a subsequent action.

These phases are also [recursive](https://twitter.com/tracheopteryx/status/1455582776401432580). Each phase is itself composed of all four phases. Network actions are composed of actions by individual agents. And this is fractally true at many levels. Organizational actions are composed of actions taken by individuals, which are composed of actions taken by networks of neurons.

The next sections examine each of these stages in turn, focusing on their role in the lifecycle of an action and how they relate to power over and susceptibility to capture of shared resources. As we step through each phase, keep in mind that _fundamental power_ is power over a resource itself, while _soft power_ is the ability to influence those with fundamental power.

Note that while an agent can capture a shared resource by accumulating either fundamental or soft power over it, the biggest risk is associated with fundamental power. Networks are most susceptible to capture during action phases where fundamental power is wielded, and therefore those phases are where capture-resistant mechanisms are most crucial.

**Propose**

![](https://spengrah.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FepxqoM8Z8CFwOIVPsxc9j.png&w=3840&q=75)

The agent’s agenda is set in the Propose phase. What problems should the agent attempt to solve? Which choices should the agent consider?

Participation in the Propose phase within a network spans from **centralized** to **decentralized**, describing how widely distributed the power to add options to the network’s agenda is.

In networks where the agenda is informal and doesn’t define which actions can be executed, the power to propose is influential rather than fundamental. Proposals don’t impact these networks’ shared resources, so the risk of capture is low and a degree of centralization is acceptable.

However, in networks where actions must go through a formal proposal process – particularly those using capture-resistance mechanisms – the power to propose is an expression of fundamental power because it directly impacts the list-of-proposals shared resource. A [decentralized Proposal phase is critical](https://twitter.com/RichDecibels/status/1455495908725035008) to protecting such networks from capture.

**Decide**

![](https://spengrah.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FfnkJOrPHb4mPng0j4SmpB.png&w=3840&q=75)

Options on the agenda are selected for execution in the Decide phase. Should the agent execute the proposal or not? Which of the proposed options should the agent choose?

Participation in the Decide phase spans from **centralized** to **decentralized**, describing the proportion of agents in the network having a voice in the decision-making process.

We often assume that decision-making is where the power lies. After all, bosses make decisions, and bosses have the power. Right?

Well, not quite. In the context of a network action that impacts a shared resource, bosses are indeed the final decision-makers, but more importantly they have the power to _execute_ the actions they select. By itself, a decision about what action to pursue does not impact the network’s shared resources. To do so, the decision must be paired with execution.

Therefore, risk of capture in the Decide phase is not catastrophic. While there are in many cases benefits to decentralized decision-making, it is not a strict requirement for effective capture-resistance. We’ll see why in the next section.

**Execute**

![](https://spengrah.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2F0Pfmx1917j_TuIrEi8Lns.png&w=3840&q=75)

In capture-resistant governance, execution is king. The Execute phase is where the selected action is brought to bear. It’s where the action is carried out, and where resources are deployed and affected.

Participation in this phase spans from **centralized** to **decentralized**, describing the proportion of agents in the network sharing the power to execute actions selected in the Decide phase.

As we’ve alluded to, in a network, agents who can participate in this phase wield fundamental power in the form of direct control over the network’s shared resources. If this power is concentrated in the hands of a few, the network is highly susceptible to capture by internal agents. No matter how decentralized the Decide phase may have been, there is nothing structurally preventing those with executive power from ignoring the result and executing their desired action.

Even if such a network avoids capture, centralized execution can have other negative effects. As we saw in the previous section, anybody without executive power involved in decision-making must win the favor of executives to see their recommendation put into action. Even if the Decide phase is technically decentralized, in practice a centralized Execute phase exerts a centralizing force on decision-making.

This is how many traditional organizations operate. Non-executives are subservient and have far less chance of having a significant impact on the organization.³

Decentralized execution changes the game. Where centralized execution creates existential capture risk, **decentralized execution acts as a strong backstop to other forms of capture**. As long as executive power in a network remains distributed across a wide portion of the agents, the network has flexibility to experiment with various forms of decision-making and evaluation.

Separation between decision-making and executive power is uniquely possible within capture-resistant structures. It is why decentralized decision-making is not a strict requirement. It is also why decentralized organizations can be fluid and adaptable. When executive power is decentralized, leadership can truly emerge from anywhere.

Due to its property of changing the state of the world, Execution has a second dimension. This occurs on a spectrum from **dependent** to **autonomous**, describing the extent to which execution can be stopped, altered, or otherwise interfered with by an external agent.

Most traditional organizations rely on rules and regulations imposed by a higher body for protection from internal capture. Actions they execute are subject to approval by external actors, which means they are susceptible to capture by those same actors. A network that executes actions autonomously, on the other hand, is resistant to capture by external agents.

**Evaluate**

![](https://spengrah.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FV3qgpsbjNJqEr4BLdXiGN.png&w=3840&q=75)

Agents analyze the impact of executed actions in the Evaluate phase. This evaluation often becomes an input into the Propose phase for subsequent actions, initiating new action cycles.

Participation in the Evaluate phase spans from **centralized** to **decentralized**. The degree of decentralization is often determined by the transparency of the network’s operations. If the network is organized on a public blockchain and communicates in public, even external agents can participate in evaluating its actions.

Evaluation is informational in nature and does not itself impact shared resources, so participants may wield influence but not fundamental power. While a decentralized Evaluate phase is often valuable, it is not a strict requirement for effective capture-resistant governance.

### 4. Case Study: What Makes a DAO a DAO

![DAOs are the strongest form of capture-resistance governance](https://spengrah.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2F8Omvd-9Qd6u65GsaJq6bW.png&w=3840&q=75)

DAOs are the strongest form of capture-resistance governance

The _Anticapture_ framework can be used to investigate a number of questions relating to capture-resistant governance, many of which we’ll explore in subsequent articles. Today, we start by examining one of the most burning questions in this space: what makes a DAO a DAO?

Most approaches to answering this question to date default to referring to particular technologies (e.g., “A DAO is an organization run via smart contracts”) or prescribing structures (e.g., “DAO members have tokens and use them to vote on proposals”). For a definition to endure beyond existing implementations, however, it must remain un-opinionated and stick to first principles.

With the Anticapture framework in hand, we can conceptualize DAOs as a strong form of capture-resistant governance. In a sense, this means that DAOs inherit the basic properties of the parent class of capture-resistant governance. Like any instantiation of capture-resistant governance, DAOs are networks of agents, they manage shared resources, and they have a purpose.

A DAO’s purpose does not need to be explicit, and a DAO might have more than one purpose. Indeed, a DAO’s purpose(s) might even emerge from varied motivations of the agents in its network. To say that a DAO has purpose is simply to say that it acts with intent.

Finally, like other forms of capture-resistant governance, DAOs protect their resources to some degree from capture.

What distinguishes DAOs from those other forms is how and how strongly DAOs resist capture. Specifically, **DAOs are resistant to capture at the most vulnerable point: the Execute phase** (as explained above) — the point where a network takes actions over their shared resources.

When DAOs take actions that impact or leverage their shared resources, the execution of those actions occurs in both a **decentralized** and **autonomous** fashion. The decentralized aspect of the execution requires that all agents _in_ the network share the power to execute actions, and is how DAOs primarily resist capture by internal agents. On the other hand, the autonomous aspect of the execution requires that no agents _outside_ the network have power to execute – or alter – the DAO’s actions, and is how DAOs primarily resist capture by external agents.

Putting it all together, we can summarize as a single-sentence definition of a DAO:

> A DAO is a network of agents who share common purpose, and are the only ones who hold the power to execute actions that manage a set of shared resources.

![Props to Nick Naraghi for compressing this down from a previous version](https://spengrah.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FfDxQiiNCCJKWQZnNjsg64.png&w=3840&q=75)

Props to Nick Naraghi for compressing this down from a previous version

We’ll explore this definition and its implications often in subsequent articles. In the mean time, if you’re a DAO operator, you may be wondering why permissionlessness is nowhere to be found. That is intentional: since it is possible for executive power to be sufficiently decentralized without being open to the entire world, permissionlessness is not necessary to resist capture. In fact, in some circumstances permissionless participation can actually threaten a DAO’s resistance to capture by creating more attack vectors. [Conflating decentralization with permissionlessness](https://twitter.com/josephdelong/status/1486826871195152386) is one of the most common mistakes in the DAO space.

### 5. Where to go from here?

Your mission, should you choose to accept it, is to use the _Anticapture_ framework in your thinking, discussions, and work related to DAOs and other forms of governance. When coming across a new decentralized community, or when working within your own community, ask yourself how susceptible it is to capture. What shared resources does it own and how does it manage them? How distributed (or concentrated) is the executive power?

As you do this, you may find that many communities calling themselves DAOs fall short of the criteria suggested by the _Anticapture_ framework. Some of these _aspiring DAOs_ may be structured as tokenized communities with a multisig treasury “controlled” by Snapshot signaling, where executive power is concentrated in a handful of multisig signers.

![Many Aspiring DAOs are much less resistant to capture than DAOs.](https://spengrah.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FWzqY9U60f9njuWibbhkIn.png&w=3840&q=75)

Many Aspiring DAOs are much less resistant to capture than DAOs.

If you happen across one of these less-capture-resistant organizations, consider two things. First, how might it alter its structure to become more capture-resistant? And second, what valuable properties does it have that are worth exploring and should possibly be preserved in the new structure?

In this article we touched on the attributes that make capture-resistant governance a powerful new tool for human progress, and we used the framework in one example to better articulate what a DAO truly is. In future posts, we’ll explore the _Anticapture_ framework further and in more detail to develop a full taxonomy of the many forms of capture-resistant governance.

Until then, good luck resisting capture!

---

### Footnotes

1. “Private” in this context refers to the general concept of power and control described here, not to the specific exercise of power in the form of access control or obfuscation (as in “privacy”).
2. Claims on such resources, however, can be shared.
3. Social dynamics and reputation can mediate these effects, but only partially and under certain conditions, such as when executives have public reputations to uphold.