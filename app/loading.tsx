export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      role="status"
      aria-label="Loading"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-border bg-brand-soft">
          <span className="font-heading text-sm font-bold text-brand">AS</span>
        </div>
        <p className="text-xs text-muted-foreground">Loading…</p>
      </div>
    </div>
  );
}
