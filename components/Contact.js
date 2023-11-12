"use strict";
export default class Contact {
  constructor(data) {
    this.renderContactLinks = () => {
      let container = "";

      for(let i = 0; i < data["contact-links"].label.length; i++) {
        container += `
          <li>
            <a class="contact-nav-menu-link | container fs-x-small" href="${data["contact-links"].link[i]}"
              target="_blank">
                <span class="contact-nav-menu-label | fw-bold">${data["contact-links"].label[i]}</span>
                <i class="fs-large ${data["contact-links"].icon[i]}"></i>
            </a>
          </li>
        `;
      }

      return container;
    }
  }

  render() {
    return `
      <a class="page-button previous-button | fs-sm-large" href="#projects">
        <i class="fa-solid fa-circle-chevron-left"></i>
      </a>

      <div class="contact-content | container">
        <h2 class="contact-title | fs-large fw-sm-bold invisible">Get in Touch</h2>
        <p class="invisible" id="contact-title-underline"></p>
        <nav>
          <ul aria-label="Social links" class="contact-navigation" role="list">
            ${this.renderContactLinks()}
          </ul>
        </nav>
        <div class="contact-banner" id="contact-banner"></div>
      </div>

      <div class="copyright-container | container invisible">
        <p class="copyright | fs-x-small fw-light">Designed & Developed by</p>
        <p class="signature | fs-medium">EDI B.</p>
      </div>
    `;
  }
}
