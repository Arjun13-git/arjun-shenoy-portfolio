/**
 * Static hero backdrop: faint grid plus a single soft glow.
 * Colours come from theme tokens so both themes get a visible grid.
 */
export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="bg-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,black_55%,transparent)]" />
      <div
        className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full blur-[120px]"
        style={{ backgroundColor: "var(--glow)" }}
      />
    </div>
  );
}
