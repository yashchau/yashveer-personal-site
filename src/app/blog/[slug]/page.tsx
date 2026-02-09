import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/data";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

const formatBlock = (block: string, index: number) => {
  if (block.startsWith("## ")) {
    return (
      <h2 key={index} className="text-3xl md:text-4xl font-bold text-[var(--text)] mt-12 mb-6 tracking-tight">
        {block.replace("## ", "")}
      </h2>
    );
  }

  if (block.startsWith("### ")) {
    return (
      <h3 key={index} className="text-2xl md:text-3xl font-semibold text-[var(--text)] mt-10 mb-5 tracking-tight">
        {block.replace("### ", "")}
      </h3>
    );
  }

  return (
    <p key={index} className="text-lg md:text-xl leading-relaxed text-[var(--text)]/80 mb-6">
      {block}
    </p>
  );
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPageProps): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Yashveer Chauhan`,
    description: post.tldr,
  };
}

export default function BlogPostPage({ params }: BlogPageProps) {
  const post = blogPosts.find((item) => item.slug === params.slug) ?? notFound();

  const blocks = post.content?.split(/\n\n+/).filter(Boolean) ?? [];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back button */}
      <div className="mb-8 animate-fade-in-up">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-300 group"
        >
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to Blog
        </Link>
      </div>

      <article className="space-y-16">
        {/* Header */}
        <header className="space-y-8 text-center animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          {/* Meta information */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-[var(--accent)]">
            <span className="rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 px-4 py-2 font-semibold">
              {post.channel}
            </span>
            <span className="text-[var(--muted)]/60">•</span>
            <span className="text-[var(--muted)]">
              {new Date(post.date).toLocaleDateString(undefined, {
                month: "long",
                day: "numeric",
                year: "numeric"
              })}
            </span>
            <span className="text-[var(--muted)]/60">•</span>
            <span className="text-[var(--muted)]">{post.readingTime} min read</span>
          </div>

          {/* Title and description */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text)] tracking-tight leading-tight">
              {post.title}
            </h1>
            <p className="max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed text-[var(--text)]/70 font-light">
              {post.tldr}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-3">
            {post.tags.map((tag, index) => (
              <span
                key={tag}
                className="rounded-full bg-[var(--muted)]/8 border border-[var(--muted)]/20 px-4 py-2 text-sm font-medium text-[var(--muted)] transition-all duration-300 hover:bg-[var(--accent)]/10 hover:border-[var(--accent)]/30 hover:text-[var(--accent)]"
                style={{animationDelay: `${0.2 + index * 0.1}s`}}
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content */}
        <section className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <div className="prose prose-lg prose-slate mx-auto max-w-none">
            <div className="space-y-8 rounded-3xl border border-[var(--muted)]/10 bg-[var(--surface)]/50 p-8 md:p-12 backdrop-blur-sm">
              {blocks.map((block, index) => formatBlock(block.trim(), index))}
            </div>
          </div>
        </section>

        {/* Call to action */}
        <footer className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <div className="relative overflow-hidden rounded-3xl border border-[var(--accent)]/20 bg-gradient-to-br from-[var(--accent)]/5 to-[var(--primary)]/5 p-8 md:p-12 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-[var(--primary)]/10" />
            <div className="relative text-center space-y-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[var(--accent)]/20 to-[var(--primary)]/20 flex items-center justify-center">
                <span className="text-2xl">💭</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[var(--text)]">Enjoyed this idea?</h3>
                <p className="text-lg text-[var(--text)]/70 max-w-2xl mx-auto">
                  Share your perspective or challenge the assumptions – I'd love to iterate on the concept with you.
                </p>
              </div>
              <a
                href="mailto:hello@yashveer.dev"
                className="inline-flex items-center gap-3 rounded-full bg-[var(--accent)] hover:bg-[var(--primary)] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--accent)]/20 group"
              >
                Continue the conversation
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}
