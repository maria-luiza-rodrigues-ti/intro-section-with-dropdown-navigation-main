export default function initSubmenu() {}

const buttons = document.querySelectorAll(".has-submenu");
const submenus = document.querySelectorAll(".submenu");

function toggleSubmenu(event) {
  const submenu = event.target.nextElementSibling;
  let fadeState = true;

  event.preventDefault();
  submenu.classList.toggle("active");
}

buttons.forEach((button) => {
  button.addEventListener("click", toggleSubmenu);
});
