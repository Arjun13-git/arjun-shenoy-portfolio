"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Logo } from "./logo";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

const MOBILE_MENU_ID = "mobile-navigation";
// The full desktop nav needs ~1000px; below lg (1024px) the menu button is used.
const DESKTOP_QUERY = "(min-width: 1024px)";

export function Navbar() {
  const { scrolled } = useScroll(20);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback((restoreFocus: boolean) => {
    setMobileOpen(false);
    if (restoreFocus) menuButtonRef.current?.focus();
  }, []);

  // Close the drawer when the viewport grows into the desktop layout
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setMobileOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // While open: lock page scroll, close on Escape, move focus into the menu,
  // and keep Tab cycling between the menu button and the menu items.
  useEffect(() => {
    if (!mobileOpen) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu(true);
        return;
      }
      if (e.key !== "Tab" || !menuRef.current || !menuButtonRef.current) return;

      const focusables = [
        menuButtonRef.current,
        ...menuRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      ];
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen, closeMenu]);

  // Highlight the section currently under the navbar
  useEffect(() => {
    const ids = navigation.map((item) => item.href.replace("#", ""));
    const handleScroll = () => {
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Tap outside to close. Rendered outside <header>: the header's
          backdrop-filter would otherwise become this element's containing
          block and shrink it to the header's own box. */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/70 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => closeMenu(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-colors duration-300",
        scrolled || mobileOpen
          ? "border-b border-border bg-background/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:h-20">
        <Logo compactUntil="xl" />

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.title}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-foreground",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {item.title}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-3 right-3 h-px bg-brand"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={siteConfig.resumeUrl}
            download="Arjun_Shenoy_R_Resume.pdf"
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-border-strong px-3 text-sm font-medium text-foreground transition-colors hover:border-brand-border hover:text-brand"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            Resume
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile */}
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls={MOBILE_MENU_ID}
          className="flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground lg:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu — a panel under the bar. Animates opacity and a small
          translate only: animating height:auto makes Framer Motion measure the
          page and restore window.scrollY, which cancelled anchor scrolling. */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id={MOBILE_MENU_ID}
            ref={menuRef}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-x-0 top-full max-h-[calc(100svh-4rem)] overflow-y-auto border-b border-border bg-background shadow-lg lg:hidden"
          >
            <nav className="mx-auto flex max-w-6xl flex-col px-4 pb-5 pt-2 sm:px-6" aria-label="Mobile navigation">
              <ul className="flex flex-col">
                {navigation.map((item) => {
                  const isActive = activeSection === item.href.replace("#", "");
                  return (
                    <li key={item.title}>
                      <a
                        href={item.href}
                        onClick={() => closeMenu(false)}
                        aria-current={isActive ? "true" : undefined}
                        className={cn(
                          "flex items-center justify-between rounded-md px-3 py-3 text-base font-medium transition-colors",
                          isActive
                            ? "bg-secondary text-foreground"
                            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                        )}
                      >
                        {item.title}
                        {isActive && <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-3 flex items-center gap-3 border-t border-border pt-4">
                <a
                  href={siteConfig.resumeUrl}
                  download="Arjun_Shenoy_R_Resume.pdf"
                  className="flex h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-brand-fill text-sm font-semibold text-brand-fill-foreground transition-opacity hover:opacity-90"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download resume
                </a>
                <div className="flex h-11 items-center rounded-lg border border-border px-1">
                  <ThemeToggle />
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </>
  );
}
