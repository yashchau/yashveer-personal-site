import "@/app/globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import ThemeProviderWrapper from "@/components/common/ThemeProviderWrapper";
import ThemeToggle from "@/components/common/ThemeToggle";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProviderWrapper>
          <div className="min-h-dvh bg-[var(--bg)]">
            <header className="sticky top-0 z-40 backdrop-blur-md bg-[var(--bg)]/80 border-b border-[var(--muted)]/20">
              <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
                <Link href="/" className="font-bold text-xl text-[var(--primary)] hover:opacity-80 transition-opacity">
                  YC
                </Link>
                <div className="flex items-center gap-6">
                  <div className="hidden md:flex gap-6 text-sm">
                    {SITE_CONFIG.navigation.main.map(({ href, label }) => (
                      <Link
                        key={href}
                        href={href}
                        className="opacity-80 hover:opacity-100 hover:text-[var(--primary)] transition-all duration-200"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                  <ThemeToggle />
                </div>
              </nav>
            </header>
            <main className="mx-auto max-w-7xl px-6 py-8">{children}</main>
            <footer className="mx-auto max-w-7xl px-6 py-8 border-t border-[var(--muted)]/20">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60">
                <div>© {new Date().getFullYear()} Yashveer Chauhan</div>
                <div className="flex gap-4">
                  <a href="https://github.com/yashchau" className="hover:text-[var(--primary)] transition-colors">
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/yashchau" className="hover:text-[var(--primary)] transition-colors">
                    LinkedIn
                  </a>
                  <a href="mailto:hello@yashveer.dev" className="hover:text-[var(--primary)] transition-colors">
                    Contact
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
