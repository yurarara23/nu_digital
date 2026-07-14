import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { featuredProjects } from "@/data/site";

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <section className="mx-auto mb-20 max-w-5xl text-center">
        <h1 className="mb-4 text-6xl font-extrabold italic tracking-tighter text-white">
          CONTENTS
        </h1>
        <div className="mx-auto h-1 w-20 rounded-full bg-cyan-500" />
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-gray-900/40 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:border-cyan-500/50"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 380px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
            </div>

            <div className="p-8">
              <h2 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-cyan-400">
                {project.title}
              </h2>
              <p className="mb-8 line-clamp-2 h-12 text-sm leading-relaxed text-gray-400">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative inline-flex w-full items-center justify-center overflow-hidden rounded-xl border border-cyan-500/50 bg-transparent px-6 py-3 text-sm font-bold tracking-widest text-white transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] active:scale-95"
              >
                <span className="absolute inset-0 h-full w-full origin-left scale-x-0 bg-cyan-500 transition-transform duration-300 group-hover/btn:scale-x-100" />
                <span className="relative flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-black">
                  VIEW PROJECT
                  <FaArrowRight aria-hidden size={16} />
                </span>
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
