// perfil.js – Scripts exclusivos para perfil de entrenador

document.addEventListener("DOMContentLoaded", () => {
  const filtros = document.querySelector("#filtros");
  const entrenadores = document.querySelectorAll(".card");

  if (filtros) {
    filtros.addEventListener("change", () => {
      const seleccion = filtros.value.toLowerCase();

      entrenadores.forEach((card) => {
        const especialidad = card
          .getAttribute("data-especialidad")
          .toLowerCase();
        if (seleccion === "todos" || especialidad === seleccion) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  }
});
