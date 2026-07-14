import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約",
};

const prohibitedActions = [
  "法令または公序良俗に反する行為",
  "当サイトや第三者の権利を侵害する行為",
  "当サイトの運営を妨害する行為",
  "その他、当サイトが不適切と判断する行為",
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <header className="mx-auto mb-12 max-w-3xl border-b border-cyan-500/20 pb-8">
        <h1 className="text-4xl font-black italic tracking-tighter text-white md:text-5xl">
          TERMS OF SERVICE
        </h1>
        <p className="mt-2 font-mono text-sm uppercase tracking-[0.3em] text-cyan-500">
          利用規約
        </p>
      </header>

      <article className="prose prose-invert prose-cyan mx-auto max-w-3xl prose-headings:italic prose-headings:tracking-tight prose-headings:text-cyan-400 prose-li:text-gray-400 prose-p:leading-relaxed prose-p:text-gray-400">
        <p>
          この利用規約は、nu_digitalがこのWebサイト上で提供する情報やコンテンツの利用条件を定めるものです。
        </p>

        <h2>第1条 適用</h2>
        <p>
          本規約は、ユーザーと当サイトとの間における本サイトの利用に関わる一切の関係に適用されます。
        </p>

        <h2>第2条 禁止事項</h2>
        <p>ユーザーは、以下の行為をしてはなりません。</p>
        <ul>
          {prohibitedActions.map((action) => (
            <li key={action}>{action}</li>
          ))}
        </ul>

        <h2>第3条 免責事項</h2>
        <p>
          当サイトは、本サイトに掲載する情報について、正確性、完全性、有用性を保証するものではありません。
        </p>

        <h2>第4条 規約の変更</h2>
        <p>
          当サイトは、必要と判断した場合、ユーザーに通知することなく本規約を変更できるものとします。
        </p>

        <footer className="mt-20 border-t border-white/5 pt-8">
          <p className="font-mono text-sm tracking-widest text-gray-500">
            LAST UPDATED: 2026.05.25
          </p>
        </footer>
      </article>
    </main>
  );
}
