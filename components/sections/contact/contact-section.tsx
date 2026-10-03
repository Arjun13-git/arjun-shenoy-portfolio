import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { ContactInfo } from "./contact-info";

export function ContactSection() {
  return (
    <Section id="contact">
      <Reveal>
        <SectionHeader
          id="contact"
          index="07"
          label="Contact"
          title="Get in touch"
          description="I'm looking for internships in AI/ML, software engineering and related areas. Email is the best way to reach me."
        />
      </Reveal>

      <ContactInfo />
    </Section>
  );
}
