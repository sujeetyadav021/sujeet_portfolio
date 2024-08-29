import React from 'react';
import ProjectBox from './ProjectBox';
import '../styles/Projects.scss';
import ProjectImg from '../images/working-emoji.png';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects__content">
          <p>Projects</p>
          <h3>Each project is a unique piece of development 🧩</h3>
          <div className="projects__grid">
            <ProjectBox
              title="Online Examination"
              img={ProjectImg}
              date="April 2023     "
              description=" Developed a comprehensive online examination platform using Python, Django. Designed an intuitive UI for easy navigation
 and enhanced user experience. Utilized MySQL database for efficient data storage and management. Ensured security
 measures to protect sensitive exam data and prevent unauthorized access. Demonstrated strong problem-solving skills and
 attention to detail in development. Implemented user authentication, exam scheduling, and result generation functionalities."
              techno1="Python"
              techno2="HTML"
              code="https://github.com/sujeetyadav021/online_examination"
              //demo="Demo link"
              icon="💻"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;