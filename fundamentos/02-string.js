//string

let nombre = "Josefina";
let apellido = "Perez";

let frase = "             El futuro es hoy                ";

console.log("Mi nombre es:", nombre, apellido);
console.log("Mi nombre es: " + nombre + " " + apellido);

//template string
// alt gr + }
console.log(`Mi nombre es ${nombre} ${apellido}`);

//métodos de los string
console.log(nombre.toUpperCase());
console.log(nombre.toLowerCase());

//la cantidad de caracteres de un string
console.log(apellido.length);

//obtener un caracter en particular
console.log(nombre.charAt(5));

//obtener caracteres desde una posicion
console.log(nombre.substr(1, 3));

//quitar espacios en blanco adelante y atras de un string
console.log(frase.trim());

//obtener el último caracter
console.log(nombre.charAt(nombre.length - 1));

//como saber si un caracter esta dentro del string
console.log(frase.includes("mundo"));

//reemplazar caracteres
console.log(frase.replace("futuro", "presente"));
let nuevaFrase = frase.replace("El futuro", "La cena").trim();

console.log(apellido.slice(0, 4));

//split
let letras = nuevaFrase.split(" ");

//join
let palabritas = letras.join(" ");

/*
Tarea 1:

Dado el siguiente texto:
"React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien."

Reemplazar la palabra React por "Esta librería" en un nuevo texto.
Devuelve en consola si el texto contiene la palabra "eficiente"
Devuelve en consola si el texto contiene la palabra "elementos"

*/

/*
Tarea 2:
 indexOf()
 
Dada la frase: "Hoy es un buen día para aprender"
Separa en un arreglo cada palabra
Crea una nueva frase basandote en la anterior que diga: "Hoy es un buen día"
 */

const frase = "Hoy es un buen día para aprender";

console.log(frase.split(" "));

const corte = frase.indexOf("para");
console.log(frase.slice(0, corte));

const nuevaFrase = frase.slice(0, corte - 1);

/*
Tarea 3:

Capitaliza la siguiente palabra: "marmota"
*/

let palabra = "josecito";

let capitalizada = palabra.charAt(0).toUpperCase() + palabra.slice(1);

console.log(capitalizada);
