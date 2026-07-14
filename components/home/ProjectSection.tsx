import { homeCopy, homeLinks, projectImages } from "@/data/site";
import MotionReveal from "@/components/motion/MotionReveal";
import ButtonLink from "@/components/ui/ButtonLink";
import ImageCarousel from "@/components/ui/ImageCarousel";
import SectionHeader from "@/components/ui/SectionHeader";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";

export default function ProjectSection() {
  return (
    <section className="py-16">
      <MotionReveal className="section-shell">
        <div className="rounded-[2.5rem] bg-[var(--brand-blue)] p-6 text-white md:p-10">
          <SectionHeader title="Project" description={homeCopy.project} tone="dark" />

          <div className="mt-10">
            <ImageCarousel images={projectImages} />
          </div>

          <YouTubeEmbed videoId="HHPRAg5ijXE" title="nu_digital Project Movie" />

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            {homeLinks.project.map((link) => (
              <ButtonLink key={link.href} href={link.href} variant="light">
                {link.label}
              </ButtonLink>
            ))}
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
