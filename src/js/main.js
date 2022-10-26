//Menu open/close
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

//Mobile Menu open/close
const mobileBtnOpen = document.getElementById("mobileHamburger");
const mobileBtnClose = document.getElementById("mobileCat");
const mobileMenu = document.querySelector(".menu-mobile-active");

function mobileNavOpen() {
  mobileBtnOpen.classList.toggle("is-active");
  mobileBtnClose.style.opacity = "1";
  mobileBtnClose.style.zIndex = "10";
  mobileMenu.style.opacity = "1";
  mobileMenu.style.zIndex = "90";
  mobileMenu.style.height = "100%";
  document.body.style.overflow = "hidden";
  topFunction();
}
mobileBtnOpen.addEventListener("click", mobileNavOpen);

function mobileNavClose() {
  mobileBtnOpen.classList.toggle("is-active");
  mobileBtnClose.style.opacity = "";
  mobileBtnClose.style.zIndex = "";
  mobileMenu.style.opacity = "";
  mobileMenu.style.zIndex = "-99";
  mobileMenu.style.height = "";
  document.body.style.overflow = "";
}
mobileBtnClose.addEventListener("click", mobileNavClose);

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Product weight/price selector
const weightsBtns = document.querySelectorAll(".weight");

weightsBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const parentSlide = btn.closest(
      ".swiper-slide, .listing-product, .product"
    );
    const priceBlock = parentSlide.querySelector(".price");
    const weightBlock = parentSlide.querySelectorAll(".weight");
    const price = btn.dataset.price;
    priceBlock.innerText = price;
    const changePrice = (active) => {
      for (let i = 0; i < weightBlock.length; i++) {
        weightBlock[i].classList.remove("active");
      }
      active.classList.add("active");
    };
    changePrice(btn);
  });
});

///Product page
//Quantity selector
const quantMinus = document.querySelector(".minus");
const quantPlus = document.querySelector(".plus");

function updateQuantity(isIncreasing) {
  const inputField = document.getElementById("quant");
  let quantity = inputField.value;
  if (isIncreasing == true) {
    quantity = parseInt(quantity) + 1;
  } else if (quantity > 1) {
    quantity = parseInt(quantity) - 1;
  }
  inputField.value = quantity;
}

function quantDecrease() {
  updateQuantity(false);
}
function quantIncrease() {
  updateQuantity(true);
}

//Product about see more/less
const productAboutMore = document.querySelector(
  ".product .product-about .text"
);
const seeMore = document.querySelector(".see-more");
const seeLess = document.querySelector(".see-less");

function showMoreAbout() {
  productAboutMore.style.maxHeight = "100rem";
  seeMore.style.display = "none";
  seeLess.style.display = "flex";
}

function showLessAbout() {
  productAboutMore.style.maxHeight = "";
  seeMore.style.display = "";
  seeLess.style.display = "";
}

//If on product page
//Product image selector swiper
if (document.getElementById("product")) {
  quantMinus.addEventListener("click", quantDecrease);
  quantPlus.addEventListener("click", quantIncrease);
  seeMore.addEventListener("click", showMoreAbout);
  seeLess.addEventListener("click", showLessAbout);

  const selectorImgs = new Swiper(".product-img-selector", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,

    breakpoints: {
      1225: {
        direction: "vertical",
      },
    },
  });
  const mainImg = new Swiper(".product-main-img", {
    spaceBetween: 10,
    thumbs: {
      swiper: selectorImgs,
    },
  });
}

///Product listing page
//Listing cat-menu toggler
const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const parentFilter = btn.closest(".filter-select");
    const filterOpen = parentFilter.querySelector(".open-filter");
    const filterBtn = parentFilter.querySelector(".filter-btn");
    const filterToggle = () => {
      filterOpen.classList.toggle("closed");
      filterBtn.classList.toggle("active");
    };
    filterToggle(btn);
  });
});

const filterCategories = document.querySelectorAll(".filter-cat");

filterCategories.forEach((btn) => {
  btn.addEventListener("click", () => {
    const parentCategory = btn.closest(".filter-cat");
    const categoryBox = parentCategory.querySelector(".box");
    const boxToggle = () => {
      categoryBox.classList.toggle("active");
    };
    boxToggle(btn);
  });
});

//Product filter slide on mobile
const categoryBox = document.querySelector(".product-filter");
const categoryBtn = document.querySelector(".product-filter-mobile");

function slideCategoryBoxInOut() {
  categoryBox.classList.toggle("slide-in-out");
  categoryBtn.classList.toggle("active");
}

if (document.getElementById("listing")) {
  categoryBtn.addEventListener("click", slideCategoryBoxInOut);
}

//Price range
const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 100;
priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});
rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);
    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

//If on main page swipers
if (document.getElementById("main")) {
  //Big slider
  const mainSlider = new Swiper(".big-slider .swiper", {
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
  const productSlider = new Swiper(".top-products .swiper", {
    direction: "horizontal",
    slidesPerView: 4,
    spaceBetween: 26,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination.swiper-pagination2",
      type: "progressbar",
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

  const brandSlider = new Swiper(".brands .swiper", {
    direction: "horizontal",
    slidesPerView: 6,
    spaceBetween: 26,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination.swiper-pagination3",
      type: "progressbar",
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

  const cardSlider = new Swiper(".big-card .swiper", {
    direction: "horizontal",
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next-unique",
      prevEl: ".swiper-button-prev-unique",
    },
  });
}
