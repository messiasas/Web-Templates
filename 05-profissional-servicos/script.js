// =========================================================
// TEMPLATE 05 · PROFISSIONAL LIBERAL / CONSULTÓRIO
// =========================================================
const CONFIG = {
  whatsapp: "5500000000000",
  diasSemAtendimento: [0]   // 0 = domingo, 6 = sábado
};

document.getElementById("ano").textContent = new Date().getFullYear();

// Menu mobile
const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("menu");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", open);
  toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
}));

// Formulário de agendamento → WhatsApp
const form = document.getElementById("booking-form");
const msg = form.querySelector(".form-msg");
const dateInput = form.data;

// Não permite datas passadas
const hoje = new Date();
hoje.setMinutes(hoje.getMinutes() - hoje.getTimezoneOffset());
dateInput.min = hoje.toISOString().split("T")[0];

form.addEventListener("submit", e => {
  e.preventDefault();
  const nome = form.nome.value.trim();
  const servico = form.servico.value;
  const data = dateInput.value;
  form.nome.classList.toggle("error", !nome);
  form.servico.classList.toggle("error", !servico);
  dateInput.classList.toggle("error", !data);

  if (!nome || !servico || !data) {
    msg.textContent = "Preencha nome, serviço e data.";
    return;
  }
  const dia = new Date(data + "T12:00:00").getDay();
  if (CONFIG.diasSemAtendimento.includes(dia)) {
    dateInput.classList.add("error");
    msg.textContent = "Não há atendimento nesse dia da semana. Escolha outra data.";
    return;
  }
  msg.textContent = "";
  const dataBR = data.split("-").reverse().join("/");
  const texto =
    `Olá! Gostaria de agendar um atendimento.\n\n` +
    `Nome: ${nome}\nServiço: ${servico}\nModalidade: ${form.modalidade.value}\n` +
    `Data de preferência: ${dataBR}\nPeríodo: ${form.periodo.value}`;
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`, "_blank");
});
