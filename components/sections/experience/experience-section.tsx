import { getAllExperience } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { InternshipCards } from "./internship-cards";

export function ExperienceSection() {
  const experiences = getAllExperience();

  return (
    <Section id="experience">
      <Reveal>
        <SectionHeader id="experience" index="03" label="Experience" title="Internship" />
      </Reveal>

      <InternshipCards experiences={experiences} />
    </Section>
  );
}
