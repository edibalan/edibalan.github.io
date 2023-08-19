import { QS, QSAll } from "../app.js";
export default class PopupMessages {
  constructor() {
    this.home = {
      fullscreen: QS("#fullscreen-message"),
      popup: QSAll(".popup"),
      section: QS("#home")
    };

    this.popupSound = QS("#popup-sound");
    
    this.hideFullscreenMessage = event => {
      if (event.key === "F11") {
        window.removeEventListener("keydown", this.hideFullscreenMessage);
        this.home.fullscreen.classList.add("hidden-element");
      };
    }

    this.loadPopupMessages = () => {
      this.home.section.removeEventListener("mouseover", this.loadPopupMessages);
      setTimeout(() => this.home.popup.forEach(popup => popup.classList.add("display-flex")), 3000);
    };
  }

  initiate() {
    window.addEventListener("keydown", this.hideFullscreenMessage);

    this.home.section.addEventListener("mouseover", this.loadPopupMessages);
    this.home.popup.forEach(popup => popup.addEventListener("click", event => {
      this.popupSound.play();
      event.target.parentElement.classList.add("hidden-element");
    }));
    
    if ((window.innerHeight === screen.height) || screen.width >= 1680 || screen.width <= 768) {
      window.removeEventListener("keydown", this.hideFullscreenMessage);
      this.home.fullscreen.classList.add("hidden-element");
    };
  }
}