import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10">
        <span className="text-lg font-bold text-cyan-400">
          N
        </span>
      </div>

      <div>
        <p className="font-heading text-lg font-bold">
          Neural Horizon
        </p>

        <p className="text-xs text-muted-foreground">
          AI • Research • Engineering
        </p>
      </div>
    </Link>
  );
}