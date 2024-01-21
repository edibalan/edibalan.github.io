'use strict';
import { QS, QSAll } from '../root.js';
export default class SoundEffects {
  constructor() {
    this.audioElements = QSAll("audio");
    this.buttonsAndLinks = QSAll('.nav__link, #resume-btn, #projects-btn, .page-button, #home-btn, \
      #close-nav-btn, #open-nav-btn'
    );

    this.clickSound = QS('#click-sound');
    this.homeButton = QS('#home-btn');
  }

  initiate() {
    this.audioElements.forEach(audio => audio.volume = 0.02);
    this.buttonsAndLinks.forEach(button => button.addEventListener('click', () => this.clickSound.play()));
    this.homeButton.addEventListener('click', () => this.homeButton.classList.add('hidden-element'));
  }
}
