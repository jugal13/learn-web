let SlideImages = document.querySelectorAll('.carousel-item');
let leftButton = document.querySelector('left-button');
let rightButton = document.querySelector('right-button');
let CarourselIndicator = document.querySelectorAll('.dot');
let _slideIndex = 0;

function slideLeft() {
  SlideImages[_slideIndex].classList.remove('active');
  CarourselIndicator[_slideIndex].classList.remove('active');
  _slideIndex = _slideIndex === 0 ? SlideImages.length - 1 : _slideIndex - 1;
  SlideImages[_slideIndex].classList.add('active');
  CarourselIndicator[_slideIndex].classList.add('active');  
}

function slideRight() {
  SlideImages[_slideIndex].classList.remove('active');
  CarourselIndicator[_slideIndex].classList.remove('active');
  _slideIndex = (_slideIndex === (SlideImages.length - 1)) ? 0 : _slideIndex + 1;
  SlideImages[_slideIndex].classList.add('active');
  CarourselIndicator[_slideIndex].classList.add('active');  
}

function ChangeSlide(slideNumber) {
  SlideImages[_slideIndex].classList.remove('active');
  CarourselIndicator[_slideIndex].classList.remove('active');
  _slideIndex = slideNumber - 1;
  SlideImages[_slideIndex].classList.add('active');
  CarourselIndicator[_slideIndex].classList.add('active');  
}