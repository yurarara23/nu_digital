import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { featuredProjects } from "@/data/site";

export default function ProjectPage() {
  return (
    <main className="min-h-screen px-5 py-14 text-[var(--brand-ink)] md:py-20">
      <section className="mx-auto mb-12 max-w-6xl rounded-[2.5rem] bg-[var(--brand-blue)] px-6 py-12 text-white md:px-10">
        <p className="font-mono text-sm font-bold uppercase tracking-[0.3em] text-white/65">
          Works
        </p>
        <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
          CONTENTS
        </h1>
        <p className="mt-5 max-w-2xl text-white/75">
          nu_digitalの制作物や公開中のプロジェクトをまとめています。
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 380px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-8">
              <h2 className="mb-3 text-2xl font-black tracking-tight text-[var(--brand-ink)]">
                {project.title}
              </h2>
              <p className="mb-8 line-clamp-3 text-sm leading-7 text-slate-600">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--brand-blue)] px-6 py-3 text-sm font-black tracking-widest text-white transition hover:-translate-y-0.5"
              >
                VIEW PROJECT
                <FaArrowRight aria-hidden size={16} />
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
