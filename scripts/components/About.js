'use strict';
export default class About {
  constructor(data) {
    this.renderDescription = () => {
      let container = '';

      data['about-description'].forEach(index => container += `<p>${index}</p>`);

      return container;
    };
  }

  render() {
    return `
      <section class='about | container' id='about'>
        <a class='page-button previous-button' id='home-link' href='#home'>
          <i class='fa-solid fa-circle-chevron-left'></i>
        </a>
        
        <div class='about__container'>
          <h2 class='about__title | invisible'>Greetings !</h2>
          <div class='about__content | container'>
            <div class='about__description'>${this.renderDescription()}</div>
            <img alt='about animation' class='about__background' id='about-background'
              src='./assets/about-background.webp' />
          </div>
        </div>

        <a class='page-button next-button' href='#projects'>
          <i class='fa-solid fa-circle-chevron-right'></i>
        </a>

        <a aria-label='home-button' class='hidden-element' href='#home' id='home-btn'>❮</a>
      </section>
    `;
  }
}
