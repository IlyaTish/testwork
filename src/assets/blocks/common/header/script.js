/* Variables */

const burgerBtn     = document.querySelector('.burger-btn'),
      burgerMenu    = document.querySelector('.burger-menu'),

      headerNav     = document.querySelector('.header-nav'),
      headerNavList = document.querySelector('.header-nav__list'),
      headerNavLink = document.querySelectorAll('.header-nav__link'),
      header        = document.querySelector('.header'),
      headerHeight  = header.clientHeight;

let header_flag = 1;



/* Functions */

// Teleport onResize function
const headerTeleport = () => {
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  if ((viewportWidth < 1140) && (header_flag === 1)) {
    header_flag = 0;
    appendElem(headerNavList, burgerMenu);
  }

  if ((viewportWidth > 1140) && (header_flag === 0)) {
    header_flag = 1;
    appendElem(headerNavList, headerNav);
  }
}


// Burger menu
const initBurgerMenu = () => {
  burgerBtn.addEventListener('click', e => {
    const headerHeight  = header.clientHeight;

    burgerBtn.classList.toggle('active');
    burgerMenu.classList.toggle('active');

    burgerMenu.classList.contains('active') ?
      burgerMenu.style.top = `${ headerHeight }px` :
      burgerMenu.style.top = `0px`;

    if (burgerMenu.classList.contains('hidden')) {
      // show
      burgerMenu.classList.add('transition');
      burgerMenu.clientWidth;
      burgerMenu.classList.remove('hidden');
    } else {
      // hide
      burgerMenu.classList.add('transition');
      burgerMenu.classList.add('hidden');
    }
  });

  burgerMenu.addEventListener('transitionend', () => {
    burgerMenu.classList.remove('transition');
  })
}



/* Execution of functions */

viewportWidth < 1140 && appendElem(headerNavList, burgerMenu);
viewportWidth > 1140 && appendElem(headerNavList, headerNav);

initBurgerMenu();

burgerMenu.style.top = `${ headerHeight }px`;
