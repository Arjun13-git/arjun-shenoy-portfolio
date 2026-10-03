import { ArrowRight, Download } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { AvailabilityPill } from "./availability-pill";

const buttonBase =
  "inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold whitespace-nowrap transition-colors";

interface HeroContentProps {
  stats: { value: number; label: string }[];
}

// Server-rendered on purpose: the name and intro are in the initial HTML
// and never wait for JavaScript to become visible.
export function HeroContent({ stats }: HeroContentProps) {
  return (
    <div className="mx-auto max-w-xl lg:mx-0">
      <AvailabilityPill />

      <p className="mt-7 font-mono text-xs uppercase tracking-[0.16em] text-brand sm:text-[13px]">
        AI/ML Enthusiast · Software Engineering · Research
      </p>

      <h1 id="hero-heading" className="mt-3 font-heading font-bold leading-none">
        <span className="block text-[2.5rem] text-foreground sm:text-5xl lg:text-6xl">
          Arjun Shenoy R
        </span>
        <span className="mt-4 block text-xl font-semibold leading-snug text-muted-foreground text-balance sm:text-2xl lg:text-[1.75rem]">
          Building software, exploring AI, and turning ideas into{" "}
          <span className="text-foreground">working systems.</span>
        </span>
      </h1>

      <p className="mt-6 text-base leading-7 text-muted-foreground text-pretty">
        I&apos;m a Computer Science Engineering student at {siteConfig.college}.
        Most of what I know comes from building things — hackathon projects,
        machine learning experiments, and a college research project on quantum
        machine learning.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
        <a
          href="#projects"
          className={cn(buttonBase, "bg-brand-fill text-brand-fill-foreground hover:opacity-90")}
        >
          View projects
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
        <a
          href={siteConfig.resumeUrl}
          download="Arjun_Shenoy_R_Resume.pdf"
          className={cn(
            buttonBase,
            "border border-border-strong bg-card text-foreground hover:border-brand-border hover:text-brand"
          )}
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          Resume
        </a>
      </div>

      <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-border pt-6 text-left sm:gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="flex min-w-0 flex-col">
            <dt className="text-xs text-muted-foreground sm:text-sm">{stat.label}</dt>
            <dd className="order-first font-heading text-2xl font-bold text-foreground sm:text-3xl">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
