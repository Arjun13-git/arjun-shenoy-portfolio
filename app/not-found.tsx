import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you're looking for doesn't exist.",
};

const btnBase =
  "inline-flex items-center justify-center gap-2 h-10 px-5 rounded-lg text-sm font-semibold transition-colors";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 space-y-8">
        <p className="select-none font-heading text-[7rem] font-black leading-none text-border-strong md:text-[10rem]" aria-hidden="true">
          404
        </p>

        <div className="space-y-3">
          <h1 className="font-heading text-2xl font-bold md:text-3xl">Page not found</h1>
          <p className="mx-auto max-w-md text-muted-foreground">
            This page doesn&apos;t exist or has moved.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className={`${btnBase} bg-brand-fill text-brand-fill-foreground hover:opacity-90`}>
            <Home className="h-4 w-4" aria-hidden="true" />
            Go home
          </Link>
          <Link
            href="/#contact"
            className={`${btnBase} border border-border-strong bg-card text-foreground hover:border-brand-border hover:text-brand`}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}
