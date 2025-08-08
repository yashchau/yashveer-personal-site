import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative overflow-hidden glass p-10">
            <div className="relative z-10 max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
                    From military bases to building AI products.
                </h1>
                <p className="mt-4 text-lg opacity-90">
                    I design, ship, and teach tools that help people learn faster and invest smarter.
                </p>
                <div className="mt-6 flex gap-3">
                    <Link
                        className="px-5 py-3 rounded-lg bg-[var(--primary)] text-white hover:opacity-90 transition-opacity"
                        href="/projects"
                    >
                        View Projects
                    </Link>
                    <Link
                        className="px-5 py-3 rounded-lg border border-[var(--muted)] hover:bg-[var(--surface)] transition-colors"
                        href="/teaching"
                    >
                        Learn with me
                    </Link>
                </div>
            </div>
            <div className="absolute inset-0 -z-0 pointer-events-none" aria-hidden>
                <div
                    className="absolute -top-20 -right-20 h-72 w-72 rounded-full blur-3xl opacity-40"
                    style={{
                        background: "radial-gradient(closest-side, var(--secondary), transparent)",
                    }}
                />
                <div
                    className="absolute -bottom-10 -left-10 h-72 w-72 rounded-full blur-3xl opacity-30"
                    style={{
                        background: "radial-gradient(closest-side, var(--accent), transparent)",
                    }}
                />
            </div>
        </section>
    );
}
