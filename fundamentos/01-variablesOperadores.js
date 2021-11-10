//Variables

//Espacio en memoria

var nombre = "José";

let apellido = "Gonzalez"; //string

const pi = 3.14; //number

//tipos de datos

//string
let cliente = "Alfredo Rodriguez";

//number
let numero1 = 34;
let numero2 = 25.89;
let numero3 = -65;

//boolean
let comprar = true;
let comer = false;

//null
let billetera = null;

//undefined
let caja;

//array o arreglos
let frutas = ["Banana", "Manzana", 12, true];

//objetos u object
let persona = {
  nombre: "Matias",
  apellido: "Figueroa",
};

//Operadores

//Aritméticos
let suma = numero1 + numero2;
let resta = numero2 - numero3;
let multiplicacion = numero1 * numero3;
let division = numero1 / numero2;
let resto = numero1 % numero2;

//unitarios
++numero1;
--numero1;

//Relacionales
console.log(numero1 == numero2);
console.log(numero1 >= numero2);
console.log(numero1 <= numero2);
console.log(numero3 != numero2);

//Negacion
let abierto = false;

//Tarea
// Creamos dos variables: numero1, numero2
// mostramos por consola los resultados de las operaciones
// Sumamos dos números
// Restamos dos números
// multiplicamos dos números
// Dividimos dos npumeros
// comparamos si el numero 1 es mayor o igual que numero 2
// comparamos si numero 1 es distinto de numero 2

let num1 = 20;
let num2 = 82;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

console.log(
  "El resultado si el numero 1 es mayor o igual que numero 2 es",
  num1 >= num2
);

console.log("El resultado si numero 1 es distinto de numero 2", num1 != num2);

console.log("Mi nombre es " + nombre + " " + apellido);

let nombrecito = prompt("Escribe tu nombre");
let edad = prompt("Ingresa tu edad");

console.log("=======Datos de usuario============");
console.log("Nombre de usuario: " + nombrecito);
console.log("Edad: " + edad);
console.log("====================================");
