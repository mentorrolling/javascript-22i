//Estructuras de control

//if...else

/*
si se cumple la condición entonces se realiza la acción
 */

// if (condition) {

//     //acciones

// }

// if (condition) {
//     //acciones
// } else {
//    //acciones si no
// }

let num = 10;

if (num % 2 === 0) {
  console.log("El número es par");
} else {
  console.warn("El número no es par");
}

// if (condition) {
// } else if (condicion2) {
//   //acciones
// } else if (condicion3) {
//   //acciones
// } else {
//   //accion si no se cumple ninguna
// }

//Ejemplo
if (num > 10) {
  console.log("El número es mayor que 10");
} else if (num < 10) {
  console.log("El número es menor que 10");
} else {
  console.log("El número es igual a 10");
}

//ejemplo de Rolling Fest
/*
Solo pueden entrar a Rolling Fest quienes cumplan estas condiciones:
- Tiene que ser mayor de edad (mayor o igual a 18)
- Si es menor de edad tiene que venir acompañado de un tutor.

*/

//Datos de entrada
//edad
//tutor

// let edad = 10;15
// let tutor = false;

let edad = parseInt(prompt("Ingresa tu edad"));

if (isNaN(edad)) {
  alert("Debe ingresar un número");
} else {
  if (edad >= 18) {
    alert("Puedes entrar a Rolling Fest 😎");
  } else if (confirm("¿Vienes con un tutor?")) {
    alert("Puedes entrar a Rolling Fest pero no te separes de tu tutor 🙂");
  } else {
    alert("No puedes entrar a Rolling Fest 😞");
  }
}
