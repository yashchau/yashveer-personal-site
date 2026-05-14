"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  defaultValue?: string;
  placeholder?: string;
  className?: string;
  compact?: boolean;
}

export default function SearchBar({
  defaultValue = "",
  placeholder = "Search rabies, ambulance, lost dog, foster, Indiranagar...",
  className,
  compact = false,
}: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState(defaultValue);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = query.trim();
    router.push(trimmed ? `/streetiecare/search?q=${encodeURIComponent(trimmed)}` : "/streetiecare/search");
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className={cn(
        "glass flex w-full flex-col gap-3 p-3 sm:flex-row sm:items-center",
        compact ? "rounded-2xl" : "rounded-[24px]",
        className
      )}
    >
      <label htmlFor="streetie-search" className="sr-only">
        Search Streetie Care Bangalore
      </label>
      <input
        id="streetie-search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
        className={cn(
          "min-h-12 flex-1 rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-4 text-[var(--text)] shadow-inner outline-none transition focus:border-[var(--secondary)]",
          compact ? "text-base" : "text-base sm:text-lg"
        )}
      />
      <button type="submit" className="primary-button min-h-12 justify-center px-6 py-3">
        Search
      </button>
    </form>
  );
}
