import type { Protocol } from "@/data/streetiecare";

interface ProtocolStepsProps {
  protocol: Protocol;
}

export default function ProtocolSteps({ protocol }: ProtocolStepsProps) {
  return (
    <div className="space-y-5">
      {protocol.steps.map((step, index) => (
        <article key={step.title} className="rounded-2xl border border-[var(--line)] bg-[var(--surface)]/75 p-5">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-bold text-white">
              {index + 1}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--text)]">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{step.body}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
