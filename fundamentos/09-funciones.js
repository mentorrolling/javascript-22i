//funciones

//tareas

//Declarativas
function saludar(nombre) {
  //acciones
  console.log("Hola como va?", nombre);
}

let persona = "Alejandro";

saludar(persona);

//Anónimas

const saludar2 = function (pepito) {
  console.log(`Bienvenido ${pepito}`);
  //acciones
};

saludar2(persona);

//----------------------------------
let num1 = 45;
let num2 = 26;
let num3 = -14;

// function suma(a,b){

//   console.log(a+b)

// }

// suma(34,56)

//scope-------------
function suma() {
  // let num1=12
  // let num2=20

  num3 = 789;

  console.log(num1 + num2);
}

suma();

//return
function obtenerPar(num) {
  if (num % 2 === 0) {
    return "El número es par";
  } else {
    return "El número no es par";
  }
}

let mensaje = obtenerPar(20);

//--------------------------------------

let valor1 = parseFloat(prompt("Ingrese el primer valor"));
let valor2 = parseFloat(prompt("Ingrese el segundo valor"));

function calculadora(num1, num2) {
  if (!num1 || !num2) {
    return "Falta alguno de los números";
  }

  let operacion = prompt("Ingrese la operación");

  switch (operacion) {
    case "suma":
      return num1 + num2;

    case "resta":
      return num1 - num2;
    case "multi":
      return num1 * num2;
    case "division":
      return num1 / num2;

    default:
      return "Operación inválida";
  }
}
let resultado = calculadora(valor1, valor2);
console.log("El resultado es", resultado);

//--------------------------------------

function calcularTabla() {
  let tabla = parseInt(prompt("Ingrese la tabla a calcular"));

  while (tabla) {
    console.log(`======Tabla del ${tabla}======`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${tabla} x ${i} = ${tabla * i}`);
    }

    console.log("============================");

    tabla = parseInt(prompt("Ingrese la tabla a calcular"));
  }

  // if(isNaN(tabla)){
  //   console.log('El valor ingresado no es un número')
  // }
}


