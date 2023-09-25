"use strict";
import { QS, QSAll } from "../app.js";
export default class ThemesHandler {
  constructor() {
    this.audio = {
      click: QS("#click-sound"),
      darkMode: QS("#light-off"),
      lightMode: QS("#light-on")
    };
    
    this.contactLinks = QSAll(".contact-nav-menu-link");
    this.contact = {
      button: QSAll(".page-button")[5],
      copyright: QS(".copyright-container"),
      title: QS(".contact-title"),
      underline: QS("#contact-title-underline"),
      section: QS("#contact")
    };
    
    this.favicon = QS("#favicon");

    this.home = {
      avatar: QS(".avatar-container"),
      logo: QS(".logo"),
      popup: QS(".popup")
    };

    this.projectsBanners = QSAll(".projects-banner");
    
    this.darkMode = () => {
      this.home.logo.removeEventListener("click", this.darkMode);
      this.home.logo.addEventListener("click", this.lightMode);

      this.audio.darkMode.play();
      this.favicon.href = "/assets/favicon.png";
      this.home.avatar.classList.remove("light-mode-outline");
      this.home.popup.classList.add("hidden-element");
  
      QSAll("html, .avatar-container, #about-background").forEach(element => {
        element.classList.remove("light-mode-filter");
      });
  
      for (let i = 0; i < this.projectsBanners.length - 1; i++) {
        this.projectsBanners[i].classList.remove("light-mode-filter")};

      for (let values in this.contact) {
        this.contact[values].classList.remove("light-mode-filter")};
     
      this.contact.section.classList.remove("light-mode-border");
      this.contactLinks.forEach(link => {
        link.classList.remove("light-mode-filter");
        link.classList.remove("dark-mode-border");
        link.classList.remove("dark-mode-color");
      });
    };

    this.lightMode = () => {
      this.home.logo.removeEventListener("click", this.lightMode);
      this.home.logo.addEventListener("click", this.darkMode);

      this.audio.lightMode.play();
      this.favicon.href = "/assets/favicon-inverted.png";
      this.home.avatar.classList.add("light-mode-outline");
      this.home.popup.classList.add("hidden-element");

      QSAll("html, .avatar-container, #about-background").forEach(element => {
        element.classList.add("light-mode-filter");
      });
  
      for (let i = 0; i < this.projectsBanners.length - 1; i++) {
        this.projectsBanners[i].classList.add("light-mode-filter")};

      for (let values in this.contact) {
        this.contact[values].classList.add("light-mode-filter")};
     
      this.contact.section.classList.add("light-mode-border");
      this.contactLinks.forEach(link => {
        link.classList.add("light-mode-filter");
        link.classList.add("dark-mode-border");
        link.classList.add("dark-mode-color");
      });
    };
  }

  initiate() {
    Object.values(this.audio).forEach(sound => sound.volume = 0.02);
    this.home.logo.addEventListener("click", this.lightMode);
  }
}
