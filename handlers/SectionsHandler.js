"use strict";
import { QS, QSAll } from "../app.js";
export default class SectionsHandler {
  constructor() {
    this.about = {
      background: QS("#about-background"),
      description: QS(".about-description"),
      title: QS(".about-title")
    };

    this.contact = {
      content: QS(".contact-content"),
      copyright: QS(".copyright-container")
    };
    
    this.home = {
      button: QS(".home-button"),
      container: QS(".home-container"),
      header: QS(".header"),
      logoContainer: QS(".logo-container"),
      navigation: QS(".navigation"),
      navAside: QS(".navigation-aside")
    };

    this.pageButtonsArr = QSAll(".page-button");
    this.previousPosition = window.scrollY;
    this.projectsTitle = QS(".projects-title");

    this.desktopMode = (p1, p2, p3, display, v1, v2, v3) => {
      this.about.background.style.top = p1;
      this.about.description.style.bottom = p1;
      this.contact.content.style.top = p2;
      this.home.button.style.display = display;
    
      QSAll("#project-one, #project-two").forEach(element => element.style.bottom = p3);
      QSAll("#project-three, #project-four").forEach(element => element.style.top = p3);
    
      setTimeout(() => {
        this.about.title.style.visibility = v1;
        this.projectsTitle.style.visibility = v2;
        this.contact.copyright.style.visibility = v3;
      }, 1750);
    };

    this.desktopModeHandler = () => {
      const projectElementsPositionHandler = position => {
        QSAll("#project-two, #project-four").forEach(element => element.style.left = position);
        QSAll("#project-one, #project-three").forEach(element => element.style.right = position);
      };

      setTimeout(() => {
        this.home.container.classList.add("top-position");
        this.home.logoContainer.classList.add("right-position");
        this.home.navigation.classList.add("left-position");
        setTimeout(() => this.pageButtonsArr.forEach(button => button.classList.add("display-block")), 1500);
      }, 750);

      if (window.scrollX < window.innerWidth) {
        this.desktopMode("90rem", "90rem", "55rem", "none", "hidden", "hidden", "hidden");
        setTimeout(() => projectElementsPositionHandler("100rem"), 500);
      }
      else if (window.scrollX === window.innerWidth) {
        this.desktopMode("0", "90rem", "55rem", "block", "visible", "hidden", "hidden");
        setTimeout(() => projectElementsPositionHandler("100rem"), 500);
      }
      else if (window.scrollX === window.innerWidth * 3) {
        this.desktopMode("90rem", "0", "55rem", "block", "hidden", "hidden", "visible");
        setTimeout(() => projectElementsPositionHandler("100rem"), 500);
      }
      else if (window.scrollX > window.innerWidth) {
        projectElementsPositionHandler(0);
        this.desktopMode("90rem", "90rem", "0", "block", "hidden", "visible", "hidden");
      }
    };
  
    this.mobileMode = () => {
      let currentPosition = window.scrollY;

      if (this.home.navigation.classList.contains("show-nav-menu")) {
        this.home.navAside.classList.remove("low-opacity");
        this.home.navigation.classList.remove("show-nav-menu");
        this.home.navigation.classList.add("hide-nav-menu");
      };

      this.previousPosition > currentPosition
        ? setTimeout(() => this.home.header.classList.remove("hide-home-header"), 400)
        : this.home.header.classList.add("hide-home-header");
        this.previousPosition = currentPosition;
    
      window.scrollY > window.innerHeight
        ? this.home.button.classList.remove("hidden-element")
        : this.home.button.classList.add("hidden-element");
    };
  }

  initiate() {
    if (window.innerWidth >= 1024 &&
       (screen.orientation.type === "landscape-primary" || screen.orientation.type === "landscape-secondary")) {
      
      this.desktopModeHandler();
      
      window.addEventListener("scroll", this.desktopModeHandler);
    };

    if (window.innerWidth <= 1024 && screen.orientation.type === "portrait-primary") {
      this.home.navigation.classList.add("hide-nav-menu");
      this.home.navigation.classList.add("top-position");

      this.about.title.classList.remove("invisible");
      this.projectsTitle.classList.remove("invisible");
      this.contact.copyright.classList.remove("invisible");

      window.addEventListener("scroll", this.mobileMode);
    }
  }
}