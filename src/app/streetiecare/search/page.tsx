import type { Metadata } from "next";
import { Suspense } from "react";
import EmptyState from "@/components/streetiecare/EmptyState";
import SearchResultsClient from "@/components/streetiecare/SearchResultsClient";

export const metadata: Metadata = {
  title: "Search | Streetie Care Bangalore",
  description: "Search across Streetie Care Bangalore sample resources, protocols, FAQs, and contacts.",
};

export default function StreetieSearchPage() {
  return (
    <Suspense
      fallback={
        <EmptyState
          title="Loading search"
          description="Preparing the sample resource, protocol, FAQ, and contact index."
        />
      }
    >
      <SearchResultsClient />
    </Suspense>
  );
}
