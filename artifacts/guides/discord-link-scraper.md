# Discord Link Scraper Guide

## 🌐 Overview

The Discord Link Scraper is a community intelligence harvesting primitive that automatically extracts and organizes links shared within Discord servers. This tool transforms your community's collective link-sharing behavior into structured data for knowledge base curation.

### What It Does
- Scans all accessible channels in a Discord server
- Extracts shared links with metadata (who shared, when, where)
- Filters out low-value domains (social media, Discord invites, etc.)
- Organizes results by domain and channel for easy review
- Outputs clean markdown files ready for curation

### Why You'd Use This
Discord communities naturally curate valuable resources through link sharing, but this collective intelligence is buried in conversation history. Manual extraction is time-intensive and incomplete. This primitive systematically harvests community-validated links that can become knowledge base entries, research resources, or curated collections.

---

## 🎯 Use Cases

### Knowledge Base Curation
- Extract research papers, articles, and tools shared by community members
- Build curated resource collections from community recommendations
- Identify trending topics and emerging tools through link analysis

### Community Intelligence
- Understand what resources your community values most
- Track knowledge sharing patterns and active contributors
- Discover high-quality sources your community trusts

### Content Strategy
- Identify popular external content for potential collaboration
- Find guest posting opportunities on sites your community engages with
- Build content calendars based on community-shared topics

---

## 🔧 Technical Implementation

### Core Script

```python
import discord
import re
from datetime import datetime, timedelta, timezone
import asyncio

# Configuration - Edit these lines:
DISCORD_TOKEN = "YOUR_BOT_TOKEN_HERE"
GUILD_ID = YOUR_SERVER_ID_HERE  # Replace with your server ID (numbers only)

# URL pattern for link detection
URL_PATTERN = re.compile(r'https?://[^\s<>"{}|\\^`\[\]]+')

# Skip low-value domains
SKIP_DOMAINS = [
    'twitter.com', 'x.com', 'discord.gg', 'discord.com', 
    'tenor.com', 'giphy.com', 'youtube.com', 'youtu.be'
]

intents = discord.Intents.default()
intents.message_content = True
intents.messages = True
intents.guilds = True
client = discord.Client(intents=intents)

async def extract_links_from_channel(channel, cutoff_date, links_data):
    """Extract links from a channel and its threads"""
    print(f"📡 Scanning #{channel.name}...")
    
    # Scan regular channel messages
    try:
        async for message in channel.history(limit=None, after=cutoff_date):
            urls = URL_PATTERN.findall(message.content)
            for url in urls:
                domain = url.split('/')[2].lower()
                if not any(skip in domain for skip in SKIP_DOMAINS):
                    links_data.append({
                        'url': url,
                        'domain': domain,
                        'channel': channel.name,
                        'author': str(message.author),
                        'timestamp': message.created_at.strftime('%Y-%m-%d %H:%M'),
                        'message_id': message.id
                    })
    except Exception as e:
        print(f"❌ Error reading #{channel.name}: {e}")
    
    # Scan thread messages
    try:
        # Archived threads
        async for thread in channel.archived_threads(limit=None):
            if thread.created_at and thread.created_at > cutoff_date:
                async for message in thread.history(limit=None, after=cutoff_date):
                    urls = URL_PATTERN.findall(message.content)
                    for url in urls:
                        domain = url.split('/')[2].lower()
                        if not any(skip in domain for skip in SKIP_DOMAINS):
                            links_data.append({
                                'url': url,
                                'domain': domain,
                                'channel': f"{channel.name}/{thread.name}",
                                'author': str(message.author),
                                'timestamp': message.created_at.strftime('%Y-%m-%d %H:%M'),
                                'message_id': message.id
                            })
        
        # Active threads
        for thread in channel.threads:
            if hasattr(thread, 'created_at') and thread.created_at and thread.created_at > cutoff_date:
                async for message in thread.history(limit=None, after=cutoff_date):
                    urls = URL_PATTERN.findall(message.content)
                    for url in urls:
                        domain = url.split('/')[2].lower()
                        if not any(skip in domain for skip in SKIP_DOMAINS):
                            links_data.append({
                                'url': url,
                                'domain': domain,
                                'channel': f"{channel.name}/{thread.name}",
                                'author': str(message.author),
                                'timestamp': message.created_at.strftime('%Y-%m-%d %H:%M'),
                                'message_id': message.id
                            })
    except Exception as e:
        print(f"❌ Error reading threads in #{channel.name}: {e}")

