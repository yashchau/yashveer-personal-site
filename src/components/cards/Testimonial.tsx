import { Testimonial as TestimonialType } from "@/types/content";
import { cn } from "@/lib/utils";

interface TestimonialProps {
    testimonial: TestimonialType;
    className?: string;
}

export default function Testimonial({ testimonial, className }: TestimonialProps) {
    return (
        <blockquote className={cn("glass p-6", className)}>
            <div className="flex flex-col h-full">
                <div className="flex-1">
                    <p className="text-lg italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                </div>
                <footer className="border-t border-[var(--muted)] pt-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm opacity-80">{testimonial.role}</div>
                </footer>
            </div>
        </blockquote>
    );
}
