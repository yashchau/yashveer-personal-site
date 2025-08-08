export interface Project {
  slug: string;
  title: string;
  pitch: string;
  role: string;
  stack: string[];
  tags: string[];
  timeframe: string;
  outcomes: string[];
  repo?: string | null;
  link?: string | null;
}

export interface Venture {
  slug: string;
  name: string;
  mission: string;
  whatItDoes: string;
  traction: string[];
  roadmap: string[];
  contact: string;
}

export interface Lesson {
  slug: string;
  title: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  outcomes: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface TimelineStop {
  city: string;
  years: string;
  lesson: string;
}

export interface StatChip {
  label: string;
  value: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tldr: string;
  tags: string[];
  readingTime: number;
  channel: string;
  content?: string;
}
