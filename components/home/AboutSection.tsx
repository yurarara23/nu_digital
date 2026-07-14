import Image from "next/image";
import { homeCopy, homeLinks, memberImages } from "@/data/site";
import MotionReveal from "@/components/motion/MotionReveal";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionHeader from "@/components/ui/SectionHeader";

export default function AboutSection() {
  return (
    <section className="py-16" aria-labelledby="about-heading">
      <MotionReveal className="section-shell">
        <div className="grid gap-10 rounded-[2.5rem] bg-white p-6 shadow-sm ring-1 ring-blue-100 md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader title="About Us" description={homeCopy.about} />
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              {homeLinks.about.map((link) => (
                <ButtonLink key={link.href} href={link.href}>
                  {link.label}
                </ButtonLink>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
            {memberImages.map((member) => (
              <div
                key={member.src}
                className="relative aspect-square overflow-hidden rounded-3xl bg-blue-50"
              >
                <Image
                  src={member.src}
                  alt={member.alt}
                  fill
                  sizes="(max-width: 768px) 28vw, 160px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
