"use strict";
import { QSAll } from "../app.js";
export default class ProjectsAnimation {
  constructor() {
    this.projects = {
      banners: QSAll(".projects-banner"),
      descriptions: QSAll(".projects-element-description"),
      elements: QSAll(".projects-element"),
      contents: QSAll(".projects-element-content")
    };

    this.animation = () => {
      for (let i = 0; i < 2; i++) {
        this.projects.elements[i].addEventListener("mouseover", () => {
          this.projects.banners[i].play();
          this.projects.banners[i].setAttribute("controls", "true");
          this.projects.descriptions[i].classList.remove("invisible");
          this.projects.descriptions[i].classList.add("visible");
          this.projects.contents[i].classList.add("outline");
        });

        this.projects.elements[i].addEventListener("mouseout", () => {
          this.projects.banners[i].pause();
          this.projects.banners[i].removeAttribute("controls");
          this.projects.descriptions[i].classList.remove("visible");
          this.projects.descriptions[i].classList.add("invisible");
          this.projects.contents[i].classList.remove("outline");
        });
        
        if (i > 2) break;
      }
    };
  }

  initiate() { this.animation() }
}