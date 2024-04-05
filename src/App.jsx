// Assets
import click from './assets/audios/click-sound.mp3';
import darkMode from './assets/audios/light-off-sound.mp3';
import lightMode from './assets/audios/light-on-sound.mp3';
import roFlag from './assets/images/ro-flag.png';
import ukFlag from './assets/images/uk-flag.png';

// Components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

// React Library
import { createContext, useState } from 'react';

// Exports
export const QS = element => document.querySelector(element);
export const ModalContext = createContext();

const App = () => {
  const [ state, setState ] = useState({
    header__status: ' | blurred',
    home__button__status: ' | hidden',
    language__icon__source: ukFlag,
    language__icon__status: '',
    language__type: 1,
    modal__status: ' | hidden',
    modal__backdrop: '',
    theme: ''
  });
  
  const clickSound = () => QS('#click-sound').play();
  const darkModeSound = () => QS('#light-off').play();
  const lightModeSound = () => QS('#light-on').play();

  const setStateInTimeout = ( props, time ) => {
    setTimeout(() => {
      setState(prevState => ({ ...prevState, ...props }));
    }, time);
  };

  const handleModal = () => {
    clickSound();

    state.modal__status === ' | hidden' ? (
      setState(prevState => ({
        ...prevState,
        header__status: ' | hidden',
        home__button__status: ' | hidden',
      })),

      setStateInTimeout({ modal__status: '' }, 250),
      setStateInTimeout({ modal__backdrop: ' | blurred' }, 550)
    )
    : (
      setState(prevState => ({
        ...prevState,
        home__button__status: ' | hidden',
        modal__backdrop: ''
      })),

      setStateInTimeout({ modal__status: ' | hidden' }, 200),
      setStateInTimeout({ header__status: ' | blurred' }, 400)
    )
  };

  const handleLanguage = () => {
    const isEnglish = QS('html').lang === 'en';
    const isNotTranslated = !QS('html').classList.contains('translated-ltr');
    const isNotTranslatedOnEdge = !QS('h1').hasAttribute('_msttexthash');

    clickSound();

    isEnglish && isNotTranslated && isNotTranslatedOnEdge &&
      state.language__icon__source === ukFlag ? (
        setState(prevState => ({
          ...prevState,
          language__icon__source: roFlag,
          language__icon__status: ' | active',
          language__type: 2
        }))
      )
      : (
        setState(prevState => ({
          ...prevState,
          language__icon__source: ukFlag,
          language__icon__status: '',
          language__type: 1
        }))
      )
  };

  const handleThemes = () => {
    state.theme !== ' | light-mode' ? (
      lightModeSound(),
      setState(prevState => ({ ...prevState, theme: ' | light-mode' }))
    )
    : (
      darkModeSound(),
      setState(prevState => ({ ...prevState, theme: '' }))
    );
  };
  
  let previousPosition = window.scrollY;

  // window.onresize = () => setTimeout(() => location.reload(), 750);

  window.innerWidth < 1024 && ( window.innerWidth < window.innerHeight ) && (
    window.onscroll = () => {
      let currentPosition = window.scrollY;
  
      setState(prevState => ({ ...prevState, modal__backdrop: '' }));

      state.modal__status === '' && (
        setStateInTimeout({ modal__status: ' | hidden', }, 200),
        setStateInTimeout({ header__status: ' | blurred' }, 400)
      );

      previousPosition > currentPosition
        ? setState(prevState => ({ ...prevState, header__status: ' | blurred' }))
        : setState(prevState => ({ ...prevState, header__status: ' | hidden' }));
       previousPosition = currentPosition;
  
      currentPosition > window.innerHeight
        ? setState(prevState => ({ ...prevState, home__button__status: '' }))
        : setState(prevState => ({ ...prevState, home__button__status: ' | hidden' }));
    }
  );

  return (
    <div className={ 'app-container' + state.theme }>
      <audio id='click-sound' src={ click }  />
      <audio id='light-off' src={ darkMode } />
      <audio id='light-on' src={ lightMode } />

      <ModalContext.Provider value={ handleModal }>
        <Header
          handleLanguage={ handleLanguage }
          handleThemes={ handleThemes }
          state={ state }
        />
      </ModalContext.Provider>

      <main className='main | container'>
        <Home language__type={ state.language__type } />
        
        <About
          home__button__status={ state.home__button__status }
          language__type={ state.language__type }
        />
        
        <Projects language__type={ state.language__type } />
      </main>
    
      <Footer language__type={ state.language__type } />
    </div>
  )
}

export default App;