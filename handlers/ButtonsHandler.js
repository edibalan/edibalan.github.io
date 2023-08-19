"use strict";
import { QS, QSAll } from "../app.js";
export default class DataHandler {
  constructor() {
    this.buttonsAndLinks = QSAll(".navigation-link,.resume-button,.projects-button,.page-button,.home-button");
    this.clickSound = QS("#click-sound");
    this.contactLinks = QSAll(".contact-nav-menu-link");

    this.home = {
      button: QS(".home-button"),
      header: QS(".header"),
      navigation: QS(".navigation"),
      navAside: QS(".navigation-aside")
    };

    this.navButtons = QSAll("#close-navigation-button, #open-navigation-button");
    this.navLinks = QSAll(".navigation-link");
  }

  initiate() {
    this.home.button.addEventListener("click", () => this.home.button.classList.add("hidden-element"));

    this.buttonsAndLinks.forEach(element => element.addEventListener("click", () => {
      this.clickSound.play();

      element !== this.buttonsAndLinks[8] && element !== this.buttonsAndLinks[3]
        ? setTimeout(() => this.buttonsAndLinks[8].classList.remove("hidden-element"), 500)
        : this.buttonsAndLinks[8].classList.add("hidden-element");
    }));

    if (window.innerWidth <= 1024 && screen.orientation.type === "portrait-primary") {
      this.navButtons.forEach(button => button.addEventListener("click", () => this.clickSound.play()));

      this.navButtons[0].addEventListener("click", () => {
        this.home.header.classList.remove("hide-home-header");
        this.home.navigation.classList.remove("top-position-extra");
        this.home.navigation.classList.remove("show-nav-menu");
        this.home.navigation.classList.add("hide-nav-menu");
        this.home.navAside.classList.remove("low-opacity");
      });

      this.navButtons[1].addEventListener("click", () => {
        this.home.navigation.classList.add("top-position-extra");
        
        setTimeout(() => {
          this.home.header.classList.add("hide-home-header");
          this.home.navigation.classList.remove("hide-nav-menu");
          this.home.navigation.classList.add("show-nav-menu");
          this.home.button.classList.add("hidden-element");

          setTimeout(() => this.home.navAside.classList.add("low-opacity"), 600);
        }, 350);
      });
    };

    if (window.innerWidth <= 768 && screen.orientation.type === "portrait-primary") {
      this.navLinks.forEach(link => {
        link.classList.remove("fs-small");
        link.classList.add("fs-secondary-heading");
      });
    };
  }
}