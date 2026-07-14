import Image from "next/image";
import { homeCopy, homeLinks, memberImages } from "@/data/site";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionHeader from "@/components/ui/SectionHeader";

export default function AboutSection() {
  return (
    <section className="relative px-6 py-12 text-white" aria-labelledby="about-heading">
      <div className="relative z-20 mx-auto max-w-6xl text-center">
        <SectionHeader title="About Us" description={homeCopy.about} />

        <div className="my-10 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
          {memberImages.map((member) => (
            <div
              key={member.src}
              className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-gray-900 shadow-lg"
            >
              <Image
                src={member.src}
                alt={member.alt}
                fill
                sizes="(max-width: 768px) 33vw, 180px"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          {homeLinks.about.map((link) => (
            <ButtonLink key={link.href} href={link.href}>
              {link.label}
            </ButtonLink>
          ))}
        </div>
      </div>
    </section>
  );
}
