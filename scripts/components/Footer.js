'use strict';
export default class Footer {
  constructor(data) {
    this.renderNavLinks = () => {
      let container = '';

      for(let i = 0; i < data['contact-links'].label.length; i++) {
        container += `
          <li>
            <a class='footer__nav__link | container' href='${data['contact-links'].link[i]}' target='_blank'>
              <span>${data['contact-links'].label[i]}</span>
              <i class='${data['contact-links'].icon[i]}'></i>
            </a>
          </li>
        `;
      }

      return container;
    }
  }

  render() {
    return `
      <a class='page-button previous-button' href='#projects'>
        <i class='fa-solid fa-circle-chevron-left'></i>
      </a>

      <div class='footer__content | container'>
        <h2 class='footer__title | invisible'>Get in Touch</h2>
        <p class='footer__underline | invisible'></p>
        <nav>
          <ul aria-label='Social links' class='footer__nav' role='list'>
            ${this.renderNavLinks()}
          </ul>
        </nav>
        <div class='footer__copyright | container invisible'>
          <p class='footer__copyright__label'>Designed & Developed by</p>
          <p class='footer__copyright__signature'>EDI B.</p>
        </div>
      </div>
    `;
  }
}
