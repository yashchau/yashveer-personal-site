import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10" aria-hidden>
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--secondary)]/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent)]/20 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--highlight)]/10 rounded-full blur-3xl animate-pulse delay-500" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                <div className="mb-8">
                    <span className="inline-block px-4 py-2 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium mb-6">
                        🚀 AI Builder & Educator
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] bg-clip-text text-transparent">
                    From military bases
                    <br />
                    to building AI products
                </h1>

                <p className="text-xl md:text-2xl opacity-80 mb-8 max-w-3xl mx-auto leading-relaxed">
                    I design, ship, and teach tools that help people learn faster and invest smarter.
                    <span className="block mt-2 text-lg opacity-60">
                        Let&apos;s build something amazing together.
                    </span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    <Link
                        className="px-8 py-4 rounded-xl bg-[var(--primary)] text-white font-semibold hover:bg-[var(--primary)]/90 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                        href="/projects"
                    >
                        View My Work →
                    </Link>
                    <Link
                        className="px-8 py-4 rounded-xl border-2 border-[var(--muted)] hover:border-[var(--primary)] hover:bg-[var(--primary)]/5 font-semibold transition-all duration-200 group"
                        href="/teaching"
                    >
                        <span className="group-hover:text-[var(--primary)] transition-colors">
                            Learn with me
                        </span>
                        <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">
                            →
                        </span>
                    </Link>
                </div>

                {/* Quick Stats */}
                <div className="flex flex-wrap justify-center gap-8 text-sm opacity-60">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[var(--success)] rounded-full"></span>
                        <span>5+ Years Experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[var(--secondary)] rounded-full"></span>
                        <span>20+ Projects Shipped</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[var(--accent)] rounded-full"></span>
                        <span>100+ Students Taught</span>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-[var(--muted)] rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-[var(--muted)] rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
}
