import Image from "next/image";
import { homeCopy, homeLinks, memberImages } from "@/data/site";
import MotionReveal from "@/components/motion/MotionReveal";
import ButtonLink from "@/components/ui/ButtonLink";

export default function AboutSection() {
  return (
    <section className="bg-[#f7f8fb] py-16 lg:py-24" aria-labelledby="about-heading">
      <MotionReveal className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="font-mono text-xs font-black uppercase tracking-[0.3em] text-[var(--brand-blue)]">
              About
            </p>
            <h2
              id="about-heading"
              className="mt-3 text-5xl font-black uppercase leading-none tracking-tight text-[var(--brand-ink)]"
            >
              We make
              <br />
              digital works.
            </h2>
            <p className="mt-7 text-base font-bold leading-8 text-slate-600">
              {homeCopy.about}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {homeLinks.about.map((link) => (
                <ButtonLink key={link.href} href={link.href}>
                  {link.label}
                </ButtonLink>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-4">
            {memberImages.map((member) => (
              <div
                key={member.src}
                className="relative aspect-[4/3] overflow-hidden bg-white"
              >
                <Image
                  src={member.src}
                  alt={member.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 180px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
