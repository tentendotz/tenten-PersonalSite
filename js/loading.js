/* MARK: - Loader Animation for Fade-in effect
----------------------------------------------------- */
const pageLoader = document.querySelector(".loading-container");
const fadeInTarget = document.querySelectorAll(".disappeared");

window.addEventListener("load", fadeIn);

function fadeIn() {
  pageLoader.style.display = "none";
  for (let i = 0; i < fadeInTarget.length; i++) {
    fadeInTarget[i].classList.add("show-off");
  }
}