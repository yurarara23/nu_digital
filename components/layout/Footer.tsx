import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { siteConfig, socialLinks } from "@/data/site";

const githubLink = socialLinks.find((link) => link.type === "github");

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-cyan-500/20 bg-black px-6 py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <div className="mb-2 flex items-center gap-2">
            <span className="text-xl font-black italic tracking-tighter">
              {siteConfig.name}
            </span>
          </div>
          <p className="text-xs uppercase tracking-widest text-gray-500">
            &copy; 2026 {siteConfig.name}.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-400">
          <Link
            href="/terms"
            className="group relative transition-colors duration-300 hover:text-cyan-400"
          >
            利用規約
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan-500 transition-all duration-300 group-hover:w-full" />
          </Link>

          {githubLink && (
            <a
              href={githubLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <FaGithub aria-hidden size={18} />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
