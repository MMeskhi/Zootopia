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

// Click outside nav menu to close
window.addEventListener("click", function (e) {
  if (menuActive.contains(e.target) || navBar.contains(e.target)) {
  } else {
    isNavbarOpen();
  }
});

function isNavbarOpen() {
  if (menuActive.style.height === "700px") {
    navClose();
  }
  return;
}

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

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    800: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    1225: {
      slidesPerView: 4,
    },
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

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    1025: {
      slidesPerView: 4,
    },

    1225: {
      slidesPerView: 6,
    },
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

const pricesB = document.querySelectorAll(".priceB .price");
const weightsB = document.querySelectorAll(".wgtB .weight");

const pricesC = document.querySelectorAll(".priceC .price");
const weightsC = document.querySelectorAll(".wgtC .weight");

const pricesD = document.querySelectorAll(".priceD .price");
const weightsD = document.querySelectorAll(".wgtD .weight");

const pricesE = document.querySelectorAll(".priceE .price");
const weightsE = document.querySelectorAll(".wgtE .weight");

const pricesF = document.querySelectorAll(".priceF .price");
const weightsF = document.querySelectorAll(".wgtF .weight");

const pricesG = document.querySelectorAll(".priceG .price");
const weightsG = document.querySelectorAll(".wgtG .weight");

const changePrice = (item) => {
  for (price of prices) {
    price.classList.remove("active");
  }
  prices[item].classList.add("active");
};

const changeWeight = (item) => {
  for (weight of weights) {
    weight.classList.remove("active");
  }
  weights[item].classList.add("active");
};

const changePriceB = (item) => {
  for (price of pricesB) {
    price.classList.remove("active");
  }
  pricesB[item].classList.add("active");
};

const changeWeightB = (item) => {
  for (weight of weightsB) {
    weight.classList.remove("active");
  }
  weightsB[item].classList.add("active");
};

const changePriceC = (item) => {
  for (price of pricesC) {
    price.classList.remove("active");
  }
  pricesC[item].classList.add("active");
};

const changeWeightC = (item) => {
  for (weight of weightsC) {
    weight.classList.remove("active");
  }
  weightsC[item].classList.add("active");
};

const changePriceD = (item) => {
  for (price of pricesD) {
    price.classList.remove("active");
  }
  pricesD[item].classList.add("active");
};

const changeWeightD = (item) => {
  for (weight of weightsD) {
    weight.classList.remove("active");
  }
  weightsD[item].classList.add("active");
};

const changePriceE = (item) => {
  for (price of pricesE) {
    price.classList.remove("active");
  }
  pricesE[item].classList.add("active");
};

const changeWeightE = (item) => {
  for (weight of weightsE) {
    weight.classList.remove("active");
  }
  weightsE[item].classList.add("active");
};

const changePriceF = (item) => {
  for (price of pricesF) {
    price.classList.remove("active");
  }
  pricesF[item].classList.add("active");
};

const changeWeightF = (item) => {
  for (weight of weightsF) {
    weight.classList.remove("active");
  }
  weightsF[item].classList.add("active");
};

const changePriceG = (item) => {
  for (price of pricesG) {
    price.classList.remove("active");
  }
  pricesG[item].classList.add("active");
};

const changeWeightG = (item) => {
  for (weight of weightsG) {
    weight.classList.remove("active");
  }
  weightsG[item].classList.add("active");
};

weights.forEach((slide, item) => {
  slide.addEventListener("click", () => {
    i = item;
    changeWeight(i);
    changePrice(i);
  });
});

weightsB.forEach((slide, item) => {
  slide.addEventListener("click", () => {
    i = item;
    changeWeightB(i);
    changePriceB(i);
  });
});

weightsC.forEach((slide, item) => {
  slide.addEventListener("click", () => {
    i = item;
    changeWeightC(i);
    changePriceC(i);
  });
});

weightsD.forEach((slide, item) => {
  slide.addEventListener("click", () => {
    i = item;
    changeWeightD(i);
    changePriceD(i);
  });
});
weightsE.forEach((slide, item) => {
  slide.addEventListener("click", () => {
    i = item;
    changeWeightE(i);
    changePriceE(i);
  });
});

weightsF.forEach((slide, item) => {
  slide.addEventListener("click", () => {
    i = item;
    changeWeightF(i);
    changePriceF(i);
  });
});

weightsG.forEach((slide, item) => {
  slide.addEventListener("click", () => {
    i = item;
    changeWeightG(i);
    changePriceG(i);
  });
});
