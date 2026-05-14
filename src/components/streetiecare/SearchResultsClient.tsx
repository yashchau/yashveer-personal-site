"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Fuse from "fuse.js";
import { streetieContacts, streetieFaqs, streetieProtocols, streetieResources } from "@/data/streetiecare";
import { Badge, CategoryBadge } from "./Badge";
import EmptyState from "./EmptyState";
import SearchBar from "./SearchBar";

type SearchKind = "Resources" | "Protocols" | "FAQs" | "Contacts";

interface SearchRecord {
  id: string;
  kind: SearchKind;
  title: string;
  summary: string;
  href: string;
  category: string;
  areas: string[];
  tags: string[];
  body: string;
}

const searchRecords: SearchRecord[] = [
  ...streetieResources.map((resource) => ({
    id: resource.id,
    kind: "Resources" as const,
    title: resource.name,
    summary: resource.description,
    href: `/streetiecare/resources/${resource.id}`,
    category: resource.category,
    areas: resource.areas,
    tags: [...resource.tags, ...resource.animalTypes],
    body: [resource.address, resource.timings, resource.phone, resource.whatsapp].filter(Boolean).join(" "),
  })),
  ...streetieProtocols.map((protocol) => ({
    id: protocol.id,
    kind: "Protocols" as const,
    title: protocol.title,
    summary: protocol.summary,
    href: `/streetiecare/protocols/${protocol.id}`,
    category: protocol.category,
    areas: [],
    tags: [...protocol.tags, protocol.urgency],
    body: [
      ...protocol.whenToUse,
      ...protocol.firstSteps,
      ...protocol.steps.flatMap((step) => [step.title, step.body]),
      ...protocol.dont,
      ...protocol.faqs.flatMap((faq) => [faq.question, faq.answer]),
    ].join(" "),
  })),
  ...streetieFaqs.map((faq) => ({
    id: faq.id,
    kind: "FAQs" as const,
    title: faq.question,
    summary: faq.answer,
    href: "/streetiecare/faq",
    category: faq.category,
    areas: [],
    tags: faq.tags,
    body: faq.answer,
  })),
  ...streetieContacts.map((contact) => ({
    id: contact.id,
    kind: "Contacts" as const,
    title: `${contact.role} — ${contact.name}`,
    summary: contact.canHelpWith.join(" "),
    href: "/streetiecare/contact",
    category: contact.role,
    areas: [contact.area],
    tags: contact.tags,
    body: [contact.phone, contact.whatsapp, contact.email, contact.bestTime, ...contact.canHelpWith].join(" "),
  })),
];

const groups: SearchKind[] = ["Resources", "Protocols", "FAQs", "Contacts"];

export default function SearchResultsClient() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";

  const results = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) {
      return [] as SearchRecord[];
    }

    return new Fuse(searchRecords, {
      keys: [
        { name: "title", weight: 0.32 },
        { name: "summary", weight: 0.2 },
        { name: "category", weight: 0.15 },
        { name: "areas", weight: 0.12 },
        { name: "tags", weight: 0.14 },
        { name: "body", weight: 0.07 },
      ],
      threshold: 0.35,
      ignoreLocation: true,
      includeScore: true,
    })
      .search(trimmed)
      .map((result) => result.item);
  }, [query]);

  return (
    <div className="space-y-8">
      <section className="section-shell">
        <div className="relative space-y-5">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold md:text-5xl">Search Streetie Care</h1>
            <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
              Search resources, protocols, FAQs, and contacts. The prototype understands common terms and misspellings.
            </p>
          </div>
          <SearchBar defaultValue={query} compact />
        </div>
      </section>

      {!query.trim() ? (
        <section className="glass p-5">
          <h2 className="text-xl font-semibold text-[var(--text)]">Try these searches</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {["rabies", "rabis", "ABC", "ambulance", "lost dog", "foster", "tick", "FIR", "Bimanagar", "snake"].map(
              (term) => (
                <Link
                  key={term}
                  href={`/streetiecare/search?q=${encodeURIComponent(term)}`}
                  className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--primary)]/40"
                >
                  {term}
                </Link>
              )
            )}
          </div>
        </section>
      ) : results.length > 0 ? (
        <div className="space-y-8">
          <p className="text-sm text-[var(--muted)]">
            Found <span className="font-semibold text-[var(--text)]">{results.length}</span> results for{" "}
            <span className="font-semibold text-[var(--text)]">{query}</span>.
          </p>
          {groups.map((group) => {
            const groupResults = results.filter((item) => item.kind === group);
            if (groupResults.length === 0) {
              return null;
            }

            return (
              <section key={group} className="space-y-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">{group}</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {groupResults.map((item) => (
                    <Link key={`${item.kind}-${item.id}`} href={item.href} className="surface-card block p-5">
                      <div className="flex flex-wrap gap-2">
                        <CategoryBadge>{item.category}</CategoryBadge>
                        {item.areas.slice(0, 2).map((area) => (
                          <Badge key={area}>{area}</Badge>
                        ))}
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-[var(--text)]">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.summary}</p>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        <EmptyState
          title="No search results"
          description="Try a simpler term such as vet, ambulance, rabies, rabis, foster, lost dog, ABC, cat, snake, or Indiranagar."
        />
      )}
    </div>
  );
}
