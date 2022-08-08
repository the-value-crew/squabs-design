import './sass/main.scss';

// Splide
import "./node_modules/@splidejs/splide/dist/js/splide.min.js";

// Navbar
let mobileNavbar = document.querySelector("#mobile-navbar");
let closeMobileNavbarBtn = document.querySelector(".close-navbar");
let openMobileNavbarBtn = document.querySelector(".open-navbar");

let showMobileNavbar = () => {
  mobileNavbar.classList.remove("hidden");
};

let hideMobileNavbar = () => {
  mobileNavbar.classList.add("hidden");
};

closeMobileNavbarBtn.addEventListener("click", hideMobileNavbar);
openMobileNavbarBtn.addEventListener("click", showMobileNavbar);