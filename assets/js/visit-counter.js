(() => {
  const WORKSPACE = "hoilji-site";
  const NAME = "hoilji-site";

  // 현재 CounterAPI 값 48을 홈페이지에서 880으로 표시
  const BASE_COUNT = 832;

  // 하루 1회 방문 체크용 localStorage key
  const STORAGE_KEY = "connect_time_v2";

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
    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });

    const text = await response.text();

    let data;

    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }

    if (!response.ok) {
      throw new Error(
        `HTTP ${response.status} ${response.statusText}: ${text}`
      );
    }

    return data;
  }

  function getCounterValue(data) {
    // CounterAPI V2 응답:
    // data.data.up_count
    if (typeof data?.data?.up_count === "number") {
      return data.data.up_count;
    }

    throw new Error(
      `Counter value not found. Response: ${JSON.stringify(data)}`
    );
  }

  async function run() {
    const el = document.getElementById("visit-counter-value");

    if (!el) {
      if (DEBUG) {
        console.error("[counter] #visit-counter-value not found");
      }
      return;
    }

    // JS 실행 여부 표시
    el.textContent = "…";

    const today = todaySeoul();
    const lastVisit = localStorage.getItem(STORAGE_KEY);

    const base =
      `https://api.counterapi.dev/v2/` +
      `${encodeURIComponent(WORKSPACE)}/` +
      `${encodeURIComponent(NAME)}`;

    const upUrl = `${base}/up`;
    const getUrl = base;

    try {
      let data;
      let apiCount;

      if (lastVisit !== today) {
        // 오늘 이 브라우저의 첫 방문 → +1
        if (DEBUG) {
          console.log("[counter] first visit today → UP");
          console.log("[counter] URL:", upUrl);
        }

        data = await fetchJson(upUrl);
        apiCount = getCounterValue(data);

        // API 증가가 정상적으로 완료된 경우에만
        // 오늘 방문했다고 localStorage에 기록
        localStorage.setItem(STORAGE_KEY, today);

      } else {
        // 오늘 이미 방문했다면 숫자만 조회
        if (DEBUG) {
          console.log("[counter] already visited today → GET");
          console.log("[counter] URL:", getUrl);
        }

        data = await fetchJson(getUrl);
        apiCount = getCounterValue(data);
      }

      // 홈페이지에 표시할 최종 방문자 수
      const displayCount = BASE_COUNT + apiCount;

      // 숫자만 표시
      el.textContent = displayCount.toLocaleString();

      if (DEBUG) {
        console.log("[counter] success:", data);
        console.log("[counter] API count:", apiCount);
        console.log("[counter] Display count:", displayCount);
      }

    } catch (error) {
      if (DEBUG) {
        console.error("[counter] failed:", error);
      }

      el.textContent = "-";
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
