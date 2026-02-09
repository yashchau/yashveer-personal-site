import Link from "next/link";

export default function BlogNotFound() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 text-center">
      <div className="glass space-y-4 px-8 py-12">
        <span className="inline-flex items-center justify-center rounded-full bg-[var(--accent)]/15 px-4 py-2 text-sm font-semibold text-[var(--accent)]">
          Article Not Available
        </span>
        <h1 className="text-3xl font-semibold">The post you&apos;re after has drifted out of view.</h1>
        <p className="text-base opacity-80">
          It may still be in research mode or the link could be outdated. Explore recent writing or reach out if you
          want a preview.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/blog"
            className="rounded-xl bg-[var(--accent)] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
          >
            Back to blog
          </Link>
          <Link
            href="mailto:hello@yashveer.dev"
            className="rounded-xl border border-[var(--muted)] px-6 py-3 transition-colors hover:bg-[var(--surface)]"
          >
            Request early access
          </Link>
        </div>
      </div>
    </div>
  );
}
