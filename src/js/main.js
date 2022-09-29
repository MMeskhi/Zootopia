//Hamburger Menu
const btn = document.getElementById("hamburger");

function navToggle() {
  btn.classList.toggle("is-active");
}
btn.addEventListener("click", navToggle);
