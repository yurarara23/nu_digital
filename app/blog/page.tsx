import ContentCard from "@/components/content/ContentCard";
import { getLatestContent } from "@/lib/markdown";

export default function BlogPage() {
  const latestPosts = getLatestContent("blog", 50);

  return (
    <main className="mx-auto max-w-6xl px-5 py-14 md:py-20">
      <header className="mb-10 rounded-[2rem] bg-[var(--brand-blue)] px-6 py-10 text-white md:px-10">
        <p className="font-mono text-sm font-bold uppercase tracking-[0.3em] text-white/70">
          Journal
        </p>
        <h1 className="mt-3 text-5xl font-black tracking-tight">Blog</h1>
        <p className="mt-4 max-w-2xl text-white/80">
          活動報告、制作メモ、イベント参加記録など、メンバーの創作の足あとをまとめています。
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {latestPosts.map((post) => (
          <ContentCard key={post.slug} {...post} />
        ))}
      </div>
    </main>
  );
}
