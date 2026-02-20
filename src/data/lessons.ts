import { Lesson } from "@/types/content";

export default [
  {
    slug: "prompt-patterns-for-builders",
    title: "Prompt Patterns for Builders",
    difficulty: "Beginner",
    outcomes: ["Write robust prompts for real products", "Avoid hallucination traps", "Ship AI features faster"]
  },
  {
    slug: "agents-101",
    title: "Agents 101: Tasks, Tools, and Safety",
    difficulty: "Intermediate",
    outcomes: ["Design reliable agent loops", "Choose and constrain tools safely", "Evaluate agent output quality"]
  },
  {
    slug: "options-101-for-engineers",
    title: "Options 101 for Engineers",
    difficulty: "Beginner",
    outcomes: ["Calls vs puts mechanics", "IV and Greeks intuition", "Risk frameworks for technical builders"]
  },
  {
    slug: "ml-for-finance",
    title: "ML for Financial Markets",
    difficulty: "Advanced",
    outcomes: ["LSTM for time-series forecasting", "Genetic algorithm optimization", "Risk-adjusted backtesting methodology"]
  },
  {
    slug: "scalable-data-systems",
    title: "Building Scalable Data Pipelines",
    difficulty: "Intermediate",
    outcomes: ["ETL pipeline architecture", "Database optimization patterns", "Real-time vs batch processing trade-offs"]
  },
  {
    slug: "building-ios-apps-with-supabase",
    title: "iOS Apps with Supabase Backend",
    difficulty: "Intermediate",
    outcomes: ["SwiftUI + MVVM architecture", "Supabase auth & real-time sync", "Building a financial engine backend"]
  }
] as Lesson[];
