'use strict';

/*
Dada la función LetterCount(str) toma el parámetro str que se está pasando
* y devuelve la primera palabra de mayor longitud.
*Por ejemplo: Hoy es un día estupendo y fantástico.
*debe devolver fantástico porque es la primera palabra que más letras tiene.
*/
let completeSrt = 'Hoy es un dia estupendo y fantastico';

function letterCount(str) {
  let strToArray = str.split(' ');
  let sizesWords = [];

  for (let i = 0; i < strToArray.length; i++) {
    sizesWords.push(strToArray[i].length);
  }
  let longestWord = Math.max(...sizesWords);
  let posLongesWord = sizesWords.indexOf(longestWord);
  return strToArray[posLongesWord];
}

const strCount = letterCount(completeSrt);

console.log(strCount);
