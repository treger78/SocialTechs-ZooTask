import Animal from "../Animal.js";
import CONST from "./constants.js";

function catchButtonListener() {
  const animalTypes = Object.keys(CONST.animals);
  const countAnimalTypes = animalTypes.length - 1;

  const randomAnimalType = 0 + Math.floor(
    Math.random() * (countAnimalTypes + 1)
  );

  new Animal(animalTypes[randomAnimalType]).createAnimal();
}

export default catchButtonListener;
