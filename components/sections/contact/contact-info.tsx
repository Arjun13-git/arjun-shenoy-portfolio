import { GitBranch, Link2, Mail, MapPin, Download } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/motion/reveal";

const contactMethods = [
  {
    Icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: false,
  },
  {
    Icon: GitBranch,
    label: "GitHub",
    value: siteConfig.githubHandle,
    href: siteConfig.github,
    external: true,
  },
  {
    Icon: Link2,
    label: "LinkedIn",
    value: "Arjun Shenoy R",
    href: siteConfig.linkedin,
    external: true,
  },
] as const;

export function ContactInfo() {
  return (
    <Reveal className="grid gap-6 lg:grid-cols-[1fr_20rem]">
      <ul className="grid gap-3 sm:grid-cols-2">
        {contactMethods.map(({ Icon, label, value, href, external }) => (
          <li key={label} className={label === "Email" ? "sm:col-span-2" : undefined}>
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="card-surface card-interactive group flex items-center gap-4 rounded-xl p-4 sm:p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary">
                <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  {label}
                </p>
                {/* Wrap rather than truncate so the full address is always readable */}
                <p className="font-medium text-foreground transition-colors [overflow-wrap:anywhere] group-hover:text-brand">
                  {value}
                </p>
              </div>
              {external && <span className="sr-only">(opens in a new tab)</span>}
            </a>
          </li>
        ))}
        <li className="card-surface flex items-center gap-4 rounded-xl p-4 sm:col-span-2 sm:p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary">
            <MapPin className="h-5 w-5 text-brand" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Location
            </p>
            <p className="font-medium text-foreground">{siteConfig.location}</p>
            <p className="text-sm text-muted-foreground">Open to remote work and relocation</p>
          </div>
        </li>
      </ul>

      <div className="card-surface flex flex-col justify-between gap-6 rounded-2xl p-6">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
            Open to Internships
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Currently looking for AI/ML, software engineering and related internship
            opportunities.
          </p>
        </div>
        <a
          href={siteConfig.resumeUrl}
          download="Arjun_Shenoy_R_Resume.pdf"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-brand-fill px-5 text-sm font-semibold text-brand-fill-foreground transition-opacity hover:opacity-90"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          Download resume
        </a>
      </div>
    </Reveal>
  );
}