@client.event
async def on_ready():
    print(f'✅ Bot connected as {client.user}')
    await asyncio.sleep(2)
    
    guild = client.get_guild(GUILD_ID)
    if not guild:
        print(f"❌ Can't find server with ID {GUILD_ID}")
        await client.close()
        return
    
    print(f"🚀 Starting link extraction for {guild.name}")
    
    # Set timeframe (adjust days_back as needed)
    days_back = 730  # 2 years
    cutoff = datetime.now(timezone.utc) - timedelta(days=days_back)
    
    links_data = []
    
    # Get all readable channels
    for channel in guild.channels:
        if isinstance(channel, (discord.TextChannel, discord.ForumChannel)):
            if channel.permissions_for(guild.me).read_message_history:
                await extract_links_from_channel(channel, cutoff, links_data)
    
    # Process and save results
    if links_data:
        # Group by domain
        domain_groups = {}
        for link in links_data:
            domain = link['domain']
            if domain not in domain_groups:
                domain_groups[domain] = []
            domain_groups[domain].append(link)
        
        # Create markdown output
        timestamp = datetime.now().strftime('%Y%m%d_%H%M')
        filename = f"discord_links_{guild.name.lower().replace(' ', '_')}_{timestamp}.md"
        
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(f"# Discord Links Extract - {guild.name}\n\n")
            f.write(f"**Extracted**: {datetime.now().strftime('%Y-%m-%d %H:%M')}\n")
            f.write(f"**Timeframe**: {cutoff.strftime('%Y-%m-%d')} to {datetime.now().strftime('%Y-%m-%d')}\n")
            f.write(f"**Total Links**: {len(links_data)}\n")
            f.write(f"**Unique Domains**: {len(domain_groups)}\n\n")
            
            # Sort domains by link count
            sorted_domains = sorted(domain_groups.items(), key=lambda x: len(x[1]), reverse=True)
            
            for domain, links in sorted_domains:
                f.write(f"## {domain} ({len(links)} links)\n\n")
                
                # Sort links by timestamp (newest first)
                sorted_links = sorted(links, key=lambda x: x['timestamp'], reverse=True)
                
                for link in sorted_links:
                    f.write(f"- **{link['timestamp']}** in #{link['channel']} by {link['author']}\n")
                    f.write(f"  {link['url']}\n\n")
        
        print(f"\n🎉 Extraction complete!")
        print(f"📄 Results saved to: {filename}")
        print(f"📊 Found {len(links_data)} links from {len(domain_groups)} domains")
        
        # Show top domains
        print(f"\n🏆 Top 10 domains:")
        for domain, links in sorted_domains[:10]:
            print(f"  {domain}: {len(links)} links")
    
    else:
        print("❌ No links found")
    
    await client.close()

# Run the bot
if __name__ == "__main__":
    try:
        client.run(DISCORD_TOKEN)
    except KeyboardInterrupt:
        print("\n⚠️  Interrupted by user")
    except Exception as e:
        print(f"\n❌ Error: {e}")
```

---

## 🚀 Setup Guide

### Prerequisites
- Python 3.7+ installed on your computer
- Discord account with server admin access
- Basic familiarity with terminal/command prompt

### Step 1: Create Discord Application (2 minutes)

1. Go to https://discord.com/developers/applications
2. Click "New Application" (blue button, top right)
3. Name it something like "Link Scraper Bot"
4. Click "Create"

### Step 2: Create Bot User (1 minute)

1. Click "Bot" in the left sidebar
2. Your bot should already exist (if not, click "Add Bot")
3. Scroll down to "Privileged Gateway Intents"
4. Toggle ON "Message Content Intent"
5. Click "Save Changes"

### Step 3: Get Bot Token (30 seconds)

1. Look for the "Token" section on the Bot page
2. Click "Reset Token" → "Yes, do it!"
3. Click "Copy" to copy the token
4. **Save this token safely** - you'll need it in Step 6

### Step 4: Get Your Server ID (1 minute)

1. Open Discord (app or web)
2. Go to User Settings (gear icon, bottom left)
3. Click "Advanced" in left menu
4. Toggle ON "Developer Mode"
5. Close settings
6. Right-click your server name in the server list
7. Click "Copy Server ID"
8. Save this ID - you'll need it in Step 6

### Step 5: Add Bot to Server (2 minutes)

1. Back in Discord Developer Portal, click "OAuth2" → "URL Generator"
2. In "Scopes" section: Check "bot"
3. In "Bot Permissions" section: Check:
   - "View Channels"
   - "Read Message History"
4. Copy the generated URL at the bottom
5. Open that URL in new tab
6. Select your server from dropdown
7. Click "Authorize"
8. Complete any captcha

### Step 6: Install Python Dependencies (1 minute)

Open Terminal (Mac) or Command Prompt (PC) and run:

```bash
# Try these commands in order until one works:
pip install discord.py
# or
pip3 install discord.py  
# or
python3 -m pip install discord.py
```

### Step 7: Create and Run Script (2 minutes)

1. Save the script above as `link_scraper.py`
2. Edit these two lines in the script:
   ```python
   DISCORD_TOKEN = "paste_your_bot_token_here"
   GUILD_ID = paste_your_server_id_here  # numbers only, no quotes
   ```
3. Save the file
4. Run it:
   ```bash
   python3 link_scraper.py
   ```

The script will run and create a markdown file with all extracted links!

---

## 📊 Sample Output

The script generates a structured markdown file like this:

```markdown
# Discord Links Extract - SuperBenefit

