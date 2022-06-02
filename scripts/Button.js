class Button {
  constructor(buttonType, buttonListener, insertionPoint) {
    this.buttonType = buttonType;
    this.buttonListener = buttonListener;
    this.insertionPoint = insertionPoint;
  }
  
  createButton() {
    const button = document.createElement('button');

    button.classList.add('button', this.buttonType);

    button.innerText = this.buttonType;

    button.addEventListener('click', this.buttonListener);

    this.insertionPoint.appendChild(button);
  }
}

export default Button;
