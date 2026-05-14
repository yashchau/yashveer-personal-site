import type { Metadata } from "next";
import StreetieLayout from "@/components/streetiecare/StreetieLayout";

export const metadata: Metadata = {
  title: "Streetie Care Bangalore",
  description:
    "Prototype local resource portal for street dogs, cats, and other animals around Indiranagar, Jeevan Bima Nagar, HAL 2nd Stage, Domlur, and nearby Bangalore areas.",
  robots: { index: false, follow: false },
};

export default function StreetieCareLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-[var(--bg)] px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <StreetieLayout>{children}</StreetieLayout>
      </div>
    </div>
  );
}
