import Hero from "@/components/Hero";
import CTABar from "@/components/CTABar";
import StatChips from "@/components/StatChips";
import ProjectCard from "@/components/ProjectCard";
import VentureTile from "@/components/VentureTile";
import Testimonial from "@/components/Testimonial";
import projects from "@/data/projects";
import ventures from "@/data/ventures";
import testimonials from "@/data/testimonials";
import stats from "@/data/statChips";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Stats Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Quick Stats</h2>
        <StatChips stats={stats} />
      </section>

      {/* Featured Projects */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Ventures */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Current Ventures</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {ventures.map((venture) => (
            <VentureTile key={venture.slug} venture={venture} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">What People Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} testimonial={testimonial} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-12">
        <CTABar />
      </section>
    </>
  );
}
