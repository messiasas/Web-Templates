// =========================================================
// TEMPLATE 04 · RESTAURANTE
// Configure aqui o WhatsApp e os horários.
// =========================================================
const CONFIG = {
  whatsapp: "5500000000000",
  mensagem: "Olá! Vim pelo site e gostaria de fazer um pedido."
};

// 0 = domingo ... 6 = sábado. Use null para fechado.
// Para virar a noite (ex.: 18:00 às 01:00), use fecha "25:00".
const HORARIOS = {
  0: { abre: "11:00", fecha: "16:00" },
  1: null,
  2: { abre: "18:00", fecha: "23:00" },
  3: { abre: "18:00", fecha: "23:00" },
  4: { abre: "18:00", fecha: "23:00" },
  5: { abre: "18:00", fecha: "24:00" },
  6: { abre: "11:00", fecha: "24:00" }
};
const DIAS = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

document.getElementById("ano").textContent = new Date().getFullYear();

// Links de WhatsApp
const waLink = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.mensagem)}`;
document.querySelectorAll("[data-whatsapp]").forEach(a => { a.href = waLink; a.target = "_blank"; a.rel = "noopener"; });

// Tabela de horários
const toMin = h => { const [hh, mm] = h.split(":").map(Number); return hh * 60 + mm; };
const fmt = h => (toMin(h) >= 1440 ? `${String(Math.floor(toMin(h) / 60) - 24).padStart(2, "0")}:${h.split(":")[1]}` : h);
const now = new Date();
const today = now.getDay();
const table = document.getElementById("hours");
[1, 2, 3, 4, 5, 6, 0].forEach(d => {
  const h = HORARIOS[d];
  const tr = document.createElement("tr");
  if (d === today) tr.className = "today";
  tr.innerHTML = `<td>${DIAS[d]}</td><td>${h ? `${h.abre} às ${fmt(h.fecha)}` : "Fechado"}</td>`;
  table.appendChild(tr);
});

// Aberto agora? (considera também o expediente que passou da meia-noite)
function isOpen() {
  const m = now.getHours() * 60 + now.getMinutes();
  const hoje = HORARIOS[today];
  if (hoje && m >= toMin(hoje.abre) && m < toMin(hoje.fecha)) return true;
  const ontem = HORARIOS[(today + 6) % 7];
  return !!(ontem && toMin(ontem.fecha) > 1440 && m < toMin(ontem.fecha) - 1440);
}
const status = document.getElementById("status");
const open = isOpen();
status.classList.add(open ? "is-open" : "is-closed");
status.querySelector(".status__text").textContent = open ? "Aberto agora" : "Fechado agora";

// Abas do cardápio (clique e setas do teclado)
const tabs = [...document.querySelectorAll('[role="tab"]')];
function select(tab) {
  tabs.forEach(t => {
    const on = t === tab;
    t.setAttribute("aria-selected", on);
    t.tabIndex = on ? 0 : -1;
    document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
  });
  tab.focus();
}
tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => select(tab));
  tab.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") select(tabs[(i + 1) % tabs.length]);
    if (e.key === "ArrowLeft") select(tabs[(i - 1 + tabs.length) % tabs.length]);
  });
});
