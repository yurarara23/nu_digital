import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import type { ContentMeta } from "@/lib/markdown";

type ContentCardProps = ContentMeta & {
  compact?: boolean;
};

export default function ContentCard({
  collection,
  title,
  image,
  slug,
  author,
  date,
  category,
  excerpt,
  compact = false,
}: ContentCardProps) {
  const href = `/${collection}/${slug}`;

  return (
    <Link
      href={href}
      className="group grid h-full overflow-hidden rounded-[1.75rem] border border-blue-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--brand-blue)] hover:shadow-xl hover:shadow-blue-900/10"
    >
      <div className={`relative overflow-hidden ${compact ? "h-40" : "h-56"}`}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 420px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-[var(--brand-blue)] shadow-sm">
          {category}
        </div>
      </div>

      <div className="flex flex-col gap-4 p-6">
        <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.18em] text-blue-900/55">
          <span>{collection}</span>
          <time dateTime={date}>{date}</time>
        </div>

        <div className="space-y-3">
          <h3 className="line-clamp-2 text-xl font-black leading-snug tracking-tight text-[var(--brand-ink)]">
            {title}
          </h3>
          {!compact && (
            <p className="line-clamp-3 text-sm leading-7 text-slate-600">
              {excerpt}
            </p>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-blue-50 pt-4 text-sm">
          <span className="font-bold text-slate-500">{author}</span>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--brand-blue)] text-white transition group-hover:translate-x-1">
            <FaArrowRight aria-hidden size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
