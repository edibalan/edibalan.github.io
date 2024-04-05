import animation_1 from './assets/animations/project-1-animation.gif';
import animation_2 from './assets/animations/project-2-animation.gif';
import animation_3 from './assets/animations/project-3-animation.gif';
import animation_4 from './assets/images/project-unavailable.webp';

import banner_1 from './assets/images/project-1-banner.webp';
import banner_2 from './assets/images/project-2-banner.webp';
import banner_3 from './assets/images/project-3-banner.webp';
import banner_4 from './assets/images/project-unavailable.webp';

// HYPHEN (-)
const h = '\u{00AD}';

const data = [
  {
    navigation: {
      icon: [ 'fa-house', 'fa-user', 'fa-list-check', 'fa-square-phone' ],
      link: [ '#home', '#about', '#projects', '#contact' ]
    },

    projects__card: {
      animation: [ animation_1, animation_2, animation_3, animation_4 ],

      github__link: [
        'https://github.com/edibalan/atlantis-studio',
        'https://github.com/edibalan/weather-app',
        'https://github.com/edibalan/alice-kineto',
        'https://github.com/edibalan'
      ],
    
      link: [
        'https://edibalan.github.io/atlantis-studio',
        'https://edibalan.github.io/weather-app',
        'https://edibalan.github.io/alice-kineto',
        'https://edibalan.github.io'
      ],
    
      image: [ banner_1, banner_2, banner_3, banner_4 ]
    },

    footer__card: {
      icon: [ 'fa-google', 'fa-github', 'fa-linkedin' ],
      label: [ 'G-Mail', 'Github', 'Linkedin' ],
      link: [
        'mailto:edibalan97@gmail.com',
        'https://github.com/edibalan',
        'https://www.linkedin.com/in/edibalan'
      ]
    }
  },

  {
    header: {
      language__button__title: 'Change language',
      logo__title: 'Change theme',
      navigation__label: [ 'Home', 'About', 'Projects', 'Contact' ],
      resume__button__text: 'Resume',
      volume__button__title: 'Handle volume'
    },
    
    home: {
      descriptions: [
        <h1 className='en-description' key='en-description-1'>Hi !</h1>,
        <h1 className='en-description' key='en-description-2'>I am Edi ,</h1>,
        <h1 className='en-description' key='en-description-3'>Web Developer</h1>,
      ],

      projects__button__text: 'Check out my work'
    },

    about: {
      descriptions: [
        'My name is Bălan Eduard I am 26 years old and I consider myself a person who has a great passion when it comes to development of websites, platforms and apps for the vast world of the Internet',
    
        `My experience in web development has been gained by studying and applying of knowledge from web development learning platforms such as Stack${h}Over${h}flow, W3${h}Schools, Mo${h}zilla De${h}vel${h}op${h}ers, free${h}Code${h}Camp and others, but also from courses and train${h}ings watched on Youtube and other platforms. I also developed some pro${h}jects which helped me improve my skills`,
      
        `As a person, I consider myself perseverant, flexible, receptive, always willing to learn new things and give my best in ev${h}ery project in which I am in${h}volved`,
      
        'Here is a list of technologies that I used: '
      ],
  
      title: 'Greetings !'
    },

    projects: {
      card__title: [ 'Atlantis Studio', 'Weather App', 'Alice Kineto', 'In development' ],
      title: 'Projects'
    },

    footer: {
      copyright__label: 'Designed & Developed by',
      copyright__signature: 'EDI B.',
      message: 'If you think that I can help you feel free to contact me by using one or more options that I provided below.',
      title: 'Get in Touch'
    }
  },

  {
    header: {
      language__button__title: 'Modificare limba',
      logo__title: 'Modificare tema',
      navigation__label: [ 'Acasa', 'Despre', 'Proiecte', 'Contact' ],
      resume__button__text: 'CV-ul meu',
      volume__button__title: 'Modificare volum'
    },
    
    home: {
      descriptions: [
        <h1 className='ro-description' key='ro-description-1'>Salut !</h1>,
        <h1 className='ro-description' key='ro-description-2'>Eu sunt Edi ,</h1>,
        <h1 className='ro-description' key='ro-description-3'>Dezvoltator Web</h1>,
      ],

      projects__button__text: 'Vezi proiectele mele'
    },

    about: {
      descriptions: [
        `Numele meu este Bălan Eduard, am 26 de ani si ma consider o persoana ce are o ma${h}re pasiune cand vine vor${h}ba de dez${h}vol${h}ta${h}rea de site-uri, platforme si a${h}pli${h}ca${h}tii pen${h}tru lu${h}mea vasta a web-ului`,
    
        `Experienta mea in dezvoltarea web a fost acumulata prin stu${h}di${h}e${h}rea si a${h}pli${h}ca${h}rea cu${h}nos${h}tin${h}te${h}lor de pe plat${h}for${h}me spe${h}ci${h}a${h}li${h}za${h}te in dez${h}vol${h}ta${h}re web pre${h}cum Stack${h}Over${h}flow, W3${h}Schools, Mo${h}zilla De${h}ve${h}lo${h}pers, free${h}Code${h}Camp s.a, dar si din cur${h}su${h}ri si trai${h}ning-uri ur${h}ma${h}ri${h}te pe You${h}tube si al${h}te plat${h}for${h}me. De a${h}se${h}me${h}nea, am dez${h}vol${h}tat ca${h}te${h}va pro${h}iec${h}te ce m-au a${h}ju${h}tat sa-mi im${h}bu${h}na${h}ta${h}te${h}sc a${h}bi${h}li${h}ta${h}ti${h}le`,
      
        `Ca persoana, ma consider per${h}se${h}ve${h}re${h}nt, fle${h}xi${h}bil, receptiv, me${h}reu dor${h}nic sa in${h}vat lu${h}cru${h}ri noi si sa o${h}fer tot ce am mai bun in fi${h}e${h}ca${h}re pro${h}iect in ca${h}re sunt im${h}pli${h}cat`,
      
        'Iata o lista de tehnologii pe care le-am utilizat: '
      ],
  
      title: 'Salutare !'
    },

    projects: {
      card__title: [ 'Atlantis Studio', 'Aplicatia de vreme', 'Alice Kineto', 'In dezvoltare' ],
      title: 'Proiecte'
    },

    footer: {
      copyright__label: 'Proiectat si dezvoltat de',
      copyright__signature: 'EDI B.',
      message: 'Daca consideri ca te pot ajuta, nu ezita sa ma contactezi folosind una sau mai multe din variantele afisate mai jos.',
      title: 'Tinem legatura'
    }
  },
]; 

export default data;