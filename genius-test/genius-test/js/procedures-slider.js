const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    bulletClass: "swiper-pagination__button",
    bulletActiveClass: "swiper-pagination__button--active",
  },

  navigation: {
    nextEl: ".arrow-button-next",
    prevEl: ".arrow-button-prev",
  },
  observer: true,
  observeParents: true,
});
