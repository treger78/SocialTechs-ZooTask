function createButton(buttonType, buttonListener, insertionPoint) {
  const button = document.createElement('button');

  button.classList.add('button', buttonType);

  button.innerText = buttonType;

  button.addEventListener('click', buttonListener);

  insertionPoint.appendChild(button);
}

export default createButton;
