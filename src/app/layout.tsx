import "@/app/globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import ThemeProviderWrapper from "@/components/common/ThemeProviderWrapper";
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
          <div className="min-h-dvh">
            <header className="sticky top-0 z-40">
              <nav className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between glass">
                <div className="font-semibold">YC</div>
                <div className="flex gap-4 text-sm">
                  {SITE_CONFIG.navigation.main.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="opacity-90 hover:opacity-100 transition-opacity"
                    >
                      {label}
                    </Link>
                  ))}
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
