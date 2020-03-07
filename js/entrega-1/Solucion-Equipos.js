"use strict";

let equipoMaria = mediaEquipo(62, 34, 55);
let equipoPaula = mediaEquipo(35, 60, 59);
let equipoRebeca = mediaEquipo(40, 39, 63);

function mediaEquipo(resultado1, resultado2, resultado3) {
  return (resultado1 + resultado2 + resultado3) / 3;
}

console.log(equipoMaria);
console.log(equipoPaula);
console.log(equipoRebeca);

if (equipoMaria > equipoPaula && equipoMaria > equipoRebeca) {
  console.log(`El equipo de Maria tiene la mayor media con ${equipoMaria}`);
} else if (equipoPaula > equipoRebeca && equipoPaula > equipoMaria) {
  console.log(`El equipo de Paula tiene la mayor media con ${equipoPaula}`);
} else {
  console.log(`El equipo de Rebeca tiene la mayor media con ${equipoRebeca}`);
}
