/**
 * Hero backdrop: faint grid that drifts very slowly, one soft static glow,
 * and a few code fragments that fade in and out in the empty right-hand
 * area (desktop only, never over the text). All motion is CSS and is
 * removed for reduced-motion users (see globals.css).
 */
const fragments = [
  { text: "import torch", className: "right-[6%] top-[16%]", delay: "0s" },
  { text: "git commit -m \"wip\"", className: "right-[34%] top-[11%]", delay: "-4s" },
  { text: "model.fit(X, y)", className: "right-[38%] top-[24%]", delay: "-8s" },
  { text: "predict(x) → ŷ", className: "bottom-[16%] right-[36%]", delay: "-12s" },
];

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black_55%,transparent)]">
        <div className="bg-grid grid-drift absolute -inset-[60px]" />
      </div>
      <div
        className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full blur-[120px]"
        style={{ backgroundColor: "var(--glow)" }}
      />

      <div className="hidden lg:block">
        {fragments.map((f) => (
          <span
            key={f.text}
            className={`code-fragment absolute font-mono text-xs text-muted-foreground/45 ${f.className}`}
            style={{ animationDelay: f.delay }}
          >
            {f.text}
          </span>
        ))}
      </div>
    </div>
  );
}
