"use strict";
export default class Home {
  constructor(data) {
    this.renderHomeDescription = () => {
      let container = "";

      data["home-description"].forEach(index => container += `<h1>${index}</h1>`);

      return container;
    };
  }

  render() {
    return `
      <section class="home-section | container" id="home">
        <div class="home-container | container">
          <div class="home-description | fs-x-large fw-bolder">
            ${this.renderHomeDescription()}
            <a class="projects-button | fs-x-small fw-sm-bold" href="#projects">Check out my work</a>
          </div>
          <div class="avatar-container">
            <img class="avatar" src="./assets/avatar.webp" alt="avatar" />
          </div>
          <div class="popup | container" id="fullscreen-message">
            <i class="popup-symbol | fa-solid fa-caret-up"></i>
            <p class="popup-text | fs-x-small fw-sm-bold">
              Hi! For a better experience you can activate full screen mode by pressing F11 on your keyboard.
            </p>
          </div>
        </div>
        
        <a class="page-button next-button | fs-sm-large" href="#about">
          <i class="fa-solid fa-circle-chevron-right"></i>
        </a>
      </section>
    `;
  }
}
