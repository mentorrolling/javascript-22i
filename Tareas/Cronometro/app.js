/*Realizar una web con un cronómetro,
que tenga las opciones de iniciar,
reset(volver el cronómetro a 0) y pausar.
*/

let buttonStart = document.querySelector('#start');
let buttonClear = document.querySelector('#clear');
let buttonPause = document.querySelector('#pause');
let tiempo = document.querySelector('#tiempo')
let segundero = null
let inicioStart = false

let hr = 0
let min = 0
let seg = 0


const dibujar = function () {

    let tiempo = document.querySelector('#tiempo')
    let horario = ``
    
    if (hr < 10) {
        horario = `0${hr}:`    

        //tiempo.innerText=`0${hr}:0${min}:0${seg}`
    } else {
        horario=`${hr}:`
    }
    if (min < 10) {
        horario=horario+`0${min}:`    
        //tiempo.innerText=`0${hr}:0${min}:0${seg}`
    } else {
        horario=horario+`${min}:`
    }
    if (seg < 10) {
        horario=horario+`0${seg}`    
        //tiempo.innerText=`0${hr}:0${min}:0${seg}`
    } else {
        horario=horario+`${seg}`
    }

    tiempo.innerText=horario
    
}


const start = function () {

    if (inicioStart === false) {
      
      
        segundero = setInterval(function () {
    
            seg += 1
            
            if (seg === 60) {
                seg = 0
                min += 1
                if (min === 60) {
                    min = 0
                    hr += 1
                }
            }
        
            dibujar()
        }), 1000;
        inicioStart = true
    }
}

const pause = function () {
    clearInterval(segundero);
    inicioStart = false;
}

const clear = function () {

    seg = 0
    min = 0
    hr = 0

    clearInterval(segundero);
    inicioStart = false;
    dibujar()

}




buttonClear.addEventListener('click', clear)
buttonStart.addEventListener('click',start)
buttonPause.addEventListener('click',pause)