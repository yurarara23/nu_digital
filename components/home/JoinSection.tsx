import { homeLinks, recruitImages } from "@/data/site";
import ButtonLink from "@/components/ui/ButtonLink";
import ImageCarousel from "@/components/ui/ImageCarousel";
import SectionHeader from "@/components/ui/SectionHeader";

export default function JoinSection() {
  return (
    <section className="px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <SectionHeader title="Join nu_digital" />

        <div className="mt-10">
          <ImageCarousel images={recruitImages} />
        </div>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          {homeLinks.join.map((link) => (
            <ButtonLink key={link.href} href={link.href}>
              {link.label}
            </ButtonLink>
          ))}
        </div>
      </div>
    </section>
  );
}
