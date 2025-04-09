document.addEventListener("DOMContentLoaded", () => {
  const userRole = document.querySelector('select[name="rol"]');
  const profileContainer = document.getElementById("profileContainer");
  const createTrainerForm = document.getElementById("createTrainerForm");

  userRole.addEventListener("change", (event) => {
    const role = event.target.value;

    if (role === "cliente") {
      profileContainer.innerHTML = `
        <h2>Entrenadores Disponibles</h2>
        <div id="trainersList">
          <!-- Example trainer cards -->
          <div class="trainer-card">
            <h3>Juan Pérez</h3>
            <p>Especialidad: Fútbol ofensivo</p>
            <button class="btn-info" data-trainer="Juan Pérez">Ver más información</button>
          </div>
          <div class="trainer-card">
            <h3>María López</h3>
            <p>Especialidad: Defensa estratégica</p>
            <button class="btn-info" data-trainer="María López">Ver más información</button>
          </div>
        </div>
      `;

      document.querySelectorAll(".btn-info").forEach((button) => {
        button.addEventListener("click", () => {
          const trainerName = button.getAttribute("data-trainer");
          alert(`Mostrando más información sobre ${trainerName}`);
        });
      });
    } else if (role === "entrenador") {
      profileContainer.innerHTML = `
        <h2>Crear Nueva Tarjeta de Entrenador</h2>
        <form id="createTrainerForm">
          <input type="text" placeholder="Nombre del entrenador" name="trainerName" required />
          <input type="text" placeholder="Especialidad" name="specialty" required />
          <button type="submit" class="btn-principal">Guardar</button>
        </form>
        <div id="trainersList">
          <h3>Entrenadores Creados</h3>
        </div>
      `;

      document
        .getElementById("createTrainerForm")
        .addEventListener("submit", (event) => {
          event.preventDefault();
          const trainerName = event.target.trainerName.value;
          const specialty = event.target.specialty.value;

          const trainersList = document.getElementById("trainersList");
          const newTrainerCard = document.createElement("div");
          newTrainerCard.classList.add("trainer-card");
          newTrainerCard.innerHTML = `
          <h3>${trainerName}</h3>
          <p>Especialidad: ${specialty}</p>
        `;
          trainersList.appendChild(newTrainerCard);

          event.target.reset();
        });
    } else {
      profileContainer.innerHTML = "";
    }
  });
});
