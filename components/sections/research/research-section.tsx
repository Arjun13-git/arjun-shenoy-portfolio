import { getAllResearch } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { ResearchGrid } from "./research-grid";

export function ResearchSection() {
  const research = getAllResearch();

  return (
    <Section id="research">
      <Reveal>
        <SectionHeader
          id="research"
          index="05"
          label="Research"
          title="Research"
          description="Academic and independent research exploring machine learning, quantum computing, and applied AI through experimental projects and practical investigation."
        />
      </Reveal>

      <ResearchGrid papers={research} />
    </Section>
  );
}
