//OBJETO PERSONA

/*Crear un objeto llamado persona que contenga los siguientes atributos:
Nombre
Edad
DNI
Domicilio
Hijos (cantidad)
Profesión
Agregar Métodos:
Saludar ( mensaje de presentación en navegador o consola)
Listar (muestra la lista con los datos de la persona)*/

let persona = {};

const solicitarDatos = function () {
  let nombre = prompt("Ingrese su nombre");
  let apellido = prompt("Ingrese su apellido");
  let edad = parseInt(prompt("Ingrese su edad"));
  let dni = parseInt(prompt("Ingrese su DNI"));
  let domicilio = prompt("Ingrese su domicilio");
  let hijos = parseInt(prompt("Ingrese la cantidad de hijos que tienes"));
  let profesion = prompt("Ingrese su profesion");

  if (
    nombre === "" ||
    apellido === "" ||
    edad === "" ||
    dni === "" ||
    domicilio === "" ||
    hijos === "" ||
    profesion === ""
  ) {
    alert("🚨 Por favor ingrese todos los datos solicitados 🚨");
  } else {
    alert("Los datos se guardaron con exito 🎉");
    persona.Nombre = nombre;
    persona.Apellido = apellido;
    persona.Edad = edad;
    persona.Dni = dni;
    persona.Domicilio = domicilio;
    persona.Hijos = hijos;
    persona.Profesion = profesion;
    ListarDatos();
  }
};

//Funcion para saludar
const Presentacion = function () {
  console.log(
    `Hola buenas, mi nombre es ${persona.Nombre} ${persona.Apellido} tengo ${persona.Edad} años de edad, vivo en ${persona.Domicilio} actualmente mi profesion es ${persona.Profesion}. mi DNI(documento nacional de indentidad) es ${persona.Dni}`
  );
};

//Funcion para Listar los datos
const ListarDatos = function () {
  console.log("==== Datos ingresados ====");
  for (const key in persona) {
    console.log(`${key}: ${persona[key]}`);
  }
};
//====================================================================//

//ARREGLO DE OBJETOS

/*Crear un arreglo de objetos que contenga datos de películas como:
Título
Género
Año
sinopsis
Crea una función que permita mostrar en una lista cada película con sus datos.*/

let peliculas = [
  {
    titulo: "Shrek",
    genero: "Comedia/Fantasía",
    year: 2001,
    sinopsis:
      "Hace mucho tiempo, en una lejana ciénaga, vivía un ogro llamado Shrek. Un día, su preciada soledad se ve interrumpida por un montón de personajes de cuento de hadas que invaden su casa. Todos fueron desterrados de su reino por el malvado Lord Farquaad.",
  },
  {
    titulo: "El planeta del tesoro",
    genero: "Aventura/Infantil",
    year: 2002,
    sinopsis:
      "Jim Hawkins, un chico rebelde a quien siempre le han apasionado las historias de piratas, compite para encontrar un tesoro en el espacio exterior.",
  },
  {
    titulo: "Nueve reinas",
    genero: "Crimen/Drama",
    year: 2000,
    sinopsis:
      "Sinopsis: Juan (Gastón Pauls) y Marcos (Ricardo Darín) son dos estafadores de poca monta que se conocen por casualidad una madrugada y se ven metidos en un negocio turbio que los puede hacer millonarios. En realidad, ambos se jugarán su destino, su ser o no ser, en poco menos de 24 horas.",
  },
];
function listarPeliculas() {
  console.log("==== Lista de peliculas 🎬 ====");
  for (i = 0; i < peliculas.length; i++) {
    console.log("___________________");
    for (const key in peliculas[i]) {
      console.log(`${key}: ${peliculas[i][key]}`);
    }
  }
}
