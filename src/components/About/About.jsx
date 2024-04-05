// Assets
import animation from '../../assets/animations/about-animation.gif';
import animation__reversed from '../../assets/animations/about-animation-reversed.gif';
import picture from '../../assets/images/about-picture.webp';

// Data
import data from '../../data';

// React & Node Modules
import { useState } from 'react';
import PropTypes from 'prop-types';

// Styles
import './About.css';

// Utilities
import { QS, clickSound } from '../../utilities';

const About = props => {
  const about = data[props.language__type].about;
  const [ source, setSource ] = useState(picture);

  const runAnimation = () => {
    const target = QS('.about__animation');
    
    setSource(animation);
                     target.removeEventListener('mouseover', runAnimation);
    setTimeout(() => target.addEventListener('mouseover', runAnimationReversed), 7500);
  };

  const runAnimationReversed = () => {
    const target = QS('.about__animation');

    setSource(animation__reversed);
                     target.removeEventListener('mouseover', runAnimationReversed);
    setTimeout(() => target.addEventListener('mouseover', runAnimation), 7000);
  };

  setTimeout(() => QS('.about__animation').addEventListener('mouseover', runAnimation), 50);

  return (
    <section className='about' id='about'>
      <div className='about__container'>
        <h2 className='about__title'>{ about.title }</h2>
        <div className='about__content'>
          <div className='about__description'>
            {
              about.descriptions.map(( description, index ) => (
                index !== 3
                  ? <p key={ 'description-' + ( index + 1 ) }>{ description }</p>
                  : (
                    <p key={ 'description-' + ( index + 1 ) }>
                      <span>{ description }</span>
                      <span className='green'>
                        HTML, CSS, Boots&shy;trap, Java&shy;Script, JSON,
                        Fetch, API, SASS, BEM, Gulp, React, JSX, Vite, Node.js (NPM)
                      </span>
                    </p>
                  )
              ))
            }
          </div>
          
          <img alt='animation' className='about__animation' src={ source }/>
        </div>
      </div>

      {
        window.innerWidth < window.innerHeight && (
          <a 
            aria-label='Go Home Button'
            className={ 'home__button' + props.home__button__status }
            href='#home'
            onClick={ clickSound }
          >
            <i className='fa-solid fa-house'></i>
          </a>
        )
      }
    </section>
  );
}

About.propTypes = {
  home__button__status: PropTypes.string,
  language__type: PropTypes.number
}

export default About;