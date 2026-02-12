---
group: dao-primitives
---

#[[257 Proposal SBP8- DAO Primitive Project
]] 




DAOhaus - no code platform for creating and managing DAOs



Features:
- **Treasury Management**
	- Supports both ERC-20 tokens and ERC-721 NFTs
	- All members share direct ownership of the treasury based on their Shares and/or Loot in relation to one another. Shares grant **voting power **as well as a claim to the Treasury funds, whereas Loot only grants you rights to the funds in the Treasury.
	- Minion Vaults
		- Another way to hold funds is through Minions. Minions enable your DAO to call arbitrary contracts, enabling you to do many things such as manage ENS, collect NFTs, manage treasury in DeFi, etc.
	- Common Treasury Use Cases
		- Adding & Whitelisting ERC-20 Tokens
		- Adding Tributes to join a DAO
			- Currently, only ERC-20 tributes are available, but ERC-721 NFT tributes are coming soon.
		- Requesting Funding from the Treasury
- **Versatile Governance**
	- Proposals can be used for all types of decision-making in the DAO. Add/remove members, allocate Shares and Loot, distribute funds, and even interact with other applications and communities.
	- These are the standard proposal types used within the governance in most DAOs:
		- **Membership**- Tributing capital and Requesting new shares to join the DAO
		- **Funding**- Tributing Spoils or Requesting funds from the DAO to work on internal projects and improvements
		- **Token**- Request to add support for a new ERC20 token
		- **Trade**- Request the DAO to swap one asset for another within the War Chest
		- **GuildKick**- Request to forcibly remove a malicious member through a vote
		- **Minion**- A contract that allows execution of arbitrary calls i.e swapping assets in the DAO bank
- **Boosts Marketplace**
	- Boosts are plugins that introduce functionality to your DAOs beyond the core functionalities of treasury, shares, loots and proposals. You can think of them like apps for iOS devices, plugins for Shopify shops.
	- Boosts that require smart contract interactions will require a [Minion](https://daohaus.club/docs/users/boosts/minion) to be summoned.
- **Membership**
	- Prospective members can submit a Membership Proposal by navigating to the DAO they're interested in and selecting **View Proposals**, subsequently clicking **New Proposal **and **Membership**, existing members can vote on whether to accept or deny admission of candidates on a case by case basis.
	- Members can exit at anytime, as long as they don't have a 'Yes' vote on an open proposal
	- Shares
		- Shares are granted to members in order to allow them to vote on proposals in the DAO. Shares also represent a claim on the tokens held in the DAO. Shares can neither be exchanged or sold to other members of the DAO.
	- Loot
		- Non-voting Shares in the DAO. Guilders can ragequit Loot to withdraw proportional amount of assets from the DAO based on current Share Value.
	- Ragequit
		- Rage Quit allows a member or Loot holder of the DAO to leave with all or part of their share of the tokens.
	- ### GuildKick
		- A proposal to kick out a member of the DAO. Converts any Shares they may have into Loot, thereby removing voting power. _Warning_ once a member is guildkicked, they become _jailed_ and cannot be added as a member ever again.
	- RageKick
		- After a successful GuildKick, anyone can ragekick that member. Ragekick acts exactly as a ragequit, burning their Loot and returning their proportionate tokens.



Govrn - **anything that governs you, you should be able to govern**

 [https://medium.com/govrn/govrn-governance-model-27603e6dedd9](https://medium.com/govrn/govrn-governance-model-27603e6dedd9)
 
 [https://www.figma.com/file/RXrVG6UBNTrsJ7uwqPAcY0/Govrn-Governance-Model-Diagram?node-id=0%3A1](https://www.figma.com/file/RXrVG6UBNTrsJ7uwqPAcY0/Govrn-Governance-Model-Diagram?node-id=0%3A1) 
**
**
- four guiding principles:
	- Proof of Engagement
	- Proof of Commitment
	- Proof of Completion
	- Composable Governance
- The Govrn governance model operates as two modules:
	- Module 1: The Movement Model
		- creates a framework for community contributions focused on operational priorities. The Model allows community members to contribute and earn rewards/governance for those contributions.
	- Module 2: Outcome Coalitions
		- give a community ways to scale up or scale down initiatives they wish to accomplish. By allowing you to vote or fund Outcome Coalitions with the “rewards” you earn in the Movement Model, it’s the Outcome Coalitions that make the “rewards” valuable.
	- While each module can work on its own, the interplay between the modules increases the value created for the community. One is focused on supporting ongoing operations and the other enables members to coordinate towards shared goals. The points you earn via the Movement Model can be used (e.g. vote or fund) on the Outcome Coalitions and increase your relative governance power within the community.
	- The Movement Model:
		- The Movement Model is a framework that allows communities to define a set of operational tasks, and assign point values to each task. As community members complete a task, the member is rewarded with its associated point value. The individual can utilize their points by participating in governance, funding projects/outcome coalitions, or just holding.
		- This forward-looking approach should be combined with a retroactive/bottom-up award system such as SourceCred or Coordinape.
	- Outcome Coalitions:
		- Outcome Coalitions are a way for community members to create sub-communities to align and accomplish specific goals.
		- Stakeholder Buy-In: We’ve seen that there are two main types of stakeholders from whom buy-in is needed to accomplish goals: Builders and Funders.
			- **Builders: **Builders have the knowledge, tools, and viewpoint to be able to execute on community decisions and deliverables towards a community goal.
			- **Funders: **Funders are members of a community and believe a certain goal would be beneficial for the community, but they might not have the skill set needed. As funders, they can use their unique perspective to influence governance by funding the initiatives they believe in.
		- Builders have to “opt-in” to building the outcome
		- Funders have to “opt-in” funding an OC, and voting on a specific proposal
		- Builders stake their value points on an OC. This represents a commitment to working on the project.
		- Funders donate their funds to the project, showing that they’re willing to fund the project. When a funder funds a project, they receive a corresponding amount of voting tokens to vote on a specific proposal
		- Funders can donate either value points earned in the movement model or normal tokens. Ultimately it’s up to what the builders are willing to accept as credible funding.
		- In order to determine if an OC’s goal is reached and ensure all participants are aligned on how to accomplish the goal, completion criteria proposals are submitted to the OC.
		- Funders receive votes proportional to their contributions and vote on their preferred proposal.
		- If they vote for a proposal that the builders don’t agree with, the builders can unstake their points/funds during the grace period.
		- Once a completion criteria proposal is met, the builders receive both the original stake, as well as payment from the funding raised by the funders.
		- If the goal is not achieved (aka completion criteria is not met), both the points staked from funders and builders go to the community treasury. That said, we know many unforeseen consequences occur that prevent goals from being achieved as originally intended. So we enable funders with the ability to vote to override and send the stake and the funding (the whole amount or proportion) to builders.
		- We don’t recommend the funds being returned to the funders because it creates a zero-sum game incentive. Being able to have funds returned to funders give funders an incentive to work against the builders, as they’d (funders) receive their funding back.
		- At any point in the process, the OC members can submit a proposal to the main DAO to be reimbursed for funding. This allows the OCs both to operate autonomously, but also receive funding from the main DAO for providing value to the main DAO.
