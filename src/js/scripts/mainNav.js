/**
 * Main nav
 */
let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

const mainNav = {
  navDown() {
    navMain.classList.remove('main-nav--nojs');

    navToggle.addEventListener('click', (evt) => {
      evt.preventDefault();

      if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
      } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
      }
    });
  },

  init() {
    this.navDown();
  },
};

export default mainNav;
