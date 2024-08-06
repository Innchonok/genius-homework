const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,

  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },

  // If we need pagination
  pagination: {
    el: ".pagination",
    bulletClass: "pagination__btn",
    bulletActiveClass: "pagination__btn--active",
    clickable: "true",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".procedures-section__btn.next",
    prevEl: ".procedures-section__btn.prev",
  },
});
