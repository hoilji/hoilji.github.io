(() => {
  const NAMESPACE = "hoilji-site";   // 너만의 문자열로 바꾸기 (예: username, repo 등)
  const NAME = "site-visits";        // 카운터 이름

  function todaySeoul() {
    return new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Seoul",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date()); // YYYY-MM-DD
  }

  async function fetchCount(url) {
    const r = await fetch(url, { cache: "no-store" });
    const data = await r.json();
    if (typeof data?.count !== "number") throw new Error("No count");
    return data.count;
  }

  async function run() {
    const el = document.getElementById("visit-counter-value");
    if (!el) return;

    const today = todaySeoul();
    const last = localStorage.getItem("connect_time");

    const upUrl  = `https://api.counterapi.dev/v1/${encodeURIComponent(NAMESPACE)}/${encodeURIComponent(NAME)}/up`;
    const getUrl = `https://api.counterapi.dev/v1/${encodeURIComponent(NAMESPACE)}/${encodeURIComponent(NAME)}`;

    try {
      let v;
      if (last !== today) {
        v = await fetchCount(upUrl);                 // 오늘 첫 방문이면 +1
        localStorage.setItem("connect_time", today);
      } else {
        v = await fetchCount(getUrl);                // 같은 날이면 조회만
      }
      el.textContent = v.toLocaleString();
    } catch (e) {
      el.textContent = "—";
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
