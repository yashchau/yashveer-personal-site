import { StatChip } from "@/types/content";
import { cn } from "@/lib/utils";

interface StatChipsProps {
  stats: StatChip[];
  className?: string;
}

export default function StatChips({ stats, className }: StatChipsProps) {
  return (
    <div className={cn("flex flex-wrap gap-4", className)}>
      {stats.map((stat) => (
        <div key={stat.label} className="glass px-4 py-3 text-center">
          <div className="text-2xl font-bold text-[var(--primary)]">{stat.value}</div>
          <div className="text-sm opacity-80">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
