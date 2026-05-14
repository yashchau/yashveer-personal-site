"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/streetiecare", label: "Home" },
  { href: "/streetiecare/emergency", label: "Emergency" },
  { href: "/streetiecare/resources", label: "Resources" },
  { href: "/streetiecare/protocols", label: "Protocols" },
  { href: "/streetiecare/lost-found", label: "Lost & Found" },
  { href: "/streetiecare/contact", label: "Contact" },
];

export default function StreetieNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Streetie Care navigation" className="flex gap-2 overflow-x-auto pb-2">
      {navItems.map((item) => {
        const active = pathname === item.href || (item.href !== "/streetiecare" && pathname.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-smooth",
              active
                ? "border-[var(--primary)]/30 bg-[var(--primary)]/10 text-[var(--primary)]"
                : "border-[var(--line)] bg-[var(--surface)]/75 text-[var(--muted)] hover:text-[var(--text)]"
            )}
            aria-current={active ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
