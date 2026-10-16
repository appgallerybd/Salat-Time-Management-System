(() => {
  "use strict";
  // DEMO DATA ONLY: not verified mosque schedules. Real times will come from each mosque's authorized admin (later phase).
  const PRAYERS = [
    { id: "fajr", time: "05:00", icon: '<path d="M3 18h18M6 18a6 6 0 0 1 12 0M12 5v4M4.5 10.5l2 2M19.5 10.5l-2 2"/>' },
    { id: "dhuhr", time: "13:15", icon: '<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6L7 7M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"/>' },
    { id: "asr", time: "16:30", icon: '<circle cx="9" cy="9" r="3.5"/><path d="M9 2v1.5M2 9h1.5M4 4l1 1M14 4l-1 1"/><path d="M8 20h10a3.5 3.5 0 0 0 0-7 5 5 0 0 0-9.5 1.5A2.8 2.8 0 0 0 8 20z"/>' },
    { id: "maghrib", time: "18:00", icon: '<path d="M3 18h18M6 18a6 6 0 0 1 12 0M12 12V8M9.5 10l2.5 2.5 2.5-2.5"/>' },
    { id: "isha", time: "19:30", icon: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/><path d="M17 4v3M15.5 5.5h3"/>' },
    { id: "jumuah", time: null, icon: '<path d="M5 20v-7c0-4 3-6 7-9 4 3 7 5 7 9v7zM12 4V2M3 20h18M10 20v-4a2 2 0 0 1 4 0v4"/>' }
  ];
  const T = {
    bn: { appName: "নামাজের সময়", nav: ["নামাজের সময়", "নিকটবর্তী মসজিদ", "বিজ্ঞপ্তি", "সেটিংস", "আমাদের সম্পর্কে", "যোগাযোগ"],
      p: { fajr: ["ফজর", "Fajr"], dhuhr: ["যোহর", "Dhuhr"], asr: ["আসর", "Asr"], maghrib: ["মাগরিব", "Maghrib"], isha: ["এশা", "Isha"], jumuah: ["জুমুআ", "Jumu’ah"] },
      demo: "ডেমো সময়, যাচাইকৃত নয়", noTime: "সময় নির্ধারিত হয়নি",
      search: "মসজিদের নাম বা এলাকা লিখুন", mosqueEmpty: "যাচাইকৃত মসজিদের তথ্য এখনো যুক্ত হয়নি।",
      noticeEmpty: "কোনো বিজ্ঞপ্তি নেই।", theme: "থিম", light: "লাইট", dark: "ডার্ক", lang: "ভাষা",
      jumuahSw: "জুমুআর নামাজ দেখান", about: "মসজিদ কর্তৃপক্ষের নির্ধারিত নামাজের সময়, নিকটবর্তী মসজিদ ও বিজ্ঞপ্তি এক জায়গায় দেখার অ্যাপ। সময় জ্যোতির্বিজ্ঞানের হিসাবে নয়, প্রতিটি মসজিদের নিজস্ব সূচি অনুযায়ী দেখানো হবে।",
      contactEmpty: "মসজিদ প্রশাসনের ফোন, ইমেইল ও ঠিকানা এখানে যুক্ত হবে।" },
    en: { appName: "Salat Time", nav: ["Prayer Times", "Nearby Mosques", "Notices", "Settings", "About Us", "Contact"],
      p: { fajr: ["Fajr", "ফজর"], dhuhr: ["Dhuhr", "যোহর"], asr: ["Asr", "আসর"], maghrib: ["Maghrib", "মাগরিব"], isha: ["Isha", "এশা"], jumuah: ["Jumu’ah", "জুমুআ"] },
      demo: "Demo times, not verified", noTime: "Time not set",
      search: "Search by mosque name or area", mosqueEmpty: "No verified mosque data has been added yet.",
      noticeEmpty: "No notices.", theme: "Theme", light: "Light", dark: "Dark", lang: "Language",
      jumuahSw: "Show Jumu’ah prayer", about: "An app to view mosque-assigned prayer times, nearby mosques and notices in one place. Times are not calculated astronomically; each mosque follows its own schedule.",
      contactEmpty: "The mosque administration’s phone, email and address will be added here." }
  };
  const KEYS = ["times", "mosques", "notices", "settings", "about", "contact"];
  const store = {
    get(k, d) { try { return localStorage.getItem("stms." + k) ?? d; } catch { return d; } },
    set(k, v) { try { localStorage.setItem("stms." + k, v); } catch {} }
  };
  const S = { tab: "times", lang: store.get("lang", "bn"), theme: store.get("theme", "light"), jumuah: store.get("jumuah", "off") === "on" };
  const $ = (s) => document.querySelector(s);
  const el = (h) => { const t = document.createElement("template"); t.innerHTML = h.trim(); return t.content.firstChild; };
  const digits = (s) => S.lang === "bn" ? s.replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[d]) : s;
  const fmt = (t) => { let [h, m] = t.split(":").map(Number); const pm = h >= 12; h = h % 12 || 12; const ap = S.lang === "bn" ? (pm ? "অপরাহ্ণ" : "পূর্বাহ্ণ") : (pm ? "PM" : "AM"); return digits(`${h}:${String(m).padStart(2, "0")}`) + " " + ap; };

  const pages = {
    times: (t) => `<h1>${t.nav[0]}</h1><span class="demo">${t.demo}</span><div class="grid">` +
      PRAYERS.filter((p) => p.id !== "jumuah" || S.jumuah).map((p) => `
      <article class="card"><span class="ico"><svg viewBox="0 0 24 24" aria-hidden="true">${p.icon}</svg></span>
      <div><div class="n">${t.p[p.id][0]}</div><div class="e">${t.p[p.id][1]}</div></div>
      ${p.time ? `<div class="t">${fmt(p.time)}</div>` : `<div class="t none">${t.noTime}</div>`}</article>`).join("") + `</div>`,
    mosques: (t) => `<h1>${t.nav[1]}</h1><input type="search" placeholder="${t.search}" aria-label="${t.search}"><div class="empty">${t.mosqueEmpty}</div>`,
    notices: (t) => `<h1>${t.nav[2]}</h1><div class="empty">${t.noticeEmpty}</div>`,
    settings: (t) => `<h1>${t.nav[3]}</h1>
      <div class="row"><span>${t.theme}</span><div class="seg"><button data-theme="light" aria-pressed="${S.theme === "light"}">${t.light}</button><button data-theme="dark" aria-pressed="${S.theme === "dark"}">${t.dark}</button></div></div>
      <div class="row"><span>${t.lang}</span><div class="seg"><button data-lang="bn" aria-pressed="${S.lang === "bn"}">বাংলা</button><button data-lang="en" aria-pressed="${S.lang === "en"}">English</button></div></div>
      <div class="row"><label for="jm">${t.jumuahSw}</label><span class="sw"><input type="checkbox" id="jm" role="switch" ${S.jumuah ? "checked" : ""}><i></i></span></div>`,
    about: (t) => `<h1>${t.nav[4]}</h1><p>${t.about}</p>`,
    contact: (t) => `<h1>${t.nav[5]}</h1><div class="empty">${t.contactEmpty}</div>`
  };

  function render() {
    const t = T[S.lang];
    document.documentElement.lang = S.lang;
    document.documentElement.dataset.theme = S.theme;
    document.title = t.appName;
    $("[data-i18n=appName]").textContent = t.appName;
    const tabs = $("#tabs");
    tabs.innerHTML = "";
    KEYS.forEach((k, i) => {
      const b = el(`<button type="button">${t.nav[i]}</button>`);
      if (k === S.tab) b.setAttribute("aria-current", "page");
      b.onclick = () => { S.tab = k; render(); };
      tabs.append(b);
    });
    $("#view").innerHTML = pages[S.tab](t);
    document.querySelectorAll("[data-theme]").forEach((b) => b.onclick = () => { S.theme = b.dataset.theme; store.set("theme", S.theme); render(); });
    document.querySelectorAll("[data-lang]").forEach((b) => b.onclick = () => { S.lang = b.dataset.lang; store.set("lang", S.lang); render(); });
    const jm = $("#jm");
    if (jm) jm.onchange = () => { S.jumuah = jm.checked; store.set("jumuah", S.jumuah ? "on" : "off"); render(); $("#jm").focus(); };
    tabs.querySelector("[aria-current]")?.scrollIntoView?.({ inline: "center", block: "nearest" });
  }
  render();
  // Warns in the console if Solaiman Lipi did not load (font asset missing).
  document.fonts?.load('16px "Solaiman Lipi"', "আ").then((f) => { if (!f.length) console.warn("Solaiman Lipi not loaded: add assets/fonts/SolaimanLipi.woff2 (or .ttf)."); });
})();
