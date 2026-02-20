// Application constants and configuration

export const SITE_CONFIG = {
  name: "Yashveer Chauhan",
  title: "Yashveer Chauhan — AI Builder & Product Engineer",
  description: "I build AI products at the intersection of finance, data, and real-world decisions. Application developer at ADP. Building Stak, BetWise, and AI investment tools.",
  url: "https://yashveer.dev",
  author: {
    name: "Yashveer Chauhan",
    email: "hello@yashveer.dev",
    github: "https://github.com/yashchau",
    linkedin: "https://linkedin.com/in/yashveerchauhan",
  },
  navigation: {
    main: [
      { href: "/", label: "Home" },
      { href: "/projects", label: "Projects" },
      { href: "/ventures", label: "Ventures" },
      { href: "/blog", label: "Blog" },
      { href: "/story", label: "My Story" },
      { href: "/resume", label: "Résumé" },
    ],
  },
} as const;

export const PROJECT_FILTERS = {
  tags: ["AI", "Fintech", "Mobile", "Data", "Software", "Research", "Military", "Investing"] as const,
  sortOptions: [
    { value: "recency", label: "Recency" },
    { value: "impact", label: "Impact" },
  ] as const,
} as const;

export const BLOG_CHANNELS = {
  all: "All",
  ai: "AI",
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
