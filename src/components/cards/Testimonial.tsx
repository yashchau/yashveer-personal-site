import { Testimonial as TestimonialType } from "@/types/content";

interface TestimonialProps {
  testimonial: TestimonialType;
}

export default function Testimonial({ testimonial }: TestimonialProps) {
  const initials = testimonial.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="surface-card group h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--highlight)]/10 via-transparent to-[var(--accent)]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col p-6">
        <div className="text-4xl leading-none text-[var(--highlight)]/70">“</div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)] md:text-base">
          {testimonial.quote}
        </p>

        <footer className="mt-6 flex items-center justify-between border-t border-[var(--line)] pt-4">
          <div>
            <div className="font-semibold text-[var(--text)]">{testimonial.name}</div>
            <div className="text-xs text-[var(--muted)]">{testimonial.role}</div>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-sm font-semibold text-white">
            {initials}
          </div>
        </footer>
      </div>
    </article>
  );
}
