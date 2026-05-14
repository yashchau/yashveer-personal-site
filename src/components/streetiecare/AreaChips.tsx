import Link from "next/link";
import { streetieAreas } from "@/data/streetiecare";

export default function AreaChips() {
  return (
    <div className="flex flex-wrap gap-2">
      {streetieAreas.map((area) => (
        <Link
          key={area}
          href={`/streetiecare/resources?area=${encodeURIComponent(area)}`}
          className="rounded-full border border-[var(--line)] bg-[var(--surface)]/80 px-4 py-2 text-sm font-semibold text-[var(--text)] transition-smooth hover:-translate-y-0.5 hover:border-[var(--secondary)]/40 hover:bg-[var(--secondary)]/10"
        >
          {area}
        </Link>
      ))}
    </div>
  );
}
