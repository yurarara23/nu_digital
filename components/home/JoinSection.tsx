import { homeLinks, recruitImages } from "@/data/site";
import MotionReveal from "@/components/motion/MotionReveal";
import ButtonLink from "@/components/ui/ButtonLink";
import ImageCarousel from "@/components/ui/ImageCarousel";
import SectionHeader from "@/components/ui/SectionHeader";

export default function JoinSection() {
  return (
    <section className="py-16">
      <MotionReveal className="section-shell">
        <div className="grid items-center gap-10 rounded-[2.5rem] bg-white p-6 shadow-sm ring-1 ring-blue-100 md:p-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeader
              title="Join nu_digital"
              description="ゲーム、VRChat、3D、Web、映像、サウンドなど、デジタル創作に興味がある人を歓迎しています。"
            />

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              {homeLinks.join.map((link) => (
                <ButtonLink key={link.href} href={link.href}>
                  {link.label}
                </ButtonLink>
              ))}
            </div>
          </div>

          <ImageCarousel images={recruitImages} />
        </div>
      </MotionReveal>
    </section>
  );
}
