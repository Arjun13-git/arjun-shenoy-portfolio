"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState, type MouseEvent } from "react";
import { flushSync } from "react-dom";
import { Button } from "@/components/ui/button";

const REVEAL_MS = 420;
const FADE_MS = 300;

type Theme = "light" | "dark";

/**
 * Switches theme with a short transition:
 * - View Transitions API: the new theme grows as a circle from the toggle.
 * - No API support: colours fade for ~300ms (see `html.theme-fade` in globals.css).
 * - prefers-reduced-motion: switches instantly.
 */
function switchTheme(next: Theme, setTheme: (t: Theme) => void, origin: { x: number; y: number }) {
  const root = document.documentElement;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const apply = () => {
    // next-themes applies the class in an effect; set it here as well so the
    // DOM is already updated when the View Transition takes its snapshot.
    root.classList.remove("light", "dark");
    root.classList.add(next);
    flushSync(() => setTheme(next));
  };

  if (reduced) {
    apply();
    return;
  }

  if (typeof document.startViewTransition === "function") {
    const transition = document.startViewTransition(apply);
    transition.ready
      .then(() => {
        const radius = Math.hypot(
          Math.max(origin.x, window.innerWidth - origin.x),
          Math.max(origin.y, window.innerHeight - origin.y)
        );
        root.animate(
          {
            clipPath: [
              `circle(0px at ${origin.x}px ${origin.y}px)`,
              `circle(${radius}px at ${origin.x}px ${origin.y}px)`,
            ],
          },
          { duration: REVEAL_MS, easing: "cubic-bezier(0.4, 0, 0.2, 1)", pseudoElement: "::view-transition-new(root)" }
        );
      })
      .catch(() => {
        /* transition skipped — the theme is already applied */
      });
    return;
  }

  root.classList.add("theme-fade");
  apply();
  window.setTimeout(() => root.classList.remove("theme-fade"), FADE_MS);
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only render after mount to avoid hydration mismatch
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" aria-label="Toggle theme" disabled className="h-10 w-10">
        <Sun className="h-5 w-5 opacity-0" aria-hidden="true" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    switchTheme(isDark ? "light" : "dark", setTheme, {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-10 w-10 text-muted-foreground hover:text-foreground"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={handleClick}
    >
      {isDark ? (
        <Sun className="h-5 w-5" aria-hidden="true" />
      ) : (
        <Moon className="h-5 w-5" aria-hidden="true" />
      )}
    </Button>
  );
}
