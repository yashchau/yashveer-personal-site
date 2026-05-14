"use client";

import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import type { StreetieFaq } from "@/data/streetiecare";
import EmptyState from "./EmptyState";

interface FAQAccordionProps {
  faqs: StreetieFaq[];
  searchable?: boolean;
}

export default function FAQAccordion({ faqs, searchable = false }: FAQAccordionProps) {
  const [query, setQuery] = useState("");

  const filteredFaqs = useMemo(() => {
    const trimmed = query.trim();

    if (!trimmed) {
      return faqs;
    }

    return new Fuse(faqs, {
      keys: ["question", "answer", "category", "tags"],
      threshold: 0.34,
      ignoreLocation: true,
    })
      .search(trimmed)
      .map((result) => result.item);
  }, [faqs, query]);

  return (
    <div className="space-y-5">
      {searchable && (
        <div className="glass p-3">
          <label htmlFor="faq-search" className="sr-only">
            Search frequently asked questions
          </label>
          <input
            id="faq-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search rabies, ABC, foster, aggressive dog..."
            className="min-h-12 w-full rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-4 text-[var(--text)] outline-none transition focus:border-[var(--secondary)]"
          />
        </div>
      )}

      {filteredFaqs.length > 0 ? (
        <div className="space-y-3">
          {filteredFaqs.map((faq) => (
            <details
              key={faq.id}
              className="group rounded-2xl border border-[var(--line)] bg-[var(--surface)]/75 p-4"
            >
              <summary className="cursor-pointer list-none text-base font-semibold text-[var(--text)]">
                <span className="inline-flex w-full items-center justify-between gap-4">
                  {faq.question}
                  <span className="shrink-0 rounded-full border border-[var(--line)] px-2 py-1 text-xs text-[var(--muted)] group-open:bg-[var(--secondary)]/10">
                    Open
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{faq.answer}</p>
            </details>
          ))}
        </div>
      ) : (
        <EmptyState
          title="No FAQs found"
          description="Try a simpler word such as rabies, ABC, foster, tick, lost dog, or cruelty."
        />
      )}
    </div>
  );
}
