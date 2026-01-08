(() => {
  const NAMESPACE = "hoilji-github-io"; // TODO: 바꾸기
  const KEY = "site-visits";             // TODO: 바꾸기

  const valueEl = document.getElementById("visit-counter-value");
  if (!valueEl) return;

  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  const last = localStorage.getItem("connect_time");

  const endpoint = (last !== today)
    ? `https://api.countapi.xyz/hit/${encodeURIComponent(NAMESPACE)}/${encodeURIComponent(KEY)}`
    : `https://api.countapi.xyz/get/${encodeURIComponent(NAMESPACE)}/${encodeURIComponent(KEY)}`;

  // 하루 1회 증가
  if (last !== today) localStorage.setItem("connect_time", today);

  fetch(endpoint, { cache: "no-store" })
    .then(r => r.json())
    .then(data => {
      // data.value가 카운트 값
      valueEl.textContent = (typeof data.value === "number") ? data.value.toLocaleString() : "—";
    })
    .catch(() => {
      valueEl.textContent = "—";
    });
})();
