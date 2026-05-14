import Link from "next/link";
import type { Resource } from "@/data/streetiecare";
import { Badge, CategoryBadge } from "./Badge";
import ContactActions from "./ContactActions";
import { resourceToneClass } from "./utils";

interface ResourceCardProps {
  resource: Resource;
  compact?: boolean;
}

export default function ResourceCard({ resource, compact = false }: ResourceCardProps) {
  return (
    <article className="surface-card flex h-full flex-col gap-5 p-5">
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <CategoryBadge>{resource.category}</CategoryBadge>
          <Badge className={resourceToneClass(resource.isEmergency)}>
            {resource.isEmergency ? "Emergency" : "Non-emergency"}
          </Badge>
        </div>
        <div>
          <h3 className="text-xl font-semibold leading-tight text-[var(--text)]">{resource.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{resource.description}</p>
        </div>
      </div>

      <dl className="grid gap-3 text-sm text-[var(--muted)]">
        <div>
          <dt className="font-semibold text-[var(--text)]">Area served</dt>
          <dd>{resource.areas.join(", ")}</dd>
        </div>
        <div>
          <dt className="font-semibold text-[var(--text)]">Timings</dt>
          <dd>{resource.timings}</dd>
        </div>
        {!compact && (
          <div>
            <dt className="font-semibold text-[var(--text)]">Address</dt>
            <dd>{resource.address}</dd>
          </div>
        )}
      </dl>

      <div className="flex flex-wrap gap-2">
        {resource.animalTypes.map((animal) => (
          <Badge key={animal}>{animal}</Badge>
        ))}
        {resource.tags.slice(0, compact ? 3 : 5).map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <div className="mt-auto space-y-3">
        <Link href={`/streetiecare/resources/${resource.id}`} className="secondary-button w-full justify-center px-4 py-2 text-sm">
          View details
        </Link>
        <ContactActions phone={resource.phone} whatsapp={resource.whatsapp} address={resource.address} />
      </div>
    </article>
  );
}
