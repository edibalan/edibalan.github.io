"use strict";
export default class Navigation {
  constructor(data) {
    this.renderNavigationLinks = () => {
      let container = "";

      for(let i = 0; i < data["navigation"].label.length; i++) {
        container += `
          <li class="fs-x-small fw-sm-bold">
            <a class="navigation-link" href="${data["navigation"].link[i]}">
              ${data["navigation"].label[i]}
            </a>
          </li>
        `;
      };

      return container;
    }
  }

  render() {
    return `
      <div class="logo-container | container">
        <a class="logo"><img alt="logo" src="./assets/logo.jpeg"></a>
        <div class="popup | container">
          <p class="popup-symbol">⯇</p>
          <p class="popup-text | fs-x-small fw-sm-bold">Psst! I am button too!</p>
        </div>
      </div>
      <nav class="navigation | container">
        <aside class="navigation-aside"></aside>
        <ol class="navigation-content | container" role="list" type="I">
          <button class="fw-light" id="close-navigation-button" type="button">✖</button>
          ${this.renderNavigationLinks()}
          <a class="resume-button | fs-x-small fw-sm-bold" href="index.html" download>Resume</a>
        </ol>
      </nav>
      <button class="fw-light" id="open-navigation-button" type="button">III</button>
    `;
  }
}