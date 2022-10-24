const htmlElement = document.querySelector("html");
const burger = document.querySelector(".burger");
const menu = document.querySelector(".nav-menu");
const overhide = document.querySelector(".nav-image-overhide");

function toggleBurger() {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  overhide.classList.toggle("active");
  htmlElement.classList.toggle("active");
}

burger.addEventListener("click", toggleBurger);
overhide.addEventListener("click", toggleBurger);
menu.addEventListener("click", (event) => {
  if(event.target.classList.contains('list-item-link')) toggleBurger();
});

