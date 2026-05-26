"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-black/70 backdrop-blur-md border-b border-cyan-500/20 text-white shadow-[0_4_20px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-4">
          {/* サイドバーを開くボタンも Cyan ホバーに */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-white hover:text-cyan-400 transition-colors duration-300"
          >
            <FaBars size={20} />
          </button>

          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Logo"
                width={32}
                height={32}
                className="group-hover:scale-110 transition-transform duration-300"
              />
              {/* ロゴの背後にうっすら Cyan の光を配置 */}
              <div className="absolute inset-0 bg-cyan-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-black text-xl tracking-tighter italic transition-colors duration-300 group-hover:text-cyan-400">
              nu.digital
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-6">
          {/* GitHub */}
          <a
            href="https://github.com/yurarara23/nu.meta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <FaGithub size={20} />
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/channel/UCP50CAz2iyb8KKa3EV5BGKw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500 transition-all duration-300 hover:scale-110"
          >
            <FaYoutube size={20} />
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com/nuMetasou"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
          >
            <FaXTwitter size={20} />
          </a>
        </div>
      </header>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Header;
