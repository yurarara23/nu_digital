import { featuredProjects, homeCopy, homeLinks } from "@/data/site";
import MotionReveal from "@/components/motion/MotionReveal";
import ButtonLink from "@/components/ui/ButtonLink";
import ImageCarousel from "@/components/ui/ImageCarousel";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";

export default function ProjectSection() {
  const contentImages = featuredProjects.map((project) => ({
    src: project.image,
    alt: project.title,
  }));

  return (
    <section className="bg-[var(--brand-blue)] py-16 text-white lg:py-24">
      <MotionReveal className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="font-mono text-xs font-black uppercase tracking-[0.3em] text-white/65">
              Products
            </p>
            <h2 className="mt-3 text-5xl font-black uppercase leading-none tracking-tight md:text-6xl">
              Works &
              <br />
              projects
            </h2>
            <p className="mt-7 text-base font-bold leading-8 text-white/78">
              {homeCopy.project}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
              {homeLinks.project.map((link) => (
                <ButtonLink key={link.href} href={link.href} variant="light">
                  {link.label}
                </ButtonLink>
              ))}
            </div>
          </div>

          <div>
            <ImageCarousel images={contentImages} />
            <YouTubeEmbed videoId="HHPRAg5ijXE" title="nu_digital Project Movie" />
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
