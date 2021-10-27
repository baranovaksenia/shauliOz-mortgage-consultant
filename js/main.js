//Modal
const popupBg = document.querySelector(".popup__bg");
const popup = document.querySelector(".popup");
const openPopupButtons = document.querySelectorAll(".open-popup");
const closePopupButtons = document.querySelector(".close-popup");

// openPopupButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   popupBg.classList.add("active");
//   popup.classList.add("active");
// });

openPopupButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    popupBg.classList.add("active");
    popup.classList.add("active");
  });
});

closePopupButtons.addEventListener("click", () => {
  popupBg.classList.remove("active");
  popup.classList.remove("active");
});

//Hide a popup window when clicking on background
document.addEventListener("click", (e) => {
  if (e.target === popupBg) {
    popupBg.classList.remove("active");
    popup.classList.remove("active");
  }
});

//Slick slider

$(function () {
  $(".slider__inner").slick({
    nextArrow: '<button type="button" class="slick-next slick-btn"></button>',
    prevArrow: '<button type="button" class="slick-prev slick-btn"></button>',
    infinite: false,
  });
});
