// Data
import data from '../../../data';

// Node Modules
import PropTypes from 'prop-types';

// Styles
import './Navigation.css'

// Utilities
import { clickSound } from '../../../utilities';

const Navigation = props => {
  const header = data[props.language__type].header;
  const navigation = data[0].navigation;

  return (
    <nav className='navigation'>
      <ul className='navigation__content'>
        {
          navigation.link.map(( link, index ) => (
            <li
              aria-label='Navigation Link'
              className='navigation__link'
              key={ 'nav-link-' + ( index + 1 ) }
              onClick={ clickSound }
              title={
                window.innerWidth > window.innerHeight
                  ? header.navigation__label[index]
                  : ''
              }
            >
              {
                window.innerWidth < 1024
                  ? (
                    <a
                      aria-label={ header.navigation__label[index] }
                      href={ link }
                    >
                      { header.navigation__label[index] }
                    </a>
                  )
                  : (
                    <a
                      aria-label={ header.navigation__label[index] }
                      href={ link }
                    >
                      <i className={ 'fa-solid ' + navigation.icon[index] }></i>
                    </a>
                  )
              }
            </li>
          ))
        }

        <a
          aria-label='Resume Button'
          className='resume__button'
          href='https://drive.google.com/file/d/1aae4U868KF5tcv7c2qXxK-CMv6OM-WMs/view'
          target='_blank'
          title={
            window.innerWidth > window.innerHeight
              ? header.resume__button__text
              : ''
          }
        >
          {
            window.innerWidth < 1024
              ? header.resume__button__text
              : <i className="fa-solid fa-file-pdf"></i>
          }
        </a>
      </ul>
    </nav>
  );
}

Navigation.propTypes = { language__type: PropTypes.number }

export default Navigation;
