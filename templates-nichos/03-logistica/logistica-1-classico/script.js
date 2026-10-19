// =========================================================
// CONFIGURAÇÕES: edite aqui
// =========================================================
const CONFIG = {
  whatsapp: "5500000000000",   // DDI + DDD + número, só dígitos
  mensagemPadrao: "Olá! Vim pelo site e gostaria de mais informações.",
  // Endereço do sistema de rastreio; o código é adicionado ao final. Deixe "" para enviar pelo WhatsApp.
  urlRastreio: "",
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

// Rastreamento: abre o sistema de rastreio com o código digitado
const track = document.getElementById("rastreio");
track.addEventListener("submit", e => {
  e.preventDefault();
  const codigo = track.codigo.value.trim().toUpperCase();
  const status = track.querySelector(".form__status");
  if (codigo.length < 5) { status.textContent = "Digite um código válido."; return; }
  if (!CONFIG.urlRastreio) {
    // Sem sistema de rastreio: pede a posição pelo WhatsApp
    window.open(waUrl(`Olá! Gostaria de saber a posição da entrega ${codigo}.`), "_blank");
    return;
  }
  window.open(CONFIG.urlRastreio + encodeURIComponent(codigo), "_blank");
});
