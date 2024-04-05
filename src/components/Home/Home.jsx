// Assets
import avatar from '../../assets/images/avatar.webp';

// Data
import data from '../../data';

// Node Modules
import PropTypes from 'prop-types';

// Styles
import './Home.css';

// Utilities
import { clickSound } from '../../utilities';

const Home = props => {
  const home = data[props.language__type].home;

  return (
    <section className='home' id='home'>
        <div className='home__content'>
          <div className='home__description'>
            { home.descriptions.map( description => description ) }
            
            <a href='#projects' onClick={ clickSound }>
              <button className='projects__button'>
                { home.projects__button__text }
              </button>
            </a>
          </div>

          <div className='home__avatar'>
            <img alt='avatar' id='avatar' src={ avatar } />
          </div>
        </div>
      </section>
  );
}

Home.propTypes = { language__type: PropTypes.number }

export default Home;