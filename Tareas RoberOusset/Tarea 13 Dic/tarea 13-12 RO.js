/*
Tarea
Escribe una clase Producto para crear objetos.
Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.*/

class Producto {
	constructor(codigo, nombre, precio) {
		this.codigo = codigo;
		this.nombre = nombre;
		this.precio = precio;
	}

	imprimeDatos() {
		console.log(
			`codigo: ${this.codigo} -- nombre: ${this.nombre} -- precio: ${this.precio}`
		);
	}
}

let Impresora = new Producto(1, "impresora", "$20.000");
let Notebook = new Producto(2, "notebook", "$100.000");
let Mouse = new Producto(3, "Mouse", "$5.000");

let array = [Impresora, Notebook, Mouse];

array.map(function (item) {
	item.imprimeDatos();
});
