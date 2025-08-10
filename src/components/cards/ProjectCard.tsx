"use client";

import Link from "next/link";
import { Project } from "@/types/content";
import { usePostHog } from "@/lib/posthog";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { capture } = usePostHog();

  const handleProjectClick = (action: string, target?: string) => {
    capture('project_interaction', {
      project_title: project.title,
      project_slug: project.slug,
      action: action,
      target: target,
      tags: project.tags,
      tech_stack: project.stack
    });
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-[var(--surface)] border border-[var(--muted)]/20 hover:border-[var(--primary)]/30 hover:bg-[var(--primary)]/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--secondary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-sm opacity-70 mb-3 line-clamp-2">
            {project.pitch}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--primary)]/10 text-[var(--primary)]"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--muted)]/20 text-[var(--muted)]">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Stack */}
        <div className="mb-4">
          <div className="text-xs opacity-60 mb-2">Tech Stack</div>
          <div className="flex flex-wrap gap-1">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 rounded-md text-xs bg-[var(--muted)]/20 text-[var(--muted)]"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="px-2 py-1 rounded-md text-xs bg-[var(--muted)]/20 text-[var(--muted)]">
                +{project.stack.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Outcomes */}
        <div className="mb-6">
          <div className="text-xs opacity-60 mb-2">Key Outcomes</div>
          <ul className="space-y-1">
            {project.outcomes.slice(0, 2).map((outcome, index) => (
              <li key={index} className="text-sm opacity-80 flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-[var(--success)] rounded-full mt-2 flex-shrink-0" />
                {outcome}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--muted)]/20">
          <div className="text-xs opacity-60">
            {project.timeframe} • {project.role}
          </div>
          <div className="flex gap-2">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleProjectClick('repository_click', project.repo || undefined)}
                className="p-2 rounded-lg hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] transition-colors duration-200"
                aria-label="View code"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleProjectClick('project_link_click', project.link || undefined)}
                className="p-2 rounded-lg hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] transition-colors duration-200"
                aria-label="View project"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            <Link
              href={`/projects/${project.slug}`}
              onClick={() => handleProjectClick('details_click', `/projects/${project.slug}`)}
              className="p-2 rounded-lg hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] transition-colors duration-200"
              aria-label="View details"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
