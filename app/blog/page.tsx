import ContentCard from "@/components/content/ContentCard";
import { getLatestContent } from "@/lib/markdown";

export default function BlogPage() {
  const latestPosts = getLatestContent("blog", 50);

  return (
    <main className="mx-auto max-w-6xl px-5 py-14 md:py-20">
      <header className="mb-12 border-b-4 border-[var(--brand-blue)] pb-6">
        <p className="font-mono text-sm font-black uppercase tracking-[0.3em] text-[var(--brand-blue)]">
          Journal
        </p>
        <h1 className="mt-3 text-6xl font-black uppercase leading-none tracking-tight text-[var(--brand-ink)] md:text-7xl">
          Blog
        </h1>
        <p className="mt-5 max-w-2xl text-base font-bold leading-8 text-slate-600">
          活動報告、制作メモ、イベント参加記録など、メンバーの創作の足あとをまとめています。
        </p>
      </header>

      <div className="grid min-w-0 gap-x-8 gap-y-10 md:grid-cols-2">
        {latestPosts.map((post) => (
          <ContentCard key={post.slug} {...post} />
        ))}
      </div>
    </main>
  );
}
