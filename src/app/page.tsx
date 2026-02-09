import Link from "next/link";
import Hero from "@/components/sections/Hero";
import CTABar from "@/components/sections/CTABar";
import StatChips from "@/components/common/StatChips";
import ProjectCard from "@/components/cards/ProjectCard";
import VentureTile from "@/components/cards/VentureTile";
import Testimonial from "@/components/cards/Testimonial";
import { projects, ventures, testimonials, stats } from "@/data";

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
  return (
    <div className="space-y-24 pb-6">
      <Hero />

      <section className="section-shell">
        <div className="relative space-y-10">
          <SectionHeader
            eyebrow="Momentum"
            title="A snapshot of my work so far"
            description="A quick look at the metrics behind product execution, technical depth, and teaching impact."
          />
          <StatChips stats={stats} />
        </div>
      </section>

      <section className="section-shell">
        <div className="relative space-y-10">
          <SectionHeader
            eyebrow="Portfolio"
            title="Featured projects"
            description="Case studies across AI, software, and data-heavy systems with clear outcomes and real users."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="flex justify-center md:justify-start">
            <Link href="/projects" className="secondary-button">
              View all projects
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="relative space-y-10">
          <SectionHeader
            eyebrow="In Progress"
            title="Current ventures"
            description="Products I am actively building in public, with traction updates and clear near-term roadmaps."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {ventures.map((venture) => (
              <VentureTile key={venture.slug} venture={venture} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="relative space-y-10">
          <SectionHeader
            eyebrow="Social Proof"
            title="What people say"
            description="Feedback from collaborators, teammates, and students who have worked with me directly."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={`${testimonial.name}-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <CTABar />
      </section>
    </div>
  );
}
