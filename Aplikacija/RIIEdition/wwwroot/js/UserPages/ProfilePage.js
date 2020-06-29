var myId = document.getElementById("myId");
var myIdValue = myId.innerHTML;
var adminId = "c63e28cf-e6ae-42a1-ba3f-60efb8734ac3";
var adminIsHere = false;

var divPregledProfila = document.getElementById("div-pregled-profila");
var divIzmenaProfila = document.getElementById("div-izmena-profila");
var divFlashKartice = document.getElementById("div-flash-kartice");
var divKvizovi = document.getElementById("div-kvizovi");
var divKalendar = document.getElementById("div-kalendar");
var divFavorites = document.getElementById("div-favorites");
var divGrafikoni = document.getElementById("div-grafikoni");
var divPodesavanjaProfila = document.getElementById("div-podesavanja-profila");
var divProfilnaSlikaPregled = document.getElementById("div-profilna-slika-pregled");
var liPrikaziSakrijProfilnuSliku = document.getElementById("liPrikaziSakrijProfilnuSliku");
var liStatistikuKvizova = document.getElementById("liStatistikuKvizova");
var liStatistikuFlesKartica = document.getElementById("liStatistikuFlesKartica");
var statistikaKvizova = document.getElementById("statistika-kvizova");
var statistikaFlesKartica = document.getElementById("statistika-fles-kartica");
var starterDiv = document.getElementById("starterDiv");

var barChartK1 = document.getElementById("barChartK1");
var lineChartK1 = document.getElementById("lineChartK1");
var horisontalChartK1 = document.getElementById("horisontalChartK1");
var radarChartK1 = document.getElementById("radarChartK1");
var tipeBarK1 = document.getElementById("tipeBarK1");
var tipeLineK1 = document.getElementById("tipeLineK1");
var tipeHorisontalK1 = document.getElementById("tipeHorisontalK1");
var tipeRadarK1 = document.getElementById("tipeRadarK1");

var barChartK2 = document.getElementById("barChartK2");
var lineChartK2 = document.getElementById("lineChartK2");
var horisontalChartK2 = document.getElementById("horisontalChartK2");
var radarChartK2 = document.getElementById("radarChartK2");
var tipeBarK2 = document.getElementById("tipeBarK2");
var tipeLineK2 = document.getElementById("tipeLineK2");
var tipeHorisontalK2 = document.getElementById("tipeHorisontalK2");
var tipeRadarK2 = document.getElementById("tipeRadarK2");

var barChartK3 = document.getElementById("barChartK3");
var lineChartK3 = document.getElementById("lineChartK3");
var horisontalChartK3 = document.getElementById("horisontalChartK3");
var radarChartK3 = document.getElementById("radarChartK3");
var tipeBarK3 = document.getElementById("tipeBarK3");
var tipeLineK3 = document.getElementById("tipeLineK3");
var tipeHorisontalK3 = document.getElementById("tipeHorisontalK3");
var tipeRadarK3 = document.getElementById("tipeRadarK3");

var labPregledProfila = document.getElementById("lab-pregled-profila");
var labIzmenaProfila = document.getElementById("lab-izmena-profila");
var labFlesKarticeProfila = document.getElementById("lab-fles-kartice-profila");
var labKvizoviProfila = document.getElementById("lab-kvizovi-profila");
var labPlaniranjeProfila = document.getElementById("lab-planiranje-profila");
var labFavoritesProfila = document.getElementById("lab-favorites-profila");
var labGrafikoniProfila = document.getElementById("lab-grafikoni-profila");
var labPodesavanjeProfila = document.getElementById("lab-podesavanje-profila");

var podesavanjeBojeGrafovaContainer = document.getElementById("podesavanje-boje-grafova-container");
var liTogglePodesavanjeBojeGrafovaContainer = document.getElementById("liTogglePodesavanjeBojeGrafovaContainer");

//Style and css
var documentProfilPageBodyBackground = document.getElementById("profil-page-body");
var previousPicture;

//localStorage object
var localStorageObject = { profilePictureBodyUrl: "https://source.unsplash.com/twukN12EN7c/1920x1080" };
var localColorsObject = {
  colors: [],
  horisontalColors: [],
  lineColor,
  radarColor,
  colorsFK: [],
  horisontalColorsFK: [],
  lineColorFK,
  radarColorFK,
};

function updateColorsFromLocalColorObject() {
  colors = [];
  localColorsObject.colors.forEach((col) => {
    colors.push(col);
  });
  horisontalColors = [];
  localColorsObject.horisontalColors.forEach((col) => {
    horisontalColors.push(col);
  });
  lineColor = localColorsObject.lineColor;
  radarColor = localColorsObject.radarColor;
  var array = [];
  array.push(colors);
  array.push(horisontalColors);
  array.push(lineColor);
  array.push(radarColor);
  return array;
}

function updateColorsFKFromLocalColorObject() {
  colorsFK = [];
  localColorsObject.colorsFK.forEach((col) => {
    colorsFK.push(col);
  });
  horisontalColorsFK = [];
  localColorsObject.horisontalColorsFK.forEach((col) => {
    horisontalColorsFK.push(col);
  });
  lineColorFK = localColorsObject.lineColorFK;
  radarColorFK = localColorsObject.radarColorFK;
  var array = [];
  array.push(colorsFK);
  array.push(horisontalColorsFK);
  array.push(lineColorFK);
  array.push(radarColorFK);
  return array;
}

function updateLocalColorObject() {
  localColorsObject.colors = [];
  colors.forEach((col) => {
    localColorsObject.colors.push(col);
  });
  localColorsObject.horisontalColors = [];
  horisontalColors.forEach((col) => {
    localColorsObject.horisontalColors.push(col);
  });
  localColorsObject.lineColor = lineColor;
  localColorsObject.radarColor = radarColor;
  localColorsObject.colorsFK = [];
  colorsFK.forEach((col) => {
    localColorsObject.colorsFK.push(col);
  });
  localColorsObject.horisontalColorsFK = [];
  horisontalColorsFK.forEach((col) => {
    localColorsObject.horisontalColorsFK.push(col);
  });
  localColorsObject.lineColorFK = lineColorFK;
  localColorsObject.radarColorFK = radarColorFK;
}

function saveLocalColorObjectContext() {
  if (localStorage.getItem("localColorsObject") === null) {
    localStorage.setItem("localColorsObject", JSON.stringify(localColorsObject));
  } else {
    localStorage.removeItem("localColorsObject");
    localStorage.setItem("localColorsObject", JSON.stringify(localColorsObject));
  }
  if (adminIsHere) {
    alert("saveLocalColorObjectContext:" + JSON.stringify(localColorsObject));
  }
}

function getLocalColorObjectContext() {
  if (localStorage.getItem("localColorsObject") === null) {
    fillGraphsWithRandomColors();
    if (adminIsHere) {
      alert("getLocalColorObjectContext:" + JSON.stringify(localColorsObject));
    }
  } else {
    localColorsObject = JSON.parse(localStorage.getItem("localColorsObject"));
    updateColorsFromLocalColorObject();
    updateColorsFKFromLocalColorObject();
    if (adminIsHere) {
      alert("Context exists!");
    }
  }
}

var localStorageObjectBazaBlanketa = [];
var localStorageObjectBazaBlanketaSecond = [];
var userDataId = [];
var userDataUserNamesFavoritesId = [];

