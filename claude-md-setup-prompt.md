# CLAUDE.md Setup Guide

Build your CLAUDE.md once. Deploy it to CoWork and Code — for Chat, paste the relevant parts into Settings > Profile and your Projects.

---

## How Persistent Context Works Per Tool

Claude doesn't share memory across tools. Each one needs its own setup:

| Tool | Where context lives | How to set it |
|---|---|---|
| Chat | Settings > Profile (personal preferences) + Projects (topic-specific context) | Settings > Profile for tone and style. Create a Project for recurring topics and paste context into Project instructions. |
| CoWork | Global Instructions | Paste it in (inside the app) |
| Code | `~/.claude/CLAUDE.md` | Save a file on your computer |

**CLAUDE.md is your source of truth.** Build it once, then deploy to each tool. You don't need to start from scratch three times.

---

## What Goes Where

- **Chat** has two places — Settings > Profile for your personal preferences (tone, style, pet peeves — applies to every Chat conversation), and Projects for topic or project-specific context (only applies inside that Project). Don't try to put everything in one place.
- **CLAUDE.md** — everything Claude needs to work effectively: context about your world AND communication style, since Code has no settings panel
- **CoWork global instructions** — same as CLAUDE.md, paste the same content
- **Don't duplicate between Chat settings and CLAUDE.md** — but do expect CLAUDE.md to cover both context and style

---

## The Setup Prompt

Paste this into Claude Chat to build your CLAUDE.md in one session:

```
I want to build a CLAUDE.md file — a single source of truth that tells 
you how to work with me effectively. This file will be used in three places:

1. Saved as ~/.claude/CLAUDE.md so Claude Code reads it automatically
2. Pasted into CoWork global instructions
3. Used as a reference for my Claude Chat settings

Let's build it together. Ask me one section at a time. Pre-fill what 
you already know about me from our conversation history, then ask me 
to confirm, correct, or add to it. Keep it concise — the final file 
should be under 60 lines.

Sections to cover:
1. Who I am (name, company, role, how to think about the work I do)
2. Key people I work with (name + role only)
3. Tools and stack I use
4. Where things live (key URLs, repos, wikis, tools)
5. How I like to work (what to flag, when to ask vs. act)
6. Context you always need from me before starting a task
7. What NOT to do (pet peeves, things that slow me down)

After we finalize the content:
- Save it as a .md file I can download
- Give me the exact steps to save it for Claude Code
- Walk me through exactly where to paste it in CoWork (step by step)
- Tell me what from this file belongs in my Claude Chat settings
```

---

## Good vs. Bad Examples

The difference between a useful CLAUDE.md and a useless one is specificity.

| Section | Bad | Good |
|---|---|---|
| Who I am | "I work in marketing" | "Growth Engineer — I combine marketing strategy, systems thinking, and automation to drive growth" |
| Tools | "I use Claude and some automations" | "Claude, n8n, Slack for process triggers, Notion for docs" |
| Where things live | "We have a wiki" | Actual URLs for your wiki, issue tracker, and key docs |
| Context needed | Skipped entirely | "Always tell me: destination (Slack, email, Confluence), internal vs. external, scratch vs. existing draft" |
| What NOT to do | "Be concise" | "Don't make assumptions — ask me first. No fluff. No emojis." |

---

## Deploying It

**Claude Code:**
If you're comfortable with Terminal, run:
```
mkdir -p ~/.claude && cp your-file.md ~/.claude/CLAUDE.md
```
Not a terminal person? Open Claude Code and ask it:
"Save this file as my global CLAUDE.md" — it'll do it for you.

To verify it saved correctly, run:
```
cat ~/.claude/CLAUDE.md
```
If you see your file contents, you're good. If you get an error, the file didn't save — run the command again.

**CoWork:**
1. Open the Claude desktop app
2. Go to Settings > Cowork
3. Paste your full CLAUDE.md contents into the global instructions field
4. Click Save

Note: CoWork also creates internal Scratchpad files the first time you set up global instructions via the chat. Keep both in sync when you update.

**Chat:**
Go to Settings > Profile. Copy only the communication style preferences from your CLAUDE.md — tone, response format, pet peeves. The tools, URLs, and people context can stay out of Chat settings.

---

## How to Know It's Working

After setting it up, start a fresh session in each tool and ask:
> "What do you know about how I like to work?"

Claude should reflect your role, preferences, and key context back without you saying anything. If the response is generic, something didn't save — check each tool's setup and try again.

---

## Updating It

When you make changes to your CLAUDE.md, you need to update each tool separately — they don't sync automatically.

**1. Edit your file**
Open CLAUDE.md in your editor, make changes, save.

**2. Update Code**
Run in Terminal:
```
cp ~/Desktop/CLAUDE.md ~/.claude/CLAUDE.md
```
Verify with:
```
cat ~/.claude/CLAUDE.md
```

**3. Update CoWork**
CoWork has two places to update — don't skip either:

- **Settings > Cowork** (global instructions field) — paste your full updated CLAUDE.md here and hit Save. This is what applies to every CoWork session.
- **In-chat** — tell CoWork what changed so its internal Scratchpad files stay in sync: "Update my global instructions — [describe the change]"

**4. Update Chat settings**
Go to Settings > Profile and manually update anything that changed in your communication style or preferences.

---

## Keeping It Current

- Revisit every 4-6 weeks
- Update after a frustrating session — if Claude missed the mark, something is missing or unclear in the file
- Don't over-engineer it — a good 40-line file beats a perfect 200-line one

### Setting a Reminder

Pick whichever fits how you work:

**Option A — Have Claude create it via browser**
Just tell Claude (in Chat, with the browser extension active):
> "Create a recurring calendar event every 5 weeks titled 'Review CLAUDE.md'. Remind me to check: role, tools, key people, pet peeves, and anything frustrating from recent sessions."

Claude will open your calendar in the browser and create it for you. Make sure to tell Claude which calendar you use (Google Calendar or Outlook).

**Option B — CoWork scheduled task**
In CoWork, create a new scheduled task and type:
> "Every 5 weeks, remind me to review my CLAUDE.md. Prompt me with: is anything outdated? Any new pet peeves, tools, or people to add? Any frustrating sessions I should learn from?"

To set it up:
1. Open CoWork
2. Click "New task"
3. Paste the prompt above
4. Set the schedule to repeat every 5 weeks
5. Save

