import Link from "next/link";
import type { Protocol } from "@/data/streetiecare";
import { Badge, CategoryBadge } from "./Badge";
import { urgencyClass } from "./utils";

interface ProtocolCardProps {
  protocol: Protocol;
}

export default function ProtocolCard({ protocol }: ProtocolCardProps) {
  return (
    <article className="surface-card flex h-full flex-col gap-5 p-5">
      <div className="flex flex-wrap gap-2">
        <Badge className={urgencyClass(protocol.urgency)}>{protocol.urgency}</Badge>
        <CategoryBadge>{protocol.category}</CategoryBadge>
        <Badge>{protocol.estimatedTime}</Badge>
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold leading-tight text-[var(--text)]">{protocol.title}</h3>
        <p className="text-sm leading-relaxed text-[var(--muted)]">{protocol.summary}</p>
      </div>
      <Link href={`/streetiecare/protocols/${protocol.id}`} className="secondary-button mt-auto justify-center px-4 py-2 text-sm">
        View steps
      </Link>
    </article>
  );
}
