export default function initSubmenu() {}

const buttons = document.querySelectorAll(".has-submenu");

function toggleSubmenu(event) {
  const submenu = event.target.nextElementSibling;

  event.preventDefault();
  submenu.classList.toggle("active");

  outsideClick(this, () => {
    this.classList.remove("active");
  });
}

function outsideClick(element, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    html.addEventListener("click", handleOutsideClick);
  }
  element.setAttribute(outside, "");

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);

      html.removeEventListener("click", handleOutsideClick);
      callback();
    }
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", toggleSubmenu);
});
