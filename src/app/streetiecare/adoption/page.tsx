import type { Metadata } from "next";
import PageHeader from "@/components/streetiecare/PageHeader";

export const metadata: Metadata = {
  title: "Adoption & Foster | Streetie Care Bangalore",
  description: "Prototype adoption and foster guidance with screening checklist, sample form fields, and follow-up steps.",
};

const adopterChecklist = [
  "All adults in the home agree to adopt.",
  "Landlord, apartment, and travel plans are compatible with a pet.",
  "Budget includes food, vet care, vaccination, sterilization, boarding, and emergencies.",
  "Balcony, gate, and leash safety are handled before handover.",
  "The adopter understands adjustment time and will not return the animal casually.",
];

const formFields = [
  "Full name, phone, email, address, and ID proof confirmation.",
  "Current pets, prior pet experience, and vet reference if any.",
  "Daily routine, work hours, travel frequency, and backup caregiver.",
  "Home type, rental status, family approval, and balcony or gate safety.",
  "Preferred animal age, sex, size, energy level, and medical openness.",
  "Agreement for sterilization, vaccination, ID tag, and post-adoption follow-up.",
];

function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="surface-card p-5">
      <h2 className="text-2xl font-semibold text-[var(--text)]">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--muted)]">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--primary)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function AdoptionPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="Adoption and foster"
        description="A simple prototype guide for people who want to adopt, foster, or responsibly place an animal for adoption."
      />

      <section className="grid gap-6 lg:grid-cols-2">
        <InfoCard
          title="I want to adopt"
          items={[
            "Meet the animal and ask about health, temperament, vaccination, deworming, and sterilization.",
            "Prepare bowls, bed, leash, collar with ID tag, safe sleeping space, and vet appointment.",
            "Plan a quiet first week with limited guests, stable routines, and careful leash handling.",
            "Use the adoption coordinator if you are unsure which animal fits your home.",
          ]}
        />
        <InfoCard
          title="I have an animal for adoption"
          items={[
            "Create a short, honest profile with photos, age estimate, sex, health, and temperament.",
            "Use a form before sharing exact foster or rescuer location.",
            "Screen for family approval, rental rules, budget, time, and prior experience.",
            "Plan day 1, week 1, month 1, and medical milestone follow-ups.",
          ]}
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <InfoCard title="Adoption screening checklist" items={adopterChecklist} />
        <InfoCard title="Sample adoption form fields" items={formFields} />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <InfoCard
          title="Good adoption practices"
          items={[
            "Be transparent about health, behavior, and costs.",
            "Avoid pressure language. Good matches take time.",
            "Do a home check or video walkthrough for safety basics.",
            "Use an adoption agreement that covers return protocol and medical commitments.",
          ]}
        />
        <InfoCard
          title="Post-adoption follow-up checklist"
          items={[
            "Day 1: confirm food, water, toilet, sleep, and safety.",
            "Week 1: check adjustment, appetite, leash safety, and vet appointment.",
            "Month 1: confirm vaccination, deworming, and behavior concerns.",
            "Milestones: sterilization, ID tag, updated photos, and emergency contact saved.",
          ]}
        />
      </section>
    </div>
  );
}
