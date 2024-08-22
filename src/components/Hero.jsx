import React from 'react';
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';
import '../styles/Hero.scss';

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

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="content">
          <div className="hero-main">
            <div className="hero-text">
              <h1>Software Developer</h1>
              <h2>Hi, I'm Sujeet Yadav</h2>
              <p>
                Driven by curiosity and a passion for technology, I'm a budding software engineer excited to learn, grow, and make a meaningful impact.
              </p>
              <span>
                <a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/yadav-sujeet/">
                  <IconBrandLinkedin width={32} height={32} />
                </a>
                <a aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/sujeetyadav021/">
                  <IconBrandGithub width={32} height={32} />
                </a>
              </span>
            </div>
            <div className="hero-img"></div>
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
        </div>
      </div>
    </section>
  );
};

export default Hero;