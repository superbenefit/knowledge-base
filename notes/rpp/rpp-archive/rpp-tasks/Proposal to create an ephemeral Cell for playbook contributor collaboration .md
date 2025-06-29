# 

## Proposal outline

**Purpose:** 

- The playbooks project is entering its delivery phase. To do this we need to coordinate both internal SuperBenefit contributors and external contributors to deliver many interconnected pieces of content

- Rather than having the Playbook stewards project-manage this in a tightly held top-down way, we want to leverage decentralized coordination from the contributors to self manage the delivery tasks

**Approach:** 

- The playbooks contributors are mostly experienced web3 participants comfortable with web3 coordination practices and tooling. As a result we are proposing establishing a Cell using a moloch contract as the container for project delivery

- This will be an ephemeral Cell, meaning that it will be a temporary vehicle and will be wound down when the project is complete 

- The body of this proposal contains the proposed Cell state for the Playbooks Cell. This proposal will approve the creation of this Cell and give it the authority to coordinate the delivery of the Playbooks project deliverables (as defined by the Playbooks stewards)

- If this proposal is approved by the RPP core team. The Cell state will then be copied into the Playbooks-RPP task

**Proposal request:** 

- Approve the creation of the Playbooks Cell based on the Cell State outlined below

- Approve a  budget of xxx USDC to be allocated to the Cell's moloch contract to fund the creation of the project's deliverables

# Cell state

