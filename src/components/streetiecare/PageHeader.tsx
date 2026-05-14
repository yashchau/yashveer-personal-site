interface PageHeaderProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <section className="section-shell">
      <div className="relative space-y-5">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">{title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
