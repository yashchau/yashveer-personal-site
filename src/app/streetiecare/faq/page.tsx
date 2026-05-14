import type { Metadata } from "next";
import FAQAccordion from "@/components/streetiecare/FAQAccordion";
import PageHeader from "@/components/streetiecare/PageHeader";
import { streetieFaqs } from "@/data/streetiecare";

export const metadata: Metadata = {
  title: "FAQ | Streetie Care Bangalore",
  description: "Searchable prototype FAQ for street dog, cat, community care, emergency, ABC, adoption, and legal questions.",
};

export default function FAQPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="Frequently asked questions"
        description="Search common questions about injured animals, ABC, rabies, abandoned puppies, fosters, vaccination, cruelty reporting, and community care."
      />
      <FAQAccordion faqs={streetieFaqs} searchable />
    </div>
  );
}
