/*Funciones
Crear una función llamada agregarProducto que pida al usuario ingresar un producto y lo guarde en un arreglo.

Se puede hacer que la función pida ingresar productos una y otra vez hasta que se presione cancelar en el prompt o se deje vacio el campo y se presione aceptar.
Al final la función debe mostrar por consola la lista de los productos ingresados.
Crear una función anónima que reciba como parámetros nombre, apellido, domicilio y correo electrónico.

La función debe recibir los parámetros y mostrar en el navegador el siguiente mensaje: 'Me llamo <nombre> <apellido> vivo en <domicilio>, si deseas contactarme te dejo mi correo electrónico <email>. Que tengas un buen día.
Para mostrar texto en el navegador debemos usar document.write()*/

let productos = [];

function agregarProductos() {
	let dato;
	while (dato !== null) {
		dato = prompt("Ingresa el producto que deseas agregar");
		productos.push(dato);
	}
	if ((dato = null));
	productos.pop(dato);
}

// recorrido de productos...
