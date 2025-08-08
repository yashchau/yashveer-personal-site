import { Lesson } from "@/types/content";
import { cn } from "@/lib/utils";

interface LessonCardProps {
    lesson: Lesson;
    className?: string;
}

const difficultyColors = {
    Beginner: "bg-[var(--success)]",
    Intermediate: "bg-[var(--warning)]",
    Advanced: "bg-[var(--danger)]"
};

export default function LessonCard({ lesson, className }: LessonCardProps) {
    return (
        <article className={cn("glass p-6 hover:shadow-liquid transition-shadow", className)}>
            <div className="flex flex-col h-full">
                <header className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{lesson.title}</h3>
                        <span className={cn(
                            "px-2 py-1 text-xs rounded-full text-white",
                            difficultyColors[lesson.difficulty]
                        )}>
                            {lesson.difficulty}
                        </span>
                    </div>
                </header>

                <div className="flex-1">
                    <h4 className="text-sm font-semibold mb-2">What you&apos;ll learn:</h4>
                    <ul className="text-sm opacity-80 space-y-1">
                        {lesson.outcomes.map((outcome, index) => (
                            <li key={index} className="flex items-center">
                                <span className="w-1 h-1 bg-[var(--highlight)] rounded-full mr-2"></span>
                                {outcome}
                            </li>
                        ))}
                    </ul>
                </div>

                <footer className="mt-6 pt-4 border-t border-[var(--muted)]">
                    <a
                        href={`/teaching/${lesson.slug}`}
                        className="px-4 py-2 rounded-lg bg-[var(--primary)] text-white hover:opacity-90 transition-opacity text-center block"
                    >
                        Start Learning
                    </a>
                </footer>
            </div>
        </article>
    );
}
