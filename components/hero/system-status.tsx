export function SystemStatus() {
  return (
    <div className="w-[340px] rounded-2xl border border-cyan-500/20 bg-black/25 p-6 backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,255,0.08)]">

      <p className="mb-5 text-xs uppercase tracking-[0.25em] text-cyan-400">
        System Status
      </p>

      <div className="space-y-3 text-sm">

        <Row label="Name" value="Arjun Shenoy R" />

        <Row label="Role" value="AI/ML Enthusiast" />

        <Row label="Focus" value="Backend • AI Systems • Research" />

        <Row label="Location" value="India" />

      </div>

      <div className="mt-8 flex items-center gap-2">

        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

        <span className="text-sm text-emerald-400">
          Available for Opportunities
        </span>

      </div>

    </div>
  );
}

function Row({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between gap-5">

      <span className="text-zinc-500">
        {label}
      </span>

      <span className="text-right text-zinc-100">
        {value}
      </span>

    </div>
  );
}