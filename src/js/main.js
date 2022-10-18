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
    const parentSlide = btn.closest(".swiper-slide");
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
