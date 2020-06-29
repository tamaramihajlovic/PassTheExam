window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".details").addEventListener("click", (ev) => {
    ev.target.style.zIndex = "0";
  });
  let stars = document.getElementsByClassName("fa-star");

  let inputOcena = document.getElementById("ocena");
  for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener("mouseover", () => {
      let ind = parseInt(stars[i].id);
      inputOcena.value = ind;

      for (let j = 0; j < ind; j++) {
        stars[j].classList.add("checked");
      }
    });
    stars[i].addEventListener("mouseleave", () => {
      for (let j = 0; j < stars.length; j++) stars[j].classList.remove("checked");
    });
  }
  document.getElementById("in").addEventListener("keyup", (ev) => {
    console.log(ev.target.value);
    if (ev.target.value == "") document.getElementById("comment").disabled = true;
    else document.getElementById("comment").disabled = false;
  });
  //in1 i commnet1 ima ih vise
  Array.from(document.getElementsByClassName("in1")).forEach((eli, ind) =>
    eli.addEventListener("keyup", (ev) => {
      console.log(ev.target.value);
      if (ev.target.value == "") Array.from(document.getElementsByClassName("comment1"))[ind].disabled = true;
      else Array.from(document.getElementsByClassName("comment1"))[ind].disabled = false;
    })
  );
  let nizElemenata = Array.from(document.getElementsByClassName("admin")).map((x) =>
    x.parentElement.querySelector("h6")
  );
  nizElemenata.forEach((el) => el.classList.add("by-author"));
  let nizElemenata1 = Array.from(document.getElementsByClassName("professor")).map((x) =>
    x.parentElement.querySelector("h6")
  );
  nizElemenata1.forEach((el) => el.classList.add("by-profesor"));
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
  // document.addEventListener("c")
});

function otvoryReplyBox(ev) {
  Array.from(document.querySelectorAll(".odgovorKomentara")).forEach((el) => (el.style.display = "none"));
  ev.target.parentElement.parentElement.parentElement.parentElement.querySelector(".odgovorKomentara").style.display =
    "list-item";
  //ev.target.querySelector(style.display="list-item";
}