function updateLocalStorageObject() {
  if (localStorage.getItem("localStorageObject") === null) {
    localStorage.setItem("localStorageObject", JSON.stringify(localStorageObject));
  } else {
    localStorage.removeItem("localStorageObject");
    localStorage.setItem("localStorageObject", JSON.stringify(localStorageObject));
  }
}

function getLocalStorageObject() {
  if (localStorage.getItem("localStorageObject") === null) {
  } else {
    localStorageObject = JSON.parse(localStorage.getItem("localStorageObject"));
  }
}

function initialiseLatestProfileSettingsContext() {
  if (localStorage.getItem("localStorageObject") === null) {
    updateBackgroundPicture(localStorageObject.profilePictureBodyUrl);
  } else {
    getLocalStorageObject();
    updateBackgroundPicture(localStorageObject.profilePictureBodyUrl);
  }
}

function displayNone() {
  divPregledProfila.style.display = "none";
  divIzmenaProfila.style.display = "none";
  divFlashKartice.style.display = "none";
  divKvizovi.style.display = "none";
  divKalendar.style.display = "none";
  divFavorites.style.display = "none";
  divGrafikoni.style.display = "none";
  divPodesavanjaProfila.style.display = "none";
  liPrikaziSakrijProfilnuSliku.style.display = "none";
  liStatistikuKvizova.style.display = "none";
  liStatistikuFlesKartica.style.display = "none";
  liTogglePodesavanjeBojeGrafovaContainer.style.display = "none";
  starterDiv.style.display = "none";
}

function displayLabelNone() {
  labPregledProfila.style.display = "none";
  labIzmenaProfila.style.display = "none";
  labFlesKarticeProfila.style.display = "none";
  labKvizoviProfila.style.display = "none";
  labPlaniranjeProfila.style.display = "none";
  labFavoritesProfila.style.display = "none";
  labGrafikoniProfila.style.display = "none";
  labPodesavanjeProfila.style.display = "none";
}

function showMainDiv() {
  displayNone();
  displayLabelNone();
  if (starterDiv.style.display === "none") {
    starterDiv.style.display = "block";
  }
}

function showPregledProfila() {
  displayNone();
  displayLabelNone();
  if (divPregledProfila.style.display === "none") {
    divPregledProfila.style.display = "block";
    labPregledProfila.style.display = "block";
  }
  if (liPrikaziSakrijProfilnuSliku.style.display === "none") {
    liPrikaziSakrijProfilnuSliku.style.display = "block";
  }
}

function showIzmenaProfila() {
  displayNone();
  displayLabelNone();
  if (divIzmenaProfila.style.display === "none") {
    divIzmenaProfila.style.display = "block";
    labIzmenaProfila.style.display = "block";
  }
}

function showFlashKartice() {
  displayNone();
  displayLabelNone();
  if (divFlashKartice.style.display === "none") {
    divFlashKartice.style.display = "block";
    labFlesKarticeProfila.style.display = "block";
  }
}

function showKvizovi() {
  displayNone();
  displayLabelNone();
  if (divKvizovi.style.display === "none") {
    divKvizovi.style.display = "block";
    labKvizoviProfila.style.display = "block";
  }
}

function showKalendar() {
  displayNone();
  displayLabelNone();
  if (divKalendar.style.display === "none") {
    divKalendar.style.display = "block";
    labPlaniranjeProfila.style.display = "block";
  }
}

function showFavorites() {
  displayNone();
  displayLabelNone();
  if (divFavorites.style.display === "none") {
    divFavorites.style.display = "block";
    labFavoritesProfila.style.display = "block";
  }
}

function showGrafikoni() {
  displayNone();
  displayLabelNone();
  if (divGrafikoni.style.display === "none") {
    divGrafikoni.style.display = "block";
    labGrafikoniProfila.style.display = "block";
  }
  liStatistikuKvizova.style.display = "block";
  liStatistikuFlesKartica.style.display = "block";
}

function showPodesavanjaProfila() {
  displayNone();
  displayLabelNone();
  if (divPodesavanjaProfila.style.display === "none") {
    divPodesavanjaProfila.style.display = "block";
    labPodesavanjeProfila.style.display = "block";
  }
  liTogglePodesavanjeBojeGrafovaContainer.style.display = "block";
}

function showProfilnaSlikaPregled() {
  if (divProfilnaSlikaPregled.style.display === "none") {
    divProfilnaSlikaPregled.style.display = "block";
  } else {
    divProfilnaSlikaPregled.style.display = "none";
  }
}

function showStatistikuKvizova() {
  if (statistikaKvizova.style.display === "none") {
    statistikaKvizova.style.display = "block";
  } else {
    statistikaKvizova.style.display = "none";
  }
  if (statistikaKvizova.style.display === "none" && statistikaFlesKartica.style.display === "none") {
    statistikaKvizova.style.display = "block";
  }
}

function showStatistikuFlesKartica() {
  if (statistikaFlesKartica.style.display === "none") {
    statistikaFlesKartica.style.display = "block";
  } else {
    statistikaFlesKartica.style.display = "none";
  }
  if (statistikaFlesKartica.style.display === "none" && statistikaKvizova.style.display === "none") {
    statistikaFlesKartica.style.display = "block";
  }
}

function k1ChartsDisplayNone() {
  barChartK1.style.display = "none";
  lineChartK1.style.display = "none";
  horisontalChartK1.style.display = "none";
  radarChartK1.style.display = "none";
}

function chartsTypeButtonsK1() {
  tipeBarK1.style.backgroundColor = "#007bff";
  tipeLineK1.style.backgroundColor = "#007bff";
  tipeHorisontalK1.style.backgroundColor = "#007bff";
  tipeRadarK1.style.backgroundColor = "#007bff";
}

function k2ChartsDisplayNone() {
  barChartK2.style.display = "none";
  lineChartK2.style.display = "none";
  horisontalChartK2.style.display = "none";
  radarChartK2.style.display = "none";
}

function chartsTypeButtonsK2() {
  tipeBarK2.style.backgroundColor = "#007bff";
  tipeLineK2.style.backgroundColor = "#007bff";
  tipeHorisontalK2.style.backgroundColor = "#007bff";
  tipeRadarK2.style.backgroundColor = "#007bff";
}

function k3ChartsDisplayNone() {
  barChartK3.style.display = "none";
  lineChartK3.style.display = "none";
  horisontalChartK3.style.display = "none";
  radarChartK3.style.display = "none";
}

function chartsTypeButtonsK3() {
  tipeBarK3.style.backgroundColor = "#007bff";
  tipeLineK3.style.backgroundColor = "#007bff";
  tipeHorisontalK3.style.backgroundColor = "#007bff";
  tipeRadarK3.style.backgroundColor = "#007bff";
}

function allChartsDysplayInit() {
  k1ChartsDisplayNone();
  barChartK1.style.display = "block";
  tipeBarK1.style.backgroundColor = "#218838";
  k2ChartsDisplayNone();
  barChartK2.style.display = "block";
  tipeBarK2.style.backgroundColor = "#218838";
  k3ChartsDisplayNone();
  barChartK3.style.display = "block";
  tipeBarK3.style.backgroundColor = "#218838";
}

