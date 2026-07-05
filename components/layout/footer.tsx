export function Footer() {
  return (
    <footer className="border-t border-border/50 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Arjun Shenoy R.
      </div>
    </footer>
  );
}