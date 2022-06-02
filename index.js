import createZoo from "./scripts/utils/createZoo.js";
import Animal from "./scripts/Animal.js";
import createButton from "./scripts/createButton.js";
import catchButtonListener from "./scripts/utils/catchButtonListener.js";

window.addEventListener('load', () => {
  createButton('catch', catchButtonListener, document.getElementById('root'));
  
  createZoo();
});
