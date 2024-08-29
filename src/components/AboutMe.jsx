import React from 'react';
import workingEmoji from '../images/working-emoji.png';
import '../styles/AboutMe.scss';

const skillsIcons = [
  { img: 'https://skillicons.dev/icons?i=java', id: 1 },
  { img: 'https://skillicons.dev/icons?i=html', id: 2 },
  { img: 'https://skillicons.dev/icons?i=css', id: 3 },
  { img: 'https://skillicons.dev/icons?i=js', id: 4 },
  { img: 'https://skillicons.dev/icons?i=ts', id: 5 },
  { img: 'https://skillicons.dev/icons?i=react', id: 6 },
  { img: 'https://skillicons.dev/icons?i=next', id: 7 },
  { img: 'https://skillicons.dev/icons?i=tailwind', id: 8 },
  { img: 'https://skillicons.dev/icons?i=scss', id: 9 },
  { img: 'https://skillicons.dev/icons?i=python', id: 10 },
  //{ img: 'https://skillicons.dev/icons?i=sql', id: 11 },
];

const AboutMe = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="img-side">
            <img src={workingEmoji} alt="About Me" className="img-side__main-img" />
          </div>
          <div className="text-side">
            <h3>About me</h3>
            <h4>
              Developer <br /> based in Mumbai, India 📍
            </h4>
            <p>
            Hi, I'm Sujeet Yadav, a driven software engineer with experience in building and maintaining software solutions. 
            I have honed my skills in Java,JavaScript, SQL, React, Angular, and Python through hands-on experience, where I collaborated with senior developers
             to design, develop, and implement robust applications. I am passionate about problem-solving and thrive in environments where 
             I can contribute to system improvements and UI enhancements. My experience includes working across the entire 
             software development lifecycle, from requirements gathering to deployment. I am eager to continue learning and to contribute to innovative projects that make a meaningful impact.
              <br /><br />
            </p>
          </div>
        </div>
      </div>
      <div className="skills">
            <p>Tech Stack</p>
            <div className="logos">
              <ul>
                {skillsIcons.map((icon) => (
                  <li key={icon.id}>
                    <img src={icon.img} alt="skill-icon" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
    </section>
  );
};

export default AboutMe;