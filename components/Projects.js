"use strict";
export default class Projects {
  constructor(data) {  
    this.renderProjectsBanners = index => {
      if (window.innerHeight > window.innerWidth || window.innerHeight >= 720) return `<img alt="projects-banner" class="projects-banner" src="./assets/mobile_assets/${data["projects-elements"].poster[index]}">`;
      else return `<img alt="projects-banner" class="projects-banner" src="./assets/${data["projects-elements"].poster[index]}">`;
    };

    this.renderProjectsElements = () => {
      let container = "";

      for(let i = 0; i < 4; i++) {
        container += `
          <div class="projects-element | container" id="${data["projects-elements"].id[i]}">
            <div class="projects-element-content">
              ${this.renderProjectsBanners(i)}
            </div>
            <div class="projects-element-description | container invisible">
              <a class="project-link" href="${data["projects-elements"].link[i]}" target="_blank">
                <h3 class="projects-element-title | fs-medium">
                  ${i + 1}. ${data["projects-elements"].title[i]}
                </h3>
              </a>
            </div>
          </div>
        `;
      }

      return container;
    };
  }

  render() {
    return `
      <section class="projects-section | container" id="projects">
        <a class="page-button previous-button | fs-sm-large" href="#about">
          <i class="fa-solid fa-circle-chevron-left"></i>
        </a>

        <div class="projects-container">
          <h2 class="projects-title | fs-large fw-bold invisible">Projects</h2>
          <div class="projects-content | container">${this.renderProjectsElements()}</div>
        </div>
        
        <a class="page-button next-button | fs-sm-large" href="#contact">
          <i class="fa-solid fa-circle-chevron-right"></i>
        </a>
      </section>
    `;
  }
}
