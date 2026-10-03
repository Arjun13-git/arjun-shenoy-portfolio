/**
 * Thin "circuit" traces around the portrait: code and data flow in from the
 * left, a prediction flows out. Small static SVGs with one travelling dash
 * per trace (CSS). Purely decorative.
 */
const TRACE = "stroke-[var(--border-strong)]";
const PULSE = "flow-pulse stroke-[var(--brand)]";

function Label({ x, y, children, anchor = "start" }: { x: number; y: number; children: string; anchor?: "start" | "end" }) {
  return (
    <text x={x} y={y} textAnchor={anchor} className="fill-[var(--muted-foreground)] font-mono text-[10px]">
      {children}
    </text>
  );
}

export function HeroFlow() {
  const inputs = [
    { d: "M2 14 H44 L64 34 H104", y: 14, labelY: 8, label: "code", delay: "0s" },
    { d: "M2 62 H44 L64 42 H104", y: 62, labelY: 74, label: "data", delay: "-1.8s" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden="true">
      {/* Inputs → left edge of the frame */}
      <svg
        className="absolute right-full top-[24%] mr-5 h-[76px] w-[104px] sm:mr-7"
        viewBox="0 0 104 76"
        fill="none"
      >
        {inputs.map((t) => (
          <g key={t.label}>
            <path d={t.d} className={TRACE} strokeWidth="1" pathLength={100} />
            <path d={t.d} className={PULSE} strokeWidth="1.5" strokeLinecap="round" pathLength={100} style={{ animationDelay: t.delay }} />
            <circle cx="2" cy={t.y} r="2" className="fill-[var(--border-strong)]" />
            <Label x={2} y={t.labelY}>{t.label}</Label>
          </g>
        ))}
        <circle cx="102" cy="38" r="2.5" className="fill-[var(--brand)]" />
      </svg>

      {/* Output → right of the frame (stacked layout) */}
      <svg
        className="absolute left-full top-[62%] ml-5 h-[40px] w-[104px] sm:ml-7 lg:hidden"
        viewBox="0 0 104 40"
        fill="none"
      >
        <path d="M2 20 H102" className={TRACE} strokeWidth="1" pathLength={100} />
        <path d="M2 20 H102" className={PULSE} strokeWidth="1.5" strokeLinecap="round" pathLength={100} style={{ animationDelay: "-0.9s" }} />
        <circle cx="2" cy="20" r="2.5" className="fill-[var(--brand)]" />
        <circle cx="102" cy="20" r="2" className="fill-[var(--border-strong)]" />
        <Label x={102} y={12} anchor="end">predict()</Label>
      </svg>

      {/* Output → below the frame (desktop, where there's no room on the right) */}
      <svg
        className="absolute right-[14%] top-full mt-7 hidden h-[72px] w-[90px] lg:block"
        viewBox="0 0 90 72"
        fill="none"
      >
        <path d="M80 2 V30 L64 46 H2" className={TRACE} strokeWidth="1" pathLength={100} />
        <path d="M80 2 V30 L64 46 H2" className={PULSE} strokeWidth="1.5" strokeLinecap="round" pathLength={100} style={{ animationDelay: "-0.9s" }} />
        <circle cx="80" cy="2" r="2.5" className="fill-[var(--brand)]" />
        <circle cx="2" cy="46" r="2" className="fill-[var(--border-strong)]" />
        <Label x={2} y={62}>predict()</Label>
      </svg>
    </div>
  );
}
