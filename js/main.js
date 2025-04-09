// main.js para FutbolCoaches

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".formulario");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Gracias por contactarnos. Te responderemos pronto.");
      form.reset();
    });
  }

  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("hovered");
    });
    card.addEventListener("mouseleave", () => {
      card.classList.remove("hovered");
    });
  });
});
