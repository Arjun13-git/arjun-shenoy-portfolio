import { GitBranch, Link2, Mail, ArrowUpRight } from "lucide-react";

import { siteConfig } from "@/config/site";
import { navigation } from "@/config/navigation";
import { Logo } from "./logo";

const socialLinks = [
  { label: "GitHub", href: siteConfig.github, Icon: GitBranch },
  { label: "LinkedIn", href: siteConfig.linkedin, Icon: Link2 },
  { label: "Email", href: `mailto:${siteConfig.email}`, Icon: Mail },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border bg-surface/50"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr] lg:gap-20">

          {/* Brand column */}
          <div className="space-y-6">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-cyan-500/40 hover:text-cyan-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation column */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Navigate
            </h3>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {navigation.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-3.5 w-3.5" />
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <GitBranch className="h-3.5 w-3.5" />
                GitHub
                <ArrowUpRight className="h-3 w-3" />
              </a>
              <p className="text-sm text-muted-foreground">
                {siteConfig.location}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {year}{" "}
            <span className="font-medium text-foreground">{siteConfig.owner}</span>
            . All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js · TypeScript · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}