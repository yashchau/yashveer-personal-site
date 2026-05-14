import Link from "next/link";
import EmergencyBanner from "./EmergencyBanner";
import StreetieNav from "./StreetieNav";

interface StreetieLayoutProps {
  children: React.ReactNode;
}

export default function StreetieLayout({ children }: StreetieLayoutProps) {
  return (
    <div className="space-y-8 pb-16 md:pb-6">
      <header className="space-y-5">
        <div className="flex flex-col gap-4 rounded-[28px] border border-[var(--line)] bg-[var(--surface-elevated)] p-5 shadow-sm backdrop-blur md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--primary)]">Prototype preview</p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
              Streetie Care Bangalore is a sample local help portal for community animal care. Share feedback on copy,
              layout, and what to add next.
            </p>
          </div>
          <Link href="/streetiecare/search" className="secondary-button justify-center px-5 py-3 text-sm">
            Search portal
          </Link>
        </div>
        <StreetieNav />
      </header>

      <EmergencyBanner />

      {children}

    </div>
  );
}
