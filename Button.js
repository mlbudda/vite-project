class Button {
  constructor(DOMelement, clickCallback = () => {}) {
    this.element = DOMelement;
    this.element.addEventListener("click", clickCallback);
  }
}

export default Button;
