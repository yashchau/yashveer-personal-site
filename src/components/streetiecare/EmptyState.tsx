interface EmptyStateProps {
  title: string;
  description: string;
}

export default function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="rounded-2xl border border-dashed border-[var(--line)] bg-[var(--surface)]/60 p-8 text-center">
      <h3 className="text-xl font-semibold text-[var(--text)]">{title}</h3>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">{description}</p>
    </div>
  );
}
