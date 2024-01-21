'use strict';
import { QS } from '../root.js';
export default class Themes {
  constructor() {
    this.body = QS('body');
    this.darkModeSound = QS('#light-off');
    this.lightModeSound = QS('#light-on');
    
    this.logo = QS('#logo');
    this.navContent = QS('.nav__content');
    this.notification = QS('.notification');
    
    this.darkMode = () => {
      this.darkModeSound.play();
      this.body.classList.remove('light-mode');

      window.innerWidth < 800
        ? this.navContent.style.background = 'hsl(214, 71%, 16%)'
        : this.navContent.style.background = 'transparent';

      this.logo.removeEventListener('click', this.darkMode);
      this.logo.addEventListener('click', this.lightMode);
    };

    this.lightMode = () => {
      this.lightModeSound.play();
      this.body.classList.add('light-mode');
      this.notification.classList.add('hidden-element');

      window.innerWidth < 800
        ? this.navContent.style.background = 'hsl(208, 100%, 94%)'
        : this.navContent.style.background = 'transparent';

      this.logo.removeEventListener('click', this.lightMode);
      this.logo.addEventListener('click', this.darkMode);
    };
  }

  initiate() { this.logo.addEventListener('click', this.lightMode) }
}
