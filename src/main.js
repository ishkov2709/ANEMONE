import './js/slick-carousel';

import '/js/mobile-menu';

import '/js/modal';

import '/js/form-validation';

import '/js/anchor-scroll';

(() => {
  const images = document.querySelectorAll('.uk-inline');
  images.forEach(el => {
    const img = el.querySelector('img');
       el.href = img.src;
  });
})();