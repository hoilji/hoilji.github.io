(() => {
  const NAMESPACE = "hoilji-site";
  const NAME = "site-visits";
  const DEBUG = true;

  function todaySeoul() {
    return new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Seoul",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date());
  }

  async function fetchJson(url) {
    const r = await fetch(url, { cache: "no-store" });
    const data = await r.json();
    return data;
  }

  async function run() {
    const el = document.getElementById("visit-counter-value");
    if (!el) {
      if (DEBUG) console.error("[counter] #visit-counter-value not found");
      return;
    }

    el.textContent = "…"; // JS가 실행됐는지 바로 보이게

    const today = todaySeoul();
    const last = localStorage.getItem("connect_time");

    const base = `https://api.counterapi.dev/v1/${encodeURIComponent(NAMESPACE)}/${encodeURIComponent(NAME)}`;
    const upUrl = `${base}/up`;
    const getUrl = `${base}/`;

    try {
      let data;
      if (last !== today) {
        data = await fetchJson(upUrl);
        localStorage.setItem("connect_time", today);
      } else {
        data = await fetchJson(getUrl);
      }

      if (typeof data?.count !== "number") throw new Error("No count in response");
      el.textContent = data.count.toLocaleString();

      if (DEBUG) console.log("[counter] ok:", data);
    } catch (e) {
      if (DEBUG) console.error("[counter] failed:", e);
      el.textContent = "-";
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
