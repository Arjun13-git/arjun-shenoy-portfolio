import { MapPin, GraduationCap, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";

const facts = [
  {
    Icon: GraduationCap,
    label: "Education",
    value: siteConfig.degree,
    sub: `${siteConfig.college} · CGPA ${siteConfig.cgpa}`,
  },
  {
    Icon: Sparkles,
    label: "Focus",
    value: "AI/ML Enthusiast",
    sub: "Machine learning · Software engineering · Research",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: siteConfig.location,
    sub: "Open to remote work and relocation",
  },
];

const interests = [
  {
    title: "Machine learning",
    reason: "Training and evaluating models end to end — data preparation, baselines, and evaluation I can trust.",
  },
  {
    title: "LLM applications",
    reason: "Agents, tool use and guardrails around language models, mostly explored at hackathons.",
  },
  {
    title: "Backend development",
    reason: "Building the APIs and services that the models sit behind, mostly with FastAPI.",
  },
  {
    title: "Quantum machine learning",
    reason: "Hybrid quantum-classical models, through my college research project on galaxy classification.",
  },
];

export function AboutSection() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <Reveal>
          <SectionHeader id="about" index="01" label="About" title="Learning by building." className="mb-8 md:mb-8" />

          <div className="max-w-prose space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I&apos;m a final-year Computer Science &amp; Engineering student at{" "}
              {siteConfig.college}. I&apos;m interested in machine learning,
              software engineering and research, and I mostly learn by building
              projects around them.
            </p>
            <p>
              A lot of that has happened at hackathons — a disaster-alert app,
              a prompt-injection filter, a code-security agent pipeline. Outside
              of them I&apos;ve worked with classmates on quantum machine learning
              for galaxy classification, and on my own I&apos;ve been experimenting
              with ECG classification and image steganalysis.
            </p>
            <p>
              From March to September 2026 I was a software engineering intern at{" "}
              <span className="font-medium text-foreground">Datavex.ai Private Limited</span>,
              working on an AI-assisted CAD tool and an ERP platform.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="space-y-8 lg:pt-2">
          <ul className="space-y-3">
            {facts.map(({ Icon, label, value, sub }) => (
              <li key={label} className="card-surface flex items-start gap-4 rounded-xl p-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary">
                  <Icon className="h-4 w-4 text-brand" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    {label}
                  </p>
                  <p className="mt-1 font-medium text-foreground">{value}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{sub}</p>
                </div>
              </li>
            ))}
          </ul>

          <div>
            <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              What I&apos;m interested in
            </h3>
            <ul className="mt-4 space-y-4">
              {interests.map((interest) => (
                <li key={interest.title} className="border-l-2 border-border pl-4 text-sm">
                  <span className="font-semibold text-foreground">{interest.title}</span>
                  <span className="mt-0.5 block leading-relaxed text-muted-foreground">
                    {interest.reason}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
