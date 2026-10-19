// =========================================================
// TEMPLATE 03 · PORTFÓLIO
// =========================================================
document.getElementById("ano").textContent = new Date().getFullYear();

// Filtro por categoria
const buttons = document.querySelectorAll(".filters button");
const items = [...document.querySelectorAll(".item")];
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const f = btn.dataset.filter;
    items.forEach(item => item.classList.toggle("is-hidden", f !== "todos" && item.dataset.category !== f));
  });
});

// Lightbox com navegação (setas do teclado também funcionam)
const box = document.querySelector(".lightbox");
const boxImg = box.querySelector("img");
const boxCap = box.querySelector(".lightbox__caption");
let current = 0;
const visible = () => items.filter(i => !i.classList.contains("is-hidden"));

function show(index) {
  const list = visible();
  current = (index + list.length) % list.length;
  const img = list[current].querySelector("img");
  boxImg.src = img.src;
  boxImg.alt = img.alt;
  boxCap.textContent = list[current].querySelector("strong").textContent;
}
items.forEach(item => {
  item.querySelector(".item__open").addEventListener("click", () => {
    show(visible().indexOf(item));
    box.showModal();
  });
});
box.querySelector(".lightbox__close").addEventListener("click", () => box.close());
box.querySelector(".lightbox__prev").addEventListener("click", () => show(current - 1));
box.querySelector(".lightbox__next").addEventListener("click", () => show(current + 1));
box.addEventListener("click", e => { if (e.target === box) box.close(); });
document.addEventListener("keydown", e => {
  if (!box.open) return;
  if (e.key === "ArrowLeft") show(current - 1);
  if (e.key === "ArrowRight") show(current + 1);
});

// Botão "Copiar e-mail"
const copyBtn = document.querySelector(".copy");
copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(copyBtn.dataset.copy);
    copyBtn.textContent = "E-mail copiado";
  } catch {
    copyBtn.textContent = copyBtn.dataset.copy;
  }
  setTimeout(() => (copyBtn.textContent = "Copiar e-mail"), 2500);
});
