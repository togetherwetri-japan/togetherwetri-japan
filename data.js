/* ==================================================================
   TogetherWeTri Japan ― サイトの内容ファイル（data.js）
   ------------------------------------------------------------------
   日々の更新は、基本的にこのファイルだけを編集します。
   ・メールアドレスやフォームの設定 …… SITE
   ・メンバー紹介 ………………………… MEMBERS
   ・イベント ………………………………… EVENTS
   ・ニュース／ニュースレター記事 …… POSTS
   ・問い合わせの種類 …………………… TOPICS

   書き方のルール
   1. 文字は必ず "ダブルクォート" で囲みます。文中に " を使うときは \" と書きます。
   2. 項目と項目の間は , （半角カンマ）で区切ります。カンマ忘れが一番多いミスです。
   3. 日付は "2026-11-14" の形（年-月-日、半角）で書きます。
      今日より前の日付のイベントは自動で「過去のイベント」に移ります。
   4. en が英語、ja が日本語です。両方入れてください。
   5. メンバーの写真は index.html と同じ場所（リポジトリの一番上）にアップロードし、photo: "ファイル名.jpg" と書きます。
   6. 一番簡単な追加方法は、既存の1件を丸ごとコピーして書き換えることです。

   保存後にサイトが真っ白になったり内容が消えたりしたら、
   直前に編集した箇所のカンマやクォートを確認してください。
   ================================================================== */

const SITE = {
  // 問い合わせ先メールアドレス（サイトに表示されます）
  email: "japan@example.org",

  // Formspree のフォームURL（例: "https://formspree.io/f/abcdwxyz"）
  // 入れると、問い合わせフォームから直接メールが届くようになります。
  // 空欄 "" のままだと、訪問者がメッセージをコピーして自分でメールする方式になります。
  formEndpoint: "",

  // ニュースレター登録用のURL（Googleフォームなど）。空欄ならメールでの申し込み案内を表示します。
  newsletterSignupUrl: ""
};

const MEMBERS = [
  { name: { en: "Member Name", ja: "氏名" }, role: { en: "Branch Lead", ja: "支部代表" }, aff: { en: "University / Organization · YTL 20XX", ja: "所属 · YTL 20XX年" }, bio: { en: "One or two sentences about this person's focus and why they joined.", ja: "専門分野や参加のきっかけを1〜2文で紹介します。" }, photo: "" },
  { name: { en: "Member Name", ja: "氏名" }, role: { en: "Deputy Lead", ja: "副代表" }, aff: { en: "University / Organization · YTL 20XX", ja: "所属 · YTL 20XX年" }, bio: { en: "One or two sentences about this person's focus and why they joined.", ja: "専門分野や参加のきっかけを1〜2文で紹介します。" }, photo: "" },
  { name: { en: "Member Name", ja: "氏名" }, role: { en: "Programs", ja: "企画担当" }, aff: { en: "University / Organization · YTL 20XX", ja: "所属 · YTL 20XX年" }, bio: { en: "One or two sentences about this person's focus and why they joined.", ja: "専門分野や参加のきっかけを1〜2文で紹介します。" }, photo: "" },
  { name: { en: "Member Name", ja: "氏名" }, role: { en: "Communications", ja: "広報担当" }, aff: { en: "University / Organization · YTL 20XX", ja: "所属 · YTL 20XX年" }, bio: { en: "One or two sentences about this person's focus and why they joined.", ja: "専門分野や参加のきっかけを1〜2文で紹介します。" }, photo: "" },
  { name: { en: "Member Name", ja: "氏名" }, role: { en: "Partnerships", ja: "渉外担当" }, aff: { en: "University / Organization · YTL 20XX", ja: "所属 · YTL 20XX年" }, bio: { en: "One or two sentences about this person's focus and why they joined.", ja: "専門分野や参加のきっかけを1〜2文で紹介します。" }, photo: "" },
  { name: { en: "Member Name", ja: "氏名" }, role: { en: "Community", ja: "コミュニティ担当" }, aff: { en: "University / Organization · YTL 20XX", ja: "所属 · YTL 20XX年" }, bio: { en: "One or two sentences about this person's focus and why they joined.", ja: "専門分野や参加のきっかけを1〜2文で紹介します。" }, photo: "" }
];
const MEMBERS_ARE_PLACEHOLDERS = true;  // 実際のメンバー情報に差し替えたら false にすると「テンプレート」表示が消えます

