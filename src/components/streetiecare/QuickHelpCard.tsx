import Link from "next/link";
import type { QuickHelpItem } from "@/data/streetiecare";
import { cn } from "@/lib/utils";

const toneClasses: Record<QuickHelpItem["tone"], string> = {
  danger: "border-[var(--danger)]/25 bg-[var(--danger)]/10",
  warning: "border-[var(--warning)]/30 bg-[var(--warning)]/10",
  primary: "border-[var(--primary)]/25 bg-[var(--primary)]/10",
  secondary: "border-[var(--secondary)]/25 bg-[var(--secondary)]/10",
  neutral: "border-[var(--line)] bg-[var(--surface)]/70",
};

export default function QuickHelpCard({ item }: { item: QuickHelpItem }) {
  return (
    <Link
      href={item.href}
      className={cn(
        "group rounded-2xl border p-4 transition-smooth hover:-translate-y-1 hover:shadow-lg",
        toneClasses[item.tone]
      )}
    >
      <h3 className="text-base font-semibold text-[var(--text)]">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.description}</p>
      <span className="mt-4 inline-flex text-sm font-semibold text-[var(--primary)] transition group-hover:translate-x-1">
        Open guide
      </span>
    </Link>
  );
}
