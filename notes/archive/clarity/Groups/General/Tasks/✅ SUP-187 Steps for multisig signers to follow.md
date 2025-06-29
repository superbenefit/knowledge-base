## **Process for multisig signing **
**Purpose**
To provide a guide for multisig signers to follow to make sure that the process is accurate and robust. To ensure that there are no mistakes that could cause a transaction to fail to execute in accordance with the proposal the transactions is executing. Also to catch any potentially fraudulent transactions. 
**Steps to approve/reject a transaction**
1. Read through the proposal and voting results - this is linked to in transaction notes (discord/clarity somewhere else? @remarkk any ideas where best to store a record of each transaction)
2. Review the transaction notes that explain what the transaction is how it follows the outcome of the of the voted proposal (proposal linked to in the notes)
3. Conversation/chat with the person who drafted the transaction or other signers (if needed) - Hold a commitment that signers must have full understanding of the transaction, what it does and how it works technically before they approve anything. And a commitment to question the transaction if there are any doubts. This can be done in the multisig-transactions private discord channel 
4. Steps to check the details of a transaction:
	1. Locate specific transaction in the GnosisSafe que
	2. Verify wallet addresses for each action- crosscheck with proposal/transaction notes
	3. Verify token amounts for each action - crosscheck with proposal/transaction notes
	4. Query any uncertainty 
5. Approve/reject transaction: 
	1. Push approve/reject
	2. Confirm in your wallet 
	3. Last person to approve (the 3rd approval) executes the transaction (unless otherwise stated in the transaction notes) - this may change if treasury is added separately to the multisig. In which case treasury will always confirm the transactions (and pay the gas fees)
	4. Last person notifies the multisig discord channel when it is approved/executed

**Creating Transactions **
- Transactions can be authored by any of the signers
- Transaction needs to be written exactly in accordance with the approved proposal. Note: Proposals that are approved through voting need to have an explicit (not subject to interpretation) action that the wallet can perform via a transaction. 
- The proposal needs to be linked to in the transaction notes
- Transaction notes need to contain any specific instructions about the timing of transaction e.g "please do not execute after final confirmation..."
- Signers are notified of transactions and the notes in the multisig discord channel

**Discord channel**
- Use the multisig-transactions private discord channel to post and discuss multisig transactions. This channel is kept private to protect against a malicious actor monitoring the channel for vulnerabilities



**Research**
- [https://forum.bankless.community/t/dao-control-of-treasury-multisig/1480](https://forum.bankless.community/t/dao-control-of-treasury-multisig/1480) 
- Notes on voting systems from FutraDAO
	- There are a few established voting systems, in rough order from most to least popular:

**Signal Voting with Separation of Powers**
- Submitted proposals that pass do not mean a smart contract will immediately execute.
- There should be a separate multisig where signatories should follow the proposal voted on and sign to execute (or override).
- We can select how many signer confirmations a transaction requires - including how many signatories, what threshold required to sign.
- Platform: Snapshot + Gnosis Safe
- Gnosis safe is a multi sig wallet,  the deployment cost is based on how many signatories you have.
- Snapshot is an offchain voting tool, so no gas fees. This is what the futdao.eth address we've got can be used for.
- Most of the DAOs I've been in use this, and there are features to play with for snapshot voting, potentially using one of the below voting methods.
- Pros
    - The leanest way to do a DAO.
    - This is one of the truly modular design DAOs - flexible and there is a separation of responsibility.
    - Gasless voting on proposals -  massive bonus as people may be hesistant to pay gas to vote even when its a couple cents.
- Cons
    - If you do not have access to enough signers to reach the threshold, you won't be able to recover your assets.
    - Proposals passed are non binding, and power may be concentrated in those who are wallet signatories. (edited)
	- _[_12:50_]_**Quorum Voting**
- Choosing a threshold that needs to be met for a proposal to pass.
- If we say choose 70% quorum, this means if you had 10 members, you would need 7+1 or 8 votes to pass a proposal. 
- Platform: Compound Governance
- Pros
    - This is the type of voting most of us would be familiar with, anyone involved in politics, boards or strata would have come across this.
    - Works well for DAOs with small amount of proposals.
- Cons
    - Selecting the quorum threshold - would you go low such as 20% or high such as 80%.
    - Selecting low makes it easier to pass proposals but could mean bad proposals are passed easily. 
    - Selecting high makes it harder to pass proposals if members aren't engaged, you will spend time chasing people up.
    - People usually don't vote if they don't support a proposal but you can't tell if they're not voting because they don't like it or they don't have an opinion or just haven't looked at the proposal.
	- [WebLink](https://discord.com/assets/08c0a077780263f3df97613e58e71744.svg)
	- 5
	- _[_12:50_]_**Relative Majority Voting**
- Compares the total number of votes against and for. If more are for the proposal, then it will pass.
- Platform: DAOHaus, TributeDAO fork (Moloch v3 and modular and extensible), MolochDAO fork.
- Pros
    - Easy for proposals to pass
- Cons
    - Easy for proposals to pass. If 3 people vote out of the possible 100 people, and 2 of the 3 vote yes then proposal will pass. Easy to game the system.
	- _[_12:50_]_**Holographic Consensus**
- Members stake funds for or against a proposal they predict will pass or fail. If your bet is correct then you financially benefit. Voting shifts to a relative majority from 50% quorum.
- Platform: DAOstack
- Pros
    - It costs you money to try and game the system. 
- Cons
    - Requires a lot of effort from DAO members.
	- 
	- 1
	- _[_12:50_]_**Conviction Voting**
- Members stake their powers to vote on proposals and gather enough votes to pass over time.
- Platform: Aragon 
- Pros
    - No need for majority to achieve consensus on each proposal.
- Cons
    - Slow to pass proposals.
    - Apparently needs to be used in combination with something else.
	- 
	- 9
	- _[_12:51_]_There are others but I do not know enough about them.

More reading:
[https://medium.com/daostack/voting-options-in-daos-b86e5c69a3e3](https://medium.com/daostack/voting-options-in-daos-b86e5c69a3e3)
[https://acceleratedcapital.substack.com/p/daos-and-democracy-voting-mechanisms](https://acceleratedcapital.substack.com/p/daos-and-democracy-voting-mechanisms)

