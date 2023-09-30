"use strict";
export default class About {
  constructor(data) {
    this.renderAboutDescription = () => {
      let container = "";

      data["about-description"].forEach(index => container += `<p>${index}</p>`);

      return container;
    };
  }

  render() {
    return `
      <section class="about-section | container" id="about">
        <a class="page-button previous-button | fs-sm-large" id="home-link" href="#home"><i class="fa-solid fa-circle-chevron-left"></i></a>
        
        <div class="about-container">
          <h1 class="about-title | fs-large fw-bold invisible">Greetings !</h1>
          <div class="about-content | container">
            <div class="about-description | fs-small fw-light">
              ${this.renderAboutDescription()}
            </div>
            <img alt="about-section-background" class="about-background" id="about-background" src="./assets/about-background.webp" />
          </div>
        </div>

        <a class="page-button next-button | fs-sm-large" href="#projects"><i class="fa-solid fa-circle-chevron-right"></i></a>
        <a aria-label="home-button" class="home-button | hidden-element fs-medium fw-sm-bold" href="#home">❮</a>
      </section>
    `;
  }
}
