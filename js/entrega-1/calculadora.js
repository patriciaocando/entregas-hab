"use strict";

let numero1 = +prompt("introduce un numero");
let operador = prompt("introduce una operacion");
let numero2 = +prompt("introduce otro numero");

if (operador === "+") {
  alert(numero1 + numero2);
} else if (operador === "-") {
  alert(numero1 - numero2);
} else if (operador === "*") {
  alert(numero1 * numero2);
} else if (operador === "/") {
  if (numero2 === 0) {
    alert("No se puede dividir por 0");
  } else {
    alert(numero1 / numero2);
  }
} else if (operador === "**") {
  alert(numero1 ** numero2);
} else {
  alert("No se ha seleccionado un tipo de operación correcta");
}
