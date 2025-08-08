"use client";

import { TimelineStop } from "@/types/content";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface TimelineMapProps {
    timeline: TimelineStop[];
    className?: string;
}

export default function TimelineMap({ timeline, className }: TimelineMapProps) {
    const [selectedCity, setSelectedCity] = useState<TimelineStop | null>(null);

    return (
        <div className={cn("space-y-6", className)}>
            {/* Timeline Scroll */}
            <div className="overflow-x-auto">
                <div className="flex gap-4 min-w-max pb-4">
                    {timeline.map((stop) => (
                        <button
                            key={stop.city}
                            onClick={() => setSelectedCity(stop)}
                            className={cn(
                                "glass px-4 py-3 text-left min-w-[200px] transition-all",
                                selectedCity?.city === stop.city
                                    ? "ring-2 ring-[var(--secondary)] shadow-liquid"
                                    : "hover:shadow-liquid"
                            )}
                        >
                            <div className="font-semibold">{stop.city}</div>
                            <div className="text-sm opacity-80">{stop.years}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Selected City Details */}
            {selectedCity && (
                <div className="glass p-6">
                    <h3 className="text-xl font-semibold mb-2">{selectedCity.city}</h3>
                    <p className="text-sm opacity-80 mb-2">{selectedCity.years}</p>
                    <p className="text-lg">{selectedCity.lesson}</p>
                </div>
            )}
        </div>
    );
}