Note - this cell state follows the following template and instructions referred to in the [group state pattern](https://github.com/superbenefit/knowledge-base/blob/main/notes/rpp/working-docs/group-state.md) in the SuperBenefit knowledge garden

**Cell name:** RPP Playbooks cell

**Date of creation:** 

**Description:**

This is an [ephemeral Cell  ](https://github.com/superbenefit/knowledge-base/blob/main/tags/ephemeral-cell.md)that is created to coordinate the delivery of artifacts for the playbooks project.

## Purpose

**Purpose/problem**

Creating playbooks will require pulling together and coordinating contributors to work on them. 

Playbooks as we are designing them are not single, separate pieces of work that can be done as individual tasks, instead the information architecture that we are building around the RPP in general, and the playbooks project specifically, requires interlinked sets of concepts, primitives and patterns. To deal with this complexity and the need for ongoing sense-making, contributors to the playbooks project need a place where they can collectively collaborate and coordinate around the work that needs to be done. 

To manage this we are creating an [ephemeral Cell](https://github.com/superbenefit/knowledge-base/blob/main/tags/ephemeral-cell.md) that can be resourced and tasked with playbook delivery. 

**Genesis of the Cell**

This Cell is being created by the RPP OS stewards and approved (via this proposal) by the RPP Core team

**Goals**

At a minimum to deliver the 2 playbooks that RPP is contracted to deliver as well as supporting research and accompanying knowledge artifacts 

**Design/intentions**

The Cell is set up as a moloch contract where contributors from within and from outside of the SuperBenefit network can coordinate/be coordinated to deliver the assets that the project needs. The Cell will be closed down and remaining funds returned to the RPP project when the playbooks project is complete. 

---

## Practice 

**Relationships**

- The Cell is created and funded by the RPP core team, via this proposal

- It takes it's direction from the playbooks steward role holders who hold the strategy for the Cell

**Formal structure**

- The Cell is managed through a [Moloch](https://admin.daohaus.club/#/molochv3/0xa/0xe80ffca045bf338cb088b8fb635130431ec6f976) contract

- This is administered through the [playbooks cell hat](https://app.hatsprotocol.xyz/trees/10/30) worn by the Moloch's safe address: 0xe80ffca045bf338cb088b8fb635130431ec6f976

**Team agreements**

- RPP Core team has overall responsibility for the Cell

- Strategy and operational planning is delegated by the RPP core team to the [playbooks stewards](https://app.hatsprotocol.xyz/trees/10/30?hatId=30.1.3.1.3), currently:

  - rathermercurial.eth

  - yeoro.eth

- The playbooks stewards will evolve the tasks in the [operational plan](https://app.charmverse.io/superbenefit/operational-plan-for-playbooks-project-rpp-03973760590487441) in line with the needs and insights identified by the cell 


- Membership:

  - Members of the Cell (contributors) can be found in the [members list](https://admin.daohaus.club/#/molochv3/0xa/0xe80ffca045bf338cb088b8fb635130431ec6f976/members) of the moloch

  - Members can request to join the cell via governance proposal

  - Participation is optional. Contributors **do _not_** need to join the cell to complete tasks, propose, or participate in the chat

  - Note - if several people also want to join the cell, please ask a steward to create a batch proposal. This helps reduce voting fatigue.

- Tokens/governance

  - Individual human members may own 1 voting share across all of their wallets, and may transfer their share between their own wallets (honor system)

  - Members are encouraged to delegate their shares to if they don't plan to a vote.

  - Members are expected to ragequit their voting shares if they don't plan to contribute in the foreseeable future

  - It is expected that the contract will only be used for token issuance but molach v3 features are available if needed

  - Any member may hold any amount of loot tokens (non-voting shares) and do whatever they want with them, including trading or cashing out, permissionlessly, at any time.

  - Voting membership is not required for a contributor to receive and cash-out loot tokens

  - Governance parameters:

    - 1 Member, 1 Vote

    - Quorum: 30%, Threshold: 60%

    - Voting Period: 2 days

    - Grace Period: 1 day

  - Each cell member + members of the RPP core team gets one vote 

  - The RPP core team delegates its votes (currently to yeoro.eth) 

  - RPP rules require 48 hours feedback/notification period for all governance proposals

    - Please create a thread in the #RP-playbooks channel with your proposal for discussion

    - Surprise proposals to spend RPP funds are considered governance attacks (will probably ragequit and fail)

    - Stewards will check for new proposals daily EOD

- Support:

  - Playbook stewards are available to facilitate all governance matters

  - Help for contributors can also be requested through the #rp-core channel on Discord.

**Decision-making**

- The playbook stewards propose funding for the Cell to the RPP core team for approval

- Strategy decisions will be made by the playbook stewards and outlined in the tasks in the operational plan

- Working agreements and allocation of the tasks will be made by the [members](https://admin.daohaus.club/#/molochv3/0xa/0xe80ffca045bf338cb088b8fb635130431ec6f976/members) of the Cell

**Treasury management**

Multi-sig:

- Funds for the cell are held in Moloch's [safe contract](https://app.safe.global/balances?safe=oeth:0x567297a3d07a093f1a0cf4aa4eada7c538b5f7f8): 0xe80ffca045bf338cb088b8fb635130431ec6f976

- Funds can be distributed using [a proposal](https://admin.daohaus.club/#/molochv3/0xa/0xe80ffca045bf338cb088b8fb635130431ec6f976/proposals), or by transferring loot tokens directly. However submitting a payment request to a steward is recommended instead.

- The RPP core team has ragequit rights and can pull remaining funds from the safe if it chooses

- When the playbooks project is complete the cell will be wound down and all remaining funds in the safe contract will be returned to the RPP project


Contributor rewards:

- The playbook stewards are responsible for funding tasks

- Rewards are allocated in the form of loot tokens (pbLoot)

- Contributors will submit a payment requests for tasks completed to be approved by the stewards

**Tokens & badges:**

- Contributor Badge (ERC-1155, Hats Protocol)

  - [30.1.3.2](https://app.hatsprotocol.xyz/trees/10/30?hatId=30.1.3.2)

- Steward Badge (ERC-1155, Hats Protocol)

  - [30.1.3.1.3](https://app.hatsprotocol.xyz/trees/10/30?hatId=30.1.3.1.3)

- Voting Token (ERC-20, transferable)

  - [0xf250d8e4d3e21772ee2d18f77c9c3fb2193ccc17](https://optimistic.etherscan.io/address/0xf250d8e4d3e21772ee2d18f77c9c3fb2193ccc17)

- Financial Stake (ERC-20, transferable)

  - [0xdbeed908de92e7a719cb1b973cc7b18ebaa68213](https://optimistic.etherscan.io/address/0xdbeed908de92e7a719cb1b973cc7b18ebaa68213)

**Financial record keeping:**

- Safe transactions will be recorded in Den and can be verified on Optimism Mainnet


---

## Progress 

**Communication**

Core team

- Meetings

  - Playbook stewards will meet weekly as part of the OS stewards meeting (or ad hoc as needed)

  - Meeting notes will be recorded in the OS stewards weekly meeting doc, or playbooks cell meeting doc if available

  - Stewards will update the RPP core team a its weekly meetings and the stakeholder group at is monthly meetings

- Comms channels - we will use existing OS stewards and RPP core team channels + a dedicated discord channel for the playbook cell contributors to use


Members/contributors 

- Meetings - we are yet to decide whether regular scheduled meetings will be needed for contributors. This will happen once they have been convened 

- Comms channels - we will use a dedicated discord channel

**Strategy/planning**

See:

 

 

**Project/progress management**

Not defined yet

## 