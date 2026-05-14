interface DisclaimerBoxProps {
  children?: React.ReactNode;
}

export default function DisclaimerBox({ children }: DisclaimerBoxProps) {
  return (
    <aside className="rounded-2xl border border-[var(--warning)]/30 bg-[var(--warning)]/10 p-4 text-sm leading-relaxed text-[var(--text)]">
      {children ?? (
        <>
          This prototype uses sample data. Please verify contacts before relying on them. Guidance is general
          information and is not a substitute for advice from a qualified veterinarian or legal professional.
        </>
      )}
    </aside>
  );
}
