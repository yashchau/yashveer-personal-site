import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="mx-auto max-w-2xl text-center space-y-6">
      <div className="glass p-10 space-y-4">
        <span className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-semibold">
          Project Not Found
        </span>
        <h1 className="text-3xl font-semibold">We couldn&apos;t find that case study.</h1>
        <p className="text-base opacity-80">
          The project you&apos;re looking for might be unpublished or the link is incorrect. Explore the full project
          library to see shipped work across AI, data, and product builds.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-xl bg-[var(--primary)] text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Browse Projects
          </Link>
          <Link
            href="mailto:hello@yashveer.dev"
            className="px-6 py-3 rounded-xl border border-[var(--muted)] hover:bg-[var(--surface)] transition-colors"
          >
            Contact Yashveer
          </Link>
        </div>
      </div>
    </div>
  );
}
