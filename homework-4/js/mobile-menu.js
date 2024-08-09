const mobile_menu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");

const toggleMobile_menu = () => mobile_menu.classList.toggle("is-open");
const disableScroll = () =>
  document.body.classList.toggle("is-scroll-disabled");

menuBtnOpen.addEventListener("click", toggleMobile_menu);
menuBtnClose.addEventListener("click", toggleMobile_menu);
mobile_menu.addEventListener("click", toggleMobile_menu);

menuBtnOpen.addEventListener("click", disableScroll);
menuBtnClose.addEventListener("click", disableScroll);
