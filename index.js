const menubtn = document.getElementById("menu-btn");
const closebtn = document.getElementById("menu-btn-close");
const overlays = document.querySelectorAll(".overlay");
const nav = document.querySelector("nav");
let triggered = false;
function handleOpen(e) {
  triggered = false;
  nav.classList.toggle("hidden");
  closebtn.classList.toggle("hidden");
  menubtn.classList.toggle("hidden");
  overlays.forEach((o) => o.classList.toggle("hidden"));
}
function handleClose(e) {
  nav.classList.toggle("hidden");
  menubtn.classList.toggle("hidden");
  closebtn.classList.toggle("hidden");
  overlays.forEach((o) => o.classList.toggle("hidden"));
}

function handleOverlay(e) {
  if (e.currentTarget) {
    handleClose();
  }
}
function handleScroll() {
  if (!closebtn.classList.contains("hidden")) {
    let triggerElement = document.querySelector("nav");
    let triggerPosition =
      triggerElement.offsetTop + triggerElement.offsetHeight / 2;

    if (window.scrollY > triggerPosition && !triggered) {
      triggered = true;
      handleClose();
    }
  }
}

menubtn.addEventListener("click", handleOpen);
closebtn.addEventListener("click", handleClose);
overlays[0].addEventListener("click", handleOverlay);
window.addEventListener("scroll", handleScroll);
