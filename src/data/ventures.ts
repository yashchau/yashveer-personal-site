import { Venture } from "@/types/content";

export default [
  {
    slug: "betwise",
    name: "BetWise",
    mission: "Transparent, data-first marketplace for sports handicappers.",
    whatItDoes: "Rankings, verified picks, subscriptions, payouts.",
    traction: ["MVP live (web)", "100+ early-access signups", "$0.0k MRR (pre-revenue)"],
    roadmap: ["Discord integration", "AI pick verification", "Mobile apps"],
    contact: "mailto:founder@betwise.app"
  },
  {
    slug: "ai-investor",
    name: "AI Investor Platform",
    mission: "Multi-agent research copilot for equities & options.",
    whatItDoes: "Aggregates filings, options chains, alt-data; proposes risk-adjusted strategies.",
    traction: ["Private alpha", "10 power users", "Avg. 2.3 strategy ideas/user/week"],
    roadmap: ["Broker integrations", "Backtesting UI", "Auto-generated investment memos"],
    contact: "mailto:founder@aiinvestor.app"
  }
] as Venture[];
