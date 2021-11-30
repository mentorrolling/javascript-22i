//Bucles

//for



// for (let i = 1; i <= 10; i++) {
//   console.log(`El valor de i es ${i}`);
//   //acciones
// }

//tarea
//ingresar la tabla que queremos calcular
//mostrar por consola la tabla

const tabla = prompt("Ingrese la tabla a calcular");

console.log(`======Tabla del ${tabla}======`);
for (let i = 1; i <= 10; i++) {
  // 2 x 1 = 2
  //2 x 2 = 49

  console.log(`${tabla} x ${i} = ${tabla * i}`);
}

console.log("=========================");
