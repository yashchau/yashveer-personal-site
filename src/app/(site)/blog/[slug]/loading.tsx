export default function LoadingBlogPost() {
  return (
    <div className="space-y-12 animate-pulse">
      <header className="space-y-4">
        <div className="h-3 w-40 rounded-full bg-[var(--surface)]" />
        <div className="h-10 w-3/4 rounded bg-[var(--surface)]" />
        <div className="h-4 w-2/3 rounded bg-[var(--surface)]" />
        <div className="flex gap-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <span key={index} className="h-5 w-24 rounded-full bg-[var(--surface)]" />
          ))}
        </div>
      </header>
      <section className="space-y-4 rounded-3xl border border-[var(--muted)]/15 bg-[var(--surface)]/70 p-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="h-4 w-full rounded bg-[var(--surface)]" />
        ))}
      </section>
    </div>
  );
}
