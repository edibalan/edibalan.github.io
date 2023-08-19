"use strict";
import { QS, QSAll } from "../app.js";
export default class ThemesHandler {
  constructor() {
    this.audio = {
      click: QS("#click-sound"),
      darkMode: QS("#light-off"),
      lightMode: QS("#light-on")
    };
    
    this.contact = {
      links: QSAll(".contact-nav-menu-link"),
      underline: QS("#contact-title-underline")
    };
    
    this.favicon = QS("#favicon");

    this.home = {
      avatar: QS(".avatar-container"),
      logo: QS(".logo"),
      popup: QS(".popup")
    };

    this.projectsBannersArr = QSAll(".projects-banner");
    
    this.darkMode = () => {
      this.audio.darkMode.play();
      this.contact.underline.classList.remove("light-mode-border");
      this.favicon.href = "/media/favicon.jpeg";
      this.home.avatar.classList.remove("light-mode-outline");
      this.home.popup.classList.add("hidden-element");
  
      QSAll(".avatar-container, #about-background, #contact-banner, html").forEach(element => {
        element.classList.remove("light-mode-filter")
      });

      this.contact.links.forEach(link => {
        link.classList.remove("dark-mode-border");
        link.classList.remove("dark-mode-color");
      });

      this.projectsBannersArr.forEach(banner => {
        banner.classList.remove("light-mode-filter");
        banner.addEventListener("webkitfullscreenchange", () => banner.classList.toggle("light-mode-filter"));
      });

      this.home.logo.removeEventListener("click", this.darkMode);
      this.home.logo.addEventListener("click", this.lightMode);
    };

    this.lightMode = () => {
      this.audio.lightMode.play();
      this.contact.underline.classList.add("light-mode-border");
      this.favicon.href = "/media/favicon-inverted.jpeg";
      this.home.avatar.classList.add("light-mode-outline");
      this.home.popup.classList.add("hidden-element");
  
      QSAll(".avatar-container, #about-background, #contact-banner, html").forEach(element => {
        element.classList.add("light-mode-filter");
      });

      this.contact.links.forEach(link => {
        link.classList.add("dark-mode-border");
        link.classList.add("dark-mode-color");
      });

      for (let i = 0; i < this.projectsBannersArr.length - 2; i++) {
        this.projectsBannersArr[i].classList.add("light-mode-filter");
        this.projectsBannersArr[i].addEventListener("webkitfullscreenchange", () => {
          this.projectsBannersArr[i].classList.toggle("light-mode-filter");
        });
      };

      this.home.logo.removeEventListener("click", this.lightMode);
      this.home.logo.addEventListener("click", this.darkMode);
    };
  }

  initiate() {
    Object.values(this.audio).forEach(sound => sound.volume = 0.01);

    this.home.logo.addEventListener("click", this.lightMode);
  }
}