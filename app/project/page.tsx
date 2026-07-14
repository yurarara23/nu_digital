import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { featuredProjects } from "@/data/site";

export default function ProjectPage() {
  return (
    <main className="min-h-screen px-5 py-14 text-[var(--brand-ink)] md:py-20">
      <header className="mx-auto mb-12 max-w-6xl border-b-4 border-[var(--brand-blue)] pb-6">
        <p className="font-mono text-sm font-black uppercase tracking-[0.3em] text-[var(--brand-blue)]">
          Works
        </p>
        <h1 className="mt-3 text-6xl font-black uppercase leading-none tracking-tight md:text-7xl">
          Contents
        </h1>
        <p className="mt-5 max-w-2xl text-base font-bold leading-8 text-slate-600">
          nu_digitalの制作物や公開中のプロジェクトをまとめています。
        </p>
      </header>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <article key={project.title} className="group border-b border-slate-200 bg-white">
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 380px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="px-5 py-5 md:px-6">
              <h2 className="text-2xl font-black tracking-tight text-[var(--brand-ink)]">
                {project.title}
              </h2>
              <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 bg-[var(--brand-blue)] px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#003a88]"
              >
                View project
                <FaArrowRight aria-hidden size={14} />
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
