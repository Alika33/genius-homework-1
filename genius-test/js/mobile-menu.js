document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.querySelector(".mobile-menu");
  const menuBtnOpen = document.querySelector(".menu-btn-open");
  const menuBtnClose = document.querySelector(".menu-btn-close");
  const navMenu = document.querySelector(".mobile-menu__nav");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("is-open");
  };

  menuBtnOpen.addEventListener("click", toggleMenu);
  menuBtnClose.addEventListener("click", toggleMenu);

  document.querySelectorAll(".mobile-menu__link").forEach((n) =>
    n.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
      navMenu.classList.remove("is-open");
    })
  );
});
