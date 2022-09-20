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


/* MARK: - Turn into Top Bar Nav or Dropdown Menu Nav
----------------------------------------------------- */
const mql = window.matchMedia("(max-width: 767px)");
const navbarList = document.querySelector(".navbar-nav").classList;
const navItems = document.querySelectorAll(".nav-item");
const navLinks = document.querySelectorAll("#navbarSupportedContent a");

handleMediaQuery(mql);
mql.addEventListener("change", handleMediaQuery);

function handleMediaQuery(e) {
  e.matches ? dropdownMenu() : topBarMenu();
}

// if viewport ≦ 767px, Dropdown Menu style.
function dropdownMenu() {
  navbarList.add("dropdown-menu");
  for (var i = 0; i < navItems.length; i++) {
    navItems[i].classList.remove("horizontal-padding");
  }
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove("nav-link");
    navLinks[i].classList.add("dropdown-item");
  }
}
// if viewport > 767px, Top Bar Menu style.
function topBarMenu() {
  navbarList.remove("dropdown-menu");
  for (var i = 0; i < navItems.length; i++) {
    navItems[i].classList.add("horizontal-padding");
  }
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove("dropdown-item");
    navLinks[i].classList.add("nav-link");
  }
}


/* MARK: - Hamburger Menu auto closing event
----------------------------------------------------- */
document.addEventListener("click", function (e) {
  closeToggler(e.target);
});
document.addEventListener("touchstart", function (e) {
  closeToggler(e.target);
});

function closeToggler(element) {
  if (
    element.classList.contains("navbar-toggler") ||
    element.classList.contains("collapsed-icon")
  ) {
    return;
  } else {
    document.getElementById("navbarSupportedContent").classList.remove("show");
  }
}