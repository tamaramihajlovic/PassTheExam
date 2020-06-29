window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("prvi").style.display = "none";
    document.querySelector(".centar").style.display = "block";
    document.body.classList.add("bClass");
  }, 500);
});
