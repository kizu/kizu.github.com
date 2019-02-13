import './prism.js';
import './pjax.js';
import search from './search.js';
import myFonts from './myfonts';
import metrika from './metrika';

window.mySearch = search;

/*
  I really don't want any tracking stuff happening before the onload.
  I don't care about not very precise analytics, and want to have only my site's code to influence the DOMContentLoaded and Load events so it would be easier to understand them.
*/
window.addEventListener("load", function() {
  myFonts();
  metrika();
});
