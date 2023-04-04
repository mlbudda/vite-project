import { LitElement, html } from "lit";

export default class CounterBtn extends LitElement {
  static properties = {
    value: {},
    name: {},
  };

  constructor() {
    super();
    this.value = 10;
    this.name = "You name here";
  }

  handleClick() {
    this.value += 1;
  }

  changeName(event) {
    const input = event.target;
    this.name = input.value;
  }

  render() {
    return html`
      <p>Hello World! The Counter is ${this.value}</p>
      <button @click=${this.handleClick}>Click me!</button>
      <p>Hello, ${this.name}</p>
      <input @input=${this.changeName} placeholder="Enter Your name" />
    `;
  }
}
customElements.define("counter-button", CounterBtn);
