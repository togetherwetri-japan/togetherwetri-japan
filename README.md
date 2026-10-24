# TogetherWeTri Japan ウェブサイト 運用ガイド

このフォルダが、TogetherWeTri Japan のウェブサイト一式です。
GitHub Pages を使って **無料で** 公開・更新できます。

---

## ファイル構成

| ファイル | 内容 | 編集する頻度 |
|---|---|---|
| `data.js` | メールアドレス、メンバー、イベント、記事、フォーム設定 | **よく編集する**（日々の更新はほぼここだけ） |
| `index.html` | ページの文章（設立の背景、年表、FAQ など）とデザイン | ときどき |
| `app.js` | サイトの動きのプログラム | 基本的に触らない |
| `banner.webp` などの画像 | ロゴ、マスコット、バナーなどの画像（`index.html` と同じ場所に置きます） | 画像を差し替えるとき |

> パソコンで `index.html` をダブルクリックすると、公開前でもブラウザで見た目を確認できます。

---

## 1. 初めて公開する（GitHub Pages・無料）

### ① GitHub アカウントを作る
1. https://github.com で「Sign up」から無料アカウントを作成します。
2. 個人アカウントではなく **団体用アカウント**（例：`togetherwetri-japan`、団体の共有メールで登録）を作ると、メンバーが交代しても引き継ぎが簡単です。

### ② リポジトリ（サイトの保管場所）を作る
1. 右上の「＋」→「New repository」を選びます。
2. **Repository name** を決めます。
   - **おすすめ：** アカウント名と同じ `アカウント名.github.io`（例：`togetherwetri-japan.github.io`）にすると、URLが `https://togetherwetri-japan.github.io/` とシンプルになります。
   - それ以外の名前（例：`website`）だと、URLは `https://アカウント名.github.io/website/` になります。
3. **Public** を選びます（無料プランで公開するには Public が必要です）。
4. 「Create repository」を押します。

### ③ ファイルをアップロードする
1. 作成直後の画面にある「**uploading an existing file**」をクリックします。
2. `index.html`、`data.js`、`app.js`、`README.md` と、すべての画像ファイルをまとめてドラッグ＆ドロップします。
   - 画像はフォルダに入れず、`index.html` と同じ場所（一番上の階層）に置きます。
3. 一番下の「**Commit changes**」を押します。

### ④ 公開をオンにする
1. リポジトリ上部の「**Settings**」→ 左メニューの「**Pages**」を開きます。
2. 「Build and deployment」の **Source** を「Deploy from a branch」にします。
3. **Branch** を「main」、フォルダを「/ (root)」にして「Save」を押します。
4. 1〜5分ほど待って Pages の画面を再読み込みすると、上部に公開URLが表示されます。これで公開完了です。

---

## 2. 内容を更新する（data.js）

### 基本の手順
1. GitHub のリポジトリで `data.js` をクリックします。
2. 右上の **鉛筆アイコン（Edit this file）** を押します。
3. 文字を書き換えます。
4. 右上の「**Commit changes...**」→ もう一度「Commit changes」を押します。
5. 1〜2分でサイトに反映されます。反映されないときは、ブラウザで強制再読み込み（Windows：`Ctrl + Shift + R`、Mac：`Cmd + Shift + R`）をしてください。

### 書き方のルール（大事）
- 文字は `"ダブルクォート"` で囲みます。
- 項目の間は `,`（半角カンマ）で区切ります。**カンマ忘れが一番多いミスです。**
- 日付は `"2026-11-14"` の形で書きます。
- `en` が英語、`ja` が日本語です。
- **新しく追加するときは、既存の1件を丸ごとコピーして書き換えるのが一番安全です。**

### イベントを追加する
`const EVENTS = [` の直後に、次のブロックを貼り付けて書き換えます。

```js
  { date: "2026-12-20", time: "14:00–16:00 JST", sample: false,
    title: { en: "Year-end Meetup", ja: "年末交流会" },
    place: { en: "Tokyo, Shibuya", ja: "東京・渋谷" }, format: "inperson", langs: "EN / JA",
    desc: { en: "A casual evening to look back on the year.", ja: "1年を振り返る気軽な交流会です。" } },
```

