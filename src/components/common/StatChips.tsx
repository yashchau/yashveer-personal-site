import { StatChip } from "@/types/content";

interface StatChipsProps {
  stats: StatChip[];
}

export default function StatChips({ stats }: StatChipsProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="surface-card group p-4 md:p-5"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="relative text-center">
            <div className="text-2xl font-semibold text-[var(--primary)] transition-transform duration-300 group-hover:scale-105 md:text-3xl">
              {stat.value}
              <span className="text-xl text-[var(--secondary)] md:text-2xl">+</span>
            </div>
            <div className="mt-2 text-xs font-medium uppercase tracking-[0.06em] text-[var(--muted)] md:text-[11px]">
              {stat.label}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      ))}
    </div>
  );
}
