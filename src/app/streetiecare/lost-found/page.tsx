import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/streetiecare/Badge";
import PageHeader from "@/components/streetiecare/PageHeader";
import ResourceCard from "@/components/streetiecare/ResourceCard";
import { streetieResources } from "@/data/streetiecare";

export const metadata: Metadata = {
  title: "Lost & Found | Streetie Care Bangalore",
  description: "Prototype lost and found flows for dogs and cats around Indiranagar, Jeevan Bima Nagar, Domlur, and nearby areas.",
};

const nearbyVetIds = ["eastside-24x7-animal-hospital", "domlur-urgent-vet-clinic", "dr-sample-allopathy-vet"];
const nearbyVets = nearbyVetIds
  .map((id) => streetieResources.find((resource) => resource.id === id))
  .filter((resource): resource is (typeof streetieResources)[number] => Boolean(resource));

function Checklist({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="surface-card p-5">
      <h2 className="text-2xl font-semibold text-[var(--text)]">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--muted)]">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--secondary)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function LostFoundPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="Lost and found animals"
        description="Two calm flows for stressful moments: what to do if your dog is missing, and what to do if you found a dog who may belong to someone."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/streetiecare/protocols/i-lost-my-dog" className="primary-button justify-center px-5 py-3 text-sm">
            I lost my dog
          </Link>
          <Link href="/streetiecare/protocols/i-found-a-dog" className="secondary-button justify-center px-5 py-3 text-sm">
            I found a dog
          </Link>
        </div>
      </PageHeader>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-[24px] border border-[var(--warning)]/30 bg-[var(--warning)]/10 p-6">
            <Badge className="border-[var(--warning)]/35 bg-[var(--warning)]/15 text-[var(--warning)]">
              I lost my dog
            </Badge>
            <h2 className="mt-4 text-3xl font-semibold text-[var(--text)]">Search fast, search close</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              Do not panic, but do not delay. The first two hours are important. Many dogs hide close to the last
              confirmed location.
            </p>
          </div>
          <Checklist
            title="Checklist"
            items={[
              "Search the last confirmed location and slow circles around it.",
              "Ask security guards, shopkeepers, feeders, walkers, delivery staff, and auto stands.",
              "Keep one phone number reachable and charged.",
              "Post morning and evening with last-sighting updates.",
              "Verify caller photos before traveling or paying any reward.",
            ]}
          />
          <Checklist
            title="Poster information needed"
            items={[
              "Clear recent photo, name, sex, size, color, collar details, and unique marks.",
              "Last seen date, time, exact area, and nearby landmark.",
              "One phone number and WhatsApp number.",
              "Medical needs, temperament, and reward information if applicable.",
            ]}
          />
          <Checklist
            title="Search tips"
            items={[
              "Carry familiar food, leash, towel, and a calm helper.",
              "Do not chase if the dog is scared. Sit low, use a familiar voice, and wait.",
              "Check basements, parking lots, parks, food stalls, and usual walk routes.",
            ]}
          />
        </div>

        <div className="space-y-6">
          <div className="rounded-[24px] border border-[var(--secondary)]/30 bg-[var(--secondary)]/10 p-6">
            <Badge className="border-[var(--secondary)]/35 bg-[var(--secondary)]/15 text-[var(--secondary)]">
              I found a dog
            </Badge>
            <h2 className="mt-4 text-3xl font-semibold text-[var(--text)]">Keep the location useful</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              Avoid accidental relocation. Owners usually search near the lost point, so exact location matters.
            </p>
          </div>
          <Checklist
            title="Safety steps"
            items={[
              "Do not approach if the dog is scared, guarding, or in traffic.",
              "Offer water and shade only if safe.",
              "Use a leash or carrier only if the dog is friendly and calm.",
              "Avoid handing over to anyone who cannot prove ownership.",
            ]}
          />
          <Checklist
            title="Collar, tag, and microchip"
            items={[
              "Check collar or tag from a safe distance.",
              "Take clear photos of the dog, collar, and location.",
              "Ask a nearby vet for a microchip scan if transport is safe.",
              "Screen claimants with old photos, vet records, or unique marks.",
            ]}
          />
          <Checklist
            title="Groups and sites to inform"
            items={[
              "Local apartment and neighborhood groups.",
              "Bangalore lost and found pet groups.",
              "Nearby vets, pet stores, walkers, and feeders.",
              "Area coordinator or lost and found coordinator.",
            ]}
          />
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-3xl font-semibold text-[var(--text)]">Nearby vets to contact</h2>
        <div className="grid gap-5 lg:grid-cols-3">
          {nearbyVets.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} compact />
          ))}
        </div>
      </section>
    </div>
  );
}
