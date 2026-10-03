import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  /** Section id — the heading gets `${id}-heading` for aria-labelledby. */
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}

export function SectionHeader({ id, index, label, title, description, className }: SectionHeaderProps) {
  return (
    <header className={cn("mb-12 max-w-2xl md:mb-14", className)}>
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
        <span className="text-brand">{index}</span> / {label}
      </p>
      <h2
        id={`${id}-heading`}
        className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      )}
    </header>
  );
}
