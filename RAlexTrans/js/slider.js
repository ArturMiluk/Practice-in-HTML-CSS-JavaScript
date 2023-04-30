// slider
let position = 0;

const mediaSliderToShow = () => {
  const mediaQuery = window.matchMedia("(max-width: 768px)");
  if (mediaQuery.matches) {
    return 1;
  }
  return 2;
};
const slidesToShow = mediaSliderToShow();
const slidesToScroll = 1;
const container = document.querySelector(".reviews__slider-container");
const track = document.querySelector(".reviews__slider-track");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const items = document.querySelectorAll(".reviews__slider-item");
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow - 30;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener("click", () => {
  console.log("click");
  const itemsLeft =
    itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
  position -=
    itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
});

btnPrev.addEventListener("click", () => {
  const itemsLeft = Math.abs(position) / itemWidth;
  position +=
    itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
});

const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};

checkBtns();
// / slider
