import LessonCard from "@/components/cards/LessonCard";
import CTABar from "@/components/sections/CTABar";
import { lessons } from "@/data";

export const metadata = {
  title: "Teaching | Yashveer Chauhan",
  description: "Practical lessons on AI, data systems, and financial markets for builders.",
};

const difficultyStats = lessons.reduce((acc, lesson) => {
  acc[lesson.difficulty] = (acc[lesson.difficulty] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

export default function TeachingPage() {
  const beginnerLessons = lessons.filter(l => l.difficulty === "Beginner");
  const intermediateLessons = lessons.filter(l => l.difficulty === "Intermediate");
  const advancedLessons = lessons.filter(l => l.difficulty === "Advanced");

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <header className="relative space-y-10 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--accent)]/10 to-[var(--secondary)]/10 border border-[var(--accent)]/20 px-6 py-3 text-sm font-semibold text-[var(--accent)] backdrop-blur-sm">
            📚 Knowledge Sharing
          </span>
        </div>

        <div className="space-y-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl bg-gradient-to-br from-[var(--text)] to-[var(--text)]/60 bg-clip-text tracking-tight leading-tight">
            Learn by{' '}
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] bg-clip-text text-transparent">
              Building
            </span>
          </h1>
          <p className="mx-auto max-w-4xl text-xl md:text-2xl leading-relaxed text-[var(--text)]/70 font-light">
            Practical lessons on AI, data systems, and financial markets designed for builders who learn best by doing.
            Each lesson combines theory with hands-on implementation.
          </p>
        </div>

        {/* Learning Stats */}
        <div className="flex flex-wrap justify-center gap-8 pt-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--success)]">{difficultyStats.Beginner || 0}</div>
            <div className="text-sm text-[var(--muted)]">Beginner</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--secondary)]">{difficultyStats.Intermediate || 0}</div>
            <div className="text-sm text-[var(--muted)]">Intermediate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--danger)]">{difficultyStats.Advanced || 0}</div>
            <div className="text-sm text-[var(--muted)]">Advanced</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--highlight)]">{lessons.length}</div>
            <div className="text-sm text-[var(--muted)]">Total Lessons</div>
          </div>
        </div>
      </header>

      {/* Learning Philosophy */}
      <section className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Learning Philosophy</h2>
          <p className="text-lg text-[var(--text)]/70 max-w-3xl mx-auto">
            The best way to understand complex systems is to build them yourself
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4 p-8 rounded-3xl bg-[var(--surface)]/50 border border-[var(--muted)]/10 backdrop-blur-sm hover:border-[var(--accent)]/30 transition-all duration-300 group">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent)]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold">Practical First</h3>
            <p className="text-[var(--text)]/70">Start with working code, then understand the theory behind it</p>
          </div>

          <div className="text-center space-y-4 p-8 rounded-3xl bg-[var(--surface)]/50 border border-[var(--muted)]/10 backdrop-blur-sm hover:border-[var(--secondary)]/30 transition-all duration-300 group">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[var(--secondary)]/20 to-[var(--secondary)]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold">Outcome Focused</h3>
            <p className="text-[var(--text)]/70">Every lesson has clear, measurable learning outcomes</p>
          </div>

          <div className="text-center space-y-4 p-8 rounded-3xl bg-[var(--surface)]/50 border border-[var(--muted)]/10 backdrop-blur-sm hover:border-[var(--highlight)]/30 transition-all duration-300 group">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[var(--highlight)]/20 to-[var(--highlight)]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🔄</span>
            </div>
            <h3 className="text-xl font-semibold">Iterative Learning</h3>
            <p className="text-[var(--text)]/70">Build, break, improve—learning through continuous iteration</p>
          </div>
        </div>
      </section>

      {/* Beginner Lessons */}
      {beginnerLessons.length > 0 && (
        <section className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[var(--success)] to-[var(--success)]" />
              <h2 className="text-3xl md:text-4xl font-bold">Beginner Friendly</h2>
            </div>
            <p className="text-lg text-[var(--text)]/70 max-w-2xl mx-auto">
              Perfect starting point for those new to AI, data systems, or financial markets
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {beginnerLessons.map((lesson, index) => (
              <div
                key={lesson.slug}
                className="animate-fade-in-scale"
                style={{animationDelay: `${0.5 + index * 0.1}s`}}
              >
                <LessonCard lesson={lesson} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Intermediate Lessons */}
      {intermediateLessons.length > 0 && (
        <section className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)]" />
              <h2 className="text-3xl md:text-4xl font-bold">Intermediate Depth</h2>
            </div>
            <p className="text-lg text-[var(--text)]/70 max-w-2xl mx-auto">
              For builders ready to tackle more complex systems and patterns
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {intermediateLessons.map((lesson, index) => (
              <div
                key={lesson.slug}
                className="animate-fade-in-scale"
                style={{animationDelay: `${0.7 + index * 0.1}s`}}
              >
                <LessonCard lesson={lesson} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Advanced Lessons */}
      {advancedLessons.length > 0 && (
        <section className="animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[var(--danger)] to-[var(--highlight)]" />
              <h2 className="text-3xl md:text-4xl font-bold">Advanced Mastery</h2>
            </div>
            <p className="text-lg text-[var(--text)]/70 max-w-2xl mx-auto">
              Deep dives into cutting-edge techniques and production-ready implementations
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {advancedLessons.map((lesson, index) => (
              <div
                key={lesson.slug}
                className="animate-fade-in-scale"
                style={{animationDelay: `${0.9 + index * 0.1}s`}}
              >
                <LessonCard lesson={lesson} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="animate-fade-in-up" style={{animationDelay: '1.0s'}}>
        <CTABar />
      </section>
    </div>
  );
}