- `format` はオンラインなら `"online"`、対面なら `"inperson"` と書きます。
- 開催日を過ぎたイベントは、自動で「過去のイベント」に移ります。
- 「申し込む」ボタンを押すと、イベント名が入った状態で問い合わせフォームが開きます。

### 記事・ニュースレターを追加する
`const POSTS = [` の直後に貼り付けます。`cat`（カテゴリー）は次の4つから選びます。

- `"newsletter"`：ニュースレター
- `"recap"`：イベント報告
- `"explainer"`：解説
- `"story"`：メンバーの声

```js
  { date: "2026-11-01", cat: "newsletter", sample: false,
    title: { en: "Japan Branch Newsletter, Issue 2", ja: "日本支部ニュースレター 第2号" },
    excerpt: { en: "One-line summary shown on the card.", ja: "カードに表示される一行の要約。" },
    body: { en: ["First paragraph.", "Second paragraph."],
            ja: ["1段落目。", "2段落目。"] } },
```

`body` は段落ごとに `"..."` で区切り、`,` でつなぎます。

### メンバーを登録する
1. 写真を用意します。正方形に近い jpg か png で、小さいファイル（500KB以下）が目安です。
2. リポジトリのトップページで「Add file」→「Upload files」から写真をアップロードします。名前は `member-tanaka.jpg` のように半角英数字にしてください。
3. `data.js` の `MEMBERS` を書き換え、`photo: "member-tanaka.jpg"` のように指定します。
4. 全員の情報に差し替えたら、`MEMBERS_ARE_PLACEHOLDERS` を `false` にします。これで「テンプレート」の注意書きが消えます。

### サンプルを消す
最初から入っているイベントと記事は **すべてサンプル**（`sample: true`）です。実際の内容を入れたら、サンプルのブロックは削除してください。

### もし壊れてしまったら
サイトが真っ白になる、内容が消える、といった場合は、直前の編集でカンマやクォートが抜けていることがほとんどです。

GitHub で `data.js` を開き「**History**」を押すと、過去の版がすべて残っています。正常だった版を開いて内容をコピーし、貼り戻せば元に戻ります。

---

## 3. 問い合わせフォームでメールを受け取る（Formspree・無料）

設定しない場合は、訪問者がメッセージをコピーして自分でメールを送る方式になります。
次の設定をすると、フォームから直接メールが届きます。

1. https://formspree.io で、問い合わせを受け取りたいメールアドレスを使って無料登録します。
2. 「New Form」でフォームを作ると、`https://formspree.io/f/xxxxxxx` のようなURLが表示されるので、コピーします。
3. `data.js` の `formEndpoint: ""` の `""` の中に貼り付けます。
   ```js
   formEndpoint: "https://formspree.io/f/xxxxxxx",
   ```
4. 公開サイトから試しに1通送ってみます。初回は Formspree から確認メールが届くことがあります。

**無料プランの範囲：** 月50件まで、受信履歴の保存は30日、通知先メールは2件まで。
件数が足りなくなったら、Googleフォームへのリンクに切り替える方法もあります。

---

## 4. ニュースレターの登録受付（Googleフォーム・無料）

1. Googleフォームで「お名前」「メールアドレス」の項目を作ります。
2. 右上の「送信」→ リンクのアイコンからURLをコピーします。
3. `data.js` の `newsletterSignupUrl: ""` に貼り付けると、ニュースページに「購読する」ボタンが出ます。
4. 回答はスプレッドシートで管理できます。配信は、Gmail の BCC や Google グループなど、無料の方法で始められます。

---

## 5. メールアドレスを設定する

`data.js` の先頭にある `email: "japan@example.org"` を、実際の団体アドレスに書き換えてください。
サイト内のメール表示とコピー機能に使われます。

---

## 6. ページの文章を変える（index.html）

設立の背景、年表、活動内容、FAQ などの文章は `index.html` に書かれています。

