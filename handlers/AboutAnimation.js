"use strict";
import { QS } from "../app.js";
export default class AboutAnimation {
  constructor() {
    this.background = QS("#about-background");

    this.launchAnimation = () => {
      this.background.classList.add("about-animation");
      this.background.src = "./assets/about-background.gif";
      this.background.removeEventListener("mouseover", this.launchAnimation);
      
      setTimeout(() => this.background.addEventListener("mouseover", this.turnOffAnimation), 7000);
    };

    this.turnOffAnimation = () => {
      this.background.src = "./assets/about-background-reverse.gif";
      this.background.removeEventListener("mouseover", this.turnOffAnimation);
      
      setTimeout(() => this.background.classList.remove("about-animation"), 5750);
      setTimeout(() => this.background.addEventListener("mouseover", this.launchAnimation), 7000);
    };
  }

  initiate() { this.background.addEventListener("mouseover", this.launchAnimation) }
}
