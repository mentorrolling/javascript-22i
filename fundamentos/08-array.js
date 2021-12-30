//arreglos o arrays

//listas

let alumnos = ["José", "Fabrizio", "Anabel", "Chuky", "Barney"];

//Saber la cantidad de elementos
console.log(alumnos.length);

//Obtener un elemento
console.log(alumnos[2]);

//Obtener el último elemento
console.log(alumnos[alumnos.length - 1]);

//Obtener los elementos en un string
console.log(alumnos.join(","));

//Iterar un arreglo
for (let i = 0; i < alumnos.length; i++) {
  console.log(`Bienvenido ${alumnos[i]}`);
}

for (let alumno of alumnos) {
  console.log(`Bienvenido querid@ ${alumno}`);
}

//Agregar un elemento al final
alumnos.push("Fredy", "Fernando");
console.log(alumnos);

//Agregar un elemento al principio
alumnos.unshift("Walter");
console.log(alumnos);

//Eliminar el ultimo elemento
alumnos.pop();
console.log(alumnos);

//Eliminar el primer elemento
alumnos.shift();
console.log(alumnos);

//Eliminar un elemento por su posición
const pos = 3;
alumnos.splice(pos, 1);
console.log(alumnos);

//Como obtengo la posicion de un elemento
console.log(alumnos.indexOf("Fabrizio"));

//Saber si un elemento existe en el arreglo
console.log(alumnos.includes("Pablo"));

//Modificar elementos del arreglo
alumnos.splice(4, 1, "Alberto");
console.log(alumnos);

alumnos.splice(2, 1, "Rupertina");
console.log(alumnos);

alumnos.splice(0, 2, "Pablo", "Facundo");
console.log(alumnos);

//Concatenar dos arreglos
const alumnas = ["Margarita", "Kelly", "Florinda", "Jessica"];

const comision = alumnas.concat(alumnos);
console.log(comision);

//Ordenar alfabéticamente un arreglo
console.log(comision.sort());

//Ordenar de Z - A
console.log(comision.reverse());

//Arreglo de números
let numeros = [52, 2, 69, 35, 28, 1500, 800];

console.log(
  numeros.sort(function (a, b) {
    return a - b;
  })
);

console.log(["🥚", "🐓"].sort());

/*Tarea Array
- Crea un arreglo llamado tareas
- Agregar mínimo tres tareas con el método correspondiente
- Mostrar en consola o por pantalla la lista de las tareas ordenadas alfabéticamente y numeradas. Por ejemplo:
1 - Estudiar javascript
2 - Sacar al perro
3 - Tirar la basura
- Mostrar tambien la cantidad de tareas que hay en el arreglo
- Eliminar la primer tarea y agregar una nueva en su lugar. Usar los métodos correspondientes.
- Reemplazar el valor de la última tarea por "Hacer la tarea para el 24 de noviembre" usando algún método de los arreglos.*/

let tareas = [];

tareas.push("1-lavar la ropa", "3-estudiar JS", "2-acomodar la habitacion")

tareas.sort(); 

for (let i = 0; i < tareas.length; i++) {
    console.log(`${tareas[i]}`);
  }

  console.log(`Cantidad de tareas en la lista ${tareas.length}`);

tareas.shift()

tareas.unshift("1-descansar")

tareas.splice(2,1,"3-Hacer la tarea para el 24 de noviembre")

