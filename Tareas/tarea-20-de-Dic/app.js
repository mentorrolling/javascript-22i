//Números mágicos

/*Crea una web con bootstrap y js, que contenga un botón 'comenzar el
juego', en ese momento se crea un número aleatorio que el usuario deberá
adivinar, la interfaz del usuario debe tener además un input para ingresar
un número y un 'botón enviar', al presionar el botón enviar mostrar en un
alert si el usuario adivino o no el número mágico, si no lo adivino
indicarle con un alert si el numero que ingreso es mayor o menor al
número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al 
usuario que adivino el numero.*/

let cardContenedor = document.querySelector("#card-game");

let btnStart = document.querySelector("#start");

// Funcion que remplaza el boton de jugar por el formulario para el usuario.
const remplazar = function () {
  const cont = document.createElement("div");
  let FormularioGame = `<h5 class="text-muted">
    Adivina el numero que eligió el robot entre el 0 y 10
    </h5>
    <div class="input-group mb-3">
    <input
    type="number"
    class="form-control"
    id="inputUser"
    min="0"
    max="10"
    autofocus
    aria-label="Sizing example input"
    aria-describedby="inputGroup-sizing-default"
    placeholder="Elige un numero entre 0 y 10..."
    />
    </div>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
    <button
    class="btn btn-primary me-md-2"
    onclick="comparacion()"
    id="Send"
    type="button"
    >
    Enviar
    </button>
    <button class="btn btn-secondary" type="button" onclick ="recargarPag()">
    Resetear
    </button>
    </div>`;
  cont.innerHTML = FormularioGame;
  cardContenedor.appendChild(cont);
  cardContenedor.replaceChild(cont, btnStart);
};

// Funcion para hacer la compacion del numero random y el del usuario.
const comparacion = function () {
  //Generamos el numero random que simula ser la maquina.
  let numberRandom = Math.round(Math.random() * 10);

  console.log("numero random: ", numberRandom);
  // Selecionamos el input creado.
  let userInput = document.querySelector("#inputUser");

  // Agarramos el numero que eligio el usuario y lo trasformamos a number
  let numerUser = parseInt(userInput.value);

  if (numberRandom === numerUser) {
    mensajeJuego("Ganaste");
  } else {
    mensajeJuego("Perdiste");
  }
};

// Funcion que simula el reseteo de la partida.
const recargarPag = function () {
  location.reload();
};

// Mensajes para el usuario.
const mensajeJuego = function (mensaje) {
  if (mensaje === "Ganaste") {
    Swal.fire({
      title: "🎉 GANASTE 🎉",
      text: "Felicidades adivinaste el numero de la maquina.",
      imageUrl:
        "https://c.tenor.com/dSiQJughhlYAAAAC/fetal-position-futurama.gif",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Bender asustado",
    });
  } else if (mensaje === "Perdiste") {
    Swal.fire({
      title: "PERDISTE 😕",
      text: "No adivinaste el numero de la maquina.",
      imageUrl: "https://c.tenor.com/MJp8GAxeCdUAAAAC/bender-futurama.gif",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Bender bailando",
    });
  }
};
btnStart.addEventListener("click", remplazar);

// ==================================================== //

// Cronómetro

/*Realizar una web con un cronómetro, que tenga las opciones de iniciar,
reset (volver el cronómetro a 0) y pausar.*/

let segundoId = document.querySelector("#segundo");
let minutoId = document.querySelector("#minuto");
let horaId = document.querySelector("#hora");

let btnIniciar = document.querySelector("#play");
let btnPausa = document.querySelector("#pause");
let btnResetear = document.querySelector("#repeat");

let contador_s = 0;
let contador_m = 0;
let contador_h = 0;

const iniciar = function () {
  segundero = setInterval(function () {
    if (contador_s === 60) {
      contador_s = 0;
      contador_m++;
      minutoId.innerHTML = contador_m;

      if (contador_m === 60) {
        contador_h++;
        contador_m = 0;
      }
    }
    segundoId.innerHTML = contador_s;
    minutoId.innerHTML = contador_m;
    horaId.innerHTML = contador_h;
    contador_s++;
  }, 1000);
};

const pausar = function () {
  clearInterval(segundero);
};

const resetear = function () {
  pausar();
  segundoId.innerHTML = 0;
  minutoId.innerHTML = 0;
  horaId.innerHTML = 0;

  contador_s = 0;
  contador_m = 0;
  contador_h = 0;
};

btnIniciar.addEventListener("click", iniciar);
btnPausa.addEventListener("click", pausar);
btnResetear.addEventListener("click", resetear);
