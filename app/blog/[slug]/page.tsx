import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { siteConfig } from "@/data/site";
import { getAllPostSlugs, getPostBySlug } from "@/lib/markdown";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPostSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const description = post.content.replace(/\s+/g, " ").slice(0, 120);
  const imageUrl = post.image.startsWith("http")
    ? post.image
    : `${siteConfig.url}${post.image}`;

  return {
    title: post.title,
    description,
    openGraph: {
      title: post.title,
      description,
      url: `${siteConfig.url}/blog/${slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const authorIcon = `/icons/${post.author}.png`;

  return (
    <main className="min-h-screen bg-black pb-20 text-white">
      {post.image && (
        <div className="relative h-[40vh] w-full overflow-hidden md:h-[60vh]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>
      )}

      <div className="relative z-10 mx-auto -mt-20 max-w-4xl px-6">
        <header className="mb-12 border border-white/10 bg-gray-900/60 p-8 shadow-2xl backdrop-blur-xl md:p-12">
          <div className="mb-6 flex items-center gap-2">
            <span className="h-[2px] w-12 bg-cyan-500" />
            <span className="font-mono text-sm uppercase tracking-widest text-cyan-400">
              Blog
            </span>
          </div>

          <h1 className="mb-8 text-3xl font-black leading-tight tracking-tighter md:text-5xl">
            {post.title}
          </h1>

          <div className="flex items-center justify-between border-t border-white/10 pt-8">
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <Image
                  src={authorIcon}
                  alt={post.author}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider text-gray-400">
                  Written by
                </p>
                <p className="font-bold text-white">{post.author}</p>
              </div>
            </div>

            <div className="hidden text-right sm:block">
              <p className="text-sm uppercase tracking-wider text-gray-400">
                Published
              </p>
              <p className="font-mono text-sm text-cyan-500">{post.date}</p>
            </div>
          </div>
        </header>

        <article className="prose prose-invert prose-cyan mx-auto max-w-none prose-headings:italic prose-headings:tracking-tighter prose-pre:border prose-pre:border-white/10 prose-pre:bg-gray-900/50 lg:prose-xl">
          <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </article>
      </div>
    </main>
  );
}
