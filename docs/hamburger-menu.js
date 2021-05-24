const hamburger = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("open");
  hamburger.classList.toggle("ex");
});