import { Venture } from "@/types/content";

interface VentureTileProps {
  venture: Venture;
}

export default function VentureTile({ venture }: VentureTileProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-[var(--surface)] border border-[var(--muted)]/20 hover:border-[var(--secondary)]/30 hover:bg-[var(--secondary)]/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary)]/5 via-transparent to-[var(--accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--secondary)] transition-colors duration-200">
            {venture.name}
          </h3>
          <p className="text-sm opacity-70 mb-3 line-clamp-2">
            {venture.mission}
          </p>
        </div>

        {/* What it does */}
        <div className="mb-6">
          <div className="text-xs opacity-60 mb-2">What it does</div>
          <p className="text-sm opacity-80">
            {venture.whatItDoes}
          </p>
        </div>

        {/* Traction */}
        <div className="mb-6">
          <div className="text-xs opacity-60 mb-2">Current Traction</div>
          <ul className="space-y-1">
            {venture.traction.slice(0, 3).map((item, index) => (
              <li key={index} className="text-sm opacity-80 flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-[var(--secondary)] rounded-full mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Roadmap */}
        <div className="mb-6">
          <div className="text-xs opacity-60 mb-2">Upcoming</div>
          <ul className="space-y-1">
            {venture.roadmap.slice(0, 2).map((item, index) => (
              <li key={index} className="text-sm opacity-80 flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--muted)]/20">
          <div className="text-xs opacity-60">
            Get involved
          </div>
          <a
            href={`mailto:${venture.contact}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--secondary)]/10 text-[var(--secondary)] hover:bg-[var(--secondary)]/20 font-medium text-sm transition-colors duration-200 group"
          >
            <span>Contact</span>
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
