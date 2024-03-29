var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// const navToggle = document.querySelector(".mobile-nav-toggle");
// const primaryNav = document.querySelector(".primary-navigation");
// const primaryHeader = document.querySelector(".primary-header");

// navToggle.addEventListener("click", () => {
//   primaryNav.hasAttribute("data-visible")
//     ? navToggle.setAttribute("aria-expanded", false)
//     : navToggle.setAttribute("aria-expanded", true);
//   primaryNav.toggleAttribute("data-visible");
//   primaryHeader.toggleAttribute("data-overlay");
// });
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const primaryHeader = document.querySelector(".primary-header");

navToggle.addEventListener("click", () => {
  const isMenuVisible = primaryNav.hasAttribute("data-visible");

  navToggle.setAttribute("aria-expanded", isMenuVisible);
  document.body.classList.toggle("hidden", !isMenuVisible);

  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});
