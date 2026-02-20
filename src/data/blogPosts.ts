import { BlogPost } from "@/types/content";

const blogPosts: BlogPost[] = [
  {
    slug: "why-i-build-investment-tools",
    title: "Why I Build Investment Tools as a Side Project",
    date: "2025-10-20",
    channel: "Investing",
    readingTime: 7,
    tags: ["Investing", "AI", "SEC EDGAR", "Side Projects"],
    tldr:
      "Institutional investors have Bloomberg terminals and quant teams. Retail investors have Reddit and hot takes. I built an AI research copilot to close that gap — here's why the problem is worth solving.",
    content: `## The Gap Nobody Talks About

Every time I open a brokerage app, I'm struck by the same feeling: the information design was built for someone who already knows exactly what they want. Here's the earnings date. Here's the chart. Here's a news headline from six hours ago.

What's missing is *synthesis*. Nobody is helping me understand whether the earnings report actually changed the thesis, whether the options market is pricing in risk I should care about, or whether the debt-to-equity trajectory over five years tells a different story than the current quarter.

Hedge funds have that. They have quant teams running factor models, analysts reading every 10-K, and proprietary data feeds from alternative sources. A solo retail investor doesn't have any of it.

That's the gap I started building around.

## SEC EDGAR Is Hiding in Plain Sight

Here's something surprising: the SEC makes years of financial data freely available through its EDGAR API. Every public company files 10-Ks, 10-Qs, 8-Ks — and all of it is machine-readable if you know how to ask for it.

The problem isn't access. It's that the data is spread across thousands of filings, uses inconsistent terminology between companies, and requires serious financial domain knowledge to interpret correctly.

When I started building the AI Investor Platform, my first milestone was just answering the question: can I reliably pull five years of revenue, net income, free cash flow, and debt from any S&P 500 company using just the EDGAR API? It took about three weeks of iteration to get a reliable parser that handles the edge cases — things like companies that change their fiscal year, subsidiaries with separate filings, or financial restatements.

Once I had the data, I started calculating ratios automatically: P/E, EV/EBITDA, ROE, debt-to-equity, current ratio. Twelve metrics in total. Not because twelve is the right number, but because those are the ones that show up consistently in the research frameworks I trust.

## Why LLMs Actually Help Here

The first version of the platform was just tables and charts. You'd pick a ticker, and it would show you the financial data in a clean layout. Useful, but not transformative.

The second version added language model integration. And that's where things got interesting.

The insight is that LLMs are genuinely good at pattern-matching across large documents and synthesizing that into natural language. They're bad at math and shouldn't be trusted with raw calculations — but they're excellent at reading a 10-K and identifying what management is signaling between the lines, or comparing the risk factors section year-over-year to see what's new.

So the current architecture is a hybrid: structured financial calculations done in code (no hallucinations), and language model interpretation layered on top. The model doesn't calculate the P/E ratio. It reads the cleaned financial data and tells you whether a P/E of 34 makes sense given the company's growth trajectory and competitive position.

## Ten Power Users and What I Learned

The platform is in private alpha with ten users. All of them are technically sophisticated — engineers, a financial advisor, a couple of active options traders. The feedback has been humbling.

The thing people value most isn't the automation. It's the consistency. When you're doing research manually, your process varies by day — how much time you have, how much caffeine you've had. The platform forces a consistent framework every time: same metrics, same timeframe, same structure. That consistency itself is a competitive advantage.

The thing people value least is the generated summaries. LLM prose has a specific quality — confident, structured, slightly generic. Everyone ignores the summary and goes straight to the data. I'm iterating on this.

## What I'm Building Next

The next phase is options integration. Right now the platform handles equities well, but options research requires a different layer: implied volatility surfaces, Greeks across strikes, historical IV vs. realized volatility comparisons, unusual flow detection.

That's what the AI Options Tracker is for — a separate tool that focuses specifically on the derivatives layer, with agent-assisted screening and trade idea generation.

The long-term goal is something closer to a unified research environment: equities fundamentals, options flow, and macro data in one place, with agent workflows that can run background research and surface relevant changes automatically.

It's a long road. But the gap is real, and nobody else is solving it for the retail-but-sophisticated investor.`,
  },
  {
    slug: "lessons-from-a-military-kid-turned-builder",
    title: "Lessons from a Military Kid Who Became a Builder",
    date: "2025-11-05",
    channel: "Build Logs",
    readingTime: 8,
    tags: ["Personal", "Product", "Mindset", "Building in Public"],
    tldr:
      "Ten cities across India and the US by age 23. Growing up in an army family teaches you things that no MBA curriculum covers — here's how those lessons shaped how I build products today.",
    content: `## You Learn to Start Fresh

By the time I was eighteen, I had lived in eight cities. Every two or three years, my father's posting would change, and we'd pack up and relocate — Bangalore to Lucknow, Lucknow to Ambala, Ambala to Delhi, and back and forth again.

Most people describe this as difficult. It wasn't easy. But what it gave me was a specific kind of muscle: the ability to start fresh without treating it as a crisis.

When you move cities repeatedly as a child, you learn that the social infrastructure you thought was permanent is actually just a temporary arrangement you built through consistent small actions. And if you built it once, you can build it again. The loss of continuity is real. But so is the realization that you're more capable of rebuilding than you thought.

I think about this a lot when I'm starting a new project. There's a phase in every build where the foundation isn't there yet — no users, no validation, no certainty. Most people treat this as uniquely uncomfortable. I've started to treat it as just the beginning of a familiar process. You figure out the local terrain, you make the first few connections, and things start to cohere.

## Structure Is a Tool, Not a Prison

Army cantonment life is structured to an almost absurd degree. Mealtimes, bed times, the layout of the housing colony, the hierarchy of interactions — everything has a form. Growing up inside that structure, you could either resent it or learn from it.

I learned from it. Specifically, I learned that structure creates freedom. When the mundane decisions are already made — when you know what time you're eating, where you're sleeping, what the rules are — your cognitive energy gets freed up for the things that actually matter.

This shows up in how I build. I'm not a spontaneous coder. I plan before I type. I write down what I'm trying to accomplish before I open the IDE. I batch similar tasks together. I have routines for the unglamorous parts of product development — writing tests, handling edge cases, thinking through error states — because I don't want to have to decide whether to do them. They're just part of the process.

The army taught me that discipline isn't about restriction. It's about creating the conditions for consistent output regardless of mood or motivation.

## Adaptability Is Different from Flexibility

One thing I want to distinguish: adaptability is not the same as flexibility. Flexibility means you bend easily. Adaptability means you change what you need to change while keeping what matters intact.

Military families adapt constantly. New city, new school, new social dynamics, new expectations. But the things that stay constant — family, values, work ethic — stay extremely constant. The adaptation is surgical, not wholesale.

I've tried to bring this to product development. When I'm iterating on something that isn't working, I try to be specific about what isn't working rather than throwing the whole thing out. Is it the positioning, the UX, the core mechanic, or just the copy? Adaptability means changing the right thing, not everything.

## What the Indian Army R&D Experience Actually Taught Me

After finishing my B.Tech, I spent about a year working on software projects for Indian Army R&D. The two major projects were a Military Minefield Database System — an Android app for land mine planning and demining — and a multi-hop ad-hoc mesh network for battlefield communication.

Both of these projects had constraints I'd never encountered in academic or startup contexts. The software had to work in environments with no internet connectivity, on hardware that couldn't be upgraded, under conditions where failure had consequences that weren't just a bad quarter.

What I learned was that reliability is a design choice, not an afterthought. You don't add reliability at the end. You design for it from the start. What happens when the GPS signal drops? What happens when the device battery dies mid-mission? What happens when the operator is under stress and makes an input error?

Every product I've built since has been shaped by that framing. I think about failure states early. I think about what happens when the thing I depend on isn't there. I think about the user who is doing something stressful and doesn't have time to read an error message.

It's a different way of thinking about software than you get from building for well-connected users in comfortable environments.

## On Building in Multiple Contexts Simultaneously

I work full-time as an Application Developer at ADP. I'm building Stak, BetWise, and an AI investment platform on the side. I document what I'm learning publicly.

A lot of people ask how I manage all of it. The honest answer is that it comes back to the military-kid thing: I'm not alarmed by context-switching. I've been doing it my whole life. Jersey City to Des Moines to Syracuse to Bangalore — I can hold multiple contexts without losing the thread.

The risk, and this is something I actively watch for, is shallow engagement across too many things. The goal isn't to be busy. The goal is to be building things that compound — skills, audiences, products, relationships — so that each context makes the others stronger rather than diluting all of them.

I haven't fully figured that out. But I think the framing itself is the right one: not "how do I do more things" but "how do I do things that reinforce each other."`,
  },
  {
    slug: "agent-assisted-options-screening",
    title: "Agent-Assisted Options Screening: What I Learned Building an AI Options Tracker",
    date: "2025-12-01",
    channel: "AI",
    readingTime: 9,
    tags: ["AI", "Options", "Agents", "Engineering"],
    tldr:
      "Options flow data is noisy, fast-moving, and full of false signals. Here's how I built an agent-assisted screener that cuts through the noise — and what broke along the way.",
    content: `## Why Options Screening Is Hard

Stock screening is relatively straightforward. You define criteria — P/E under 20, revenue growth above 15%, debt-to-equity under 1 — and you filter the universe. The data is slow-moving and the signal-to-noise ratio, while not great, is manageable.

Options screening is a completely different problem. The data is:

**Enormous.** A single equity with weekly options might have 200+ contracts across different strikes and expirations. Multiply that by a universe of 500 stocks and you have 100,000+ data points updating every second.

**Contextual.** An unusual options trade doesn't mean anything in isolation. You have to know the stock's historical IV, the current earnings calendar, recent news flow, the overall market regime, and what other contracts are doing. Context is everything.

**Adversarial.** Smart money knows retail is watching options flow. Some unusual flow is genuine institutional positioning. Some is designed to mislead. Distinguishing between them is genuinely hard.

When I started building the AI Options Tracker, I thought the core problem was data access. It turned out the core problem was interpretation.

## The Architecture I Landed On

The tracker has three main components:

**A data layer** that pulls options chain data for a screened universe of stocks, calculates implied volatility surfaces, and flags statistically unusual activity. "Unusual" here means volume significantly above the 30-day average for that strike/expiration combination, adjusted for overall market volume.

**A context layer** that enriches flagged contracts with relevant information: earnings date, recent price action, sector performance, any recent news. This is mostly structured data, not LLM work.

**An agent layer** that synthesizes the flagged contracts with context and generates a structured trade hypothesis. Not a recommendation — a hypothesis with explicit assumptions, risks, and conditions.

The agent is built around a simple loop: here is an unusual options contract, here is the relevant context, what might explain this positioning, and if the explanation is plausible, what would a directional trade look like?

## What Actually Works

The most useful output isn't trade ideas. It's filters.

When I'm screening 50-100 flagged contracts on an active day, the agent is most valuable when it's telling me what to ignore. "This volume spike is probably earnings IV run-up, not directional positioning." "This put flow is consistent with hedging, not speculation — the stock is held widely in institutional portfolios." "This call buying coincides with a share buyback announcement from earlier this week, likely just delta hedging."

Eliminating the noise fast is worth more than generating one more hypothesis.

The agent is also useful for surfacing cross-asset context I would have missed. Options flow on a mid-cap retailer that seems random makes more sense when the agent notes that the sector ETF had significant put activity two sessions earlier. I wouldn't have made that connection manually in a timely way.

## What Doesn't Work (Yet)

The agent struggles with timing. It can reason about whether a trade is directionally plausible, but it has no meaningful edge on when a thesis will play out. Options are time-sensitive instruments. A correct directional thesis with wrong timing is still a loss.

I've tried adding technical analysis context — support/resistance levels, recent momentum — and the agent does incorporate it, but I don't trust its technical analysis. It produces plausible-sounding statements about chart patterns that are hard to validate systematically.

The other limitation is calibration. The agent is confident. It generates hypotheses with appropriate hedging language, but the underlying model has no position-sizing intuition. It treats a high-conviction setup the same way it treats a marginal one. Building a calibrated confidence layer on top is an open problem.

## Results (Paper-Traded)

I've been paper-trading the tracker's output for about eight months. The results are positive — roughly +11% average edge on target entries against the underlying's move — but paper trading is a generous environment. No slippage, no early assignment risk, no emotional decision-making.

The 3× faster decision cycle is real, though. The screening and context enrichment that used to take me 45-60 minutes on an active morning now takes 15. The agent output gives me a starting point for each position rather than starting from scratch.

## What I'm Building Next

The next version will add a backtesting layer so I can validate screening criteria against historical options data, not just forward test. This requires access to historical IV data, which has a cost component — I'm evaluating data providers for this.

I also want to add a "regime" layer — a background model that adjusts the agent's behavior based on overall market conditions. What counts as unusual flow in a low-volatility trending market is different from what counts as unusual in a high-volatility choppy one. The current version doesn't account for this.

The longer-term vision is to fold the options tracker into the broader AI Investor Platform, so equity fundamentals and options positioning are visible in the same interface. A company's financial health and the options market's bet about its future are both inputs to a thesis. They should be next to each other.

## The Broader Point About Agents

Building this has crystallized something about agent systems: they're most useful when they're doing things humans genuinely can't do fast enough, not things humans can do but find tedious.

Scanning 100 options contracts for contextual anomalies in under a minute is something humans can't do fast enough. Writing a first draft of a hypothesis is something humans can do but find tedious — and agents are less useful there, because the quality bar is high and the iteration time matters.

The best agent use cases I've found are always at the speed/volume boundary. Give me the signal I would have found anyway if I had more time. That's valuable. The interpretation can still be mine.`,
  },
  {
    slug: "knowledge-connection-vision",
    title: "The Knowledge Connection Vision",
    date: "2025-01-15",
    channel: "AI",
    readingTime: 6,
    tags: ["Knowledge Networks", "Community", "Learning"],
    tldr:
      "We can turn isolated expertise into collective wisdom by building social-first knowledge bridges that reward curiosity, productive disagreement, and collaborative sense-making.",
    content: `## The Problem We're Living In
We're experiencing something unprecedented in human history: we have access to more information than ever before, yet we're becoming intellectually lonelier and more polarized by the day.

### The Great Narrowing
Most of us live in increasingly narrow intellectual bubbles. We're all walking around with fascinating knowledge that never sees daylight.

### Surface-Level Everything
Social media promised to connect us, but instead gave us performance theaters where nuance dies and depth is punished.

### The Information Paradox
We're drowning in information but starving for wisdom. The overwhelming volume has made us passive consumers rather than active thinkers.

### Lost Art of Intellectual Discourse
We've forgotten how to disagree productively, leading to intellectual stagnation disguised as certainty.

## Why This Matters More Now
Innovation dies in isolation, democracy requires informed debate, and human potential is wasted when expertise stays locked away.

## The Vision: What Could Be
Imagine a world where intellectual curiosity becomes the bridge to deeper human connection, where learning is a social adventure, and productive disagreement feels like collaboration.

### Knowledge as Social Currency
Conversations trade in insight, not small talk, and curiosity becomes the catalyst for connection.

### Serendipitous Learning
Technology can orchestrate chance encounters that unlock the next step in our ideas.

### Productive Disagreement
Debates change minds because they are grounded in genuine understanding and intellectual humility.

### Communities of Continuous Learning
Neighborhoods and teams share what they're exploring, turning collective intelligence into a shared resource.

## How We Get There
We build personal knowledge ecologies, intelligent social discovery, structured intellectual exchange, and collaborative sense-making.

## The Ripple Effects
Innovation accelerates, social cohesion strengthens, democratic discourse improves, individual fulfillment deepens, and we spark a cultural renaissance.

## This Isn't Just an App—It's a Movement
We're creating infrastructure for a more intellectually connected society—tools that help people learn from each other and build understanding that none could achieve alone.

The future doesn't have to be lonely, shallow, or polarized. We can build something better. Together.`,
  },
];

export default blogPosts;
