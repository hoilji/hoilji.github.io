(() => {
  const WORKSPACE = "hoilji-github-pages"; // 너만의 유니크한 문자열로 변경
  const COUNTER_NAME = "site-visits";

  function todaySeoul() {
    return new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Seoul",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date()); // YYYY-MM-DD
  }

  function pickValue(result) {
    // CounterAPI 결과에서 숫자 뽑기(버전 차이 대비)
    if (result && typeof result.value === "number") return result.value;
    if (result && result.data && typeof result.data === "number") return result.data;
    return null;
  }

  async function run() {
    const el = document.getElementById("visit-counter-value");
    if (!el) return;

    const today = todaySeoul();
    const last = localStorage.getItem("connect_time");

    try {
      // CounterAPI 브라우저 클라이언트 (공식 예시와 동일한 방식) :contentReference[oaicite:4]{index=4}
      const counter = new Counter({ workspace: WORKSPACE });

      let result;
      if (last !== today) {
        result = await counter.up(COUNTER_NAME);   // 오늘 첫 방문이면 +1 :contentReference[oaicite:5]{index=5}
        localStorage.setItem("connect_time", today);
      } else {
        result = await counter.get(COUNTER_NAME);  // 같은 날이면 조회만 :contentReference[oaicite:6]{index=6}
      }

      const v = pickValue(result);
      el.textContent = (v === null) ? "—" : v.toLocaleString();
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
