import { Lesson } from "@/types/content";

export default [
  {
    slug: "prompt-patterns-for-builders",
    title: "Prompt Patterns for Builders",
    difficulty: "Beginner",
    outcomes: ["Write robust prompts", "Avoid common failure modes", "Ship faster with AI"],
  },
  {
    slug: "agents-101",
    title: "Agents 101: Tasks, Tools, and Safety",
    difficulty: "Intermediate",
    outcomes: ["Design agent loops", "Choose tools safely", "Measure agent success"]
  },
  {
    slug: "options-101-for-engineers",
    title: "Options 101 for Engineers",
    difficulty: "Beginner",
    outcomes: ["Calls vs puts", "Volatility basics", "Risk frameworks for builders"]
  },
  {
    slug: "ml-for-finance",
    title: "Machine Learning for Financial Markets",
    difficulty: "Advanced",
    outcomes: ["LSTM for time series", "Genetic algorithm optimization", "Risk-adjusted backtesting"]
  },
  {
    slug: "scalable-data-systems",
    title: "Building Scalable Data Systems",
    difficulty: "Intermediate", 
    outcomes: ["ETL pipeline design", "Database optimization", "Real-time processing"]
  },
  {
    slug: "mobile-app-architecture",
    title: "Enterprise Mobile App Architecture",
    difficulty: "Intermediate",
    outcomes: ["Android best practices", "Location services integration", "Offline-first design"]
  }
] as Lesson[];
