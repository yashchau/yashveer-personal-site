import { StatChip } from "@/types/content";

interface StatChipsProps {
  stats: StatChip[];
}

export default function StatChips({ stats }: StatChipsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="group relative p-6 rounded-2xl bg-[var(--surface)] border border-[var(--muted)]/20 hover:border-[var(--primary)]/30 hover:bg-[var(--primary)]/5 transition-all duration-300 hover:scale-105"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-2 group-hover:scale-110 transition-transform duration-300">
              {stat.value}+
            </div>
            <div className="text-sm opacity-70 font-medium">
              {stat.label}
            </div>
          </div>

          {/* Hover effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ))}
    </div>
  );
}
