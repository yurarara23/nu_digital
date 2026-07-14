import { homeCopy, homeLinks, projectImages } from "@/data/site";
import ButtonLink from "@/components/ui/ButtonLink";
import ImageCarousel from "@/components/ui/ImageCarousel";
import SectionHeader from "@/components/ui/SectionHeader";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";

export default function ProjectSection() {
  return (
    <section className="relative px-6 py-12 text-white">
      <div className="relative z-20 mx-auto max-w-6xl text-center">
        <SectionHeader title="Project" description={homeCopy.project} />

        <div className="mt-10">
          <ImageCarousel images={projectImages} />
        </div>

        <YouTubeEmbed videoId="HHPRAg5ijXE" title="nu_digital Project Movie" />

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          {homeLinks.project.map((link) => (
            <ButtonLink key={link.href} href={link.href}>
              {link.label}
            </ButtonLink>
          ))}
        </div>
      </div>
    </section>
  );
}
