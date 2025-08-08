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
  }
] as Lesson[];
