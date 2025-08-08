import { Testimonial as TestimonialType } from "@/types/content";

interface TestimonialProps {
    testimonial: TestimonialType;
}

export default function Testimonial({ testimonial }: TestimonialProps) {
    return (
        <div className="group relative overflow-hidden rounded-2xl bg-[var(--surface)] border border-[var(--muted)]/20 hover:border-[var(--highlight)]/30 hover:bg-[var(--highlight)]/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--highlight)]/5 via-transparent to-[var(--accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative p-6">
                {/* Quote */}
                <div className="mb-6">
                    <div className="text-2xl text-[var(--highlight)] mb-2">"</div>
                    <p className="text-sm opacity-80 leading-relaxed">
                        {testimonial.quote}
                    </p>
                    <div className="text-2xl text-[var(--highlight)] mt-2 text-right">"</div>
                </div>

                {/* Author */}
                <div className="flex items-center justify-between pt-4 border-t border-[var(--muted)]/20">
                    <div>
                        <div className="font-semibold text-sm">
                            {testimonial.name}
                        </div>
                        <div className="text-xs opacity-60">
                            {testimonial.role}
                        </div>
                    </div>

                    {/* Avatar placeholder */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-white font-bold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                </div>
            </div>
        </div>
    );
}
