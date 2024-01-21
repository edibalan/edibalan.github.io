'use strict';
export default class Header {
  constructor(data) {
    this.renderNavLinks = () => {
      let container = '';

      for(let i = 0; i < data['navigation'].label.length; i++) {
        container += `
          <li class='nav__link' role='listitem'>
            <a href='${data['navigation'].link[i]}'>${data['navigation'].label[i]}</a>
          </li>
        `;
      };

      return container;
    }
  }

  render() {
    return `
      <div class='logo | container'>
        <button id='logo'><img alt='logo' src='./assets/logo.webp'></button>
        <div class='notification | container'>
          <i class='notification__arrow | fa-solid fa-caret-up'></i>
          <p class='notification__content'>Psst! I am button too!</p>
        </div>
      </div>
      <nav class='nav | container'>
        <aside class='nav__aside'></aside>
        <ol class='nav__content | container' role='list' type='I'>
          <button id='close-nav-btn' role='listitem' type='button'>✕</button>
          ${this.renderNavLinks()}
          <a href='https://drive.google.com/file/d/1Il7XQYnaXt1qIfd7m4XaLGivcsfcjTqc/view?usp=sharing'
            download='Resume-Balan-Eduard.pdf' role='listitem' target='_blank'>
            <button id='resume-btn'>Resume</button>
          </a>
        </ol>
      </nav>
      <button id='open-nav-btn' type='button'>III</button>
    `;
  }
}
