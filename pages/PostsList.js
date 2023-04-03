import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Posts List");
  }

  async getHtml() {
    // console.log(this.data);
    let result = "";
    this.data.forEach((item) => {
      result += `<li>
      <a href="/vite-project/posts/${item.id}">Position: ${item.position}</a>
    <p>Company: ${item.company}</p>
    <p>Posted at: ${item.postedAt}</p>
      </li>`;
    });
    return `
        <h1>List of Posts</>
        <ul>${result}</ul>
        `;
  }
}
