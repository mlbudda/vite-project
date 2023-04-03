import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Posts List");
  }

  async getHtml() {
    return `
        <h1>List of Posts</>
        `;
  }
}
