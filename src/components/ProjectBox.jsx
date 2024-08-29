import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ProjectBox.scss';

const ProjectBox = ({ title, img, date, description, techno1, techno2, code, demo, icon }) => {
  return (
    <div className="project-box">
      <div className="project-box__img">
        <img src={img} alt={title} />
      </div>
      <div className="project-box__content">
        <h3 className="project-box__title">{icon} {title}</h3>
        <p className="project-box__date">{date}</p>
        <p className="project-box__description">{description}</p>
        <div className="project-box__tech-stack">
          <span>{techno1}</span>
          <span>{techno2}</span>
        </div>
        <div className="project-box__links">
          <a className="button-link" href={code} target="_blank" rel="noopener noreferrer">Code</a>
          <a className="button-link" href={demo} target="_blank" rel="noopener noreferrer">Demo</a>
        </div>
      </div>
    </div>
  );
};

ProjectBox.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techno1: PropTypes.string.isRequired,
  techno2: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ProjectBox;