**Extracted**: 2025-01-20 14:30
**Timeframe**: 2023-01-20 to 2025-01-20
**Total Links**: 247
**Unique Domains**: 42

## mirror.xyz (23 links)

- **2025-01-15 09:23** in #governance by @alice
  https://mirror.xyz/superbenefit.eth/regenerative-economics-primer

- **2025-01-10 16:45** in #research by @bob
  https://mirror.xyz/greenpill.eth/local-coordination-patterns

## substack.com (18 links)

- **2025-01-14 11:30** in #resources by @charlie
  https://newsletter.banklessacademy.com/web3-governance-patterns
```

---

## 🎯 Best Practices

### Before Running
- **Get Community Consent**: Let your community know you're extracting links
- **Respect Privacy**: Only run on public channels or with explicit permission
- **Set Appropriate Timeframes**: Start with shorter periods to test

### During Curation
- **Quality Over Quantity**: Focus on links with multiple shares or community discussion
- **Attribution**: Consider noting who shared valuable resources
- **Context Matters**: Links shared in serious discussions often higher value than casual chats

### After Extraction
- **Review and Filter**: Not all extracted links will be knowledge-base worthy
- **Batch Process**: Group similar links for efficient review
- **Community Feedback**: Share curated results back with the community

---

## ⚡ Integration Workflows

### With AI Summarization
1. Extract links using this primitive
2. Use AI tools to generate summaries of linked content
3. Score relevance and quality automatically
4. Create draft knowledge base entries for human review

### With Knowledge Gardens
1. Run link extraction periodically (monthly/quarterly)
2. Filter by domain reputation and community engagement
3. Create structured entries with metadata
4. Link to community discussions where resources were shared

### With Community Curation
1. Share extracted links back to community for voting
2. Use reaction counts as quality signals
3. Create collaborative curation workflows
4. Build community ownership of knowledge base content

---

## 🛠️ Customization Options

### Filtering Domains
Edit the `SKIP_DOMAINS` list to add/remove domains:

```python
SKIP_DOMAINS = [
    'twitter.com', 'x.com',        # Social media
    'discord.gg', 'discord.com',   # Discord links
    'tenor.com', 'giphy.com',      # Memes/GIFs
    'youtube.com', 'youtu.be',     # Videos (optional)
]
```

### Timeframe Adjustment
Change the lookback period:

```python
days_back = 365   # One year
days_back = 90    # Three months
days_back = 1800  # Five years
```

### Channel-Specific Extraction
Target specific channels only:

```python
target_channels = ['governance', 'research', 'resources']
if channel.name in target_channels:
    await extract_links_from_channel(channel, cutoff, links_data)
```

---

## 🔍 Troubleshooting

### Common Issues

**"Command not found: pip"**
- Try `pip3` instead of `pip`
- Or `python3 -m pip install discord.py`

**"Permission denied" errors**
- Ensure bot has "Read Message History" permission
- Check that bot can access the channels you want to scan

**"No links found"**
- Verify your server ID is correct (numbers only, no quotes)
- Check that timeframe isn't too restrictive
- Ensure channels contain actual links (not just text)

**Bot goes offline immediately**
- Double-check your bot token is correct
- Ensure token is in quotes: `DISCORD_TOKEN = "your_token_here"`
- Verify bot is added to the correct server

### Performance Notes
- Large servers (10k+ messages) may take 5-15 minutes
- Rate limiting is handled automatically by discord.py
- Memory usage scales with number of links found

---

## 🌟 Extensions & Future Development

### Planned Enhancements
- **Real-time monitoring**: Continuous link extraction vs batch processing
- **Quality scoring**: AI-powered relevance assessment
- **Duplicate detection**: Identify when same links shared multiple times
- **Thread context**: Include surrounding conversation context

### Integration Opportunities
- **Knowledge graph building**: Links as nodes in semantic networks
- **Trend analysis**: Track community interests over time
- **Cross-community mining**: Compare link sharing across multiple servers
- **Collaborative filtering**: Learn from community curation behavior

---

## 📋 Compliance & Ethics

### Discord Terms of Service
- This tool only accesses publicly available message content
- Respects Discord's API rate limits and guidelines
- Does not store or redistribute Discord data beyond link extraction

### Community Guidelines
- Always get community consent before running extraction
- Respect private channels and sensitive discussions
- Attribute valuable contributions to community members when appropriate
- Use extracted data to benefit the community, not for commercial gain

### Privacy Considerations
- Links are extracted with minimal metadata (author, timestamp, channel)
- No message content is stored beyond the URLs themselves
- Consider anonymizing contributor names if sharing results publicly

---

*This primitive supports community-driven knowledge curation by transforming collective intelligence into structured, actionable resources. When combined with human curation and AI assistance, it enables communities to systematically harvest and organize their shared wisdom.*