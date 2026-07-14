"use client";

import Link from "next/link";
import { FaHome, FaInfoCircle, FaPenNib, FaRegNewspaper, FaTimes } from "react-icons/fa";
import { navItems, siteConfig } from "@/data/site";

const menuIcons = {
  Home: FaHome,
  News: FaRegNewspaper,
  Blog: FaPenNib,
  Project: FaInfoCircle,
  Terms: FaInfoCircle,
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
        className={`fixed left-0 top-0 z-50 h-full w-80 bg-[var(--brand-blue)] text-white shadow-2xl transition-all duration-500 ease-in-out ${
          open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/15 p-6">
          <span className="text-xl font-black tracking-tight">{siteConfig.name}</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="メニューを閉じる"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
          >
            <FaTimes aria-hidden size={20} />
          </button>
        </div>

        <nav className="flex flex-col gap-2 p-6">
          {navItems.map((item) => {
            const Icon = menuIcons[item.name as keyof typeof menuIcons] ?? FaPenNib;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center gap-4 rounded-2xl p-4 text-white transition hover:bg-white hover:text-[var(--brand-blue)]"
                onClick={onClose}
              >
                <Icon aria-hidden className="text-lg" />
                <span className="text-lg font-black tracking-tight">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-8 left-6 right-6 rounded-3xl bg-white/10 p-5 text-sm leading-6 text-white/80">
          Digital creation project for games, VR, web and more.
        </div>
      </aside>

      {open && (
        <button
          type="button"
          aria-label="メニューを閉じる"
          className="fixed inset-0 z-40 bg-blue-950/45 backdrop-blur-sm"
          onClick={onClose}
        />
      )}
    </>
  );
}
