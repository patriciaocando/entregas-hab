const h1 = document.querySelector("h1#time");
const p = document.querySelector("p.saludo");
const body = document.body;

//Datos Alarma
const alarmHour = h1.getAttribute("data-hour");
const alarmMinute = h1.getAttribute("data-minute");
const alarmSeconds = h1.getAttribute("data-second");
const alarmTime = `${alarmHour}:${alarmMinute}:${alarmSeconds}`;

console.log(alarmTime);

function format(number) {
  if (number >= 10) return number;
  return "0" + number;
}

function timer() {
  let now = new Date();

  const hour = format(now.getHours());
  const minutes = format(now.getMinutes());
  const seconds = format(now.getSeconds());

  const actualTime = `${hour}:${minutes}:${seconds}`;

  if (actualTime === alarmTime) {
    p.textContent = "RIINNNGG!";
    body.classList.add("alarm");
    clearInterval(interval);
  } else {
    h1.textContent = actualTime;
    p.textContent = saludos(hour);

    let daySegment = 0;

    if (hour <= 6 || hour >= 22) daySegment = "buenasNoches";
    else if (hour <= 12) daySegment = "buenosDias";
    else daySegment = "buenasTardes";

    body.setAttribute("class", daySegment);
  }
}

function saludos(hour) {
  if (hour <= 6 || hour >= 20) {
    return "Buenas noches 🌙";
  }
  if (hour <= 12) {
    return "Buenos dias 🌞";
  }
  return "Buenas tardes ⛅";
}

timer();
const interval = setInterval(timer, 1000);
