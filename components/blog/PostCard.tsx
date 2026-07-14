import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import type { BlogPostMeta } from "@/lib/markdown";

export default function PostCard({
  title,
  image,
  slug,
  author,
  date,
}: BlogPostMeta) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group relative block w-full overflow-hidden border border-white/10 bg-gray-900/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
    >
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 360px"
          className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />

        <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/60 px-3 py-1 backdrop-blur-md">
          <p className="font-mono text-[15px] tracking-tighter text-cyan-400">
            {date}
          </p>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-[1px] w-8 bg-cyan-500" />
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-500/80">
            Blog
          </p>
        </div>

        <h3 className="mb-3 line-clamp-1 text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-cyan-400">
          {title}
        </h3>

        <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
          <p className="text-xs font-medium text-gray-500">
            by{" "}
            <span className="text-gray-300 transition-colors group-hover:text-white">
              {author}
            </span>
          </p>

          <div className="-translate-x-2 text-cyan-500 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            <FaArrowRight aria-hidden size={18} />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-cyan-500 transition-transform duration-500 group-hover:scale-x-100" />
    </Link>
  );
}
