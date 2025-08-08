import Link from "next/link";
import Hero from "@/components/sections/Hero";
import CTABar from "@/components/sections/CTABar";
import StatChips from "@/components/common/StatChips";
import ProjectCard from "@/components/cards/ProjectCard";
import VentureTile from "@/components/cards/VentureTile";
import Testimonial from "@/components/cards/Testimonial";
import { projects, ventures, testimonials, stats } from "@/data";

export default function Home() {
  return (
    <div className="space-y-24">
      <Hero />

      {/* Stats Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/5 via-transparent to-[var(--accent)]/5 rounded-3xl" />
        <div className="relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quick Stats
            </h2>
            <p className="text-lg opacity-70 max-w-2xl mx-auto">
              Numbers that tell the story of impact and growth
            </p>
          </div>
          <StatChips stats={stats} />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            A showcase of my best work in AI, software, and data
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[var(--muted)] hover:border-[var(--primary)] hover:bg-[var(--primary)]/5 font-semibold transition-all duration-200 group"
          >
            <span className="group-hover:text-[var(--primary)] transition-colors">
              View All Projects
            </span>
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* Ventures */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary)]/5 via-transparent to-[var(--highlight)]/5 rounded-3xl" />
        <div className="relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Current Ventures
            </h2>
            <p className="text-lg opacity-70 max-w-2xl mx-auto">
              Building the future, one venture at a time
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {ventures.map((venture) => (
              <VentureTile key={venture.slug} venture={venture} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What People Say
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Real feedback from colleagues, students, and collaborators
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} testimonial={testimonial} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/5 via-transparent to-[var(--primary)]/5 rounded-3xl" />
        <div className="relative">
          <CTABar />
        </div>
      </section>
    </div>
  );
}
