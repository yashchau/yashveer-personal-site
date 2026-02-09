import Link from "next/link";

const focusAreas = [
  {
    title: "Now Building",
    detail: "AI products that improve learning loops and decision quality.",
    tone: "primary",
  },
  {
    title: "Current Obsession",
    detail: "Where product intuition, data systems, and market behavior overlap.",
    tone: "secondary",
  },
  {
    title: "Open To",
    detail: "Advisory, product partnerships, and teaching collaborations.",
    tone: "accent",
  },
] as const;

const toneClass = {
  primary: "text-[var(--primary)]",
  secondary: "text-[var(--secondary)]",
  accent: "text-[var(--accent)]",
} as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[34px] border border-[var(--line)] bg-[var(--surface-elevated)] px-6 py-12 sm:px-8 md:px-12 md:py-16">
      <div className="absolute inset-0" aria-hidden>
        <div className="animate-float absolute -left-28 top-8 h-64 w-64 rounded-full bg-[var(--primary)]/20 blur-3xl" />
        <div className="absolute -right-24 top-1/3 h-64 w-64 rounded-full bg-[var(--secondary)]/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-[var(--accent)]/20 blur-3xl" />
      </div>

      <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div className="space-y-8 animate-fade-in-up">
          <span className="eyebrow">AI Builder • Educator • Operator</span>

          <div className="space-y-5">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              From military bases to building
              <span className="block gradient-text">AI products people actually use.</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              I design and ship products that help people learn faster, invest smarter, and make
              better decisions under uncertainty.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link className="primary-button" href="/projects">
              View my work
              <span aria-hidden>→</span>
            </Link>
            <Link className="secondary-button" href="/teaching">
              Learn with me
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)]/70 p-4">
              <div className="text-2xl font-semibold text-[var(--primary)]">7+</div>
              <div className="mt-1 text-sm text-[var(--muted)]">Years building in tech</div>
            </div>
            <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)]/70 p-4">
              <div className="text-2xl font-semibold text-[var(--secondary)]">15+</div>
              <div className="mt-1 text-sm text-[var(--muted)]">Products shipped</div>
            </div>
            <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)]/70 p-4">
              <div className="text-2xl font-semibold text-[var(--accent)]">100+</div>
              <div className="mt-1 text-sm text-[var(--muted)]">Students mentored</div>
            </div>
          </div>
        </div>

        <aside className="grid gap-4 animate-fade-in-scale lg:max-w-md lg:justify-self-end">
          {focusAreas.map((item) => (
            <article key={item.title} className="surface-card p-5">
              <h2 className={`text-sm font-semibold uppercase tracking-[0.14em] ${toneClass[item.tone]}`}>
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)] md:text-base">
                {item.detail}
              </p>
            </article>
          ))}
        </aside>
      </div>
    </section>
  );
}
