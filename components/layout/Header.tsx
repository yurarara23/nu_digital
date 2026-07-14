"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaGithub, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Sidebar from "@/components/layout/Sidebar";
import { navItems, siteConfig, socialLinks } from "@/data/site";

const socialIcons = {
  github: FaGithub,
  youtube: FaYoutube,
  x: FaXTwitter,
};

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const primaryNav = navItems.filter((item) => item.name !== "Terms");

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white text-[var(--brand-ink)] lg:fixed lg:inset-y-0 lg:left-0 lg:w-[104px] lg:border-b-0 lg:border-r">
        <div className="flex h-16 items-center justify-between px-4 lg:h-full lg:flex-col lg:px-0 lg:py-5">
          <Link
            href="/"
            aria-label={`${siteConfig.name} home`}
            className="grid h-12 w-12 place-items-center bg-[var(--brand-blue)] text-sm font-black text-white"
          >
            nu
          </Link>

          <nav className="hidden items-center gap-2 lg:flex lg:flex-col">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="vertical-nav-item text-[11px] font-black uppercase tracking-[0.18em] text-slate-500 transition hover:text-[var(--brand-blue)]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden flex-col items-center gap-4 lg:flex">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.type];

              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-slate-500 transition hover:text-[var(--brand-blue)]"
                >
                  <Icon aria-hidden size={18} />
                </a>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            aria-label="メニューを開く"
            className="inline-flex h-11 w-11 items-center justify-center border border-slate-200 text-[var(--brand-blue)] lg:hidden"
          >
            <FaBars aria-hidden size={18} />
          </button>
        </div>
      </header>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
