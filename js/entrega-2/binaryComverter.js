"use strict";

/* Haz que la función BinaryConverter(str) devuelva la forma decimal del valor binario.
 *Por ejemplo: si se pasa 101 el programa debe retornar un 5,
 * si se pasa 1000 debe retornar un 8, etc. */

let numeroBinario = "11000001100";

function binaryConverter(str) {
  let arr = str.split("");
  let exponencial = 0;
  let result = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    result += arr[i] * 2 ** exponencial++;
  }
  return result;
}

console.log(binaryConverter(numeroBinario));
