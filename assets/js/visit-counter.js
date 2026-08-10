(() => {
  const WORKSPACE = "hoilji-site";
  const NAME = "hoilji-site";

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
    if (typeof data?.value === "number") {
      return data.value;
    }

    if (typeof data?.data?.value === "number") {
      return data.data.value;
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
      let value;

      if (lastVisit !== today) {
        if (DEBUG) {
          console.log("[counter] first visit today → UP");
          console.log("[counter] URL:", upUrl);
        }

        data = await fetchJson(upUrl);
        value = getCounterValue(data);

        localStorage.setItem(STORAGE_KEY, today);

      } else {
        if (DEBUG) {
          console.log("[counter] already visited today → GET");
          console.log("[counter] URL:", getUrl);
        }

        data = await fetchJson(getUrl);
        value = getCounterValue(data);
      }

      el.textContent = value.toLocaleString();

      if (DEBUG) {
        console.log("[counter] success:", data);
        console.log("[counter] value:", value);
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
