import Image from "next/image";
import Link from "next/link";
import type { ContentMeta } from "@/lib/markdown";

type ContentCardProps = ContentMeta & {
  compact?: boolean;
};

export default function ContentCard({
  collection,
  title,
  image,
  slug,
  date,
  category,
  excerpt,
  compact = false,
}: ContentCardProps) {
  const href = `/${collection}/${slug}`;

  if (compact) {
    return (
      <Link
        href={href}
        className="group grid grid-cols-[92px_1fr] gap-4 border-b border-slate-200 py-4 transition hover:border-[var(--brand-blue)]"
      >
        <div className="relative aspect-square overflow-hidden bg-slate-100">
          <Image
            src={image}
            alt={title}
            fill
            sizes="92px"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="min-w-0">
          <div className="mb-2 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">
            <time dateTime={date}>{date}</time>
            <span>{category}</span>
          </div>
          <h3 className="line-clamp-2 text-base font-black leading-snug text-[var(--brand-ink)] group-hover:text-[var(--brand-blue)]">
            {title}
          </h3>
        </div>
      </Link>
    );
  }

  return (
    <Link href={href} className="group block">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 520px"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="border-b border-slate-200 bg-white py-5">
        <div className="mb-3 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">
          <time dateTime={date}>{date}</time>
          <span>{category}</span>
        </div>
        <h3 className="text-2xl font-black leading-tight text-[var(--brand-ink)] group-hover:text-[var(--brand-blue)]">
          {title}
        </h3>
        <p className="mt-3 line-clamp-2 text-sm leading-7 text-slate-600">
          {excerpt}
        </p>
      </div>
    </Link>
  );
}
