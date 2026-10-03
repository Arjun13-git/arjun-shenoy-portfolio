import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: ReactNode;
  /** Alternate sections sit on a slightly different surface to separate them. */
  tone?: "default" | "surface";
  className?: string;
}

export function Section({ id, children, tone = "default", className }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn(
        "px-4 py-20 sm:px-6 md:py-24",
        tone === "surface" && "border-y border-border bg-surface",
        className
      )}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
