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
  email: "togetherwetri.japan@gmail.com",

  // Formspree のフォームURL（例: "https://formspree.io/f/abcdwxyz"）
  // 入れると、問い合わせフォームから直接メールが届くようになります。
  // 空欄 "" のままだと、訪問者がメッセージをコピーして自分でメールする方式になります。
  formEndpoint: "",

  // ニュースレター登録用のURL（Googleフォームなど）。空欄ならメールでの申し込み案内を表示します。
  newsletterSignupUrl: ""
};

const MEMBERS = [
  { name: { en: "Sora Yamasaki", ja: "山﨑蒼空" }, role: { en: "ROLE", ja: "役職" }, aff: { en: "Japan Institue for Health Security · YTL 2025 Osaka", ja: "国立健康危機管理研究機構 · YTL 2025年" }, bio: { en: "One or two sentences about this person's focus and why they joined.", ja: "専門分野や参加のきっかけを1〜2文で紹介します。" }, photo: "member-sora.jpg" },
  { name: { en: "Mayu Kitahara", ja: "北原真悠" }, role: { en: "ROLE", ja: "役職" }, aff: { en: "Sophia University · YTL 2025 Osaka", ja: "所属 · YTL 2025年" }, bio: { en: "One or two sentences about this person's focus and why they joined.", ja: "専門分野や参加のきっかけを1〜2文で紹介します。" }, photo: "" },
  { name: { en: "Tamaki Hoshi", ja: "星たまき" }, role: { en: "ROLE", ja: "役職" }, aff: { en: "University / Organization · YTL 2024 Busan", ja: "所属 · YTL 2024年" }, bio: { en: "One or two sentences about this person's focus and why they joined.", ja: "専門分野や参加のきっかけを1〜2文で紹介します。" }, photo: "" },
  { name: { en: "Aruto Masuda", ja: "氏名" }, role: { en: "ROLE", ja: "役職" }, aff: { en: "University / Organization · YTL 20XX", ja: "所属 · YTL 20XX年" }, bio: { en: "One or two sentences about this person's focus and why they joined.", ja: "専門分野や参加のきっかけを1〜2文で紹介します。" }, photo: "" },
  { name: { en: "Member Name", ja: "氏名" }, role: { en: "Partnerships", ja: "渉外担当" }, aff: { en: "University / Organization · YTL 20XX", ja: "所属 · YTL 20XX年" }, bio: { en: "One or two sentences about this person's focus and why they joined.", ja: "専門分野や参加のきっかけを1〜2文で紹介します。" }, photo: "" },
  { name: { en: "Member Name", ja: "氏名" }, role: { en: "Community", ja: "コミュニティ担当" }, aff: { en: "University / Organization · YTL 20XX", ja: "所属 · YTL 20XX年" }, bio: { en: "One or two sentences about this person's focus and why they joined.", ja: "専門分野や参加のきっかけを1〜2文で紹介します。" }, photo: "" }
];
const MEMBERS_ARE_PLACEHOLDERS = false;  // 実際のメンバー情報に差し替えたら false にすると「テンプレート」表示が消えます

