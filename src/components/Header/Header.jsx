// Assets
import logo from '../../assets/images/logo.webp';

// Components
import Modal from './Modal/Modal';
import Navigation from './Navigation/Navigation';

// Data
import data from '../../data';

// React Library & Node Modules
import { useState } from 'react';
import PropTypes from 'prop-types';

// Styles
import './Header.css';

// Utilities
import { clickSound } from '../../utilities';

const Header = props => {
  const audios = document.querySelectorAll('audio');
  const header = data[props.state.language__type].header;

  const [ state, setState ] = useState({
    volume__button__icon: ' fa-volume-low',
    volume__button__status: '',
    volume__value: 1
  });

  const handleVolume = () => {
    clickSound();

    state.volume__value === 1 ? (
      setState({
        volume__button__icon: ' fa-volume-off',
        volume__button__status: ' | active',
        volume__value: 0
      })
    )
    : (
      setState({
        volume__button__icon: ' fa-volume-low',
        volume__button__status: '',
        volume__value: 1
      })
    );
    
    audios.forEach(audio => audio.volume = state.volume__value);
  };

  audios.forEach(audio => audio.volume = state.volume__value);

  return (
    <header className={ 'header' + props.state.header__status }>
      <div className='header__content'>
        <img
          alt='Logo'
          className='logo'
          onClick={ props.handleThemes }
          src={ logo }
          title={
            window.innerWidth > window.innerHeight
              ? header.logo__title
              : ''
          }
        />

        <button
          aria-label='Volume Button'
          className={ 'volume__button' + state.volume__button__status }
          onClick={ handleVolume }
          title={
            window.innerWidth > window.innerHeight
              ? header.volume__button__title
              : ''
          }
        >
          <i className={ 'fa-solid' + state.volume__button__icon } />
        </button>

        <button
          aria-label='Language Button'
          className='language__button'
          onClick={ props.handleLanguage }
          title={
            window.innerWidth > window.innerHeight
              ? header.language__button__title
              : ''
          }
        >
          <img
            alt='Flag Icon'
            className={ props.state.language__icon__status }
            src={ props.state.language__icon__source }
          />
        </button>
      </div>

      {
        window.innerWidth < 768 ? (
          <Modal
            backdrop={ props.state.modal__backdrop }
            language__type={ props.state.language__type }
            status={ props.state.modal__status }
            theme={ props.state.theme }
          />
        )
        : <Navigation language__type={ props.state.language__type } />
      }
    </header>
  );
}

Header.propTypes = {
  handleLanguage: PropTypes.func,
  handleThemes: PropTypes.func,
  state: PropTypes.shape({
    header__status: PropTypes.string,
    language__icon__source: PropTypes.any,
    language__icon__status: PropTypes.string,
    language__type: PropTypes.number,
    modal__status: PropTypes.string,
    modal__backdrop: PropTypes.string,
    theme: PropTypes.string
  })
}

export default Header;