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

persona.edad = 25;

delete persona.saludar;

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
