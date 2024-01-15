/* MARK: - Logo highlighting event
----------------------------------------------------- */
const brandName = document.querySelector(".brand-name");
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
const navItems = document.querySelectorAll(".navbar-nav .nav-item");
const navLinks = document.querySelectorAll("#navbarSupportedContent a");

handleMediaQuery(mql);
mql.addEventListener("change", handleMediaQuery);

function handleMediaQuery(e) {
  e.matches ? dropdownStyle() : topBarStyle();
}

// if viewport ≦ 767px, Dropdown Menu style.
function dropdownStyle() {
  navbarList.add("dropdown-menu");
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].classList.remove("horizontal-padding");
  }
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove("nav-link");
    navLinks[i].classList.add("dropdown-item");
  }
}
// if viewport > 767px, Top Bar Menu style.
function topBarStyle() {
  navbarList.remove("dropdown-menu");
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].classList.add("horizontal-padding");
  }
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove("dropdown-item");
    navLinks[i].classList.add("nav-link");
  }
}


/* MARK: - Hamburger Menu auto closing event
----------------------------------------------------- */
let touched = false;

document.addEventListener("touchend", function (e) {
  touched = true;
  togglerAction(e.target);
});

document.addEventListener("click", function (e) {
  touched ? (touched = false) : togglerAction(e.target);
  
  if (e.target.classList.contains("dropdown-item")) {
    document.getElementById("navbarSupportedContent").classList.remove("show");
  }
});

function togglerAction(searchElement) {
  if (!checkKey(searchElement.classList)) {
    document.getElementById("navbarSupportedContent").classList.remove("show");
  }
  // If checkKey() returned true, Bootstrap would control menu behavior.
}

function checkKey(classNames) {
  const validKeys = ["navbar-toggler", "icon-bar", "dropdown-item"];
  let answer = false;

  for (let i = 0; i < classNames.length; i++) {
    if (validKeys.includes(classNames[i])) {
      answer = true;
    }
  }
  return answer;
}
