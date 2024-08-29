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

            <ProjectBox
              title="Weather Forecasting"
              img={ProjectImg}
              date="April 2024"
              description=" Developed a weather forecasting application using Python and Streamlit. Utilized OpenWeatherMap API to fetch real-time
 weather data & Implemented data visualization with Matplotlib for clear presentation. Applied machine learning techniques
 for weather prediction, enhancing accuracy. Collaborated with team members to refine algorithms and improve UI"
              techno1="Python"
              
              code="https://github.com/sujeetyadav021/weather_forecasting"
              //demo="Demo link"
              icon="💻"
            />

            <ProjectBox
              title="PeertoPeer Ride Sharing"
              img={ProjectImg}
              date="November 2023"
              description="Implemented decentralized ride-sharing platform using blockchain technology. Enabled secure and transparent transactions
 between riders and drivers. Developed smart contracts for automated payment and dispute resolution. Utilized Ethereum
 blockchain for decentralized consensus and data integrity. Enhanced user privacy and trust through blockchain encryption
 techniqu"
              techno1="Python"
              code="https://github.com/sujeetyadav021/p2p_ride_sharing"
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