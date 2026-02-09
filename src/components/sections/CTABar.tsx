import Link from "next/link";

export default function CTABar() {
  return (
    <div className="relative overflow-hidden rounded-[30px] border border-[var(--line)] bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] p-8 md:p-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.32),transparent_45%)]" />
      <div className="absolute -right-20 top-0 h-60 w-60 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-white/20 blur-3xl" />

      <div className="relative z-10 text-center">
        <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
          Building something ambitious?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
          I partner with founders, teams, and educators to move ideas from concept to shipped
          product with speed and clarity.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="mailto:hello@yashveer.dev"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-[var(--primary)] transition-smooth hover:-translate-y-0.5 hover:bg-white/90"
          >
            Let&apos;s talk
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white transition-smooth hover:-translate-y-0.5 hover:bg-white/20"
          >
            Browse projects
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm text-white/80">
          <span>AI product strategy</span>
          <span className="hidden h-1 w-1 rounded-full bg-white/70 sm:inline-block" aria-hidden />
          <span>Full-stack execution</span>
          <span className="hidden h-1 w-1 rounded-full bg-white/70 sm:inline-block" aria-hidden />
          <span>Hands-on teaching</span>
        </div>
      </div>
    </div>
  );
}
