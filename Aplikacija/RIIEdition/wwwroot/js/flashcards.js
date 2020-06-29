import * as All from "./flashpitanja.js";

document.addEventListener("DOMContentLoaded", () => {
  let nazivPredmeta = document.body.querySelector(".prviElement").id;
  var varNazivPredmetaDb = "";
  console.log("Naziv predmeta", nazivPredmeta);
  let pitanja, odgovori;
  //ovo su ustvari operativni sistemi
  if (nazivPredmeta == "ds") {
    pitanja = All.pitanjaOperativni;
    odgovori = All.odgovoriOperativni;
    varNazivPredmetaDb = "Distribuirani Sistemi";
  } else if (nazivPredmeta == "aip") {
    pitanja = All.pitanjaAIP;
    odgovori = All.odgovoriAIP;
    varNazivPredmetaDb = "Algoritmi i programiranje";
  } else if (nazivPredmeta == "miks") {
    pitanja = All.pitanjaMiks;
    odgovori = All.odgovoriMiks;
    varNazivPredmetaDb = "Mikroracunarski sistemi";
  } else if (nazivPredmeta == "softversko") {
    pitanja = All.pitanjaSoftversko;
    odgovori = All.odgovoriSoftversko;
    varNazivPredmetaDb = "Softversko inženjerstvo";
  } else {
    pitanja = All.pitanjaWEB;
    odgovori = All.odgovoriWEB;
    varNazivPredmetaDb = "Web programiranje";
  }

  const mapa = new Map();

  for (let i = 0; i < pitanja.length; i++) {
    mapa.set(pitanja[i], odgovori[i]);
  }

  function dodajPitanje(pitanje, odgovor) {
    pitanja.push(pitanje);
    odgovori.push(odgovor);
    mapa.set(pitanje, odgovor);
  }

  /*
    function nadjiOdgovorNaOsnovuPitanja(pitanje)
    {
    let br = 0;
    while (br < pitanja.length)
    {
        if (pitanja[br] == pitanje)
        {
            return br;
        }
        else
            br++;
    }
    }

    function obrisiPitanje(pitanje)
    {
    let br = nadjiOdgovorNaOsnovuPitanja(pitanje);
    pitanja.pop(pitanje);
    odgovori.pop(br);
    mapa.delete(pitanje, odgovor);
    }*/

  const nextButton = document.getElementById("next-btn");
  const kartica = document.getElementById("card");
  const napred = document.getElementById("front");
  const pozadi = document.getElementById("back");
  const nauceno = document.getElementById("nauceno-btn");
  var brojPoenaDbFK = document.getElementById("broj-poena-fk-db");
  var datumZavrsetkaDbFK = document.getElementById("datum-zavrsetka-fk-db");
  var predmetDbFK = document.getElementById("predmet-fk-db");

  var brojPitanja = 0;
  const naucenaPitanja = new Array();

  let trenutnoPitanje = "";

  function flip(event) {
    var element = event.currentTarget;
    if (element.className === "card") {
      if (element.style.transform == "rotateY(180deg)") {
        element.style.transform = "rotateY(0deg)";
      } else {
        element.style.transform = "rotateY(180deg)";
      }
    }
  }
  document.getElementById("card").addEventListener("click", (ev) => {
    flip(ev);
  });
  let prosledjenoNaucenoPitanje = "";

  function nauciPitanje() {
    naucenaPitanja.push(prosledjenoNaucenoPitanje);
  }
  document.getElementById("nauceno-btn").addEventListener("click", nauciPitanje);
  function generisiRandomBroj() {
    let broj = Math.floor(Math.random() * pitanja.length);
    return broj;
  }

  function proslediPitanje(nekoPitanje) {
    prosledjenoNaucenoPitanje = nekoPitanje;
  }

  function postaviPitanje() {
    let randomBroj = generisiRandomBroj();
    let flag = 0;
    for (let i = 0; i < naucenaPitanja.length; i++) {
      if (naucenaPitanja[i] == pitanja[randomBroj]) flag++;
    }
    if (flag == 0) {
      napred.innerText = pitanja[randomBroj];
      pozadi.innerText = odgovori[randomBroj];
      trenutnoPitanje = pitanja[randomBroj];
      proslediPitanje(pitanja[randomBroj]);
      console.log(pitanja[randomBroj]);
    } else postaviPitanje();
  }

  postaviPitanje();

  function flipBack() {
    if (kartica.style.transform == "rotateY(180deg)") {
      kartica.style.transform = "rotateY(0deg)";
    }
  }

  function getCurrentDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;

    return today;
  }

  function sledecePitanje() {
    brojPitanja++;
    brojPoenaDbFK.value = naucenaPitanja.length;
    datumZavrsetkaDbFK.value = getCurrentDate();
    predmetDbFK.value = varNazivPredmetaDb;
    console.log(brojPoenaDbFK.value);
    console.log(datumZavrsetkaDbFK.value);
    console.log(predmetDbFK.value);
    if (nextButton.innerText == "Kraj") {
      console.log("Ovde se vracamo na prethodnu stranu");
    } else if (brojPitanja < 10) {
      flipBack();
      postaviPitanje();
    } else if (brojPitanja >= 10) {
      zavrsiIgru();
    }
  }
  document.getElementById("next-btn").addEventListener("click", sledecePitanje);

  var kraj = 0;

  function zavrsiIgru() {
    napred.innerText = "Igra je zavrsena. Kliknite na dugme kraj da izadjete iz igre.";
    pozadi.innerText = "Igra je zavrsena. Kliknite na dugme kraj da izadjete iz igre.";
    document.getElementById("krajBtn").style.display = "block";
    nextButton.style.display = "none";
    kraj = 1;
  }
});
