'use strict';
export default class Projects {
  constructor(data) {
    this.renderBanner = index => {
      return `
        <img alt='projects-banner' class='projects__element__banner'
          src='./assets/${data['projects-elements'].poster[index]}'>
      `;
    };

    this.renderElements = () => {
      let container = '';

      for(let i = 0; i < 4; i++) {
        container += `
          <div class='projects__element | container' id='${data['projects-elements'].id[i]}'>
            <div class='projects__element__content'>
              ${this.renderBanner(i)}
            </div>
            <div class='projects__element__description | container invisible'>
              <a href='${data['projects-elements'].link[i]}' target='_blank'>
                <h3 class='projects__element__title'>
                  <span class='marker'>${i + 1}.</span> ${data['projects-elements'].title[i]}
                </h3>
              </a>
              <a class='github-link' href='${data['projects-elements']["link-github"][i]}' target='_blank'>
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        `;
      }

      return container;
    }
  }

  render() {
    return `
      <section class='projects | container' id='projects'>
        <a class='page-button previous-button' href='#about'>
          <i class='fa-solid fa-circle-chevron-left'></i>
        </a>

        <div class='projects__container'>
          <h2 class='projects__title | invisible'>Projects</h2>
          <div class='projects__content | container'>${this.renderElements()}</div>
        </div>
        
        <a class='page-button next-button' href='#contact'>
          <i class='fa-solid fa-circle-chevron-right'></i>
        </a>
      </section>
    `;
  }
}
