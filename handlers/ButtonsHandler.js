"use strict";
import { QS, QSAll } from "../app.js";
export default class ButtonsHandler {
  constructor() {
    this.buttonsAndLinks = QSAll(
      ".navigation-link, .resume-button, .projects-button, .page-button, \
      .home-button, #close-navigation-button, #open-navigation-button"
    );
    
    this.clickSound = QS("#click-sound");
    this.homeButton = QS(".home-button");
  }

  initiate() {
    this.buttonsAndLinks.forEach(button => button.addEventListener("click", () => this.clickSound.play()));
    this.homeButton.addEventListener("click", () => this.homeButton.classList.add("hidden-element"));
  }
}
