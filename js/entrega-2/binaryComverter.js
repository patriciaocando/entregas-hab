'use strict';

/* Haz que la función BinaryConverter(str) devuelva la forma decimal del valor binario.
 *Por ejemplo: si se pasa 101 el programa debe retornar un 5,
 * si se pasa 1000 debe retornar un 8, etc. */

let numeroBinario = '101';

function binaryConverter(str) {
  let decimalOfBinary = 0;
  const binarySystem = [128, 64, 32, 16, 8, 4, 2, 1];
  let numberArr = str.split('');
  numberArr.reverse();
  binarySystem.reverse();
  for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] === '1') {
      decimalOfBinary += binarySystem[i];
    }
  }
  return decimalOfBinary;
}

console.log(binaryConverter(numeroBinario));
