import { Venture } from "@/types/content";

interface VentureTileProps {
  venture: Venture;
}

export default function VentureTile({ venture }: VentureTileProps) {
  return (
    <article className="surface-card group h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary)]/10 via-transparent to-[var(--accent)]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col p-6">
        <header>
          <h3 className="text-xl font-semibold text-[var(--text)] transition-colors duration-200 group-hover:text-[var(--secondary)]">
            {venture.name}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--muted)]">
            {venture.mission}
          </p>
        </header>

        <div className="mt-5">
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
            What it does
          </div>
          <p className="text-sm leading-relaxed text-[var(--muted)]">{venture.whatItDoes}</p>
        </div>

        <div className="mt-5">
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
            Current traction
          </div>
          <ul className="space-y-1.5">
            {venture.traction.slice(0, 3).map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm leading-relaxed text-[var(--muted)]">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--secondary)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 flex-1">
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
            Upcoming
          </div>
          <ul className="space-y-1.5">
            {venture.roadmap.slice(0, 2).map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm leading-relaxed text-[var(--muted)]">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <footer className="mt-6 border-t border-[var(--line)] pt-4">
          <a
            href={venture.contact}
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--surface)]/70 px-4 py-2 text-sm font-semibold text-[var(--secondary)] transition-smooth hover:border-[var(--secondary)]/40 hover:bg-[var(--secondary)]/10"
          >
            Get involved
            <span aria-hidden>→</span>
          </a>
        </footer>
      </div>
    </article>
  );
}
