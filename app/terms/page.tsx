import Head from "next/head";

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>利用規約 | nu.digital</title>
      </Head>

      <main className="min-h-screen bg-black text-white py-20 px-6">
        <header className="max-w-3xl mx-auto mb-12 border-b border-cyan-500/20 pb-8">
          <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter text-white">
            TERMS OF SERVICE
          </h1>
          <p className="text-cyan-500 font-mono text-sm mt-2 uppercase tracking-[0.3em]">
            利用規約
          </p>
        </header>

        <article
          className="prose prose-invert prose-cyan mx-auto max-w-3xl
          prose-headings:text-cyan-400 prose-headings:italic prose-headings:tracking-tight
          prose-p:text-gray-400 prose-p:leading-relaxed
          prose-li:text-gray-400"
        >
          <p>
            この利用規約（以下、「本規約」といいます。）は、nu.digital（以下、「当サイト」といいます。）がこのウェブサイト上で提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。
          </p>

          <h2>第1条（適用）</h2>
          <p>
            本規約は、ユーザーと当サイトとの間の本サービスの利用に関わる一切の関係に適用されます。
          </p>

          <h2>第2条（禁止事項）</h2>
          <p>ユーザーは、以下の行為をしてはなりません。</p>
          <ul>
            <li>法令または公序良俗に違反する行為</li>
            <li>犯罪行為に関連する行為</li>
            <li>当サイトの運営を妨害する行為</li>
            <li>その他、当サイトが不適切と判断する行為</li>
          </ul>

          <h2>第3条（免責事項）</h2>
          <p>
            当サイトは、本サービスに事実上または法律上の瑕疵がないことを保証しません。
          </p>

          <h2>第4条（規約の変更）</h2>
          <p>
            当サイトは、必要と判断した場合には、ユーザーに通知することなく本規約を変更できるものとします。
          </p>

          <footer className="mt-20 pt-8 border-t border-white/5">
            <p className="text-sm font-mono tracking-widest text-gray-500">
              LAST UPDATED: 2026.05.25
            </p>
          </footer>
        </article>
      </main>
    </>
  );
}
