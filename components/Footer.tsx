import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-12 px-6 mt-20 border-t border-cyan-500/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* 左側：ブランドロゴとコピーライト */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-black tracking-tighter italic text-xl">
              nu_digital
            </span>
          </div>
          <p className="text-gray-500 text-xs tracking-widest uppercase">
            &copy; 2026 nu_digital .
          </p>
        </div>

        {/* 右側：リンク類 */}
        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-400">
          <Link
            href="/terms"
            className="hover:text-cyan-400 transition-colors duration-300 relative group"
          >
            利用規約
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-500 transition-all duration-300 group-hover:w-full" />
          </Link>
          <a
            href="https://github.com/yurarara23/nu.meta"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <FaGithub size={18} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
