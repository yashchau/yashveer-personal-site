import Link from "next/link";
import Hero from "@/components/sections/Hero";
import CTABar from "@/components/sections/CTABar";
import StatChips from "@/components/common/StatChips";
import ProjectCard from "@/components/cards/ProjectCard";
import VentureTile from "@/components/cards/VentureTile";
import BlogCard from "@/components/cards/BlogCard";
import { projects, ventures, stats, blogPosts } from "@/data";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="space-y-4 text-center md:text-left">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-heading">{title}</h2>
      <p className="section-lede max-w-2xl">{description}</p>
    </div>
  );
}

export default function Home() {
  const featuredPosts = blogPosts.slice(0, 2);

  return (
    <div className="space-y-24 pb-6">
      <Hero />

      <section className="section-shell">
        <div className="relative space-y-10">
          <SectionHeader
            eyebrow="By the Numbers"
            title="A snapshot of 10+ years building"
            description="Enterprise software, indie products, academic research, and military-grade deployments."
          />
          <StatChips stats={stats} />
        </div>
      </section>

      <section className="section-shell">
        <div className="relative space-y-10">
          <SectionHeader
            eyebrow="Portfolio"
            title="Featured projects"
            description="From AI investment tools to military field systems — software built for real constraints and real users."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.slice(0, 6).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="flex justify-center md:justify-start">
            <Link href="/projects" className="secondary-button">
              View all {projects.length} projects
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="relative space-y-10">
          <SectionHeader
            eyebrow="Active Ventures"
            title="What I'm building right now"
            description="Three products at different stages — an iOS app, a sports marketplace, and an AI research platform."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {ventures.map((venture) => (
              <VentureTile key={venture.slug} venture={venture} />
            ))}
          </div>

          <div className="flex justify-center md:justify-start">
            <Link href="/ventures" className="secondary-button">
              Venture details
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {featuredPosts.length > 0 && (
        <section className="section-shell">
          <div className="relative space-y-10">
            <SectionHeader
              eyebrow="Writing"
              title="Latest from the blog"
              description="Long-form notes on AI product building, options trading, and lessons from a career spanning military R&D to enterprise fintech."
            />

            <div className="grid gap-6 md:grid-cols-2">
              {featuredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>

            <div className="flex justify-center md:justify-start">
              <Link href="/blog" className="secondary-button">
                All posts
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      <section>
        <CTABar />
      </section>
    </div>
  );
}
