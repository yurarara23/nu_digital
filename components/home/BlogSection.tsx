import Image from "next/image";
import Link from "next/link";
import ContentCard from "@/components/content/ContentCard";
import MotionReveal from "@/components/motion/MotionReveal";
import { projectImages } from "@/data/site";
import { getLatestContent } from "@/lib/markdown";

export default function BlogSection() {
  const latestNews = getLatestContent("news", 4);
  const latestPosts = getLatestContent("blog", 4);
  const pickup = latestPosts[0];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="section-shell">
        <MotionReveal>
          <div className="mb-10 flex items-end justify-between border-b-4 border-[var(--brand-blue)] pb-4">
            <div>
              <p className="font-mono text-xs font-black uppercase tracking-[0.3em] text-[var(--brand-blue)]">
                Information
              </p>
              <h2 className="mt-2 text-5xl font-black uppercase tracking-tight text-[var(--brand-ink)]">
                News
              </h2>
            </div>
            <Link
              href="/news"
              className="text-sm font-black uppercase tracking-[0.18em] text-[var(--brand-blue)]"
            >
              View all
            </Link>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-0">
              {latestNews.map((post) => (
                <ContentCard key={post.slug} {...post} compact />
              ))}
            </div>

            {pickup && <ContentCard {...pickup} />}
          </div>
        </MotionReveal>

        <MotionReveal delay={0.08} className="mt-20">
          <div className="mb-8 flex items-end justify-between border-b border-slate-200 pb-4">
            <div>
              <p className="font-mono text-xs font-black uppercase tracking-[0.3em] text-[var(--brand-blue)]">
                Blog
              </p>
              <h2 className="mt-2 text-5xl font-black uppercase tracking-tight text-[var(--brand-ink)]">
                Updates
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-sm font-black uppercase tracking-[0.18em] text-[var(--brand-blue)]"
            >
              View all
            </Link>
          </div>

          <div className="grid gap-x-8 gap-y-2 md:grid-cols-2">
            {latestPosts.map((post) => (
              <ContentCard key={post.slug} {...post} compact />
            ))}
          </div>
        </MotionReveal>

        <MotionReveal delay={0.1} className="mt-20">
          <div className="grid gap-4 md:grid-cols-3">
            {projectImages.slice(0, 3).map((image, index) => (
              <Link
                key={image.src}
                href="/project"
                className="group relative aspect-[4/5] overflow-hidden bg-[var(--brand-blue)]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="font-mono text-xs font-black uppercase tracking-[0.28em] text-white/70">
                    Products
                  </p>
                  <h3 className="mt-2 text-3xl font-black uppercase tracking-tight">
                    Work 0{index + 1}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
