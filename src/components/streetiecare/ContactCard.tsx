import type { StreetieContact } from "@/data/streetiecare";
import { Badge, CategoryBadge } from "./Badge";
import ContactActions from "./ContactActions";

interface ContactCardProps {
  contact: StreetieContact;
}

export default function ContactCard({ contact }: ContactCardProps) {
  return (
    <article className="surface-card flex h-full flex-col gap-5 p-5">
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <CategoryBadge>{contact.role}</CategoryBadge>
          <Badge>{contact.area}</Badge>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[var(--text)]">{contact.name}</h3>
          <p className="mt-1 text-sm text-[var(--muted)]">{contact.email}</p>
        </div>
      </div>

      <dl className="space-y-3 text-sm text-[var(--muted)]">
        <div>
          <dt className="font-semibold text-[var(--text)]">Best time to contact</dt>
          <dd>{contact.bestTime}</dd>
        </div>
        <div>
          <dt className="font-semibold text-[var(--text)]">Can help with</dt>
          <dd>
            <ul className="mt-2 space-y-1">
              {contact.canHelpWith.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--secondary)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>

      <div className="mt-auto">
        <ContactActions phone={contact.phone} whatsapp={contact.whatsapp} />
      </div>
    </article>
  );
}
