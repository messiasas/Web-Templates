// =========================================================
// CONFIGURAÇÕES: edite aqui
// =========================================================
const CONFIG = {
  whatsapp: "5500000000000",   // DDI + DDD + número, só dígitos
  mensagemPadrao: "Olá! Vim pelo site e gostaria de mais informações.",
  intervaloKm: 10000,
  intervaloMeses: 12,
};

// ---------- Utilidades ----------
const waUrl = texto => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`;
document.getElementById("ano").textContent = new Date().getFullYear();

// Todos os links com data-wa abrem o WhatsApp
document.querySelectorAll("[data-wa]").forEach(a => {
  a.href = waUrl(CONFIG.mensagemPadrao);
  a.target = "_blank";
  a.rel = "noopener";
});

// ---------- Menu mobile ----------
const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("menu");
const fecharMenu = () => {
  nav.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Abrir menu");
};
toggle.addEventListener("click", () => {
  const aberto = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", aberto);
  toggle.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", fecharMenu));
document.addEventListener("keydown", e => { if (e.key === "Escape") fecharMenu(); });

// ---------- Header muda ao rolar ----------
const header = document.querySelector(".header");
const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 20);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// ---------- Datas: não permite escolher dias passados ----------
const hojeISO = new Date(Date.now() - new Date().getTimezoneOffset() * 6e4).toISOString().split("T")[0];
document.querySelectorAll('input[type="date"]').forEach(i => (i.min = hojeISO));

// ---------- Formulário → WhatsApp ----------
// Cada campo com data-label vira uma linha da mensagem.
document.querySelectorAll("[data-wa-form]").forEach(form => {
  const status = form.querySelector(".form__status");
  form.addEventListener("submit", e => {
    e.preventDefault();
    let valido = true;
    form.querySelectorAll("[data-label]").forEach(campo => {
      const ok = campo.checkValidity();
      campo.classList.toggle("is-invalid", !ok);
      if (!ok) valido = false;
    });
    if (!valido) {
      status.textContent = "Preencha os campos obrigatórios.";
      form.querySelector(".is-invalid").focus();
      return;
    }
    const linhas = [...form.querySelectorAll("[data-label]")]
      .filter(c => c.value.trim())
      .map(c => {
        const v = c.type === "date" ? c.value.split("-").reverse().join("/") : c.value.trim();
        return `${c.dataset.label}: ${v}`;
      });
    status.textContent = "Abrindo o WhatsApp...";
    window.open(waUrl(`${form.dataset.mensagem}\n\n${linhas.join("\n")}`), "_blank");
    setTimeout(() => (status.textContent = ""), 4000);
  });
  form.querySelectorAll("[data-label]").forEach(c => c.addEventListener("input", () => c.classList.remove("is-invalid")));
});

// Calculadora da próxima revisão
const rev = document.getElementById("revisao");
rev.addEventListener("submit", e => {
  e.preventDefault();
  const out = document.getElementById("revisao-resultado");
  const kmAtual = Number(rev.querySelector("#km-atual").value);
  const kmUltima = Number(rev.querySelector("#km-ultima").value);
  const data = rev.querySelector("#data-ultima").value;
  if (!kmAtual || !data || kmUltima > kmAtual) {
    out.textContent = "Preencha os três campos. A quilometragem atual deve ser maior que a da última revisão.";
    return;
  }
  const faltamKm = CONFIG.intervaloKm - (kmAtual - kmUltima);
  const limite = new Date(data + "T12:00:00");
  limite.setMonth(limite.getMonth() + CONFIG.intervaloMeses);
  const dias = Math.ceil((limite - new Date()) / 864e5);
  if (faltamKm <= 0 || dias <= 0) {
    out.innerHTML = `<strong>Sua revisão está vencida.</strong> Agende agora para evitar desgaste maior.`;
  } else {
    out.innerHTML = `<strong>Faltam ${faltamKm.toLocaleString("pt-BR")} km ou ${dias} dias</strong>, o que vier primeiro. Data limite: ${limite.toLocaleDateString("pt-BR")}.`;
  }
});

// ---------- Contadores animados ----------
const contadores = document.querySelectorAll("[data-count]");
const fmt = (v, dec) => v.toLocaleString("pt-BR", { minimumFractionDigits: dec, maximumFractionDigits: dec });
const animar = el => {
  const alvo = parseFloat(el.dataset.count);
  const dec = (el.dataset.count.split(".")[1] || "").length;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { el.textContent = fmt(alvo, dec); return; }
  const inicio = performance.now();
  const passo = t => {
    const p = Math.min((t - inicio) / 1400, 1);
    el.textContent = fmt(alvo * (1 - Math.pow(1 - p, 3)), dec);
    if (p < 1) requestAnimationFrame(passo);
  };
  requestAnimationFrame(passo);
};
const obs = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { animar(e.target); obs.unobserve(e.target); }
}), { threshold: .4 });
contadores.forEach(c => obs.observe(c));
