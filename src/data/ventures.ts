import { Venture } from "@/types/content";

export default [
  {
    slug: "stak",
    name: "Stak",
    mission: "Financial wellness through smart budgeting, spending insights, and product discovery.",
    whatItDoes: "iOS-native budget tracker with Money Stories, financial engine, and curated product catalog.",
    traction: ["89% feature-complete", "iOS 17+ / SwiftUI", "Supabase + Node.js backend"],
    roadmap: ["App Store launch", "Plaid bank sync", "AI spending insights"],
    contact: "mailto:yash@stak.app"
  },
  {
    slug: "betwise",
    name: "BetWise",
    mission: "Transparent, data-first marketplace for sports handicappers.",
    whatItDoes: "Rankings, verified pick tracking, subscriptions, and transparent payout records.",
    traction: ["MVP live (web)", "100+ early-access signups", "Pre-revenue"],
    roadmap: ["Discord integration", "AI pick verification", "Mobile apps"],
    contact: "mailto:founder@betwise.app"
  },
  {
    slug: "ai-investor",
    name: "AI Investor Platform",
    mission: "Multi-agent research copilot for equities & options.",
    whatItDoes: "Aggregates SEC filings, options chains, and alt-data; proposes risk-adjusted strategies with 12+ automated metrics.",
    traction: ["Private alpha", "10 power users", "SEC EDGAR API integration live"],
    roadmap: ["Broker integrations", "Backtesting UI", "Auto-generated investment memos"],
    contact: "mailto:founder@aiinvestor.app"
  }
] as Venture[];
