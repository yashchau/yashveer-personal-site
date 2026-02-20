import { BlogCard } from "@/components";
import { blogPosts } from "@/data";
import { BLOG_CHANNELS } from "@/lib/constants";

export const metadata = {
  title: "Blog | Yashveer Chauhan",
  description: "Long-form writing on AI product building, options trading, and lessons from a career spanning military R&D to enterprise fintech.",
};

const channelEntries = Object.values(BLOG_CHANNELS);

export default function BlogPage() {
  return (
    <div className="space-y-20">
      {/* Hero Section with Apple-inspired spacing and typography */}
      <header className="relative space-y-8 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--accent)]/10 to-[var(--primary)]/10 border border-[var(--accent)]/20 px-6 py-3 text-sm font-semibold text-[var(--accent)] backdrop-blur-sm">
            Essays & Insights
          </span>
        </div>

        <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl bg-gradient-to-br from-[var(--text)] to-[var(--text)]/60 bg-clip-text tracking-tight">
            Thinking in Public
          </h1>
          <p className="mx-auto max-w-3xl text-xl md:text-2xl leading-relaxed text-[var(--text)]/70 font-light">
            Long-form notes on designing intelligent systems, building ventures, and staying curious in fast-moving markets.
          </p>
        </div>
      </header>

      {/* Channel Tags with improved design */}
      <section className="flex flex-wrap justify-center gap-3 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
        {channelEntries.map((channel, index) => (
          <span
            key={channel}
            className="group relative overflow-hidden rounded-full border border-[var(--muted)]/20 bg-[var(--surface)]/80 px-5 py-2.5 text-sm font-medium text-[var(--muted)] backdrop-blur-sm transition-all duration-300 hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/5 hover:text-[var(--accent)] hover:scale-105"
            style={{animationDelay: `${0.3 + index * 0.1}s`}}
          >
            <span className="relative z-10">{channel}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/10 to-[var(--primary)]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </span>
        ))}
      </section>

      {/* Blog Posts Grid with staggered animation */}
      <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div
            key={post.slug}
            className="animate-fade-in-scale"
            style={{animationDelay: `${0.4 + index * 0.1}s`}}
          >
            <BlogCard post={post} />
          </div>
        ))}
      </section>

      {/* Empty state with encouraging message */}
      {blogPosts.length === 0 && (
        <div className="text-center py-16 space-y-4">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[var(--accent)]/20 to-[var(--primary)]/20 flex items-center justify-center">
            <span className="text-3xl">✍️</span>
          </div>
          <h3 className="text-xl font-semibold text-[var(--text)]/60">More thoughts coming soon</h3>
          <p className="text-[var(--text)]/50">Check back for new insights and ideas</p>
        </div>
      )}
    </div>
  );
}