// sample: true の項目には「サンプル」表示が付きます。実際のイベントでは sample: false にするか、その行を消してください。
const EVENTS = [
  { date: "2026-10-10", time: "14:00–17:00 JST", sample: false,
    title: { en: "Japan-U.S.-ROK Youth Dialogue: Innovation & Resilience", ja: "日米韓の次世代がつくるイノベーションとレジリエンス" },
    place: { en: "Sendai (INTILAQ Tohoku Innovation Center)", ja: "仙台（INTILAQ 東北イノベーションセンター）" }, format: "inperson / online", langs: "EN / JA",
    desc: { en: "This event brings together young people from Japan, the United States, and the Republic of Korea in Sendai to explore new forms of cooperation across national and cultural boundaries. Featuring experts and emerging leaders from the three countries, the event focuses on innovation, resilience, and regional revitalization across various fields. It provides an opportunity for participants to engage in dialogue and collectively envision new ways for the next generation to advance trilateral cooperation.", ja: "本イベントは、日本・米国・韓国の若者が仙台に集結し、国や立場の違いを越えて「協力」の新しいかたちを語り合う対話イベントです。様々な分野におけるイノベーション（革新）やレジリエンス（回復力）、地方創生をテーマに、日米韓の有識者や若手リーダーをお招きし、次世代の「協力」のあり方を参加者の皆さまと共に考える機会となっております。" }
   , organizer:{en:"INTILAQ Tohoku Innovation Center, zero to one, Inc.", ja: "INTILAQ東北イノベーションセンター, 株式会社 zero to one" }, support: {en:"Sendai City, United States Embassy, Consulate General of the Republic of Korea in Sendai", ja: "仙台市、在日米国大使館、駐仙台大韓民国総領事館"},
  photo: "poster-sendai1010.jpg", report: "report-sendai1010.pdf"},
   { date: "2026-06-13", time: "10:00 – 14:00 JST", sample: false,
    title: { en: "Trilateral Sports Diplomacy Dialogue in Tokyo – From Olympic Legacy to Sports Diplomacy"},
    place: { en: "Hosei University Ichigaya Campus, Fujimi Gate G401"}, format: "inperson", langs: "EN",
    desc: { en: "Building on TogetherWeTri’s trilateral youth network and JASC’s student-led U.S.-Japan exchange legacy since 1934, this forum will expand people-to-people dialogue into a practical U.S.–ROK–Japan framework. The program will explore how next-generation leaders and experienced professionals can work together to strengthen public diplomacy, regional cooperation, and a secure and prosperous Indo-Pacific.", ja: "TogetherWeTriが築いてきた日米韓の若者ネットワークと、1934年以来、学生主体の日米交流を続けてきたJASCの伝統を基盤に、本フォーラムでは、人と人との対話を日米韓三か国の実践的な協力の枠組みへと発展させます。" }
   , photo: "poster-tokyo0613.jpg", report: "report-tokyo0613.pdf"},
    { date: "2026-06-12 ~ 2026-06-13", sample: false,
    title: { en: "Now It is your Turn"}, format: "inperson", langs: "EN",
    desc: { en: "A youth-led U.S.–ROK–Japan initiative building on the 2026 YTL Alumni Workshop in Honolulu to co-create practical counter-speech and media literacy learning tools for high school classrooms. Bringing together YTL and Trilateral Teacher Training (TTT) alumni, the project connects freedom of speech, responsible communication, and journalism with classroom practice and community-based learning.",
           ja: "2026年のホノルルYTL同窓生ワークショップを発展させ、日米韓の若者が協働し、高校で活用できるカウンタースピーチとメディアリテラシーの教材を共創する取り組みです。YTL・日韓合同英語教員養成プログラム(TTT)修了生が連携し、表現の自由や責任あるコミュニケーション、ジャーナリズムへの理解を、授業や地域社会での実践につなげます。" }
   ,support: {en:"U.S. Embassy Seoul, U.S. Embassy Tokyo, Korea Japan English Camp (KJEC), the East-West Center, the Future of Free Speech", ja: "在韓米国大使館, 在日米国大使館, Korea Japan English Camp (KJEC), the East-West Center, the Future of Free Speech"},
     photo: "poster-tokyo0612.jpg", report: "report-tokyo0612.pdf"},
  { date: "2026-03-08", time: "11:00 – 13:00 JST", sample: false,
    title: { en: "Trilateral Sports Diplomacy Dialogue in Tokyo – From Olympic Legacy to Sports Diplomacy"},
    place: { en: "Lakeland University Japan Conference Room (Muskie Hall)"}, format: "inperson", langs: "EN",
    desc: { en: "This session will explore how sports, Olympic legacy, and urban engagement can contribute to public diplomacy and future trilateral collaboration", ja: "本セッションでは、スポーツを通じた人と人とのつながりが、次世代の国際協力や公共外交にどのような可能性をもたらすのかをテーマに、専門家やリーダーとともに議論を行います。" }
   , photo: "poster-tokyo0308.jpg", report: "report-tokyo0308.pdf"},
  { date: "2026-03-06", time: "14:00–17:00 JST", sample: false,
    title: { en: "YTL U.S.-ROK-Japan Cooperation Dialogue in Tokyo"},
    place: { en: "Lakeland University Japan Conference Room (Muskie Hall) "}, format: "inperson", langs: "EN",
    desc: { en: "This session will explore how strengthening Japan–ROK partnership can further advance U.S.–ROK–Japan collaboration in support of Indo-Pacific stability. Featuring speakers and panelists from diverse academic and professional backgrounds, the dialogue aims to foster thoughtful discussion, cross-border connections, and practical perspectives on youth-driven cooperation.", ja: "本セッションでは、日韓パートナーシップの強化を通じて、インド太平洋地域の安定に向けた日米韓協力をどのように発展させていけるかをテーマに、多様な分野で活躍するスピーカーやパネリストとともに議論を行います。" }
   , photo: "poster-tokyo0306.jpg", report: "report-tokyo0308.pdf"}
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
