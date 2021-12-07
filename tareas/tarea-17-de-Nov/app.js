//Usando If And Else

/*Números con condicionales

- Ingresan dos números
- Si el primero es mayor que el segundo mostrar en consola
la suma de ambos
- Si el primero es menor que el segundo mostrar en consola
la resta del segundo menos el primero.
- Si son iguales mostrar en consola la multiplicación de ambos.
ejemplo del mensaje: 2 es menor que 5, la resta de 5 - 2 es igual a 3*/

let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));

if (isNaN(num1) || isNaN(num2)) {
  alert("Debes de ingresar un número");
} else {
  if (num1 > num2) {
    console.log(`Los numeros que ingresaste fueron: ${num1} y ${num2}`);

    console.log(
      `El numero ${num1} es mayor que ${num2}. La suma de ${num1} + ${num2} es:`,
      num1 + num2
    );
  } else if (num1 < num2) {
    console.log(`Los numeros que ingresaste fueron: ${num1} y ${num2}`);

    console.log(
      `El numero ${num1} es menor que ${num2}. La resta de ${num2} - ${num1} es:`,
      num2 - num1
    );
  } else {
    console.log(`Los numeros que ingresaste fueron: ${num1} y ${num2}`);

    console.log(
      `El numero ${num2} y ${num1} son iguales. La multiplicación de ambos es: `,
      num1 * num2
    );
  }
}

console.log(
  "=================================================================="
);

/*Usando Switch

- Recibir dos valores y la operación a realizar (+, -, *, /)
- Verificar que los valores ingresados no sean NaN, si son NaN convertirlos a 0
- Con una estructura switch verificar la operación y devolver un mensaje con el resultado de la misma.
- Si se ingresa una operación que no está contemplada devolver un mensaje de error.*/

let num3 = parseFloat(prompt("Ingresa el primer numero para la operacion"));
let num4 = parseFloat(prompt("Ingresa el segundo numero para la operacion"));
let operador = prompt(
  "¿Que operacion te gustaria hacer con los numeros? (suma, resta, multiplicacion, division)"
);
if (isNaN(num3)) {
  num3 = 0;
}
if (isNaN(num4)) {
  num4 = 0;
}
switch (operador) {
  case "suma":
    document.write(
      `El resultado de la suma entre ${num3} y ${num4} es: `,
      num3 + num4
    );
    break;
  case "resta":
    document.write(
      `El resultado de la resta entre ${num3} y ${num4} es: `,
      num3 - num4
    );
    break;
  case "multiplicacion":
    document.write(
      `El resultado de la multiplicacion entre ${num3} y ${num4} es: `,
      num3 * num4
    );
    break;
  case "division":
    document.write(
      `El resultado de la division entre ${num3} y ${num4} es: `,
      num3 / num4
    );
    break;
  default:
    console.error("El operador ingresado no existe");
    break;
}
