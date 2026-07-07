"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Logo } from "./logo";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { scrolled } = useScroll(20);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((item) => item.href.replace("#", ""));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navigation.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <button
                key={item.title}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md",
                  "hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {item.title}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-3 right-3 h-px bg-cyan-400"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={siteConfig.resumeUrl}
            download="Arjun_Shenoy_R_Resume.pdf"
            aria-label={`Download ${siteConfig.owner}'s resume`}
            className="inline-flex items-center gap-1.5 justify-center h-8 px-3 rounded-lg text-sm font-medium border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col px-6 pb-6 pt-4 gap-1" aria-label="Mobile navigation">
              {navigation.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <button
                    key={item.title}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "w-full rounded-md px-4 py-3 text-left text-sm font-medium transition-colors",
                      isActive
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    )}
                  >
                    {item.title}
                  </button>
                );
              })}
              <div className="mt-4 pt-4 border-t border-border">
                <a
                  href={siteConfig.resumeUrl}
                  download="Arjun_Shenoy_R_Resume.pdf"
                  className="flex w-full items-center justify-center gap-2 h-11 rounded-lg bg-cyan-500 text-black text-sm font-semibold hover:bg-cyan-400 transition-colors"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}