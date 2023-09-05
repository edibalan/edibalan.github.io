"use strict";
import { QS } from "../app.js";
export default class StylesHandler {
  constructor() {
    this.file = QS("#css-file");

    this.fileHandler = () => {
      if (screen.orientation.type === "portrait-primary" && this.file.href === "") {
        this.file.href = "./styles/mobile.css"
      };
    };
  }

  initiate() {
    window.addEventListener("resize", this.fileHandler);
    this.fileHandler();
  }
}