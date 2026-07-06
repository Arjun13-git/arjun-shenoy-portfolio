"use client";

import { motion } from "framer-motion";
import { GitBranch, Link2, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { fadeUp } from "@/lib/animations";

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
];

export function ContactInfo() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="space-y-8"
    >
      {/* Availability */}
      <div className="flex items-start gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
        <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 animate-pulse" />
        <div>
          <p className="font-semibold text-emerald-400">Available for Opportunities</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Internships, full-time placements, and research collaborations.
            Response time: within 24 hours.
          </p>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <MapPin className="h-4 w-4 text-cyan-400" aria-hidden="true" />
        {siteConfig.location}
      </div>

      {/* Contact methods */}
      <div className="space-y-3">
        {contactMethods.map(({ Icon, label, value, href, description }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-200 hover:border-cyan-500/30 hover:bg-card/80 group"
            aria-label={`${label}: ${value}`}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
              <Icon className="h-5 w-5 text-cyan-400" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {label}
              </p>
              <p className="font-medium text-foreground group-hover:text-cyan-400 transition-colors truncate">
                {value}
              </p>
              <p className="text-xs text-muted-foreground">{description}</p>
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );
}
