let textTarea = document.querySelector("#text_task");
let cards = document.querySelector("#cards");
let contador = document.querySelector("#total");

let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

const agregarTarea = function () {
  if (textTarea.value) {
    tareas.push(textTarea.value);
    textTarea.value = "";
    textTarea.focus();
    // console.log(tareas);
    actualizarLista();
  }
};

const crearCardTarea = function () {
  tareas.map(function (tarea, index) {
    const card = document.createElement("div");
    card.classList = "card";

    let card_tarea = `
        <div class="card-body d-flex justify-content-between align-items-center">
            <div>
            <h4>📌 ${tarea}</h4>
            </div>
            <div>
                <button class="btn btn-danger" onclick="borrarTarea(${index})">X</button>
            </div>
        </div>
        `;
    card.innerHTML = card_tarea;
    cards.appendChild(card);
  });
};

const actualizarLista = function () {
  localStorage.setItem("tareas", JSON.stringify(tareas));
  cards.innerHTML = "";
  crearCardTarea();
  contador.innerHTML = `<b>Total: </b>${tareas.length}`;
};

const borrarTarea = function (id) {
  tareas.splice(id, 1);
  actualizarLista();
};

textTarea.addEventListener("keypress", function (e) {
  //   console.log(e);
  if (e.keyCode === 13) {
    agregarTarea();
  }
});

actualizarLista();