function showTipK1Bar() {
  k1ChartsDisplayNone();
  chartsTypeButtonsK1();
  barChartK1.style.display = "block";
  tipeBarK1.style.backgroundColor = "#218838";
}

function showTipK1Line() {
  k1ChartsDisplayNone();
  chartsTypeButtonsK1();
  lineChartK1.style.display = "block";
  tipeLineK1.style.backgroundColor = "#218838";
}

function showTipK1Horisontal() {
  k1ChartsDisplayNone();
  chartsTypeButtonsK1();
  horisontalChartK1.style.display = "block";
  tipeHorisontalK1.style.backgroundColor = "#218838";
}

function showTipK1Radar() {
  k1ChartsDisplayNone();
  chartsTypeButtonsK1();
  radarChartK1.style.display = "block";
  tipeRadarK1.style.backgroundColor = "#218838";
}

function showTipK2Bar() {
  k2ChartsDisplayNone();
  chartsTypeButtonsK2();
  barChartK2.style.display = "block";
  tipeBarK2.style.backgroundColor = "#218838";
}

function showTipK2Line() {
  k2ChartsDisplayNone();
  chartsTypeButtonsK2();
  lineChartK2.style.display = "block";
  tipeLineK2.style.backgroundColor = "#218838";
}

function showTipK2Horisontal() {
  k2ChartsDisplayNone();
  chartsTypeButtonsK2();
  horisontalChartK2.style.display = "block";
  tipeHorisontalK2.style.backgroundColor = "#218838";
}

function showTipK2Radar() {
  k2ChartsDisplayNone();
  chartsTypeButtonsK2();
  radarChartK2.style.display = "block";
  tipeRadarK2.style.backgroundColor = "#218838";
}

function showTipK3Bar() {
  k3ChartsDisplayNone();
  chartsTypeButtonsK3();
  barChartK3.style.display = "block";
  tipeBarK3.style.backgroundColor = "#218838";
}

function showTipK3Line() {
  k3ChartsDisplayNone();
  chartsTypeButtonsK3();
  lineChartK3.style.display = "block";
  tipeLineK3.style.backgroundColor = "#218838";
}

function showTipK3Horisontal() {
  k3ChartsDisplayNone();
  chartsTypeButtonsK3();
  horisontalChartK3.style.display = "block";
  tipeHorisontalK3.style.backgroundColor = "#218838";
}

function showTipK3Radar() {
  k3ChartsDisplayNone();
  chartsTypeButtonsK3();
  radarChartK3.style.display = "block";
  tipeRadarK3.style.backgroundColor = "#218838";
}

function togglePodesavanjeBojeGrafovaContainer() {
  if (podesavanjeBojeGrafovaContainer.style.display == "none") {
    podesavanjeBojeGrafovaContainer.style.display = "block";
  } else {
    podesavanjeBojeGrafovaContainer.style.display = "none";
  }
}

function dataInitialisationUsers() {
  var children = Array.from(document.getElementById("userDataId").children);
  children.forEach((child, index) => {
    userDataId.push(child.innerHTML);
  });
  var name = [];
  children = Array.from(document.getElementById("name").children);
  children.forEach((child, index) => {
    name.push(child.innerHTML);
  });
  var lastName = [];
  children = Array.from(document.getElementById("lastName").children);
  children.forEach((child, index) => {
    lastName.push(child.innerHTML);
  });
  children = Array.from(document.getElementById("autorUserName").children);
  children.forEach((child, index) => {
    userDataUserNamesFavoritesId.push(child.innerHTML);
  });

  var array = [];
  array.push(name);
  array.push(lastName);
  return array;
}

var materijalId = [];
var nazivMaterijalaId = [];
var predmetMaterijalaId = [];
var brojOcenaJedan = [];
var brojOcenaDva = [];
var brojOcenaTri = [];
var brojOcenaCetiri = [];
var brojOcenaPet = [];
var usersIdFavorites = [];

///
var materijalIdd = [];
var nazivMaterijalaIdd = [];
var predmetMaterijalaIdd = [];
var brojOcenaJedann = [];
var brojOcenaDvaa = [];
var brojOcenaTrii = [];
var brojOcenaCetirii = [];
var brojOcenaPett = [];
var usersIdFavoritess = [];

function dataInitialisationFavorites() {
  var children = Array.from(document.getElementById("materijalaId").children);
  children.forEach((child, index) => {
    materijalId.push(child.innerHTML);
  });
  children = Array.from(document.getElementById("nazivMaterijalaId").children);
  children.forEach((child, index) => {
    nazivMaterijalaId.push(child.innerHTML);
  });
  children = Array.from(document.getElementById("predmetMaterijalaId").children);
  children.forEach((child, index) => {
    predmetMaterijalaId.push(child.innerHTML);
  });
  children = Array.from(document.getElementById("brojOcenaJedan").children);
  children.forEach((child, index) => {
    brojOcenaJedan.push(child.innerHTML);
  });
  children = Array.from(document.getElementById("brojOcenaDva").children);
  children.forEach((child, index) => {
    brojOcenaDva.push(child.innerHTML);
  });
  children = Array.from(document.getElementById("brojOcenaTri").children);
  children.forEach((child, index) => {
    brojOcenaTri.push(child.innerHTML);
  });
  children = Array.from(document.getElementById("brojOcenaCetiri").children);
  children.forEach((child, index) => {
    brojOcenaCetiri.push(child.innerHTML);
  });
  children = Array.from(document.getElementById("brojOcenaPet").children);
  children.forEach((child, index) => {
    brojOcenaPet.push(child.innerHTML);
  });
  children = Array.from(document.getElementById("usersIdFavorites").children);
  children.forEach((child, index) => {
    usersIdFavorites.push(child.innerHTML);
  });
}

function sracunajOcenu(index) {
  var ocena = 0;
  ocena += brojOcenaJedann[index] * 1;
  ocena += brojOcenaDvaa[index] * 2;
  ocena += brojOcenaTrii[index] * 3;
  ocena += brojOcenaCetirii[index] * 4;
  ocena += brojOcenaPett[index] * 5;
  var n =
    Number(brojOcenaJedann[index]) +
    Number(brojOcenaDvaa[index]) +
    Number(brojOcenaTrii[index]) +
    Number(brojOcenaCetirii[index]) +
    Number(brojOcenaPett[index]);
  ocena = ocena / n;
  return ocena;
}

function getLocalStorageObjectBazaBlanketa() {
  if (localStorage.getItem("localStorageObjectBazaBlanketa") === null) {
  } else {
    localStorageObjectBazaBlanketa = JSON.parse(localStorage.getItem("localStorageObjectBazaBlanketa"));
  }
}

