export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="mx-auto max-w-7xl px-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Arjun Shenoy R.
        Built with Next.js, TypeScript and ❤️.
      </div>
    </footer>
  );
}