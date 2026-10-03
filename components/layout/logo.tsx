import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  /** Hide the subtitle below this breakpoint (used in the navbar to save space). */
  compactUntil?: "xl";
}

export function Logo({ compactUntil }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-3 rounded-md" aria-label="Arjun Shenoy R — home">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-border bg-brand-soft">
        <span className="font-heading text-sm font-bold text-brand">AS</span>
      </div>

      <div>
        <p className="font-heading text-base font-bold leading-tight text-foreground">
          Arjun Shenoy R
        </p>
        <p
          className={cn(
            "whitespace-nowrap text-xs text-muted-foreground max-[380px]:hidden",
            compactUntil === "xl" && "lg:max-xl:hidden"
          )}
        >
          AI/ML · Software · Research
        </p>
      </div>
    </Link>
  );
}