function drawFavorites(name, lastName) {
  var myId = document.getElementById("myId");
  var myIdValue = myId.innerHTML;
  getLocalStorageObjectBazaBlanketa();
  var blanketii = [];
  localStorageObjectBazaBlanketa.forEach((el) => {
    if (el.userId == myIdValue) {
      el.blanketId.forEach((el) => {
        blanketii.push(el);
      });
    }
  });
  blanketii.forEach((blanket, blanketIndex) => {
    materijalId.forEach((materijal, index) => {
      if (blanket == materijal) {
        materijalIdd.push(blanket);
        nazivMaterijalaIdd.push(nazivMaterijalaId[index]);
        predmetMaterijalaIdd.push(predmetMaterijalaId[index]);
        brojOcenaJedann.push(brojOcenaJedan[index]);
        brojOcenaDvaa.push(brojOcenaDva[index]);
        brojOcenaTrii.push(brojOcenaTri[index]);
        brojOcenaCetirii.push(brojOcenaCetiri[index]);
        brojOcenaPett.push(brojOcenaPet[index]);
        usersIdFavoritess.push(usersIdFavorites[index]);
      }
    });
  });
  var cardMessageId = document.getElementById("cardMessageId");
  var messageParent = document.getElementById("messageParent");
  if (materijalIdd.length == 0) {
    cardMessageId.innerHTML = "Vaša lista favorita je prazna.";
    cardMessageId.style.display = "block";
    cardMessageId.className = "container mx-auto mt-3 mb-3 text-secondary";
    messageParent.className = "container bg-white rounded mx-auto mt-3 mb-3 text-center";
  } else {
    cardMessageId.style.display = "none";
    cardMessageId.className = "container mx-auto mt-3 mb-3 text-secondary";
    messageParent.className = "container bg-white rounded mx-auto mt-3 mb-3";
  }
  materijalIdd.forEach((id, indexOfId) => {
    var div = document.getElementById("C" + id);
    div.style.display = "block";
    var emIdFavorites = document.getElementById("emIdFavorites" + id);
    emIdFavorites.innerHTML = nazivMaterijalaIdd[indexOfId];
    var cardBodyFavoritesId = document.getElementById("cardBodyFavoritesId" + id);
    var div = document.createElement("div");
    div.className = "container p-2 ml-2";
    div.innerHTML = "Naziv predmeta: " + predmetMaterijalaIdd[indexOfId];
    cardBodyFavoritesId.appendChild(div);
    div = document.createElement("div");
    div.className = "container p-2 ml-2";
    var ocena = sracunajOcenu(indexOfId);
    if (ocena) {
      div.innerHTML = "Prosečna ocena: " + ocena;
    } else {
      div.innerHTML = "Prosečna ocena: " + 0;
    }
    cardBodyFavoritesId.appendChild(div);
    var i = 0;
    while (i < userDataId.length && usersIdFavoritess[indexOfId] != userDataId[i]) {
      i++;
    }
    if (i == userDataId.length) {
    }
    div = document.createElement("div");
    div.className = "container p-2 ml-2";
    div.innerHTML = "Autor: " + name[i] + " " + lastName[i] + " (" + userDataUserNamesFavoritesId[i] + ")";
    cardBodyFavoritesId.appendChild(div);
  });
}

function ocistiListuFavorita() {
  if (localStorage.getItem("localStorageObjectBazaBlanketa") === null) {
  } else {
    var myIdValue = document.getElementById("myId").innerHTML;
    localStorageObjectBazaBlanketaSecond = JSON.parse(localStorage.getItem("localStorageObjectBazaBlanketa"));
    localStorage.removeItem("localStorageObjectBazaBlanketa");
    var localStorageObjectBazaBlanketa = [];
    localStorageObjectBazaBlanketaSecond.forEach((el) => {
      if (el.userId != myIdValue) {
        localStorageObjectBazaBlanketa.push(el);
      }
    });
    localStorage.setItem("localStorageObjectBazaBlanketa", JSON.stringify(localStorageObjectBazaBlanketa));
    if (adminIsHere) {
      alert("Uspešno je obrisana lista favorita korisnika sa Id-em: " + myIdValue);
    }
    location.reload();
  }
}

var datesForInitialisation = [];
var brojOsvojenihPoenaInitialisation = [];
var predmetiInitialiation = [];

var datesForInitialisationFK = [];
var brojOsvojenihPoenaInitialisationFK = [];
var predmetiInitialiationFK = [];

function dataInitialisation() {
  var children = Array.from(document.getElementById("brojOsvojenihPoenaId").children);
  children.forEach((child, index) => {
    brojOsvojenihPoenaInitialisation.push(child.innerHTML);
  });
  children = Array.from(document.getElementById("datumiId").children);
  children.forEach((child, index) => {
    datesForInitialisation.push(child.innerHTML);
  });
  children = Array.from(document.getElementById("predmetiId").children);
  children.forEach((child, index) => {
    predmetiInitialiation.push(child.innerHTML);
  });
  children = Array.from(document.getElementById("brojOsvojenihPoenaFKId").children);
  children.forEach((child, index) => {
    brojOsvojenihPoenaInitialisationFK.push(child.innerHTML);
  });
  children = Array.from(document.getElementById("datumiFKId").children);
  children.forEach((child, index) => {
    datesForInitialisationFK.push(child.innerHTML);
  });
  children = Array.from(document.getElementById("predmetiFKId").children);
  children.forEach((child, index) => {
    predmetiInitialiationFK.push(child.innerHTML);
  });
  dates = datesForInitialisation;
  predmeti = predmetiInitialiation;
  scores = brojOsvojenihPoenaInitialisation;
  datesFK = datesForInitialisationFK;
  predmetiFK = predmetiInitialiationFK;
  scoresFK = brojOsvojenihPoenaInitialisationFK;
}

var dates = [];
var predmeti = [];
var scores = [];
var datesFK = [];
var predmetiFK = [];
var scoresFK = [];

var colors = [];
var lineColor;
var horisontalColors = [];
var radarColor;
var colorsFK = [];
var lineColorFK;
var horisontalColorsFK = [];
var radarColorFK;

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function random_rgba() {
  var rgbColor = [];
  for (var i = 0; i < 3; i++) {
    rgbColor.push(Math.floor((256 - 229) * Math.random()) + 230);
  }
  var new_light_color = rgbToHex(rgbColor[0], rgbColor[1], rgbColor[2]);
  return new_light_color;
}

function getRandomColor() {
  var letters = "BCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

function randDarkColor() {
  var lum = -0.25;
  var hex = String("#" + Math.random().toString(16).slice(2, 8).toUpperCase()).replace(/[^0-9a-f]/gi, "");
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  var rgb = "#",
    c,
    i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ("00" + c).substr(c.length);
  }
  return rgb;
}

function getRandomColorOnce() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


/**
 * @function
 * @param once Vratice samo jednu random boju
 * @param onlydark Vratice samo tamne boje u suprotnom random
 */
function fillRandomColors(length, array, once, onlydark) {
  array = [];
  var arrayRET = [];
  if (onlydark == true) {
    for (var i = 0; i < length; i++) {
      array.push(randDarkColor());
    }
  } else {
    for (var i = 0; i < length; i++) {
      array.push(getRandomColor());
    }
  }
  if (once) {
    arrayRET.push(array[0]);
  } else {
    array.forEach((element) => {
      arrayRET.push(element);
    });
  }
  return arrayRET;
}

function fillColorArraysWithRandomDarkColors() {
  colors = fillRandomColors(dates.length, colors, false, true);
  horisontalColors = fillRandomColors(dates.length, horisontalColors, false, true);
  lineColor = fillRandomColors(1, lineColor, true, true);
  radarColor = fillRandomColors(1, radarColor, true, true);
  var array1 = [];
  array1.push(colors);
  array1.push(horisontalColors);
  array1.push(lineColor);
  array1.push(radarColor);
  return array1;
}

