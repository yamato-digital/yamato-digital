export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-base font-semibold uppercase tracking-[0.14em] text-ink">{children}</h2>
      <div className="mt-2 h-[2px] w-10 bg-current opacity-40" />
    </div>
  );
}
