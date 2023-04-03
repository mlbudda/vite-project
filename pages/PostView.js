import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(id) {
    super(id);
    this.setTitle("Post view");
  }

  async getHtml() {
    return `
        <h1>Post view</>
        <p> You are viewing ${this.id} post </p>
        `;
  }
}
