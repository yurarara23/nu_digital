---
title: "メタ創専用CMSができました"
image: "/yurarara/LCMS/title2.png"
author: "yurarara"
date: "2025-09-03"
---

## ブログが書きにくい？

「どのフォルダに画像を入れるの？」「そもそも環境構築で詰む」…  
そんな声に応えるために、**非エンジニアでも記事が書きやすい CMS** を開発しました。  
その名も **MetaCMS**。

MetaCMS は、記事をローカル環境で管理できるとても便利なアプリです。  
メタ創のホームページに直接投稿できる機能はまだ開発中ですが、しばらくはこのローカル CMS を使ってもらいます。

---

### 使い方

まず以下のコマンドを使って、リポジトリをデスクトップなどわかりやすい場所にクローンしてください。

```bash
git clone https://github.com/yurarara23/LocalCMS
```

クローンしたフォルダ内にある`setup.bat` を実行します。

<figure><img src="/yurarara/LCMS/2.png" alt="記事画像" style="width:50%"></figure>

この画面が表示されますが、そのまま実行してください。  
※ Python と pip をインストールしてパスを通しておかないとエラーになります。わからなかったら直接聞いてください。

---

その後、

<figure><img src="/yurarara/LCMS/3.png" alt="記事画像" style="width:100%"></figure>
このように表示されるので

```bash
yes
```

と入力してください。

少し待つとダウンロードが始まり、`setup complete` と表示されたら準備完了です。

<figure><img src="/yurarara/LCMS/4.png" alt="記事画像" style="width:100%"></figure>

※ Python と pip をインストールしてパスを通しておかないとエラーになります!!!

```python
where python
```

```python
where pip
```

↑ これを cmd で実行するとパスが通っているか確認できます。

---

セットアップが終了後、一度コマンド画面を閉じてフォルダ内の `app.bat` を実行すると、CMS が起動します。  
CMS をこれから起動するときは app.bat を使ってください。

<figure><img src="/yurarara/LCMS/title.png" alt="記事画像" style="width:100%"></figure>

---

### 記事の作成とエクスポート

「新規作成」から記事を書けます。

<figure><img src="/yurarara/LCMS/5.png" alt="記事画像" style="width:100%"></figure>

<figure><img src="/yurarara/LCMS/6.png" alt="記事画像" style="width:100%"></figure>

某技術ブログサービスのように、Markdown を編集しながらリアルタイムでプレビューできます。  
編集が終わったら一番下の「保存」ボタンを押し、記事作成完了です！

記事一覧から「export」をクリックすると記事と画像をセットでまとめた zip ファイルができるので
出力された zip ファイルを yurarara に渡してもらえれば、ホームページに人力でアップロードします。  
※ 将来的にはここも自動化しようと思ってる...

---

MetaCMS を使えば、メタ創のメンバーは今まで以上に簡単に記事作成＆共有ができます。  
デザイン、細かい機能などまだ修正点も多くあるので、ぜひ使いながらフィードバックをください！
