require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const Anthropic = require('@anthropic-ai/sdk');

const app = express();
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const CALENDLY_TOKEN = process.env.CALENDLY_API_TOKEN;
const CALENDLY_EVENT_SLUG = process.env.CALENDLY_EVENT_SLUG || '30min';

// Cache the Calendly event type URI after first lookup
let _eventTypeUri = null;
async function getEventTypeUri() {
  if (_eventTypeUri) return _eventTypeUri;
  const me = await fetch('https://api.calendly.com/users/me', {
    headers: { Authorization: `Bearer ${CALENDLY_TOKEN}` },
  }).then((r) => r.json());

  const events = await fetch(
    `https://api.calendly.com/event_types?user=${encodeURIComponent(me.resource.uri)}&active=true`,
    { headers: { Authorization: `Bearer ${CALENDLY_TOKEN}` } }
  ).then((r) => r.json());

  const et =
    events.collection.find((e) => e.slug === CALENDLY_EVENT_SLUG) ||
    events.collection[0];
  _eventTypeUri = et?.uri;
  return _eventTypeUri;
}

async function executeTool(name, input) {
  if (name === 'get_available_slots') {
    try {
      const uri = await getEventTypeUri();
      const start = input.date ? new Date(input.date) : new Date();
      const end = new Date(start);
      end.setDate(end.getDate() + 7);

      const data = await fetch(
        `https://api.calendly.com/event_type_available_times?event_type=${encodeURIComponent(uri)}&start_time=${start.toISOString()}&end_time=${end.toISOString()}`,
        { headers: { Authorization: `Bearer ${CALENDLY_TOKEN}` } }
      ).then((r) => r.json());

      const slots = (data.collection || []).slice(0, 8).map((s) => ({
        start: s.start_time,
        formatted: new Date(s.start_time).toLocaleString('en-SG', {
          timeZone: 'Asia/Singapore',
          dateStyle: 'medium',
          timeStyle: 'short',
        }),
      }));

      return { slots, timezone: 'Singapore Time (SGT)' };
    } catch (err) {
      return { error: 'Could not fetch availability. Suggest the direct Calendly link instead.' };
    }
  }

  if (name === 'create_booking_link') {
    const params = new URLSearchParams();
    if (input.name) params.set('name', input.name);
    if (input.email) params.set('email', input.email);
    const url = `https://calendly.com/ketan-wa/30min?${params.toString()}`;
    return { url };
  }

  return { error: `Unknown tool: ${name}` };
}

const TOOLS = CALENDLY_TOKEN
  ? [
      {
        name: 'get_available_slots',
        description:
          "Fetch real available meeting slots from Ketan's Calendly calendar. Call this when a user wants to schedule a meeting and asks about availability.",
        input_schema: {
          type: 'object',
          properties: {
            date: {
              type: 'string',
              description:
                'Start date in YYYY-MM-DD format to check availability from. Defaults to today if not provided.',
            },
          },
          required: [],
        },
      },
      {
        name: 'create_booking_link',
        description:
          "Generate a pre-filled Calendly booking link personalised with the user's name and email. Call this once you have collected their details.",
        input_schema: {
          type: 'object',
          properties: {
            name: { type: 'string', description: "User's full name" },
            email: { type: 'string', description: "User's email address" },
          },
          required: [],
        },
      },
    ]
  : [];

