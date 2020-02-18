'use strict';

var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
var prevTrainer = document.querySelector('.trainers__prev');
var nextTrainer = document.querySelector('.trainers__next');
var prevReview = document.querySelector('.reviews__btn--prev')
var nextReview = document.querySelector('.reviews__btn--next')
var header = document.querySelector('.page-header');


// Объявление слайдера

"use strict";

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

// Функция определения os

function detectIE() {
  var ua = window.navigator.userAgent;

  // Test values; Uncomment to check result …

  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

  // Edge 12 (Spartan)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

  // Edge 13
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}

// фоллбэк для градиента
var osVersion = detectIE();

if ((osVersion = true) && (viewportWidth >= 1200)) {
  header.style.background = "";
  header.style.backgroundImage = "url('../img/header_bg.jpg')";
  header.style.backgroundSize = "cover";
} else if ((osVersion = true) && ((viewportWidth < 1200) && (viewportWidth >= 768))) {
  header.style.background = "";
  header.style.backgroundImage = "url('../img/header_bg_tablet.jpg')";
  header.style.backgroundSize = "cover";
} else {
  header.style.background = "";
  header.style.backgroundImage = "url('../img/header_bg_mobile.jpg')";
  header.style.backgroundSize = "cover";
}