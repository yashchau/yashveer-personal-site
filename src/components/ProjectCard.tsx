import { Project } from "@/types/content";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <article className={cn("glass p-6 hover:shadow-liquid transition-shadow", className)}>
      <div className="flex flex-col h-full">
        <header>
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-sm opacity-80 mb-3">{project.pitch}</p>
        </header>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-[var(--primary)] text-white opacity-80"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="text-sm opacity-70 mb-4">
          <p><strong>Role:</strong> {project.role}</p>
          <p><strong>Stack:</strong> {project.stack.join(", ")}</p>
          <p><strong>Timeframe:</strong> {project.timeframe}</p>
        </div>
        
        <div className="mt-auto">
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2">Outcomes:</h4>
            <ul className="text-sm opacity-80 space-y-1">
              {project.outcomes.map((outcome, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-1 h-1 bg-[var(--highlight)] rounded-full mr-2"></span>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex gap-2">
            <a
              href={`/projects/${project.slug}`}
              className="px-4 py-2 rounded-lg bg-[var(--primary)] text-white text-sm hover:opacity-90 transition-opacity"
            >
              View Details
            </a>
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-[var(--muted)] text-sm hover:bg-[var(--surface)] transition-colors"
              >
                See Code
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
