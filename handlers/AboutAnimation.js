"use strict";
import { QS } from "../app.js";
export default class AboutAnimation {
  constructor() {
    this.background = QS("#about-background");

    this.aboutAnimationEnd = () => {
      this.background.src = "./media/about-background-reverse.gif";
      this.background.removeEventListener("mouseover", this.aboutAnimationEnd);
  
      setTimeout(() => this.background.classList.remove("about-animation"), 5750);
      setTimeout(() => this.background.addEventListener("mouseover",this.aboutAnimationStart), 7000);
    };
  
    this.aboutAnimationStart = () => {
      this.background.classList.add("about-animation");
      this.background.src = "./media/about-background.gif";
      this.background.removeEventListener("mouseover", this.aboutAnimationStart);
  
      setTimeout(() => this.background.addEventListener("mouseover", this.aboutAnimationEnd), 7000);
    };
  }

  initiate() { this.background.addEventListener("mouseover", this.aboutAnimationStart) }
}