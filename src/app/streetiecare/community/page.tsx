import type { Metadata } from "next";
import PageHeader from "@/components/streetiecare/PageHeader";

export const metadata: Metadata = {
  title: "Community Care | Streetie Care Bangalore",
  description: "Prototype community care guidance for feeders, local groups, water bowls, rain protection, mothers and pups, and fundraising.",
};

const sections = [
  {
    title: "Building community in your neighborhood",
    items: [
      "Map regular street dogs, cats, feeders, carers, vets, pharmacies, and transport options.",
      "Create a small group with clear rules: emergency updates, no rumors, no graphic images without warning.",
      "Assign roles for emergency calls, transport, ABC, vaccination, lost and found, and fundraising.",
    ],
  },
  {
    title: "Feeders and local carers",
    items: [
      "Keep feeding points clean, predictable, and away from conflict-heavy entrances.",
      "Use local carers to identify sick animals early because they know normal behavior.",
      "Keep a simple record of sterilization, vaccination, and medical cases.",
    ],
  },
  {
    title: "Hyperlocal animal groups",
    items: [
      "Keep the group focused on one lane, apartment cluster, or neighborhood.",
      "Pin emergency contacts and the local resource sheet.",
      "Document decisions so the same questions do not repeat during urgent cases.",
    ],
  },
  {
    title: "Water bowls and rain protection",
    items: [
      "Start with a few bowls that someone can clean and refill daily.",
      "Place bowls where they do not block walking paths or get crushed by vehicles.",
      "Use simple rain covers only where they are safe, stable, and accepted locally.",
    ],
  },
  {
    title: "Caring for sick animals in situ",
    items: [
      "Some animals recover better in their familiar territory after vet review.",
      "Plan medicine logs, feeding support, photo updates, and escalation triggers.",
      "Do not leave severe wounds, collapse, or breathing trouble in situ without urgent vet advice.",
    ],
  },
  {
    title: "Caring for mothers and newborn pups",
    items: [
      "Reduce disturbance and keep people away from the nesting area.",
      "Feed the mother away from the pups so she does not feel threatened.",
      "Plan ABC for the mother later, after pups are old enough and a vet confirms timing.",
    ],
  },
  {
    title: "Fundraising good practices",
    items: [
      "Post a clear case summary, vet estimate, payment method, and target amount.",
      "Update bills, receipts, balance, and outcome regularly.",
      "Close the fundraiser when the need is met or explain the remaining balance plan.",
    ],
  },
  {
    title: "General fund for hyperlocality",
    items: [
      "Keep a small transparent fund for emergency transport, first vet visits, bowls, and basic supplies.",
      "Use two volunteer approvers for non-urgent spending.",
      "Publish a monthly summary in the local group.",
    ],
  },
];

export default function CommunityPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="Community care"
        description="Street animal care works best when a neighborhood has calm roles, clean records, and shared responsibility."
      />

      <section className="grid gap-5 md:grid-cols-2">
        {sections.map((section) => (
          <article key={section.title} className="surface-card p-5">
            <h2 className="text-2xl font-semibold text-[var(--text)]">{section.title}</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--muted)]">
              {section.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--secondary)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
}
