/* eslint-disable no-console */

function createElement(elementType, elementClass = [], elementAttribute = {}) {
  const element = document.createElement(elementType);

  if (elementClass.length) {
    elementClass.forEach((_class) => {
      element.classlist.add(_class);
    });
  }

  Object.entries(elementAttribute).forEach(([key, value]) => {
    if (key === 'textContent') {
      element.textContent = value;
    } else {
      element.setAttribute(key, value);
    }
  });

  return element;
}

function appendElement(parentElement, childElement = []) {
  if (childElement.length) {
    childElement.forEach((child) => {
      parentElement.appendChild(child);
    });
  }
}

export { createElement, appendElement };
