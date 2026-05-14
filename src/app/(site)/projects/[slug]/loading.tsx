export default function LoadingProject() {
  return (
    <div className="space-y-8 animate-pulse">
      <section className="glass p-8">
        <div className="h-8 w-2/3 bg-[var(--surface)] rounded" />
        <div className="mt-4 h-4 w-full bg-[var(--surface)] rounded" />
        <div className="mt-4 flex flex-wrap gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="glass px-4 py-6 w-32" />
          ))}
        </div>
      </section>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <section key={index} className="glass p-6 space-y-3">
              <div className="h-6 w-1/2 bg-[var(--surface)] rounded" />
              <div className="h-4 w-full bg-[var(--surface)] rounded" />
              <div className="h-4 w-5/6 bg-[var(--surface)] rounded" />
            </section>
          ))}
        </div>
        <div className="space-y-6">
          <section className="glass p-6 space-y-3">
            <div className="h-5 w-1/3 bg-[var(--surface)] rounded" />
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-4 w-full bg-[var(--surface)] rounded" />
            ))}
          </section>
          <section className="glass p-6 space-y-3">
            <div className="h-5 w-1/3 bg-[var(--surface)] rounded" />
            <div className="h-10 w-full bg-[var(--surface)] rounded" />
          </section>
        </div>
      </div>
    </div>
  );
}
