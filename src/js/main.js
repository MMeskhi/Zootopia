//Menu open close
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

// // Click outside nav menu to close
// window.addEventListener("click", function (e) {
//   if (
//     menuActive.contains(e.target) ||
//     navBar.contains(e.target) ||
//     menuActive.style.zIndex === "-99"
//   ) {
//   } else {
//     navClose();
//   }
// });

//Big slider
var swiper1 = new Swiper(".big-slider .swiper", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next-unique",
    prevEl: ".swiper-button-prev-unique",
  },
});

//Product sliders
var swiper2 = new Swiper(".top-products .swiper", {
  direction: "horizontal",
  slidesPerView: 4,
  spaceBetween: 26,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper3 = new Swiper(".brands .swiper", {
  direction: "horizontal",
  slidesPerView: 6,
  spaceBetween: 26,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

var swiper4 = new Swiper(".big-card .swiper", {
  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next-unique",
    prevEl: ".swiper-button-prev-unique",
  },
});

//Product weight/price selector
const prices = document.querySelectorAll(".priceA .price");
const weights = document.querySelectorAll(".wgtA .weight");

const changePrice = (n) => {
  for (price of prices) {
    price.classList.remove("active");
  }
  prices[n].classList.add("active");
};

const changeWeight = (n) => {
  for (weight of weights) {
    weight.classList.remove("active");
  }
  weights[n].classList.add("active");
};

weights.forEach((slide, iDot) => {
  slide.addEventListener("click", () => {
    i = iDot;
    changeWeight(i);
    changePrice(i);
  });
});
