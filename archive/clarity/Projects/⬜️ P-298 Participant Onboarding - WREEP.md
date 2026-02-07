>This page is deprecated. Please visit Charmverse for the current version:
 [https://app.charmverse.io/superbenefit/onboarding-links-and-procedure-3440478154259734](https://app.charmverse.io/superbenefit/onboarding-links-and-procedure-3440478154259734) 

Important Assets
- Discord
	- [#wreep-info invite link (public)](https://discord.com/invite/PGdYKB9Q3B)
- Docs
	- [WREEP Docs Public (reader) UI](https://mee6.xyz/en/dashboard/874697948838101092/reaction_roles/1163957812506669056/edition)
	- [WREEP Docs Editor UI (Gitbook)](https://app.gitbook.com/o/q4gQGqoLDMSfeK1Ur4jL/s/Hqn2HJt3kMFOCpAff1rC/)
	- [WREEP Docs GitHub (backups/maint)](https://github.com/superbenefit/WREEP-docs)
- Lu.ma
	- [WREEP Events](https://lu.ma/wreep)
- Signup Forms (Deform)
	- [Steward Signup](https://wreep.deform.cc/steward-signup/) ([results](https://docs.google.com/spreadsheets/d/198akpZEhwy5NTRELPR4wATc_ZrZa4MbG8zRCg3j2Z_I/edit#gid=0))
	- [Pilot Stakeholder Signup](https://wreep.deform.cc/pilot-signup) ([results](https://docs.google.com/spreadsheets/d/1o_EBUb0n8vN3txTuotRczdJjztGnQQ1878Zi8a_v6ZU/edit))
	- [Community Signup](https://wreep.deform.cc/community-signup) ([results](https://docs.google.com/spreadsheets/d/1XNe90fr_lJO3zo5SP642tnEuqkYRlSCjVZVI2nq4ozw/edit#gid=0))
- Collab.land
	- [Token-Gating Rules](https://cc.collab.land/dashboard/874697948838101092/tgrs)
	- [Role Composition](https://cc.collab.land/dashboard/874697948838101092/role-composition)
	- [Guest Passes](https://cc.collab.land/dashboard/874697948838101092/guest-passes)
- Mee6
	- Embeds:
		- [#wreep-info intro embed](https://mee6.xyz/en/dashboard/874697948838101092/guild_embeds/1163948186377912320/edition) 
		- [#wreep-info notification opt-in](https://mee6.xyz/en/dashboard/874697948838101092/reaction_roles/1163951889025466368/edition)
		- [#wreep-info SB channel opt-out](https://mee6.xyz/en/dashboard/874697948838101092/reaction_roles/1163957812506669056/edition)
	- Automations:
		- Just chat pings for now; Additional onboarding interactions can be configured here.
		- [Community Join Notification](https://mee6.xyz/en/dashboard/874697948838101092/automations/1162969751496962048/edition)
		- [Steward Join Notification ](https://mee6.xyz/en/dashboard/874697948838101092/automations/1163524666904543232/edition)
		- [Pilot Join Notification ](https://mee6.xyz/en/dashboard/874697948838101092/automations/1163524977371262976/edition)

## General Onboarding Process
1. ### Exchange information
	- Direct the user to the [Docs](https://mee6.xyz/en/dashboard/874697948838101092/reaction_roles/1163957812506669056/edition), or directly to the signup form. They'll find links to join the chat, submit an application form and more. Form responses are recorded in the relevant Gsheet.
	- Alternatively, you can collect the user's ETH address and discord handle, then move on to step 2.
2. ### Mint Role Badge (Hat)
	- Mint the user the appropriate hat for their application/role using the [Hats App](https://app.hatsprotocol.xyz/trees/10/30) or [Sobol Composer](https://sobol.io/d/labs/hats_composer?chainId=10).
3. ### Add User to Discord
	- In Discord, right-click the user's name or pfp, then click "Apps" in the context menu. Select "Guest Pass", then select the appropriate guest pass from the modal. This will authenticate the user in the token gate and add them to the relevant chat channels.
	- Note that Guest Passes are valid for 14 days. The user will still need to verify their wallet (and ownership of the appropriate Hat) with the Collab.Land bot to keep their role after that time.
	- If the user did not receive a Hat, move on to step 4 to request their address using a welcome message. Mint them a hat with the provided address.
4. ### Send a Welcome Message (Optional)
	- If the user requested follow-up contact from the core team, or if you need more information from them, create a **Private Thread** in the #wreep-info channel and tag the user in a welcome message.
	- Be sure to tag the Collab.Land bot in your welcome message if they need to verify their wallet. This will pull the bot into the chat so it can accept commands.
