// React Library & Node Modules
import { useState } from 'react';
import PropTypes from 'prop-types';

// Styles
import './Card.css';

// Utilities
import { clickSound } from '../../../utilities';

const Card = props => {
  const [ state, setState ] = useState({ source: props.image, status: '' });

  return (
    <div
      className='card'
      id={ 'projects-card-' + ( props.index + 1 ) }
      onMouseOver={ () => setState({ source: props.animation, status: ' | selected' }) }
      onMouseOut={ () => setState({ source: props.image, status: '' }) }
      >
        <div className={ 'card__content' + state.status }>
          <img alt='card banner' className='card__banner' src={ state.source } />
        </div>

        <div className={ 'card__description' + state.status }>
          <a href={ props.link } onClick={ clickSound } target='_blank'>
            <h3 className='card__title'>
              <span className='marker'>{ props.index + 1 + '. ' }</span>
              <span>{ props.title }</span>
            </h3>
          </a>
          
          <a
            className='github-link'
            href={ props.github__link }
            onClick={ clickSound }
            target='_blank'
          >
            <i className='fa-brands fa-github'></i>
          </a>
        </div>
    </div>
  );
}

Card.propTypes = {
  animation: PropTypes.string,
  github__link: PropTypes.string,
  image: PropTypes.string,
  index: PropTypes.number,
  link: PropTypes.string,
  title: PropTypes.string
}

export default Card;