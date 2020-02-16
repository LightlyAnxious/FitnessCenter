var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
var sliderPrev = document.querySelector('.slider__btn--prev');
var sliderNext = document.querySelector('.slider__btn--next');

// Объявление слайдера

var prevRemote = function (i) {
  mySiema.prev(i);
  return mySiema;
}

var nextRemote = function (i) {
  mySiema.next(i);
  return mySiema;
}

if (viewportWidth > 1200) {
  const mySiema = new Siema({
    selector: '.trainers__list',
    perPage: 4,
    startIndex: 0,
  });

  sliderPrev.addEventListener('click', () => mySiema.prev(4));
  sliderNext.addEventListener('click', () => mySiema.next(4));
} else if (viewportWidth >= 768 && viewportWidth <= 1200) {
  const mySiema = new Siema({
    selector: '.trainers__list',
    perPage: 2,
    startIndex: 2,
  });

  sliderPrev.addEventListener('click', () => mySiema.prev(2));
  sliderNext.addEventListener('click', () => mySiema.next(2));
} else {
  const mySiema = new Siema({
    selector: '.trainers__list',
    perPage: 1,
    startIndex: 2,
  });

  sliderPrev.addEventListener('click', () => mySiema.prev(1));
  sliderNext.addEventListener('click', () => mySiema.next(1));
}

// // gradient polyfill

// var element = document.querySelector('.headline');

// /*
// * Call the polyfill
// *
// * patternID : the unique ID of the SVG pattern
// * patternURL : the URL to the background-image
// * class : the css-class applied to the SVG
// */
// element.backgroundClipPolyfill({
//   'patternID' : 'mypattern',
//   'patternURL' : 'http://timpietrusky.com/cdn/army.png',
//   'class' : 'headline'
// });
