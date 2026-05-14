import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge, CategoryBadge } from "@/components/streetiecare/Badge";
import DisclaimerBox from "@/components/streetiecare/DisclaimerBox";
import ProtocolSteps from "@/components/streetiecare/ProtocolSteps";
import ResourceCard from "@/components/streetiecare/ResourceCard";
import { urgencyClass } from "@/components/streetiecare/utils";
import { streetieProtocols, streetieResources } from "@/data/streetiecare";

interface ProtocolDetailPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return streetieProtocols.map((protocol) => ({ id: protocol.id }));
}

export async function generateMetadata({ params }: ProtocolDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const protocol = streetieProtocols.find((item) => item.id === id);

  if (!protocol) {
    return {};
  }

  return {
    title: `${protocol.title} | Streetie Care Bangalore`,
    description: protocol.summary,
  };
}

export default async function ProtocolDetailPage({ params }: ProtocolDetailPageProps) {
  const { id } = await params;
  const protocol = streetieProtocols.find((item) => item.id === id) ?? notFound();
  const relatedResources = protocol.relatedResourceIds
    .map((resourceId) => streetieResources.find((resource) => resource.id === resourceId))
    .filter((resource): resource is (typeof streetieResources)[number] => Boolean(resource));

  return (
    <article className="space-y-10">
      <Link href="/streetiecare/protocols" className="secondary-button px-4 py-2 text-sm">
        Back to protocols
      </Link>

      <section className="section-shell">
        <div className="relative space-y-5">
          <div className="flex flex-wrap gap-2">
            <Badge className={urgencyClass(protocol.urgency)}>{protocol.urgency}</Badge>
            <CategoryBadge>{protocol.category}</CategoryBadge>
            <Badge>{protocol.estimatedTime}</Badge>
          </div>
          <div className="max-w-4xl">
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">{protocol.title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">{protocol.summary}</p>
          </div>
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <main className="space-y-8">
          <section className="glass p-6">
            <h2 className="text-2xl font-semibold text-[var(--text)]">When to use this guide</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--muted)]">
              {protocol.whenToUse.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--primary)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[24px] border border-[var(--danger)]/25 bg-[var(--danger)]/10 p-6">
            <h2 className="text-2xl font-semibold text-[var(--text)]">What to do first</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--muted)]">
              {protocol.firstSteps.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--danger)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[var(--text)]">Step-by-step instructions</h2>
            <ProtocolSteps protocol={protocol} />
          </section>

          <section className="glass p-6">
            <h2 className="text-2xl font-semibold text-[var(--text)]">What not to do</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--muted)]">
              {protocol.dont.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="glass p-6">
            <h2 className="text-2xl font-semibold text-[var(--text)]">FAQ</h2>
            <div className="mt-4 space-y-3">
              {protocol.faqs.map((faq) => (
                <details key={faq.question} className="rounded-2xl border border-[var(--line)] bg-[var(--surface)]/70 p-4">
                  <summary className="cursor-pointer text-sm font-semibold text-[var(--text)]">{faq.question}</summary>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </main>

        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <DisclaimerBox>
            This is general guidance and is not a substitute for advice from a qualified veterinarian or legal
            professional.
          </DisclaimerBox>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--text)]">Related contacts/resources</h2>
            {relatedResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} compact />
            ))}
          </section>
        </aside>
      </div>
    </article>
  );
}
