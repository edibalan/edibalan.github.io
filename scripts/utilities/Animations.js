'use strict';
import { QS, QSAll } from '../root.js';
export default class Animations {
  constructor(data) {
    this.header = {
      section: QS('.header'),
      logo: QS('.logo'),
      navigation: QS('.nav'),
      openNavBtn: QS('#open-nav-btn'),
      closeNavBtn: QS('#close-nav-btn')
    };

    this.main = QS('.main');
    this.pageButtons = QSAll('.page-button');
    this.previousPosition = window.scrollY;
    this.homeContent = QS('.home__content');

    this.about = {
      title: QS('.about__title'),
      background: QS('#about-background'),
      description: QS('.about__description')
    };

    this.homeButton = QS('#home-btn');

    this.projects = {
      title: QS('.projects__title'),
      elements: QSAll('.projects__element'),
      contents: QSAll('.projects__element__content'),
      banners: QSAll('.projects__element__banner'),
      descriptions: QSAll('.projects__element__description')
    };

    this.footer = {
      section: QS('.footer'),
      content: QS('.footer__content'),
      title: QS('.footer__title'),
      underline: QS('.footer__underline'),
      navigation: QS('.footer__nav'),
      copyright: QS('.footer__copyright')
    };

    this.headerAnimation = () => {
      let currentPosition = window.scrollY;

      if (this.header.navigation.classList.contains('show-nav-menu')) this.closeNavAnimation();

      this.previousPosition > currentPosition
        ? setTimeout(() => this.header.section.style.top = 0, 400)
        : this.header.section.style.top = '-9rem';
        this.previousPosition = currentPosition;
    
      currentPosition > window.innerHeight
        ? this.homeButton.classList.remove('hidden-element')
        : this.homeButton.classList.add('hidden-element');
    };

    this.closeNavAnimation = () => {
      this.header.navigation.classList.remove('show-nav-menu');
      this.main.classList.remove('blurred');
      this.footer.section.classList.remove('blurred');
      setTimeout(() => this.header.section.style.top = 0, 250);
    };

    this.openNavAnimation = () => {
      this.header.section.style.top = '-9rem';
      this.homeButton.classList.add('hidden-element');
      setTimeout(() => this.header.navigation.classList.add('show-nav-menu'), 250);
      setTimeout(() => {
        this.main.classList.add('blurred');
        this.footer.section.classList.add('blurred');
      }, 350);
    };

    this.navAnimationsHandler = () => {
      const eventHandler = method => {
        const navButtons = [this.header.openNavBtn, this.header.closeNavBtn],
              listeners = [this.openNavAnimation, this.closeNavAnimation];
        navButtons.forEach((button, index) => button[`${method}EventListener`]('click', listeners[index]));
      };

      window.innerWidth < 800 ? eventHandler('add') : eventHandler('remove');
    };

    this.aboutAnimation = () => {
      this.about.background.removeEventListener('mouseover', this.aboutAnimation);
      this.about.background.classList.add('animation-on');
      this.about.background.src = './assets/about-background.gif';
      setTimeout(()=>this.about.background.addEventListener('mouseover',this.aboutAnimationReversed),7000);
    };

    this.aboutAnimationReversed = () => {
      this.about.background.removeEventListener('mouseover', this.aboutAnimationReversed);
      this.about.background.src = './assets/about-background-reversed.gif';
      setTimeout(() => this.about.background.classList.remove('animation-on'), 5750);
      setTimeout(() => this.about.background.addEventListener('mouseover', this.aboutAnimation), 7000);
    };

    this.projectsAnimation = (event, key, func, v1, v2) => {
      for (let i = 0; i < 3; i++) {
        this.projects.elements[i].addEventListener(event, () => {
          this.projects.banners[i].src = `./assets/${data['projects-elements'][key][i]}`;
          this.projects.contents[i].classList[func]('outline');
          this.projects.descriptions[i].classList.remove(v1);
          this.projects.descriptions[i].classList.add(v2);
        });
        
        if (i > 3) break;
      };
    };

    this.scrollAnimation = (display, p1, p2, p3, p4, v1, v2, v3) => {
      this.homeButton.style.display = display;
      this.header.section.style.top = p1;
      this.about.background.style.top = p2;
      this.about.description.style.bottom = p2;
      this.footer.content.style.top = p3;
    
      QSAll('#project-one, #project-two').forEach(element => element.style.bottom = p4);
      QSAll('#project-three, #project-four').forEach(element => element.style.top = p4);
    
      setTimeout(() => {
        this.about.title.style.visibility = v1;
        this.projects.title.style.visibility = v2;
        
        for (let value in this.footer) {
          if (value !== 'section' && value !== 'content') this.footer[value].style.visibility = v3;
        }
      }, 1350);
    };

    this.scrollAnimationHandler = () => {
      const scrollX = window.scrollX, width = window.innerWidth,

      projectElementsPositionHandler = position => {
        QSAll('#project-two, #project-four').forEach(elem => elem.style.left = position);
        QSAll('#project-one, #project-three').forEach(elem => elem.style.right = position);
      };

      if (scrollX < width) {
        this.scrollAnimation('none', '0', '100vh', '100vh', '100vh', 'hidden', 'hidden', 'hidden');
        projectElementsPositionHandler('100vw');
      }
       else if (scrollX === width) {
        this.scrollAnimation('block', '-9rem', '0', '100vh', '100vh', 'visible', 'hidden', 'hidden');
        setTimeout(() => projectElementsPositionHandler('100vw'), 1000);
      }
       else if (scrollX === width * 3) {
        this.scrollAnimation('block', '-9rem', '100vh', '0', '100vh', 'hidden', 'hidden', 'visible');
        setTimeout(() => projectElementsPositionHandler('100vw'), 1000);
      }
       else if (scrollX > width) {
        this.scrollAnimation('block', '-9rem', '100vh', '100vh', '0', 'hidden', 'visible', 'hidden');
        projectElementsPositionHandler(0);
      };

      setTimeout(() => {
        this.header.logo.classList.add('right-position');
        this.header.navigation.classList.add('left-position');
        this.homeContent.classList.add('top-position');
        setTimeout(() => this.pageButtons.forEach(button => button.style.display = 'block'), 2000);
      }, 500);
    };

    this.scrollAnimationInitiator = () => {
      if (window.innerWidth >= 1024) {
        this.scrollAnimationHandler();
        window.removeEventListener('scroll', this.headerAnimation);
        window.addEventListener('scroll', this.scrollAnimationHandler);
        window.scrollTo(0, 0);
      }
       else {
        this.pageButtons.forEach(button => button.style.display = 'none');
        
        [this.about.title, this.projects.title].forEach(title => {
          title.classList.remove('invisible');
          title.style.visibility = 'visible';
        });
        
        for (let values in this.footer) {
          this.footer[values].classList.remove('invisible');
          this.footer[values].style.visibility = 'visible';
        };

        window.addEventListener('scroll', this.headerAnimation);
        window.removeEventListener('scroll', this.scrollAnimationHandler);
      };
    };
  }

  initiate() {
    this.navAnimationsHandler();
    this.projectsAnimation('mouseover', 'src', 'add', 'invisible', 'visible',);
    this.projectsAnimation('mouseout', 'poster', 'remove', 'visible', 'invisible');
    this.scrollAnimationInitiator();
    
    this.about.background.addEventListener('mouseover', this.aboutAnimation);
    window.addEventListener('resize', this.navAnimationsHandler);
    window.addEventListener('resize', this.scrollAnimationInitiator);
  }
}
