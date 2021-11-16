//Switch

// switch (key) {
//   case value:
//     //acciones
//     break;

//   case value2:
//     //acciones

//     break;

//   default:
//       //acciones por defecto

//     break;
// }

// let fruta = prompt("Ingrese la fruta a consultar");

// switch (fruta) {
//   case "Manzanas":
//     console.log(`El kilo de Manzanas cuesta $200`);
//     break;
//   case "Bananas":
//     console.log(`El kilo de Bananas cuesta $350`);
//     break;
//   case "Naranjas":
//     console.log(`El kilo de Naranjas cuesta $220`);
//     break;
//   case "Cerezas":
//     console.log(`El kilo de Cerezas cuesta $270`);
//     break;
//   case "Mangos":
//   case "Papayas":
//     console.log(`El kilo de Mangos o Papayas cuesta $300`);
//     break;

//   default:
//     console.log("Lo lamentamos, no disponemos de estas frutas por el momento");
//     break;
// }

let diaHoy = new Date().getDay();

switch (diaHoy) {
  case 0:
    console.log("Hoy es Domingo 😎");
    break;
  case 1:
    console.log("Hoy es Lunes 😪");
    break;
  case 2:
    console.log("Hoy es Martes 😐");
    break;
  case 3:
    console.log("Hoy es Miercoles 🙂");
    break;
  case 4:
    console.log("Hoy es Jueves 😏");
    break;
  case 5:
    console.log("Hoy es Viernes 🤩");
    break;
  case 6:
    console.log("Hoy es Sábado 🎉");
    break;
}

let num = 50;

switch (true) {
  case num > 10 && num < 50:
    console.log(num + 100);
    break;
  case num < 0:
    console.log(num + 1);
    break;
  default:
    console.log("No me importa tu número");
    break;
}

//ejemplo final
let comando = prompt("Ingrese un comando (alerta, consola, pantalla)");

switch (comando) {
  case "alerta":
    alert("Usando switch en un alert");
    break;
  case "consola":
    console.log("Usando switch en la consola");
    break;
  case "pantalla":
    document.write("Usando switch en el navegador");
    break;
  default:
    console.error("El comando ingresado no existe");
    break;
}
