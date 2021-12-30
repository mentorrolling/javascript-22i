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

// alumnos.map(function (persona, index) {
//   console.log(`${index + 1} - Nombre: ${persona}`);
// });

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
    if (buscarPelicula(titulo)) {
      alert("La película ya existe");
    } else {
      peliculas.push(titulo.toUpperCase());
    }
    //verificar que la película no exista
    titulo = prompt("Ingrese el título de la película 🎞️");
  }
  listarPeliculas(peliculas);
}

//listar peliculas
function listarPeliculas(arreglo) {
  if (arreglo.length > 0) {
    console.log("======Listado de películas======");
    arreglo.sort().map(function (item, index) {
      console.log(`${index + 1} - ${item}`);
    });
    console.log("=============================");
  } else {
    console.log("No hay películas para listar");
  }
}

//filtrar peliculas
function filtrarPeliculas(termino = prompt("Ingrese el término a buscar")) {
  let newPeliculas = peliculas.filter(function (pelicula) {
    return pelicula.includes(termino.toUpperCase());
  });

  if (newPeliculas.length > 0) {
    listarPeliculas(newPeliculas);
  } else {
    console.warn("No hay resultados para la búsqueda");
  }
}

//Función que evalua si una película existe
const buscarPelicula = function (titulo) {
  let existePelicula = peliculas.find(function (pelicula) {
    return pelicula === titulo.toUpperCase();
  });

  if (existePelicula) {
    return true;
  } else {
    return false;
  }
};

//Borrar una película

const borrarPelicula = function () {
  let titulo = prompt("Ingrese la película a eliminar");

  let indice = peliculas.indexOf(titulo.toUpperCase());

  if (indice >= 0) {
    let validar = confirm(
      `Está seguro que quiere eliminar ${peliculas[indice]}`
    );

    if (validar) {
      peliculas.splice(indice, 1);
      alert("Película eliminada 🤙");
    }
  } else {
    alert("Película no encontrada 😞");
  }
};

//Juego de piedra, papel o tijera

let opciones = ["PIEDRA", "PAPEL", "TIJERA"];
let jugador = null;
let bot = null;

function numeroRandom() {
  return Math.round(Math.random() * 2);
}

function playGame() {
  //Determinar el valor elegido por el bot
  bot = numeroRandom();

  jugador = parseInt(
    prompt("Ingrese la opción (PIEDRA=0 | PAPEL=1 | TIJERA=2")
  );

  if (isNaN(jugador)) {
    return alert("Debe ingresar una opción válida");
  }

  if (jugador >= 0 && jugador <= 2) {
    switch (true) {
      case jugador === 0 && bot === 2:
        mensajeJuego("Ganaste");
        break;
      case jugador === 1 && bot === 0:
        mensajeJuego("Ganaste");
        break;
      case jugador === 2 && bot === 1:
        mensajeJuego("Ganaste");
        break;
      case jugador === bot:
        mensajeJuego("Empate");
        break;
      default:
        mensajeJuego("Perdiste");
        break;
    }
  } else {
    alert("Debe ingresar un valor entre 0 y 2");
  }

  // console.log(`Jugador: ${opciones[jugador]} | bot: ${opciones[bot]}`);
}

const mensajeJuego = function (mensaje) {
  switch (mensaje) {
    case "Ganaste":
      Swal.fire({
        icon: "success",
        title: "GANASTE 🤩",
        text: `${opciones[jugador]} vence a ${opciones[bot]}`,
      });
      break;
    case "Empate":
      Swal.fire({
        icon: "info",
        title: "EMPATE 😐",
        text: `${opciones[jugador]} es igual a ${opciones[bot]}`,
      });
      break;
    case "Perdiste":
      Swal.fire({
        icon: "error",
        title: "PERDISTE 😞",
        text: `${opciones[bot]} vence a ${opciones[jugador]}`,
      });
      break;
  }
};


// ================================
// Tarea

// Crear una aplicación con javascript de un carrito de compras
// -------------------------------------------------------------------

// - La aplicación debe poder hacer lo siguiente:
//  - Agregar productos al carrito (agregarlos hasta que se cancele el prompt)
//  - Eliminar un producto del carrito (recibe el nombre del producto a eliminar)
//  - Filtrar elementos del carrito según una palabra o término ingresado
//  - Listar todos los productos que estén en el carrito en orden alfabético

//agregar producto

let carrito=[]

function carritoCompras (){
    let articulo = prompt("Ingrese el articulo que desea adquirir 🛒")
    while (articulo) {
carrito.push(articulo.toUpperCase())
articulo = prompt("Ingrese el articulo que desea adquirir 🛒")
    }
    listadoArticulos(carrito)
}
  
//listar articulos en orden alfabetico

function listadoArticulos(array){

    if (array.length > 0){
        console.log("====Listado de articulos====");
        array.sort().map(function(item, index){
            console.log(`${index + 1} - ${item}`);
        })
        console.log("============");
    }else {
        console.log("No hay articulos para listar");
      }
    }

//filtrar articulos

function filtrarArticulos(termino = prompt("Ingrese el término o palabra a buscar")) {
    let newArticulos = carrito.filter(function (articulo) {
      return articulo.includes(termino.toUpperCase());
    });
  
    if (newArticulos.length > 0) {
      listadoArticulos(newArticulos);
    } else {
      console.warn("No hay resultados para la búsqueda");
    }
  }

  //eliminar articulo

  const borrarArticulo = function(){
      let producto = prompt("Ingrese el articulo que desea eliminar 🚫")

      let indice = carrito.indexOf(producto.toUpperCase())

      if(indice>=0){
        let validar = confirm(
            `Está seguro que quiere eliminar ${carrito[indice]}`
          );
          if (validar){
              carrito.splice(indice, 1)
              alert("Articulo eliminado")
          }
      }else{
          alert("Articulo no encontrado")
      }
  }