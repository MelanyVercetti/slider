const body = document.body;

const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");

let activeSlide = 0;

const showActiveSlide = () => {
  slides.forEach((slide) => slide.classList.remove("active"));

  slides[activeSlide].classList.add("active");
};

const setBackground = () => {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
};

setBackground();

rightBtn.addEventListener("click", () => {
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  showActiveSlide();
  setBackground();
});

leftBtn.addEventListener("click", () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  showActiveSlide();
  setBackground();
});
