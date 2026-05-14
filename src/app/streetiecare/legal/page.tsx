import type { Metadata } from "next";
import DisclaimerBox from "@/components/streetiecare/DisclaimerBox";
import PageHeader from "@/components/streetiecare/PageHeader";
import ResourceCard from "@/components/streetiecare/ResourceCard";
import { streetieResources } from "@/data/streetiecare";

export const metadata: Metadata = {
  title: "Legal & Cruelty Support | Streetie Care Bangalore",
  description: "Prototype legal and cruelty reporting information for street animal welfare in Bangalore.",
};

const legalResourceIds = ["animal-rights-legal-desk", "sample-animal-welfare-board-contact"];
const legalResources = legalResourceIds
  .map((id) => streetieResources.find((resource) => resource.id === id))
  .filter((resource): resource is (typeof streetieResources)[number] => Boolean(resource));

const sections = [
  {
    title: "Basic animal welfare laws",
    body: "Prototype information: Indian animal welfare protections generally prohibit cruelty, unnecessary suffering, and certain forms of abandonment or violence. Exact sections, procedure, and local enforcement should be verified with a legal professional or animal welfare body.",
  },
  {
    title: "Cruelty reporting",
    body: "Record facts calmly: date, time, location, photos or short videos if safe, witnesses, and what action is needed. Avoid threats, public doxxing, or edited evidence.",
  },
  {
    title: "How to file an FIR",
    body: "Prepare a written complaint with incident details, evidence copies, witness names, and requested action. Ask for acknowledgement, diary number, or FIR copy as applicable.",
  },
  {
    title: "Animal welfare officers",
    body: "Use sample welfare contacts in this prototype as placeholders. In a real deployment, this section should list verified local officers, departments, and escalation routes.",
  },
  {
    title: "Lawyers",
    body: "Legal support may help with complaint language, police station preparation, feeder harassment, poisoning threats, and severe cruelty documentation.",
  },
  {
    title: "Guidelines for treatment of animals",
    body: "Keep guidance practical: no relocation by default, no cruelty, no unsafe feeding conflict, humane ABC planning, and qualified veterinary treatment for medical cases.",
  },
];

export default function LegalPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="Legal and cruelty support"
        description="Use this prototype page to understand what to document, who to contact, and how to stay calm during cruelty or legal situations."
      />

      <DisclaimerBox>
        Prototype information, verify before use. This is general information and is not a substitute for advice from a
        qualified legal professional or animal welfare authority.
      </DisclaimerBox>

      <section className="grid gap-5 md:grid-cols-2">
        {sections.map((section) => (
          <article key={section.title} className="surface-card p-5">
            <h2 className="text-2xl font-semibold text-[var(--text)]">{section.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{section.body}</p>
          </article>
        ))}
      </section>

      <section className="space-y-5">
        <h2 className="text-3xl font-semibold text-[var(--text)]">Animal welfare bodies and legal contacts</h2>
        <div className="grid gap-5 lg:grid-cols-2">
          {legalResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </section>
    </div>
  );
}
