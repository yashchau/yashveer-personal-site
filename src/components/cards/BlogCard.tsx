import Link from "next/link";
import { BlogPost } from "@/types/content";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <article className="group relative h-full overflow-hidden rounded-3xl bg-[var(--surface)]/80 border border-[var(--muted)]/15 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[var(--accent)]/30 hover:shadow-2xl hover:shadow-[var(--accent)]/10">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 via-transparent to-[var(--primary)]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Content */}
        <div className="relative flex h-full flex-col p-8">
          {/* Meta information */}
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[var(--accent)]/80">
              <span className="rounded-full bg-[var(--accent)]/10 px-3 py-1 font-semibold">
                {post.channel}
              </span>
              <span className="text-[var(--muted)]/60">•</span>
              <span className="text-[var(--muted)]/80">
                {new Date(post.date).toLocaleDateString(undefined, {
                  month: "short",
                  day: "numeric",
                  year: "numeric"
                })}
              </span>
              <span className="text-[var(--muted)]/60">•</span>
              <span className="text-[var(--muted)]/80">{post.readingTime} min read</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold leading-tight text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-300">
              {post.title}
            </h2>
          </header>

          {/* Description */}
          <p className="text-base md:text-lg leading-relaxed text-[var(--text)]/70 mt-4 flex-grow">
            {post.tldr}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[var(--muted)]/8 border border-[var(--muted)]/20 px-3 py-1 text-xs font-medium text-[var(--muted)] transition-colors duration-300 group-hover:bg-[var(--accent)]/10 group-hover:border-[var(--accent)]/30 group-hover:text-[var(--accent)]"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="rounded-full bg-[var(--muted)]/8 px-3 py-1 text-xs font-medium text-[var(--muted)]">
                +{post.tags.length - 3} more
              </span>
            )}
          </div>

          {/* Read more indicator */}
          <footer className="flex items-center justify-between mt-8 pt-6 border-t border-[var(--muted)]/10">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] transition-all duration-300 group-hover:gap-3">
              Read article
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>

            {/* Reading time visual indicator */}
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(post.readingTime, 5) }, (_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 rounded-full bg-[var(--accent)]/40 transition-all duration-300 group-hover:bg-[var(--accent)]"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </footer>
        </div>
      </article>
    </Link>
  );
}
