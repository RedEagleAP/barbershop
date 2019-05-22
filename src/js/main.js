// Main JS File
// Polyfills
// import 'svgxuse';
// import '@babel/polyfill';

// Import Partials
// import './lib/bling';
// import './scripts/bowser';
import scripts from './partial/allscripts';

let nojs = document.querySelector('html');

if (nojs.classList.contains('no-js')) {
  nojs.classList.remove('no-js');
  nojs.classList.add('js');
} else {
  nojs.classList.add('no-js');
  nojs.classList.remove('js');
}

const app = {
  init() {
    scripts.init();
  },
};

// Init App!
app.init();
