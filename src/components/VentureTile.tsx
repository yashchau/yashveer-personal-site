import { Venture } from "@/types/content";
import { cn } from "@/lib/utils";

interface VentureTileProps {
  venture: Venture;
  className?: string;
}

export default function VentureTile({ venture, className }: VentureTileProps) {
  return (
    <article className={cn("glass p-8 hover:shadow-liquid transition-shadow", className)}>
      <div className="flex flex-col h-full">
        <header className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">{venture.name}</h3>
          <p className="text-lg opacity-90 mb-4">{venture.mission}</p>
          <p className="text-sm opacity-80">{venture.whatItDoes}</p>
        </header>
        
        <div className="flex-1 space-y-6">
          <div>
            <h4 className="text-sm font-semibold mb-2">Current Traction:</h4>
            <ul className="text-sm opacity-80 space-y-1">
              {venture.traction.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-1 h-1 bg-[var(--secondary)] rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-2">Roadmap:</h4>
            <ul className="text-sm opacity-80 space-y-1">
              {venture.roadmap.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-1 h-1 bg-[var(--accent)] rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <footer className="mt-6 pt-6 border-t border-[var(--muted)]">
          <a
            href={venture.contact}
            className="px-6 py-3 rounded-lg bg-[var(--primary)] text-white hover:opacity-90 transition-opacity text-center block"
          >
            Get Involved
          </a>
        </footer>
      </div>
    </article>
  );
}
