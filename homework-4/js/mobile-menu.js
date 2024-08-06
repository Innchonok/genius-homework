const mobile_menu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");

const toggleMobile_menu = () => mobile_menu.classList.toggle("is-open");
menuBtnOpen.addEventListener("click", toggleMobile_menu);
menuBtnClose.addEventListener("click", toggleMobile_menu);
