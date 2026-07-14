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
    <main className="min-h-screen px-5 py-14 text-[var(--brand-ink)] md:py-20">
      <header className="mx-auto mb-10 max-w-3xl rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-blue-100">
        <p className="font-mono text-sm font-bold uppercase tracking-[0.3em] text-[var(--brand-blue)]">
          Terms
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
          利用規約
        </h1>
      </header>

      <article className="prose mx-auto max-w-3xl rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-blue-100 prose-p:leading-relaxed md:p-10">
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

        <footer className="mt-20 border-t border-blue-100 pt-8">
          <p className="font-mono text-sm tracking-widest text-slate-500">
            LAST UPDATED: 2026.05.25
          </p>
        </footer>
      </article>
    </main>
  );
}
