import data from "../data.json";

export default class AbstractView {
  constructor(id) {
    this.id = id;
    this.data = data;
  }

  setTitle(title) {
    document.title = title;
  }

  async getHtml() {
    return "";
  }
}
