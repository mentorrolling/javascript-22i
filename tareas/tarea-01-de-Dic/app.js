//Aplicación con Arreglos y funciones

/*Crear una aplicación con javascript de un carrito de compras
La aplicación debe poder hacer lo siguiente:

Agregar productos al carrito (agregarlos hasta que se cancele el prompt)✅

Filtrar elementos del carrito según una palabra o término ingresado✅

Listar todos los productos que estén en el carrito en orden alfabético✅

Eliminar un producto del carrito (recibe el nombre del producto a eliminar)✅*/

//========================================================================//

let productos = ["azucar", "pan", "carne"];

//Funcion para agregar productos.
const agregarProductos = function () {
  let producto = prompt("Ingrese el producto que quieres agregar a la lista");

  while (producto) {
    if (verificacion(producto)) {
      alert("El producto que ingresaste ya esta en la lista");
    } else {
      productos.push(producto);
    }
    producto = prompt("Ingrese el producto que quieres agregar a la lista");
  }
  ordenarProductos(productos);
};

// Funcion para orendar la lista.
const ordenarProductos = function (arreglo) {
  if (arreglo.length > 0) {
    console.log("==== Lista de productos 🛒 ====");
    arreglo.sort().map(function (item, index) {
      console.log(`${index + 1} - ${item}`);
    });
  } else {
    console.log("No hay productos en la lista");
  }
};

//Funcion de busqueda o filtro de productos.
const buscarProducto = function (
  termino = prompt("Ingrese el producto a buscar")
) {
  let productoBuscado = productos.filter(function (producto) {
    return producto.includes(termino);
  });

  if (productoBuscado.length > 0) {
    ordenarProductos(productoBuscado);
  } else {
    console.warn("No se a encontrado el producto en la lista");
  }
};

//Funcion verificamos que el producto no este en la lista.
const verificacion = function (producto) {
  let comparacion = productos.find(function (a) {
    return a === producto;
  });
  if (comparacion) {
    return true;
  } else {
    return false;
  }
};

//Funcion para eliminar un producto.
const eliminarProducto = function () {
  let productoAEliminar = prompt(
    "Ingrese el producto que quiere eliminar de la lista"
  );
  let indice = productos.indexOf(productoAEliminar);
  if (indice >= 0) {
    let validar = confirm(
      `¿Esta seguro que quiere eliminar ${productos[indice]} de la lista?`
    );
    if (validar) {
      productos.splice(indice, 1);
      alert("Producto eliminado de la lista");
    }
  } else {
    alert("El producto que quiere eliminar no esta en la lista");
  }
};

//Funcion para modificar un producto de la lista.
const remplazarProducto = function () {
  let productoAModificar = prompt(
    "¿Cual es el producto que quiere remplazar de la lista?"
  );
  if (verificacion(productoAModificar)) {
    let replazo = prompt(
      `Que producto quiere poner en el lugar de ${productoAModificar}`
    );
    let indice2 = productos.indexOf(productoAModificar);
    let confirmacion = confirm(
      `Estas seguro que quieres elimnar ${productos[indice2]} por ${replazo}`
    );
    if (confirmacion) {
      productos.splice(indice2, 1, replazo);
    }
  } else {
    alert("El producto que quieres modificar no esta en la lista");
  }
};