1. GitHub で `index.html` を開き、鉛筆アイコンを押します。
2. `Ctrl + F`（Mac は `Cmd + F`）で、変えたい文章を検索します。
3. 英語は `<span class="en">…</span>`、日本語は `<span class="ja">…</span>` の中にあります。**両方とも**書き換えてください。
4. `<` や `>` で始まるタグ部分は消さないように注意してください。

---

## 7. SNS でのリンク表示を整える

公開URLが決まったら、`index.html` の上の方にある次の行を、絶対URLに書き換えてください。
こうすると、X や Facebook、LINE でリンクを共有したときにロゴ画像が表示されます。

```html
<meta property="og:image" content="https://あなたのURL/og.png">
```

---

## 8. 運営メンバーにも編集してもらう

リポジトリの「**Settings**」→「**Collaborators**」→「Add people」から、メンバーの GitHub アカウントを招待します。
招待されたメンバーも、同じ手順で編集できるようになります。

---

## 9. 画像を差し替える

リポジトリのトップページに **同じファイル名** でアップロードすると、上書きされます。

| ファイル | 内容 |
|---|---|
| `banner.webp` | トップの東京イラスト |
| `logo.png` | ロゴ全体 |
| `mark.png` | ヘッダーのロゴマーク |
| `hanul.png` / `hank.png` / `haru.png` | マスコット（背景は透明） |
| `favicon.png` | ブラウザのタブに出るアイコン |
| `og.png` | SNS 共有用の画像（1200×630） |

解像度の高い元データがあれば、差し替えるとより鮮明になります。

---

## 10. 独自ドメインを使う（任意・有料）

`togetherwetri.jp` のような独自ドメインを使いたい場合の手順です。

1. ドメインを取得します（年に数千円程度。ここだけ費用がかかります）。
2. 「Settings」→「Pages」→「**Custom domain**」に入力します。
3. ドメイン会社の管理画面で、GitHub の案内どおりに DNS を設定します。

設定するまでは、`github.io` のURLのまま無料で運用できます。

---

## 11. イベントのポスターとレポートを載せる

`data.js` の各イベントに、次の2つの項目を追加できます。

| 項目 | 書き方 | 表示 |
|---|---|---|
| `photo`（または `poster`） | `photo: "poster-sendai1010.jpg"` | イベントの右側にポスターが表示され、押すと拡大されます |
| `report` | `report: "report-sendai1010.pdf"` または `report: "https://drive.google.com/..."` | 「イベントレポート」ボタンが表示され、押すと別のタブで開きます |

### 例

```js
  { date: "2026-10-10", time: "14:00–17:00 JST", sample: false,
    title: { en: "...", ja: "..." },
    place: { en: "...", ja: "..." }, format: "inperson / online", langs: "EN / JA",
    desc: { en: "...", ja: "..." },
    photo: "poster-sendai1010.jpg",
    report: "https://drive.google.com/file/d/xxxxxxxx/view" },
```

### レポートの置き方

- **PDF をサイトに置く場合：** PDF をリポジトリのトップページにアップロードし、`report: "ファイル名.pdf"` と書きます。PDF の場合はボタンに「(PDF)」と付きます。GitHub の画面からアップロードできるのは 1 ファイル 25MB までです。
- **Google ドライブの場合：** ファイルを右クリック →「共有」→ 一般的なアクセスを「**リンクを知っている全員**」に変更してからリンクをコピーし、`report: "https://drive.google.com/..."` に貼り付けます。共有設定を変えないと、閲覧者には「アクセス権が必要です」と表示されてしまいます。

### 開催形式（format）の書き方

| 書き方 | 表示 |
|---|---|
| `"inperson"` | 対面 |
| `"online"` | オンライン |
| `"inperson / online"` または `"hybrid"` | ハイブリッド（対面・オンライン） |

### ポスター画像のコツ

- **画像形式：** 印刷用の CMYK 形式の JPG は、ブラウザによって色がずれることがあります。RGB で書き出してください。
- **サイズ：** 長辺 1600px 程度、1MB 以下が目安です。大きすぎるとページの表示が遅くなります。