function fillColorArraysWithRandomDarkColorsFK() {
  colorsFK = fillRandomColors(datesFK.length, colorsFK, false, true);
  horisontalColorsFK = fillRandomColors(datesFK.length, horisontalColorsFK, false, true);
  lineColorFK = fillRandomColors(1, lineColorFK, true, true);
  radarColorFK = fillRandomColors(1, radarColorFK, true, true);
  var array2 = [];
  array2.push(colorsFK);
  array2.push(horisontalColorsFK);
  array2.push(lineColorFK);
  array2.push(radarColorFK);
  return array2;
}

function fillColorArraysWithRandomColors() {
  colors = fillRandomColors(dates.length, colors, false, false);
  horisontalColors = fillRandomColors(dates.length, horisontalColors, false, false);
  lineColor = fillRandomColors(1, lineColor, true, false);
  radarColor = fillRandomColors(1, radarColor, true, false);
  var array3 = [];
  array3.push(colors);
  array3.push(horisontalColors);
  array3.push(lineColor);
  array3.push(radarColor);
  return array3;
}

function fillColorArraysWithRandomColorsFK() {
  colorsFK = fillRandomColors(datesFK.length, colorsFK, false, false);
  horisontalColorsFK = fillRandomColors(datesFK.length, horisontalColorsFK, false, false);
  lineColorFK = fillRandomColors(1, lineColorFK, true, false);
  radarColorFK = fillRandomColors(1, radarColorFK, true, false);
  var array4 = [];
  array4.push(colorsFK);
  array4.push(horisontalColorsFK);
  array4.push(lineColorFK);
  array4.push(radarColorFK);
  return array4;
}

function initialiseColorsArrays() {
  var colorArray = fillColorArraysWithRandomDarkColors();
  return colorArray;
}

function initialiseColorsArraysFK() {
  var colorArray2 = fillColorArraysWithRandomDarkColors();
  return colorArray2;
}

function fillGraphsWithRandomColors() {
  var check = document.getElementById("dark-light-check");
  var colorArray = [];
  var colorArrayFK = [];
  if (check.checked == true) {
    colorArray = fillColorArraysWithRandomDarkColors();
    colorArrayFK = fillColorArraysWithRandomDarkColorsFK();
  }
  if (check.checked == false) {
    colorArray = fillColorArraysWithRandomColors();
    colorArrayFK = fillColorArraysWithRandomColorsFK();
  }
  colors = colorArray[0];
  horisontalColors = colorArray[1];
  lineColor = colorArray[2];
  radarColor = colorArray[3];
  colorsFK = colorArrayFK[0];
  horisontalColorsFK = colorArrayFK[1];
  lineColorFK = colorArrayFK[2];
  radarColorFK = colorArrayFK[3];
  updateLocalColorObject();
  saveLocalColorObjectContext();
  if (adminIsHere) {
    alert("fillGraphsWithRandomColors:" + JSON.stringify(localColorsObject));
  }
  reloadPage();
}

function createBarColorPickers(parent) {
  var podesavanjeBoja = document.createElement("div");
  podesavanjeBoja.innerHTML = "Podesite boju za stub grafa tipa bar:";
  podesavanjeBoja.className = "mb-2 mt-1";
  parent.appendChild(podesavanjeBoja);
  var container = document.createElement("div");
  container.className = "contaier";
  parent.appendChild(container);
  dates.forEach((date, index) => {
    var mincontainer = document.createElement("div");
    var mincontainer2 = document.createElement("div");
    container.appendChild(mincontainer);
    container.appendChild(mincontainer2);
    mincontainer.className = "col-sm-6 d-flex justify-content-around";
    mincontainer2.className = "col-sm-6";
    var stub = document.createElement("div");
    stub.innerHTML = "Stub " + (index + 1);
    var input = document.createElement("input");
    input.type = "color";
    input.value = colors[index];
    if(!colors[index]){
      colors.push(getRandomColorOnce());
      updateLocalColorObject();
      saveLocalColorObjectContext();
    }
    input.className = index;
    input.onchange = (ev) => {
      colors[Number(ev.target.className)] = ev.target.value;
      updateLocalColorObject();
      saveLocalColorObjectContext();
    };
    input.style.width = "30px";
    mincontainer.appendChild(stub);
    mincontainer.appendChild(input);
  });
}

function createHorisontalColorPickers(parent) {
  var podesavanjeBoja = document.createElement("div");
  podesavanjeBoja.innerHTML = "Podesite boju za stub grafa tipa horisontal:";
  podesavanjeBoja.className = "mb-2";
  parent.appendChild(podesavanjeBoja);
  container = document.createElement("div");
  container.className = "contaier";
  parent.appendChild(container);
  dates.forEach((date, index) => {
    var mincontainer = document.createElement("div");
    var mincontainer2 = document.createElement("div");
    container.appendChild(mincontainer);
    container.appendChild(mincontainer2);
    mincontainer.className = "col-sm-6 d-flex justify-content-around";
    mincontainer2.className = "col-sm-6";
    var stub = document.createElement("div");
    stub.innerHTML = "Stub " + (index + 1);
    var input = document.createElement("input");
    input.type = "color";
    input.value = horisontalColors[index];
    if(!horisontalColors[index]){
      horisontalColors.push(getRandomColorOnce());
      updateLocalColorObject();
      saveLocalColorObjectContext();
    }
    input.className = horisontalColors.length + index;
    input.onchange = (ev) => {
      horisontalColors[Number(ev.target.className - horisontalColors.length)] = ev.target.value;
      updateLocalColorObject();
      saveLocalColorObjectContext();
    };
    input.style.width = "30px";
    mincontainer.appendChild(stub);
    mincontainer.appendChild(input);
  });
}

function createLineColorPickers(parent) {
  var podesavanjeBoja = document.createElement("div");
  podesavanjeBoja.innerHTML = "Podesite boju za stub grafa tipa line:";
  podesavanjeBoja.className = "mb-2";
  parent.appendChild(podesavanjeBoja);
  container = document.createElement("div");
  container.className = "contaier";
  parent.appendChild(container);
  var mincontainer = document.createElement("div");
  var mincontainer2 = document.createElement("div");
  container.appendChild(mincontainer);
  container.appendChild(mincontainer2);
  mincontainer.className = "col-sm-6 d-flex justify-content-around";
  mincontainer2.className = "col-sm-6";
  var stub = document.createElement("div");
  stub.innerHTML = "Boja line grafa:";
  var input = document.createElement("input");
  input.type = "color";
  input.value = lineColor;
  input.className = "lineColor";
  input.onchange = (ev) => {
    lineColor = ev.target.value;
    updateLocalColorObject();
    saveLocalColorObjectContext();
  };
  input.style.width = "30px";
  mincontainer.appendChild(stub);
  mincontainer.appendChild(input);
}

function createRadarColorPickers(parent) {
  var podesavanjeBoja = document.createElement("div");
  podesavanjeBoja.innerHTML = "Podesite boju za stub grafa tipa radar:";
  podesavanjeBoja.className = "mb-2";
  parent.appendChild(podesavanjeBoja);
  container = document.createElement("div");
  container.className = "contaier";
  parent.appendChild(container);
  var mincontainer = document.createElement("div");
  var mincontainer2 = document.createElement("div");
  container.appendChild(mincontainer);
  container.appendChild(mincontainer2);
  mincontainer.className = "col-sm-6 d-flex justify-content-around";
  mincontainer2.className = "col-sm-6";
  var stub = document.createElement("div");
  stub.innerHTML = "Boja radar grafa:";
  var input = document.createElement("input");
  input.type = "color";
  input.value = radarColor;
  input.className = "radarColor";
  input.onchange = (ev) => {
    radarColor = ev.target.value;
    updateLocalColorObject();
    saveLocalColorObjectContext();
  };
  input.style.width = "30px";
  mincontainer.appendChild(stub);
  mincontainer.appendChild(input);
}

