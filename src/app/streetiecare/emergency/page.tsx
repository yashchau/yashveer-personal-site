import Link from "next/link";
import type { Metadata } from "next";
import { Badge } from "@/components/streetiecare/Badge";
import ContactCard from "@/components/streetiecare/ContactCard";
import PageHeader from "@/components/streetiecare/PageHeader";
import { urgencyClass } from "@/components/streetiecare/utils";
import { streetieContacts, streetieProtocols, type UrgencyLevel } from "@/data/streetiecare";

export const metadata: Metadata = {
  title: "Emergency Guide | Streetie Care Bangalore",
  description: "Calm first-response guidance and sample emergency contacts for street animal care in Bangalore.",
};

const emergencyContactIds = ["emergency-vet-contact", "ambulance-contact", "area-coordinator-jbn"];
const emergencyContacts = emergencyContactIds
  .map((id) => streetieContacts.find((contact) => contact.id === id))
  .filter((contact): contact is (typeof streetieContacts)[number] => Boolean(contact));

const guideCards: Array<{
  title: string;
  urgency: UrgencyLevel;
  first: string;
  protocolId: string;
  contactIds: string[];
}> = [
  {
    title: "Animal hit by vehicle",
    urgency: "Emergency",
    first: "Call an emergency vet or ambulance, keep traffic away, and do not drag the animal by the limbs.",
    protocolId: "dog-hit-by-vehicle",
    contactIds: ["emergency-vet-contact", "ambulance-contact"],
  },
  {
    title: "Animal bleeding",
    urgency: "Emergency",
    first: "Keep the animal still, call urgent care, and use clean cloth pressure only if it is safe to approach.",
    protocolId: "street-dog-injured",
    contactIds: ["emergency-vet-contact", "ambulance-contact"],
  },
  {
    title: "Dog has bite wound",
    urgency: "High",
    first: "Take photos, prevent crowding, and get a vet to check for hidden puncture wounds or infection.",
    protocolId: "dog-bite-wound-protocol",
    contactIds: ["emergency-vet-contact"],
  },
  {
    title: "Dog looks sick or weak",
    urgency: "High",
    first: "Observe breathing, appetite, mobility, and gums. Call a vet the same day if the dog is dull or not eating.",
    protocolId: "dog-looks-sick-weak",
    contactIds: ["emergency-vet-contact", "area-coordinator-jbn"],
  },
  {
    title: "Suspected rabies",
    urgency: "Emergency",
    first: "Do not touch or restrain. Move people away and call qualified help immediately.",
    protocolId: "suspected-rabies-protocol",
    contactIds: ["emergency-vet-contact", "legal-cruelty-support"],
  },
  {
    title: "Puppies abandoned",
    urgency: "High",
    first: "Watch for the mother first. If pups are cold, wet, or unsafe, keep them warm and call foster or vet help.",
    protocolId: "puppies-abandoned",
    contactIds: ["adoption-foster-coordinator", "area-coordinator-jbn"],
  },
  {
    title: "Mother dog gave birth nearby",
    urgency: "Medium",
    first: "Do not crowd or move pups casually. Support the mother with food, water, quiet, and local watch.",
    protocolId: "mother-dog-newborn-pups",
    contactIds: ["area-coordinator-indiranagar", "area-coordinator-jbn"],
  },
  {
    title: "Dog is aggressive or scared",
    urgency: "Medium",
    first: "Increase distance, remove crowds, avoid eye contact and shouting, and call a known feeder if needed.",
    protocolId: "dog-aggressive-scared",
    contactIds: ["area-coordinator-indiranagar", "general-volunteer-contact"],
  },
  {
    title: "I found a lost pet",
    urgency: "Medium",
    first: "Keep the animal nearby if safe, check collar or tag, take photos, and share exact found location.",
    protocolId: "i-found-a-dog",
    contactIds: ["lost-found-coordinator"],
  },
  {
    title: "I need animal transport",
    urgency: "High",
    first: "Decide emergency ambulance versus pet cab, call the destination first, and confirm safe containment.",
    protocolId: "animal-transport-guidance",
    contactIds: ["ambulance-contact", "general-volunteer-contact"],
  },
];

function contactLabel(id: string) {
  const contact = streetieContacts.find((item) => item.id === id);
  return contact ? `${contact.role}: ${contact.phone}` : "Sample contact";
}

export default function EmergencyPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="Emergency help"
        description="Use this page when you are stressed and need a calm first step. Pick the closest situation, call urgent help when needed, and share clear location details."
      />

      <div className="grid gap-8 xl:grid-cols-[1fr_360px]">
        <section className="grid gap-5 md:grid-cols-2">
          {guideCards.map((card) => {
            const protocol = streetieProtocols.find((item) => item.id === card.protocolId);

            return (
              <article key={card.title} className="surface-card p-5">
                <div className="flex flex-wrap gap-2">
                  <Badge className={urgencyClass(card.urgency)}>{card.urgency}</Badge>
                  {protocol && <Badge>{protocol.category}</Badge>}
                </div>
                <h2 className="mt-4 text-xl font-semibold text-[var(--text)]">{card.title}</h2>
                <div className="mt-4 rounded-2xl border border-[var(--line)] bg-[var(--surface)]/70 p-4">
                  <h3 className="text-sm font-semibold text-[var(--text)]">What to do first</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{card.first}</p>
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-sm font-semibold text-[var(--text)]">Related emergency contacts</h3>
                  <ul className="space-y-1 text-sm text-[var(--muted)]">
                    {card.contactIds.map((id) => (
                      <li key={id}>{contactLabel(id)}</li>
                    ))}
                  </ul>
                </div>
                {protocol && (
                  <Link
                    href={`/streetiecare/protocols/${protocol.id}`}
                    className="secondary-button mt-5 w-full justify-center px-4 py-2 text-sm"
                  >
                    Open protocol
                  </Link>
                )}
              </article>
            );
          })}
        </section>

        <aside className="xl:sticky xl:top-28 xl:self-start">
          <div className="space-y-4 rounded-[24px] border border-[var(--danger)]/30 bg-[var(--danger)]/10 p-4">
            <div>
              <h2 className="text-2xl font-semibold text-[var(--text)]">Emergency contacts</h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                Sample numbers for prototype use. Verify before relying on them.
              </p>
            </div>
            <div className="space-y-4">
              {emergencyContacts.map((contact) => (
                <ContactCard key={contact.id} contact={contact} />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
