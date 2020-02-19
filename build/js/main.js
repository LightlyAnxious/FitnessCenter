(function () {
  'use strict';

  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  var trainersList = document.querySelector('.trainers__list');
  var reviewsList = document.querySelector('.reviews__list');
  var prevTrainer = document.querySelector('.trainers__prev');
  var nextTrainer = document.querySelector('.trainers__next');
  var prevReview = document.querySelector('.reviews__btn--prev')
  var nextReview = document.querySelector('.reviews__btn--next')

  // Объявление слайдера
  if (trainersList) {
    if (viewportWidth > 1200) {
      var trainersSlider = new Siema({
        selector: '.trainers__list',
        perPage: 4,
        startIndex: 0
      });
      prevTrainer.addEventListener('click', function () {
        return trainersSlider.prev(4);
      });
      nextTrainer.addEventListener('click', function () {
        return trainersSlider.next(4);
      });
    } else if (viewportWidth >= 768 && viewportWidth <= 1200) {
      var _trainersSlider = new Siema({
        selector: '.trainers__list',
        perPage: 2,
        startIndex: 2
      });

      prevTrainer.addEventListener('click', function () {
        return _trainersSlider.prev(2);
      });
      nextTrainer.addEventListener('click', function () {
        return _trainersSlider.next(2);
      });
    } else {
      var _trainersSlider2 = new Siema({
        selector: '.trainers__list',
        perPage: 1,
        startIndex: 2
      });

      prevTrainer.addEventListener('click', function () {
        return _trainersSlider2.prev(1);
      });
      nextTrainer.addEventListener('click', function () {
        return _trainersSlider2.next(1);
      });
    }
  }

  if (reviewsList) {
    var reviewSlider = new Siema({
      selector: '.reviews__list',
      perPage: 1,
      startIndex: 0
    });
    prevReview.addEventListener('click', function () {
      return reviewSlider.prev(1);
    });
    nextReview.addEventListener('click', function () {
      return reviewSlider.next(1);
    });
  }
})();
