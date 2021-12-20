/* Números mágicos
Crea una web con bootstrap y js, que contenga un botón comenzar el juego,
en ese momento se crea un número aleatorio que el usuario deberá adivinar, 
la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, 
al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, 
si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.*/

let numberCardArea = document.querySelector("#number_card");
let cardSeleccion = document.querySelector("#cardSeleccion");
let cardsRandom = document.querySelector("#cardRandom");
let cardsResultado = document.querySelector("#cardResultado");

// =========Elecciones=============
let elecciones = [];

const agregarEleccion = function () {
	if (numberCardArea.value) {
		elecciones.push(numberCardArea.value);
		numberCardArea.value = " ";
		numberCardArea.focus();
		actualizarElecciones();
	}
};

const crearCardEleccion = function () {
	elecciones.map(function (eleccion, index) {
		const card = document.createElement("div");
		card.classList = "card my-2";

		let card_eleccion = `
              <div>
                <h5>Choose #: ${index}</h5>
                <h4>${eleccion}</h4>
              </div>
          `;
		card.innerHTML = card_eleccion;
		cardSeleccion.appendChild(card);
	});
};

const actualizarElecciones = function () {
	cardSeleccion.innerHTML = " ";
	crearCardEleccion();
};
//================= RANDOM============

let randomList = [];

const agregarRandom = function () {
	let numeroRandom = Math.round(Math.random() * 10);
	randomList.push(numeroRandom);
	actualizarRandomList();
};

const crearCardRandom = function () {
	randomList.map(function (random, index) {
		const cardRandom = document.createElement("div");
		cardRandom.classList = "card my-2";

		let card_random = `
              <div>
                <h5>Computer Choice #: ${index}</h5>
                <h4>${random}</h4>
              </div>
          `;
		cardRandom.innerHTML = card_random;
		cardsRandom.appendChild(cardRandom);
	});
};

const actualizarRandomList = function () {
	cardsRandom.innerHTML = " ";
	crearCardRandom();
};
//============ Resultado ===================

const resultado = function () {
	computador = randomList[randomList.length - 1];
	persona = elecciones[elecciones.length - 1];
	const cardResultado = document.createElement("div");
	cardResultado.classList = "card my-2";

	if (persona >= 0 && persona <= 10) {
		switch (true) {
			case computador == persona:
				// console.log("ganaste");
				let card_resultadoWin = `
              <div>
                <h4>YOU WIN</h4>
              </div>
          `;

				cardResultado.innerHTML = card_resultadoWin;
				cardsResultado.appendChild(cardResultado);
				break;
			default:
				// console.log("perdiste");
				let card_resultadoLoose = `
				<div>
				  <h4>YOU LOOSE</h4>
				</div>
			`;

				cardResultado.innerHTML = card_resultadoLoose;
				cardsResultado.appendChild(cardResultado);

				break;
		}
	} else {
		alert("el número elegido no es válido");
	}
};
