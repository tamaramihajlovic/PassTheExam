var localStorageObjectBazaBlanketa = [];
var previousLocalStorageObjectBazaBlanketa;

window.addEventListener("DOMContentLoaded", (event) => {
  //obilazimo sve userrejtinge
  let divUserRaitings = document.getElementsByClassName("user-raiting");

  for (let i = 0; i < divUserRaitings.length; i++) {
    let p = divUserRaitings[i];
    let divBars = p.querySelectorAll(".bar-container div");
    let brojOcena = p.querySelectorAll(".right div");

    //Ovo je ukupan broj poena
    let divPoeni = querySelectorSaberi(".right div", p);

    for (let j = 0; j < brojOcena.length; j++) {
      if (divPoeni == 0) {
        divBars[j].style.width = `0%`;
      } else divBars[j].style.width = `${(Number.parseFloat(brojOcena[j].innerHTML) / divPoeni) * 100}%`;
    }
    izracunajBrojZvezdica(izracunajProsecnuOcenu(p), p);
    p.getElementsByClassName("opis")[0].innerHTML =
      divPoeni == 0 ? "Blanket jos nije ocenjen" : `${izracunajProsecnuOcenu(p)} zasnovano na ${divPoeni} ocene.`;
  }
});

function querySelectorSaberi(string, p) {
  return Array.from(p.querySelectorAll(string))
    .map((x) => Number.parseInt(x.innerHTML))
    .reduce((acc, val) => acc + val, 0);
}
function izracunajBrojZvezdica(prosecnaOcena, p) {
  let zvezdice = p.querySelectorAll(".fa-star");
  console.log(prosecnaOcena);
  for (let l = 0; l < prosecnaOcena; l++) {
    console.log(zvezdice[l]);
    zvezdice[l].classList.add("checked");
  }
}
function izracunajProsecnuOcenu(p) {
  let x = (p, s) => parseFloat(p.querySelector(s).innerHTML);

  let poeni = parseFloat(querySelectorSaberi(".right div", p));
  let f = 0;
  if (poeni != 0)
    f = (x(p, ".broj5") * 5 + x(p, ".broj4") * 4 + x(p, ".broj3") * 3 + x(p, ".broj2") * 2 + x(p, ".broj1")) / poeni;

  return f.toPrecision(3);
}

function undoLatestChange() {
  debugger;
  if (localStorage.getItem("localStorageObjectBazaBlanketa") === null) {
    localStorage.setItem("localStorageObjectBazaBlanketa", JSON.stringify(previousLocalStorageObjectBazaBlanketa));
    console.log("Undone poslednja promena nepostojaceg localStorageObjekta.");
  } else {
    localStorage.removeItem("localStorageObjectBazaBlanketa");
    localStorage.setItem("localStorageObjectBazaBlanketa", JSON.stringify(localStorageObjectBazaBlanketa));
    console.log("Undone poslednja promena postojaceg localStorageObjekta.");
  }
}

function saveFavorite(userId, blanketId) {
  previousLocalStorageObjectBazaBlanketa = localStorageObjectBazaBlanketa;
  if (localStorage.getItem("localStorageObjectBazaBlanketa") === null) {
    localStorageObjectBazaBlanketa.push({ userId: userId, blanketId: [blanketId] });
    localStorage.setItem("localStorageObjectBazaBlanketa", JSON.stringify(localStorageObjectBazaBlanketa));
  } else {
    localStorageObjectBazaBlanketa = JSON.parse(localStorage.getItem("localStorageObjectBazaBlanketa"));
    var postojiUser = false;
    localStorageObjectBazaBlanketa.forEach((el) => {
      if (el.userId == userId) {
        postojiUser = true;
      }
    });
    if (postojiUser) {
      localStorageObjectBazaBlanketa.forEach((el) => {
        if (el.userId == userId) {
          console.log("Korisnik postoji.");
          var postojiBlanket = false;
          el.blanketId.forEach((elBl) => {
            if (elBl == blanketId) {
              postojiBlanket = true;
            }
          });
          if (postojiBlanket) {
            console.log("blanket postoji.");
          } else {
            el.blanketId.push(blanketId);
            console.log("blanketId dodat postojecem korisniku.");
          }
        }
      });
    } else {
      console.log("Dodat novi korisnik sa novim blanketId-em.");
      localStorageObjectBazaBlanketa.push({ userId: userId, blanketId: [blanketId] });
    }
    localStorage.removeItem("localStorageObjectBazaBlanketa");
    localStorage.setItem("localStorageObjectBazaBlanketa", JSON.stringify(localStorageObjectBazaBlanketa));
    console.log("Context sacuvan");
  }
}

var a = localStorage.getItem("localStorageObjectBazaBlanketa");
console.log(a);
//localStorage.removeItem("localStorageObjectBazaBlanketa");
