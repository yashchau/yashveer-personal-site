import Link from "next/link";

export default function EmergencyBanner() {
  return (
    <section className="rounded-[24px] border border-[var(--danger)]/30 bg-[var(--danger)]/10 p-5 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl">
          <h2 className="text-xl font-semibold text-[var(--text)]">Need urgent help?</h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
            If an animal is badly injured, bleeding, unable to move, hit by a vehicle, or showing signs of rabies,
            treat it as urgent. Call an emergency vet or ambulance first.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row md:shrink-0">
          <Link href="/streetiecare/emergency" className="primary-button justify-center px-5 py-3 text-sm">
            Emergency guide
          </Link>
          <Link href="/streetiecare/contact" className="secondary-button justify-center px-5 py-3 text-sm">
            Contacts
          </Link>
        </div>
      </div>
    </section>
  );
}
