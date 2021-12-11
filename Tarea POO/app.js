//Tarea POO:
//Escribe una clase Producto para crear objetos.
//Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
//Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
//Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto{
    constructor(codigo,username,price){
      this.codigo=codigo;
      this.username=username;
      this.price=price;
  
    }
    imprimeDatos() {
      console.log(`Codigo: ${this.codigo}`);
      console.log(`UserName: ${this.username}`);
      console.log(`Price: ${this.price}`);
    }

}

const productos = [
new Producto("001", "tobey maguire", "500"),
new Producto("002", "andrew garfield", "600"),
new Producto("003", "tom holland", "700"),
]

productos.forEach(producto => producto.imprimeDatos())