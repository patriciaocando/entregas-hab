const writeTwits = document.querySelector("form");
const listAllTwits = document.querySelector("ul#listAllTwits");
const twitContent = document.querySelector("form input");
const sendButton = document.querySelector("button.action");

let twits = [];

const localStorage = JSON.parse(window.localStorage.getItem("twits"));

if (localStorage) {
  twits = localStorage;
}

//Cuando se hace click en el boton eviar, evito el comportamiento por defecto
//Indico las condiciones que debe tener el twit
//si cumple las condiciones extraigo el valor del input  obtengo la fecha
//incorporo el twt en un objeto y a su vez lo meto en el array de twts
//llamo a la funcion de publicar

sendButton.addEventListener("click", (event) => {
  event.preventDefault();

  const text = twitContent.value;

  if (text.length === 0) {
    alert("¡Escribe algo!");
  } else if (text.length > 250) {
    alert("Tu twit es demasiado largo");
  } else {
    const date = new Date();
    const dateString = `${date.getDay()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;

    twits.unshift({
      text: text,
      date: dateString,
    });

    window.localStorage.setItem("twits", JSON.stringify(twits));

    twitContent.value = "";
    publishTwits();
  }
});

//funcion que publica los valores del array y los coloca en el HTML
function publishTwits() {
  listAllTwits.innerHTML = "";
  let index = 0;

  const fragment = document.createDocumentFragment();

  for (const twit of twits) {
    const li = document.createElement("li");

    const pTwit = document.createElement("p");
    pTwit.textContent = twit.text;

    const footer = document.createElement("footer");

    const pDate = document.createElement("p");
    pDate.textContent = twit.date;

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("data-index", index);
    deleteButton.classList.add("button");
    deleteButton.textContent = "Borrar";

    footer.append(pDate);
    footer.append(deleteButton);

    li.append(pTwit);
    li.append(footer);

    fragment.append(li);
    index++;
  }
  listAllTwits.prepend(fragment);
}

listAllTwits.addEventListener("click", (event) => {
  const target = event.target;

  if (target.matches("button.button")) {
    const index = target.getAttribute("data-index");

    twits.splice(index, 1);

    window.localStorage.setItem("twits", JSON.stringify(twits));
    publishTwits();
  }
});

publishTwits();