const SYSTEM_PROMPT = `You are the personal AI assistant on Ketan Wani's website (ketanwani.me). You help visitors learn about Ketan's background, experience, and expertise, and you help them book a meeting if they're interested.

Be friendly, concise, and professional. Answer only based on the information below. If asked something you don't know, say so and suggest reaching out directly.

---

## About Ketan Wani

Location: Singapore
Email: ketan.wa@gmail.com
LinkedIn: https://www.linkedin.com/in/ketan-wani-5187a820/
GitHub: https://github.com/ketanwani

Summary: Experienced Software Engineer with 15+ years building scalable enterprise platforms, cloud-native systems, and AI-driven workflow automation at Meta and Amazon. Currently leading engineering on a no-code AI agent builder platform that enables business teams to automate complex processes with agentic workflows.

---

## Experience

### Meta (Facebook) — Singapore | Aug 2020 – Present
Role: Software Engineer – AI Agents, Workflow Automation & Enterprise Platforms

- Leading a team of 5 engineers building a no-code AI agent builder platform (similar to n8n / OpenAI agent builder) that lets business users create and deploy AI-driven workflows without deep engineering dependency
- meta.com CRM uses this platform to automate customer support; Meta's ad revenue and content moderation teams use it to automate business processes
- Built and deployed an AI agent using Meta's agentic framework that reduced production support workload by 30% in one half
- Designed and developed metaenterprise.com, cutting third-party app onboarding from 3 months to 2 weeks
- Architected a VPN-less access solution using cryptographic tokens and 2FA built into Proxygen LB (C++)
- Developed an ML model to recommend relevant tests during code reviews
- Integrated MS Graph API with OAuth 2.0 for secure enterprise document access

### Amazon — Bangalore | Jan 2015 – Aug 2020
Role: Software Development Engineer – Test

- Built YJGoogly, a Python/MySQL analytics engine on AWS for Kindle offering actionable insights for strategic decisions
- Developed grayscale rendering for comics in Kindle Create using C++ and Skia for e-ink devices
- Designed CI/CD pipelines and test frameworks across 7 platforms

### Sagitec Solutions — Pune | Mar 2014 – Jan 2015
Role: Senior Software Engineer
- Delivered full-stack pension domain applications using .NET and a low-code platform

### SunGard (now FIS) — Pune | Feb 2011 – Mar 2014
Role: Senior Engineer – Product Development
- Engineered middleware and trading system integrations using C++, FIX protocol, and WCF services
- Won internal innovation contest — idea adopted into an official SunGard product

### IGATE — Pune | Nov 2007 – Feb 2011
Role: Senior Software Engineer
- Led a 7-member team to build the UI for Analytical Analyzer 6000 (medical diagnostics device) using C++ and .NET

---

## Skills

AI & Automation: AI Agents, Agentic Workflows, ML Applications, No-Code Platforms, Workflow Orchestration
Languages: Python, TypeScript, C++, JavaScript, Hack/PHP, C#, SQL
Frontend: React.js, Next.js, GraphQL, Tailwind CSS
Backend & Data: MySQL, AWS, REST APIs, CI/CD, WCF Services, FIX Protocol
Security & Infra: OAuth 2.0, MS Graph API, 2FA, Cryptographic Tokens, Proxygen LB

---

## Education

B.E. Computer Engineering, Birla Vishwakarma Mahavidyalaya (2003–2007)

---

## Awards

- First Prize – Robotics Competition, L.D. Engineering College (2006): Built a robot that plays cricket (batting and bowling). Won first prize.
- Winner – Innovation Contest, SunGard (2013): Idea later adopted into an official SunGard product line.
- Valuable Contribution Star, iGATE (2010): Fixed a critical memory leak in a .NET app for Hitachi High Technologies.

---

## Booking a Meeting

If someone wants to talk to Ketan, discuss opportunities, or learn more, help them book a 30-minute call using this flow:
1. Use the get_available_slots tool to show real availability in Singapore time
2. Ask for the user's name and email address
3. Use the create_booking_link tool to generate a personalised link
4. Present the link in markdown format so it is clickable, e.g. [Book your slot here](url)

If the Calendly tools are unavailable, share the direct link: https://calendly.com/ketan-wa/30min

---

## Guidelines

- You ONLY answer questions about Ketan Wani — his career, skills, experience, projects, and how to contact or meet him.
- If a question is not specifically about Ketan Wani, do NOT answer it. Politely decline and say you can only help with questions about Ketan. For example: "I'm only able to answer questions about Ketan Wani. Feel free to ask about his experience, skills, or how to book a call with him!"
- Do not answer general knowledge questions, current events, or topics unrelated to Ketan — even if you could relate the answer back to him. Redirect immediately.
- Speak as Ketan's assistant, not as Ketan himself.
- Keep answers concise (2-4 sentences unless more detail is genuinely needed).
- Always format URLs as markdown links so they are clickable, e.g. [Calendly](https://calendly.com/ketan-wa/30min).
- Don't invent information not listed above.
- Be warm and encouraging — visitors are potential collaborators, employers, or interesting connections.`;

app.set('trust proxy', 1);

app.use(cors({
  origin: (origin, cb) => {
    if (!origin || origin.startsWith('http://localhost:') || origin.startsWith('http://127.0.0.1:') || origin === 'https://ketanwani.me') {
      return cb(null, true);
    }
    cb(new Error('Not allowed by CORS'));
  },
  methods: ['POST', 'GET'],
}));

app.use(express.json({ limit: '16kb' }));

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 15,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests, please try again later.' },
});

app.get('/health', (_, res) => res.json({ ok: true }));

app.post('/api/chat', limiter, async (req, res) => {
  const { messages } = req.body;

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Invalid messages.' });
  }

  const safe = messages
    .slice(-12)
    .filter((m) => m.role === 'user' || m.role === 'assistant')
    .map((m) => ({ role: m.role, content: String(m.content).slice(0, 2000) }));

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  try {
    let currentMessages = safe;

    for (let iteration = 0; iteration < 5; iteration++) {
      const streamOptions = {
        model: 'claude-sonnet-4-6',
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: currentMessages,
      };
      if (TOOLS.length > 0) streamOptions.tools = TOOLS;

      const stream = client.messages.stream(streamOptions);

      for await (const event of stream) {
        if (
          event.type === 'content_block_delta' &&
          event.delta.type === 'text_delta' &&
          event.delta.text
        ) {
          res.write(`data: ${JSON.stringify({ text: event.delta.text })}\n\n`);
        }
      }

      const finalMsg = await stream.finalMessage();
      if (finalMsg.stop_reason !== 'tool_use') break;

      // Execute all tool calls and collect results
      const toolResults = [];
      for (const block of finalMsg.content) {
        if (block.type === 'tool_use') {
          const result = await executeTool(block.name, block.input);
          toolResults.push({
            type: 'tool_result',
            tool_use_id: block.id,
            content: JSON.stringify(result),
          });
        }
      }

      currentMessages = [
        ...currentMessages,
        { role: 'assistant', content: finalMsg.content },
        { role: 'user', content: toolResults },
      ];
    }

    res.write('data: [DONE]\n\n');
  } catch (err) {
    console.error('Anthropic error:', err?.message ?? err);
    res.write(`data: ${JSON.stringify({ error: true })}\n\n`);
  } finally {
    res.end();
  }
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Chat API listening on port ${PORT}`));
