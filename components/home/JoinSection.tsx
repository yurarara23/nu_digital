import { homeLinks, recruitImages } from "@/data/site";
import MotionReveal from "@/components/motion/MotionReveal";
import ButtonLink from "@/components/ui/ButtonLink";
import ImageCarousel from "@/components/ui/ImageCarousel";

export default function JoinSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <MotionReveal className="section-shell">
        <div className="grid items-start gap-12 border-t-4 border-[var(--brand-blue)] pt-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs font-black uppercase tracking-[0.3em] text-[var(--brand-blue)]">
              Recruit
            </p>
            <h2 className="mt-3 text-5xl font-black uppercase leading-none tracking-tight text-[var(--brand-ink)]">
              Join
              <br />
              nu_digital
            </h2>
            <p className="mt-7 text-base font-bold leading-8 text-slate-600">
              ゲーム、VRChat、3D、Web、映像、サウンドなど、デジタル創作に興味がある人を歓迎しています。
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
