"use client";

import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import {
  animalTypes,
  resourceCategories,
  streetieAreas,
  streetieResources,
  type AnimalType,
  type Resource,
} from "@/data/streetiecare";
import EmptyState from "./EmptyState";
import ResourceCard from "./ResourceCard";

interface ResourceDirectoryProps {
  initialQuery?: string;
  initialCategory?: string;
  initialArea?: string;
  initialEmergencyOnly?: boolean;
}

function matchesArea(resource: Resource, selectedArea: string) {
  if (!selectedArea || selectedArea === "All Bangalore") {
    return true;
  }

  return resource.areas.includes("All Bangalore") || resource.areas.includes(selectedArea as Resource["areas"][number]);
}

export default function ResourceDirectory({
  initialQuery = "",
  initialCategory = "",
  initialArea = "",
  initialEmergencyOnly = false,
}: ResourceDirectoryProps) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [area, setArea] = useState(initialArea);
  const [animal, setAnimal] = useState("");
  const [emergencyOnly, setEmergencyOnly] = useState(initialEmergencyOnly);

  const filteredResources = useMemo(() => {
    const base = streetieResources.filter((resource) => {
      const categoryMatch = !category || resource.category === category;
      const areaMatch = matchesArea(resource, area);
      const animalMatch = !animal || resource.animalTypes.includes(animal as AnimalType);
      const emergencyMatch = !emergencyOnly || resource.isEmergency;

      return categoryMatch && areaMatch && animalMatch && emergencyMatch;
    });

    const trimmed = query.trim();
    if (!trimmed) {
      return base;
    }

    return new Fuse(base, {
      keys: [
        { name: "name", weight: 0.32 },
        { name: "category", weight: 0.18 },
        { name: "areas", weight: 0.16 },
        { name: "tags", weight: 0.18 },
        { name: "description", weight: 0.16 },
        "animalTypes",
        "address",
      ],
      threshold: 0.35,
      ignoreLocation: true,
    })
      .search(trimmed)
      .map((result) => result.item);
  }, [animal, area, category, emergencyOnly, query]);

  function clearFilters() {
    setQuery("");
    setCategory("");
    setArea("");
    setAnimal("");
    setEmergencyOnly(false);
  }

  return (
    <div className="space-y-6">
      <section className="glass p-4 md:p-5" aria-label="Resource filters">
        <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr_1fr_1fr_auto] lg:items-end">
          <div className="space-y-2">
            <label htmlFor="resource-search" className="text-sm font-semibold text-[var(--text)]">
              Search
            </label>
            <input
              id="resource-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try vet, ambulance, rabies, Domlur, cat..."
              className="min-h-11 w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--secondary)]"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category-filter" className="text-sm font-semibold text-[var(--text)]">
              Category
            </label>
            <select
              id="category-filter"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="min-h-11 w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--secondary)]"
            >
              <option value="">All categories</option>
              {resourceCategories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="area-filter" className="text-sm font-semibold text-[var(--text)]">
              Area
            </label>
            <select
              id="area-filter"
              value={area}
              onChange={(event) => setArea(event.target.value)}
              className="min-h-11 w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--secondary)]"
            >
              <option value="">All areas</option>
              {streetieAreas.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="animal-filter" className="text-sm font-semibold text-[var(--text)]">
              Animal
            </label>
            <select
              id="animal-filter"
              value={animal}
              onChange={(event) => setAnimal(event.target.value)}
              className="min-h-11 w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--secondary)]"
            >
              <option value="">All animals</option>
              {animalTypes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="inline-flex min-h-11 items-center gap-3 rounded-xl border border-[var(--line)] bg-[var(--surface)] px-3 text-sm font-semibold text-[var(--text)]">
              <input
                type="checkbox"
                checked={emergencyOnly}
                onChange={(event) => setEmergencyOnly(event.target.checked)}
                className="h-4 w-4 accent-[var(--danger)]"
              />
              Emergency only
            </label>
            <button type="button" onClick={clearFilters} className="secondary-button justify-center px-3 py-2 text-sm">
              Clear
            </button>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-between gap-4 text-sm text-[var(--muted)]">
        <p>
          Showing <span className="font-semibold text-[var(--text)]">{filteredResources.length}</span> of{" "}
          {streetieResources.length} sample resources.
        </p>
      </div>

      {filteredResources.length > 0 ? (
        <div className="grid gap-5 lg:grid-cols-2">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No resources match these filters"
          description="Try clearing one filter or searching a simpler term like vet, ambulance, foster, rabies, ABC, Domlur, or cat."
        />
      )}
    </div>
  );
}
