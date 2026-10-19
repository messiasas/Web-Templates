// =========================================================
// TEMPLATE 01 · INSTITUCIONAL
// =========================================================

// Ano automático no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();

// Menu mobile
const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("menu");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", open);
  toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
});
// Fecha o menu ao clicar em um link
nav.querySelectorAll("a").forEach(link =>
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// Sombra no header ao rolar
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 10);
});

// Contadores animados (edite os valores em data-count no HTML)
const counters = document.querySelectorAll("[data-count]");
const animate = el => {
  const target = Number(el.dataset.count);
  const duration = 1200;
  const start = performance.now();
  const step = now => {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(target * progress);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { animate(entry.target); observer.unobserve(entry.target); }
  });
}, { threshold: .5 });
counters.forEach(c => observer.observe(c));

// Formulário: validação e envio sem recarregar a página (Formspree)
const form = document.querySelector(".form");
const status = form.querySelector(".form__status");
form.addEventListener("submit", async e => {
  e.preventDefault();
  form.querySelectorAll("input, textarea").forEach(f => f.classList.add("touched"));
  if (!form.checkValidity()) {
    status.textContent = "Preencha nome, e-mail válido e mensagem.";
    return;
  }
  status.textContent = "Enviando...";
  try {
    const res = await fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error();
    form.reset();
    status.textContent = "Mensagem enviada. Retornaremos em breve.";
  } catch {
    status.textContent = "Não foi possível enviar. Tente pelo WhatsApp.";
  }
});
