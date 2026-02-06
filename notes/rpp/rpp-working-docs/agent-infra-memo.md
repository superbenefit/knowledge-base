
# Agent Infrastructure Considerations

*memo from rathermercurial.eth on AI infrastructure considerations for SuperBenefit.*

SuperBenefit is expanding its use of AI agents to support collaborative learning journeys, governance frameworks, and project development. As our AI-assisted work scales across multiple contributors and projects, we need shared infrastructure to reduce costs, improve coordination, and enable better integration between initiatives.

By creating shared AI infrastructure and common tooling libraries, contributors will be able to deploy AI systems more efficiently and build on each other's work more effectively, resulting in accelerated development of cooperative AI capabilities that serve SuperBenefit's mission of transformative organizational change.

## Infrastructure & Shared Tooling

While many research and dev tasks can be executed using our personal machines or subscriptions, deploying and scaling these systems can be cost-prohibitive. We're also doing a lot of parallel work which can be technically difficult and time-consuming to coordinate/integrate. 

We need to deploy some common SuperBenefit infrastructure to economize costs and allow contributors to better build on each others' work. 

### Shared Backend Tooling

Where common tooling exists between implementations (like skills, datastores, MCP servers, etc), we can create modular, purpose-built AI tools for general use by contributors and agents. We can also create AI tools to produce these ai tools, so contributors can more easily build the ai tools they need using the ai tools they already have. Basically it's ai tools all the way down. 

- [ ] Create instructions, best practices for making/maintaining tools, along w/ tool-creation tools.
- [ ] Create common tooling & libraries for functions we already use (RAG, skills, tasks, etc.)

### Domain & Edge Hosting

Most agentic tooling can be deployed to serverless edge platforms for cost-savings, easy deployment and efficient scaling. We're already using edge resources for most public-facing information, so deploying more workloads to cloud platforms won't add any new trade-offs to consider so long as we continue to follow security best practices.

- [x] Setup a Cloudflare account
- [ ] Register a dev domain like SuperBenefit.dev.
- [ ] Setup a funded payment method for billing plans
- [ ] Set spending limits and use services as needed (most have free tiers)

We currently use Cloudflare for superbenefit.org, which is owned/managed by Igniter. I created a [SuperBenefit cloudflare account](https://dash.cloudflare.com/c36c9a59f6251430c514f4fff55c3f4a) so we can share access and more easily configure tooling on our account without impacting Lewwk's bill. We can use this account to buy a dev domain, set a budget and allow contributors to provision all of Cloudflare's products under one billing plan, simplifying spend management significantly. 

#### Future hosting Considerations

As we bring more AI tools online, we should add a production domain like SuperBenefit.ai. This will allow us to better secure our tools by leveraging Cloudflare's built-in domain isolation, while also being able to easily network tools across domains within the same account.

Once we have the Cloudflare account fully secured and funded, we can begin the process of moving SuperBenefit.org into the DAO-owned cloudflare account as well.

### Payments Infrastructure

We need a debit card to pay for most cloud services. We can apply for neobanking services now that we have our MIDAO registration finalized. MIDAO recommends applying to several providers like [slash](https://www.slash.com/industries/web3), [dakota](https://dakota.xyz/), [onesafe](https://www.onesafe.io/cards), and [fern](https://fernhq.com/businesses) (by [Rain](https://www.rain.xyz/rain-spend)).

- [x] Finish MIDAO Registration
- [ ] Apply to neobanking services, choose a platform, kyc
- [ ] Setup accounts & issue payment cards

We can also use these neobanking services for on/offramping, fund transfers (wire, ach, etc), providing banking services for cells, etc.

