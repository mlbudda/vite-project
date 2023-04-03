import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(id) {
    super(id);
    this.setTitle("Post view");
  }

  async getHtml() {
    const item = this.data.find(
      (item) => Number.parseInt(item.id, 10) === Number.parseInt(this.id, 10)
    );
    return `
        <h1>${item.position}</>
        <p>${item.description}</p>
        `;
  }
}
