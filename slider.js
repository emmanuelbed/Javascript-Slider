const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");

let slideNumber = 1;
const length = images.length;

const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 800}px)`;
  slideNumber++;
};

const prevSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};

right.addEventListener("click", () => {
  if (slideNumber < images.length) {
    nextSlide();
  } else {
    prevSlide();
  }
});
