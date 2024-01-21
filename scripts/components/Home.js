'use strict';
export default class Home {
  constructor(data) {
    this.renderHomeDescription = () => {
      let container = '';

      data['home-description'].forEach(description => container += `<h1>${description}</h1>`);

      return container;
    };
  }

  render() {
    return `
      <section class='home | container' id='home'>
        <div class='home__content | container'>
          <div class='home__description'>
            ${this.renderHomeDescription()}
            <a href='#projects'>
              <button id='projects-btn'>Check out my work</button>
            </a>
          </div>

          <div class='home__avatar'>
            <img id='avatar' src='./assets/avatar.webp' alt='avatar' />
          </div>

          <div class='notification | container' id='fullscreen-message'>
            <i class='notification__arrow | fa-solid fa-caret-up'></i>
            <p class='notification__content'>
              Hi! For a better experience you can activate full screen mode by pressing F11
              on your keyboard.
            </p>
          </div>
        </div>
        
        <a class='page-button next-button' href='#about'>
          <i class='fa-solid fa-circle-chevron-right'></i>
        </a>
      </section>
    `;
  }
}
