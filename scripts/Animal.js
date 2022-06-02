import CONST from "./utils/constants.js";
import Button from "./Button.js";

class Animal {
  constructor(animalType) {
    this.animalType = animalType;
    
    this.animalFeatureValue = CONST.minFeatureValue + Math.floor(
      Math.random() * (CONST.maxFeatureValue - CONST.minFeatureValue + 1)
    );

    this.animalID = document.getElementsByClassName('animal').length + 1 || 1;
  }

  feedListener() {
    this.animalFeatureValue += 1;

    const animal = document.getElementById(this.animalID);

    animal.getElementsByClassName('feature')[0]
      .textContent = `Animal feature: ${this.animalFeatureValue}`;
  }

  freeListener() {
    document.getElementById(this.animalID).remove()
  }

  createAnimal() {
    const animal = document.createElement('div');

    animal.classList.add('animal', this.animalType);

    animal.id = this.animalID;

    const animalType = document.createElement('div');
    animalType.innerText = `Animal type: ${this.animalType}`;

    const animalFeature = document.createElement('div');
    animalFeature.innerText = `Animal feature: ${this.animalFeatureValue}`;
    animalFeature.classList.add('feature');

    animal.append(animalType, animalFeature);

    new Button('feed', this.feedListener.bind(this), animal).createButton();
    new Button('free', this.freeListener.bind(this), animal).createButton();

    document.getElementById('zoo').appendChild(animal);
  }
}

export default Animal;
