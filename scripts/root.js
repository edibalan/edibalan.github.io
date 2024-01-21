'use strict';
// Components
import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';

// Utilities
import Animations from './utilities/Animations.js';
import Notifications from './utilities/Notifications.js';
import SoundEffects from './utilities/SoundEffects.js';
import Themes from './utilities/Themes.js';

export const QS = elem => document.querySelector(elem), QSAll = elem => document.querySelectorAll(elem),
             CE = elem => document.createElement(elem);
class App {
  constructor() {
    this.audioElements = {
      id: ['click-sound', 'light-off', 'light-on', 'close-notification'],
      src: ['click-sound.mp3', 'light-off-sound.mp3', 'light-on-sound.mp3', 'popup.mp3']
    };

    this.body = QS('body');
    this.header = CE('header');
    this.main = CE('main');
    this.footer = CE('footer');
    this.spacer = CE('div');
    this.loadAnimation = CE('div');

    this.renderAudioElements = () => {
      let container = '';

      for (let i = 0; i < this.audioElements.src.length; i++) {
        container += `
          <audio id='${this.audioElements.id[i]}' src='./assets/${this.audioElements.src[i]}'
            style='display:none;'></audio>
        `;
      }

      return container;
    };
  }

  async render() {
    const response = await fetch('/data/data.json', {'method': 'GET'}), data = await response.json();
    const bodySections = {
      spacer: this.spacer,
      footer: this.footer, 
      main: this.main,
      header: this.header
    };

    this.loadAnimation.setAttribute('class', 'animation | container');
    this.loadAnimation.innerHTML = `<img alt='animation' src='./assets/load-animation.gif'>`;
    this.body.appendChild(this.loadAnimation);

    setTimeout(() => {
      this.body.removeChild(this.loadAnimation);
      
      for (let value in bodySections) {
        this.body.insertAdjacentElement('afterbegin', bodySections[value]);
      };

      this.body.insertAdjacentHTML('afterbegin', this.renderAudioElements());

      new Animations(data).initiate();
      new SoundEffects().initiate();
      new Notifications().initiate();
      new Themes().initiate();
    }, 2750);

    try {
      if (response.status === 200) {        
        this.header.innerHTML = new Header(data).render();
        this.main.innerHTML = `
          ${new Home(data).render()}
          ${new About(data).render()}
          ${new Projects(data).render()}
        `;

        this.footer.id = 'contact';
        this.footer.innerHTML = new Footer(data).render();

        for (let value in bodySections) {
          bodySections[value].setAttribute('class', `${value} | container`);
        };
      } else console.log(`Something went wrong... Code error: ${response.status}`);
    }
     catch (error) {
      console.log(error);
    }
  }
}

new App().render();
