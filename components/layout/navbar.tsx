"use client";

import Link from "next/link";

import { navigation } from "@/config/navigation";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/70 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
        >
          Neural Horizon
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm transition-colors hover:text-primary"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button>Resume</Button>

          <ThemeToggle />
        </div>

      </div>
    </header>
  );
}