import ContentCard from "@/components/content/ContentCard";
import { getLatestContent } from "@/lib/markdown";

export default function NewsPage() {
  const latestNews = getLatestContent("news", 50);

  return (
    <main className="mx-auto max-w-6xl px-5 py-14 md:py-20">
      <header className="mb-12 border-b-4 border-[var(--brand-blue)] pb-6">
        <p className="font-mono text-sm font-black uppercase tracking-[0.3em] text-[var(--brand-blue)]">
          Information
        </p>
        <h1 className="mt-3 text-6xl font-black uppercase leading-none tracking-tight text-[var(--brand-ink)] md:text-7xl">
          News
        </h1>
        <p className="mt-5 max-w-2xl text-base font-bold leading-8 text-slate-600">
          サイト更新、募集、イベント告知など、nu_digitalからのお知らせを掲載します。
        </p>
      </header>

      <div className="grid min-w-0 gap-x-8 gap-y-10 md:grid-cols-2">
        {latestNews.map((post) => (
          <ContentCard key={post.slug} {...post} />
        ))}
      </div>
    </main>
  );
}
