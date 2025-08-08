import "@/app/globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";

export const metadata: Metadata = {
  title: "Yashveer | AI Builder",
  description: "Story-first portfolio - From military bases to building AI products",
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
          <div className="min-h-dvh">
            <header className="sticky top-0 z-40">
              <nav className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between glass">
                <div className="font-semibold">YC</div>
                <div className="flex gap-4 text-sm">
                  <Link href="/" className="opacity-90 hover:opacity-100 transition-opacity">
                    Home
                  </Link>
                  <Link href="/projects" className="opacity-90 hover:opacity-100 transition-opacity">
                    Projects
                  </Link>
                  <Link href="/ventures" className="opacity-90 hover:opacity-100 transition-opacity">
                    Ventures
                  </Link>
                  <Link href="/blog" className="opacity-90 hover:opacity-100 transition-opacity">
                    Blog
                  </Link>
                  <Link href="/teaching" className="opacity-90 hover:opacity-100 transition-opacity">
                    Teaching
                  </Link>
                  <Link href="/resume" className="opacity-90 hover:opacity-100 transition-opacity">
                    Résumé
                  </Link>
                </div>
              </nav>
            </header>
            <main className="mx-auto max-w-6xl px-4 py-12">{children}</main>
            <footer className="mx-auto max-w-6xl px-4 py-12 opacity-80 text-sm">
              © {new Date().getFullYear()} Yashveer
            </footer>
          </div>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
