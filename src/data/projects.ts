import { Project } from "@/types/content";

export default [
  // === CURRENT VENTURES (Active) ===
  {
    slug: "stak-budget-app",
    title: "Stak — iOS Budget & Financial Wellness App",
    pitch: "A modern iOS budget management app with Money Stories, product discovery, and a Supabase backend. 89% complete.",
    role: "Founder / iOS Engineer",
    stack: ["Swift", "SwiftUI", "MVVM", "Supabase", "Node.js"],
    tags: ["Mobile", "Fintech", "AI"],
    timeframe: "2024–Present",
    outcomes: ["89% feature-complete", "Financial engine backend built", "Product catalog with web scraper"],
    repo: null,
    link: null
  },
  {
    slug: "betwise-platform",
    title: "BetWise — Sports Handicapper Marketplace",
    pitch: "Transparent, data-first marketplace for sports handicappers with verified picks and payout tracking.",
    role: "Founder / Full-Stack Engineer",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Stripe"],
    tags: ["Startup", "Sports", "Web"],
    timeframe: "2024–Present",
    outcomes: ["MVP live", "100+ early-access signups", "Discord integration in progress"],
    repo: null,
    link: null
  },
  {
    slug: "ai-investing-platform",
    title: "AI Investor Platform — Research Copilot",
    pitch: "Multi-agent research copilot for equities & options. Aggregates SEC filings, options chains, and alt-data to propose risk-adjusted strategies.",
    role: "Founder / Engineer",
    stack: ["Next.js", "TypeScript", "Supabase", "SEC EDGAR API", "Recharts"],
    tags: ["AI", "Investing", "Research"],
    timeframe: "2024–Present",
    outcomes: ["SEC financial data integration (2-5yr historical)", "12+ automated metrics (P/E, ROE, Debt/Equity)", "10 power users in private alpha"],
    repo: null,
    link: null
  },
  {
    slug: "ai-options-tracker",
    title: "AI Options Tracker",
    pitch: "Agent-assisted options screener with IV/Delta surfaces, unusual flow detection, and trade alerts.",
    role: "Founder / Engineer",
    stack: ["Python", "Next.js", "Supabase"],
    tags: ["AI", "Investing", "Research"],
    timeframe: "2025–Present",
    outcomes: ["3× faster decision cycles", "+11% avg. edge on target entries (paper-traded)"],
    repo: null,
    link: null
  },
  {
    slug: "india-pulse",
    title: "India Pulse — Macro-Economic Dashboard",
    pitch: "Zero-cost macro-economic dashboard for India. Python harvesters scrape government data sources, store in SQLite, and serve through a Next.js frontend.",
    role: "Founder / Data Engineer",
    stack: ["Next.js", "Python", "BeautifulSoup", "Pandas", "SQLite", "Recharts"],
    tags: ["Data", "Economics", "Web"],
    timeframe: "2025–Present",
    outcomes: ["Automated harvesting pipeline", "Deep-dive pages for key economic indicators", "JSON + SQLite dual storage"],
    repo: null,
    link: null
  },

  // === PROFESSIONAL WORK (ADP) ===
  {
    slug: "industry-dashboard-certified-payroll",
    title: "Industry Dashboard — Certified Payroll",
    pitch: "Modernized payroll setup and reporting for construction compliance at ADP.",
    role: "Application Developer",
    stack: ["React", "TypeScript", "SQL Server", "SSIS"],
    tags: ["Software", "Data", "Enterprise"],
    timeframe: "2021–Present",
    outcomes: ["+18% task completion rate", "-32% time to first successful report", "Serves thousands of construction firms"],
    repo: null,
    link: null
  },
  {
    slug: "prevailing-wage-data-system",
    title: "Prevailing Wage Data Retrieval System",
    pitch: "ML + web scraping system to extract prevailing wage data across all 50 US states for ADP's compliance platform.",
    role: "Application Developer",
    stack: ["Python", "Elasticsearch", "Machine Learning", "Web Scraping"],
    tags: ["Data", "ML", "Software"],
    timeframe: "2022–2023",
    outcomes: ["Automated data extraction for all 50 states", "5× faster data verification", "Enhanced ERP integration"],
    repo: null,
    link: null
  },

  // === RESEARCH / ACADEMIC ===
  {
    slug: "stock-price-prediction",
    title: "Stock Price Prediction with Genetic Algorithms",
    pitch: "LSTM model enhanced with evolutionary algorithms for financial time-series forecasting.",
    role: "ML Researcher",
    stack: ["Python", "Keras", "TensorFlow", "LSTM", "Genetic Algorithms"],
    tags: ["ML", "Finance", "Research"],
    timeframe: "Jan–May 2019",
    outcomes: ["74% reduction in processing time (180→46 min)", "Genetic algorithm hyperparameter optimization", "Euclidean distance evaluation framework"],
    repo: null,
    link: null
  },
  {
    slug: "nyc-collision-analysis",
    title: "NYC Motor Vehicle Collision Analysis",
    pitch: "ML analysis predicting high-collision regions across NYC boroughs.",
    role: "ML Engineer",
    stack: ["Python", "Scikit-learn", "Naive Bayes", "Seaborn", "Tableau"],
    tags: ["ML", "Data Science", "Research"],
    timeframe: "Aug–Dec 2019",
    outcomes: ["78.17% prediction accuracy", "Interactive dashboard for stakeholders", "Data-driven safety recommendations"],
    repo: null,
    link: null
  },

  // === MILITARY / EARLY CAREER ===
  {
    slug: "military-minefield-system",
    title: "Military Minefield Database System",
    pitch: "Android application for land mine planning and demining operations for the Indian Army.",
    role: "Product Engineer",
    stack: ["Java", "Android", "Google Maps API", "SQL"],
    tags: ["Mobile", "Military", "Software"],
    timeframe: "Oct 2017–May 2018",
    outcomes: ["Military-grade accuracy", "Real-time GPS location services", "Deployed in active combat zones"],
    repo: null,
    link: null
  },
  {
    slug: "mesh-network-communication",
    title: "Multi-hop Ad-hoc Mesh Network",
    pitch: "B.A.T.M.A.N protocol implementation enabling peer-to-peer battlefield communication across military convoys.",
    role: "Product Engineer",
    stack: ["Networking", "B.A.T.M.A.N Protocol", "Tadiran CNR-9000"],
    tags: ["Networking", "Military", "Hardware"],
    timeframe: "2017–2018",
    outcomes: ["Peer-to-peer convoy communication", "Voice + data integration", "Battlefield-ready deployment"],
    repo: null,
    link: null
  },
] as Project[];
