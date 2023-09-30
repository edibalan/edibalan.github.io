"use strict";
export default class Navigation {
  constructor(data) {
    this.renderNavigationLinks = () => {
      let container = "";

      for(let i = 0; i < data["navigation"].label.length; i++) {
        container += `
          <li class="navigation-link | fs-medium fw-sm-bold" role="listitem">
            <a href="${data["navigation"].link[i]}" role="link">
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
        <button class="logo"><img alt="logo" src="./assets/logo.webp"></button>
        <div class="popup | container">
          <i class="popup-symbol | fa-solid fa-caret-up"></i>
          <p class="popup-text | fs-x-small fw-sm-bold">Psst! I am button too!</p>
        </div>
      </div>
      <nav class="navigation | container">
        <aside class="navigation-aside"></aside>
        <ol class="navigation-content | container" role="list" type="I">
          <button class="fw-light" id="close-navigation-button" type="button">✕</button>
          ${this.renderNavigationLinks()}
          <a class="resume-button | fs-small fw-sm-bold" download href="/" role="link">Resume</a>
        </ol>
      </nav>
      <button class="fw-light" id="open-navigation-button" type="button">III</button>
    `;
  }
}
