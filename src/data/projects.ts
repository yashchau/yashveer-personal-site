import { Project } from "@/types/content";

export default [
  {
    slug: "industry-dashboard-certified-payroll",
    title: "Industry Dashboard — Certified Payroll",
    pitch: "Modernized payroll setup and reporting for construction compliance.",
    role: "Application Developer",
    stack: ["React", "TypeScript", "SQL Server", "SSIS"],
    tags: ["Software", "Data"],
    timeframe: "2023",
    outcomes: ["+18% task completion", "-32% time to first successful report"],
    repo: null,
    link: null
  },
  {
    slug: "ai-options-tracker",
    title: "AI Options Tracker",
    pitch: "Agent-assisted options screener with IV/Delta surfaces and alerts.",
    role: "Founder/Engineer",
    stack: ["Python", "Next.js", "Supabase"],
    tags: ["AI", "Investing", "Research"],
    timeframe: "2025",
    outcomes: ["3× faster decision cycles", "+11% avg. edge on target entries (paper)"],
    repo: "https://github.com/example/ai-options-tracker",
    link: null
  },
  {
    slug: "autonomous-wheelchair-ux",
    title: "Autonomous Wheelchair Ride UX",
    pitch: "Improved comfort and control models for autonomous mobility.",
    role: "ML Engineer",
    stack: ["TensorFlow", "Python"],
    tags: ["Research", "AI", "Mobile"],
    timeframe: "2018",
    outcomes: ["-22% jerk/acceleration spikes", "+15% rider comfort score"],
    repo: null,
    link: null
  }
] as Project[];
