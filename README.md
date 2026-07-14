# nu_digital website

nu_digital の公式ホームページです。

ゲーム制作、VRChat ワールド、3D、Web、映像、サウンドなどの活動を紹介し、ニュース・ブログ・公開コンテンツを管理します。

## 使用技術

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- React Markdown
- gray-matter
- remark-gfm
- rehype-raw
- react-icons
- ESLint

## 開発方法

初回は依存関係をインストールします。

```powershell
npm.cmd install
```

開発サーバーを起動します。

```powershell
npm.cmd run dev
```

通常は次のURLで確認できます。

```txt
http://localhost:3000
```

ビルド確認をします。

```powershell
npm.cmd run build
```

Lint確認をします。

```powershell
npm.cmd run lint
```

## サイト構成

```txt
app/
  page.tsx              トップページ
  layout.tsx            共通レイアウト
  globals.css           全体スタイル・ブランドカラー
  blog/
    page.tsx            ブログ一覧
    [slug]/page.tsx     ブログ詳細
  news/
    page.tsx            ニュース一覧
    [slug]/page.tsx     ニュース詳細
  project/page.tsx      公開コンテンツ一覧
  terms/page.tsx        利用規約

components/
  home/                 トップページの各セクション
  layout/               Header / Sidebar / Footer
  content/              記事カード・記事本文
  ui/                   汎用UI
  motion/               Framer Motionラッパー

content/
  blog/                 ブログ記事Markdown
  news/                 ニュース記事Markdown

data/
  site.ts               サイト設定、ナビ、リンク、公開コンテンツ

lib/
  markdown.ts           Markdown読み込み処理

public/
  contents/             公開VRChatコンテンツ画像
  member/               メンバー紹介画像
  2026_6/               記事用画像
  ...                   その他画像
```

## デザイン管理

ブランドカラーなどの基本色は `app/globals.css` のCSS変数で管理します。

```css
:root {
  --brand-blue: #004aad;
  --brand-white: #ffffff;
  --brand-ink: #071b3f;
  --brand-pale: #f7f8fb;
  --brand-line: #d9e2f4;
}
```

サイト全体で使う文言、ナビゲーション、SNSリンク、トップページの画像、公開コンテンツは `data/site.ts` にまとめています。

## 記事追加方法

記事は Markdown で追加します。

ブログ記事は `content/blog/` に追加します。

```txt
content/blog/my-article.md
```

ニュース記事は `content/news/` に追加します。

```txt
content/news/my-news.md
```

ファイル名がURLになります。

```txt
content/blog/iwakenlab-5th-mini-exhibit.md
→ /blog/iwakenlab-5th-mini-exhibit
```

### Frontmatter

記事の先頭に次の情報を書きます。

```md
---
title: "記事タイトル"
image: "/2026_6/example.jpg"
author: "yurarara"
date: "2026-07-14"
category: "Event"
excerpt: "一覧に表示する短い説明文です。"
---

本文を書きます。
```

### 画像の置き場所

記事用画像は `public/` 配下に置きます。

例:

```txt
public/2026_6/example.jpg
```

Markdownからは次のように参照します。

```md
![説明文](/2026_6/example.jpg)
```

HTMLタグも使えます。

```html
<figure>
  <img src="/2026_6/example.jpg" alt="説明文" style="width:100%">
  <figcaption>キャプション</figcaption>
</figure>
```

YouTubeを埋め込む場合:

```html
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="動画タイトル"
  style="width:100%; aspect-ratio:16/9; border:0;"
  allowfullscreen
></iframe>
```

## 公開コンテンツ追加方法

VRChat ワールドなどの公開コンテンツは `data/site.ts` の `featuredProjects` に追加します。

画像は `public/contents/` に置きます。

```txt
public/contents/my-world.png
```

`data/site.ts` に追加します。

```ts
export const featuredProjects = [
  {
    title: "World Name",
    description: "ワールドの説明文です。",
    image: "/contents/my-world.png",
    link: "https://vrchat.com/home/world/xxxxxxxx/info",
  },
];
```

ここに追加したコンテンツは、次の場所に反映されます。

- `/project`
- トップページの Works / VRChat World 表示
- トップページの Works カルーセル

## 現在の公開コンテンツ

- nu_room
- FogLand
- DimensionsGate

画像は `public/contents/` にあります。

## 運用メモ

- 記事本文を増やすだけなら `content/blog` または `content/news` にMarkdownを追加します。
- 公開作品を増やす場合は `public/contents` に画像を置き、`data/site.ts` の `featuredProjects` に追加します。
- デザインの色を変える場合は、まず `app/globals.css` のCSS変数を変更します。
- トップページの構成を変える場合は `components/home/` を編集します。
