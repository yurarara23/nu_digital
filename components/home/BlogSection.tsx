import Link from "next/link";
import PostCard from "@/components/blog/PostCard";
import { getLatestPosts } from "@/lib/markdown";

export default function BlogSection() {
  const latestPosts = getLatestPosts(20);

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div className="flex flex-col">
            <h2 className="text-5xl font-black uppercase italic leading-none tracking-tighter text-white">
              Blog
            </h2>
            <div className="mt-2 flex items-center gap-2">
              <span className="h-[2px] w-10 bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
              <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-cyan-500">
                Latest
              </p>
            </div>
          </div>

          <Link
            href="/blog"
            className="border-b border-gray-800 pb-1 text-xs font-bold uppercase tracking-widest text-gray-500 transition-colors hover:border-cyan-500 hover:text-cyan-400"
          >
            View All Blog
          </Link>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-12 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-12 bg-gradient-to-l from-black to-transparent" />

          <div className="custom-scrollbar hidden-scrollbar flex gap-6 overflow-x-auto pb-12">
            {latestPosts.map((post) => (
              <div key={post.slug} className="min-w-[280px] md:min-w-[320px]">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
