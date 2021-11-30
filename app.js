//callback
function cualquiera(rrr) {
  //acciones
}

function otracosa() {
  //acciones
}

cualquiera(otracosa());

//metodos de los arreglos

let alumnos = ["Fabrizio", "Daniel", "José", "Miqueas"];

let numeros = [50, 78, 100, 1500, 2000];

//find
let busqueda = alumnos.find(function (alumno) {
  return alumno === "José";
});

//filter
let alumnosJose = alumnos.filter(function (alumno) {
  // return alumno==='Jose'
  return alumno.includes("el");
});

//map
let numerosCuadrados = numeros.map(function (numero) {
  return Math.pow(numero, 2);
});

alumnos.map(function (persona, index) {
  console.log(`${index + 1} - Nombre: ${persona}`);
});

//----ejercicio-----------
let peliculas = [
  "EL HOMBRE DE LA MÁSCARA DE HIERRO",
  "EL HOMBRE DE ACERO",
  "SPIDERMAN 2",
  "AVENGERS END GAME",
];

//agregar peliculas
function agregarPelicula() {
  let titulo = prompt("Ingrese el título de la película 🎞️");

  while (titulo) {
    peliculas.push(titulo.toUpperCase());
    titulo = prompt("Ingrese el título de la película 🎞️");
  }
  listarPeliculas(peliculas)
}

//listar peliculas
function listarPeliculas(arreglo) {
  if (arreglo.length > 0) {
    console.log("======Listado de películas======");
    arreglo.sort().map(function (item, index) {
      console.log(`${index + 1} - ${item}`);
    });
    console.log("=============================");
  }else{
      console.log('No hay películas para listar')
  }
}

//filtrar peliculas
function filtrarPeliculas(termino=prompt('Ingrese el término a buscar')){

    let newPeliculas=peliculas.filter(function(pelicula){
        return pelicula.includes(termino.toUpperCase())
    })

    if(newPeliculas.length>0){
        listarPeliculas(newPeliculas)
    }else{
        console.warn('No hay resultados para la búsqueda')
    }
}

