import type { Metadata } from "next";
import PageHeader from "@/components/streetiecare/PageHeader";
import ResourceDirectory from "@/components/streetiecare/ResourceDirectory";

export const metadata: Metadata = {
  title: "Resource Directory | Streetie Care Bangalore",
  description: "Searchable sample directory of vets, ambulance services, fosters, shelters, transport, legal help, and animal welfare resources.",
};

interface ResourcesPageProps {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

function firstValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

export default async function ResourcesPage({ searchParams }: ResourcesPageProps) {
  const params = (await searchParams) ?? {};

  return (
    <div className="space-y-10">
      <PageHeader
        title="Resource directory"
        description="Find sample emergency hospitals, clinics, pharmacies, fosters, shelters, transport, legal help, animal welfare bodies, and wildlife rescue contacts."
      />
      <ResourceDirectory
        initialQuery={firstValue(params.q)}
        initialCategory={firstValue(params.category)}
        initialArea={firstValue(params.area)}
        initialEmergencyOnly={firstValue(params.emergency) === "true"}
      />
    </div>
  );
}
