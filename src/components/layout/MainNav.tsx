"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface MainNavProps {
  items: ReadonlyArray<{
    href: string;
    label: string;
  }>;
}

export default function MainNav({ items }: MainNavProps) {
  const pathname = usePathname();

  return (
    <div className="hidden items-center gap-1 md:flex">
      {items.map(({ href, label }) => {
        const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "relative rounded-full px-4 py-2 text-sm font-medium transition-smooth",
              isActive
                ? "bg-[var(--primary)]/10 text-[var(--primary)]"
                : "text-[var(--muted)] hover:bg-[var(--surface)]/75 hover:text-[var(--text)]"
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {label}
            {isActive && (
              <span
                className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-[var(--primary)]"
                aria-hidden
              />
            )}
          </Link>
        );
      })}
    </div>
  );
}
