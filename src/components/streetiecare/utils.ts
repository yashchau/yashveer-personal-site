import type { UrgencyLevel } from "@/data/streetiecare";

export function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function whatsappHref(phone?: string) {
  if (!phone) {
    return undefined;
  }

  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}`;
}

export function urgencyClass(urgency: UrgencyLevel) {
  switch (urgency) {
    case "Emergency":
      return "border-[var(--danger)]/30 bg-[var(--danger)]/10 text-[var(--danger)]";
    case "High":
      return "border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)]";
    case "Medium":
      return "border-[var(--warning)]/35 bg-[var(--warning)]/10 text-[var(--warning)]";
    case "Routine":
      return "border-[var(--secondary)]/30 bg-[var(--secondary)]/10 text-[var(--secondary)]";
    default:
      return "border-[var(--line)] bg-[var(--surface)] text-[var(--muted)]";
  }
}

export function resourceToneClass(isEmergency: boolean) {
  return isEmergency
    ? "border-[var(--danger)]/30 bg-[var(--danger)]/10 text-[var(--danger)]"
    : "border-[var(--secondary)]/30 bg-[var(--secondary)]/10 text-[var(--secondary)]";
}
