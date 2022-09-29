/* MARK: - Fade-in effect
----------------------------------------------------- */
const fadeInTarget = document.querySelectorAll(".disappeared");

window.addEventListener("load", fadeIn);

function fadeIn() {
  for (let i = 0; i < fadeInTarget.length; i++) {
    fadeInTarget[i].classList.add("show-off");
  }
}