import * as All from "./pitanja.js";

document.addEventListener("DOMContentLoaded", () => {
  var varNazivPredmetaDb = "";
  let nazivPredmeta = document.body.querySelector(".prviElement").id;
  console.log("Naziv predmeta", nazivPredmeta);
  let pitanja, odgovori;
  //ovo su ustvari operativni sistemi
  if (nazivPredmeta == "ds") {
    pitanja = All.pitanjaOperativni;
    odgovori = All.odgovoriOperativni;
    varNazivPredmetaDb = "Operativni Sistemi";
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

  const nizOdgovora = new Array();

  const question = document.getElementById("question");
  const questionContainer = document.getElementById("question-container");
  const answerButtons = document.getElementById("answer-buttons");
  const choiceA = document.getElementById("A");
  const choiceB = document.getElementById("B");
  const choiceC = document.getElementById("C");
  const choiceD = document.getElementById("D");
  const nextButton = document.getElementById("next-btn");
  const brojac = document.getElementById("brojTacnihOdgovora");
  const linija = document.getElementById("popunjavanje");
  const kutija = document.getElementById("linijaNapretka");
  const fifty = document.getElementById("help");
  var brojPoenaDb = document.getElementById("broj-poena-db");
  var datumZavrsetkaDb = document.getElementById("datum-zavrsetka-db");
  var predmetDb = document.getElementById("predmet-db");

  let napredak = kutija.clientWidth / 10;

  function brojanjePoena() {
    brojac.innerText = poeni;
    linija.style.width = poeni * napredak + "px";
  }

  fifty.addEventListener("click", pomoc, false);

  /*
function obrisiPitanje(pitanje)
{
    let br = nadjiOdgovorNaOsnovuPitanja(pitanje);
    pitanja.pop(pitanje);
    odgovori.pop(br * 5);
    odgovori.pop(br * 5 + 1);
    odgovori.pop(br * 5 + 2);
    odgovori.pop(br * 5 + 3);
    odgovori.pop(br * 5 + 4);
    mapa.delete(pitanje, [odgovori[br * 5], odgovori[br * 5 + 1], odgovori[br * 5 + 2], odgovori[br * 5 + 3], odgovori[br * 5 + 4]]);
}

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
*/
  function nadjiOdgovoreZaPitanje(brojPitanja) {
    brojPitanja = brojPitanja * 5;
    for (let i = 0; i < 5; i++) {
      nizOdgovora[i] = odgovori[brojPitanja];
      brojPitanja++;
    }
  }
  /*
function dodajPitanjeIOdogovor(pitanje, odg1, odg2, odg3, odg4, tacnost)
{
    pitanja.push(pitanje);
    odgovori.push(odg1);
    odgovori.push(odg2);
    odgovori.push(odg3);
    odgovori.push(odg4);
    odgovori.push(tacnost);
}
*/
  const mapa = new Map();

  for (let i = 0; i < pitanja.length; i++) {
    mapa.set(pitanja[i], [
      odgovori[i * 5],
      odgovori[i * 5 + 1],
      odgovori[i * 5 + 2],
      odgovori[i * 5 + 3],
      odgovori[i * 5 + 4],
    ]);
  }

  function izaberirandomPitanje() {
    let randomElPitanja = Math.floor(Math.random() * pitanja.length);
    let p = mapa.get(pitanja[randomElPitanja]);
    return p;
  }

  function generisiRandomBroj() {
    let broj = Math.floor(Math.random() * pitanja.length);
    return broj;
  }

  function rasporediRandomOdgovore(nizOdgovora) {
    var currentIndex = nizOdgovora.length - 1,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = nizOdgovora[currentIndex];
      nizOdgovora[currentIndex] = nizOdgovora[randomIndex];
      nizOdgovora[randomIndex] = temporaryValue;
    }

    return nizOdgovora;
  }

  let trenutnoPitanje = 0;
  let poeni = 0;

  choiceA.addEventListener("click", proveriOdgovor, false);
  choiceB.addEventListener("click", proveriOdgovor, false);
  choiceC.addEventListener("click", proveriOdgovor, false);
  choiceD.addEventListener("click", proveriOdgovor, false);

  let tacanZaSad = "";
  let prviNetacan = "";
  let drugiNetacan = "";
  let treciNetacan = "";

  function proslediTacanOdgovor(odg) {
    tacanZaSad = odg;
  }

  function proslediNetacneOdgovore(prvi, drugi, treci) {
    prviNetacan = prvi;
    drugiNetacan = drugi;
    treciNetacan = treci;
  }

  function resetujStanjaOdgovora() {
    zakljucaj = 0;
    choiceA.style.color = "white";
    choiceB.style.color = "white";
    choiceC.style.color = "white";
    choiceD.style.color = "white";
    choiceA.style.backgroundColor = "rgb(16, 47, 116)";
    choiceB.style.backgroundColor = "rgb(16, 47, 116)";
    choiceC.style.backgroundColor = "rgb(16, 47, 116)";
    choiceD.style.backgroundColor = "rgb(16, 47, 116)";
    choiceA.style.visibility = "visible";
    choiceB.style.visibility = "visible";
    choiceC.style.visibility = "visible";
    choiceD.style.visibility = "visible";
  }

  function odgovorTacan(e) {
    e.target.style.backgroundColor = "rgb(7, 231, 7)";
    poeni++;
    brojanjePoena();
  }

  function odgovorNetacan(e) {
    e.target.style.backgroundColor = "red";
  }

  let selektovanoDugme = 0;

  function proveriOdgovor(e) {
    var proba = e.target.innerText;
    if (proba == tacanZaSad && selektovanoDugme == 0) {
      odgovorTacan(e);
      selektovanoDugme++;
    } else if (proba != tacanZaSad && selektovanoDugme == 0) {
      odgovorNetacan(e);
      selektovanoDugme++;
    }
  }

  function generisiRandomOsim(min, max, izuzetak) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num === izuzetak ? generisiRandomOsim(min, max, izuzetak) : num;
  }

  let zakljucaj = 0;

  function pomoc() {
    if (choiceA.innerText == tacanZaSad && zakljucaj == 0) {
      zakljucaj = 1;
      let prviRandom = Math.floor(Math.random() * 3) + 2;
      let drugiRandom = generisiRandomOsim(2, 4, prviRandom);

      console.log(prviRandom);
      console.log(drugiRandom);

      if (prviRandom == 2) {
        choiceB.style.visibility = "hidden";
      } else if (prviRandom == 3) {
        choiceC.style.visibility = "hidden";
      } else if (prviRandom == 4) {
        choiceD.style.visibility = "hidden";
      }

      if (drugiRandom == 2) {
        choiceB.style.visibility = "hidden";
      } else if (drugiRandom == 3) {
        choiceC.style.visibility = "hidden";
      } else if (drugiRandom == 4) {
        choiceD.style.visibility = "hidden";
      }
    } else if (choiceB.innerText == tacanZaSad && zakljucaj == 0) {
      zakljucaj = 1;
      let prviRandom = Math.floor(Math.random() * 3) + 2;
      let drugiRandom = generisiRandomOsim(2, 4, prviRandom);

      console.log(prviRandom);
      console.log(drugiRandom);

      if (prviRandom == 2) {
        choiceA.style.visibility = "hidden";
      } else if (prviRandom == 3) {
        choiceC.style.visibility = "hidden";
      } else if (prviRandom == 4) {
        choiceD.style.visibility = "hidden";
      }

      if (drugiRandom == 2) {
        choiceA.style.visibility = "hidden";
      } else if (drugiRandom == 3) {
        choiceC.style.visibility = "hidden";
      } else if (drugiRandom == 4) {
        choiceD.style.visibility = "hidden";
      }
    } else if (choiceC.innerText == tacanZaSad && zakljucaj == 0) {
      zakljucaj = 1;
      let prviRandom = Math.floor(Math.random() * 3) + 2;
      let drugiRandom = generisiRandomOsim(2, 4, prviRandom);

      console.log(prviRandom);
      console.log(drugiRandom);

      if (prviRandom == 2) {
        choiceB.style.visibility = "hidden";
      } else if (prviRandom == 3) {
        choiceA.style.visibility = "hidden";
      } else if (prviRandom == 4) {
        choiceD.style.visibility = "hidden";
      }

      if (drugiRandom == 2) {
        choiceB.style.visibility = "hidden";
      } else if (drugiRandom == 3) {
        choiceA.style.visibility = "hidden";
      } else if (drugiRandom == 4) {
        choiceD.style.visibility = "hidden";
      }
    } else if (choiceD.innerText == tacanZaSad && zakljucaj == 0) {
      zakljucaj = 1;
      let prviRandom = Math.floor(Math.random() * 3) + 2;
      let drugiRandom = generisiRandomOsim(2, 4, prviRandom);

      console.log(prviRandom);
      console.log(drugiRandom);

      if (prviRandom == 2) {
        choiceB.style.visibility = "hidden";
      } else if (prviRandom == 3) {
        choiceC.style.visibility = "hidden";
      } else if (prviRandom == 4) {
        choiceA.style.visibility = "hidden";
      }

      if (drugiRandom == 2) {
        choiceB.style.visibility = "hidden";
      } else if (drugiRandom == 3) {
        choiceC.style.visibility = "hidden";
      } else if (drugiRandom == 4) {
        choiceA.style.visibility = "hidden";
      }
    }
  }
  function zapamtiTacanOdgovor(t) {
    if (t == 1) {
      return nizOdgovora[0];
    } else if (t == 2) {
      return nizOdgovora[1];
    } else if (t == 3) {
      return nizOdgovora[2];
    } else return nizOdgovora[3];
  }
  function postaviPitanje() {
    resetujStanjaOdgovora();
    let randomPitanje = generisiRandomBroj();
    nadjiOdgovoreZaPitanje(randomPitanje);
    let tacnoPitanje = nizOdgovora[4];
    console.log(tacnoPitanje, "Tacno pitanje");
    let t = zapamtiTacanOdgovor(tacnoPitanje);
    console.log(t);
    rasporediRandomOdgovore(nizOdgovora);
    question.innerText = pitanja[randomPitanje];
    choiceA.innerText = nizOdgovora[0];
    choiceB.innerText = nizOdgovora[1];
    choiceC.innerText = nizOdgovora[2];
    choiceD.innerText = nizOdgovora[3];
    proslediTacanOdgovor(t);
    if (nizOdgovora[0] == t) {
      proslediNetacneOdgovore(nizOdgovora[1], nizOdgovora[2], nizOdgovora[3]);
    } else if (nizOdgovora[1] == t) {
      proslediNetacneOdgovore(nizOdgovora[0], nizOdgovora[2], nizOdgovora[3]);
    } else if (nizOdgovora[2] == t) {
      proslediNetacneOdgovore(nizOdgovora[0], nizOdgovora[1], nizOdgovora[3]);
    } else if (nizOdgovora[3] == t) {
      proslediNetacneOdgovore(nizOdgovora[0], nizOdgovora[1], nizOdgovora[2]);
    }
  }

  postaviPitanje();

  nextButton.addEventListener("click", sledecePitanje);

  function getCurrentDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;

    return today;
  }

  function sledecePitanje() {
    resetujStanjaOdgovora();
    selektovanoDugme = 0;
    postaviPitanje();
    brojPoenaDb.value = poeni;
    datumZavrsetkaDb.value = getCurrentDate();
    predmetDb.value = varNazivPredmetaDb;
    if (nextButton.innerText == "Kraj") {
      console.log("Ovde se vracamo na prethodnu stranu");
    } else if (trenutnoPitanje < 9) {
      trenutnoPitanje++;
    } else {
      prikaziRezultat();
    }
  }

  const helpGrid = document.getElementById("help-grid-btns");
  const kontejnerce = document.getElementById("kont");

  function prikaziRezultat() {
    let nazivPredmeta2 = document.body.querySelector(".prviElement").id;
    console.log(poeni);
    console.log(new Date().toLocaleString());
    console.log(varNazivPredmetaDb);
    brojPoenaDb.innerHTML = poeni;
    datumZavrsetkaDb.innerHTML = new Date().toLocaleString();
    predmetDb.innerHTML = varNazivPredmetaDb;
    questionContainer.innerText = "Vas rezultat je " + poeni;
    questionContainer.style.color = "white";
    questionContainer.style.textAlign = "center";
    questionContainer.style.fontSize = "3rem";
    // nextButton.innerText = "Kraj";
    nextButton.style.display = "none";
    document.getElementById("krajBtn").style.display = "block";
    fifty.style.visibility = "hidden";
    helpGrid.style.gridTemplateColumns = "repeat(1, auto)";
    helpGrid.style.justifyContent = "center";
    helpGrid.style.alignItems = "center";
    kutija.style.visibility = "hidden";
    brojac.style.visibility = "hidden";
    kontejnerce.style.paddingTop = "10%";
    if (poeni >= 2) {
      kontejnerce.style.background =
        "url(https://cdn.dribbble.com/users/1476693/screenshots/7986326/media/0ccb1c2ddad5ef34f7df874a20be74e2.gif) repeat center center";
      kontejnerce.style.backgroundSize = "100%";
    } else {
      kontejnerce.style.background =
        "url(https://miro.medium.com/max/1700/0*z-SXY5g-6usnMgKp.gif) repeat center center";
      kontejnerce.style.backgroundSize = "70%";
    }
  }
});
