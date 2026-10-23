/* TogetherWeTri Japan — site logic. 通常は編集不要です（内容の更新は data.js で行います）。 */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
let LANG = "en";
let evFilter = "upcoming";
let postFilter = "all";
const PAGES = ["home", "about", "events", "news", "contact"];
const TODAY = new Date(); TODAY.setHours(0, 0, 0, 0);

const t = (o) => (o && typeof o === "object") ? (o[LANG] ?? o.en) : (o ?? "");
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const parseDate = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
const MONTHS_EN = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const fmtLong = (s) => {
  const d = parseDate(s);
  return LANG === "ja" ? `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
    : d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
};
const L = (en, ja) => LANG === "ja" ? ja : en;

function eventHTML(e) {
  const d = parseDate(e.date);
  const past = d < TODAY;
  const fmt = e.format === "online" ? L("Online", "オンライン") : L("In person", "対面");
  return `<article class="event${past ? " is-past" : ""}">
    <div class="datebox" aria-hidden="true">
      <span class="m">${LANG === "ja" ? (d.getMonth() + 1) + "月" : MONTHS_EN[d.getMonth()]}</span>
      <span class="d">${d.getDate()}</span>
      <span class="y">${d.getFullYear()}</span>
    </div>
    <div class="ev-body">
      <div class="chips">
        <span class="chip">${fmt}</span><span class="chip">${esc(e.langs)}</span>
        ${past ? `<span class="chip past">${L("Past", "終了")}</span>` : ""}
        ${e.sample ? `<span class="chip sample">${L("Sample", "サンプル")}</span>` : ""}
      </div>
      <h3>${esc(t(e.title))}</h3>
      <div class="ev-meta"><span>${fmtLong(e.date)}${e.time ? " · " + esc(e.time) : ""}</span><span>${esc(t(e.place))}</span></div>
      <p>${esc(t(e.desc))}</p>
    </div>
    <div class="ev-act">${past ? "" : `<a class="btn" href="#contact" data-nav="contact" data-topic="event" data-event="${esc(t(e.title))}">${L("Register", "申し込む")}</a>`}</div>
  </article>`;
}
const emptyHTML = (msg) => `<div class="empty"><img src="haru.png" alt=""><span>${msg}</span></div>`;

function renderEvents() {
  const up = EVENTS.filter((e) => parseDate(e.date) >= TODAY).sort((a, b) => a.date.localeCompare(b.date));
  const past = EVENTS.filter((e) => parseDate(e.date) < TODAY).sort((a, b) => b.date.localeCompare(a.date));
  const list = evFilter === "upcoming" ? up : past;
  $("#events-list").innerHTML = list.length ? list.map(eventHTML).join("")
    : emptyHTML(evFilter === "upcoming" ? L("No upcoming events yet. Check back soon or subscribe to the newsletter.", "現在予定されているイベントはありません。ニュースレターで最新情報をお届けします。") : L("No past events yet.", "過去のイベントはまだありません。"));
  $("#ev-count").textContent = LANG === "ja" ? `${list.length}件` : `${list.length} ${list.length === 1 ? "event" : "events"}`;
  $$(".tabs [data-ev]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.ev === evFilter)));
  $("#home-events").innerHTML = up.length ? up.slice(0, 2).map(eventHTML).join("") : emptyHTML(L("No upcoming events yet.", "現在予定されているイベントはありません。"));
}

function postHTML(p, i) {
  const c = POST_CATS[p.cat] || {};
  return `<button type="button" class="post" data-post="${i}" style="--c:${c.color || "#2C538E"}">
    <span class="cat">${esc(t(c))}</span>
    <h3>${esc(t(p.title))}</h3>
    <p>${esc(t(p.excerpt))}</p>
    <span class="foot"><span>${fmtLong(p.date)}${p.sample ? " · " + L("Sample", "サンプル") : ""}</span><span class="read">${L("Read", "読む")} →</span></span>
  </button>`;
}

function renderPosts() {
  const sorted = POSTS.map((p, i) => [p, i]).sort((a, b) => b[0].date.localeCompare(a[0].date));
  const list = sorted.filter(([p]) => postFilter === "all" || p.cat === postFilter);
  $("#posts-list").innerHTML = list.length ? list.map(([p, i]) => postHTML(p, i)).join("")
    : `<div style="grid-column:1/-1">${emptyHTML(L("No posts in this category yet.", "このカテゴリーの記事はまだありません。"))}</div>`;
  $("#home-posts").innerHTML = sorted.slice(0, 3).map(([p, i]) => postHTML(p, i)).join("");
  const cats = [["all", { en: "All", ja: "すべて" }], ...Object.entries(POST_CATS)];
  $("#post-filters").innerHTML = cats.map(([id, label]) =>
    `<button type="button" id="pf-${id}" data-pf="${id}" aria-pressed="${id === postFilter}">${esc(t(label))}</button>`).join("");
}

function renderMembers() {
  $("#members-note").hidden = !MEMBERS_ARE_PLACEHOLDERS;
  $("#members").innerHTML = MEMBERS.map((m) => `<article class="member">
    <div class="avatar">${m.photo ? `<img src="${esc(m.photo)}" alt="">` : `<img class="ph" src="mark.png" alt="">`}</div>
    <div>
      <span class="role">${esc(t(m.role))}</span>
      <h3>${esc(t(m.name))}</h3>
      <span class="aff">${esc(t(m.aff))}</span>
    </div>
    <p class="bio">${esc(t(m.bio))}</p>
  </article>`).join("");
}

function renderTopics(keep) {
  const sel = $("#c-topic");
  const cur = keep || sel.value || "general";
  sel.innerHTML = TOPICS.map((tp) => `<option value="${tp.id}">${esc(tp[LANG])}</option>`).join("");
  sel.value = cur;
}

function renderSubscribe() {
  const slot = $("#subscribe-slot");
  if (SITE.newsletterSignupUrl) {
    slot.innerHTML = `<a class="btn light" href="${esc(SITE.newsletterSignupUrl)}" target="_blank" rel="noopener">${L("Subscribe", "購読する")}</a>`;
  } else {
    slot.innerHTML = `<p style="font-size:var(--s-sm)">${L('Email us with the subject "Subscribe" and we will add you to the list.', "件名を「購読希望」としてメールをお送りください。配信リストに追加します。")}</p>
      <div class="copybox"><span class="addr">${esc(SITE.email)}</span><button type="button" class="copy-btn" data-copy="email">${L("Copy", "コピー")}</button></div>`;
  }
}

function setSubmitLabel() {
  $("#c-submit").textContent = SITE.formEndpoint ? L("Send message", "送信する") : L("Prepare my message", "メッセージを作成");
}

function renderAll() {
  renderEvents(); renderPosts(); renderMembers(); renderTopics(); renderSubscribe(); setSubmitLabel();
  $("#email-addr").textContent = SITE.email;
  $("#c-msg").placeholder = L("How can we help?", "ご用件をご記入ください。");
}

function setLang(l) {
  LANG = l === "ja" ? "ja" : "en";
  document.documentElement.dataset.lang = LANG;
  document.documentElement.lang = LANG;
  $$(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === LANG)));
  try { localStorage.setItem("twt-lang", LANG); } catch (e) {}
  renderAll();
  if (!$("#compose").hidden) buildCompose();
}

function show(page, opts = {}) {
  if (!PAGES.includes(page)) page = "home";
  $$(".page").forEach((p) => { p.hidden = p.dataset.page !== page; });
  $$(".nav a").forEach((a) => { if (a.dataset.nav === page) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
  $("#site-nav").classList.remove("open");
  $("#menu-btn").setAttribute("aria-expanded", "false");
  if (!opts.keepScroll) window.scrollTo({ top: 0 });
}

// Navigate and record the page in browser history so the back button works
function go(page) {
  if (location.hash !== "#" + page) { try { history.pushState(null, "", "#" + page); } catch (e) {} }
  show(page);
}

function tick() {
  const f = (tz) => new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: tz }).format(new Date());
  try { $("#t-tokyo").textContent = f("Asia/Tokyo"); $("#t-seoul").textContent = f("Asia/Seoul"); $("#t-dc").textContent = f("America/New_York"); } catch (e) {}
}

async function copyText(text, btn) {
  const label = btn.innerHTML;
  try {
    await navigator.clipboard.writeText(text);
    btn.textContent = L("Copied", "コピーしました");
  } catch (e) {
    const box = btn.closest(".copybox, .compose");
    const target = box && (box.querySelector(".addr") || box.querySelector("pre"));
    if (target) { const r = document.createRange(); r.selectNodeContents(target); const s = getSelection(); s.removeAllRanges(); s.addRange(r); }
    btn.textContent = L("Selected. Press Ctrl/⌘+C", "選択しました。Ctrl/⌘+Cでコピー");
  }
  setTimeout(() => { btn.innerHTML = label; }, 2200);
}

function buildCompose() {
  const name = $("#c-name").value.trim(), email = $("#c-email").value.trim(), aff = $("#c-aff").value.trim(), msg = $("#c-msg").value.trim();
  const topic = TOPICS.find((x) => x.id === $("#c-topic").value) || TOPICS[0];
  const subject = `[TogetherWeTri Japan] ${topic[LANG]} - ${name}`;
  const body = `${msg}\n\n${name}${aff ? "\n" + aff : ""}\n${email}`;
  $("#compose-text").textContent = `To: ${SITE.email}\nSubject: ${subject}\n\n${body}`;
  $("#mailto-compose").href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

document.addEventListener("click", (ev) => {
  const nav = ev.target.closest("[data-nav]");
  if (nav) {
    ev.preventDefault();
    go(nav.dataset.nav);
    if (nav.dataset.topic) {
      $("#sent").hidden = true;
      renderTopics(nav.dataset.topic);
      if (nav.dataset.event) $("#c-msg").value = L(`I'd like to register for: ${nav.dataset.event}`, `次のイベントに申し込みます：${nav.dataset.event}`) + "\n\n";
      $("#compose").hidden = true;
    }
    return;
  }
  const lb = ev.target.closest(".lang button"); if (lb) { setLang(lb.dataset.lang); return; }
  const evb = ev.target.closest("[data-ev]"); if (evb) { evFilter = evb.dataset.ev; renderEvents(); return; }
  const pf = ev.target.closest("[data-pf]"); if (pf) { postFilter = pf.dataset.pf; renderPosts(); return; }
  const pb = ev.target.closest("[data-post]"); if (pb) { openPost(Number(pb.dataset.post)); return; }
  const cb = ev.target.closest("[data-copy]"); if (cb) { copyText(SITE.email, cb); return; }
});

