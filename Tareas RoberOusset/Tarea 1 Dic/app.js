/*Crear una aplicación con javascript de un carrito de compras
La aplicación debe poder hacer lo siguiente:
Agregar productos al carrito (agregarlos hasta que se cancele el prompt)
Eliminar un producto del carrito (recibe el nombre del producto a eliminar)
Filtrar elementos del carrito según una palabra o término ingresado
Listar todos los productos que estén en el carrito en orden alfabético*/

let carrito = [];
// Funcion para agregar producto al carrito.

const agregarProd = function () {
	let producto = prompt("Agrega un producto a tu carrito");
	while (producto) {
		carrito.push(producto.toUpperCase());
		producto = prompt("Agrega un producto a tu carrito");
	}
};

// listar los productos del carrito
const listarProductos = function (carrito) {
	if (carrito.length > 0) {
		console.log(
			"=============El listado de los productos elegidas es el siguiente:============"
		);
		carrito.sort().map(function (producto, index) {
			console.log(`${index + 1} - ${producto}`);
		});
	} else {
		console.log("========No hay productos para listar========");
	}
};

// Filtrar el carrito
function filtrarCarrito(
	item = prompt("Escribe una palabra del producto que estás buscando")
) {
	let filtroCarrito = carrito.filter(function (producto) {
		return producto.includes(item.toUpperCase());
	});
	if (filtroCarrito.length > 0) {
		listarProductos(filtroCarrito);
	} else {
		console.warn("no hay hay resultados a la búsqueda");
	}
}

// Eliminar un producto del carrito

const eliminarProducto = function () {
	let elemento = prompt("Escriba el elemento que quiere eliminar");
	let indice = carrito.indexOf(elemento.toUpperCase());

	if (indice >= 0) {
		let validar = confirm(
			`Está seguro que quiere elimintar el producto ${carrito[indice]}`
		);
		if (validar) {
			carrito.splice(indice, 1);
		}
	} else {
		alert("Producto no encontrado");
	}
};
