"use client";

import { motion } from "framer-motion";
import { GitBranch, Link2, Mail, MapPin, Download, Building2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

const contactMethods = [
  {
    Icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: "Best for inquiries and collaboration",
  },
  {
    Icon: GitBranch,
    label: "GitHub",
    value: "Arjun13-git",
    href: siteConfig.github,
    description: "Explore my projects and contributions",
  },
  {
    Icon: Link2,
    label: "LinkedIn",
    value: "Arjun Shenoy R",
    href: siteConfig.linkedin,
    description: "Connect professionally",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: siteConfig.location,
    href: null,
    description: "Open to remote and hybrid roles",
  },
];

export function ContactInfo() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="space-y-6"
    >
      {/* Availability */}
      <div className="flex items-start gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
        <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 animate-pulse" />
        <div>
          <p className="font-semibold text-emerald-400">Available for Placements</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Open to full-time placements and research collaborations. Response time: within 24 hours.
          </p>
        </div>
      </div>

      {/* Current Position */}
      <div className="flex items-start gap-4 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
          <Building2 className="h-5 w-5 text-cyan-400" aria-hidden="true" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Current Role</p>
          <p className="mt-1 font-semibold text-foreground">
            Software Engineering Intern
          </p>
          <p className="text-sm font-medium text-cyan-400">Datavex AI Pvt Ltd</p>
          <p className="mt-1 text-xs text-muted-foreground">Mar 2026 – Present · On-site, Mangalore</p>
        </div>
      </div>

      {/* Contact methods */}
      <div className="grid gap-3 sm:grid-cols-2">
        {contactMethods.map(({ Icon, label, value, href, description }) => {
          const inner = (
            <>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
                <Icon className="h-5 w-5 text-cyan-400" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {label}
                </p>
                <p className={cn("font-medium text-foreground truncate", href && "group-hover:text-cyan-400 transition-colors")}>
                  {value}
                </p>
                <p className="text-xs text-muted-foreground">{description}</p>
              </div>
            </>
          );

          if (href) {
            return (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-200 hover:border-cyan-500/30 hover:bg-card/80 group"
                aria-label={`${label}: ${value}`}
              >
                {inner}
              </a>
            );
          }

          return (
            <div
              key={label}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4"
            >
              {inner}
            </div>
          );
        })}
      </div>

      {/* Resume Download */}
      <a
        href={siteConfig.resumeUrl}
        download="Arjun_Shenoy_R_Resume.pdf"
        className="flex items-center justify-center gap-3 w-full rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-5 text-cyan-400 transition-all duration-200 hover:bg-cyan-500/20 hover:border-cyan-500/50 group"
        aria-label="Download Arjun Shenoy R's resume"
      >
        <Download className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
        <span className="font-semibold">Download Resume</span>
      </a>
    </motion.div>
  );
}
