import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import type { ContentPost } from "@/lib/markdown";

type ContentArticleProps = {
  post: ContentPost;
};

export default function ContentArticle({ post }: ContentArticleProps) {
  const authorIcon = `/icons/${post.author}.png`;

  return (
    <main className="min-h-screen pb-20 text-[var(--brand-ink)]">
      <div className="relative h-[42vh] min-h-[320px] w-full overflow-hidden bg-[var(--brand-blue)] md:h-[56vh]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-pale)] via-[rgba(0,74,173,0.35)] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto -mt-24 max-w-4xl px-5">
        <header className="mb-12 rounded-[2rem] border border-blue-100 bg-white p-7 shadow-xl shadow-blue-900/10 md:p-12">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[var(--brand-blue)] px-4 py-1 text-xs font-black uppercase tracking-[0.2em] text-white">
              {post.collection}
            </span>
            <span className="rounded-full bg-blue-50 px-4 py-1 text-xs font-bold text-[var(--brand-blue)]">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl font-black leading-tight tracking-tight md:text-5xl">
            {post.title}
          </h1>

          <div className="mt-8 flex items-center justify-between border-t border-blue-100 pt-6">
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-blue-100 bg-blue-50">
                <Image
                  src={authorIcon}
                  alt={post.author}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider text-slate-400">
                  Written by
                </p>
                <p className="font-bold text-[var(--brand-ink)]">{post.author}</p>
              </div>
            </div>

            <div className="hidden text-right sm:block">
              <p className="text-sm uppercase tracking-wider text-slate-400">
                Published
              </p>
              <time className="font-mono text-sm text-[var(--brand-blue)]" dateTime={post.date}>
                {post.date}
              </time>
            </div>
          </div>
        </header>

        <article className="prose prose-blue mx-auto max-w-none rounded-[2rem] bg-white p-7 shadow-sm prose-headings:tracking-tight prose-a:text-[var(--brand-blue)] prose-pre:border prose-pre:border-blue-100 prose-pre:bg-slate-950 md:p-10 lg:prose-lg">
          <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </article>
      </div>
    </main>
  );
}
