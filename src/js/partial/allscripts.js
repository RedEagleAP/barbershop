/**
 * Scripts
 */

import bodyClass from '../scripts/bodyclass';
import disableHover from '../scripts/disableHover';
import resizeClass from '../scripts/resizeClass';
import mainNav from '../scripts/mainNav';
import loginFormModal from '../scripts/login-form';
import '../scripts/lazysize-init';
// import '../scripts/pagetransition';
// import '../scripts/smoothScroll';

// Modules Array
const scriptsArray = [
  bodyClass,
  disableHover,
  resizeClass,
  mainNav,
  loginFormModal,
];

const scripts = {
  // Scripts
  Scripts() {
    if (scriptsArray.length > 0 && scriptsArray !== undefined) {
      scriptsArray.forEach((script) => {
        script.init();
      });
    }
  },

  init() {
    this.Scripts();
  },
};

export default scripts;
