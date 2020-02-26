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

  // Lazy loading images

  document.addEventListener("DOMContentLoaded", yall);

  // Объявление слайдера

  if (trainersGallery) {
    var trainersSlider = new Swiper('.swiper1', {
      navigation: {
        nextEl: '.trainers__next',
        prevEl: '.trainers__prev',
      },
      slidesPerView: 1,
      initialSlide: 2,
      slidesPerGroup: 1,
      spaceBetween: 0,
      lazy: true,
      autoHeight: true,
      cssWidthAndHeight: true,
      autoResize: false,
      visibilityFullFit: true,
      setWrapperSize: true,

      breakpoints: {
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 26,
          initialSlide: 2,
          setWrapperSize: false,
          cssWidthAndHeight: true,
          visibilityFullFit: true,
          lazy: true,
        },
        1200: {
          initialSlide: 1,
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 40.5,
          setWrapperSize: false,
          lazy: true,
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
      initialSlide: 0,
      slidesPerGroup: 1,
      spaceBetween: 0,
      cssWidthAndHeight: true,
      autoResize: false,
      visibilityFullFit: true,
      setWrapperSize: true,
      lazy: true,
    });
  }

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

  if (featuresTab) {
    featuresTab.addEventListener('click', function () {
      if (featuresTab.checked) {
        getFlex (featuresItems1, featuresItems6, featuresItems12);
      }
    });
  }

  if (featuresTab6) {
    featuresTab6.addEventListener('click', function () {
      if (featuresTab6.checked) {
        getFlex (featuresItems6, featuresItems1, featuresItems12);
      }
    });
  }

  if (featuresTab12) {
    featuresTab12.addEventListener('click', function () {
      if (featuresTab12.checked) {
        getFlex (featuresItems12, featuresItems1, featuresItems6);
      }
    });
  }
})();
