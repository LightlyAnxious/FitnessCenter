(function () {
  'use strict';

  var trainersGallery = document.querySelector('.trainers__gallery');
  var reviewsList = document.querySelector('.reviews__list');
  var featuresTab = document.querySelector('#radio-1')
  var featuresTab6 = document.querySelector('#radio-6')
  var featuresTab12 = document.querySelector('#radio-12')
  var featuresItems1 = document.querySelectorAll('.features__item--1');
  var featuresItems6 = document.querySelectorAll('.features__item--6');
  var featuresItems12 = document.querySelectorAll('.features__item--12');
  var featuresScale = document.querySelector('.features__range');

  // Объявление слайдера

  if (trainersGallery) {
    var trainersSlider = new Swiper('.swiper1', {
      navigation: {
        nextEl: '.trainers__next',
        prevEl: '.trainers__prev',
      },
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
      autoHeight: true,
      cssWidthAndHeight: true,
      autoResize: false,
      visibilityFullFit: true,
      setWrapperSize: true,

      breakpoints: {
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 37,
        },
      },

      debugger: true,
    });
  }

  if (reviewsList) {
    var reviewssSlider = new Swiper('.swiper2', {
      navigation: {
        nextEl: '.reviews__btn--next',
        prevEl: '.reviews__btn--prev',
      },
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
      // autoHeight: true,
      cssWidthAndHeight: true,
      autoResize: false,
      visibilityFullFit: true,
      // setWrapperSize: true,
    });
  }

  var swiper = new Swiper('.swiper3', {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.reviews__btn--next',
      prevEl: '.reviews__btn--prev',
    },
  });

  // Переключение абонементов
  var getFlex = function (items, shutdown1, shutdown2) {
    for (var i = 0; i < items.length; i++) {
      items[i].style.display = 'flex';
      shutdown1[i].style.display = 'none';
      shutdown2[i].style.display = 'none';
    }

    return items;
    return shutdown1;
    return shutdown2;
  }

  if (featuresTab && featuresScale) {
    featuresTab.addEventListener('click', function () {
      if (featuresTab.checked) {
        getFlex (featuresItems1, featuresItems6, featuresItems12);
        featuresScale.style.width = '19%';
      }
    });
  }

  if (featuresTab6 && featuresScale) {
    featuresTab6.addEventListener('click', function () {
      if (featuresTab6.checked) {
        getFlex (featuresItems6, featuresItems1, featuresItems12);
        featuresScale.style.width = '50%';
      }
    });
  }

  if (featuresTab12 && featuresScale) {
    featuresTab12.addEventListener('click', function () {
      if (featuresTab12.checked) {
        getFlex (featuresItems12, featuresItems1, featuresItems6);
        featuresScale.style.width = '100%';
      }
    });
  }
})();
