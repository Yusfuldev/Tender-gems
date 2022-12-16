const previous = document.querySelectorAll(".previous");
const next = document.querySelectorAll(".next");
const slides = document.querySelectorAll(".slide");
const container = document.querySelectorAll(".container");
const burger = document.querySelector(".burger");
const menu = document.querySelector(".nav-menu");
const menuClose = document.querySelector(".close-menu");

burger.addEventListener("click", (e) => {
  menu.style.visibility = "visible";
  burger.style.display = "none";
  menuClose.style.display = "block";
});
menuClose.addEventListener("click", (e) => {
  menu.style.visibility = "collapse";
  burger.style.display = "block";
  menuClose.style.display = "none";
});

next.forEach((btn) => {
  btn.addEventListener("click", () => {
    slides.forEach((slide) => {
      slideWidth = slide.clientWidth;
      container.forEach((container) => {
        container.scrollLeft += slideWidth;
      });
    });
    // console.log("clicked");
  });
});

previous.forEach((btn) => {
  btn.addEventListener("click", () => {
    slides.forEach((slide) => {
      slideWidth = slide.clientWidth;
      container.forEach((container) => {
        container.scrollLeft -= slideWidth;
      });
    });
    // console.log("clicked");
  });
});
