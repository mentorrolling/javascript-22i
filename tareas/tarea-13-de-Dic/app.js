// TAREA POO

/*Escribe una clase Producto para crear objetos.

.Estos objetos, deben presentar las propiedades código, nombre y precio,
 además del método imprime datos, el cual escribe por pantalla los valores
 de sus propiedades.

.Posteriormente, cree tres instancias de este objeto y guárdalas en un
 array.

.Por último, utilice el método imprime datos para mostrar por pantalla
 los valores de los tres objetos instanciados.*/

class Produto {
  constructor(codigo, nombre, precio) {
    (this.codigo = codigo), (this.nombre = nombre), (this.precio = precio);
  }
  imprimirDatos() {
    console.log(`Codigo de barra: ${this.codigo}`);
    console.log(`Producto: ${this.nombre}`);
    console.log(`Precio: $${this.precio}`);
    console.log("____________________");
  }
}

const stockDeProductos = [];
stockDeProductos.push(new Produto(1858, "Heladera", 30000));
stockDeProductos.push(new Produto(1426, "Licuadora", 10000));
stockDeProductos.push(new Produto(1037, "Horno electrico", 20000));

stockDeProductos.forEach((producto) => {
  console.log("==== Producto ====");
  console.log(producto.imprimirDatos());
});
