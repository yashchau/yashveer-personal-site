import "@/app/globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Manrope, Sora } from "next/font/google";
import ThemeProviderWrapper from "@/components/common/ThemeProviderWrapper";
import ThemeToggle from "@/components/common/ThemeToggle";
import MainNav from "@/components/layout/MainNav";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
};

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const headingFont = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bodyFont.variable} ${headingFont.variable}`}
    >
      <body>
        <ThemeProviderWrapper>
          <div className="min-h-dvh bg-[var(--bg)]">
            <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
              <nav className="glass mx-auto flex w-full max-w-7xl items-center justify-between rounded-full px-3 py-2 md:px-4">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-2 rounded-full border border-[var(--line)]/80 bg-[var(--primary)]/10 px-4 py-2 text-sm font-bold text-[var(--primary)] transition-smooth hover:bg-[var(--primary)]/20"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--primary)] text-xs text-white transition-smooth group-hover:scale-105">
                    YC
                  </span>
                  <span className="hidden sm:inline">Yashveer</span>
                </Link>
                <div className="flex items-center gap-2 md:gap-4">
                  <MainNav items={SITE_CONFIG.navigation.main} />
                  <div className="flex items-center gap-1 md:hidden">
                    <Link href="/projects" className="secondary-button px-3 py-1.5 text-xs">Projects</Link>
                    <Link href="/ventures" className="secondary-button px-3 py-1.5 text-xs">Ventures</Link>
                    <Link href="/blog" className="secondary-button px-3 py-1.5 text-xs">Blog</Link>
                    <Link href="/resume" className="secondary-button px-3 py-1.5 text-xs">Résumé</Link>
                  </div>
                  <ThemeToggle />
                </div>
              </nav>
            </header>
            <main className="mx-auto w-full max-w-7xl px-4 pb-14 pt-10 sm:px-6 md:pt-14 lg:px-8">
              {children}
            </main>
            <footer className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
              <div className="glass flex flex-col justify-between gap-5 rounded-[28px] p-6 text-sm md:flex-row md:items-center md:p-8">
                <div className="space-y-1">
                  <div className="font-semibold text-[var(--text)]">
                    © {new Date().getFullYear()} Yashveer Chauhan
                  </div>
                  <div className="text-[var(--muted)]">
                    Currently building Stak, BetWise & AI investment tools in Jersey City, NJ.
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 text-[var(--muted)]">
                  <a
                    href="https://github.com/yashchau"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary-button px-4 py-2 text-sm"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/yashveerchauhan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary-button px-4 py-2 text-sm"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="mailto:hello@yashveer.dev"
                    className="primary-button px-4 py-2 text-sm"
                  >
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
