let prviInterval;

const meseci = [
  "Januar",
  "Februar",
  "Mart",
  "April",
  "Maj",
  "Jun",
  "Jul",
  "Avgust",
  "September",
  "Oktobar",
  "Novembar",
  "Decembar",
];
const pocetniDani = [2, 5, 6, 2, 4, 0, 2, 5, 1, 3, 6, 1];
const brojRedova = [5, 5, 6, 5, 5, 5, 5, 6, 5, 5, 6, 5];
const najveciBrojDana = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function nadjiTrenutniMesec() {
  let naziv = document.getElementsByClassName("aktivna")[0].id;
  document.getElementById(naziv).classList.remove("aktivna");
  let brojuNizu = meseci.findIndex((el) => el == naziv);
  return brojuNizu;
}

function promeniUlevo() {
  let trenutniMesec = nadjiTrenutniMesec();
  if (--trenutniMesec == -1) trenutniMesec = 11;
  document.getElementById(meseci[trenutniMesec]).classList.add("aktivna");

  clearInterval(prviInterval);
  prviInterval = updateTimer();
}
function promeniUdesno() {
  let trenutniMesec = nadjiTrenutniMesec();
  if (++trenutniMesec == 12) trenutniMesec = 0;
  document.getElementById(meseci[trenutniMesec]).classList.add("aktivna");
  clearInterval(prviInterval);
  prviInterval = updateTimer();
}

document.addEventListener("DOMContentLoaded", () => {
  let divs = document.querySelectorAll("div.calendar");
  let d = new Date();
  let numMonth = d.getMonth();

  divs[numMonth].classList.add("aktivna");

  divs.forEach((mesec, ind) => {
    let trenutniDan = 1;

    document.querySelector(`#${mesec.id} .donjiKalendar h2`).innerHTML = `${d.getDate().toString()}
    ${document.getElementsByClassName("aktivna")[0].id} ${d.getFullYear()}`;
    let sviSpanovi = document.querySelectorAll(`#${meseci[ind]} .daniKolona`);

    let indexDana = pocetniDani[ind];
    let pocetniDanMeseca = 1;
    for (let i = indexDana; i < 7; i++) {
      pocetniDanMeseca++;
    }

    for (let i = 0; i < indexDana; i++) {
      let pamtiDan = pocetniDanMeseca;
      let spans = sviSpanovi[i].querySelectorAll(".spanHover");
      for (let span of spans) {
        let pom;
        if (pocetniDanMeseca > najveciBrojDana[ind]) {
          pom = String.fromCharCode(160);
        } else {
          pom = pocetniDanMeseca < 10 ? `0${pocetniDanMeseca}` : `${pocetniDanMeseca}`;
        }

        span.innerHTML = pom;
        span.id = `${mesec.id}_${pom}`;
        pocetniDanMeseca += 7;
      }
      pocetniDanMeseca = pamtiDan + 1;
    }
    pocetniDanMeseca = 1;
    for (let i = indexDana; i < 7; i++) {
      let pamtiDan = pocetniDanMeseca;
      let spans = sviSpanovi[i].querySelectorAll(".spanHover");
      for (let span of spans) {
        let pom;
        if (pocetniDanMeseca > najveciBrojDana[ind]) {
          pom = String.fromCharCode(160);
        } else {
          pom = pocetniDanMeseca < 10 ? `0${pocetniDanMeseca}` : `${pocetniDanMeseca}`;
        }

        span.innerHTML = pom;
        span.id = `${mesec.id}_${pom}`;
        pocetniDanMeseca += 7;
      }
      pocetniDanMeseca = pamtiDan + 1;
    }
    //izbacivanje velikih datuma
  });
  //--Ovde je sve zavrseno sa kalendarom-->
  let spanPronadji = divs[numMonth].querySelectorAll(".aktivna .spanHover");
  let sadasnjiDan = d.getDate() < 10 ? `0${d.getDate().toString()}` : `${d.getDate().toString()}`;
  let i = 0;

  while (true) {
    if (spanPronadji[i].innerHTML == sadasnjiDan) {
      spanPronadji[i].classList.add("trenutniDan");
      spanPronadji[i].classList.add("selektovanDatum");
      spanPronadji[i].classList.add("clickedDate");

      break;
    } else i++;
  }

  updateTimer();

  let str = document.getElementsByClassName("aktivna")[0].id;

  document.getElementById("inputDan").value = `${d.getDate()}`;
  document.getElementById("inputMesec").value = `${str} `;
  //KRAJ
});
function updateTimer() {
  let div = document.querySelector(".aktivna .timer");
  let d = new Date();
  div.innerHTML = `${vratiPravi(d.getHours())}.${vratiPravi(d.getMinutes())}.${vratiPravi(d.getSeconds())}`;
  prviInterval = setInterval(() => {
    let d = new Date();
    div.innerHTML = `${vratiPravi(d.getHours())}.${vratiPravi(d.getMinutes())}.${vratiPravi(d.getSeconds())}`;
  }, 500);
}
function vratiPravi(p) {
  return p < 10 ? "0" + p.toString() : p.toString();
}

function dodajEvent(event) {
  let d = new Date();
  let span = event.target;
  document.getElementsByClassName("clickedDate")[0].classList.remove("clickedDate");
  span.classList.add("clickedDate");
  let str = span.id.split("_");
  let elements = document.getElementsByClassName("izabraniDatumi");
  for (let el of elements) {
    el.innerHTML = `${str[1]} ${str[0]} ${d.getFullYear()}`;
  }
  document.getElementById("inputDan").value = `${str[1]}`;
  document.getElementById("inputMesec").value = `${str[0]} `;
}
function otvoriUpis() {
  document.getElementById("myModal").style.display = "block";
}
function zatvoriUpis() {
  document.getElementById("myModal").style.display = "none";
}
function otvoriObaveze() {
  document.getElementById("obaveze").style.display = "block";
}
function zatvoriObaveze() {
  document.getElementById("obaveze").style.display = "none";
}
