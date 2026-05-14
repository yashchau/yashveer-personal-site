import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge, CategoryBadge } from "@/components/streetiecare/Badge";
import ContactActions from "@/components/streetiecare/ContactActions";
import DisclaimerBox from "@/components/streetiecare/DisclaimerBox";
import ProtocolCard from "@/components/streetiecare/ProtocolCard";
import ResourceCard from "@/components/streetiecare/ResourceCard";
import { resourceToneClass } from "@/components/streetiecare/utils";
import { streetieProtocols, streetieResources } from "@/data/streetiecare";

interface ResourceDetailPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return streetieResources.map((resource) => ({ id: resource.id }));
}

export async function generateMetadata({ params }: ResourceDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const resource = streetieResources.find((item) => item.id === id);

  if (!resource) {
    return {};
  }

  return {
    title: `${resource.name} | Streetie Care Bangalore`,
    description: resource.description,
  };
}

export default async function ResourceDetailPage({ params }: ResourceDetailPageProps) {
  const { id } = await params;
  const resource = streetieResources.find((item) => item.id === id) ?? notFound();
  const relatedProtocols = resource.relatedProtocolIds
    .map((protocolId) => streetieProtocols.find((protocol) => protocol.id === protocolId))
    .filter((protocol): protocol is (typeof streetieProtocols)[number] => Boolean(protocol));
  const similarResources = streetieResources
    .filter(
      (item) =>
        item.id !== resource.id &&
        (item.category === resource.category || item.areas.some((area) => resource.areas.includes(area)))
    )
    .slice(0, 3);

  return (
    <article className="space-y-10">
      <Link href="/streetiecare/resources" className="secondary-button px-4 py-2 text-sm">
        Back to resources
      </Link>

      <section className="section-shell">
        <div className="relative grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-5">
            <div className="flex flex-wrap gap-2">
              <CategoryBadge>{resource.category}</CategoryBadge>
              <Badge className={resourceToneClass(resource.isEmergency)}>
                {resource.isEmergency ? "Emergency resource" : "Non-emergency resource"}
              </Badge>
            </div>
            <div>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">{resource.name}</h1>
              <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">{resource.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {resource.areas.map((area) => (
                <Badge key={area}>{area}</Badge>
              ))}
              {resource.animalTypes.map((animal) => (
                <Badge key={animal}>{animal}</Badge>
              ))}
            </div>
          </div>

          <aside className="rounded-[24px] border border-[var(--line)] bg-[var(--surface)]/80 p-5">
            <h2 className="text-xl font-semibold text-[var(--text)]">Contact</h2>
            <dl className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              <div>
                <dt className="font-semibold text-[var(--text)]">Phone</dt>
                <dd>{resource.phone}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--text)]">WhatsApp</dt>
                <dd>{resource.whatsapp ?? "Not listed"}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--text)]">Timings</dt>
                <dd>{resource.timings}</dd>
              </div>
            </dl>
            <div className="mt-5">
              <ContactActions phone={resource.phone} whatsapp={resource.whatsapp} address={resource.address} />
            </div>
          </aside>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          <div className="glass p-6">
            <h2 className="text-2xl font-semibold text-[var(--text)]">Details</h2>
            <dl className="mt-5 grid gap-4 text-sm text-[var(--muted)] md:grid-cols-2">
              <div>
                <dt className="font-semibold text-[var(--text)]">Address</dt>
                <dd>{resource.address}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--text)]">Areas served</dt>
                <dd>{resource.areas.join(", ")}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--text)]">Last updated</dt>
                <dd>{resource.lastUpdated}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--text)]">Verification status</dt>
                <dd>{resource.verificationStatus}</dd>
              </div>
            </dl>
            <div className="mt-5 flex flex-wrap gap-2">
              {resource.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-[var(--text)]">Related protocols</h2>
            <div className="grid gap-5 md:grid-cols-2">
              {relatedProtocols.map((protocol) => (
                <ProtocolCard key={protocol.id} protocol={protocol} />
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-5">
          <DisclaimerBox />
          <div className="glass p-5">
            <h2 className="text-xl font-semibold text-[var(--text)]">Similar resources</h2>
            <div className="mt-4 space-y-4">
              {similarResources.map((item) => (
                <ResourceCard key={item.id} resource={item} compact />
              ))}
            </div>
          </div>
        </aside>
      </section>
    </article>
  );
}
