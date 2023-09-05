"use strict";
import { QSAll } from "../app.js";
export default class ProjectsAnimation {
  constructor(data) {
    this.projects = {
      banners: QSAll(".projects-banner"),
      descriptions: QSAll(".projects-element-description"),
      elements: QSAll(".projects-element"),
      contents: QSAll(".projects-element-content")
    };

    this.animation = () => {
      for (let i = 0; i < 3; i++) {
        this.projects.elements[i].addEventListener("mouseover", () => {
          this.projects.descriptions[i].classList.remove("invisible");
          this.projects.descriptions[i].classList.add("visible");
          this.projects.contents[i].classList.add("outline");

          (screen.orientation.type !== "portrait-primary")
            ? this.projects.banners[i].src = `./assets/${data["projects-elements"].src[i]}`
            : this.projects.banners[i].src = `./assets/mobile_assets/${data["projects-elements"].src[i]}`;
        });

        this.projects.elements[i].addEventListener("mouseout", () => {
          this.projects.descriptions[i].classList.remove("visible");
          this.projects.descriptions[i].classList.add("invisible");
          this.projects.contents[i].classList.remove("outline");

          (screen.orientation.type !== "portrait-primary")
            ? this.projects.banners[i].src = `./assets/${data["projects-elements"].poster[i]}`
            : this.projects.banners[i].src = `./assets/mobile_assets/${data["projects-elements"].poster[i]}`;
        });
        
        if (i > 3) break;
      }
    };
  }
}