// sample: true の項目には「サンプル」表示が付きます。実際のイベントでは sample: false にするか、その行を消してください。
const EVENTS = [
  { date: "2026-11-14", time: "14:00–17:00 JST", sample: true,
    title: { en: "Trilateral Youth Dialogue: Economic Security in Practice", ja: "日米韓ユースダイアローグ：実践としての経済安全保障" },
    place: { en: "Tokyo (venue to be announced)", ja: "東京（会場は後日発表）" }, format: "inperson", langs: "EN / JA",
    desc: { en: "Small-group discussions on supply chains, export controls and what economic security means for students entering the workforce.", ja: "サプライチェーンや輸出管理、そしてこれから社会に出る学生にとって経済安全保障が何を意味するのかを、少人数で議論します。" } },
  { date: "2026-12-05", time: "10:00–11:30 JST", sample: true,
    title: { en: "Advanced Tech Cooperation Workshop: Semiconductors and AI", ja: "先端技術協力ワークショップ：半導体とAI" },
    place: { en: "Online", ja: "オンライン" }, format: "online", langs: "EN",
    desc: { en: "A joint session with peers in Seoul and Washington on how Japan, the U.S. and Korea divide and share work in critical technologies.", ja: "ソウル・ワシントンの仲間と合同で、重要技術分野における日米韓の役割分担と協力のあり方を考えます。" } },
  { date: "2027-01-23", time: "13:00–16:00 JST", sample: true,
    title: { en: "Local Communities × Trilateral Ties: Roundtable in Fukuoka", ja: "地域 × 日米韓：福岡ラウンドテーブル" },
    place: { en: "Fukuoka", ja: "福岡" }, format: "inperson", langs: "JA / EN",
    desc: { en: "Students, local businesses and city officials talk about cross-border links between Kyushu, Korea and the U.S.", ja: "学生、地元企業、自治体関係者が、九州と韓国・米国をつなぐ交流について語り合います。" } },
  { date: "2026-09-27", time: "", sample: true,
    title: { en: "Japan Branch Kickoff Meetup", ja: "日本支部キックオフ交流会" },
    place: { en: "Tokyo", ja: "東京" }, format: "inperson", langs: "EN / JA",
    desc: { en: "Our first gathering: introductions, plans for the year and a call for new team members.", ja: "最初の交流会。自己紹介、年間計画の共有、運営メンバーの募集を行いました。" } },
  { date: "2026-07-18", time: "", sample: true,
    title: { en: "Reading Group: The Camp David Documents", ja: "読書会：キャンプ・デービッド関連文書を読む" },
    place: { en: "Online", ja: "オンライン" }, format: "online", langs: "EN",
    desc: { en: "A close reading of the 2023 Camp David joint statement and principles, with discussion on what has happened since.", ja: "2023年のキャンプ・デービッド共同声明と原則を読み込み、その後の動きについて議論しました。" } }
];

