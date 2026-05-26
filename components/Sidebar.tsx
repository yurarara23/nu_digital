"use client";
import Link from "next/link";
import { FaTimes, FaHome, FaPenNib } from "react-icons/fa";

export default function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const menuItems = [
    { name: "Home", href: "/", icon: <FaHome /> },
    { name: "Blog", href: "/blog", icon: <FaPenNib /> },
  ];

  return (
    <>
      {/* サイドバー本体 */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-black/80 backdrop-blur-xl text-white
        border-r border-cyan-500/30 transform transition-all duration-500 ease-in-out z-50
        ${open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <span className="text-xl font-black tracking-tighter italic text-cyan-400">
            MENU
          </span>
          <button
            onClick={onClose}
            className="hover:rotate-90 transition-transform duration-300"
          >
            <FaTimes size={24} className="text-gray-400 hover:text-cyan-400" />
          </button>
        </div>

        <nav className="flex flex-col gap-2 p-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex items-center gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-cyan-500/10"
              onClick={onClose}
            >
              <span className="text-xl text-gray-500 group-hover:text-cyan-400 transition-colors">
                {item.icon}
              </span>
              <span className="text-lg font-medium tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                {item.name}
              </span>

              {/* ホバー時に右端に小さな光るポインターを表示 */}
              <span className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 shadow-[0_0_8px_#06b6d4] transition-all" />
            </Link>
          ))}
        </nav>

        {/* 下部の装飾要素 */}
        <div className="absolute bottom-10 left-6">
          <div className="text-[10px] text-gray-500 uppercase tracking-[0.3em]">
            Nu.Meta
          </div>
        </div>
      </aside>

      {/* 背景のオーバーレイ */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-500"
          onClick={onClose}
        ></div>
      )}
    </>
  );
}
