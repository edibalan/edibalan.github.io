import { QS, QSAll } from "../app.js";
export default class NavigationHandler {
  constructor() {
    this.clickSound = QS("#click-sound");
    this.footer = QS("footer");
    
    this.header = {
      closeNavBtn: QS("#close-navigation-button"),
      navigation: QS(".navigation"),
      navAside: QS(".navigation-aside"),
      navLinks: QSAll(".navigation-link"),
      openNavBtn: QS("#open-navigation-button"),
      resumeBtn: QS(".resume-button"),
      section: QS(".header")
    };

    this.main = QS("main");
    this.homeButton = QS(".home-button");
    this.previousPosition = window.scrollY;

    this.closeNavMenu = () => {
      this.header.navigation.classList.remove("show-nav-menu");
      this.main.classList.remove("blurred");

      this.footer.classList.remove("blurred");
      this.footer.removeAttribute("style");

      setTimeout(() => this.header.section.style.top = 0, 250);
    };

    this.openNavMenu = () => {
      this.header.section.style.top = "-9rem";
      this.homeButton.classList.add("hidden-element");

      setTimeout(() => this.header.navigation.classList.add("show-nav-menu"), 250);
      setTimeout(() => {
        this.main.classList.add("blurred");
        this.footer.classList.contains("light-mode-filter")
          ? this.footer.style.filter = "invert() blur(0.5rem)"
          : this.footer.classList.add("blurred");
      }, 350);
    };

    this.headerHandler = () => {
      let currentPosition = window.scrollY;

      if (this.header.navigation.classList.contains("show-nav-menu")) this.closeNavMenu();

      this.previousPosition > currentPosition
        ? setTimeout(() => this.header.section.style.top = 0, 400)
        : this.header.section.style.top = "-9rem";
        this.previousPosition = currentPosition;
    
      window.scrollY > window.innerHeight
        ? this.homeButton.classList.remove("hidden-element")
        : this.homeButton.classList.add("hidden-element");
    };

    this.navigationHandler = () => {
      if (window.innerWidth <= 833) {
        this.header.closeNavBtn.addEventListener("click", this.closeNavMenu);
        this.header.openNavBtn.addEventListener("click", this.openNavMenu);

        this.header.navLinks.forEach(link => {
          link.classList.remove("fs-x-small");
          link.classList.add("fs-medium");
        });

        this.header.resumeBtn.classList.remove("fs-x-small");
        this.header.resumeBtn.classList.add("fs-small");
      }
      else {
        this.header.closeNavBtn.removeEventListener("click", this.closeNavMenu);
        this.header.openNavBtn.removeEventListener("click", this.openNavMenu);

        this.header.navLinks.forEach(link => {
          link.classList.remove("fs-medium");
          link.classList.add("fs-x-small");
        });

        this.header.resumeBtn.classList.remove("fs-small");
        this.header.resumeBtn.classList.add("fs-x-small");
      };
    };
  }

  initiate() {
    window.addEventListener("resize", this.headerHandler);
    window.addEventListener("resize", this.navigationHandler);
    window.addEventListener("resize", this.closeNavMenu);
    window.addEventListener("scroll", this.headerHandler);
    this.navigationHandler();
  }
}
