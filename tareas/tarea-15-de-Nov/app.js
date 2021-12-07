/*Tarea String 1:

Dado el siguiente texto:
"React te ayuda a crear interfaces de usuario interactivas de forma
 sencilla. Diseña vistas simples para cada estado en tu aplicación, y
 React se encargará de actualizar y renderizar de manera eficiente los
 componentes correctos cuando los datos cambien."

Reemplazar la palabra React por "Esta librería" en un nuevo texto.
Devuelve en consola si el texto contiene la palabra "eficiente".
Devuelve en consola si el texto contiene la palabra "elementos".*/
console.log(
  "=========================================================================="
);
let phrase =
  "React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien.";

console.log(phrase);
console.log(
  '🔽=== el texto luego de replazar "React" por "Esta librería" ===🔽'
);

let newPhrase = phrase.replace("React", "Esta librería");
console.log(newPhrase);
console.log(
  "__________________________________________________________________________"
);

let word1 = phrase.includes("eficiente");
console.log(`¿El texto contiene la palabra "eficiente"? ➡ ${word1}`);

let word2 = phrase.includes("elementos");
console.log(`¿El texto contiene la palabra "elementos"? ➡ ${word2}`);

console.log(
  "=========================================================================="
);

/*Tarea String 2:

Dada la frase: "Hoy es un buen día para aprender"

Separa en un arreglo cada palabra.
Crea una nueva frase basandote en la anterior que diga: "Hoy es un buen día".

Ayuda: ver indexOf()*/

let phrase2 = "Hoy es un buen día para aprender";
console.log(phrase2);
console.log("⬇ Arrelgo de la frase con cada una de sus palabras ⬇");
console.log(phrase2.split(" "));
console.log("🔽 Nueva frase basada en la anterior 🔽");
let corte = phrase2.indexOf("para");

console.log(phrase2.slice(0, corte));

console.log(
  "=========================================================================="
);

/*Tarea String 3:

Capitaliza la siguiente palabra: "marmota"
Usando métodos matemáticos*/

let word = "marmota";
let wordUpper = word.charAt(0).toUpperCase() + word.slice(1);
console.log(`La palabra Capitalizada ➡ ${wordUpper}`);

/*Ingresar 3 números
indicar cual es el mayor
indicar cual es el menor
obtener la raíz cuadrada del segundo número*/

let num1 = prompt("Ingrese el primer numero");
let num2 = prompt("Ingrese el segundo numero");
let num3 = prompt("Ingrese el tercer numero");

console.log(`Los numeros que ingresaste fueron: ${num1},${num2},${num3}`);

console.log(`El número mayor de la lista es ${Math.max(num1, num2, num3)}`);
console.log(`El número menor de la lista es ${Math.min(num1, num2, num3)}`);

console.log("La raiz cuadrada del segundo numero es: ", Math.sqrt(num2));
