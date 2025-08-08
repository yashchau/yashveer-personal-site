import Link from "next/link";

export default function CTABar() {
    return (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] p-8 md:p-12">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/20 via-[var(--secondary)]/20 to-[var(--accent)]/20" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to Build Something Amazing?
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                    Whether you&apos;re looking to hire, partner, or just want to chat about AI and technology,
                    I&apos;m always excited to connect with fellow builders and learners.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="mailto:hello@yashveer.dev"
                        className="px-8 py-4 rounded-xl bg-white text-[var(--primary)] font-semibold hover:bg-white/90 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                        Let&apos;s Talk →
                    </Link>
                    <Link
                        href="/projects"
                        className="px-8 py-4 rounded-xl border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold transition-all duration-200 group"
                    >
                        <span className="group-hover:text-white transition-colors">
                            View My Work
                        </span>
                        <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">
                            →
                        </span>
                    </Link>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/70">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        <span>AI & Machine Learning</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        <span>Full-Stack Development</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        <span>Product Strategy</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
