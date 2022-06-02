import createZoo from "./scripts/utils/createZoo.js";
import Animal from "./scripts/Animal.js";
import Button from "./scripts/Button.js";
import catchButtonListener from "./scripts/utils/catchButtonListener.js";

window.addEventListener('load', () => {
  new Button('catch', catchButtonListener, document.getElementById('root')).createButton();
  
  createZoo();
});
