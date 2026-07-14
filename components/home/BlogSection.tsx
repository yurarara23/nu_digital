import Link from "next/link";
import ContentCard from "@/components/content/ContentCard";
import MotionReveal from "@/components/motion/MotionReveal";
import { getLatestContent } from "@/lib/markdown";

export default function BlogSection() {
  const latestNews = getLatestContent("news", 3);
  const latestPosts = getLatestContent("blog", 6);

  return (
    <section className="py-16">
      <div className="section-shell space-y-14">
        <MotionReveal>
          <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="rounded-[2rem] bg-[var(--brand-blue)] p-8 text-white">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-white/65">
                Information
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">News</h2>
              <p className="mt-4 text-sm leading-7 text-white/75">
                募集、イベント告知、サイト更新など、団体からのお知らせはこちら。
              </p>
              <Link
                href="/news"
                className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-[var(--brand-blue)]"
              >
                ニュース一覧
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {latestNews.map((post) => (
                <ContentCard key={post.slug} {...post} compact />
              ))}
            </div>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.08}>
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-[var(--brand-blue)]">
                Journal
              </p>
              <h2 className="mt-2 text-4xl font-black tracking-tight text-[var(--brand-ink)]">
                Blog
              </h2>
            </div>
            <Link
              href="/blog"
              className="rounded-full bg-white px-5 py-3 text-sm font-black text-[var(--brand-blue)] shadow-sm ring-1 ring-blue-100"
            >
              ブログ一覧
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <ContentCard key={post.slug} {...post} compact />
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
