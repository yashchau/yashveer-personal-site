import { notFound } from "next/navigation";
import projects from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug) ?? notFound();

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="glass p-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">{project.title}</h1>
          <p className="text-xl opacity-90 mb-6">{project.pitch}</p>

          {/* Key Metrics */}
          <div className="flex flex-wrap gap-4">
            {project.outcomes.map((outcome, index) => (
              <div key={index} className="glass px-4 py-2">
                <span className="text-sm font-semibold text-[var(--highlight)]">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Problem */}
          <section className="glass p-6">
            <h2 className="text-2xl font-semibold mb-4">Problem</h2>
            <p className="opacity-80">
              {project.pitch} This project addressed the challenge of {project.tags.join(", ").toLowerCase()}
              in the context of {project.role.toLowerCase()} work.
            </p>
          </section>

          {/* Constraints */}
          <section className="glass p-6">
            <h2 className="text-2xl font-semibold mb-4">Constraints</h2>
            <ul className="space-y-2 opacity-80">
              <li>• Timeframe: {project.timeframe}</li>
              <li>• Role: {project.role}</li>
              <li>• Stack: {project.stack.join(", ")}</li>
            </ul>
          </section>

          {/* Process */}
          <section className="glass p-6">
            <h2 className="text-2xl font-semibold mb-4">Process</h2>
            <p className="opacity-80">
              The development process involved iterative design, implementation, and testing phases.
              Key focus areas included {project.tags.join(", ").toLowerCase()} considerations and
              ensuring measurable outcomes.
            </p>
          </section>

          {/* Results */}
          <section className="glass p-6">
            <h2 className="text-2xl font-semibold mb-4">Results</h2>
            <ul className="space-y-2">
              {project.outcomes.map((outcome, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-[var(--highlight)] rounded-full mr-3"></span>
                  {outcome}
                </li>
              ))}
            </ul>
          </section>

          {/* Lessons */}
          <section className="glass p-6">
            <h2 className="text-2xl font-semibold mb-4">Lessons Learned</h2>
            <p className="opacity-80">
              This project reinforced the importance of {project.tags.join(", ").toLowerCase()}
              best practices and the value of iterative development approaches.
            </p>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Facts */}
          <section className="glass p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Facts</h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-semibold">Role:</span>
                <p className="opacity-80">{project.role}</p>
              </div>
              <div>
                <span className="font-semibold">Timeframe:</span>
                <p className="opacity-80">{project.timeframe}</p>
              </div>
              <div>
                <span className="font-semibold">Stack:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {project.stack.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-[var(--surface)] rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="font-semibold">Tags:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-[var(--primary)] text-white rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Actions */}
          <section className="glass p-6">
            <h3 className="text-lg font-semibold mb-4">Actions</h3>
            <div className="space-y-3">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-2 rounded-lg bg-[var(--primary)] text-white text-center hover:opacity-90 transition-opacity"
                >
                  See Code
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-2 rounded-lg border border-[var(--muted)] text-center hover:bg-[var(--surface)] transition-colors"
                >
                  View Live
                </a>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
