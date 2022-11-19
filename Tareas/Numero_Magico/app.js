//Crea una web con bootstrap y js, que contenga un botón comenzar el juego,
//en ese momento se crea un número aleatorio que el usuario deberá adivinar, la
//interfaz del usuario debe tener además un input para ingresar un número y un botón enviar,
//al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico,
//si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
//Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.

let jugadorInput = document.querySelector("#jugadorInput")
let jugadorButton = document.querySelector("#jugadorButton")
let gameConcepto = document.querySelector("#game")
let historial = []
let score = 0




const numeroRandom = function () {
  
  return Math.round(Math.random() * 20)
}

let cpu = numeroRandom();
console.log(cpu)

const game = function () {
  if (jugadorInput.value == cpu) {
    
    if (confirm(`Ganaste Puntos: ${score+1} Quieres volver a jugar?`)) {
      
      location.reload()
    }
  }else{
    rango()
    }
}

const rango = function () {
  if (jugadorInput.value < cpu) {
    
    alert("El valor ingresado es menor")
  } else {
    alert("El valor ingresado es mayor")
  }
}

const mostrarHistorial = function () {
  const scoreMuestra = document.createElement("div");
  let htmlSocre = `
  <div class="card row">
  <div class="card-body col">
            <h5>Puntos: ${++score}</h5>
        </div>
    </div>
  
  `
  scoreMuestra.innerHTML=htmlSocre
  gameConcepto.appendChild(scoreMuestra)

  historial.map(function (historia, i) {
  
    const cardHistorial = document.createElement("div");
    
    let historialMuestra = `
    <div class="card row">
       
    <div class="card-body col offset-5">
            <h5>${i+1} - ${historia}</h5>
        </div>
    </div>
  
  `
    cardHistorial.innerHTML = historialMuestra;
    gameConcepto.appendChild(cardHistorial)

    
  })
  
}

const agregarHistorial = function () {
  if (historial.length === 5) {
    historial.splice(0, 1)
    historial.push(jugadorInput.value)
  }else{
    historial.push(jugadorInput.value)
  }
  gameConcepto.innerHTML=""
  mostrarHistorial()
}


const enviarInfo = function (e) {
  if(e.keyCode === 13 && parseInt(jugadorInput.value)
     || e.button===0 && parseInt(jugadorInput.value)){
    game();
    agregarHistorial()
    
    jugadorInput.value = ""
  }
}


jugadorInput.addEventListener("keypress", enviarInfo)
jugadorButton.addEventListener("click", enviarInfo)



