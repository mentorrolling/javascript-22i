//Math

let numero = 25.2;

//redondeo al valor minimo
console.log(Math.floor(numero));

//redondeo segun valor decimal
console.log(Math.round(numero));

//redondeo para arriba
console.log(Math.ceil(numero));

//obtengo máximo de una lista
console.log(
  `El número máximo de la lista es ${Math.max(23, 89, 1500, 20000, 1000, 89)}`
);

// obtengo el mínimo de una lista
console.log(Math.min(23, 89, 1500, 20000, 1000, 89));

let num = "42.5689";

//convierto numero string a entero
console.log(parseInt(num));

//convierto numero string a decimal
console.log(parseFloat(num));

let base = numero;
let exponente = 2;

//elevo un valor a la potencia
console.log(Math.pow(base, exponente));

//raiz cuadrada de un numero
console.log(Math.sqrt(64));

//obtener un numero aleatorio
console.log(Math.ceil(Math.random() * 10));

//obtener numero con dos decimales
num = parseFloat(num);
console.log(Math.round(num * 100) / 100);

//obtener numero con dos decimales
let decimal = parseFloat(num).toFixed(2);
console.log(parseFloat(decimal));
