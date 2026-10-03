import { cn } from "@/lib/utils";

interface TechListProps {
  items: readonly string[];
  /** Show at most this many items, followed by a "+N" chip. */
  max?: number;
  className?: string;
}

export function TechList({ items, max, className }: TechListProps) {
  const shown = max ? items.slice(0, max) : items;
  const hidden = items.length - shown.length;

  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)} aria-label="Technologies">
      {shown.map((item) => (
        <li
          key={item}
          className="rounded-md border border-border bg-secondary px-2 py-0.5 font-mono text-[11px] leading-5 text-secondary-foreground"
        >
          {item}
        </li>
      ))}
      {hidden > 0 && (
        <li className="px-1 py-0.5 font-mono text-[11px] leading-5 text-muted-foreground">
          +{hidden} more
        </li>
      )}
    </ul>
  );
}
