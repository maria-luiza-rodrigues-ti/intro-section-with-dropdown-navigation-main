export default function initMenuMobile() {}

const openButton = document.querySelector('[data-menu="open" ');
const nav = document.querySelector(".nav");
const closeButton = document.querySelector('[data-menu="close"]');

function toggleMenu(event) {
  event.preventDefault();
  nav.classList.toggle("open");
}

openButton.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", toggleMenu);
