let SlideImages;
setTimeout(() => {
  SlideImages = document.querySelectorAll('.carousel-item');
  console.log(SlideImages)
}, 100);
let leftButton = document.querySelector('left-button');
let rightButton = document.querySelector('right-button');
let current = 0;

function slideLeft() {
  SlideImages[current].classList.remove('active');
  current = current === 0 ? SlideImages.length - 1 : current-1;
  SlideImages[current].classList.add('active');
}

function slideRight() {
  SlideImages[current].classList.remove('active');
  current = (current === (SlideImages.length - 1)) ? 0 : current + 1;
  SlideImages[current].classList.add('active');
}