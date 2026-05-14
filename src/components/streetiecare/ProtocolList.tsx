"use client";

import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import { protocolCategories, streetieProtocols } from "@/data/streetiecare";
import EmptyState from "./EmptyState";
import ProtocolCard from "./ProtocolCard";

export default function ProtocolList() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const filteredProtocols = useMemo(() => {
    const base = category
      ? streetieProtocols.filter((protocol) => protocol.category === category)
      : streetieProtocols;

    const trimmed = query.trim();
    if (!trimmed) {
      return base;
    }

    return new Fuse(base, {
      keys: ["title", "summary", "category", "urgency", "tags", "firstSteps", "steps.title", "steps.body"],
      threshold: 0.34,
      ignoreLocation: true,
    })
      .search(trimmed)
      .map((result) => result.item);
  }, [category, query]);

  return (
    <div className="space-y-6">
      <section className="glass grid gap-4 p-4 md:grid-cols-[1fr_280px_auto] md:items-end" aria-label="Protocol filters">
        <div className="space-y-2">
          <label htmlFor="protocol-search" className="text-sm font-semibold text-[var(--text)]">
            Search protocols
          </label>
          <input
            id="protocol-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try hit by vehicle, ABC, FIR, tick, snake..."
            className="min-h-11 w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--secondary)]"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="protocol-category" className="text-sm font-semibold text-[var(--text)]">
            Category
          </label>
          <select
            id="protocol-category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="min-h-11 w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--secondary)]"
          >
            <option value="">All categories</option>
            {protocolCategories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <button type="button" onClick={() => { setQuery(""); setCategory(""); }} className="secondary-button justify-center px-4 py-2 text-sm">
          Clear
        </button>
      </section>

      {filteredProtocols.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProtocols.map((protocol) => (
            <ProtocolCard key={protocol.id} protocol={protocol} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No protocols found"
          description="Try another word such as rabies, ABC, foster, FIR, tick, skin, lost dog, or wildlife."
        />
      )}
    </div>
  );
}
