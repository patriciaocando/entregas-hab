'use strict';

/* Haz que la función PalindromeTwo(str) tome el parámetro str que se le pasa y
 * devuelva true si el parámetro es un palíndromo, (la cadena se lee igual hacia adelante
 * que hacia atrás) de lo contrario devuelve false.Por ejemplo: Arriba la birra debería
 * devolver true, se lee igual del derecho que del revés.*/

let example = 'arRiba la birra';

function palindromeTwo(str) {
  let string = str.toLowerCase().replace(/ /g, '');
  let palindrome = string.split('');

  let palindromeBack = [...palindrome];
  palindromeBack.reverse();

  for (let i = 0; i < palindrome.length; i++) {
    if (palindrome[i] !== palindromeBack[i]) {
      return false;
    }
  }
  return true;
}
console.log(palindromeTwo(example));
