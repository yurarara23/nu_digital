import ContentCard from "@/components/content/ContentCard";
import { getLatestContent } from "@/lib/markdown";

export default function NewsPage() {
  const latestNews = getLatestContent("news", 50);

  return (
    <main className="mx-auto max-w-6xl px-5 py-14 md:py-20">
      <header className="mb-10 rounded-[2rem] bg-white px-6 py-10 shadow-sm ring-1 ring-blue-100 md:px-10">
        <p className="font-mono text-sm font-bold uppercase tracking-[0.3em] text-[var(--brand-blue)]">
          Information
        </p>
        <h1 className="mt-3 text-5xl font-black tracking-tight text-[var(--brand-ink)]">
          News
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          サイト更新、募集、イベント告知など、nu_digitalからのお知らせを掲載します。
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {latestNews.map((post) => (
          <ContentCard key={post.slug} {...post} />
        ))}
      </div>
    </main>
  );
}
