// Node Modules
import PropTypes from 'prop-types';

// Styles
import './Card.css';

// Utilities
import { clickSound } from '../../../utilities';

const Card = props => {
  return (
    <a href={ props.link } target='_blank' onClick={ clickSound }>
      <div className='card'>
        <p className='card__icon'> <i className={ props.icon }></i> </p>
        <p className='card__label'>{ props.label }</p>
      </div>
    </a>
  );
}

Card.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  link: PropTypes.string
}

export default Card;