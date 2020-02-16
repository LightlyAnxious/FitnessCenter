var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
var prevTrainer = document.querySelector('.trainers__prev');
var nextTrainer = document.querySelector('.trainers__next');
var prevReview = document.querySelector('.reviews__btn--prev')
var nextReview = document.querySelector('.reviews__btn--next')

// Объявление слайдера

if (viewportWidth > 1200) {
  const trainersSlider = new Siema({
    selector: '.trainers__list',
    perPage: 4,
    startIndex: 0,
  });

  prevTrainer.addEventListener('click', () => trainersSlider.prev(4));
  nextTrainer.addEventListener('click', () => trainersSlider.next(4));
} else if (viewportWidth >= 768 && viewportWidth <= 1200) {
  const trainersSlider = new Siema({
    selector: '.trainers__list',
    perPage: 2,
    startIndex: 2,
  });

  prevTrainer.addEventListener('click', () => trainersSlider.prev(2));
  nextTrainer.addEventListener('click', () => trainersSlider.next(2));
} else {
  const trainersSlider = new Siema({
    selector: '.trainers__list',
    perPage: 1,
    startIndex: 2,
  });

  prevTrainer.addEventListener('click', () => trainersSlider.prev(1));
  nextTrainer.addEventListener('click', () => trainersSlider.next(1));
}

const reviewSlider = new Siema({
  selector: '.reviews__list',
  perPage: 1,
  startIndex: 0,
});

prevReview.addEventListener('click', () => reviewSlider.prev(1));
nextReview.addEventListener('click', () => reviewSlider.next(1));

// Удаление дубликата изображений если браузер не IE
var reviewsImages = document.querySelectorAll('.reviews__image');
var version = detectIE();
if (version === false) {
  for (var i = 0; i < reviewsImages.length; i++) {
    reviewsImages[i].remove();
  }
}
