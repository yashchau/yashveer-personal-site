import VentureTile from "@/components/cards/VentureTile";
import CTABar from "@/components/sections/CTABar";
import { ventures } from "@/data";

export const metadata = {
  title: "Ventures | Yashveer Chauhan",
  description: "Active ventures exploring data-first betting and AI-native investing.",
};

export default function VenturesPage() {
  return (
    <div className="space-y-24">
      {/* Hero Section with Apple-inspired design */}
      <header className="relative space-y-10 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--secondary)]/10 to-[var(--highlight)]/10 border border-[var(--secondary)]/20 px-6 py-3 text-sm font-semibold text-[var(--secondary)] backdrop-blur-sm">
            🚀 Building in Public
          </span>
        </div>

        <div className="space-y-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl bg-gradient-to-br from-[var(--text)] to-[var(--text)]/60 bg-clip-text tracking-tight leading-tight">
            Ventures at the Edge of{' '}
            <span className="bg-gradient-to-r from-[var(--secondary)] to-[var(--highlight)] bg-clip-text text-transparent">
              Learning & Markets
            </span>
          </h1>
          <p className="mx-auto max-w-4xl text-xl md:text-2xl leading-relaxed text-[var(--text)]/70 font-light">
            Each venture is an experiment in combining measurable outcomes with human intuition.
            Here&apos;s what I&apos;m building right now and how you can get involved.
          </p>
        </div>

        {/* Stats or quick metrics */}
        <div className="flex flex-wrap justify-center gap-8 pt-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--secondary)]">{ventures.length}</div>
            <div className="text-sm text-[var(--muted)]">Active Ventures</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--highlight)]">100+</div>
            <div className="text-sm text-[var(--muted)]">Early Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--accent)]">2024</div>
            <div className="text-sm text-[var(--muted)]">Year Started</div>
          </div>
        </div>
      </header>

      {/* Ventures Grid with enhanced styling */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary)]/5 via-transparent to-[var(--highlight)]/5 rounded-3xl" />
        <div className="relative">
          <div className="text-center mb-12 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Ventures</h2>
            <p className="text-lg text-[var(--text)]/70 max-w-2xl mx-auto">
              Each venture represents a unique approach to solving real problems with innovative technology
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {ventures.map((venture, index) => (
              <div
                key={venture.slug}
                className="animate-fade-in-scale"
                style={{animationDelay: `${0.4 + index * 0.2}s`}}
              >
                <VentureTile venture={venture} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative animate-fade-in-up" style={{animationDelay: '0.6s'}}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Venture Philosophy</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4 p-6 rounded-2xl bg-[var(--surface)]/50 border border-[var(--muted)]/10 backdrop-blur-sm">
            <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-[var(--secondary)]/20 to-[var(--secondary)]/10 flex items-center justify-center">
              <span className="text-xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold">Data-First</h3>
            <p className="text-[var(--text)]/70">Every decision backed by measurable insights and real user feedback</p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-2xl bg-[var(--surface)]/50 border border-[var(--muted)]/10 backdrop-blur-sm">
            <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-[var(--highlight)]/20 to-[var(--highlight)]/10 flex items-center justify-center">
              <span className="text-xl">🧠</span>
            </div>
            <h3 className="text-xl font-semibold">Human-Centered</h3>
            <p className="text-[var(--text)]/70">Technology that amplifies human intuition, not replaces it</p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-2xl bg-[var(--surface)]/50 border border-[var(--muted)]/10 backdrop-blur-sm">
            <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent)]/10 flex items-center justify-center">
              <span className="text-xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold">Rapid Iteration</h3>
            <p className="text-[var(--text)]/70">Build, learn, adapt—creating solutions that evolve with real needs</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="animate-fade-in-up" style={{animationDelay: '0.8s'}}>
        <CTABar />
      </section>
    </div>
  );
}