function createBarColorPickersFK(parent) {
  var podesavanjeBoja = document.createElement("div");
  podesavanjeBoja.innerHTML = "Podesite boju za stub grafa tipa bar:";
  podesavanjeBoja.className = "mb-2 mt-1";
  parent.appendChild(podesavanjeBoja);
  var container = document.createElement("div");
  container.className = "contaier";
  parent.appendChild(container);
  datesFK.forEach((date, index) => {
    var mincontainer = document.createElement("div");
    var mincontainer2 = document.createElement("div");
    container.appendChild(mincontainer);
    container.appendChild(mincontainer2);
    mincontainer.className = "col-sm-6 d-flex justify-content-around";
    mincontainer2.className = "col-sm-6";
    var stub = document.createElement("div");
    stub.innerHTML = "Stub " + (index + 1);
    var input = document.createElement("input");
    input.type = "color";
    input.value = colorsFK[index];
    if(!colorsFK[index]){
      colorsFK.push(getRandomColorOnce());
      updateLocalColorObject();
      saveLocalColorObjectContext();
    }
    input.className = index;
    input.onchange = (ev) => {
      colorsFK[Number(ev.target.className)] = ev.target.value;
      updateLocalColorObject();
      saveLocalColorObjectContext();
    };
    input.style.width = "30px";
    mincontainer.appendChild(stub);
    mincontainer.appendChild(input);
  });
}

function createHorisontalColorPickersFK(parent) {
  var podesavanjeBoja = document.createElement("div");
  podesavanjeBoja.innerHTML = "Podesite boju za stub grafa tipa horisontal:";
  podesavanjeBoja.className = "mb-2";
  parent.appendChild(podesavanjeBoja);
  container = document.createElement("div");
  container.className = "contaier";
  parent.appendChild(container);
  datesFK.forEach((date, index) => {
    var mincontainer = document.createElement("div");
    var mincontainer2 = document.createElement("div");
    container.appendChild(mincontainer);
    container.appendChild(mincontainer2);
    mincontainer.className = "col-sm-6 d-flex justify-content-around";
    mincontainer2.className = "col-sm-6";
    var stub = document.createElement("div");
    stub.innerHTML = "Stub " + (index + 1);
    var input = document.createElement("input");
    input.type = "color";
    input.value = horisontalColorsFK[index];
    if(!horisontalColorsFK[index]){
      horisontalColorsFK.push(getRandomColorOnce());
      updateLocalColorObject();
      saveLocalColorObjectContext();
    }
    input.className = horisontalColorsFK.length + index;
    input.onchange = (ev) => {
      horisontalColorsFK[Number(ev.target.className - horisontalColorsFK.length)] = ev.target.value;
      updateLocalColorObject();
      saveLocalColorObjectContext();
    };
    input.style.width = "30px";
    mincontainer.appendChild(stub);
    mincontainer.appendChild(input);
  });
}

function createLineColorPickersFK(parent) {
  var podesavanjeBoja = document.createElement("div");
  podesavanjeBoja.innerHTML = "Podesite boju za stub grafa tipa line:";
  podesavanjeBoja.className = "mb-2";
  parent.appendChild(podesavanjeBoja);
  container = document.createElement("div");
  container.className = "contaier";
  parent.appendChild(container);
  var mincontainer = document.createElement("div");
  var mincontainer2 = document.createElement("div");
  container.appendChild(mincontainer);
  container.appendChild(mincontainer2);
  mincontainer.className = "col-sm-6 d-flex justify-content-around";
  mincontainer2.className = "col-sm-6";
  var stub = document.createElement("div");
  stub.innerHTML = "Boja line grafa:";
  var input = document.createElement("input");
  input.type = "color";
  input.value = lineColorFK;
  input.className = "lineColorFK";
  input.onchange = (ev) => {
    lineColorFK = ev.target.value;
    updateLocalColorObject();
    saveLocalColorObjectContext();
  };
  input.style.width = "30px";
  mincontainer.appendChild(stub);
  mincontainer.appendChild(input);
}

function createRadarColorPickersFK(parent) {
  var podesavanjeBoja = document.createElement("div");
  podesavanjeBoja.innerHTML = "Podesite boju za stub grafa tipa radar:";
  podesavanjeBoja.className = "mb-2";
  parent.appendChild(podesavanjeBoja);
  container = document.createElement("div");
  container.className = "contaier";
  parent.appendChild(container);
  var mincontainer = document.createElement("div");
  var mincontainer2 = document.createElement("div");
  container.appendChild(mincontainer);
  container.appendChild(mincontainer2);
  mincontainer.className = "col-sm-6 d-flex justify-content-around";
  mincontainer2.className = "col-sm-6";
  var stub = document.createElement("div");
  stub.innerHTML = "Boja radar grafa:";
  var input = document.createElement("input");
  input.type = "color";
  input.value = radarColorFK;
  input.className = "radarColorFK";
  input.onchange = (ev) => {
    radarColorFK = ev.target.value;
    updateLocalColorObject();
    saveLocalColorObjectContext();
  };
  input.style.width = "30px";
  mincontainer.appendChild(stub);
  mincontainer.appendChild(input);
}

function createColorPickers() {
  updateColorsFromLocalColorObject();
  updateColorsFKFromLocalColorObject();
  var parent = document.getElementById("podesavanje-boje-grafova");
  var parentFK = document.getElementById("podesavanje-boje-grafova-FK");
  parent.innerHTML = "";
  parentFK.innerHTML = "";
  createBarColorPickers(parent);
  createHorisontalColorPickers(parent);
  createLineColorPickers(parent);
  createRadarColorPickers(parent);
  createBarColorPickersFK(parentFK);
  createHorisontalColorPickersFK(parentFK);
  createLineColorPickersFK(parentFK);
  createRadarColorPickersFK(parentFK);
}

function drawFlashKartice() {
  var tableBody = document.getElementById("tableFBody");
  tableBody.innerHTML = "";
  var dataTableHead = document.getElementById("tableFHead");
  dataTableHead.innerHTML = "";
  var tr = document.createElement("tr");
  var th = document.createElement("th");
  th.innerHTML = "#";
  th.className = "d-none d-sm-table-cell";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Datum";
  th.className = "d-none d-sm-table-cell";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Predmet";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Naučena pitanja";
  tr.appendChild(th);
  dataTableHead.appendChild(tr);
  var datFKRev = datesFK.reverse();
  var predFKRev = predmetiFK.reverse();
  var scorFKRev = scoresFK.reverse();
  for (var i = 0; i < datesFK.length; i++) {
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.innerHTML = datesFK.length - i;
    td.className = "d-none d-sm-table-cell";
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = datFKRev[i];
    td.className = "d-none d-sm-table-cell";
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = predFKRev[i];
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = scorFKRev[i];
    tr.appendChild(td);
    tableBody.appendChild(tr);
  }
}

