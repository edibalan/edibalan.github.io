// Data
import data from '../../../data';

// React Library & Node Modules
import { useContext } from 'react';
import PropTypes from 'prop-types';

// Styles
import './Modal.css';

// Utilities
import { ModalContext } from '../../../App';

const Modal = props => {
  const handleModal = useContext(ModalContext);
  const header = data[props.language__type].header;
  const navigation = data[0].navigation;

  return (
    <>
      <nav className={ 'modal' + props.status }>
        <div className={ 'modal__backdrop' + props.backdrop } />
        <ul className={ 'modal__content' + props.theme }>
          <button
            aria-label='Close Modal Button'
            className='close__modal__button'
            onClick={ handleModal }
            type='button'
          >
            <span>✕</span>
          </button>

          {
            navigation.link.map(( link, index ) => (
              <li
                aria-label='Modal Link'
                className='modal__link'
                key={ 'modal-link-' + ( index + 1 ) }
                onClick={ handleModal }
              >
                <a
                  aria-label={ header.navigation__label[index] }
                  href={ link }
                  title={ header.navigation__label[index] }
                >
                  { header.navigation__label[index] }
                </a>
              </li>
            ))
          }

          <a
            aria-label='Resume Button'
            className='resume__button'
            href='https://drive.google.com/file/d/1aae4U868KF5tcv7c2qXxK-CMv6OM-WMs/view'
            onClick={ handleModal }
            target='_blank'
          >
            <span>{ header.resume__button__text }</span>
          </a>
        </ul>
      </nav>

      <button
        aria-label='Open Modal Button'
        className='open__modal__button'
        onClick={ handleModal }
        type='button'
      >
        <span>|||</span>
      </button>
    </>
  );
}

Modal.propTypes = {
  backdrop: PropTypes.string,
  language__type: PropTypes.number,
  status: PropTypes.string,
  theme: PropTypes.string
}

export default Modal;
