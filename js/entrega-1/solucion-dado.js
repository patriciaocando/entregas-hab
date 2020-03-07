"use strict";

let valorDado = 0; //numero aleatoreo del 1 - 6
let puntosAcumulados = 0; //suma(tirarDado+ numeroAcumulados);
let puntosMaximos = 50;

// Math.random() * (max - min + 1)) + min;
function tirarDado() {
  return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}

function dado() {
  for (let tirada = 0; puntosAcumulados < puntosMaximos; tirada++) {
    valorDado = tirarDado();
    puntosAcumulados = valorDado + puntosAcumulados;
    console.log(
      `Tirada ${tirada +
        1} ha salido un ${valorDado}. Tienes un total de ${puntosAcumulados} puntos.`
    );
  }
  console.log(
    `¡Enhorabuena! ha salido un ${valorDado}.
¡Has ganado con un total de ${puntosAcumulados} puntos!.`
  );
}
dado();
