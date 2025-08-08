// Application constants and configuration

export const SITE_CONFIG = {
  name: "Yashveer Chauhan",
  title: "Yashveer | AI Builder",
  description: "Story-first portfolio - From military bases to building AI products",
  url: "https://yashveer.dev", // Update with your actual domain
  author: {
    name: "Yashveer Chauhan",
    email: "hello@yashveer.dev", // Update with your actual email
    github: "https://github.com/yashchau",
    linkedin: "https://linkedin.com/in/yashveer-chauhan",
  },
  navigation: {
    main: [
      { href: "/", label: "Home" },
      { href: "/projects", label: "Projects" },
      { href: "/ventures", label: "Ventures" },
      { href: "/blog", label: "Blog" },
      { href: "/teaching", label: "Teaching" },
      { href: "/resume", label: "Résumé" },
    ],
  },
} as const;

export const PROJECT_FILTERS = {
  tags: ["AI", "Software", "Data", "Mobile", "Research"] as const,
  sortOptions: [
    { value: "recency", label: "Recency" },
    { value: "impact", label: "Impact" },
  ] as const,
} as const;

export const BLOG_CHANNELS = {
  all: "All",
  ai: "AI",
  quantum: "Quantum",
  investing: "Investing",
  buildLogs: "Build Logs",
} as const;

export const TEACHING_DIFFICULTIES = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
} as const;

// Theme configuration
export const THEME_CONFIG = {
  defaultTheme: "system" as const,
  themes: ["light", "dark", "system"] as const,
} as const;