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
      content: QS(".contact-content"),
      copyright: QS(".copyright-container"),
      links: QSAll(".contact-nav-menu-link"),
      underline: QS("#contact-title-underline"),
      section: QS("#contact")
    };
    
    this.favicon = QS("#favicon");

    this.home = {
      avatar: QS(".avatar-container"),
      logo: QS(".logo"),
      popup: QS(".popup")
    };

    this.projectsBannersArr = QSAll(".projects-banner");
    
    this.darkMode = () => {
      this.home.logo.removeEventListener("click", this.darkMode);
      this.home.logo.addEventListener("click", this.lightMode);

      this.audio.darkMode.play();
      this.contact.underline.classList.remove("light-mode-border");
      this.favicon.href = "/assets/favicon.png";
      this.home.avatar.classList.remove("light-mode-outline");
      this.home.popup.classList.add("hidden-element");
  
      QSAll(".avatar-container, #about-background, #contact-banner, html").forEach(element => {
        element.classList.remove("light-mode-filter")
      });

      this.contact.links.forEach(link => {
        link.classList.remove("dark-mode-border");
        link.classList.remove("dark-mode-color");
      });

      this.projectsBannersArr.forEach(banner => banner.classList.remove("light-mode-filter"));

      if (window.innerWidth <= 1024 && screen.orientation.type === "portrait-primary") {
        this.contact.section.classList.remove("light-mode-filter");
        this.contact.content.classList.remove("light-mode-filter");
        this.contact.copyright.classList.remove("light-mode-filter");
      };
    };

    this.lightMode = () => {
      this.home.logo.removeEventListener("click", this.lightMode);
      this.home.logo.addEventListener("click", this.darkMode);

      this.audio.lightMode.play();
      this.contact.underline.classList.add("light-mode-border");
      this.favicon.href = "/assets/favicon-inverted.png";
      this.home.avatar.classList.add("light-mode-outline");
      this.home.popup.classList.add("hidden-element");
  
      QSAll(".avatar-container, #about-background, #contact-banner, html").forEach(element => {
        element.classList.add("light-mode-filter");
      });

      this.contact.links.forEach(link => {
        link.classList.add("dark-mode-border");
        link.classList.add("dark-mode-color");
      });

      for (let i = 0; i < this.projectsBannersArr.length - 1; i++) {
        this.projectsBannersArr[i].classList.add("light-mode-filter");
      };

      if (window.innerWidth <= 1024 && screen.orientation.type === "portrait-primary") {
        this.contact.section.classList.add("light-mode-filter");
        this.contact.content.classList.add("light-mode-filter");
        this.contact.copyright.classList.add("light-mode-filter");
      };
    };
  }

  initiate() {
    Object.values(this.audio).forEach(sound => sound.volume = 0.02);
    this.home.logo.addEventListener("click", this.lightMode);
  }
}