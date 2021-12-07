/*Funciones
Crear una función llamada agregarProducto que pida al usuario ingresar un producto y lo
guarde en un arreglo.

Se puede hacer que la función pida ingresar productos una y otra vez hasta que se presione
cancelar en el prompt o se deje vacio el campo y se presione aceptar.
 Al final la función debe mostrar por consola la lista de los productos ingresados.*/

let productos = [];
function agregar() {
  let productoAgregar = prompt(
    "Escribe el producto que quieres agregar a la lista"
  );
  while (productoAgregar) {
    productos.push(productoAgregar);

    productoAgregar = prompt(
      "Escribe el producto que quieres agregar a la lista"
    );
  }
  for (let i = 0; i < productos.length; i++) {
    console.log(`${i + 1}-${productos[i]}`);
  }
}
//================== PARTE 2 ==================//

/*Crear una función anónima que reciba como parámetros nombre, apellido, domicilio y correo
electrónico.

La función debe recibir los parámetros y mostrar en el navegador el siguiente mensaje: 
'Me llamo <nombre> <apellido> vivo en <domicilio>, si deseas contactarme te dejo mi correo
 electrónico <email>. Que tengas un buen día'.
Para mostrar texto en el navegador debemos usar document.write()*/

let datosUsuarios = [];
const pedirDatos = function (nombre, apellido, domicilio, correo) {
  nombre = prompt("Ingrese su nombre");
  apellido = prompt("Ingrese su apellido");
  domicilio = prompt("Ingrese su domicilio");
  correo = prompt("Ingrese su correo electronico");

  //Comprobamos que el usuario haya ingresado los datos.
  if (nombre === "" || apellido === "" || domicilio === "" || correo === "") {
    alert("🚨 por favor ingrese los datos solicitados 🚨");
  } else {
    datosUsuarios.push(nombre, apellido, domicilio, correo);
    document.write(
      `Hola buenas, me llamo ${nombre} ${apellido} vivo en ${domicilio}, si deseas contactarme te dejo mi correo electrónico ${correo}. Que tengas un buen día. 😎`
    );
  }
};
pedirDatos();
