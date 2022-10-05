//Hamburger Menu
const btnOpen = document.getElementById("hamburger");
const btnClose = document.getElementById("hamburgerCat");
const navBar = document.querySelector(".navbar");
const menuActive = document.querySelector(".menu-active");

function navOpen() {
  btnOpen.classList.toggle("is-active");
  navBar.style.visibility = "hidden";
  menuActive.style.height = "700px";
  menuActive.style.opacity = "1";
  menuActive.style.zIndex = "99";
}
btnOpen.addEventListener("click", navOpen);

function navClose() {
  btnOpen.classList.toggle("is-active");
  navBar.style.visibility = "";
  menuActive.style.height = "";
  menuActive.style.opacity = "";
  menuActive.style.zIndex = "-99";
}
btnClose.addEventListener("click", navClose);

//Top Seller Slider
const bigCardSlider = document.querySelectorAll(".big-card-cont");

const prevBtn = document.getElementById("arrowL");
const nextBtn = document.getElementById("arrowR");

let activeIndex = 0;

function slideShow() {
  bigCardSlider.forEach((item, i) => {
    if (activeIndex === i) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

function showNextSlide() {
  activeIndex = activeIndex + 1;
  if (activeIndex > bigCardSlider.length - 1) {
    activeIndex = 0;
  }
  slideShow();
}

function showPrevSlide() {
  activeIndex = activeIndex - 1;
  if (activeIndex < 0) {
    activeIndex = bigCardSlider.length - 1;
  }
  slideShow();
}

prevBtn.addEventListener("click", () => {
  showPrevSlide();
});

nextBtn.addEventListener("click", () => {
  showNextSlide();
});

//Big Slider
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
