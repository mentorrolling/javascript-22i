//-------objetos-----------------

let persona = {
  nombre: "Fabrizio",
  apellido: "Tonin",
  domicilio: "Gral Paz 576",
  ciudad: "Tucumán",
  saludar() {
    console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
  },
};

console.log(persona.nombre);

//Cambiar el valor de una propiedad
persona.nombre = "Alfredo";

//Crear nueva propiedad o metodo
persona.edad = 25;

//Borrar algo dentro del objeto
delete persona.saludar;

//forIn para iterar un objeto
for (const key in persona) {
  console.log(`${key}: ${persona[key]}`);
}

//arreglos de objetos
let cursos = [
  { id: 1, titulo: "Javascript para principiantes", precio: 2500 },
  { id: 2, titulo: "HTML introducción", precio: 1500 },
  { id: 3, titulo: "CSS diseño responsive", precio: 2000 },
  { id: 4, titulo: "Bootstrap 5 grillas responsive", precio: 2100 },
];

cursos.map(function (curso) {
  console.log(curso.titulo);
});


/* Tarea

- Crear un objeto llamado persona que contenga los siguientes atributos:
 - Nombre
 - Edad
 - DNI
 - Domicilio
 - Hijos (cantidad)
 - Profesión
- Agregar Métodos:
 - Saludar ( mensaje de presentación en navegador o consola)
 - Listar (muestra la lista con los datos de la persona)*/

 let persona1 = {
  nombre: "miqueas",
  edad: "",
  dni: "",
  domicilio: "",
  cantidadHijos: "",
  profesion: "",

  saludar() {
    console.log(`Hola, soy ${this.nombre} 😊`);
  },
  };

  for (const key in persona1) {
      console.log(`${key}: ${persona1[key]}`);
      
  }

 /*- Crear un arreglo de objetos que contenga datos de películas como:
 - Título
 - Género
 - Año
 - sinopsis
- Crea una función que permita mostrar en una lista cada película con sus datos.
 */


 