const POST_CATS = {
  newsletter: { en: "Newsletter", ja: "ニュースレター", color: "#142F4C" },
  recap: { en: "Event recap", ja: "イベント報告", color: "#BE3431" },
  explainer: { en: "Explainer", ja: "解説", color: "#2C538E" },
  story: { en: "Member story", ja: "メンバーの声", color: "#28356A" }
};
const POSTS = [
  { date: "2026-10-01", cat: "newsletter", sample: true,
    title: { en: "Japan Branch Newsletter, Issue 1", ja: "日本支部ニュースレター 第1号" },
    excerpt: { en: "Our first issue: who we are, what is coming this autumn, and how to get involved.", ja: "創刊号。私たちの紹介、今秋の予定、参加方法をお届けします。" },
    body: { en: ["Welcome to the first newsletter from the TogetherWeTri Japan Branch. Each issue will bring you upcoming events, short recaps and one explainer on trilateral policy.", "This autumn we are hosting a youth dialogue on economic security in Tokyo and an online workshop on semiconductors and AI with peers in Seoul and Washington.", "We are also looking for new team members to help with programs, communications and local projects. If that sounds like you, write to us through the contact page."],
            ja: ["TogetherWeTri日本支部の最初のニュースレターへようこそ。毎号、今後のイベント、活動報告、日米韓の政策解説をお届けします。", "今秋は、東京での経済安全保障をテーマにしたユースダイアローグと、ソウル・ワシントンの仲間と合同で行う半導体・AIのオンラインワークショップを予定しています。", "企画・広報・地域プロジェクトを担う運営メンバーも募集中です。関心のある方は、お問い合わせページからご連絡ください。"] } },
  { date: "2026-09-30", cat: "recap", sample: true,
    title: { en: "Recap: Japan Branch Kickoff Meetup", ja: "報告：日本支部キックオフ交流会" },
    excerpt: { en: "What we heard at our first gathering in Tokyo, and the three priorities we set for the year.", ja: "東京での最初の交流会で出た声と、今年の3つの重点テーマ。" },
    body: { en: ["Our kickoff brought together YTL alumni, students and young professionals in Tokyo for an evening of introductions and planning.", "Participants asked for more events outside Tokyo, more chances to work directly with Korean and American peers, and plain-language explanations of trilateral agreements.", "Those three requests now shape our plans for the year."],
            ja: ["キックオフ交流会には、YTL修了生、学生、若手社会人が東京に集まり、自己紹介と今後の企画について話し合いました。", "参加者からは、東京以外でのイベントを増やしてほしい、韓国・米国の仲間と直接協働する機会がほしい、日米韓の合意を分かりやすく解説してほしい、という声が寄せられました。", "この3つの要望が、今年の活動計画の柱になっています。"] } },
  { date: "2026-08-15", cat: "explainer", sample: true,
    title: { en: "From Camp David to campus: what the 2023 commitments mean for young people", ja: "キャンプ・デービッドからキャンパスへ：2023年の合意は若者にとって何を意味するか" },
    excerpt: { en: "A short guide to the three Camp David documents and where youth fit in.", ja: "キャンプ・デービッドで発表された3つの文書と、若者の関わり方をまとめました。" },
    body: { en: ["At Camp David in August 2023, the leaders of Japan, the United States and Korea released three documents: a joint statement known as the Spirit of Camp David, the Camp David Principles, and a Commitment to Consult.", "Together they set out regular trilateral meetings and cooperation across security, economic security, technology and people-to-people exchange.", "People-to-people ties are where young people come in. Agreements between governments last longer when the people of the three countries know and trust each other."],
            ja: ["2023年8月のキャンプ・デービッドで、日米韓の首脳は3つの文書を発表しました。「キャンプ・デービッドの精神」と呼ばれる共同声明、「キャンプ・デービッド原則」、そして「協議するとのコミットメント」です。", "これらは、定期的な三か国会合の開催と、安全保障、経済安全保障、技術、人的交流にわたる協力を打ち出しています。", "若者が関われるのが、この人的交流の分野です。政府間の合意は、三か国の人々が互いを知り信頼し合うことで、より長く続くものになります。"] } },
  { date: "2026-07-20", cat: "story", sample: true,
    title: { en: "Why I joined: notes from a YTL alum", ja: "参加した理由：YTL修了生の声" },
    excerpt: { en: "A member reflects on what changed after the summit, and why the work has to continue locally.", ja: "サミット後に何が変わったのか、そしてなぜ地域で活動を続けるのか。メンバーが振り返ります。" },
    body: { en: ["Replace this sample with a real member story. A good story covers what the person expected from the YTL Summit, one moment that changed their view, and what they are working on now.", "Keep it to four or five short paragraphs and add a photo if you have one."],
            ja: ["このサンプルを実際のメンバーのストーリーに差し替えてください。YTLサミットに参加する前の期待、考えが変わった瞬間、現在取り組んでいることを書くと伝わりやすくなります。", "4〜5段落程度の短い文章にまとめ、写真があれば添えてください。"] } }
];

const TOPICS = [
  { id: "general", en: "General question", ja: "一般的なご質問" },
  { id: "event", en: "Event registration", ja: "イベント参加申し込み" },
  { id: "join", en: "Joining the team", ja: "運営メンバーへの応募" },
  { id: "partnership", en: "Partnership or co-hosting", ja: "連携・共催のご相談" },
  { id: "speaker", en: "Speaking or mentoring", ja: "登壇・メンター" },
  { id: "media", en: "Media", ja: "取材" },
  { id: "newsletter", en: "Newsletter subscription", ja: "ニュースレター購読" }
];
