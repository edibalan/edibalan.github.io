import { QS, QSAll } from "../app.js";
export default class NavigationHandler {
  constructor() {
    this.clickSound = QS("#click-sound");
    this.footer = QS("footer");
    this.home = {
      button: QS(".home-button"),
      closeNavBtn: QS("#close-navigation-button"),
      header: QS(".header"),
      navigation: QS(".navigation"),
      navAside: QS(".navigation-aside"),
      openNavBtn: QS("#open-navigation-button"),
      resumeBtn: QS(".resume-button")
    };

    this.main = QS("main");
    this.navLinks = QSAll(".navigation-link");
    this.previousPosition = window.scrollY;

    this.closeNavMenu = () => {
      this.main.classList.remove("blurred");
      this.home.navigation.classList.remove("show-nav-menu");
      this.footer.classList.remove("blurred");
      this.footer.removeAttribute("style");

      setTimeout(() => this.home.header.classList.remove("hide-home-header"), 250);
    };

    this.openNavMenu = () => {
      this.home.header.classList.add("hide-home-header");
      this.home.button.classList.add("hidden-element");

      setTimeout(() => this.home.navigation.classList.add("show-nav-menu"), 250);
      setTimeout(() => {
        this.main.classList.add("blurred");
        
        if (this.footer.classList.contains("light-mode-filter")) {
          this.footer.style.filter = "invert() blur(0.5rem)"
        } else {
          this.footer.classList.add("blurred");
        };
      }, 350);
    };
  }

  initiate() {
    if (window.innerWidth <= 1024 && screen.orientation.type === "portrait-primary") {
      window.addEventListener("scroll", () => {
        let currentPosition = window.scrollY;

        if (this.home.navigation.classList.contains("show-nav-menu")) this.closeNavMenu();
    
        this.previousPosition > currentPosition
          ? setTimeout(() => this.home.header.classList.remove("hide-home-header"), 400)
          : this.home.header.classList.add("hide-home-header");
          this.previousPosition = currentPosition;
      
        window.scrollY > window.innerHeight
          ? this.home.button.classList.remove("hidden-element")
          : this.home.button.classList.add("hidden-element");
      });
    };

    if (window.innerWidth <= 834 && screen.orientation.type === "portrait-primary") {
      this.home.closeNavBtn.addEventListener("click", this.closeNavMenu);
      this.home.openNavBtn.addEventListener("click", this.openNavMenu);

      this.home.resumeBtn.classList.remove("fs-x-small");
      this.home.resumeBtn.classList.add("fs-small");

      this.navLinks.forEach(link => {
        link.classList.remove("fs-x-small");
        link.classList.add("fs-medium");
      });
    };
  }
}