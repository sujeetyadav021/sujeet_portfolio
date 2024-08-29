import React from 'react';
import ProjectBox from './ProjectBox';
import '../styles/Projects.scss';
import ProjectImg from '../images/working-emoji.png';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects__content">
          <p>Portfolio</p>
          <h3>Each project is a unique piece of development 🧩</h3>
          <div className="projects__grid">
            <ProjectBox
              title="Projrct Name"
              img={ProjectImg}
              date="Date"
              description="Project Description"
              techno1="React"
              techno2="SCSS"
              code="Code link"
              demo="Demo link"
              icon="🚗 icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;