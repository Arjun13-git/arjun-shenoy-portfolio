export function AvailabilityPill() {
  return (
    <div className="inline-flex flex-col items-center gap-2 lg:items-start">
      <p className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-soft px-3.5 py-1.5 text-sm font-medium text-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
        Open to Internships
      </p>
      <p className="max-w-xs text-xs leading-relaxed text-muted-foreground sm:max-w-none">
        Looking for AI/ML, software engineering and related internships.
      </p>
    </div>
  );
}
