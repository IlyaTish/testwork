/* Variables */

const viewportWidth   = window.innerWidth || document.documentElement.clientWidth;



/* Functions */

// Document ready function
const ready = callback => {
  if (document.readyState != 'loading') callback();
  else document.addEventListener('DOMContentLoaded', callback);
}

// Teleport function
const appendElem = (elem, cont) => {
  if (cont) cont.appendChild(elem)
}

// Swipers initialization
const initSwipers = () => {
  const reviewsSwiper = new Swiper('.reviews-swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 60,
    grabCursor: true,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      nextEl: document.querySelector('.reviews-swiper__btn-next'),
      prevEl: document.querySelector('.reviews-swiper__btn-prev')
    },
    pagination: {
      el: document.querySelector('.reviews-swiper__pagination'),
      type: 'bullets'
    }
  })
}



/* Execution of functions */

ready(() => {
  initSwipers()
});