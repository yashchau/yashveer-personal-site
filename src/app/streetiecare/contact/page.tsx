import type { Metadata } from "next";
import ContactCard from "@/components/streetiecare/ContactCard";
import PageHeader from "@/components/streetiecare/PageHeader";
import { streetieContacts } from "@/data/streetiecare";

export const metadata: Metadata = {
  title: "Contact | Streetie Care Bangalore",
  description: "Sample prototype contacts for emergency, lost and found, adoption, legal support, and local coordination.",
};

const routing = [
  ["Emergency medical issue", "Emergency vet / ambulance"],
  ["Lost/found dog", "Lost & Found Coordinator"],
  ["Adoption/foster", "Adoption/Foster Coordinator"],
  ["Cruelty/legal issue", "Legal Support"],
  ["General help", "Area Coordinator"],
];

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="Contact"
        description="Use these sample prototype contacts to route the situation quickly. In a real deployment, every number should be verified and dated."
      />

      <section className="rounded-[24px] border border-[var(--secondary)]/30 bg-[var(--secondary)]/10 p-5">
        <h2 className="text-2xl font-semibold text-[var(--text)]">Not sure who to contact?</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {routing.map(([need, contact]) => (
            <div key={need} className="rounded-2xl border border-[var(--line)] bg-[var(--surface)]/80 p-4">
              <div className="text-sm font-semibold text-[var(--text)]">{need}</div>
              <div className="mt-1 text-sm text-[var(--muted)]">{contact}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        {streetieContacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </section>
    </div>
  );
}
