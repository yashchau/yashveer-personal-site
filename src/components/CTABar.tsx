import { cn } from "@/lib/utils";

interface CTABarProps {
    className?: string;
}

export default function CTABar({ className }: CTABarProps) {
    return (
        <section className={cn("glass p-8 text-center", className)}>
            <h2 className="text-2xl font-semibold mb-4">Let&apos;s Work Together</h2>
            <p className="text-lg opacity-80 mb-6">
                Whether you&apos;re looking to hire, partner, or just chat about AI and building.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href="mailto:yashchau1811@gmail.com?subject=Hiring Inquiry"
                    className="px-6 py-3 rounded-lg bg-[var(--primary)] text-white hover:opacity-90 transition-opacity"
                >
                    Hire Me
                </a>
                <a
                    href="mailto:yashchau1811@gmail.com?subject=Partnership Discussion"
                    className="px-6 py-3 rounded-lg border border-[var(--muted)] hover:bg-[var(--surface)] transition-colors"
                >
                    Partner
                </a>
                <a
                    href="https://calendly.com/yashveer/15min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg bg-[var(--secondary)] text-white hover:opacity-90 transition-opacity"
                >
                    Book 15 min
                </a>
            </div>
        </section>
    );
}
