// =========================================================
// TEMPLATE 02 · LANDING PAGE
// Configure aqui:
// =========================================================
const CONFIG = {
  whatsapp: "5500000000000",               // DDI + DDD + número, só dígitos
  fimDaOferta: "2026-12-31T23:59:59",      // data/hora em que o contador zera
  mensagemInicial: "Olá! Vim pela página e quero saber mais."
};

document.getElementById("ano").textContent = new Date().getFullYear();

// Máscara de telefone (00) 00000-0000
const phone = document.querySelector('input[name="telefone"]');
phone.addEventListener("input", () => {
  let d = phone.value.replace(/\D/g, "").slice(0, 11);
  if (d.length > 6) d = `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
  else if (d.length > 2) d = `(${d.slice(0, 2)}) ${d.slice(2)}`;
  else if (d.length) d = `(${d}`;
  phone.value = d;
});

// Formulário → abre o WhatsApp com os dados preenchidos
const form = document.getElementById("lead-form");
const msg = form.querySelector(".form-msg");
form.addEventListener("submit", e => {
  e.preventDefault();
  const nome = form.nome.value.trim();
  const tel = form.telefone.value.replace(/\D/g, "");
  const cidade = form.cidade.value.trim();
  form.nome.classList.toggle("error", !nome);
  form.telefone.classList.toggle("error", tel.length < 10);
  if (!nome || tel.length < 10) {
    msg.textContent = "Informe seu nome e um WhatsApp com DDD.";
    return;
  }
  msg.textContent = "";
  const texto = `${CONFIG.mensagemInicial}\n\nNome: ${nome}\nWhatsApp: ${form.telefone.value}${cidade ? `\nCidade: ${cidade}` : ""}`;
  // Evento para o Pixel da Meta, se estiver instalado
  if (typeof fbq === "function") fbq("track", "Lead");
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`, "_blank");
});

// Contador regressivo
const fim = new Date(CONFIG.fimDaOferta).getTime();
const el = id => document.getElementById(id);
const pad = n => String(n).padStart(2, "0");
const tick = () => {
  const diff = Math.max(0, fim - Date.now());
  el("cd-dias").textContent = pad(Math.floor(diff / 864e5));
  el("cd-horas").textContent = pad(Math.floor(diff / 36e5) % 24);
  el("cd-min").textContent = pad(Math.floor(diff / 6e4) % 60);
  el("cd-seg").textContent = pad(Math.floor(diff / 1e3) % 60);
  if (diff === 0) document.querySelector(".countdown").hidden = true;
};
tick();
setInterval(tick, 1000);

// Barra fixa aparece depois que o formulário sai da tela
const sticky = document.getElementById("sticky-cta");
new IntersectionObserver(([entry]) => {
  sticky.classList.toggle("is-visible", !entry.isIntersecting);
}).observe(form);
