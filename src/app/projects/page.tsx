"use client";

import { useState, useMemo } from "react";
import ProjectCard from "@/components/cards/ProjectCard";
import { projects } from "@/data";
import { PROJECT_FILTERS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const { tags: filterOptions, sortOptions } = PROJECT_FILTERS;

export default function ProjectsPage() {
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [sortBy, setSortBy] = useState("recency");

    const filteredAndSortedProjects = useMemo(() => {
        let filtered = projects;

        // Apply filters
        if (selectedFilters.length > 0) {
            filtered = projects.filter(project =>
                project.tags.some(tag => selectedFilters.includes(tag))
            );
        }

        // Apply sorting
        const sorted = [...filtered].sort((a, b) => {
            if (sortBy === "recency") {
                return new Date(b.timeframe).getTime() - new Date(a.timeframe).getTime();
            } else if (sortBy === "impact") {
                // Sort by number of outcomes (proxy for impact)
                return b.outcomes.length - a.outcomes.length;
            }
            return 0;
        });

        return sorted;
    }, [selectedFilters, sortBy]);

    const toggleFilter = (filter: string) => {
        setSelectedFilters(prev =>
            prev.includes(filter)
                ? prev.filter(f => f !== filter)
                : [...prev, filter]
        );
    };

    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-4xl font-semibold mb-4">Projects</h1>
                <p className="text-lg opacity-80">
                    A collection of projects I&apos;ve built, from AI tools to data systems.
                </p>
            </header>

            {/* Filters and Sort */}
            <div className="glass p-6">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                    <div>
                        <h3 className="text-sm font-semibold mb-2">Filter by:</h3>
                        <div className="flex flex-wrap gap-2">
                            {filterOptions.map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => toggleFilter(filter)}
                                    className={cn(
                                        "px-3 py-1 rounded-full text-sm transition-colors",
                                        selectedFilters.includes(filter)
                                            ? "bg-[var(--primary)] text-white"
                                            : "bg-[var(--surface)] border border-[var(--muted)] hover:bg-[var(--muted)]"
                                    )}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="sort" className="text-sm font-semibold block mb-2">
                            Sort by:
                        </label>
                        <select
                            id="sort"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-3 py-1 rounded-lg border border-[var(--muted)] bg-[var(--surface)] text-sm"
                        >
                            {sortOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAndSortedProjects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>

            {filteredAndSortedProjects.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-lg opacity-80">No projects match your filters.</p>
                    <button
                        onClick={() => setSelectedFilters([])}
                        className="mt-4 px-4 py-2 rounded-lg bg-[var(--primary)] text-white hover:opacity-90 transition-opacity"
                    >
                        Clear Filters
                    </button>
                </div>
            )}
        </div>
    );
}
