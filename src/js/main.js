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
//Product image selector
const mainProductImage = document.querySelector(".product-main-img img");

window.onload = function () {
  const anchors = document.querySelectorAll(".product-select img");
  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];
    anchor.onclick = function () {
      changeProductImage(this);
    };
  }
};

function changeProductImage(selectProductImage) {
  mainProductImage.src = selectProductImage.src;
}

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

//If on product page event listeners
if (document.getElementById("product")) {
  quantMinus.addEventListener("click", quantDecrease);
  quantPlus.addEventListener("click", quantIncrease);
  seeMore.addEventListener("click", showMoreAbout);
  seeLess.addEventListener("click", showLessAbout);
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
