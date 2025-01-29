document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.querySelector(".mobile-menu");
  const menuBtnOpen = document.querySelector(".menu-btn-open");
  const menuBtnClose = document.querySelector(".menu-btn-close");
  const navLinks = document.querySelectorAll(".header__nav .header__link");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("is-open");
  };

  menuBtnOpen.addEventListener("click", toggleMenu);
  menuBtnClose.addEventListener("click", toggleMenu);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
    });
  });
  // Закрыть меню при клике вне его
  document.getElementById("menu").addEventListener("click", (event) => {
    event._isClickWithInMenu = true;
  });

  document.getElementById("burger").addEventListener("click", (event) => {
    event._isClickWithInMenu = true;
  });

  document.body.addEventListener("click", (event) => {
    if (event._isClickWithInMenu) return;

    // Действие при клике
    document.querySelector(".header").classList.remove("open");
  });
});
