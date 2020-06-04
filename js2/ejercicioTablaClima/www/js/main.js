const temperaturas = [
  {
    city: "A Coruña",
    min: 17,
    max: 23,
  },
  {
    city: "Ferrol",
    min: 15,
    max: 27,
  },
  {
    city: "Lugo",
    min: 12,
    max: 31,
  },
  {
    city: "Ourense",
    min: 18,
    max: 35,
  },
  {
    city: "Pontevedra",
    min: 18,
    max: 29,
  },
];

const body = document.body;
const newTable = document.createElement("table");

const captionTable = document.createElement("caption");
captionTable.textContent = "temperaturas";
newTable.append(captionTable);

const thead = document.createElement("thead");
thead.innerHTML = `
  <th>Ciudad</th>
  <th>Min</th>
  <th>Max</th>`;
newTable.append(thead);

// crear el thead
//meter con innerHTML EN EL THEAD CON LA CANTIDAD DE COLUMAS Y TL TITULOS
const gradesSymbol = "°C";
const newRow = document.createElement("tr");

for (const temperatura of temperaturas) {
  const tr = document.createElement("tr");

  const city = document.createElement("td");
  city.textContent = temperatura.city;

  const min = document.createElement("td");
  min.textContent = temperatura.min + gradesSymbol;
  min.classList.add(getClassName(temperatura.min));

  const max = document.createElement("td");
  max.textContent = temperatura.max + gradesSymbol;
  max.classList.add(getClassName(temperatura.max));

  tr.append(city);
  tr.append(min);
  tr.append(max);

  newTable.append(tr);
}

body.append(newTable);

function getClassName(temp) {
  if (temp < 20) {
    return "green";
  }
  if (temp < 30) {
    return "orange";
  }
  return "red";
}
