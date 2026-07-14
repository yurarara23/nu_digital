"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaGithub, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { siteConfig, socialLinks } from "@/data/site";
import Sidebar from "@/components/layout/Sidebar";

const socialIcons = {
  github: FaGithub,
  youtube: FaYoutube,
  x: FaXTwitter,
};

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-blue-100/80 bg-white/85 text-[var(--brand-ink)] shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              aria-label="メニューを開く"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--brand-blue)] text-white transition hover:scale-105"
            >
              <FaBars aria-hidden size={18} />
            </button>

            <Link href="/" className="group flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--brand-blue)] text-sm font-black text-white">
                nu
              </span>
              <span className="text-xl font-black tracking-tight transition-colors duration-300 group-hover:text-[var(--brand-blue)]">
                {siteConfig.name}
              </span>
            </Link>
          </div>

          <nav className="hidden items-center gap-7 text-sm font-bold md:flex">
            <Link href="/news" className="hover:text-[var(--brand-blue)]">
              News
            </Link>
            <Link href="/blog" className="hover:text-[var(--brand-blue)]">
              Blog
            </Link>
            <Link href="/project" className="hover:text-[var(--brand-blue)]">
              Project
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.type];

              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-[var(--brand-blue)] transition hover:-translate-y-0.5 hover:opacity-75"
                >
                  <Icon aria-hidden size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </header>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
