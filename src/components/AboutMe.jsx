import React from 'react';
import aboutImage from '../images/about-img.webp';
import '../styles/AboutMe.scss';

const AboutMe = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <img src={aboutImage} alt="About Me" />
      <p>DEVELOPER</p>
    </section>
  );
};

export default AboutMe;