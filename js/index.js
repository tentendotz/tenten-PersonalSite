/* MARK: - Logo highlighting event
----------------------------------------------------- */
const brandName = document.querySelector(".navbar-brand");
const logo = document.querySelector(".logo");

brandName.addEventListener("mouseover", function () {
  logo.classList.add("fill-highlight");
});

brandName.addEventListener("mouseout", function () {
  logo.classList.remove("fill-highlight");
});