function drawKvizove() {
  var tableBody = document.getElementById("tableKBody");
  tableBody.innerHTML = "";
  var dataTableHead = document.getElementById("tableKHead");
  dataTableHead.innerHTML = "";
  var tr = document.createElement("tr");
  var th = document.createElement("th");
  th.innerHTML = "#";
  th.className = "d-none d-sm-table-cell";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Datum";
  th.className = "d-none d-sm-table-cell";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Predmet";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Poeni";
  tr.appendChild(th);
  dataTableHead.appendChild(tr);
  var datRev = dates.reverse();
  var predRev = predmeti.reverse();
  var scorRev = scores.reverse();
  for (var i = 0; i < dates.length; i++) {
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.innerHTML = dates.length - i;
    td.className = "d-none d-sm-table-cell";
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = datRev[i];
    td.className = "d-none d-sm-table-cell";
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = predRev[i];
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = scorRev[i];
    tr.appendChild(td);
    tableBody.appendChild(tr);
  }
}

function barChartK1SetColor() {
  barChartK1.data.datasets.backgroundColor = [];
  barChartK1.data.datasets.hoverBackgroundColor = [];
}

function drawBarChartK1() {
  var ctxBK1 = document.getElementById("barChartK1").getContext("2d");
  var myBarChartK1 = new Chart(ctxBK1, {
    type: "bar",
    data: {
      labels: dates,
      datasets: [
        {
          label: "# Broj osvojenih poena",
          data: scores,
          backgroundColor: colors,
          hoverBackgroundColor: colors,
          borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
  return myBarChartK1;
}

function drawBarChartK2() {
  var ctxBK2 = document.getElementById("barChartK2").getContext("2d");
  var myBarChartK2 = new Chart(ctxBK2, {
    type: "bar",
    data: {
      labels: dates,
      datasets: [
        {
          label: "# broj pokusaja",
          data: scores,
          backgroundColor: colors,
          hoverBackgroundColor: colors,
          borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
  return myBarChartK2;
}

function drawBarChartK3() {
  var ctxBK3 = document.getElementById("barChartK3").getContext("2d");
  var myBarChartK3 = new Chart(ctxBK3, {
    type: "bar",
    data: {
      labels: datesFK,
      datasets: [
        {
          label: "# Broj naučenih pitanja",
          data: scoresFK,
          backgroundColor: colorsFK,
          hoverBackgroundColor: colorsFK,
          borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
  return myBarChartK3;
}

function drawHorisontalChartK1() {
  var myHorisontalChartK1 = new Chart(document.getElementById("horisontalChartK1"), {
    type: "horizontalBar",
    data: {
      labels: dates,
      datasets: [
        {
          label: "Broj osvojenih poena",
          data: scores,
          fill: false,
          backgroundColor: horisontalColors,
          hoverBackgroundColor: horisontalColors,
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        xAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
  return myHorisontalChartK1;
}

function drawHorisontalChartK2() {
  var myHorisontalChartK2 = new Chart(document.getElementById("horisontalChartK2"), {
    type: "horizontalBar",
    data: {
      labels: dates,
      datasets: [
        {
          label: "Broj pokusaja",
          data: scores,
          fill: false,
          backgroundColor: horisontalColors,
          hoverBackgroundColor: horisontalColors,
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        xAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
  return myHorisontalChartK2;
}

function drawHorisontalChartK3() {
  var myHorisontalChartK3 = new Chart(document.getElementById("horisontalChartK3"), {
    type: "horizontalBar",
    data: {
      labels: datesFK,
      datasets: [
        {
          label: "Broj naučenih pitanja",
          data: scoresFK,
          fill: false,
          backgroundColor: horisontalColorsFK,
          hoverBackgroundColor: horisontalColorsFK,
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        xAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
  return myHorisontalChartK3;
}

function drawLineChartK1() {
  var ctxL1Line = document.getElementById("lineChartK1").getContext("2d");
  var myLineChartK1 = new Chart(ctxL1Line, {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          label: "Broj osvojenih poena",
          data: scores,
          backgroundColor: [lineColor],
          hoverBackgroundColor: [lineColor],
          borderColor: ["rgba(200, 99, 132, .7)"],
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
  return myLineChartK1;
}

function drawLineChartK2() {
  var ctxL2Line = document.getElementById("lineChartK2").getContext("2d");
  var myLineChart2 = new Chart(ctxL2Line, {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          label: "Broj pokusaja",
          data: scores,
          backgroundColor: [lineColor],
          hoverBackgroundColor: [lineColor],
          borderColor: ["rgba(200, 99, 132, .7)"],
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
  return myLineChart2;
}

function drawLineChartK3() {
  var ctxL3Line = document.getElementById("lineChartK3").getContext("2d");
  var myLineChart3 = new Chart(ctxL3Line, {
    type: "line",
    data: {
      labels: datesFK,
      datasets: [
        {
          label: "Broj naučenih pitanja",
          data: scoresFK,
          backgroundColor: [lineColorFK],
          hoverBackgroundColor: [lineColorFK],
          borderColor: ["rgba(200, 99, 132, .7)"],
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
  return myLineChart3;
}

function drawRadarChartK1() {
  var ctxRK1 = document.getElementById("radarChartK1").getContext("2d");
  var myRadarChartK1 = new Chart(ctxRK1, {
    type: "radar",
    data: {
      labels: dates,
      datasets: [
        {
          label: "Broj osvojenih poena",
          data: scores,
          backgroundColor: [radarColor],
          hoverBackgroundColor: [radarColor],
          borderColor: ["rgba(200, 99, 132, .7)"],
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
  return myRadarChartK1;
}

function drawRadarChartK2() {
  var ctxRK2 = document.getElementById("radarChartK2").getContext("2d");
  var myRadarChartK2 = new Chart(ctxRK2, {
    type: "radar",
    data: {
      labels: dates,
      datasets: [
        {
          label: "Broj pokusaja",
          data: scores,
          backgroundColor: [radarColor],
          hoverBackgroundColor: [radarColor],
          borderColor: ["rgba(200, 99, 132, .7)"],
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
  return myRadarChartK2;
}

function drawRadarChartK3() {
  var ctxRK3 = document.getElementById("radarChartK3").getContext("2d");
  var myRadarChartK3 = new Chart(ctxRK3, {
    type: "radar",
    data: {
      labels: datesFK,
      datasets: [
        {
          label: "Broj naučenih pitanja",
          data: scoresFK,
          backgroundColor: [radarColorFK],
          hoverBackgroundColor: [radarColorFK],
          borderColor: ["rgba(200, 99, 132, .7)"],
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
  return myRadarChartK3;
}

function drawCharts() {
  getLocalColorObjectContext();
  updateColorsFromLocalColorObject();
  barChartK1.innerHTML = "";
  drawBarChartK1();
  horisontalChartK1.innerHTML = "";
  drawHorisontalChartK1();
  lineChartK1.innerHTML = "";
  drawLineChartK1();
  radarChartK1.innerHTML = "";
  drawRadarChartK1();
  barChartK2.innerHTML = "";
  drawBarChartK2();
  horisontalChartK2.innerHTML = "";
  drawHorisontalChartK2();
  lineChartK2.innerHTML = "";
  drawLineChartK2();
  radarChartK2.innerHTML = "";
  drawRadarChartK2();
}

function drawChartsFK() {
  getLocalColorObjectContext();
  updateColorsFKFromLocalColorObject();
  barChartK3.innerHTML = "";
  drawBarChartK3();
  horisontalChartK3.innerHTML = "";
  drawHorisontalChartK3();
  lineChartK3.innerHTML = "";
  drawLineChartK3();
  radarChartK3.innerHTML = "";
  drawRadarChartK3();
}

function reloadPage() {
  location.reload();
}

function drawAllCharts() {
  drawCharts();
  drawChartsFK();
  createColorPickers();
}

function undoPictureChange() {
  updateBackgroundPicture(previousPicture);
  localStorageObject.profilePictureBodyUrl = previousPicture;
  updateLocalStorageObject();
}

function updateBackgroundPicture(pictureUrl) {
  previousPicture = documentProfilPageBodyBackground.style.background;
  documentProfilPageBodyBackground.style.background = "url('" + pictureUrl + "') no-repeat center center fixed";
  localStorageObject.profilePictureBodyUrl = pictureUrl;
  updateLocalStorageObject();
}

function updateProfilePageBodyPictureURL() {
  document.getElementById("save-changes-modal-body").innerHTML =
    "Želite li sačuvati novu pozadinu? <br> Potvrdom se promena čuva za naredni pristup profilu.";
  var profilePictureBodyUrl = document.getElementById("profilePictureBodyUrl");
  if (profilePictureBodyUrl.value) {
    updateBackgroundPicture(profilePictureBodyUrl.value);
  } else {
    profilePictureBodyUrl.placeholder = "Niste submitovali ništa... Pokušajte ponovo...";
    setTimeout(function () {
      profilePictureBodyUrl.placeholder = "URL...";
    }, 5000);
    document.getElementById("save-changes-modal-body").innerHTML = "Niste submitovali ništa... Pokušajte ponovo...";
  }
}

function updateProfilePageBodyPictureFile() {
  var url = URL.createObjectURL(document.getElementById("inputGroupFile02").files[0]);
  updateBackgroundPicture(url);
}

function getNeededPictureHeightAndWidth() {
  var pictureNeededWidth = document.getElementById("pictureNeededWidth");
  var width = document.getElementById("profil-page-body").getBoundingClientRect().width;
  var height = document.getElementById("profil-page-body").getBoundingClientRect().height;
  var pictureNeededHeight = document.getElementById("pictureNeededHeight");
  pictureNeededWidth.value = "" + document.getElementById("profil-page-body").clientWidth;
  pictureNeededWidth.value = window.innerWidth;
  pictureNeededHeight.value = "" + document.getElementById("profil-page-body").clientHeight;
  pictureNeededHeight.value = window.innerHeight;
}

var level = 1;

var rank1;
var rank2;
var rank3;
var rank4;
var rank5;

function checkIfChampion() {
  var myId = document.getElementById("myId");
  var myIdValue = myId.innerHTML;
  var rank = document.getElementById("rank");
  if (localStorage.getItem("rank1") === null) {
    rank1 = null;
  } else {
    rank1 = JSON.parse(localStorage.getItem("rank1"));
  }
  if (localStorage.getItem("rank2") === null) {
    rank2 = null;
  } else {
    rank2 = JSON.parse(localStorage.getItem("rank2"));
  }
  if (localStorage.getItem("rank3") === null) {
    rank3 = null;
  } else {
    rank3 = JSON.parse(localStorage.getItem("rank3"));
  }
  if (localStorage.getItem("rank4") === null) {
    rank4 = null;
  } else {
    rank4 = JSON.parse(localStorage.getItem("rank4"));
  }
  if (localStorage.getItem("rank5") === null) {
    rank5 = null;
  } else {
    rank5 = JSON.parse(localStorage.getItem("rank5"));
  }
  rank1 = JSON.parse(localStorage.getItem("rank1"));
  rank2 = JSON.parse(localStorage.getItem("rank2"));
  rank3 = JSON.parse(localStorage.getItem("rank3"));
  rank4 = JSON.parse(localStorage.getItem("rank4"));
  rank5 = JSON.parse(localStorage.getItem("rank5"));
  if (
    (rank1 != null && rank1 == myIdValue) ||
    (rank2 != null && rank2 == myIdValue) ||
    (rank3 != null && rank3 == myIdValue) ||
    (rank4 != null && rank4 == myIdValue) ||
    (rank5 != null && rank5 == myIdValue)
  ) {
    setChampion();
    rank.style.display = "block";
  } else {
    rank.style.display = "none";
  }
}

function setLevel() {
  var brojKvizova = document.getElementById("brojKvizova");
  brojKvizova.innerHTML = "Broj odrađenih kvizova: " + scores.length;
  if (dates.length >= 0 && dates.length < 10) {
    level = 1;
  }
  if (dates.length >= 10 && dates.length < 20) {
    level = 2;
  }
  if (dates.length >= 20) {
    level = 3;
  }
  setPicture(level);
  checkIfChampion();
}

function setPicture(level) {
  if (level == 0) {
  }
  if (level == 1) {
    setBeginer();
  } else if (level == 2) {
    setAdvanced();
  } else {
    setHigh();
  }
  if (level == 4) {
    setChampion();
  }
}

function setHigh() {
  var bedgeId = document.getElementById("bedgeImgId");
  bedgeId.src = "/AppPictures/Bedzevi/High.jpg";
}

function setBeginer() {
  var bedgeId = document.getElementById("bedgeImgId");
  bedgeId.src = "/AppPictures/Bedzevi/Beginer.jpg";
}

function setAdvanced() {
  var bedgeId = document.getElementById("bedgeImgId");
  bedgeId.src = "/AppPictures/Bedzevi/Advanced.jpg";
}

function setChampion() {
  var bedgeId = document.getElementById("bedgeImgId");
  bedgeId.src = "/AppPictures/Bedzevi/sampion.jpg";
}

function profileStartup() {
  //adminContext();
  initialiseLatestProfileSettingsContext();
  dataInitialisation();
  dataInitialisationFavorites();
  var array = dataInitialisationUsers();
  var name = array[0];
  var lastName = array[1];
  drawFlashKartice();
  $(document).ready(function () {
    $("#tableF").DataTable();
  });
  drawKvizove();
  $(document).ready(function () {
    $("#tableK").DataTable();
  });
  drawFavorites(name, lastName);
  setLevel();
  getLocalColorObjectContext();
  createColorPickers();
  drawAllCharts();
  allChartsDysplayInit();
}

function admin() {
  if (localStorage.getItem("admin") === null) {
    localStorage.setItem("admin", JSON.stringify(myIdValue));
  } else {
    localStorage.removeItem("admin");
    localStorage.setItem("admin", JSON.stringify(myIdValue));
  }
}
function checkIfAdminIsHome() {
  var forCheck = JSON.parse(localStorage.getItem("admin"));
  if (adminId == forCheck) {
    adminIsHere = true;
  }
}

/**
 * Check if it is admin id c63e28cf-e6ae-42a1-ba3f-60efb8734ac3.
 * If it is it will enable admin alerts.
 */
function adminContext() {
  admin();
  checkIfAdminIsHome();
}

window.onload = function () {
  profileStartup();
  showMainDiv();
};
