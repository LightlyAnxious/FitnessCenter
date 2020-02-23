(function () {
  'use strict';

  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  var trainersList = document.querySelector('.trainers__list');
  var reviewsList = document.querySelector('.reviews__list');
  var prevTrainer = document.querySelector('.trainers__prev');
  var nextTrainer = document.querySelector('.trainers__next');
  var prevReview = document.querySelector('.reviews__btn--prev')
  var nextReview = document.querySelector('.reviews__btn--next')

  // функция удаления элементов Ie
  if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function() {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
  }

  // debounce

  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  // Объявление слайдера
  if (trainersList) {

    var trainersSlider4 = new Siema({
      selector: '.trainers__list',
      perPage: 4,
      startIndex: 0
    });

    var trainersSlider2 = new Siema({
      selector: '.trainers__list',
      perPage: 2,
      startIndex: 2
    });

    var trainersSlider1 = new Siema({
      selector: '.trainers__list',
      perPage: 1,
      startIndex: 2
    });

    var onWindowResize = debounce(function() {
      if(trainersSlider4) {
        trainersSlider4.destroy();
        trainersSlider4.remove();
      } else if (trainersSlider2) {
        trainersSlider2.destroy();
        trainersSlider2.remove();
      } else if (trainersSlider1) {
        trainersSlider1.destroy();
        trainersSlider1.remove();
      }

      if (viewportWidth > 1200) {
        trainersSlider4.init();

        prevTrainer.addEventListener('click', function () {
          return trainersSlider4.prev(4);
        });
        nextTrainer.addEventListener('click', function () {
          return trainersSlider4.next(4);
        });
      } else if (viewportWidth >= 768 && viewportWidth <= 1200) {
        trainersSlider2.init()

        prevTrainer.addEventListener('click', function () {
          return trainersSlider2.prev(2);
        });
        nextTrainer.addEventListener('click', function () {
          return trainersSlider2.next(2);
        });
      } else {
        trainersSlider1.init();

        prevTrainer.addEventListener('click', function () {
          return trainersSlider1.prev(1);
        });
        nextTrainer.addEventListener('click', function () {
          return trainersSlider1.next(1);
        });
      }
    }, 250);

    // window.addEventListener('resize', onWindowResize);
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
