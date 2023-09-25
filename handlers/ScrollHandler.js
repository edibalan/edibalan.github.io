"use strict";
import { QS, QSAll } from "../app.js";
export default class ScrollHandler {
  constructor() {
    this.about = {
      background: QS("#about-background"),
      description: QS(".about-description"),
      title: QS(".about-title")
    };

    this.contactBanner = QS(".contact-banner");
    this.contact = {
      copyright: QS(".copyright-container"),
      navigation: QS(".contact-navigation"),
      title: QS(".contact-title"),
      underline: QS("#contact-title-underline")
    };
    
    this.header = {
      logoContainer: QS(".logo-container"),
      navigation: QS(".navigation"),
      navLinks: QSAll(".navigation-link"),
      section: QS(".header")
    };

    this.homeButton = QS(".home-button");
    this.homeContainer = QS(".home-container");

    this.pageButtons = QSAll(".page-button");
    this.projectsTitle = QS(".projects-title");

    this.scrollEvent = (p1, p2, p3, p4, display, v1, v2, v3) => {
      this.header.section.style.top = p1
      this.about.background.style.top = p2;
      this.about.description.style.bottom = p2;
      this.contactBanner.style.top = p3;
      this.homeButton.style.display = display;
    
      QSAll("#project-one, #project-two").forEach(element => element.style.bottom = p4);
      QSAll("#project-three, #project-four").forEach(element => element.style.top = p4);
    
      setTimeout(() => {
        this.about.title.style.visibility = v1;
        this.projectsTitle.style.visibility = v2;
        for (let value in this.contact) { this.contact[value].style.visibility = v3 };
      }, 1350);
    };

    this.scrollEventHandler = () => {
      const projectElementsPositionHandler = position => {
        QSAll("#project-two, #project-four").forEach(element => element.style.left = position);
        QSAll("#project-one, #project-three").forEach(element => element.style.right = position);
      };

      setTimeout(() => {
        this.homeContainer.classList.add("top-position");
        this.header.logoContainer.classList.add("right-position");
        this.header.navigation.classList.add("left-position");
        setTimeout(() => this.pageButtons.forEach(button => button.style.display = "block"), 2000);
      }, 500);

      if (window.scrollX < window.innerWidth) {
        this.scrollEvent("0", "100vh", "100vh", "100vh", "none", "hidden", "hidden", "hidden");
        projectElementsPositionHandler("100vw");
      }
      else if (window.scrollX === window.innerWidth) {
        setTimeout(()=>this.scrollEvent("-9rem", "0", "100vh", "100vh", "block", "visible", "hidden", "hidden"),350);
        setTimeout(() => projectElementsPositionHandler("100vw"), 1000);
      }
      else if (window.scrollX === window.innerWidth * 3) {
        this.scrollEvent("-9rem", "100vh", "0", "100vh", "block", "hidden", "hidden", "visible");
        setTimeout(() => projectElementsPositionHandler("100vw"), 1000);
      }
      else if (window.scrollX > window.innerWidth) {
        this.scrollEvent("-9rem", "100vh", "100vh", "0", "block", "hidden", "visible", "hidden");
        projectElementsPositionHandler(0);
      };
    };

    this.scrollEventInitiator = () => {
      if (window.innerWidth >= 1024) {
        window.addEventListener("scroll", this.scrollEventHandler);
        window.scrollTo(0, 0);
        this.scrollEventHandler();
      } else {
        window.removeEventListener("scroll", this.scrollEventHandler);
        
        this.pageButtons.forEach(button => button.style.display = "none");
        
        [this.about.title, this.projectsTitle].forEach(title => {
          title.classList.remove("invisible");
          title.style.visibility = "visible";
        });
        
        for (let values in this.contact) {
          this.contact[values].classList.remove("invisible");
          this.contact[values].style.visibility = "visible";
        };
      };
    };
  }

  initiate() {
    window.addEventListener("resize", this.scrollEventInitiator);
    this.scrollEventInitiator();
  }
}