function openPost(i) {
  const p = POSTS[i]; if (!p) return;
  $("#reader-cat").textContent = t(POST_CATS[p.cat]);
  $("#reader-cat").style.color = (POST_CATS[p.cat] || {}).color || "";
  $("#reader-title").textContent = t(p.title);
  $("#reader-meta").textContent = fmtLong(p.date) + (p.sample ? " · " + L("Sample post", "サンプル記事") : "");
  $("#reader-body").innerHTML = t(p.body).map((para) => `<p>${esc(para)}</p>`).join("");
  const d = $("#reader");
  if (d.showModal) d.showModal(); else d.setAttribute("open", "");
}
$("#reader-close").addEventListener("click", () => { const d = $("#reader"); d.close ? d.close() : d.removeAttribute("open"); });
$("#reader").addEventListener("click", (e) => { if (e.target === e.currentTarget && e.currentTarget.close) e.currentTarget.close(); });

$("#menu-btn").addEventListener("click", () => {
  const open = $("#site-nav").classList.toggle("open");
  $("#menu-btn").setAttribute("aria-expanded", String(open));
});

$("#contact-form").addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const form = ev.currentTarget;
  const err = $("#c-err");
  const name = $("#c-name").value.trim(), email = $("#c-email").value.trim(), msg = $("#c-msg").value.trim();
  const problems = [];
  if (!name) problems.push(L("Enter your name.", "お名前を入力してください。"));
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) problems.push(L("Enter a valid email address, like name@example.com.", "有効なメールアドレスを入力してください（例：name@example.com）。"));
  if (!msg) problems.push(L("Write a short message.", "メッセージを入力してください。"));
  $("#sent").hidden = true;
  if (problems.length) { err.textContent = problems.join(" "); err.hidden = false; $("#compose").hidden = true; return; }
  err.hidden = true;

  if (SITE.formEndpoint) {
    const btn = $("#c-submit");
    btn.disabled = true; btn.textContent = L("Sending…", "送信中…");
    try {
      const fd = new FormData(form);
      const topic = TOPICS.find((x) => x.id === $("#c-topic").value) || TOPICS[0];
      fd.append("_subject", `[TogetherWeTri Japan] ${topic.en} - ${name}`);
      const res = await fetch(SITE.formEndpoint, { method: "POST", body: fd, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error("HTTP " + res.status);
      form.reset(); renderTopics("general");
      $("#compose").hidden = true;
      $("#sent").hidden = false;
      $("#sent").scrollIntoView({ behavior: "smooth", block: "nearest" });
    } catch (e) {
      err.textContent = L("Your message could not be sent. Copy it below and email it to us instead.", "送信できませんでした。下のメッセージをコピーして、メールでお送りください。");
      err.hidden = false;
      buildCompose(); $("#compose").hidden = false;
    } finally {
      btn.disabled = false; setSubmitLabel();
    }
    return;
  }
  buildCompose();
  $("#compose").hidden = false;
  $("#compose").scrollIntoView({ behavior: "smooth", block: "nearest" });
});
$("#copy-compose").addEventListener("click", (e) => copyText($("#compose-text").textContent, e.currentTarget));

let saved = "en";
try { saved = localStorage.getItem("twt-lang") || "en"; } catch (e) {}
$("#yr").textContent = new Date().getFullYear();
setLang(saved);
const start = (location.hash || "").replace("#", "");
show(PAGES.includes(start) ? start : "home", { keepScroll: true });
tick(); setInterval(tick, 30000);
const fromHash = () => { const h = location.hash.replace("#", ""); show(PAGES.includes(h) ? h : "home"); };
window.addEventListener("popstate", fromHash);
window.addEventListener("hashchange", fromHash);
