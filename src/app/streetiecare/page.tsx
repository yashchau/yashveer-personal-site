import Link from "next/link";
import AreaChips from "@/components/streetiecare/AreaChips";
import ContactCard from "@/components/streetiecare/ContactCard";
import DisclaimerBox from "@/components/streetiecare/DisclaimerBox";
import ProtocolCard from "@/components/streetiecare/ProtocolCard";
import QuickHelpCard from "@/components/streetiecare/QuickHelpCard";
import ResourceCard from "@/components/streetiecare/ResourceCard";
import SearchBar from "@/components/streetiecare/SearchBar";
import {
  quickHelpItems,
  streetieContacts,
  streetieProtocols,
  streetieResources,
} from "@/data/streetiecare";

const featuredEmergencyContacts = streetieContacts.filter((contact) =>
  ["emergency-vet-contact", "ambulance-contact", "lost-found-coordinator"].includes(contact.id)
);

const featuredEmergencyResources = streetieResources.filter((resource) => resource.isEmergency).slice(0, 3);

const popularProtocolIds = [
  "street-dog-injured",
  "dog-hit-by-vehicle",
  "suspected-rabies-protocol",
  "i-lost-my-dog",
  "abc-sterilization-process",
  "how-to-report-animal-cruelty",
];

const popularProtocols = popularProtocolIds
  .map((id) => streetieProtocols.find((protocol) => protocol.id === id))
  .filter((protocol): protocol is (typeof streetieProtocols)[number] => Boolean(protocol));

export default function StreetieCareHomePage() {
  return (
    <div className="space-y-12">
      <section className="section-shell">
        <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl font-semibold leading-tight md:text-6xl">Streetie Care Bangalore</h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
                Simple local help for street dogs, cats, and other animals in Indiranagar, Jeevan Bima Nagar, and
                nearby areas.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/streetiecare/emergency" className="primary-button justify-center px-6 py-4">
                Need urgent help?
              </Link>
              <Link href="/streetiecare/resources" className="secondary-button justify-center px-6 py-4">
                Browse resources
              </Link>
            </div>
          </div>

          <div className="rounded-[24px] border border-[var(--line)] bg-[var(--surface)]/80 p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-[var(--text)]">Start with search</h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
              Try plain words like ambulance, rabies, lost dog, foster, tick, skin, FIR, Domlur, or cat.
            </p>
            <SearchBar className="mt-4" compact />
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div>
          <h2 className="text-3xl font-semibold text-[var(--text)]">Quick help</h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
            Choose the closest situation. Each card keeps the next step simple.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {quickHelpItems.map((item) => (
            <QuickHelpCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="glass space-y-4 p-5">
        <div>
          <h2 className="text-2xl font-semibold text-[var(--text)]">Choose your area</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Start broad, then narrow down to Indiranagar, Jeevan Bima Nagar, HAL 2nd Stage, Domlur, or Old Airport
            Road.
          </p>
        </div>
        <AreaChips />
      </section>

      <section className="space-y-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-[var(--text)]">Featured emergency contacts</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">Sample contacts for triage, transport, and lost/found.</p>
          </div>
          <Link href="/streetiecare/contact" className="secondary-button justify-center px-4 py-2 text-sm">
            All contacts
          </Link>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {featuredEmergencyContacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-[var(--text)]">Emergency resources</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">Sample urgent-care listings. Verify before use.</p>
          </div>
          <Link
            href="/streetiecare/resources?emergency=true"
            className="secondary-button justify-center px-4 py-2 text-sm"
          >
            Emergency directory
          </Link>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {featuredEmergencyResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} compact />
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-[var(--text)]">Popular protocols</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">Step-by-step guides for common urgent situations.</p>
          </div>
          <Link href="/streetiecare/protocols" className="secondary-button justify-center px-4 py-2 text-sm">
            All protocols
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {popularProtocols.map((protocol) => (
            <ProtocolCard key={protocol.id} protocol={protocol} />
          ))}
        </div>
      </section>

      <DisclaimerBox>This prototype uses sample data. Please verify contacts before relying on them.</DisclaimerBox>
    </div>
  );
}
