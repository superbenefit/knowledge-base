#[[257 Proposal SBP8- DAO Primitive Project
]] 



Colony:



Built on gnosis chain, non technical dao launcher
features:
- Token Creation
- Can separate tokens and voting power (reputation)
	- Reputation confers that power upon members of your DAO. If they abuse the trust that the community has placed in them, Smite them to burn away their reputation. (votekick)
- easily deposit and reclaim your tokens from the locking contract that Colony uses to let you stake, claim reward distributions, and participate in token votes
- payments, revenue splits, general fund transfers
- permissioning system enables people or smart contracts to be given fine-grained authority in specific aspects of specific domains within the organisation
- Teams feature: **Root**, which is the "colony-wide team". You can decide to create as many teams as you wish, each representing a different area of your organization.
- Permissions:
	- Root allows you to take actions affecting the Colony as a whole, such as changing the colony details and minting tokens.
	- Administration allows you to create and manage expenditures, but not to fund them.
	- Funding allows you to fund expenditures, and transfer funds between Teams. 
	- Architecture allows you to set permissions in the active Team, as well as changing the Team details. Architecture permission in Root allows you to create and edit Teams.
	- Arbitration allows you to resolve disputes, make state changes, and punish bad behavior.
	- Recovery allows you to disable the colony in an emergency, update storage, and approve reactivation. Recovery permission is only effective in **Root**.
- modular, so you can add the functionality that your DAO needs. Extension Manager allows you to select, install, configure, and upgrade your colony's chosen features.
	- optimistic voting module
- can use metatransactions to start a dao without needing any DAI for gas
- transactions log
- usernames and profiles
- contributor roles

in progress:
- Reputation Miner provides users with a way to participate in the validation of reputation, securing and helping to decentralize Colony’s Reputation System, all while earning income doing so.
- Decisions is an evolving feature, with the first version being a proposal process built into Colony that leverages the reputation-weighted governance within Colony.
- Providing more advanced payment functionality. Allowing payments to be made to multiple recipients in multiple tokens all in one payment. With added payment security delays.
- An integration between Colony and Gnosis Safe, allowing DAOs to keep and manage any chain that Gnosis Safe supports, using Colony governance mechanisms.
- Staged Payments allows for contributors to be paid based on different stages of delivery. For example, a project with multiple delivery milestones.
- Split Payments allows you to distribute funds equally or unequally to different people or addresses in one transaction.
- Recurring Payments
- Providing the convenience of being able to upload a .csv of multiple recipients, tokens, and payment amounts.
- Coin Machine (token sale mechanism)
- Finances dashboard
- Tasks
- Notifications

planned:
- token weighted voting
- Combining Reputation-Weighted with Token-Weighted Governance for a more flexible governance mechanism in your DAO. This allows both contributors and token holders to have a say.
- Providing a granular way to set the governance policies within your DAO. Such as being able to set the governance mechanism based on permissions and within teams.
- Scalar voting makes it possible to aggregate the collective intelligence of your colony by unlocking the ability to vote on any value between two discrete limits.
- Use your Gnosis Safe multi-sig to have control over your colony's most critical permissions. This means combining Multi-sig with reputation-weighted governance.
- Arbitrary contract calls: choose a contract, input an ABI, select the functions, set the variables, and hey presto, you got yourself a transaction. A super flexible contract interaction tool built into your colony.
- Cross-Chain Execution - Execute transactions on different chains from within your Colony DAO. Meaning you can utilise the governance features of Colony no matter the chain.

- Control the tokenomics of your DAO’s token, such as the total supply, the issuance rate, number of token holders, and to keep track of the current supply in circulation.
- An incentive mechanism that allows a Colony to allocate part of its funds for distribution to its members, proportional to their reputation and token holdings. Like a dividend.
- Fund proposals in order of collective preference. Think of it like a category for allocating capital. The more reputation that has upvoted a proposal, the faster it will be funded.
- Projects is a way to organise tasks within your DAO, as opposed to just a list of tasks that you have to wade through. It’s suitable for longer-term initiatives involving many tasks.
- Nest teams inside of teams to create more elaborate and focused org structures. Meaning contributors can more easily identify where they can get involved.
- Extension Manager v2 will provide Colony DAOs with the ability to maintain several versions of their extensions, with different configurations and purposes, thus avoiding lost history.
- Being able to join a specific team allows contributors to really focus on their strengths and where they want to be able to contribute the most.
- Personal Dashboard


Lobby:
knowledge base app
- User accounts are based on Ethereum wallets, enabling token gating to fine-tune access control over your information and onboarding pages. Use roles and allowlists to fine-tune access to information within your knowledge base.
- By signing into Lobby, you'll get your own private Lobby workspace with our powerful editor, secured by your unique wallet signature.
- Wikis can be built to hold lots of documentation
- Can point out to other dapps to do things
