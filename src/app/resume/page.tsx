import CTABar from "@/components/sections/CTABar";

export const metadata = {
  title: "Résumé | Yashveer Chauhan",
  description: "10+ years of software engineering across enterprise fintech, AgTech data systems, academic ML research, and military R&D. Currently at ADP building compliance products.",
};

const experiences = [
  {
    title: "Application Developer",
    company: "ADP",
    period: "2021 – Present",
    location: "Jersey City, NJ",
    highlights: [
      "Built the Industry Dashboard for Certified Payroll — modernized payroll setup and reporting for construction compliance (+18% task completion, -32% time to first report)",
      "Designed Prevailing Wage Data Retrieval System using ML + web scraping across all 50 states (5× faster data verification)",
      "Enterprise React/TypeScript frontends serving thousands of construction firms",
      "SQL Server and SSIS data pipeline development for compliance reporting"
    ]
  },
  {
    title: "Data Engineer",
    company: "AgTech Company",
    period: "2020 – 2021",
    location: "Des Moines, IA",
    highlights: [
      "IoT data processing pipelines for 1,000+ farm operations",
      "Predictive models improving crop yield forecasting accuracy by 25%",
      "Fault-tolerant data infrastructure achieving 99.9% uptime",
      "Automated data quality monitoring and alerting"
    ]
  },
  {
    title: "Research Assistant / Graduate Student",
    company: "Syracuse University",
    period: "2018 – 2020",
    location: "Syracuse, NY",
    highlights: [
      "ML applications in financial markets — LSTM + Genetic Algorithm stock price prediction (74% reduction in processing time: 180 → 46 min)",
      "NYC Motor Vehicle Collision analysis achieving 78.17% prediction accuracy across 5 boroughs",
      "Statistical analysis and model development for financial time-series data",
      "Teaching assistance for data science and machine learning coursework"
    ]
  },
  {
    title: "Product Engineer",
    company: "Indian Army R&D",
    period: "2017 – 2018",
    location: "Bangalore, India",
    highlights: [
      "Military Minefield Database System — Android app for land mine planning and demining (Java, Google Maps API)",
      "Multi-hop Ad-hoc Mesh Network using B.A.T.M.A.N protocol on Tadiran CNR-9000 radios",
      "Both systems deployed in active combat zones under battlefield operational constraints",
      "Designed for zero-connectivity environments with hard reliability requirements"
    ]
  },
  {
    title: "Software Developer",
    company: "Startup Ecosystem",
    period: "2015 – 2017",
    location: "Bangalore, India",
    highlights: [
      "Full-stack development for multiple early-stage startups",
      "Scalable web applications across various domains",
      "End-to-end product ownership from architecture to deployment"
    ]
  }
];

const education = [
  {
    degree: "Master of Science in Data Science",
    school: "Syracuse University",
    period: "2018 – 2020",
    location: "Syracuse, NY",
    details: "Focus: Machine Learning, Statistical Analysis, Financial Markets. Research on LSTM forecasting and collision prediction."
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "RV College of Engineering",
    period: "2011 – 2015",
    location: "Bangalore, India",
    details: "Computer Science & Engineering. Followed by two years in the startup ecosystem and Indian Army R&D."
  }
];

const skills = {
  "Languages": [
    "TypeScript", "Python", "Swift", "Java", "SQL"
  ],
  "Frameworks & Libraries": [
    "Next.js", "React", "SwiftUI", "Node.js", "TensorFlow", "Scikit-learn", "Pandas"
  ],
  "Data & Databases": [
    "PostgreSQL", "Supabase", "Elasticsearch", "SQL Server", "SQLite", "SSIS"
  ],
  "Cloud & DevOps": [
    "Vercel", "AWS", "Docker", "CI/CD"
  ],
  "Finance & ML": [
    "Options pricing", "SEC EDGAR API", "LSTM forecasting", "Risk modeling", "Web scraping"
  ]
};

export default function ResumePage() {
  return (
    <div className="max-w-5xl mx-auto space-y-20">
      {/* Header */}
      <header className="text-center space-y-8">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 border border-[var(--primary)]/20 px-6 py-3 text-sm font-semibold text-[var(--primary)] backdrop-blur-sm">
            Professional Profile
          </span>
        </div>

        <div className="space-y-4 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          <h1 className="text-5xl font-bold md:text-6xl bg-gradient-to-br from-[var(--text)] to-[var(--text)]/60 bg-clip-text tracking-tight">
            Yashveer Chauhan
          </h1>
          <p className="text-xl text-[var(--text)]/70 font-light max-w-3xl mx-auto leading-relaxed">
            Application Developer at ADP. Building AI products at the intersection of finance, data, and product. 10+ years across enterprise software, academic research, and military R&D.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <a href="mailto:hello@yashveer.dev" className="text-[var(--accent)] hover:text-[var(--primary)] transition-colors">
            hello@yashveer.dev
          </a>
          <a href="https://linkedin.com/in/yashveerchauhan" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:text-[var(--primary)] transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/yashchau" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:text-[var(--primary)] transition-colors">
            GitHub
          </a>
          <span className="text-[var(--muted)]">Jersey City, NJ</span>
        </div>
      </header>

      {/* Professional Experience */}
      <section className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
        <h2 className="text-3xl font-bold mb-10">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative p-8 rounded-3xl bg-[var(--surface)]/50 border border-[var(--muted)]/10 backdrop-blur-sm hover:border-[var(--primary)]/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5 gap-2">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-[var(--text)]">{exp.title}</h3>
                  <p className="text-lg font-semibold text-[var(--primary)]">{exp.company}</p>
                </div>
                <div className="space-y-1 md:text-right">
                  <p className="font-semibold text-[var(--accent)]">{exp.period}</p>
                  <p className="text-sm text-[var(--muted)]">{exp.location}</p>
                </div>
              </div>

              <div className="space-y-3">
                {exp.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                    <p className="text-[var(--text)]/80 leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
        <h2 className="text-3xl font-bold mb-10">Education</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-[var(--surface)]/50 border border-[var(--muted)]/10 backdrop-blur-sm hover:border-[var(--secondary)]/20 transition-all duration-300"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[var(--text)] mb-2">{edu.degree}</h3>
                  <p className="text-lg font-semibold text-[var(--secondary)]">{edu.school}</p>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-[var(--accent)]">{edu.period}</span>
                  <span className="text-[var(--muted)]">{edu.location}</span>
                </div>
                <p className="text-[var(--text)]/70">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills */}
      <section className="animate-fade-in-up" style={{animationDelay: '0.5s'}}>
        <h2 className="text-3xl font-bold mb-10">Technical Skills</h2>
        <div className="space-y-5">
          {Object.entries(skills).map(([category, skillList]) => (
            <div
              key={category}
              className="p-6 rounded-2xl bg-[var(--surface)]/50 border border-[var(--muted)]/10 backdrop-blur-sm"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--muted)] mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-sm font-medium text-[var(--primary)] hover:bg-[var(--primary)]/20 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[var(--primary)]/5 to-[var(--accent)]/5 border border-[var(--primary)]/20 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-4">Want the full picture?</h3>
          <p className="text-[var(--text)]/70 mb-6 max-w-2xl mx-auto">
            Reach out for a PDF version or to discuss advisory, engineering partnerships, or co-building opportunities.
          </p>
          <a
            href="mailto:hello@yashveer.dev?subject=Resume%20Request"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[var(--primary)] text-white font-semibold hover:bg-[var(--accent)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
          >
            Get in touch
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      <section className="animate-fade-in-up" style={{animationDelay: '0.7s'}}>
        <CTABar />
      </section>
    </div>
  );
}
