import { competitions } from "@/constants/competitions";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";

export function CompetitionsSection() {
  return (
    <Section id="competitions" tone="surface">
      <Reveal>
        <SectionHeader
          id="competitions"
          index="06"
          label="Competitions"
          title="Hackathons"
          description="Several of my projects started at hackathons. These are the ones I have taken part in."
        />
      </Reveal>

      <Reveal>
        <ol className="card-surface divide-y divide-border overflow-hidden rounded-2xl">
          {competitions.map((item) => (
            <li
              key={item.event}
              className="group grid gap-1 px-5 py-5 transition-colors hover:bg-secondary/60 sm:grid-cols-[10rem_1fr] sm:gap-6 sm:px-7"
            >
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground transition-colors group-hover:text-brand sm:pt-1">
                {item.date}
              </p>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground">{item.event}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
