// =========================================================
// CONFIGURAÇÕES: edite aqui
// =========================================================
const CONFIG = {
  whatsapp: "5500000000000",   // DDI + DDD + número, só dígitos
  mensagemPadrao: "Olá! Vim pelo site e gostaria de mais informações.",

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

// Alterna entre preços mensal e semestral
const billing = document.querySelectorAll("[data-billing]");
billing.forEach(btn => btn.addEventListener("click", () => {
  billing.forEach(b => { b.classList.toggle("is-active", b === btn); b.setAttribute("aria-pressed", b === btn); });
  document.querySelectorAll(".plan__price strong").forEach(p => (p.textContent = p.dataset[btn.dataset.billing]));
}));
