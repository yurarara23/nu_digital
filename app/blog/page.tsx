import PostCard from "@/components/blog/PostCard";
import { getLatestPosts } from "@/lib/markdown";

export default function BlogPage() {
  const latestPosts = getLatestPosts(50);

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <header className="mb-10 border-b border-cyan-500/20 pb-8">
        <h1 className="text-5xl font-black uppercase italic tracking-tighter text-white">
          Blog
        </h1>
        <p className="mt-2 font-mono text-sm uppercase tracking-[0.3em] text-cyan-500">
          Latest Articles
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {latestPosts.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </div>
    </main>
  );
}
