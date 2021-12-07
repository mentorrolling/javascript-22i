/*Array
Crea un arreglo llamado "tareas"

Agregar mínimo tres tareas con el método correspondiente

Mostrar en consola o por pantalla la lista de las tareas ordenadas alfabéticamente y
numeradas. Por ejemplo:
1 - Estudiar javascript
2 - Sacar al perro
3 - Tirar la basura

Mostrar tambien la cantidad de tareas que hay en el arreglo

Eliminar la primer tarea y agregar una nueva en su lugar. Usar los métodos correspondientes.

Reemplazar el valor de la última tarea por "Hacer la tarea para el 24 de noviembre" usando
algún método de los arreglos.*/

let tareas = [];
let tareasAgregar = prompt("Escribe la tarea que quieres agregar a tu lista");
while (tareasAgregar) {
  tareas.push(tareasAgregar);

  tareasAgregar = prompt("Escribe la tarea que quieres agregar a la lista");
}
console.log("🔽===Lista oredenada numericamente y alfabéticamente===🔽");
for (let i = 0; i < tareas.length; i++) {
  console.log(`${i + 1} - ${tareas[i]}`);
}

console.log(`La cantidad de tareas que hay en el arreglo son:${tareas.length}`);

console.log("🔽 El arreglo luego de eliminar la primera tarea y poner otra 🔽");
tareas.splice(0, 1, "Lavar los platos");
console.log(tareas);

console.log("🔽 El arreglo luego de eliminar la ultima tarea y poner otra 🔽");
tareas.splice(tareas.length - 1, 1, "Hacer la tarea para el 24 de noviembre");
console.log(tareas);
