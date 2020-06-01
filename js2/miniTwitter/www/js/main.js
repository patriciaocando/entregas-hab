const sendButton = document.querySelector("section.sendTwit button");
const twitText = document.querySelector("section.sendTwit input");
const sectionAllTwits = document.querySelector("section.allTwits");

function getDate() {
  const date = new Date();
  return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
}

function publishTwit() {
  const article = document.createElement("article");
  const pTwit = document.createElement("p");
  const pFecha = document.createElement("p");
  const deteleButton = document.createElement("button");

  deteleButton.classList.add("deletebutton");
  deteleButton.textContent = "Borrar";

  deteleButton.addEventListener("click", deleteTwit);

  if (twitText.value !== "" && twitText.value !== null) {
    pTwit.textContent = twitText.value;

    pFecha.textContent = getDate();

    article.append(pTwit);
    article.append(pFecha);
    article.append(deteleButton);
    sectionAllTwits.append(article);

    twitText.value = "";
  } else {
    alert("Escribe un twit para enviar");
  }
}

function deleteTwit(event) {
  const button = event.target;
  const article = button.parentElement;
  article.remove();
}
/* const deteleButton2 = document.querySelector("button.detelebutton"); */

sendButton.addEventListener("click", publishTwit);
