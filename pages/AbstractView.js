export default class AbstractView {
  constructor(id) {
    this.id = id;
  }

  setTitle(title) {
    document.title = title;
  }

  async getHtml() {
    return "";
  }
}
