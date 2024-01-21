'use strict';
import { QS, QSAll } from '../root.js';
export default class Notifications {
  constructor() {
    this.closeNotificationSound = QS('#close-notification');
    this.fullscreenMsg = QS('#fullscreen-message');
    this.notifications = QSAll('.notification');
    
    this.closeFullscreenNotification = event => {
      if (event.key === 'F11') {
        this.fullscreenMsg.classList.add('hidden-element');
        window.removeEventListener('keydown', this.closeFullscreenNotification);
      };
    };
    
    this.displayNotification = () => {
      setTimeout(() => this.notifications.forEach(notification => notification.classList.add('display-flex'))
      , 4000);
    };

    this.fullscreenNotificationHandler = () => {
      const height = window.innerHeight;

      if (height === screen.height || height > window.innerWidth || height >= 800) {
        this.fullscreenMsg.classList.add('hidden-element');
        window.removeEventListener('keydown', this.closeFullscreenNotification);
      };
    };
  }

  initiate() {
    this.displayNotification();
    this.fullscreenNotificationHandler();
    this.notifications.forEach(notification => notification.addEventListener('click', event => {
      this.closeNotificationSound.play();
      event.target.parentElement.classList.add('hidden-element');
    }));
    
    window.addEventListener('keydown', this.closeFullscreenNotification);
    window.addEventListener('resize', this.fullscreenNotificationHandler);
  }
}
