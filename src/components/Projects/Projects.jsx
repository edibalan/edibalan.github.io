// Components
import Card from './Card/Card';

// Data
import data from '../../data';

// Node Modules
import PropTypes from 'prop-types';

// Styles
import './Projects.css';

const Projects = props => {
  const card = data[0].projects__card;
  const projects = data[props.language__type].projects;

  return (
    <section className='projects' id='projects'>
      <div className='projects__container'>
        <h2 className='projects__title'>{ projects.title }</h2>
        <div className='projects__content'>
          {
            card.link.map(( _, index ) => (
              <Card
                key={ 'project-card-' + ( index + 1 ) }
                animation={ card.animation[index] }
                github__link={ card.github__link[index] }
                image={ card.image[index] }
                index={ index }
                link={ card.link[index] }
                title={ projects.card__title[index] }
              />
            ))
          }
        </div>
      </div>
    </section>
  );
}

Projects.propTypes = { language__type: PropTypes.number }

export default Projects;