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

    this.animationHandler = (event, v1, v2, p1, p2) => {
      for (let i = 0; i < 3; i++) {
        this.projects.elements[i].addEventListener(event, () => {
          this.projects.descriptions[i].classList.remove(v1);
          this.projects.descriptions[i].classList.add(v2);
          this.projects.contents[i].classList[p1]("outline");
        
          window.innerHeight > window.innerWidth || window.innerHeight >= 720
            ? this.projects.banners[i].src = `./assets/mobile_assets/${data["projects-elements"][p2][i]}`
            : this.projects.banners[i].src = `./assets/${data["projects-elements"][p2][i]}`;
        });
        
        if (i > 3) break;
      };
    };

    this.bannerHandler = () => {
      if (window.innerHeight >= 720) {
        this.projects.banners.forEach((banner, index) => {
          banner.src = `./assets/mobile_assets/${data["projects-elements"].src[index]}`
        });
      } else {
        this.projects.banners.forEach((banner, index) => {
          banner.src = `./assets/${data["projects-elements"].src[index]}`
        });
      }
    };

    this.posterHandler = () => {
      if (window.innerHeight >= 720) {
        this.projects.banners.forEach((banner, index) => {
          banner.src = `./assets/mobile_assets/${data["projects-elements"].poster[index]}`
        });
      } else {
        this.projects.banners.forEach((banner, index) => {
          banner.src = `./assets/${data["projects-elements"].poster[index]}`
        });
      }
    };
  }

  initiate() {
    this.animationHandler("mouseover", "invisible", "visible", "add", "src");
    this.animationHandler("mouseout", "visible", "invisible", "remove", "poster");

    if (window.innerWidth >= 1024) {
      window.addEventListener("resize", this.bannerHandler);
      window.addEventListener("resize", this.posterHandler);
    };
  }
}
