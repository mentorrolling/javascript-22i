/*
    Escribe una clase Producto para crear objetos.
    Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, 
    el cual escribe por pantalla los valores de sus propiedades.
    Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
    Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

*/


class Producto {
    constructor(codigo, nombre, precio)
    {
        this.codigo = codigo
        this.nombre = nombre
        this.precio = precio
    }
    Informacion() {
        console.log(`Codigo: ${this.codigo}`)
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Precio: ${this.precio}`)
    }
}

let stock = []

stock.push(new Producto(1, "Monitor", "20000"))
stock.push(new Producto(2,"Teclado","5000"))
stock.push(new Producto(3, "Cooler", "10000"))

console.log("------------------------------")
stock.forEach(prodtos => {
    console.log(prodtos.Informacion() )
    console.log("------------------------------")
});