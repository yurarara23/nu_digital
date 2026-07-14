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
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-cyan-500/20 bg-black/70 px-6 py-4 text-white shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-md">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            aria-label="メニューを開く"
            className="text-white transition-colors duration-300 hover:text-cyan-400"
          >
            <FaBars aria-hidden size={20} />
          </button>

          <Link href="/" className="group flex items-center gap-3">
            <span className="text-xl font-black italic tracking-tighter transition-colors duration-300 group-hover:text-cyan-400">
              {siteConfig.name}
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-6">
          {socialLinks.map((link) => {
            const Icon = socialIcons[link.type];

            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-gray-400 transition-all duration-300 hover:scale-110 hover:text-white"
              >
                <Icon aria-hidden size={20} />
              </a>
            );
          })}
        </div>
      </header>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
