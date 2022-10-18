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
