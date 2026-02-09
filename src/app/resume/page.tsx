import CTABar from "@/components/sections/CTABar";

export const metadata = {
  title: "Resume | Yashveer Chauhan",
  description: "Professional experience, education, and skills in AI, data systems, and financial technology.",
};

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Fintech Startup",
    period: "2021 - Present",
    location: "Jersey City, NJ",
    highlights: [
      "Built AI-powered trading algorithms processing $10M+ daily volume",
      "Designed real-time data pipelines handling 1M+ events per second",
      "Led mobile app development serving 50K+ active users",
      "Reduced system latency by 60% through architecture optimization"
    ]
  },
  {
    title: "Data Engineer",
    company: "Agricultural Technology Company",
    period: "2020 - 2021",
    location: "Des Moines, IA",
    highlights: [
      "Developed IoT data processing systems for 1000+ farm operations",
      "Built predictive models improving crop yield forecasting by 25%",
      "Designed fault-tolerant data infrastructure with 99.9% uptime",
      "Automated data quality monitoring reducing manual intervention by 80%"
    ]
  },
  {
    title: "Research Assistant",
    company: "Syracuse University",
    period: "2018 - 2020",
    location: "Syracuse, NY",
    highlights: [
      "Researched machine learning applications in financial markets",
      "Published research on deep learning for time series prediction",
      "Built automated trading systems for cryptocurrency markets",
      "Mentored 20+ students in data science and machine learning"
    ]
  },
  {
    title: "Software Developer",
    company: "Startup Ecosystem",
    period: "2015 - 2018",
    location: "Bangalore, India",
    highlights: [
      "Full-stack development for multiple early-stage startups",
      "Built scalable web applications serving 100K+ users",
      "Implemented payment systems processing ₹10M+ monthly",
      "Led technical teams of 3-5 developers"
    ]
  }
];

const education = [
  {
    degree: "Master of Science in Data Science",
    school: "Syracuse University",
    period: "2018 - 2020",
    location: "Syracuse, NY",
    details: "Focus on Machine Learning, Statistical Analysis, and Financial Markets"
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "University of Engineering",
    period: "2011 - 2015",
    location: "Bangalore, India",
    details: "Specialized in Software Engineering and Data Structures"
  }
];

const skills = {
  "AI & Machine Learning": [
    "Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"
  ],
  "Backend & Data": [
    "Node.js", "Java", "PostgreSQL", "MongoDB", "Redis", "Apache Kafka", "Docker"
  ],
  "Frontend & Mobile": [
    "React", "Next.js", "TypeScript", "React Native", "Android", "iOS"
  ],
  "Cloud & DevOps": [
    "AWS", "GCP", "Kubernetes", "CI/CD", "Terraform", "Monitoring"
  ],
  "Financial Technology": [
    "Trading Systems", "Risk Management", "Options Pricing", "Market Data", "Compliance"
  ]
};

const achievements = [
  "🏆 Built AI trading systems managing $10M+ in daily volume",
  "📊 Designed data pipelines processing 1M+ events per second",
  "📱 Led mobile app serving 50K+ active users",
  "🎓 Mentored 20+ students in data science and machine learning",
  "⚡ Reduced system latency by 60% through architecture optimization",
  "🚀 Founded 2 successful ventures in AI and financial technology"
];

export default function ResumePage() {
  return (
    <div className="max-w-5xl mx-auto space-y-20">
      {/* Header */}
      <header className="text-center space-y-8">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 border border-[var(--primary)]/20 px-6 py-3 text-sm font-semibold text-[var(--primary)] backdrop-blur-sm">
            📄 Professional Profile
          </span>
        </div>

        <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          <h1 className="text-5xl font-bold md:text-6xl bg-gradient-to-br from-[var(--text)] to-[var(--text)]/60 bg-clip-text tracking-tight">
            Yashveer Chauhan
          </h1>
          <p className="text-xl md:text-2xl text-[var(--text)]/70 font-light max-w-3xl mx-auto leading-relaxed">
            Senior Software Engineer specializing in AI systems, financial technology, and scalable data infrastructure
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-6 text-sm animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <a href="mailto:hello@yashveer.dev" className="flex items-center gap-2 text-[var(--accent)] hover:text-[var(--primary)] transition-colors">
            <span>📧</span> hello@yashveer.dev
          </a>
          <a href="https://linkedin.com/in/yashveer" className="flex items-center gap-2 text-[var(--accent)] hover:text-[var(--primary)] transition-colors">
            <span>💼</span> LinkedIn
          </a>
          <a href="https://github.com/yashveer" className="flex items-center gap-2 text-[var(--accent)] hover:text-[var(--primary)] transition-colors">
            <span>⚡</span> GitHub
          </a>
          <span className="flex items-center gap-2 text-[var(--muted)]">
            <span>📍</span> Jersey City, NJ
          </span>
        </div>
      </header>

      {/* Key Achievements */}
      <section className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
        <h2 className="text-3xl font-bold mb-8 text-center">Key Achievements</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 rounded-xl bg-[var(--surface)]/50 border border-[var(--muted)]/10 backdrop-blur-sm hover:border-[var(--accent)]/20 transition-all duration-300"
            >
              <span className="text-lg flex-shrink-0">{achievement.split(' ')[0]}</span>
              <span className="text-[var(--text)]/80">{achievement.substring(achievement.indexOf(' ') + 1)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Experience */}
      <section className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
        <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative p-8 rounded-3xl bg-[var(--surface)]/50 border border-[var(--muted)]/10 backdrop-blur-sm hover:border-[var(--primary)]/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[var(--text)]">{exp.title}</h3>
                  <p className="text-lg font-semibold text-[var(--primary)]">{exp.company}</p>
                </div>
                <div className="text-right space-y-1 md:text-right">
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
      <section className="animate-fade-in-up" style={{animationDelay: '0.5s'}}>
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
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
                <p className="text-[var(--text)]/70 italic">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills */}
      <section className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="space-y-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div
              key={category}
              className="p-8 rounded-3xl bg-[var(--surface)]/50 border border-[var(--muted)]/10 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-[var(--text)] mb-6">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillList.map((skill, idx) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-sm font-medium text-[var(--primary)] hover:bg-[var(--primary)]/20 transition-colors duration-300"
                    style={{animationDelay: `${0.7 + (index * 0.1) + (idx * 0.05)}s`}}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Download Resume */}
      <section className="text-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[var(--primary)]/5 to-[var(--accent)]/5 border border-[var(--primary)]/20 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-4">Need a Traditional Resume?</h3>
          <p className="text-[var(--text)]/70 mb-6 max-w-2xl mx-auto">
            Download a PDF version optimized for ATS systems and traditional hiring processes
          </p>
          <a
            href="mailto:hello@yashveer.dev?subject=Resume%20Request"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[var(--primary)] text-white font-semibold hover:bg-[var(--accent)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Request PDF Resume
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

      {/* Call to Action */}
      <section className="animate-fade-in-up" style={{animationDelay: '1.0s'}}>
        <CTABar />
      </section>
    </div>
  );
}