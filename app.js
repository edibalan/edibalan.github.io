"use strict";
import Navigation from "./components/Navigation.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";

import AboutAnimation from "./handlers/AboutAnimation.js";
import ButtonsHandler from "./handlers/ButtonsHandler.js";
import NavigationHandler from "./handlers/NavigationHandler.js";
import PopupMessages from "./handlers/PopupMessages.js";
import ProjectsAnimation from "./handlers/ProjectsAnimation.js";
import ScrollHandler from "./handlers/ScrollHandler.js";
import ThemesHandler from "./handlers/ThemesHandler.js";

export const QS = elem => document.querySelector(elem), QSAll = elem => document.querySelectorAll(elem);
export default class App {
  constructor() {
    this.audioElements = {
      id: ["click-sound", "light-off", "light-on", "popup-sound"],
      src: ["click-sound.mp3", "light-off-sound.mp3", "light-on-sound.mp3", "popup.mp3"]
    };

    this.loadAnimation = document.createElement("div");

    this.header = document.createElement("header");
    this.main = document.createElement("main");
    this.footer = document.createElement("footer");

    this.renderAudioElements = () => {
      let container = "";

      for (let i = 0; i < this.audioElements.src.length; i++) {
        container += `
          <audio id="${this.audioElements.id[i]}" src="./assets/${this.audioElements.src[i]}"
            style="display:none;"></audio>
        `;
      }

      return container;
    }
  }

  async render() {
    const response = await fetch("/data/data.json", {"method": "GET"}), data = await response.json();

    this.loadAnimation.setAttribute("class", "animation-container | blue-background container");
    this.loadAnimation.innerHTML = `<img alt="animation" class="animation" src="./assets/load-animation.gif" />`;
    
    document.body.appendChild(this.loadAnimation);

    setTimeout(() => {
      document.body.removeChild(this.loadAnimation);
      document.body.insertAdjacentElement("afterbegin", this.footer);
      document.body.insertAdjacentElement("afterbegin", this.main);
      document.body.insertAdjacentElement("afterbegin", this.header);
    
      new AboutAnimation().initiate();
      new ButtonsHandler().initiate();
      new NavigationHandler().initiate();
      new PopupMessages().initiate();
      new ProjectsAnimation(data).initiate();
      new ScrollHandler().initiate();
      new ThemesHandler().initiate();
    }, 2750);

    try {
      if (response.status === 200) {
        this.header.setAttribute("class", "header | container");
        this.header.innerHTML = `
          ${this.renderAudioElements()}
          ${new Navigation(data).render()}
        `;

        this.main.setAttribute("class", "main | container");
        this.main.innerHTML = `
          ${new Home(data).render()}
          ${new About(data).render()}
          ${new Projects(data).render()}
        `;

        this.footer.setAttribute("class", "footer | container");
        this.footer.id = "contact";
        this.footer.innerHTML = `${new Contact(data).render()}`;

      } else {
        console.log(`Something went wrong... Code error: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
const app = new App();
app.render();
