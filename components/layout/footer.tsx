import { GitBranch, Link2, Mail } from "lucide-react";

import { siteConfig } from "@/config/site";
import { navigation } from "@/config/navigation";
import { Logo } from "./logo";

const socialLinks = [
  { label: "GitHub", href: siteConfig.github, Icon: GitBranch, external: true },
  { label: "LinkedIn", href: siteConfig.linkedin, Icon: Link2, external: true },
  { label: "Email", href: `mailto:${siteConfig.email}`, Icon: Mail, external: false },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
          <div className="space-y-5">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline}
            </p>
            <ul className="flex items-center gap-2">
              {socialLinks.map(({ label, href, Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    aria-label={external ? `${label} (opens in a new tab)` : label}
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-brand-border hover:text-brand"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Sections
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {navigation.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    className="rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} <span className="font-medium text-foreground">{siteConfig.name}</span>
          </p>
          <p>Built with Next.js, TypeScript and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
