"Use strict";

/* Accede con fetch a la información de la siguiente API:
https://api.exchangerate-api.com/v4/latest/EUR. Dado un valor en euros (EUR),
convierte dicha cantidad a dólares(USD).
Por último convierte el resultado obtenido en dólares a yenes(JPY). */

async function converter(eur) {
  const requesChangeEur = await fetch(
    "https://api.exchangerate-api.com/v4/latest/EUR"
  );
  const changeDataEur = await requesChangeEur.json();

  console.log("Euros", eur);
  let eurToDolar = eur * changeDataEur.rates.USD;
  console.log("Dolares", eurToDolar);

  const requesChangeUsd = await fetch(
    "https://api.exchangerate-api.com/v4/latest/usd"
  );
  const changeDataUsd = await requesChangeUsd.json();

  let dolarToYen = eurToDolar * changeDataUsd.rates.JPY;
  console.log("Yenes", dolarToYen);
}

converter(1);
