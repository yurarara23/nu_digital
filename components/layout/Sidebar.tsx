"use client";

import Link from "next/link";
import { FaHome, FaPenNib, FaTimes } from "react-icons/fa";
import { navItems, siteConfig } from "@/data/site";

const menuIcons = {
  Home: FaHome,
  Blog: FaPenNib,
  Project: FaPenNib,
  Terms: FaPenNib,
};

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      <aside
        aria-hidden={!open}
        className={`fixed left-0 top-0 z-50 h-full w-72 border-r border-cyan-500/30 bg-black/80 text-white backdrop-blur-xl transition-all duration-500 ease-in-out ${
          open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 p-6">
          <span className="text-xl font-black italic tracking-tighter text-cyan-400">
            MENU
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="メニューを閉じる"
            className="transition-transform duration-300 hover:rotate-90"
          >
            <FaTimes
              aria-hidden
              size={24}
              className="text-gray-400 hover:text-cyan-400"
            />
          </button>
        </div>

        <nav className="flex flex-col gap-2 p-6">
          {navItems.map((item) => {
            const Icon = menuIcons[item.name as keyof typeof menuIcons] ?? FaPenNib;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center gap-4 rounded-xl p-3 transition-all duration-300 hover:bg-cyan-500/10"
                onClick={onClose}
              >
                <span className="text-xl text-gray-500 transition-colors group-hover:text-cyan-400">
                  <Icon aria-hidden />
                </span>
                <span className="text-lg font-medium tracking-wide transition-transform duration-300 group-hover:translate-x-2">
                  {item.name}
                </span>
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-cyan-500 opacity-0 shadow-[0_0_8px_#06b6d4] transition-all group-hover:opacity-100" />
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-10 left-6">
          <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
            {siteConfig.name}
          </div>
        </div>
      </aside>

      {open && (
        <button
          type="button"
          aria-label="メニューを閉じる"
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-500"
          onClick={onClose}
        />
      )}
    </>
  );
}
