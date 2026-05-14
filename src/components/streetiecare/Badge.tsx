import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--line)] bg-[var(--surface)]/80 px-3 py-1 text-xs font-semibold text-[var(--muted)]",
        className
      )}
    >
      {children}
    </span>
  );
}

export function CategoryBadge({ children, className }: BadgeProps) {
  return (
    <Badge className={cn("border-[var(--primary)]/25 bg-[var(--primary)]/10 text-[var(--primary)]", className)}>
      {children}
    </Badge>
  );
}
