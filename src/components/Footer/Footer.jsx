// Components
import Card from './Card/Card';

// Data
import data from '../../data';

// Node Modules
import PropTypes from 'prop-types';

// Styles
import './Footer.css';

const Footer = props => {
  const footer = data[props.language__type].footer;
  const card = data[0].footer__card;

  return (
    <footer className='footer' id='contact'>
      <div className='footer__container'>
        <div className='footer__content'>
          <div className='footer__header'>
            <h2 className='title'>{ footer.title }</h2>
            <p className='underline'></p>
          </div>

          <p className='footer__message'>{ footer.message }</p>

          <div className='footer__contact__links'>
            {
              card.link.map(( _, index ) => (
                <Card
                  key={ 'contact-card-' + ( index + 1 ) }
                  icon={ 'fa-brands ' + card.icon[index] }
                  label={ card.label[index] }
                  link={ card.link[index] }
                />
              ))
            }
          </div>

          <div className='footer__copyright'>
            <p className='footer__copyright__label'>
              { footer.copyright__label }
            </p>
            
            <p className='footer__copyright__signature'>
              { footer.copyright__signature }
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = { language__type: PropTypes.number }

export default Footer;